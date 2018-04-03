const p = document.querySelectorAll("p");

let arr = [1,2,3,4,5];

arr.forEach(test);

function test(number){
    p.textContent = number;
}