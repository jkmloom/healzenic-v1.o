# Code under project Healzenic
# Developer: Jatin Kumar Mehta
# Team Members (Sharing Code): Saurabh Kumar Mishra & Pankaj Kumar Ray

def calculate_bmr(gender, weight, height, age):
    if gender.lower() == 'male':
        # BMR for Men
        bmr = 10 * weight + 6.25 * height - 5 * age + 5
    elif gender.lower() == 'female':
        # BMR for Women
        bmr = 10 * weight + 6.25 * height - 5 * age - 161
    else:
        return "Invalid gender input. Please enter 'male' or 'female'."
    
    return bmr

# Input data
gender = input("Enter gender (male/female): ").strip().lower()
weight = float(input("Enter weight in kg: "))
height = float(input("Enter height in cm: "))
age = int(input("Enter age in years: "))

# Calculate BMR
bmr = calculate_bmr(gender, weight, height, age)
print(f"Your BMR is: {bmr} calories/day")
