import mongoose, { Schema } from "mongoose";
import { User } from "./user.models.js";

const checkListSchema = new Schema({
    userid:{
        type:String
    },
    practiseMedAndYoga:{
        type:String
    },
    drinkEnoughWater:{
        type:String
    },
    eatHealthyFood:
    {
        type:String
    },
    enoughSleep:{
        type:String
    },
    socialInteraction:{
        type:String
    },
    loseOrGainWeight:{
        type:String
    },
    doExercise:{
        type:String
    }



},{timestamps:true})


export const checkList = mongoose.model("checkList",checkListSchema)