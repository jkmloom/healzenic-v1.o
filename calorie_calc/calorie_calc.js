// # Code under project Healzenic
// # Developer: Jatin Kumar Mehta
// # Team Members (Sharing Code): Saurabh Kumar Mishra & Pankaj Kumar Ray

// Function to calculate BMR based on gender, weight, height, and age
function calculateBMR(weight, height, age, gender) {
    let bmr;
    if (gender.toLowerCase() === 'male') {
        // Mifflin-St Jeor Equation for Men
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender.toLowerCase() === 'female') {
        // Mifflin-St Jeor Equation for Women
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    } else {
        return "Invalid gender";
    }
    return bmr;
}

// Function to calculate TDEE based on BMR and activity level
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
    return tdee;
}

// Example inputs: Weight in kg, Height in cm, Age in years, Gender (male/female), Activity level
let weight = 70; // kg
let height = 175; // cm
let age = 30; // years
let gender = 'male'; // 'male' or 'female'
let activityLevel = 'moderately active'; // Activity level

// Calculate BMR
let bmr = calculateBMR(weight, height, age, gender);
console.log(`BMR: ${bmr} calories/day`);

// Calculate TDEE
let tdee = calculateTDEE(bmr, activityLevel);
console.log(`TDEE (Total Daily Energy Expenditure): ${tdee} calories/day`);
