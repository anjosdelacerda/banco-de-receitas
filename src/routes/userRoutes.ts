import { Router } from "express";
import { createUserController, listUserController } from "../controllers";

const user = Router()

user.get("/user", listUserController)
user.post("/user", createUserController)

export default user