let p = document.querySelectorAll(".number");
let button = document.querySelector("button");

let r = Math.floor(Math.random() * 9) + 1;

randomText();

/* II can't claim credit for this lambda expression,
   You have to admit it's pretty elegant. My bit is the + 1
   Sudoku has 9 numbers 1-9 +=1
   The arrow click function is mine however. */
button.addEventListener("click", () => {randomText();});

// I will want to use this again maybe. 
function randomText(){
        p.forEach((p, i) => p.textContent = i+=r);
        i[4].style.display = "none";
        console.log(r);
};