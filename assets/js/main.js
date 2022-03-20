/*===== MENU SHOW Y HIDDEN =====*/ 
const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close')

/*SHOW*/ 
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

/*HIDDEN*/
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*countdown*/

let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");

//Format: Date(year, month, day, hour, minute)
//Year is counter from 0 to 11
let endDate = new Date(2022, 3, -11, 19, 30);
//Output value in milliseconds
let endTime = endDate.getTime();

function countdown() {
  let todayDate = new Date();
  //Output value in milliseconds
  let todayTime = todayDate.getTime();

  let remainingTime = endTime - todayTime;

  //60sec => 1000 milliseconds
  let oneMin = 60 * 1000;
  //1hr => 60 minutes
  let oneHr = 60 * oneMin;
  //1 day => 24 hours
  let oneDay = 24 * oneHr;

  //Function to format number if it is single digit
  let addZeroes = (num) => (num < 10 ? `0${num}` : num);

  //If end dat is before today date
  if (endTime < todayTime) {
    clearInterval(i);
    document.querySelector(
      ".countdown"
    ).innerHTML = `<h1>Match Started!</h1>`;
  }
  //If end date is not before today date
  else {
    //Calculating remaining days, hrs,mins ,secs
    let daysLeft = Math.floor(remainingTime / oneDay);
    let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
    let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
    let secsLeft = Math.floor((remainingTime % oneMin) / 1000);

    //Displaying Valurs
    dayBox.textContent = addZeroes(daysLeft);
    hrBox.textContent = addZeroes(hrsLeft);
    minBox.textContent = addZeroes(minsLeft);
    secBox.textContent = addZeroes(secsLeft);
  }
}
let i = setInterval(countdown, 1000);
countdown();