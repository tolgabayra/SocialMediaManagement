import express from "express"
import { UserController } from "../controllers/UserController";
import { VerifyMiddleware } from "../middleware/VerifyMiddleware";
const router = express.Router();

const controller = new UserController
const verify = new VerifyMiddleware

router.post("/", controller.createUser)
router.get("/",verify.VerifyAuthToken ,controller.getAllUser)
router.delete("/:id", controller.deleteUser)
router.put("/:id", controller.updateUser)
router.get("/:id", controller.getUser)
export default router
