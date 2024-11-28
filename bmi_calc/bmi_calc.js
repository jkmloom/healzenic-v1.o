// # Code under project Healzenic
// # Developer: Jatin Kumar Mehta
// # Team Members (Sharing Code): Saurabh Kumar Mishra & Pankaj Kumar Ray

function calculateBMI(weight, heightCm) {
    try {
        const heightM = heightCm / 100; // Convert height from cm to meters
        const bmi = weight / (heightM ** 2);
        let category;

        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi >= 18.5 && bmi < 25) {
            category = "Normal weight";
        } else if (bmi >= 25 && bmi < 30) {
            category = "Overweight";
        } else {
            category = "Overweight, Need to see a doctor";
        }

        return { bmi: bmi.toFixed(2), category };
    } catch (error) {
        return { bmi: null, category: "Invalid input" };
    }
}

// Input from the user
const weight = parseFloat(prompt("Enter your weight (kg):"));
const heightCm = parseFloat(prompt("Enter your height (cm):"));

// Calculate BMI
const result = calculateBMI(weight, heightCm);

// Display the result
if (result.bmi !== null) {
    alert(`Your BMI is: ${result.bmi}`);
    alert(`Category: ${result.category}`);
} else {
    alert("Invalid input. Please ensure weight and height are correct.");
}
