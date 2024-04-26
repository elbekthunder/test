const display  = document.querySelector('.input');
const btnsCalculate = document.querySelectorAll('.blok');

const btns = document.querySelectorAll('.id-btn') ;


btns.forEach((item) => {
 item.addEventListener('click', (e) => {
    
let itemText = e.target.textContent;

if(itemText === "*") {
    itemText = "*";
}

if(itemText === ":") {
    itemText = "/";
}
if(itemText === "C") {
    display.value = display.value.slice(0,-1);
}
if(itemText !== "C" && itemText !== "=" ) {
   display.value += itemText; 
}



 });
});


function calculate() {
    display.value = eval(display.value)
}

function clearDispalay() {
    display.value = "" ;
}