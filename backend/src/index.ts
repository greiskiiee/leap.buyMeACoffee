import express, { json } from "express";
import { userRouter } from "./routes/user";
import { authRouter } from "./routes/auth";
import cors from "cors";
import { profileRouter } from "./routes/profile";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(json());

app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/profile", profileRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(8000, () => {
  console.log(`server running at http://localhost:8000`);
});
