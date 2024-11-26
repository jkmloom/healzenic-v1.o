# This program (Algorithm) is developed as a part of the project HealZenic
# Developer: Jatin Kumar Mehta

# Calorie Burn Calculator based on BMR and Activity Level

def calculate_bmr(weight, height, age, gender):
    """
    Calculate Basal Metabolic Rate (BMR) using the Mifflin-St Jeor Equation.
    Parameters:
        weight (float): Weight in kilograms
        height (float): Height in centimeters
        age (int): Age in years
        gender (str): Gender ('male' or 'female')
    Returns:
        float: BMR value in calories per day
    """
    if gender.lower() == 'male':
        bmr = 10 * weight + 6.25 * height - 5 * age + 5
    elif gender.lower() == 'female':
        bmr = 10 * weight + 6.25 * height - 5 * age - 161
    else:
        raise ValueError("Invalid gender. Please enter 'male' or 'female'.")
    return bmr

def calculate_calories_burned(bmr, activity_level):
    """
    Estimate daily calorie burn based on BMR and activity level.
    Parameters:
        bmr (float): Basal Metabolic Rate
        activity_level (str): Activity level ('sedentary', 'lightly active', 'moderately active', 'very active')
    Returns:
        float: Estimated daily calorie burn
    """
    if activity_level == "sedentary":
        calories_burned = bmr * 1.2
    elif activity_level == "lightly active":
        calories_burned = bmr * 1.375
    elif activity_level == "moderately active":
        calories_burned = bmr * 1.55
    elif activity_level == "very active":
        calories_burned = bmr * 1.725
    else:
        raise ValueError("Invalid activity level. Please enter 'sedentary', 'lightly active', 'moderately active', or 'very active'.")
    return calories_burned

def main():
    print("Welcome to the Calorie Burn Calculator!")
    try:
        # User inputs
        weight = float(input("Enter your weight in kilograms (kg): "))
        height = float(input("Enter your height in centimeters (cm): "))
        age = int(input("Enter your age in years: "))
        gender = input("Enter your gender (male/female): ").strip().lower()

        # Calculate BMR
        bmr = calculate_bmr(weight, height, age, gender)

        # Get activity level and calculate calories burned
        activity_level = input("Enter your activity level (sedentary, lightly active, moderately active, very active): ").strip().lower()
        calories_burned = calculate_calories_burned(bmr, activity_level)

        # Output results
        print(f"\nYour Basal Metabolic Rate (BMR) is: {bmr:.2f} calories/day.")
        print(f"Your estimated daily calorie burn based on your activity level is: {calories_burned:.2f} calories/day.")

    except ValueError as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
