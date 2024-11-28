# Code under project Healzenic
# Developer: Jatin Kumar Mehta
# Team Members (Sharing Code): Saurabh Kumar Mishra & Pankaj Kumar Ray

# Python code to calculate BMR and TDEE based on Mifflin-St Jeor Equation

def calculate_bmr(weight, height, age, gender):
    if gender.lower() == 'male':
        # Mifflin-St Jeor Equation for Men
        bmr = 10 * weight + 6.25 * height - 5 * age + 5
    elif gender.lower() == 'female':
        # Mifflin-St Jeor Equation for Women
        bmr = 10 * weight + 6.25 * height - 5 * age - 161
    else:
        return "Invalid gender"
    return bmr

def calculate_tdee(bmr, activity_level):
    if activity_level.lower() == 'sedentary':
        tdee = bmr * 1.2
    elif activity_level.lower() == 'lightly active':
        tdee = bmr * 1.375
    elif activity_level.lower() == 'moderately active':
        tdee = bmr * 1.55
    elif activity_level.lower() == 'very active':
        tdee = bmr * 1.725
    elif activity_level.lower() == 'extra active':
        tdee = bmr * 1.9
    else:
        return "Invalid activity level"
    return tdee

# Input example: Weight in kg, Height in cm, Age in years, Gender (male/female), Activity level
weight = 70  # kg
height = 175  # cm
age = 30  # years
gender = 'male'
activity_level = 'moderately active'

# Calculate BMR
bmr = calculate_bmr(weight, height, age, gender)
print(f"BMR: {bmr} calories/day")

# Calculate TDEE
tdee = calculate_tdee(bmr, activity_level)
print(f"TDEE (Total Daily Energy Expenditure): {tdee} calories/day")
