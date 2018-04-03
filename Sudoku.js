const p = document.querySelectorAll("p");

let arr = [1,2,3,4,5];

arr.forEach(p, function(arr){
    p.textContent = "Test";
});
