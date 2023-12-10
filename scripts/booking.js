/********* create variables *********/
let costPerDay = document.getElementById("calculated-cost").innerHTML;
let dailyRate = 35;

let fullButton = document.getElementById("full");
let halfButton = document.getElementById("half");
let fullDay = document.getElementById("full");
let halfDay = document.getElementById("half");

let monday = document.getElementById("monday");
let tuesday = document.getElementById("tuesday");
let wednesday = document.getElementById("wednesday");
let thursday = document.getElementById("thursday");
let friday = document.getElementById("friday");
let numOfDays = 0

/********* colour change days of week *********/
let weekdays = [monday, tuesday, wednesday, thursday, friday];

function dayCounter() {
    numOfDays = 0;
    // This is to click the days the pup will come
    for (let i = 0; i < weekdays.length; i++) {
        if (weekdays[i].classList.contains("clicked")) {
            numOfDays++;
        }
        calculate();
    }
    
}
monday.addEventListener("click", function() {
    monday.classList.toggle("clicked");
    dayCounter()
});
tuesday.addEventListener("click", function() {
    tuesday.classList.toggle("clicked");
    dayCounter()
});
wednesday.addEventListener("click", function() {
    wednesday.classList.toggle("clicked");
    dayCounter()
});
thursday.addEventListener("click", function() {
    thursday.classList.toggle("clicked");
    dayCounter()
});
friday.addEventListener("click", function() {
    friday.classList.toggle("clicked");
    dayCounter()
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
let clearButton  = document.getElementById("clear-button")

function reset() {
    numOfDays = 0;
    dailyRate = 0;
    document.getElementById("calculated-cost").innerHTML = 0;
    for (let i = 0; i < weekdays.length; i++) {
        weekdays[i].classList.remove("clicked");
    }
    calculate()
}

clearButton.addEventListener("click", reset);

/********* change rate *********/
// selects full button
fullButton.addEventListener("click", function() {
    dailyRate = 35;
    fullDay.classList.add("clicked");
    halfDay.classList.remove("clicked");
    calculate()
});

// selects half button 
halfButton.addEventListener("click", function() {
    dailyRate = 20;
    fullDay.classList.remove("clicked");
    halfDay.classList.add("clicked");
    calculate()
});



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
    costPerDay = numOfDays*dailyRate;
    document.getElementById("calculated-cost").innerHTML = costPerDay
}
