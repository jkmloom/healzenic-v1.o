import { Router } from "express";
import { checkListController } from "../controller/checklist.controller.js";
const router = Router()

router.route('/checklist').post(checkListController)

export default router