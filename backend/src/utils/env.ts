import { config } from "dotenv";

config();

export const secret_key = process.env.SECRET_KEY;
