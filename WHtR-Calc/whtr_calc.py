# This program (Algorithm) is developed as a part of the project HealZenic
# Developer: Jatin Kumar Mehta

# WHtR Calculator

def calculate_whtr(waist, height):
    """Calculate WHtR using the formula: waist circumference (cm) / height (cm)."""
    try:
        whtr = waist / height
        return whtr
    except ZeroDivisionError:
        raise ValueError("Height must be greater than 0.")

def interpret_whtr(whtr, gender):
    """Interpret WHtR value based on gender-specific health risk thresholds."""
    if gender.lower() == "male":
        if whtr < 0.35:
            return "Underweight"
        elif 0.35 <= whtr < 0.43:
            return "Healthy"
        elif 0.43 <= whtr < 0.53:
            return "Increased risk of health issues"
        elif 0.53 <= whtr < 0.58:
            return "High risk of health issues"
        else:
            return "Very high risk of health issues"
    elif gender.lower() == "female":
        if whtr < 0.35:
            return "Underweight"
        elif 0.35 <= whtr < 0.42:
            return "Healthy"
        elif 0.42 <= whtr < 0.49:
            return "Increased risk of health issues"
        elif 0.49 <= whtr < 0.54:
            return "High risk of health issues"
        else:
            return "Very high risk of health issues"
    else:
        raise ValueError("Invalid gender. Please enter 'male' or 'female'.")

def main():
    print("Welcome to the Waist-to-Height Ratio (WHtR) Calculator!")
    try:
        # User inputs
        waist = float(input("Enter your waist circumference in centimeters (cm): "))
        height = float(input("Enter your height in centimeters (cm): "))
        gender = input("Enter your gender (male/female): ").strip().lower()

        # Calculate and interpret WHtR
        whtr = calculate_whtr(waist, height)
        category = interpret_whtr(whtr, gender)

        # Output results
        print(f"\nYour Waist-to-Height Ratio (WHtR) is: {whtr:.2f}")
        print(f"Based on your WHtR, you are categorized as: {category}")

    except ValueError as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
