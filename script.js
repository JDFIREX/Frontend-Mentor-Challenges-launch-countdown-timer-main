let time = 14 * 24 * 60 * 60;

//days
let card11 = document.querySelector(".card-1-1")
let card12 = document.querySelector(".card-1-2")
let card13 = document.querySelector(".card-1-3")
// hours
let card21 = document.querySelector(".card-2-1")
let card22 = document.querySelector(".card-2-2")
let card23 = document.querySelector(".card-2-3")
//minutes
let card31 = document.querySelector(".card-3-1")
let card32 = document.querySelector(".card-3-2")
let card33 = document.querySelector(".card-3-3")
// seconds
let card41 = document.querySelector(".card-4-1")
let card42 = document.querySelector(".card-4-2")
let card43 = document.querySelector(".card-4-3")

window.addEventListener("load",(e) => {
    setTimer();

    setTimeout(() => {
        StartTimer()
    }, 2);
})

function setTimer(){
    let time2 = time
    //days
    let day = Math.floor(time2 / (24 * 60 * 60))
    let dayless = day - 1
    card11.innerHTML = day;
    card12.innerHTML = dayless;
    card13.innerHTML = day;
    time2 = time2 - (day * 24 * 60 * 60 )

    //hours
    let hours = Math.floor(time2 / (60 * 60))
    let hoursless = hours - 1
    card21.innerHTML = hours;
    card22.innerHTML = hoursless;
    card23.innerHTML = hours;
    time2 = time2 - (hours * 60 * 60 )

    //minutes
    let minutes = Math.floor(time2 /  60)
    let minutesless = minutes - 1
    card31.innerHTML = minutes;
    card32.innerHTML = minutesless;
    card33.innerHTML = minutes;
    time2 = time2 - (minutes * 60 )

    //seconds
    let seconds = time2;
    let secondsless = seconds - 1
    card41.innerHTML = seconds;
    card42.innerHTML = secondsless;
    card43.innerHTML = seconds;

}


function StartTimer(){
    setInterval(() => {
        time--;
        setTimer()
    }, 1000);
}