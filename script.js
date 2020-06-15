// Buttons

let dec = document.getElementById("decrease");
let res = document.getElementById("reset");
let inc = document.getElementById("increase");

// value
let val = document.getElementById("value");


let counter = 0;



dec.addEventListener('click', () => {
    counter--;
    val.textContent = counter;
});

inc.addEventListener('click', () => {
    counter++;
    val.textContent = counter;
});

res.addEventListener('click', () => {
    counter = 0;
    val.textContent = counter;
});