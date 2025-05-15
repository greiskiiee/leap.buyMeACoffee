import { Router } from "express";
import { checkUser, login, logout, signUp } from "../controller/auth";

export const authRouter = Router();

authRouter
  .post("/check", checkUser as any)
  .post("/login", login as any)
  .post("/signup", signUp as any)
  .post("/logout", logout as any);
