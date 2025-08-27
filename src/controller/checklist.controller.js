import { checkList } from "../model/checklist.models.js";
import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"


const checkListController = asyncHandler(async(req,res,next)=>{


    console.log(req.cookies)
    const {practiseMeditationOrYoga,drinkEnoughWater,eatUnhealthFood, enoughSleep,socialInteraction,
        losingOrGainingWeight,doExercise
    } = req.body;

    console.log(req.cookies.accessToken)
    const decToken = await jwt.verify(req.cookies.accessToken,process.env.ACCESS_TOKEN_SECRET);

    const userId = await decToken._id;
    console.log(decToken)


    

    const checkListClient = await checkList.create({
        userid:userId,
        practiseMedAndYoga:practiseMeditationOrYoga,
        drinkEnoughWater:drinkEnoughWater,
        eatHealthyFood:eatUnhealthFood,
        enoughSleep:enoughSleep,
        socialInteraction:socialInteraction,
        loseOrGainWeight:losingOrGainingWeight,
        doExercise:doExercise,



    })
    let checkListCount = "";
   if(checkListClient)
   {
    checkListCount = "True"

   }
   


    const options = {
        httpOnly:true,
        secure:true
    }
    return res.cookie("checkList",checkListCount,options).json("All set")
  


})


export {checkListController}