let p = document.querySelectorAll(".number");
let button = document.querySelector("button");

let a = randomNumbers();
let b = Math.floor(Math.random() * 9) + 1;
let c = Math.floor(Math.random() * 9) + 1;
let d = Math.floor(Math.random() * 9) + 1;
let e = Math.floor(Math.random() * 9) + 1;
let f = Math.floor(Math.random() * 9) + 1;
let g = Math.floor(Math.random() * 9) + 1;
let h = Math.floor(Math.random() * 9) + 1;
let j = Math.floor(Math.random() * 9) + 1;

let cover = Math.floor(Math.random() * 9) + 1;

// This is not going to be permanant. 
// I will figure out a way of making it pick a new one.
let correct = p[a];

if(correct === p[a]){
    console.log(correct)
}

fillNumbers();
/* II can't claim credit for this lambda expression,
   You have to admit it's pretty elegant. My bit is the + 1
   Sudoku has 9 numbers 1-9
   The arrow click function is mine however. */
button.addEventListener("click", () => {fillNumbers();});

// I will want to use this again maybe. 
function fillNumbers(){
        // The += is so that the numbers will change across all squares.   
        p.forEach((p, i) => p.textContent = i += 1);

        // This is my code. 
        // It's not dry I know, but when I figure out how to I will fix it.
        p[0].textContent = a;
        p[1].textContent = b;
        p[2].textContent = c;
        p[3].textContent = d;
        p[4].textContent = e;
        p[5].textContent = f;
        p[6].textContent = g;
        p[7].textContent = h;
        p[8].textContent = j;
};

function randomNumbers(){
    Math.floor(Math.random() * 9) + 1;
};