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
let firstOperand ='';
let secondOperand='';
let currentOperation=null;
let shouldResetScreen = false;
//declare operator
//let operator= ['+','-','*','/'];//
//declare second variable to hold second number
//store result
//create function ate that takes two numbers and an operator
//declare current operation
let displayValue = document.getElementById("result");

//
//store results
/*const dis = (val) =>{
    document.getElementById("result").value += val
    displayValue = val
    console.log(val)
}
*/
//use DOM manipulation to get all the buttons
const calckeys = document.querySelectorAll(".number");
console.log(calckeys);
//add event listener to each number button
calckeys.forEach(calc => {
    calc.addEventListener("click",()=>{
        displayValue.value+= calc.innerHTML;
        handleNumber()
        console.log(displayValue.value);
    })
});
function handleNumber(){
    if(displayValue.value !== ""){
        displayValue.value = displayValue.value.replace(/ /g,"");
    }
    else{
        displayValue.value =0
    }
}
handleNumber()

//target the maths operations
const operations = document.querySelectorAll(".calculator-key");
console.log(operations);
//attach an event listener to listen for clicks
operations.forEach(oper =>{
     oper.addEventListener("click",()=>{
        console.log(oper.innerHTML);
        handleSymbol();
        displayValue.value += oper.innerHTML
    })
});
function handleSymbol(){
    if(displayValue.value!== ""){
        displayValue.value = displayValue.value.replace(/ /g,"");
    }else{
        displayValue.value= 0;
    }
}
handleSymbol();
//function for converting operation

//create operate function that takes two numbers and an operator
const operate = (num1,num2,operator) => {
    num1=Number(num1)
    num2=Number(num2)
    switch(operator){
        //if the operator is +
        case '+':
            return add(num1,num2)
            //if the operator is -
        case  '-':
            return subtract(num1,num2);
            //if operator is *
        case '*':
            return multiply(num1,num2);
            //if operator is /
        case '/':
            return divide(num1,num2);
        default:
            return null;
    }
}
operate();
//target the equals sign
//create equal function to update the display when the equals sign button is clicked
function equal(){
    const equalls = document.querySelector(".equals");
    console.log(equalls);
//attach an event listener to listen to the event click
    equalls.addEventListener("click",()=>{
        if(displayValue.value === 0){
            return
        }
        evaluate(displayValue.value)
        displayValue.value += displayValue.innerHTML
        console.log(displayValue.value)
    })
        //call the toRPN function on the display value
}

equal()
//target the clear button
function clear(){
    const clears = document.querySelector(".clear");
    console.log(clears);
//attach an event listener
    clears.addEventListener("click",()=>{
        displayValue.value = null;
        console.log(displayValue.value);
    })
};
clear()
//target the decimal point
const decimals = document.querySelector(".point");
console.log(decimals);
//add an event listener to capture the float and update the value on the display
decimals.addEventListener("click",()=>{
    displayValue.value+= decimals.innerHTML;
    console.log(displayValue.value);
})
//target the decimal point button  and add event listener
/*const percentage = document.querySelector(".percentage");
percentage.addEventListener("click",() =>{
    console.log(percentage.innerHTML);
    displayValue.value+=percentage.innerHTML
});
*/
//create function that handles the delete button
function deletes(){
    displayValue.value= displayValue.value.replace(/ /g,"");
    displayValue.value= displayValue.value.substring(0,displayValue.value.length -1);
}
//create a function that handles the opening parenthesis
function parenthesis(){
    const openParenthes = document.querySelector("#open-parenthesis");
    displayValue.value+= openParenthes.innerHTML;
    console.log(displayValue.value);
}
//create a function that handles the closing parenthesis
function closeeParenthesis(){
    const closeParenthes = document.querySelector("#close-parenthesis");
    displayValue.value+= closeParenthes.innerHTML;
    console.log(displayValue.value);
};
