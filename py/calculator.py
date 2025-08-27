import numpy as np

def get_user_input():
    """
    Gathers and validates user input for health calculations.

    Returns:
        tuple: A tuple containing weight, height, age, gender, and activity level.
    """
    while True:
        try:
            weight_kg = float(input("Enter your weight in kilograms (kg): "))
            if weight_kg <= 0:
                print("Weight must be a positive number.")
                continue
            break
        except ValueError:
            print("Invalid input. Please enter a number for weight.")

    while True:
        try:
            height_cm = float(input("Enter your height in centimeters (cm): "))
            if height_cm <= 0:
                print("Height must be a positive number.")
                continue
            break
        except ValueError:
            print("Invalid input. Please enter a number for height.")

    while True:
        try:
            age = int(input("Enter your age in years: "))
            if age <= 0:
                print("Age must be a positive number.")
                continue
            break
        except ValueError:
            print("Invalid input. Please enter a whole number for age.")

    while True:
        gender = input("Enter your gender (male/female): ").lower()
        if gender in ['male', 'female']:
            break
        else:
            print("Invalid input. Please enter 'male' or 'female'.")

    while True:
        print("\nSelect your activity level:")
        print("1: Sedentary (little or no exercise)")
        print("2: Lightly active (light exercise/sports 1-3 days/week)")
        print("3: Moderately active (moderate exercise/sports 3-5 days/week)")
        print("4: Active (hard exercise/sports 6-7 days a week)")
        print("5: Very active (very hard exercise/physical job & exercise 2x/day)")
        
        try:
            choice = int(input("Enter the number for your activity level (1-5): "))
            if 1 <= choice <= 5:
                activity_levels = {
                    1: 1.2,
                    2: 1.375,
                    3: 1.55,
                    4: 1.725,
                    5: 1.9
                }
                activity_level = activity_levels[choice]
                break
            else:
                print("Invalid choice. Please enter a number between 1 and 5.")
        except ValueError:
            print("Invalid input. Please enter a number.")
            
    return weight_kg, height_cm, age, gender, activity_level

def calculate_bmi(weight_kg, height_cm):
    """
    Calculates Body Mass Index (BMI).

    Args:
        weight_kg (float): Weight in kilograms.
        height_cm (float): Height in centimeters.

    Returns:
        float: The calculated BMI value.
    """
    if height_cm == 0:
        return 0
    height_m = height_cm / 100
    # Using numpy.power for the calculation as requested
    bmi = weight_kg / np.power(height_m, 2)
    return bmi

def calculate_water_intake(weight_kg):
    """
    Calculates recommended daily water intake based on weight.
    Recommendation: 30-35 ml of water per kg of body weight. We use an average of 32.5 ml.

    Args:
        weight_kg (float): Weight in kilograms.

    Returns:
        float: Recommended water intake in liters.
    """
    water_ml = weight_kg * 32.5
    return water_ml / 1000  # Convert ml to liters

def calculate_calories_to_burn(weight_kg, height_cm, age, gender, activity_level):
    """
    Calculates Total Daily Energy Expenditure (TDEE) using the Mifflin-St Jeor equation.
    This represents the total calories your body burns in a day.

    Args:
        weight_kg (float): Weight in kilograms.
        height_cm (float): Height in centimeters.
        age (int): Age in years.
        gender (str): 'male' or 'female'.
        activity_level (float): The activity multiplier.

    Returns:
        float: The total daily calories burned (TDEE).
    """
    # Basal Metabolic Rate (BMR) calculation using Mifflin-St Jeor Equation
    if gender == 'male':
        bmr = (10 * weight_kg) + (6.25 * height_cm) - (5 * age) + 5
    else:  # female
        bmr = (10 * weight_kg) + (6.25 * height_cm) - (5 * age) - 161
    
    tdee = bmr * activity_level
    return tdee

def interpret_bmi(bmi):
    """Provides a standard interpretation of a BMI value."""
    if bmi < 18.5:
        return "Underweight"
    elif 18.5 <= bmi < 24.9:
        return "Normal weight"
    elif 25 <= bmi < 29.9:
        return "Overweight"
    else:
        return "Obesity"

def main():
    """
    Main function to run the health calculator.
    """
    print("--- Health & Fitness Calculator ---")
    weight, height, age, gender, activity = get_user_input()

    # --- Calculations ---
    bmi = calculate_bmi(weight, height)
    water = calculate_water_intake(weight)
    calories = calculate_calories_to_burn(weight, height, age, gender, activity)
    bmi_category = interpret_bmi(bmi)

    # --- Display Results ---
    print("\n---------------- RESULTS ----------------")
    print(f"Your BMI is: {bmi:.2f} ({bmi_category})")
    print(f"Recommended Daily Water Intake: {water:.2f} liters")
    print(f"Estimated Daily Maintenance Calories: {calories:.0f} kcal")
    print("-----------------------------------------")
    print("\nDisclaimer: These are estimates. Consult with a healthcare professional for personalized advice.")


if __name__ == "__main__":
    main()
