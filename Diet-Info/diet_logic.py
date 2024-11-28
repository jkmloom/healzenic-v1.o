# Code under project Healzenic
# Developer: Jatin Kumar Mehta
# Team Members (Sharing Code): Saurabh Kumar Mishra & Pankaj Kumar Ray

def recommend_diet(bmi, diet_type):
    """Provide dietary recommendations based on BMI and diet type."""
    recommendations = {}
    warning = ""

    if bmi < 18.5:  # Underweight
        if diet_type == "veg":
            recommendations = {
                "Vegetarian Diet": [
                    "Dairy Products: Whole milk, cheese, paneer, and yogurt for protein and healthy fats.",
                    "Grains: Quinoa, brown rice, oats, and whole-grain bread for complex carbs.",
                    "Legumes & Lentils: Chickpeas, kidney beans, and lentils for plant-based protein.",
                    "Nuts & Seeds: Almonds, walnuts, chia seeds, and flaxseeds for omega-3s and calories.",
                    "Fruits & Vegetables: Bananas, avocados, and sweet potatoes for energy and nutrients."
                ]
            }
        elif diet_type == "non-veg":
            recommendations = {
                "Non-Vegetarian Diet": [
                    "Protein-Rich Meats: Chicken breast and turkey for muscle-building proteins.",
                    "Fish: Salmon, tuna, and mackerel for omega-3 fatty acids and calories.",
                    "Eggs: Whole eggs are excellent for protein, healthy fats, and essential vitamins.",
                    "Grains & Starches: Potatoes, brown rice, and pasta for calorie-rich complex carbs.",
                    "Dairy: Milk, cheese, and yogurt as calorie-dense options with protein."
                ]
            }
        elif diet_type == "vegan":
            recommendations = {
                "Vegan Diet": [
                    "Plant-Based Proteins: Tofu, tempeh, and edamame for high-quality protein.",
                    "Legumes: Black beans, chickpeas, lentils, and green peas for protein and fiber.",
                    "Nuts & Butters: Peanut butter, almond butter, cashews, and seeds for calorie-dense healthy fats.",
                    "Whole Grains: Quinoa, brown rice, oats, and millet for complex carbs.",
                    "Fruits & Vegetables: Avocados, bananas, and dried fruits (e.g., dates, figs) for calorie-rich choices."
                ]
            }
    elif 18.5 <= bmi < 25:  # Normal weight
        if diet_type == "veg":
            recommendations = {
                "Vegetarian Diet": [
                    "Dairy Products: Low-fat milk, paneer, and Greek yogurt for protein and calcium.",
                    "Whole Grains: Brown rice, whole-grain bread, and oats for steady energy.",
                    "Legumes & Lentils: Chickpeas, lentils, and kidney beans for plant protein and fiber.",
                    "Nuts & Seeds: Almonds, chia seeds, and sunflower seeds for healthy fats and satiety.",
                    "Vegetables & Fruits: Spinach, carrots, apples, and bananas for essential vitamins and fiber."
                ]
            }
        elif diet_type == "non-veg":
            recommendations = {
                "Non-Vegetarian Diet": [
                    "Lean Meats: Chicken, turkey, and lean cuts of beef for muscle maintenance.",
                    "Fish: Salmon, tuna, and sardines for omega-3 fatty acids and protein.",
                    "Eggs: Whole eggs or a mix of egg whites for versatile, nutrient-rich protein.",
                    "Grains & Starches: Sweet potatoes, quinoa, and brown rice for energy and fiber.",
                    "Vegetables & Fruits: Broccoli, asparagus, berries, and oranges for micronutrient diversity."
                ]
            }
        elif diet_type == "vegan":
            recommendations = {
                "Vegan Diet": [
                    "Plant-Based Proteins: Tofu, tempeh, and edamame for complete proteins.",
                    "Legumes: Lentils, black beans, and chickpeas for protein and slow-digesting carbs.",
                    "Whole Grains: Quinoa, millet, and oats for complex carbohydrates.",
                    "Nuts & Seeds: Walnuts, flaxseeds, and pumpkin seeds for healthy fats and nutrients.",
                    "Vegetables & Fruits: Kale, zucchini, bananas, and apples for fiber and vitamins."
                ]
            }
    elif bmi >= 25:  # Overweight or Obese
        if bmi >= 30:
            warning = "See a doctor!"
        if diet_type == "veg":
            recommendations = {
                "Vegetarian Diet": [
                    "Dairy Alternatives: Low-fat yogurt, skim milk, and cottage cheese for protein without excessive fats.",
                    "Whole Grains: Quinoa, whole-grain bread, and brown rice for sustained energy release.",
                    "Legumes & Lentils: Moong dal, black lentils, and chickpeas for fiber and plant protein.",
                    "Vegetables: Leafy greens (spinach, kale) and cruciferous vegetables (broccoli, cauliflower) for satiety.",
                    "Fruits: Berries, apples, and oranges for natural sweetness and fiber."
                ]
            }
        elif diet_type == "non-veg":
            recommendations = {
                "Non-Vegetarian Diet": [
                    "Lean Proteins: Skinless chicken breast, turkey, and lean cuts of beef for muscle preservation.",
                    "Fish: Cod, tilapia, and shrimp for low-calorie, high-protein options.",
                    "Eggs: Egg whites for a protein boost without added fat.",
                    "Low-Calorie Grains: Sweet potatoes and oats for a balanced carbohydrate intake.",
                    "Vegetables: Zucchini, asparagus, and bell peppers for volume and nutrients."
                ]
            }
        elif diet_type == "vegan":
            recommendations = {
                "Vegan Diet": [
                    "Plant-Based Proteins: Tofu, tempeh, and seitan for low-fat protein sources.",
                    "Legumes: Lentils, black beans, and split peas for fiber and protein.",
                    "Vegetables: Cauliflower, mushrooms, and Brussels sprouts for low-calorie satiety.",
                    "Whole Grains: Millet, barley, and quinoa for energy and fiber.",
                    "Fruits: Watermelon, papaya, and kiwi for hydrating, nutrient-rich snacks."
                ]
            }
    return recommendations, warning

# Input from the user
bmi = float(input("Enter your BMI: "))
diet_type = input("Are you veg, non-veg, or vegan? ").strip().lower()

# Get recommendations
diet, warning = recommend_diet(bmi, diet_type)

# Display recommendations
if diet:
    print("\nRecommended Diet:")
    for key, items in diet.items():
        print(f"\n{key}:")
        for item in items:
            print(f"- {item}")

if warning:
    print(f"\nWARNING: {warning}")
