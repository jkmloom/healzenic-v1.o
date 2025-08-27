import {Router} from "express"
import { cleanAccountController } from "../controller/user.controller.js";
const router  =  Router();

import verifyJWT from "../middleware/auth.middlewares.js";
router.route('/clean').post(verifyJWT,cleanAccountController)
export default router