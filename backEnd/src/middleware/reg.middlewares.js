import asyncHandler from "../utils/asyncHandler.js";
import { initialReport } from "../model/initialreport.models.js";
import jwt from "jsonwebtoken"
const regChecker = asyncHandler(async(req,res,next)=>{
    
    const accessToken = req.cookies.accessToken;
 

   const decodedToken =  jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET)
   console.log(decodedToken.userid)

   const doc = await initialReport.findOne({"userid":decodedToken.userid});



   if(!doc) { res.redirect('/reportpage');  }
   console.log(doc)
   next()
   
})

export default regChecker