'use strict'

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}





let numberOne;
let operator;
let numberTwo;

function operate(a,op,b) {
    let result;
    switch (op) {
        case '+':
          result = add(a,b);
          return result;
         
         case '-':
         result = subtract(a,b);
         return result;
            
         case '*':
         result = multiply(a,b);
         return result;

         case '/':
         result = divide(a,b);
         return result; 

         default:
         return 'Invalid operator';

    }
}

console.log(operate(30, '-', 3));

