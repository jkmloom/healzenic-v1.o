
import mongoose from "mongoose";

const initialreportSchema = new mongoose.Schema({
    avatar:{
        type:String
    },
    firstname:{
        type:String,
        required:true
    },
    middlename:{
        type:String
    },
    lastname:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["Male","Female","Not to say"],
        required:true
    },
    height:{
        type:String,
        required:true
    },
    weight:{
        type:String,
        required:true
    },
    PhysicalActivityLevel:{
        type:String,
        enum:["Sedentary","Lightly Active","Moderately Active","Highly Active"],
        required:true
    },
    DietaryPreference:{
        type:String,
        enum:["Vegetarian","Non-Vegetarian","Vegan"],
        required:true
    },
    SleepDuration:{
        type:String,
        required:true
    },
    SmokingHabits:{
        type:String,
        enum:["Yes","No"],
        required:true
    },
    AlcoholConsumption:{
        type:String,
        enum:["Yes","No"],
        required:true
    },
    KnowAllergies:{
        type:String,
        enum:["None" ,"Urticaria/ Hives","Allergetic to Ginger",
            "Allergetic to Cat","Allergetic to Red Meet","Others" 
        ],
        required:true
    },
    FamilyHistory:{
        type:String,
        enum:["None","Diabetes","Hypertension",
            "Blood Pressure","Others"
        ],
        required:true
    },

    WaistCircum:{
        type:String,
        
        required:true
    },
    StressLevel:{
        type:String,
       
        required:true
    },
    DailyWaterIntake:{
        type:String,
       
        required:true
    },
    userid:{
        type:String
    },
    bmi:{
        type:String
    },
    bmr:{
        type:String
    },
    whtr:{
        type:String
    },
    dailyWaterIntake:{
        type:String
    },
    sleepQuality:{
        type:String
    },
    calorieBurn:{
        type:String
    }


},{timestamps:true})

export const initialReport = mongoose.model("initialreport",initialreportSchema)

