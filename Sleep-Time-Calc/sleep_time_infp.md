The optimal sleep time for an individual varies by age and other factors. Based on the **National Sleep Foundation** and other sleep research, the recommended sleep duration for various age groups is as follows:

- **Newborns (0-3 months):** 14-17 hours
- **Infants (4-11 months):** 12-15 hours
- **Toddlers (1-2 years):** 11-14 hours
- **Preschoolers (3-5 years):** 10-13 hours
- **School-age children (6-13 years):** 9-11 hours
- **Teenagers (14-17 years):** 8-10 hours
- **Young adults (18-25 years):** 7-9 hours
- **Adults (26-64 years):** 7-9 hours
- **Older adults (65+ years):** 7-8 hours

Below is a Python program that analyzes and provides recommendations based on the age and reported sleep duration.

```python
# Sleep Time Analysis Program Based on Age and Scientific Recommendations

def get_recommended_sleep_time(age):
    """
    Get the recommended sleep duration based on age.
    
    Parameters:
        age (int): Age of the individual.
        
    Returns:
        tuple: Recommended sleep range (min, max).
    """
    if age >= 0 and age <= 3:
        return (14, 17)  # Newborns
    elif age >= 4 and age <= 11:
        return (12, 15)  # Infants
    elif age >= 1 and age <= 2:
        return (11, 14)  # Toddlers
    elif age >= 3 and age <= 5:
        return (10, 13)  # Preschoolers
    elif age >= 6 and age <= 13:
        return (9, 11)  # School-age children
    elif age >= 14 and age <= 17:
        return (8, 10)  # Teenagers
    elif age >= 18 and age <= 25:
        return (7, 9)  # Young adults
    elif age >= 26 and age <= 64:
        return (7, 9)  # Adults
    elif age >= 65:
        return (7, 8)  # Older adults
    else:
        raise ValueError("Invalid age input. Please enter a positive number.")

def analyze_sleep(age, sleep_hours):
    """
    Analyze sleep quality based on age and reported sleep hours.
    
    Parameters:
        age (int): Age of the individual.
        sleep_hours (float): The number of hours the user sleeps.
        
    Returns:
        str: Analysis of sleep quality with recommendations.
    """
    recommended_min, recommended_max = get_recommended_sleep_time(age)
    
    if sleep_hours < recommended_min:
        return (f"You are getting {sleep_hours} hours of sleep. This is below the recommended range for your age group. "
                f"Try to get at least {recommended_min} hours of sleep for better health and well-being.")
    elif sleep_hours > recommended_max:
        return (f"You are getting {sleep_hours} hours of sleep. This is above the recommended range for your age group. "
                f"While sleep is important, oversleeping can also have negative effects. Try to maintain a balanced sleep duration.")
    else:
        return f"Great! You are getting the optimal amount of sleep ({sleep_hours} hours) for your age group."

def main():
    print("Welcome to the Sleep Time Analysis Program!")
    
    try:
        # Get user input for age and sleep hours
        age = int(input("Enter your age: "))
        sleep_hours = float(input("Enter the number of hours you sleep each night: "))
        
        # Validate the input
        if age <= 0 or sleep_hours <= 0:
            raise ValueError("Age and sleep hours must be positive numbers.")
        
        # Analyze sleep quality
        result = analyze_sleep(age, sleep_hours)
        
        # Output the analysis
        print(f"\nAnalysis: {result}")
    
    except ValueError as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
```

### **How It Works**:
1. **`get_recommended_sleep_time(age)`**:
   - This function returns the recommended sleep range (min, max) based on the user’s age.
   - The recommended sleep times are based on research from sources like the **National Sleep Foundation**.

2. **`analyze_sleep(age, sleep_hours)`**:
   - Compares the reported sleep hours to the recommended sleep range for the given age.
   - Provides feedback if the user is sleeping too little or too much and encourages them to aim for the optimal sleep duration.

3. **User Input**:
   - The user is prompted to enter their age and the number of hours they sleep.
   - The program then outputs a recommendation based on the provided information.

---

### **How to Run**:
1. Save the code as `sleep_time_analysis.py`.
2. Run the script using Python:
   ```bash
   python sleep_time_analysis.py
   ```
3. Follow the prompts to input your age and sleep hours.

---

### **Sleep Time Recommendations Based on Age**:
- **0-3 months**: 14-17 hours
- **4-11 months**: 12-15 hours
- **1-2 years**: 11-14 hours
- **3-5 years**: 10-13 hours
- **6-13 years**: 9-11 hours
- **14-17 years**: 8-10 hours
- **18-25 years**: 7-9 hours
- **26-64 years**: 7-9 hours
- **65+ years**: 7-8 hours

This program helps users determine if they are getting the right amount of sleep according to scientific standards and provides recommendations to improve their sleep quality! 😴
