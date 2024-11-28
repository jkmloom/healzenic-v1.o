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

// Input from the user
const age = parseInt(prompt("Enter your age:"));

// Get sleep recommendation
const sleepHours = recommendSleepHours(age);

// Display the result
alert(`Recommended sleep hours for age ${age}: ${sleepHours}`);
