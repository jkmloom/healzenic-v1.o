import mongoose from "mongoose";

const miscSchema = new mongoose.Schema({
    sun:{
        type:Number,
    },
    mon:{
        type:Number,
    },
tue:{
        type:Number,
    },
wed:{
        type:Number,
    },
    thu:{
        type:Number,
    },
    fri:{
        type:Number,
    },
    sat:{
        type:Number,
    },
},{timestamps:true})


export const misc = mongoose.model("misc",miscSchema)