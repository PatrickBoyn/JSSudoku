let p = document.querySelectorAll(".number");
let button = document.querySelector("button");

let arr = [1,2,3,4,5,6,7,8,9];
let r = Math.floor(Math.random() * arr.length);

/* II can't claim credit for this lambda expression,
   You have to admit it's pretty elegant. My bit is the + 1
   Sudoku has 9 numbers 1-9 +=1
   The arrow click function is mine however. */
button.addEventListener("click", () => { p.forEach((p, arr) => p.textContent=r + 1);});

// So I can see if there is a problem.
console.log(arr);