import { Router } from "express";

const router  = Router()
import { signinController } from "../controller/user.controller.js";

router.route('/login').post(signinController)

export default router