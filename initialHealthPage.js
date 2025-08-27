
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
let dn = document.querySelector('.greet-hi-name-word');
let dp = document.querySelector('.got-Greeted-image')

fetch('http://localhost:3207/getUserData')
    .then((response) => {
        return response.json()

    })
    .then((response) => {

        const avatarUrl = response["currentUser"].avatar;
        dn.innerHTML = response["currentUser"].firstname + " " + response["currentUser"].middlename + " " + response["currentUser"].lastname;


        dp.style.backgroundImage = `url(${avatarUrl})`

        const sleepQty = response["currentUser"].sleepQuality
        const part = sleepQty.split("-")
        const minSleep = parseInt(part[0])
        const maxSleep = parseInt(part[1])
        const avgSleep = (minSleep+maxSleep)/2
        console.log(avgSleep)
      


        //   console.log(dp)






        function chartCreator(idInput, dataItems, bgColor, label) {
            let idCollector = document.querySelector(`${idInput}`).getContext('2d');

            const formatChart = new Chart(idCollector, {
                type: 'bar',
                data: {
                    labels: [label], // Use the label as the chart's label
                    datasets: [
                        {
                            label: label, // Add a label for the dataset
                            data: [dataItems], // Pass data as an array
                            backgroundColor: [bgColor], // Pass background color as an array
                            borderWidth: 0
                        }
                    ]
                },

                options: {
                    indexAxis: 'y',
                    scales: {
                        x: {
                            beginAtZero: true
                        },
                        y: {
                            ticks: {
                                display: false // Hide the y-axis labels
                            },
                            grid: {
                                drawTicks: false, // Remove tick marks on the y-axis
                                drawBorder: false // Optional: Remove the border line on the y-axis
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top',
                        },
                        datalabels: {
                            anchor: 'end',
                            align: 'right',
                            formatter: (value, ctx) => {
                                return `${ctx.chart.data.labels[ctx.dataIndex]}`; // Use labels
                            },
                            color: '#000', // Label text color
                            font: {
                                size: 12, // Label font size
                            }
                        }
                    }
                }
            });
        }


        // IDs for canvas elements
        let idList = ['#graph-0', '#graph-1', '#graph-2', '#graph-3', '#graph-4', '#graph-5', '#graph-6', '#graph-7', '#graph-8'];

        // Labels for each chart
        let labelList = ['Example', 'BMI', 'BMR', 'Wh+R', 'Daily Water Intake (Liters)', 'Calorie Burn', 'Sleep Quality (Hours)', 'Health Risk (Level)', 'Diet'];

        // Data values for each chart
        let dataItem = [19, parseFloat(response["currentUser"].bmi), parseFloat(response["currentUser"].bmr), parseFloat(response["currentUser"].whtr), parseFloat(response["currentUser"].dailyWaterIntake), parseFloat(response["currentUser"].calorieBurn), avgSleep, 5, 3];

        // Background colors for each chart
        let bgColors = ['#A0FB9D', '#4335A7', '#17C3B4', '#FFB200', '#1F509A', '#F96E2A', '#4A964A', '#7A5794', '#FEA04F'];

        // Generate charts for each canvas
        for (let i = 0; i < idList.length; i++) {
            chartCreator(idList[i], dataItem[i], bgColors[i], labelList[i]);
        }
        let colorBox = document.querySelectorAll('.label-item-color');

        let colorInBox = ["#4335A7", "#17C3B4", "#FFB200", "#1F509A", "#F96E2A", "#4A964A", "#7A5794", "#FEA04F"]
        for (let i = 0; i < 8; i++) {

            colorBox[i].style.backgroundColor = `${colorInBox[i]}`
        }

    })