import calc from "./parameterCalc.js";
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

let headerNav = document.querySelector('.header-nav');
let menuIcon = document.querySelector('.header-nav i');
let count=1;


headerNav.addEventListener("click", () => {
    if (menuIcon.classList.contains("ri-menu-line")) {
        menuIcon.classList.remove("ri-menu-line");
        menuIcon.classList.add("ri-close-line");
    } else {
        menuIcon.classList.remove("ri-close-line");
        menuIcon.classList.add("ri-menu-line");
    }
});

let dn = document.querySelector('.greet-hi-name-word');
let dp = document.querySelector('.got-Greeted-image')

fetch('http://localhost:3207/getUserData')
.then((response)=>{
    return response.json()

})
.then((response)=>{

   const avatarUrl = response["currentUser"].avatar;
   dn.innerHTML = response["currentUser"].firstname;


  dp.style.backgroundImage = `url(${avatarUrl})`

  
//   console.log(dp)


})

let r = calc()
console.log("Where is data:",r)