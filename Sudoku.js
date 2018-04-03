const p = document.querySelectorAll(".number");

let arr = [1,2,3,4,5,6,7,8,9];

p.forEach(function(arr){
    p.textContent = arr.toString();
});
