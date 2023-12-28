'use strict'

let numberOne;
let operator;
let numberTwo;




const calculator = {

add: function(a, b) {
    return a + b;
},

subtract: function(a,b) {
    return a - b;
},

multiply: function(a,b) {
    return a * b;
},

divide: function(a,b) {

if (b === 0) {
    alert('LOL, nice try!');
    
} else {
    return a / b;
    
    }
    
},

valueFromDisplay: '',



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
         if (result === undefined) {
            return '';
         } else {
         return Number.isInteger(result) ? result: +result.toFixed(2); 
         }

         default:
         return 'Invalid operator';

    }
},

getResult: function() {
 this.valueFromDisplay = displayValueOne.concat(displayOperator, displayValueTwo);
 let values = this.valueFromDisplay.split(' ');
 console.log(values);
  


 numberOne = Number(values[0]);
  
 operator = String(values[1]);
 

 
 numberTwo = Number(values[2]);
  

 let operateResult = this.operate(numberOne, operator, numberTwo);
 return operateResult;
}
};




const display = document.querySelector('.display');

let displayValueOne = '';
let displayOperator = '';
let displayValueTwo = '';
if (displayValueOne === '' && displayOperator === '' && displayValueTwo === '') {
    display.value = 0;
}




const numbers = Array.from(document.querySelectorAll('.number'));


console.log(numbers);

numbers.forEach((number, index) => {
number.addEventListener('click', function() {
    let numberIndex = numbers.indexOf(this);

  
    

    if (numberIndex === 0) {
        
     if (displayValueOne !== '' && displayOperator !== '') {
        displayValueTwo += 7;
     } else {
  
        
    
        displayValueOne += 7;
    }
        
        
    } else if (numberIndex === 1) {
        
        if (displayValueOne !== '' && displayOperator !== '') {
            displayValueTwo += 8;
         } else {
      
            
        
            displayValueOne += 8;
        }
    } else if (numberIndex === 2) {
        
        
    
        if (displayValueOne !== '' && displayOperator !== '') {
            displayValueTwo += 9;
         } else {
      
            
        
            displayValueOne += 9;
        }
    } else if (numberIndex === 3) {
        
        
    
        if (displayValueOne !== '' && displayOperator !== '') {
            displayValueTwo += 4;
         } else {
      
            
        
            displayValueOne += 4;
        }
    } else if (numberIndex === 4) {
        
        
    
        if (displayValueOne !== '' && displayOperator !== '') {
            displayValueTwo += 5;
         } else {
      
            
        
            displayValueOne += 5;
        }
    } else if (numberIndex === 5) {
        
        
    
        if (displayValueOne !== '' && displayOperator !== '') {
            displayValueTwo += 6;
         } else {
      
            
        
            displayValueOne += 6;
        }
    } else if (numberIndex === 6) {
       
    
        if (displayValueOne !== '' && displayOperator !== '') {
            displayValueTwo += 1;
         } else {
      
            
        
            displayValueOne += 1;
        }
        
    } else if (numberIndex === 7) {
        
        
    
        if (displayValueOne !== '' && displayOperator !== '') {
            displayValueTwo += 2;
         } else {
      
            
        
            displayValueOne += 2;
        }
    } else if (numberIndex === 8) {
        
        
    
        if (displayValueOne !== '' && displayOperator !== '') {
            displayValueTwo += 3;
         } else {
      
            
        
            displayValueOne += 3;
        }
    } else if (numberIndex === 9) {
        
        
    
        if (displayValueOne !== '' && displayOperator !== '') {
            displayValueTwo += 0;
         } else {
      
            
        
            displayValueOne += 0;
        }
    }
    if (displayValueOne !== '' && displayOperator !== '') {
        display.value = displayValueTwo;
     } else {
  
        
    
        display.value = displayValueOne;
    }

})

});

// Calculator operators
const operators = Array.from(document.querySelectorAll('.operation'));
const plus = document.querySelector('.add');
const minus = document.querySelector('.subtract');
const multiplication = document.querySelector('.multiply');
const division = document.querySelector('.divide');

console.log(operators);

operators.forEach((operator, index) => {
    operator.addEventListener('click', function() {
        let operatorIndex = operators.indexOf(this);
      
        if (operatorIndex === 0) {
            if (displayValueOne === '') {
                displayValueOne = display.value;
            }

            if (displayValueOne !== '' && displayOperator !== '' && displayValueTwo !== '') {
                display.value = calculator.getResult();
                displayValueOne = '';
                displayOperator = '';
                displayValueTwo = '';
                division.classList.remove('active');
            } else {
          
            displayOperator += ' / ';
            division.classList.add('active');
        }
            
            
        
        } else if (operatorIndex === 1) {
            
            if (displayValueOne === '') {
                displayValueOne = display.value;
            }

            if (displayValueOne !== '' && displayOperator !== '' && displayValueTwo !== '') {
                display.value = calculator.getResult();
                displayValueOne = '';
                displayOperator = '';
                displayValueTwo = '';
                multiplication.classList.remove('active');
            } else {
          
            displayOperator += ' * ';
            multiplication.classList.add('active');
        }
           
            
        
        } else if (operatorIndex === 2) {
            
            if (displayValueOne === '') {
                displayValueOne = display.value;
            }

            if (displayValueOne !== '' && displayOperator !== '' && displayValueTwo !== '') {
                display.value = calculator.getResult();
                displayValueOne = '';
                displayOperator = '';
                displayValueTwo = '';
                minus.classList.remove('active');
            } else {
          
            displayOperator += ' - ';
            minus.classList.add('active');
        }
           
        
        } else if (operatorIndex === 3) {

            if (displayValueOne === '') {
                displayValueOne = display.value;
            }

            if (displayValueOne !== '' && displayOperator !== '' && displayValueTwo !== '') {
                display.value = calculator.getResult();
                displayValueOne = '';
                displayOperator = '';
                displayValueTwo = '';
                plus.classList.remove('active');
            } else {
          
            displayOperator += ' + ';
            plus.classList.add('active');
        }
           
        
        } else if (operatorIndex === 4) {
            
            console.log(calculator.valueFromDisplay);
            if (displayValueOne === '' && displayValueTwo === '' && displayOperator === '') {
                alert('Please enter a valid input!');
            } else {
            display.value = calculator.getResult();
            displayValueOne = '';
            displayOperator = '';
            displayValueTwo = '';
            
            
           // calculator.valueFromDisplay += display.value; 
              if (plus.classList.contains('active')) {
                plus.classList.remove('active');
              } else if (minus.classList.contains('active')) {
                minus.classList.remove('active');
              } else if (multiplication.classList.contains('active')) {
                multiplication.classList.remove('active');
              } else if (division.classList.contains('active')) {
                division.classList.remove('active');
              }

           
            }
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
            displayValueOne = '';
            displayOperator = '';
            displayValueTwo = '';
            display.value = 0;

            if (plus.classList.contains('active')) {
                plus.classList.remove('active');
              } else if (minus.classList.contains('active')) {
                minus.classList.remove('active');
              } else if (multiplication.classList.contains('active')) {
                multiplication.classList.remove('active');
              } else if (division.classList.contains('active')) {
                division.classList.remove('active');
              }
        } 
    })

})







