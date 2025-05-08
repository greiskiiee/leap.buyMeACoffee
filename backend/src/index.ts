import express, { json } from "express";
import { userRouter } from "./routes/user";

const app = express();

app.use(json());

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(8000, () => {
  console.log(`server running at http://localhost:8000`);
});
