let time = 14 * 24 * 60 * 60;

let start = false;
let t = [];
let t2 = [-1,-1,-1,-1];

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
    load()
    setTimeout(() => {
        setInterval(() => {
            setTimer()
        }, 1000);
        start = true;
    }, 1000);
})

function setTime(t){
    let tt = t
    let day = Math.floor(tt / (24 * 3600))
    tt = tt - (day * 24 * 3600 )
    let hours = Math.floor(tt / 3600)
    tt = tt - (hours * 3600 )
    let minutes = Math.floor(tt /  60)
    tt = tt - (minutes * 60 )
    let seconds = tt;
    return [day,hours,minutes,seconds]
}

function load(){
    t = setTime(time)

    card11.innerHTML = t[0];
    card12.innerHTML = t[0];
    card13.innerHTML = t[0];
    card21.innerHTML = t[1];
    card22.innerHTML = t[1];
    card23.innerHTML = t[1];
    card31.innerHTML = t[2];
    card32.innerHTML = t[2];
    card33.innerHTML = t[2];
    card41.innerHTML = t[3];
    card42.innerHTML = t[3];
    card43.innerHTML = t[3];

    t2 = t;
}

function setTimer(){
    if(time < 0){return 0}
    t = setTime(time)

    t2[3] != t[3] ? ChangeSeconds(t) : null;
    t2[2] != t[2] ? ChangeMinutes(t) : null;
    t2[1] != t[1] ? ChangeHours(t) : null;
    t2[0] != t[0] ? ChangeDay(t) : null;


    t2 = t;
    time--;
}

function ChangeDay(t){
    card11.innerHTML = t[0];
    card12.innerHTML = t[0];
    card13.innerHTML = t[0];
    start ? FlipCard(t[0], card13,card11) : null;
}

function ChangeHours(t){
    card21.innerHTML = t[1];
    card22.innerHTML = t[1];
    card23.innerHTML = t[1];
    start ? FlipCard(t[1], card23,card21) : null;
}

function ChangeMinutes(t){
    card31.innerHTML = t[2];
    card32.innerHTML = t[2];
    card33.innerHTML = t[2];
    start ? FlipCard(t[2], card33,card31) : null;
}

function ChangeSeconds(t){
    card41.innerHTML = t[3];
    card42.innerHTML = t[3];
    card43.innerHTML = t[3];
    start ? FlipCard(t[3], card43,card41) : null;
}



function FlipCard(p,c,c2){

     let gs = gsap.timeline({defaults: {ease: "Power2.inOut"}});
     c.innerHTML = p + 1 == 60? 0 : p + 1;
     c2.innerHTML = p + 1 == 60 ? 0 : p + 1;
        let flip = new Promise(resolve => {
            gs.to(c,.40,{
                rotateX: "-90deg",
            })
            gs.to(c,0,{
                clipPath : "inset(50% 0 0 0)",
                backgroundColor : "hsl(236, 21%, 26%)",
                color : "hsl(345, 95%, 68%)",
                rotateX: "-90deg"
            })
            
            resolve(c)
        });
        flip.then(r => {
            setTimeout(() => {
                c.innerHTML = p;
            }, 380);
        }).then(r => {
            gs.to(c,.40,{
                rotateX: "0deg"
            })
            gs.to(c,0,{
                clipPath : "inset(0 0 50% 0)",
                backgroundColor : "rgb(44, 44, 68)",
                color : "hsl(345, 60%, 56%)"
            })
        }).then(r => {
            setTimeout(() => {
                c.innerHTML = p ;
                c2.innerHTML = p;
            }, 700);
        })

}