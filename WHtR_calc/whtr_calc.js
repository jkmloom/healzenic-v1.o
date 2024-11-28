// # Code under project Healzenic
// # Developer: Jatin Kumar Mehta
// # Team Members (Sharing Code): Saurabh Kumar Mishra & Pankaj Kumar Ray

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

// Input from the user
const waist = parseFloat(prompt("Enter your waist circumference (cm):"));
const heightCm = parseFloat(prompt("Enter your height (cm):"));

// Calculate WHtR
const result = calculateWHtR(waist, heightCm);

// Display the result
if (result.whtr !== null) {
    alert(`Your WHtR is: ${result.whtr}`);
    alert(`Risk Category: ${result.category}`);
} else {
    alert("Invalid input. Please ensure waist circumference and height are correct.");
}
