import express from "express"
import { UserController } from "../controllers/UserController";

const router = express.Router();
const controller = new UserController


router.post("/", controller.createUser)
router.get("/", controller.getAllUser)
router.delete("/:id", controller.deleteUser)
router.put("/:id", controller.updateUser)
router.get("/:id", controller.getUser)
export default router
