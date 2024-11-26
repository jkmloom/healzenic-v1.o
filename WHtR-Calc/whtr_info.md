```python
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
```

---

### **How It Works**:
1. **`calculate_whtr(waist, height)`**: Uses the formula \( \text{WHtR} = \frac{\text{waist circumference (cm)}}{\text{height (cm)}} \) to compute the ratio.
2. **`interpret_whtr(whtr, gender)`**: Evaluates the WHtR result based on standard thresholds:  
   - **Men**:  
     - Underweight: WHtR < 0.35  
     - Healthy: 0.35–0.43  
     - Increased risk: 0.43–0.53  
     - High risk: 0.53–0.58  
     - Very high risk: WHtR > 0.58  
   - **Women**:  
     - Underweight: WHtR < 0.35  
     - Healthy: 0.35–0.42  
     - Increased risk: 0.42–0.49  
     - High risk: 0.49–0.54  
     - Very high risk: WHtR > 0.54  

3. The program takes user inputs for waist circumference, height, and gender, calculates the WHtR, and provides a health risk interpretation.  

---

### **Why Use WHtR?**  
WHtR is considered a better predictor of health risks like cardiovascular disease and diabetes than BMI in some cases because it accounts for abdominal fat distribution.  

---

### **How to Run**:
- Copy and paste the code into a Python environment or IDE.
- Run the script, enter your waist circumference, height, and gender, and view your WHtR and its interpretation.  

This tool provides a quick, easy way to assess your health risk based on your body proportions!
