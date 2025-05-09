import express, { json } from "express";
import { userRouter } from "./routes/user";
import { authRouter } from "./routes/auth";

const app = express();

app.use(json());

app.use("/user", userRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(8000, () => {
  console.log(`server running at http://localhost:8000`);
});
