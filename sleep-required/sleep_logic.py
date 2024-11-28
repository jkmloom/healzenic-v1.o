# Code under project Healzenic
# Developer: Jatin Kumar Mehta
# Team Members (Sharing Code): Saurabh Kumar Mishra & Pankaj Kumar Ray

# Python code to calculate BMR and TDEE based on Mifflin-St Jeor Equation

def recommend_sleep_hours(age):
    """Suggest recommended sleep hours based on age group."""
    if 0 <= age <= 2:
        return "12-17 hours"
    elif 3 <= age <= 5:
        return "10-13 hours"
    elif 6 <= age <= 13:
        return "9-11 hours"
    elif 14 <= age <= 17:
        return "8-10 hours"
    elif 18 <= age <= 64:
        return "7-9 hours"
    elif age >= 65:
        return "7-9 hours"
    else:
        return "Invalid age input"

# Input from the user
age = int(input("Enter your age: "))

# Get sleep recommendation
sleep_hours = recommend_sleep_hours(age)

# Display the result
print(f"Recommended sleep hours for age {age}: {sleep_hours}")

