import { Router } from "express";
import {
  createUser,
  deleteUserById,
  getUsers,
  updateUserById,
} from "../controller/user";

export const userRouter = Router();

userRouter
  .post("/", createUser as any)
  .get("/", getUsers as any)
  .put("/:id", updateUserById as any)
  .delete("/:id", deleteUserById as any);
