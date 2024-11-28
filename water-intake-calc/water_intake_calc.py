# Code under project Healzenic
# Developer: Jatin Kumar Mehta
# Team Members (Sharing Code): Saurabh Kumar Mishra & Pankaj Kumar Ray

def suggest_water_intake(weight, current_intake):
    """Suggest whether to drink more, less, or maintain water intake based on weight."""
    recommended_intake = weight / 30  # Water intake formula (liters per day)
    
    if current_intake < recommended_intake:
        suggestion = "You should drink more water."
    elif current_intake > recommended_intake:
        suggestion = "You should drink less water."
    else:
        suggestion = "Your water intake is just right. Keep it up!"
    
    return round(recommended_intake, 2), suggestion

# Input from the user
weight = float(input("Enter your weight (kg): "))
current_intake = float(input("Enter the amount of water you currently drink per day (liters): "))

# Suggest water intake
recommended_intake, suggestion = suggest_water_intake(weight, current_intake)

# Display the result
print(f"Recommended water intake: {recommended_intake} liters/day")
print(suggestion)
