let p = document.querySelectorAll(".number");

const arr = [1,2,3,4,5,6,7,8,9];

for(var i = 0; i < arr.length; i++){
   p.textContent = arr.join(" ").toString();
   console.log(i);
}
