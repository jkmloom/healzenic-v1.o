import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

dotenv.config({
    path:"/.env"
})

app.use(express.json({limit:"17KB"}))
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())



import userRouter from "../src/routes/user.routes.js"
import signinRouter from "../src/routes/signin.routes.js"
import intialreportRouter from "../src/routes/initialreport.routes.js"
import deleteaccountRouter from "../src/routes/deleteaccount.routes.js"
import checkListRoute from "../src/routes/homepage.routes.js"

import { deleteaccountController } from "./controller/user.controller.js";
import { getUserData } from "./controller/user.controller.js";
import { refreshAccessToken } from "./controller/user.controller.js";

app.use('/signup',userRouter);
app.use('/signin',signinRouter);
app.use('/reportpage',intialreportRouter);
app.use('/deleteaccount',deleteaccountRouter);
app.use('/home',checkListRoute)

app.post('/delete',deleteaccountController)
app.get('/getUserData',getUserData)

app.get('/refresh',refreshAccessToken)




// Dummy
import { checkList } from "./model/checklist.models.js";
import { checkListController } from "./controller/checklist.controller.js";
import jwt from "jsonwebtoken"

/*
app.get('/',async (req,res,next)=>{

    const decodedToken =await jwt.verify(req.cookies.accessToken,process.env.ACCESS_TOKEN_SECRET);

    console.log(decodedToken._id)

    const docs = await checkList.find({"userid":decodedToken._id}).countDocuments()

    console.log(docs)

    
})
*/
export {app}
