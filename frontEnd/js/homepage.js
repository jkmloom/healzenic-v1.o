



// const calculatedValue = require('./parameterCalc.js')
function navigatorToggler() {


    let navItemContainer = document.querySelector('.nav-items-container');

    let navigator = document.querySelector('.header-nav');




    navigator.addEventListener('click', () => {

        navItemContainer.classList.toggle('nav-container-not-shown')
        // <i class="ri-close-line"></i>
        // navigator.innerHTML = `<i class="ri-close-line"></i>`;
    })
}
navigatorToggler();
function barChartInsertion() {

    fetch('http://localhost:3207/getUserData')
        .then((response) => {
            return response.json()
        })
        .then((response) => {

            const seekData  = response["currentUser"]
            const sleepQty = response["currentUser"].sleepQuality
            const part = sleepQty.split("-")
            const minSleep = parseInt(part[0])
            const maxSleep = parseInt(part[1])
            const avgSleep = (minSleep + maxSleep) / 2
            console.log(avgSleep)
            console.log(seekData["bmi"])




            let graphInsert = document.querySelector("#myChart").getContext('2d');

            var chartInsert = new Chart(graphInsert, {
                type: 'bar',
                data: {
                    labels: ["Math", "Science", "Programming", "English", "Nepali"],
                    datasets: [{
                        data: [seekData["bmi"], seekData["bmr"], seekData["whtr"], 20, 50],
                        backgroundColor: ["red", "green", "yellow", "pink", "navy"],

                        borderRadius: 30
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    scales: {
                        y: {
                            min: 0,
                            max: 5000,
                            grid: {
                                display: true,
                                color: "red"
                            },
                            ticks: {
                                display: true
                            }
                        },
                        x: {
                            display: false,
                            grid: {
                                display: false
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display:false
                        },

                    }
                }

            })
        })
}
barChartInsertion();



// color insertion
function labelColorInsertion() {
    let backgroundColor = ['#4335A7', '#17C3B4', '#FFB200', '#1F509A', '#F96E2A', '#4A964A', '#7A5794',
        '#FEA04F'
    ]
    let labelItemColor = document.querySelectorAll(".label-item-color");

    for (let i = 0; i < 8; i++) {
        console.log(labelItemColor[i].style.backgroundColor = backgroundColor[i])
    }
}
labelColorInsertion();

function taskCompletionTick() {
    let tick = document.querySelectorAll('.today-container-item-icon');
    let ticker = document.querySelectorAll('.ticker');
    let checkInp = document.querySelectorAll(".checkInp")






    for (let i = 0; i < 7; i++) {
        tick[i].addEventListener("click", () => {
            if (tick[i].classList.contains("ri-add-circle-fill")) {
                checkInp[i].checked = !(false)

                tick[i].classList.remove("ri-add-circle-fill");
                tick[i].classList.add("ri-check-line");
            } else {
                tick[i].classList.add("ri-add-circle-fill");
                tick[i].classList.remove("ri-check-line");
                checkInp[i].checked = false

            }
        });
    }
}
taskCompletionTick();



let headerNav = document.querySelector('.header-nav');
let menuIcon = document.querySelector('.header-nav i');
let count = 1;


headerNav.addEventListener("click", () => {
    if (menuIcon.classList.contains("ri-menu-line")) {
        menuIcon.classList.remove("ri-menu-line");
        menuIcon.classList.add("ri-close-line");
    } else {
        menuIcon.classList.remove("ri-close-line");
        menuIcon.classList.add("ri-menu-line");
    }
});


function performanceEmoji() {
    const now = new Date();
    const dayNumber = now.getDay(); // Returns a number (0 = Sunday, 1 = Monday, etc.)

    let dateInTarik = document.querySelector(".calender-days-date")

    console.log(now.getDate())
    let daysInWeek = document.querySelectorAll(".calender-days");
    let dateInWeek = document.querySelectorAll(".calender-days-date");

    daysInWeek[dayNumber].classList.add('calender-days-active')


    let emojiDay = document.querySelectorAll(".calender-days-emoji");

    let currentDate = now.getDate();
    let currentDay = now.getDay();

    let daysName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    //which date = above day
    // console.log(daysName[currentDay])
    // console.log(currentDate,currentDay)




    let emojis = ['😄', '😟', '😄', '😄', '😄', '😎', '😄'];


    let dateWeek = [currentDate, currentDate + 1, currentDate + 2, currentDate + 3, currentDate + 4, currentDate + 5,
        currentDate + 6];





    for (let i in emojis) {

        dateInWeek[i].innerHTML = dateWeek[i]
        if (i < dayNumber) {
            emojiDay[i].innerHTML = emojis[i]
        }
        else {
            emojiDay[i].innerHTML = `<span class="contain">&nbsp;&nbsp;&nbsp;&nbsp;</span>`
        }



    }

    // console.log(emojis[0])

    // if((dayNumber+1))



}


performanceEmoji();



// 
let dn = document.querySelector('.greet-hi-name-word');

let dp = document.querySelector('.got-Greeted-image')

let checkListForm = document.querySelector(".today-container-items");
let submissionBox = document.querySelector("#submissionBox");
let msgBox = document.querySelector(".msgBox");
let streakDay = document.querySelector("#streak-day");


fetch('http://localhost:3207/getUserData')
    .then((response) => {
        return response.json()

    })
    .then((response) => {

        const avatarUrl = response.currentUser.avatar;
        dn.innerHTML = response.currentUser.firstname;


        dp.style.backgroundImage = `url(${avatarUrl})`

        if (response.checkListValue == "True") {
            checkListForm.style.display = "none"
            submissionBox.style.display = "none"
            msgBox.style.display = "block"

        }

        streakDay.innerHTML = response.checkListNo






    })
    .catch((err)=>{console.log("Couldn't fetch Data!")})



//* Calender Working

let date = new Date();
// console.log(date.toDateString())

let dateRe = date.getDate()
let dayRe = date.toDateString().slice(0, 3)
console.log(dayRe)


let weekTarik = []
if (dayRe.toLocaleLowerCase() == "sun") {
    weekTarik[0] = dateRe;
    weekTarik[1] = dateRe + 1;
    weekTarik[2] = dateRe + 2;
    weekTarik[3] = dateRe + 3;
    weekTarik[4] = dateRe + 4;
    weekTarik[5] = dateRe + 5;
    weekTarik[6] = dateRe + 6;
    console.log("Week", weekTarik)
}
console.log(weekTarik)



// Check

let i = 0;

let checkCustom = document.querySelector("#check");

let checkInput = document.querySelector("#checkInp")

checkCustom.addEventListener("click", () => {
    // checkInput.checked = "tru"
})







