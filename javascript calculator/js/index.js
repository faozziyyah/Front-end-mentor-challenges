
// calculator Object
const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

//input digits
function inputDigit(digit){
  const {displayValue, waitingForSecondOperand} = calculator;
  
  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
  
  calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
  }
  
console.log(calculator);

}

//update the display
function updateDisplay(){
  //select the element with class calculator-screen
  const display = document.querySelector('.calculator-screen');
  //update the value of the element with the content of displayValue
  display.value = calculator.displayValue;
}
updateDisplay();

//handle key presses
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
  
  const {target} = event;
  const {value} = target;
  
 if (!target.matches('button')) {
   return;
 }
 
 switch (value) {
   case '+':
   case '-':
   case '*':
   case '/':
   case '=':
     // code
     handleOperator(value);
     break;
     
      case '.':
     // code
     inputDecimal(value);
     break;
     
      case 'all-clear':
     // code
     resetCalculator();
     break;
   
   default:
     // code
if (Number.isInteger(parseFloat(value))) {
  inputDigit(target.value);
}

 }
  updateDisplay();
  
});

//input decimal point
function inputDecimal(dot){
  
  if (calculator.waitingForSecondOperand === true) {
    calculator.displayValue = '0.';
    calculator.waitingForSecondOperand = false;
    
    return;
  }
  
  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }
  
}

//handling operators
function handleOperator(nextOperator){
  
  const {firstOperand, displayValue, operator} = calculator;
  
  const inputValue = parseFloat(displayValue);
  
  if (operator && calculator.waitingForSecondOperand) {
    calculator.operator = nextOperator;
    console.log(calculator);
    return;
  }
  
  if (firstOperand === null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const result = calculate(firstOperand, inputValue, operator);
    calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
    calculator.firstOperand = result;
  }
  
  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
  console.log(calculator);
  
}

function calculate(firstOperand, secondOperand, operator) {
  
  if (operator === '+') {
    return firstOperand + secondOperand;
  } else if (operator === '-') {
    return firstOperand - secondOperand;
  } else if (operator === '*') {
    return firstOperand * secondOperand;
  } else if (operator === '/') {
    return firstOperand / secondOperand;
  }
  
  return secondOperand;
  
}

//reset calculator
function resetCalculator(){
  calculator.displayValue = '0';
  calculator.firstOperand = 'null';
  calculator.waitingForSecondOperand = 'false';
  calculator.operator = 'null';
  console.log(calculator);
}
