import { Request, Response } from "express";
import { prisma } from "../utils/prisma";
import bcrypt, { compareSync } from "bcrypt";
import jwt from "jsonwebtoken";
import { secret_key } from "../utils/env";

export const checkUser = async (req: Request, res: Response) => {
  const { username } = req.body;
  try {
    const oldUser = await prisma.user.findUnique({
      where: { username },
    });
    if (oldUser) {
      return res.send({ message: "Username already taken" }).end();
    }
    return res.send({ message: "Username available" }).end();
  } catch (error) {
    console.log(error);
    return res.send({ success: true, error: error }).end();
  }
};

export const signUp = async (req: Request, res: Response) => {
  const { email, username, password } = req.body;
  const hashedPass = bcrypt.hashSync(password, 10);

  try {
    const response = await prisma.user.create({
      data: { email: email, username: username, password: hashedPass },
    });

    return res.send({ success: true, message: response });
  } catch (error) {
    console.log(error);
    return res.send({ error: error });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!user) return res.send({ message: "user not found" });

    const isMatch = compareSync(password, user.password);

    if (!isMatch) return res.send({ message: "Invalid email or password" });

    const token = jwt.sign({ ...user }, secret_key as any, {
      expiresIn: 60 * 1000 * 60,
    });

    return res
      .cookie("token", token, { maxAge: 60 * 1000 * 10, secure: false })
      .send({ success: true, message: "logged in" });
  } catch (error) {
    console.log(error);
    return res.send({ error: error });
  }
};
