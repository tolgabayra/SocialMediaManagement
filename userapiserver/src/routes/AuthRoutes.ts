import express from "express"
import { AuthController } from "../controllers/AuthController";

const router = express.Router();
const controller = new AuthController

router.post("/register", controller.RegisterUser)
router.post("/login", controller.LoginUser)
router.post("/logout", controller.Logout)

export default router