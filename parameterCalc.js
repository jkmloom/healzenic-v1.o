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
    } else if (activityLevel.toLowerCase() === 'extra active') {
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
        return "12-17 hours";
    } else if (age >= 3 && age <= 5) {
        return "10-13 hours";
    } else if (age >= 6 && age <= 13) {
        return "9-11 hours";
    } else if (age >= 14 && age <= 17) {
        return "8-10 hours";
    } else if (age >= 18 && age <= 64) {
        return "7-9 hours";
    } else if (age >= 65) {
        return "7-9 hours";
    } else {
        return "Invalid age input";
    }
}


let calc = () => {


    let data = fetch('http://localhost:3207/getUserData')

    data.then((data) => {

        return data.json()
    }).then((data) => {


        //Retrieving data from the User Information Route
        let age = parseInt(data["currentUser"].age)
        let weight = parseInt(data["currentUser"].weight)
        let activityLevel = data["currentUser"].PhysicalActivityLevel
        let height = parseInt(data["currentUser"].height)
        let gender = data["currentUser"].gender
        let waist = data["currentUser"].WaistCircum
        let currentIntake = data["currentUser"].DailyWaterIntake

        //calculating BMI
        console.log(weight, height)
        let bmi = bmiCalc(height, weight)
        console.log(bmi.toFixed(1))

        //calculating bmr

        let bmr = bmrCalc(gender, weight, height, age)
        console.log(bmr.toFixed(1))

        //calculating WHTR
        let whtr = calculateWHtR(waist, height)
        console.log(whtr)


        //calculating daily water intake
        let waterIntake = suggestWaterIntake(weight, currentIntake)
        console.log(waterIntake)

        //calculating calorie burn
        let calorieBurn = calculateTDEE(bmr, activityLevel)
        console.log(calorieBurn)

        //recommending sleep
        let sleep = recommendSleepHours(age)
        console.log(sleep)
        
    })
}
// calc()
export default calc


