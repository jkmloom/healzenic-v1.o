// # Code under project Healzenic
// # Developer: Jatin Kumar Mehta
// # Team Members (Sharing Code): Saurabh Kumar Mishra & Pankaj Kumar Ray

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

// Input from the user
const weight = parseFloat(prompt("Enter your weight (kg):"));
const currentIntake = parseFloat(prompt("Enter the amount of water you currently drink per day (liters):"));

// Suggest water intake
const result = suggestWaterIntake(weight, currentIntake);

// Display the result
alert(`Recommended water intake: ${result.recommendedIntake} liters/day`);
alert(result.suggestion);
