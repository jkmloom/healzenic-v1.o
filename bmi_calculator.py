# This program (Algorithm) is developed as a part of the project HealZenic
# Developer: Jatin Kumar Mehta

# BMI Calculator

def calculate_bmi(weight, height):
    """Calculate BMI using the formula: weight (kg) / height (m)^2."""
    try:
        bmi = weight / (height ** 2)
        return bmi
    except ZeroDivisionError:
        raise ValueError("Height must be greater than 0.")

def interpret_bmi(bmi):
    """Interpret BMI value based on standard categories."""
    if bmi < 18.5:
        return "Underweight"
    elif 18.5 <= bmi < 24.9:
        return "Normal weight"
    elif 25 <= bmi < 29.9:
        return "Overweight"
    else:
        return "Obesit"

def main():
    print("Welcome to the BMI Calculator!")
    try:
        # User inputs
        weight = float(input("Enter your weight in kilograms (kg): "))
        height = float(input("Enter your height in meters (m): "))

        # Calculate and interpret BMI
        bmi = calculate_bmi(weight, height)
        category = interpret_bmi(bmi)

        # Output results
        print(f"\nYour BMI is: {bmi:.2f}")
        print(f"Based on your BMI, you are categorized as: {category}")

    except ValueError as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
