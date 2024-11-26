# This program (Algorithm) is developed as a part of the project HealZenic
# Developer: Jatin Kumar Mehta

# Daily Water Intake Calculator

def calculate_water_intake(weight, activity_level, is_hot_climate):
    """
    Calculate daily water intake based on weight, activity level, and climate.
    
    Parameters:
        weight (float): Weight in kilograms.
        activity_level (str): Activity level ('low', 'moderate', 'high').
        is_hot_climate (bool): True if in a hot climate, False otherwise.
    
    Returns:
        float: Recommended daily water intake in liters.
    """
    # Base water intake formula: 35 mL per kg of body weight
    base_water = weight * 35 / 1000  # Convert to liters

    # Adjustments based on activity level
    activity_adjustment = 0.0
    if activity_level.lower() == "low":
        activity_adjustment = 0.0
    elif activity_level.lower() == "moderate":
        activity_adjustment = 0.5  # Add 0.5 liters for moderate activity
    elif activity_level.lower() == "high":
        activity_adjustment = 1.0  # Add 1.0 liters for high activity
    else:
        raise ValueError("Invalid activity level. Please enter 'low', 'moderate', or 'high'.")

    # Adjustment for hot climate
    climate_adjustment = 0.5 if is_hot_climate else 0.0

    # Total water intake
    total_water = base_water + activity_adjustment + climate_adjustment
    return total_water

def main():
    print("Welcome to the Daily Water Intake Calculator!")

    try:
        # User inputs
        weight = float(input("Enter your weight in kilograms (kg): "))
        if weight <= 0:
            raise ValueError("Weight must be a positive number.")

        activity_level = input("Enter your activity level (low, moderate, high): ").strip().lower()
        if activity_level not in ["low", "moderate", "high"]:
            raise ValueError("Invalid activity level. Please enter 'low', 'moderate', or 'high'.")

        is_hot_climate = input("Are you in a hot climate? (yes/no): ").strip().lower() == "yes"

        # Calculate water intake
        daily_water = calculate_water_intake(weight, activity_level, is_hot_climate)

        # Output results
        print(f"\nYour recommended daily water intake is: {daily_water:.2f} liters.")

    except ValueError as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
