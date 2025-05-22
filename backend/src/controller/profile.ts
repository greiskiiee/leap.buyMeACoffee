import { Request, Response } from "express";
import { prisma } from "..//utils/prisma";

export const createProfile = async (req: Request, res: Response) => {
  const { name, about, socialMediaURL, avatarImage } = req.body;
  const userId = req.params;
  try {
    const response = await prisma.profile.create({
      data: {
        userId,
        name,
        about,
        socialMediaURL: `https://${socialMediaURL.replace(/^https?:\/\//, "")}`,
        backgroundImage: "",
        successMessage: "",
        avatarImage: avatarImage,
      },
    });

    return res.send({ success: true, message: response });
  } catch (error) {
    console.log(error);
    return res.send({ error: error });
  }
};

export const getProfiles = async (_: never, res: Response) => {
  try {
    const response = await prisma.profile.findMany();

    return res.send({ success: true, message: response });
  } catch (error) {
    console.log(error);
    return res.send({ error: error });
  }
};

export const updateProfileById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    name,
    about,
    socialMediaURL,
    avatarImage,
    backgroundImage,
    successMessage,
  } = req.body;

  try {
    const response = await prisma.profile.update({
      where: { id: Number(id) },
      data: {
        name: name,
        about: about,
        socialMediaURL: socialMediaURL,
        backgroundImage: "",
        successMessage: "",
        avatarImage: avatarImage,
      },
    });

    return res.send({ success: true, message: response });
  } catch (error) {
    console.log(error);
    return res.send({ error: error });
  }
};

export const deleteProfileById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const response = await prisma.profile.delete({
      where: { id: Number(id) },
    });

    return res.send({ success: true, message: "profile deleted" });
  } catch (error) {
    console.log(error);
    return res.send({ error: error });
  }
};
