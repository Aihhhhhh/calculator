// function for adding numbers
const add = (num1, num2) => num1 + num2;
console.log(add(4.8,3));
//function for subtracting numbers
const subtract = (num1,num2) => num1 - num2;
console.log(subtract(-6,1));
//function for multiplying two numbers
const multiply = (num1,num2) =>  (num1 * num2);
console.log(multiply(4,6));
//function for dividing numbers
const divide = (num1, num2) => num1/num2;
console.log(divide(8,5));

//create variables for the operation process which includes a number, operator and another number
//create first variable to hold first number
let num1;
//declare operator
let operator;
//declare second variable to hold second number
let num2;

//create function operate that takes two numbers and an operator
//use DOM manipulation to get all the buttons
const calckeys = document.querySelectorAll(".number");
console.log(calckeys);
//add event listener 'click' to the numbers
for(let i=0;i<calckeys.length;i++){
    console.log(calckeys[i])
}
calckeys.forEach(calc =>{
    calc.addEventListener("click", ()=>{
        console.log(calc)
    })
});
//target the maths operations
const operations = document.querySelectorAll(".calculator-key");
console.log(operations);
//attach an event listener to listen for clicks
operations.forEach(oper =>{
     oper.addEventListener("click", ()=>{
        console.log(oper)
    })
});
//target the equals sign
const equalls = document.querySelector(".equals");
console.log(equalls);
//attach an event listener to listen to the event click
equalls.addEventListener("click",()=>{
    console.log(equalls)
})
//target the clear button
const clears = document.querySelector(".clear");
console.log(clears);
//attach an event listener
clears.addEventListener("click",()=>{
    console.log(clears);
})
const view = document.querySelector(".dissplay");
console.log(view);