let p = document.querySelectorAll(".number");
let button = document.querySelector("button");

let arr = [1,2,3,4,5,6,7,8,9];
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
        r.style.color = "green";
        console.log(r);
};

// So I can see if there is a problem.
console.log(arr);