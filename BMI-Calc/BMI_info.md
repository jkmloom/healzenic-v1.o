```python
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
        return "Obesity"

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
```

### **How It Works**:
1. **`calculate_bmi(weight, height)`**: Uses the standard formula \( \text{BMI} = \frac{\text{weight (kg)}}{\text{height (m)}^2} \) to calculate BMI.
2. **`interpret_bmi(bmi)`**: Categorizes the BMI result into one of four categories:  
   - **Underweight**: BMI < 18.5  
   - **Normal weight**: 18.5 ≤ BMI < 24.9  
   - **Overweight**: 25 ≤ BMI < 29.9  
   - **Obesity**: BMI ≥ 30  
3. The program asks for the user’s weight and height, computes their BMI, and displays the result along with the corresponding health category.  

### **How to Run**:
- Copy and paste the code into a Python environment or IDE.
- Run the script, input your weight and height when prompted, and view your BMI and its interpretation.  

This program is a simple, effective way to understand your BMI and how it relates to your health!
