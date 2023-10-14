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
let num1= null;
//declare operator
let operator=null;
//declare second variable to hold second number
let num2=null;
//store result
let result = null;
//create function operate that takes two numbers and an operator
let currentDisplay = 0;
//declare current operation
let currentOperation = null;

let displayValue = document.getElementById("userinput");

//use DOM manipulation to get all the buttons
const calckeys = document.querySelectorAll(".number");
console.log(calckeys);
calckeys.forEach(calc => {
    calc.addEventListener("click",()=>{
        console.log(calc.innerHTML);
        displayValue.placeholder+= calc.innerHTML
    })
})



//add event listener 'click' to the nu

//target the maths operations
const operations = document.querySelectorAll(".calculator-key");
console.log(operations);
//attach an event listener to listen for clicks
operations.forEach(oper =>{
     oper.addEventListener("click",()=>{
        console.log(oper.innerHTML)
        operator = oper.innerHTML
        displayValue.placeholder += oper.innerHTML
    })
});
//create operate function that takes two numbers and an operator
const operate = (num1,num2,operator) =>{
    result=0;
    let operationResult;
    if(operator= '+'){
        operationResult =add(num1,num2);
        result+= operationResult
        displayValue.placeholder = result
    }
    else if(operator=== '-'){
        operationResult = subtract(num1,num2)
        result+= operationResult
    }
    else if(operator === '*'){
        operationResult= multiply(num1,num2)
        result +=operationResult
    }
    else {
        operationResult= divide(num1,num2);
        result +=operationResult;
    };
    return result;
}
console.log(operate(2,3,'/'))
//target the equals sign
const equalls = document.querySelector(".equals");
console.log(equalls);
//attach an event listener to listen to the event click
equalls.addEventListener("click",()=>{
    displayValue.placeholder = operate()
    console.log(equalls.innerHTML)
    
})
//target the clear button
const clears = document.querySelector(".clear");
console.log(clears);
//attach an event listener
clears.addEventListener("click",()=>{
    displayValue.placeholder=""
    console.log(clears.innerHTML);
})
//target the decimal point
const decimals = document.querySelector(".point");
console.log(decimals);
decimals.addEventListener("click",()=>{
    displayValue.placeholder+= decimals.innerHTML;
    console.log(decimals.innerHTML)
})
