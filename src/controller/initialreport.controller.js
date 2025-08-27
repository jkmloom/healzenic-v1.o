import asyncHandler from "../utils/asyncHandler.js";
import { initialReport } from "../model/initialreport.models.js";
import apiError from "../utils/apiError.js";
import uploadOnCloudinary from "../utils/cloudinary.js";
import jwt from "jsonwebtoken"
import apiResponse from "../utils/apiResponse.js";
import { misc } from "../model/misc.models.js";
const initialReportController = asyncHandler(async (req, res, next) => {

    const { firstname, middlename, lastname, age, gender, height, weight, PhysicalActivityLevel,
        DietaryPreference, SleepDuration, SmokingHabits, AlcoholConsumption, KnowAllergies, FamilyHistory,
        WaistCircum, StressLevel, DailyWaterIntake
    } = req.body

    let bmi, bmr, whtr, waterIntake, sleep, calorieBurn;

    function paramCalc() {
        //BMI Calculator: input height(cm) and weight (kg)
        function bmiCalc(height, weight) {

            let newHeight = height / 100;
            return (weight) / (newHeight * newHeight);

        }



        //BMR Calculator
        function bmrCalc(gender, weight, height, age) {

            if (gender == "Male") {
                return (10 * weight) + (6.25 * height) - (5 * age) + 5
            }
            else {
                return (10 * weight) + (6.25 * height) - (5 * age) - 161
            }

        }

        //WHTR Calc: Waist-To-Height Ratio
        function calculateWHtR(waist, heightCm) {
            try {
                const whtr = waist / heightCm;
                let category;

                if (whtr < 0.40) {
                    category = "Underweight (Possible health risks)";
                } else if (whtr >= 0.40 && whtr < 0.50) {
                    category = "Healthy weight (Low health risk)";
                } else if (whtr >= 0.50 && whtr < 0.60) {
                    category = "Overweight (Moderate health risk)";
                } else {
                    category = "Obese (High health risk)";
                }

                return { whtr: whtr.toFixed(2), category };
            } catch (error) {
                return { whtr: null, category: "Invalid input" };
            }
        }

        // Function to calculate TDEE based on BMR and activity level (CALORIE BURN)
        function calculateTDEE(bmr, activityLevel) {
            let tdee;
            if (activityLevel.toLowerCase() === 'sedentary') {
                tdee = bmr * 1.2;
            } else if (activityLevel.toLowerCase() === 'lightly active') {
                tdee = bmr * 1.375;
            } else if (activityLevel.toLowerCase() === 'moderately active') {
                tdee = bmr * 1.55;
            } else if (activityLevel.toLowerCase() === 'very active') {
                tdee = bmr * 1.725;
            } else if (activityLevel.toLowerCase() === 'high active') {
                tdee = bmr * 1.9;
            } else {
                return "Invalid activity level";
            }
            return tdee.toFixed(1)

        }



        function weightGoal(goal) {

            if (goal == "Weight Loss") {
                return tdec - 500
            }
            else if (goal == "Weight Maintenance") {
                return wtLoss = tdec
            }
            else {
                return tdec + 500
            }
        }


        //Water intake calculation

        function suggestWaterIntake(weight, currentIntake) {
            const recommendedIntake = weight / 30; // Water intake formula (liters per day)
            let suggestion;

            if (currentIntake < recommendedIntake) {
                suggestion = "You should drink more water.";
            } else if (currentIntake > recommendedIntake) {
                suggestion = "You should drink less water.";
            } else {
                suggestion = "Your water intake is just right. Keep it up!";
            }

            return { recommendedIntake: recommendedIntake.toFixed(2), suggestion };
        }

        //SLEEP
        function recommendSleepHours(age) {
            // Suggest recommended sleep hours based on age group
            if (age >= 0 && age <= 2) {
                return "12-17";
            } else if (age >= 3 && age <= 5) {
                return "10-13";
            } else if (age >= 6 && age <= 13) {
                return "9-11";
            } else if (age >= 14 && age <= 17) {
                return "8-10";
            } else if (age >= 18 && age <= 64) {
                return "7-9";
            } else if (age >= 65) {
                return "7-9";
            } else {
                return "Invalid age input";
            }
        }

        //calculating BMI
        bmi = bmiCalc(height, weight)
        console.log(bmi.toFixed(1))

        //calculating bmr

        bmr = bmrCalc(gender, weight, height, age)
        console.log(bmr.toFixed(1))

        //calculating WHTR
        let whtrOut = calculateWHtR(WaistCircum, height)
        whtr = whtrOut["whtr"];



        //calculating daily water intake
        let waterIntakeOut = suggestWaterIntake(weight, DailyWaterIntake)
        waterIntake = waterIntakeOut["recommendedIntake"]

        //calculating calorie burn
        calorieBurn = calculateTDEE(bmr, PhysicalActivityLevel)
        console.log(calorieBurn)

        //recommending sleep
        sleep = recommendSleepHours(age)
        console.log(sleep)


    }

    paramCalc()
    const avatarInfo = await uploadOnCloudinary(req.file.path)

    const avatarUrl = avatarInfo.url;

    const accessToken = req.cookies.accessToken;
    console.log(accessToken)
    const decodedToken = await jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)

    const saveUserId = decodedToken.userid

    if ([firstname, lastname, age, gender, height, weight, PhysicalActivityLevel,
        DietaryPreference, SleepDuration, SmokingHabits, AlcoholConsumption, KnowAllergies, FamilyHistory,
        WaistCircum, StressLevel, DailyWaterIntake].some((field) => field?.trim() == "")) {
        throw new apiError(400, "Field is Must!")
    }



    const userReport = await initialReport.create({

        avatar: avatarUrl,
        firstname: firstname,
        middlename: middlename,
        lastname: lastname,
        age: age,
        gender: gender,
        height: height,
        weight: weight,
        PhysicalActivityLevel: PhysicalActivityLevel,
        DietaryPreference: DietaryPreference,
        SleepDuration: SleepDuration,
        SmokingHabits: SmokingHabits,
        AlcoholConsumption: AlcoholConsumption,
        KnowAllergies: KnowAllergies,
        FamilyHistory: FamilyHistory,
        WaistCircum: WaistCircum,
        StressLevel: StressLevel,
        DailyWaterIntake: DailyWaterIntake,
        userid: saveUserId,
        bmi: bmi,
        bmr: bmr,
        whtr: whtr,
        dailyWaterIntake: waterIntake,
        sleepQuality: sleep,
        calorieBurn: calorieBurn
    })
    console.log(userReport)
    req.user = userReport;
    // console.log(req.user)
    res.redirect('/homepage')
    // res.status(200).json(new apiResponse(200, "User Report Saved Successfully", userReport))

})



/*
let date= new Date();
// console.log(date.toDateString())

let dateRe = date.getDate()
let dayRe = date.toDateString().slice(0,3)
console.log(dayRe)


let weekTarik = []
if(dayRe.toLocaleLowerCase()=="sun")
    {
   weekTarik[0] = dateRe;
   weekTarik[1] = dateRe+1;
   weekTarik[2] = dateRe+2;
   weekTarik[3] = dateRe+3;
   weekTarik[4] = dateRe+4;
   weekTarik[5] = dateRe+5;
   weekTarik[6] = dateRe+6;
   console.log("Week",weekTarik)
}
console.log(weekTarik)


const miscCont = async(req,res,next)=>{


    let resp  =await misc.create({
        
       sun:weekTarik[0],
       mon:weekTarik[1],
       tue:weekTarik[2],
       wed:weekTarik[3],
       thu:weekTarik[4],
       fri:weekTarik[5],
       sat:weekTarik[6]
    
    })
    console.log(resp)

    res.json(resp)
    
    }
if(dayRe.toLocaleLowerCase()=="sun")
{

    miscCont()
}
    */
export { initialReportController }