
let dp = document.querySelector('.personal-information-dp div')
let firstname = document.querySelector('#firstname');
let middlename = document.querySelector('#middlename');
let lastname = document.querySelector('#lastname');
let age = document.querySelector("#age");
let gender = document.querySelector("#genderSelected");
let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
let diet = document.querySelector("#project");
let smokingHabits = document.querySelector("#sh-selected");
let allergies = document.querySelector("#ka-selected");
let alcoholConsumptions= document.querySelector("#ac-selected");
let familyHistory= document.querySelector("#fh-selected");
let stressLevel= document.querySelector("#sl-selected");
let waterIntake= document.querySelector("#wt-selected");
let waistCircumference= document.querySelector("#wc-selected");
let sleepDuration  = document.querySelector("#sleep-duration");
let physicalActivity= document.querySelector("#paSelected");
// let waistCircum= document.querySelector("#waistCircum");

fetch('http://localhost:3207/getUserData')
.then((response)=>{
    return response.json()

})
.then((data)=>{
    console.log(data["currentUser"])
const avatarUrl = data["currentUser"].avatar


firstname.value =data["currentUser"].firstname
middlename.value =data["currentUser"].middlename
lastname.value =data["currentUser"].lastname
age.value = data["currentUser"].age;
gender.innerHTML = data["currentUser"].gender
height.value = data["currentUser"].height + " cms"
weight.value = data["currentUser"].weight + " kgs"
physicalActivity.innerHTML = data["currentUser"].PhysicalActivityLevel
familyHistory.innerHTML = data["currentUser"].FamilyHistory
// waistCircum.value = data["currentUser"].WaistCircum 
alcoholConsumptions.innerHTML = data["currentUser"].AlcoholConsumption
allergies.innerHTML = data["currentUser"].KnowAllergies
smokingHabits.innerHTML = data["currentUser"].SmokingHabits
diet.innerHTML = data["currentUser"].DietaryPreference
sleepDuration.value  = data["currentUser"].SleepDuration
waistCircumference.innerHTML = data["currentUser"].WaistCircum+ " cms"
stressLevel.innerHTML = data["currentUser"].StressLevel
waterIntake.innerHTML = data["currentUser"].DailyWaterIntake + " liters/ day"



console.log(firstname)

dp.style.backgroundImage  = `url(${avatarUrl})`



})