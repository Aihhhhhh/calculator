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
/*const evaluate = (input)=>{
    const opSymbols = Object.keys(operators)
    let output = [];
    const stack = [];
//function that looks at the last item of the array
    const peek = () => {
        return stack.at(-1);
    };
    //function that adds items to the output array
    const addToOutput = (token) => {
        output.push(token);
    };
      //function to handle pop
    const handlePop = () => {
        const op = stack.pop();

        if(op === '(') return;

        const right = parseFloat(output.pop());
        const left = parseFloat(output.pop());

        switch(op){
            case '+':
                return left+ right;
            case '-':
                return left-right;
            case '*':
                return left*right;
            case '/':
                return left/right;
            default:
                throw new Error(`invalid op ${op}`);
        }
    }
//iterate through the input and ignore all whitesppaces and call the handle token function

//create function to handle the token
    const handleToken = (token)=>{
        switch(true){
            //check if token is a number
            case !isNaN(parseFloat(token)):
                addToOutput(token);
                break;
            case opSymbols.includes(token):
                const o1 = token;
                let o2 = peek(); // look at the top of the stack (last element of the array)
                while (
                    o2 !== undefined && 
                    o2 !== '(' &&
                    (operators[o2].prec > operators[o1].prec ||
                        (operators[o2].prec === operators[o1].prec &&
                            operators[o1].assoc === 'left'))
                ){
                    addToOutput(handlePop());
                    o2 = peek();
                }
                stack.push(o1);
                break;
            case token === '(':
                stack.push(token);
                break;
            case token === ')':
                let topOfStack = peek();
                while (topOfStack !== '('){
                    assert(stack.length !== 0);
                    addToOutput(stack.pop());
                    topOfStack = peek();
                }
                assert(peek() === '(');
                handlePop();
                break;
            default:
                throw new Error(`Invalid token: ${token}`);
        }
    };

//check for empty spaces and ignore them
    for(let i of input){
        if(i === " ")continue;
        handleToken(i);
    }
//assert the stack is not empty and the last item isnt a left parenthesis
    while (stack.length !== 0){
        assert(peek() !== '(');
        addToOutput(stack.pop());
    }
    return output[0];
};
    
*/  

//create an RPN evaluator



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
