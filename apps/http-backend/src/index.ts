import express from "express";
import jwt from "jsonwebtoken";
import { middleware } from "./middleware";
import { JWT_SECRET } from "@repo/backend-common/config";
import { CreateUser, SignInSchema, CreateRoomSchema } from "@repo/common/types";


const app = express();

app.post("/signup", (req, res) => {
  const data = CreateUser.safeParse(req.body);
  if (!data.success) {
    res.status(400).json({ message: "Invalid data" })
    return
  }
  res.json({ userId: "123", message: "User created" });
});

app.post("/signin", (req, res) => {
  const data = SignInSchema.safeParse(req.body);
  if (!data.success) {
    res.status(400).json({ message: "Invalid data" })
    return
  }

  const userId = 1;
  const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

app.post("/room", middleware, (req, res) => {
  const data = CreateRoomSchema.safeParse(req.body);
  if (!data.success) {
    res.status(400).json({ message: "Invalid data" })
    return
  }
  res.json({ message: "Room created" });
});

app.listen(3001);
