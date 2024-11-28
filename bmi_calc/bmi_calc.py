def calculate_bmi(weight, height_cm):
    """Calculate BMI and interpret its category, with height in centimeters."""
    try:
        height_m = height_cm / 100  # Convert height from cm to meters
        bmi = weight / (height_m ** 2)
        if bmi < 18.5:
            category = "Underweight"
        elif 18.5 <= bmi < 25:
            category = "Normal weight"
        elif 25 <= bmi < 30:
            category = "Overweight"
        else:
            category = "Overweight, Need to see a doctor"
        return round(bmi, 2), category
    except (ZeroDivisionError, ValueError):
        return None, "Invalid input"

# Input from the user
weight = float(input("Enter your weight (kg): "))
height_cm = float(input("Enter your height (cm): "))

# Calculate BMI
bmi, category = calculate_bmi(weight, height_cm)

# Display the result
if bmi is not None:
    print(f"Your BMI is: {bmi}")
    print(f"Category: {category}")
else:
    print("Invalid input. Please ensure weight and height are correct.")
