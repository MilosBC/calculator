'use strict'

let numberOne;
let operator;
let numberTwo;

const calculator = {

add: function() {
    return a - b;
},

subtract: function(a,b) {
    return a - b;
},

multiply: function(a,b) {
    return a * b;
},

divide: function(a,b) {
    return a / b;
},

operate: function(a,op,b) {
    let result;
    switch (op) {
        case '+':
          result = this.add(a,b);
          return result;
         
         case '-':
         result = this.subtract(a,b);
         return result;
            
         case '*':
         result = this.multiply(a,b);
         return result;

         case '/':
         result = this.divide(a,b);
         return result; 

         default:
         return 'Invalid operator';

    }
}
};














console.log(calculator.operate(30, '*', 3));

const display = document.querySelector('.display');

// Calculator numbers

const numbers = Array.from(document.querySelectorAll('.number'));


console.log(numbers);

numbers.forEach((number, index) => {
number.addEventListener('click', function() {
    let numberIndex = numbers.indexOf(this);

    if (numberIndex === 0) {
        display.value += 7;
    } else if (numberIndex === 1) {
        display.value += 8;
    } else if (numberIndex === 2) {
        display.value += 9;
    } else if (numberIndex === 3) {
        display.value += 4;
    } else if (numberIndex === 4) {
        display.value += 5;
    } else if (numberIndex === 5) {
        display.value += 6;
    } else if (numberIndex === 6) {
        display.value += 1;
    } else if (numberIndex === 7) {
        display.value += 2;
    } else if (numberIndex === 8) {
        display.value += 3;
    } else if (numberIndex === 9) {
        display.value += 0;
    }

})

});
// Calculator operators
const operators = Array.from(document.querySelectorAll('.operation'));

console.log(operators);

operators.forEach((operator, index) => {
    operator.addEventListener('click', function() {
        let operatorIndex = operators.indexOf(this);

        if (operatorIndex === 0) {
            display.value += '/';
        } else if (operatorIndex === 1) {
            display.value += '*';
        } else if (operatorIndex === 2) {
            display.value += '-';
        } else if (operatorIndex === 3) {
            display.value += '+';
        }
    })

})

// Calculator functions

const calcFunctions = Array.from(document.querySelectorAll('.function'));
console.log(calcFunctions);

calcFunctions.forEach((calcFunction, index) => {
    calcFunction.addEventListener('click', function() {
        let functionIndex = calcFunctions.indexOf(this);

        if (functionIndex === 0) {
            display.value = '';
        } 
    })

})







