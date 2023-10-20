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

let tempArr = [];
//create operations object
const operators = {
    '^': {
      prec: 4,
      assoc: 'right',
    },
    '*': {
      prec: 3,
      assoc: 'left',
    },
    '/': {
      prec: 3,
      assoc: 'left',
    },
    '+': {
      prec: 2,
      assoc: 'left',
    },
    '-': {
      prec: 2,
      assoc: 'left',
    },
  };
  //create an assertion function that checks the input
const assert = (predicate) =>{
    if(predicate) return;//if everything is fine,carry on
    throw new Error("Assertion failed due to invalid token")
}
//initialize variables to implement the shunting yard algorithm
//create a function that takes in an iput and returns an output in postfix notation
const toRPN = (input)=>{
    const opSymbols = Object.keys(operators)
    let output ="";
    const stack = [];
//iterate through the input and ignore all whitesppaces and call the handle token function
    for(let i of input){
        if(i === "") continue;
        handleToken(i);
    }
    return output;
}
const result = toRPN("1+2");// result should be 1 2+
console.log(result)
//create function to handle the token
const handleToken = (token)=>{
    switch(true){
        //if its a number, add it to the output string
        case !isNaN(parseFloat(token)):
            output+= '' + token;
            break;
        case Object.keys(operators).includes(token):
            const o1 = token;
            let o2 = stack.at(-1); // look at the top of the stack (last element of the array)
             while (
                o2 !== undefined && 
                o2 !== '(' &&
                (operators[o2].prec > operators[o1].prec ||
                    (operators[o2].prec === operators[o1].prec &&
              operators[o1].assoc === 'left'))
             )
             {
                output += ' ' + stack.pop();
                o2 = stack.at(-1);
             }
             stack.push(o1);
             break;
        case token === '(':
            stack.push(token);
            break;
        case token === ')':
            let topOfStack = stack.at(-1);
            while (topOfStack.at(-1) !== '('){
                assert(stack.length !== 0);
                addToOutput(stack.pop());
                topOfStack = stack.at(-1);
            }
        assert(stack.at(-1) === '(');
        stack.pop();
        break;
    }
};

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
        console.log(displayValue.value);
        tempArr.push(displayValue.value);
        console.log(tempArr.join());
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
        //if the operator is +
        case '+':
            displayValue.value = add(num1,num2);
            console.log(displayValue.value);
            break;
            //if the operator is -
        case  '-':
            displayValue.value = subtract(num1,num2);
            console.log(displayValue.value);
            break;
            //if operator is *
        case '*':
            displayValue.value = multiply(num1,num2);
            console.log(displayValue.value);
            break;
            //if operator is /
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
        output.push(displayValue.value)
        console.log(output)
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
