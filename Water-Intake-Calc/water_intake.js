// ** Ignore this file! **
// This program (Algorithm) is developed as a part of the project HealZenic
// Developer: Jatin Kumar Mehta

// Daily Water Intake Calculator

function calculateWaterIntake(weight, activityLevel, isHotClimate) {
    // Base water intake formula: 35 mL per kg of body weight
    const baseWater = (weight * 35) / 1000; // Convert to liters
  
    // Adjustments based on activity level
    let activityAdjustment = 0;
    switch (activityLevel.toLowerCase()) {
      case "low":
        activityAdjustment = 0;
        break;
      case "moderate":
        activityAdjustment = 0.5; // Add 0.5 liters for moderate activity
        break;
      case "high":
        activityAdjustment = 1.0; // Add 1.0 liters for high activity
        break;
      default:
        throw new Error("Invalid activity level. Please enter 'low', 'moderate', or 'high'.");
    }
  
    // Adjustment for hot climate
    const climateAdjustment = isHotClimate ? 0.5 : 0;
  
    // Total water intake
    return baseWater + activityAdjustment + climateAdjustment;
  }
  
  function main() {
    console.log("Welcome to the Daily Water Intake Calculator!");
  
    try {
      // Get user inputs
      const weight = parseFloat(prompt("Enter your weight in kilograms (kg):"));
      if (isNaN(weight) || weight <= 0) {
        throw new Error("Invalid weight. Please enter a positive number.");
      }
  
      const activityLevel = prompt("Enter your activity level (low, moderate, high):").toLowerCase();
      if (!["low", "moderate", "high"].includes(activityLevel)) {
        throw new Error("Invalid activity level. Please enter 'low', 'moderate', or 'high'.");
      }
  
      const isHotClimate = prompt("Are you in a hot climate? (yes/no):").toLowerCase() === "yes";
  
      // Calculate water intake
      const dailyWater = calculateWaterIntake(weight, activityLevel, isHotClimate);
  
      // Display the result
      console.log(`\nYour recommended daily water intake is: ${dailyWater.toFixed(2)} liters.`);
      alert(`Your recommended daily water intake is: ${dailyWater.toFixed(2)} liters.`);
  
    } catch (error) {
      console.error(`Error: ${error.message}`);
      alert(`Error: ${error.message}`);
    }
  }
  
  // Run the program
  main();
  
