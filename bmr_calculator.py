# This program (Algorithm) is developed as a part of the project HealZenic
# Developer: Jatin Kumar Mehta

# BMR Calculator with Evaluation

def calculate_bmr(weight, height, age, gender):
    """Calculate BMR using the Mifflin-St Jeor Equation."""
    if gender.lower() == "male":
        bmr = 10 * weight + 6.25 * height - 5 * age + 5
    elif gender.lower() == "female":
        bmr = 10 * weight + 6.25 * height - 5 * age - 161
    else:
        raise ValueError("Invalid gender. Please enter 'male' or 'female'.")
    return bmr

def evaluate_bmr(bmr, weight, height, age, gender):
    """Evaluate if the calculated BMR is within a healthy range."""
    # Typical BMR ranges based on gender
    if gender.lower() == "male":
        normal_range = (1600, 2400)
    elif gender.lower() == "female":
        normal_range = (1200, 2000)
    else:
        raise ValueError("Invalid gender. Please enter 'male' or 'female'.")

    # Check if the BMR falls within the range
    if normal_range[0] <= bmr <= normal_range[1]:
        return f"Your BMR of {bmr:.2f} calories/day is within the typical range for your profile. Keep it up!"
    elif bmr < normal_range[0]:
        return f"Your BMR of {bmr:.2f} calories/day is below the typical range. Consider consulting a health professional or reviewing your activity and dietary habits."
    else:
        return f"Your BMR of {bmr:.2f} calories/day is above the typical range. This might be due to higher muscle mass or other factors. Make sure it aligns with your health goals."

def main():
    print("Welcome to the BMR Calculator!")
    try:
        # User inputs
        weight = float(input("Enter your weight in kilograms: "))
        height = float(input("Enter your height in centimeters: "))
        age = int(input("Enter your age in years: "))
        gender = input("Enter your gender (male/female): ").strip().lower()

        # Calculate and evaluate BMR
        bmr = calculate_bmr(weight, height, age, gender)
        evaluation = evaluate_bmr(bmr, weight, height, age, gender)

        # Output results
        print(f"\nYour Basal Metabolic Rate (BMR) is: {bmr:.2f} calories/day.")
        print(evaluation)

    except ValueError as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
