let graph = document.querySelector(".canaPie").getContext('2d');

let colorBox = document.querySelectorAll('.label-item-color');

let colorInBox = ["#4335A7","#17C3B4","#FFB200","#1F509A","#F96E2A","#4A964A","#7A5794","#FEA04F"]
for(let i=0;i<8;i++)
{

    colorBox[i].style.backgroundColor = `${colorInBox[i]}`
}

var chart = new Chart(graph, {
    type: 'pie',
    data: {
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'],
        datasets: [
            {

                // labels:'Yesterday Performance',
                data: [24, 18, 13, 5, 34, 41, 27],
                backgroundColor: ['#4335A7', '#17C3B4', '#FFB200', '#1F509A', '#F96E2A', '#4A964A', '#7A5794',
                    
                ],

            }
        ],
    },
        options: {
            responsive: true,
            maintainAspectRatio: false, // Allows resizing based on canvas size
            plugins: {
                legend: {
                    display: true, // Ensure the legend is visible
                    position: 'bottom' // Move the legend to the bottom
                }
            }
        }
    
});

function canvasFun(canvasId, data, labelsList, backgroundColor) {
    let graph = document.querySelector(`#${canvasId}`).getContext('2d');
    var chart = new Chart(graph, {
        type: "bar",
        data: {
            labels: labelsList,
            datasets: [
                {
                    label:'Yesterday\'s Performance',
                    data: data,
                    backgroundColor: backgroundColor
                }
            ],
            options: {
                responsive: true,
                maintainAspectRatio: false, // Allows the chart to stretch within the container
                scales: {
                    y: {
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawTicks: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }

        }
    })
}

let id = ['Yesterday-1','Yesterday-2','Yesterday-3','Yesterday-4','Yesterday-5','Yesterday-6','Yesterday-7']
let data = [10,24,25,39,12,34,28,33];
// let data[0] = [2,24,25,49,12,34,8,33];
// let data[0] = [4,24,25,9,15,34,28,3];
// let data[0] = [60,24,25,39,12,34,28,33];
// let data[0] = [10,24,25,39,12,34,28,33];
// let data[0] = [10,24,25,39,12,34,28,33];
// let data[0] = [10,24,25,39,12,34,28,33];
// let data[0] = [10,24,25,39,12,34,28,33];
let labelsList = ['BMI','BMR','WHTR','Daily Water Intake',
    'Calorie Burn','Sleep Quality','Health Risk','Diet'
];
let backgroundColor = ['#4335A7','#17C3B4',
    '#FFB200','#1F509A','#F96E2A','#4A964A','#7A5794',
    '#FEA04F'
]
canvasFun(id[0],data,labelsList,backgroundColor)
canvasFun(id[1],data,labelsList,backgroundColor)
canvasFun(id[2],data,labelsList,backgroundColor)
canvasFun(id[3],data,labelsList,backgroundColor)
canvasFun(id[4],data,labelsList,backgroundColor)
canvasFun(id[5],data,labelsList,backgroundColor)
canvasFun(id[6],data,labelsList,backgroundColor)
// canvasFun(id[7],data,labelsList,backgroundColor)



function performanceEmoji() {
    const now = new Date();
    const dayNumber = now.getDay(); // Returns a number (0 = Sunday, 1 = Monday, etc.)

// let dayNumber  =1
    console.log(dayNumber)
    let daysInWeek = document.querySelectorAll(".calender-days");

    daysInWeek[dayNumber].classList.add('calender-days-active')


    let emojiDay = document.querySelectorAll(".calender-days-emoji");

    

    let emojis = ['😄', '😟', '😄', '😄', '😄', '😎', '😄'];
    console.log(emojis)

    for(let i in emojis)
    {

        if(i<dayNumber)
        {
            emojiDay[i].innerHTML = emojis[i]
        }
        else{
            emojiDay[i].innerHTML =`<span class="contain">&nbsp;&nbsp;&nbsp;&nbsp;</span>`
        }
        
    

    }

    // console.log(emojis[0])

    // if((dayNumber+1))



}


performanceEmoji();


