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

if(itemText === "=") {
    display.value = evel(display.value);
}

 });
});


// let display  = document.querySelector('.input');

// let buttons = Array.from(document.querySelectorAll(".button"));

// buttons.map((button) => {
// button.addEventListener("click", (e) =>{
//     switch (e.target.innerText) {
//         case "C":
//             display.innerText = "0";
//             break;
//             default:
//                 if (display.innerText === "0" && e.target.innerText !== ".") {
//                      display.innerText = e.target.innerText;
//                 }else{
//                     display.innerText += e.target.innerText;
//                 }
//     }
// });
// });