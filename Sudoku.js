let p = document.querySelectorAll(".number");
let r = Math.floor(Math.random() * 9);

// I can't claim credit for this lambda expression,
// You have to admit it's pretty elegant. My bit is the + 1
// Sudoku has 9 numbers 1-9
p.forEach((p, i) => p.textContent=r += 1);

