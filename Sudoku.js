let p = document.querySelectorAll(".number");

// I can't claim credit for this lambda expression,
// You have to admit it's pretty elegant. My bit is the + 1
// Sudoku has 9 numbers 1-9
p.forEach((p, i) => p.textContent=i+1);