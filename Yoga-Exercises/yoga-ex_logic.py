# Code under project Healzenic
# Developer: Jatin Kumar Mehta
# Team Members (Sharing Code): Saurabh Kumar Mishra & Pankaj Kumar Ray

def recommend_exercises(bmi):
    """Provide exercise recommendations based on BMI category."""
    if bmi < 18.5:
        category = "Underweight"
        recommendations = {
            "Yoga Asanas": [
                "Bhujangasana (Cobra Pose): Strengthens back muscles and stimulates appetite.",
                "Virabhadrasana (Warrior Pose): Builds leg and core strength, improving overall muscle tone."
            ],
            "Exercises": [
                "Weightlifting: Focus on compound movements like squats, deadlifts, and bench presses to build muscle mass.",
                "Push-Ups: A bodyweight exercise targeting the chest, triceps, and shoulders for muscle gain.",
                "Resistance Band Workouts: Effective for isolating muscle groups and progressive overload."
            ]
        }
    elif 18.5 <= bmi < 25:
        category = "Normal weight"
        recommendations = {
            "Yoga Asanas": [
                "Tadasana (Mountain Pose): Improves posture and balance, keeping the body aligned and active.",
                "Adho Mukha Svanasana (Downward Dog Pose): Strengthens the entire body and improves flexibility."
            ],
            "Exercises": [
                "Brisk Walking: A moderate cardio activity to maintain cardiovascular health and weight.",
                "Bodyweight Squats: Maintains leg strength and overall muscle tone.",
                "Planks: Builds core stability and maintains muscle strength."
            ]
        }
    elif 25 <= bmi < 30:
        category = "Overweight"
        recommendations = {
            "Yoga Asanas": [
                "Surya Namaskar (Sun Salutation): Engages multiple muscle groups and increases metabolism.",
                "Vrikshasana (Tree Pose): Improves balance and engages core muscles while boosting mental focus."
            ],
            "Exercises": [
                "High-Intensity Interval Training (HIIT): Burns calories efficiently through alternating intense activity and rest.",
                "Jumping Jacks: A full-body cardio exercise that increases heart rate and burns fat.",
                "Mountain Climbers: Targets the core, arms, and legs while torching calories."
            ]
        }
    else:
        category = "Obese"
        recommendations = {
            "Yoga Asanas": [
                "Surya Namaskar (Sun Salutation): Engages multiple muscle groups and increases metabolism.",
                "Vrikshasana (Tree Pose): Improves balance and engages core muscles while boosting mental focus."
            ],
            "Exercises": [
                "High-Intensity Interval Training (HIIT): Burns calories efficiently through alternating intense activity and rest.",
                "Jumping Jacks: A full-body cardio exercise that increases heart rate and burns fat.",
                "Mountain Climbers: Targets the core, arms, and legs while torching calories."
            ]
        }
    return category, recommendations

# Input from the user
weight = float(input("Enter your weight (kg): "))
height_cm = float(input("Enter your height (cm): "))

# Convert height from cm to m
height_m = height_cm / 100

# Calculate BMI
bmi = weight / (height_m ** 2)
category, recommendations = recommend_exercises(bmi)

# Display the result
print(f"Your BMI is: {round(bmi, 2)} ({category})")
print("\nRecommended Activities:")
for type_of_exercise, exercises in recommendations.items():
    print(f"\n{type_of_exercise}:")
    for exercise in exercises:
        print(f"- {exercise}")
