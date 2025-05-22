import { Router } from "express";
import {
  createProfile,
  deleteProfileById,
  getProfiles,
  updateProfileById,
} from "../controller/profile";

export const profileRouter = Router();

profileRouter
  .post("/:id", createProfile as any)
  .get("/", getProfiles as any)
  .put("/:id", updateProfileById as any)
  .delete("/:id", deleteProfileById as any);
