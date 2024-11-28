# Code under project Healzenic
# Developer: Jatin Kumar Mehta
# Team Members (Sharing Code): Saurabh Kumar Mishra & Pankaj Kumar Ray

def calculate_whr(waist, height_cm):
    """Calculate WHtR and interpret its risk category."""
    try:
        whtr = waist / height_cm
        if whtr < 0.40:
            category = "Underweight (Possible health risks)"
        elif 0.40 <= whtr < 0.50:
            category = "Healthy weight (Low health risk)"
        elif 0.50 <= whtr < 0.60:
            category = "Overweight (Moderate health risk)"
        else:
            category = "Obese (High health risk)"
        return round(whtr, 2), category
    except (ZeroDivisionError, ValueError):
        return None, "Invalid input"

# Input from the user
waist = float(input("Enter your waist circumference (cm): "))
height_cm = float(input("Enter your height (cm): "))

# Calculate WHtR
whtr, category = calculate_whr(waist, height_cm)

# Display the result
if whtr is not None:
    print(f"Your WHtR is: {whtr}")
    print(f"Risk Category: {category}")
else:
    print("Invalid input. Please ensure waist circumference and height are correct.")
