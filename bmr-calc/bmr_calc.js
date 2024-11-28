// # Code under project Healzenic
// # Developer: Jatin Kumar Mehta
// # Team Members (Sharing Code): Saurabh Kumar Mishra & Pankaj Kumar Ray

function calculateBMR(gender, weight, height, age) {
    let bmr;
    
    if (gender.toLowerCase() === 'male') {
        // BMR for Men
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender.toLowerCase() === 'female') {
        // BMR for Women
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    } else {
        return "Invalid gender input. Please enter 'male' or 'female'.";
    }
    
    return bmr;
}

// Input data
let gender = prompt("Enter gender (male/female): ").trim().toLowerCase();
let weight = parseFloat(prompt("Enter weight in kg: "));
let height = parseFloat(prompt("Enter height in cm: "));
let age = parseInt(prompt("Enter age in years: "), 10);

// Calculate BMR
let bmr = calculateBMR(gender, weight, height, age);
alert(`Your BMR is: ${bmr} calories/day`);
