// modify this script to populate the month select you create in the HTML page from an array of month names
// you can use either a for loop or an array.map to populate the select. remember that while arrays start with 
// zero, month numbers go from 1-12

// modify this script to run a function called printCalendar() when the user clicks the "Go" button

// modify this script to use the first day of the month the user selects in place of the const today 

function printCalendar(nYear, monthIndex) {
    // const today = new Date(`') //new date object (mouth/date/year) (`${ month } ${ days } ${ years })
    const today = new Date(nYear, monthIndex, 01)
    console.log(today);
    const month = today.getMonth()
    let days
    switch (monthIndex) {
        case 1:
            days = 28
            break
        case 3:
        case 5:
        case 8:
        case 10:
            days = 30
            break
        default:
            days = 31
    }

    let x
    const weekday = today.getDay()
    for (x = 0; x < weekday; x++) {
        document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
    }

    let dt = 0
    do {
        dt++
        document.getElementById('calendarDays').innerHTML += `<div class='calendarCell'>${dt}</div`
    } while (dt < days)

    const monthName = today.toLocaleDateString('default', { month: 'long' })
    const year = today.getFullYear()
    document.querySelector('.calendarTitle').innerText = `${monthName} ${year}`

    const remainder = (7 - ((x + dt) % 7))
    let y = 0
    while (y < remainder) {
        document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
        y++
    }
}
printCalendar("2021", "3");

// const d = new date();
const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const daysArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

for (m = 0; m <= 11; m++) {
    var nMonth = document.createElement("OPTION");
    nMonth.text = monthArray[m];
    nMonth.value = (m + 1);

    document.getElementById('month').options.add(nMonth);
}

for (y = 2010; y <= 2050; y++) {
    var yYears = document.createElement("OPTION");
    yYears.text = y;
    yYears.value = y;

    document.getElementById('year').options.add(yYears);
}
document.querySelector("#btn").addEventListener("click", function () {
    document.querySelector("#year").value;
    document.querySelector("#month").value;
    printCalendar(document.querySelector("#year").value, document.querySelector("#month").value);

})
//   <button id="btn">Go</button>
// document.querySelector("#calendarTitle").innerHTML = months[Date.getMonth()];
// document.querySelector("#calendarTitle").innerHTML = date.toLocaleDateString();

// document.getElementById()