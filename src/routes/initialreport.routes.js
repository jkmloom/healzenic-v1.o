import { Router } from "express";

const router  = Router();

import { initialReportController } from "../controller/initialreport.controller.js";
import { upload } from "../middleware/multer.middlewares.js";
router.route('/userDetails').post(
    upload.single('avatar'),
    initialReportController
    
)

export default router