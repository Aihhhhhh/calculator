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
//let operator= ['+','-','*','/'];//
//declare second variable to hold second number
let num2=null;
//store result
//create function ate that takes two numbers and an operator
//declare current operation
let displayValue = document.getElementById("result");

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
calckeys.forEach(calc => {
    calc.addEventListener("click",()=>{
        displayValue.value+= calc.innerHTML;
        console.log(displayValue.value)
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
        displayValue.value += oper.innerHTML
    })
});
//create operate function that takes two numbers and an operator
const operate = (num1,num2,operator) => {
    switch(operator){
        case '+':
            displayValue.value = add(num1,num2);
            console.log(displayValue.value);
            break;
        case  '-':
            displayValue.value = subtract(num1,num2);
            console.log(displayValue.value);
            break;
        case '*':
            displayValue.value = multiply(num1,num2);
            console.log(displayValue.value);
            break;
        case '/':
            displayValue.value = divide(num1,num2);
            console.log(displayValue.value);
            break;
        default:
            displayValue.value = null;
            console.log(displayValue.value)
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
        console.log(equalls.innerHTML);
        //remove whitespaces from the value of the displayvalue
        displayValue.value = displayValue.value.replace(/ /g,"");
        console.log(displayValue.value)
    })
}
equal()
//target the clear button
function clear(){
    const clears = document.querySelector(".clear");
    console.log(clears);
//attach an event listener
    clears.addEventListener("click",()=>{
        displayValue.value = null;
        console.log(clears.innerHTML);
    })
};
clear()
//target the decimal point
const decimals = document.querySelector(".point");
console.log(decimals);
//add an event listener to capture the float and update the value on the display
decimals.addEventListener("click",()=>{
    displayValue.value+= decimals.innerHTML;
    console.log(decimals.innerHTML);
})
const percentage = document.querySelector(".percentage");
percentage.addEventListener("click",() =>{
    console.log(percentage.innerHTML);
    displayValue.value+=percentage.innerHTML
})
