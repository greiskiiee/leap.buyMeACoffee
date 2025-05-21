import { Request, Response } from "express";
import { prisma } from "..//utils/prisma";
import bcrypt from "bcrypt";

export const createUser = async (req: Request, res: Response) => {
  const { email, username, password } = req.body;
  const hashedPass = await bcrypt.hash(password, 10);

  try {
    const response = await prisma.user.create({
      data: {
        email: email,
        username: username,
        password: hashedPass,
      },
    });

    return res.send({ success: true, message: response });
  } catch (error) {
    console.log(error);
    return res.send({ error: error });
  }
};

export const getUsers = async (_: never, res: Response) => {
  try {
    const response = await prisma.user.findMany();

    return res.send({ success: true, message: response });
  } catch (error) {
    console.log(error);
    return res.send({ error: error });
  }
};

export const updateUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { email, username, password } = req.body;
  const hashedPass = await bcrypt.hash(password, 10);
  try {
    const response = await prisma.user.update({
      where: { id: Number(id) },
      data: { email: email, username: username, password: hashedPass },
    });

    return res.send({ success: true, message: response });
  } catch (error) {
    console.log(error);
    return res.send({ error: error });
  }
};

export const deleteUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const response = await prisma.user.delete({
      where: { id: Number(id) },
    });

    return res.send({ success: true, message: "user deleted" });
  } catch (error) {
    console.log(error);
    return res.send({ error: error });
  }
};
