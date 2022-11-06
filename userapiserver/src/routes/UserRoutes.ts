import express from "express"
import { UserController } from "../controllers/UserController";

const router = express.Router();
const controller = new UserController


router.post("/", controller.createUser)

export default router
