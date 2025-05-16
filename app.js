let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (!started) {
        console.log("game started");
        started = true;
        levelup();
    }
});

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function levelup() {
    level++;
    h2.innerText = `Level ${level}`;

    let randidx = Math.floor(Math.random() * 4); 
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);

    gameseq.push(randcolor);

    console.log(randidx);
    console.log(randcolor);
    console.log(randbtn);
    
    btnflash(randbtn);
}
