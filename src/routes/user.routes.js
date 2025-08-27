import { Router } from "express";

const router  = Router()
import { userController } from "../controller/user.controller.js";
router.route('/register').post(userController)

export default router