const resultField = document.querySelector('.result-field');
const clearButton = document.querySelector('reset');
let tmpValue;
let tmpValue2;
let tmpOperator;
let optCounter = 0;
let replaceField = true;

function add (n1, n2) {
	return n1 + n2;
}

function subtract (n1, n2) {
	return n1 - n2;
}

function multiply (n1, n2) {
	return n1 * n2
}

function divide(n1, n2) {
    return n1 / n2
}

function operate(n1, n2, operator) {
    switch (operator) {
        case undefined:
            break;
        case '+':
            tmpValue = add(n1, n2);
            break;
        case '-':
            tmpValue = subtract(n1, n2);
            break;
        case 'x':
            tmpValue = multiply(n1, n2);
            break;
        case '÷':
            tmpValue = divide(n1, n2);
            break;
        default:
            break;
    }
}

function setupCalculator() {
   const buttons = document.querySelectorAll('.calc-btn');
   buttons.forEach(button => {
       if (!isNaN(button.textContent)) {
           button.addEventListener('click', () => {
                let value = button.textContent;
                if (replaceField) {
                    tmpValue = Number(value);
                     displayValue(value);
                    replaceField = false;
                 } else {
                    let processedValue = resultField.textContent.concat(value);
                    tmpValue = Number(processedValue);
                    displayValue(processedValue);
                }
                operate(tmpValue2, tmpValue, tmpOperator);
           });
       } else {
           button.addEventListener('click', () => {
               if (button.textContent == 'AC') {
                   clear();
               } else if ((button.textContent == '=') || (button.textContent == '=' && optCounter > 0)) {
                   tmpOperator = button.textContent;
                   displayValue(tmpValue);
               } else {
                   tmpOperator = button.textContent;
                   optCounter++;
                   tmpValue2 = tmpValue;
               }
               replaceField = true;
           });
       }
   });
}


function displayValue(value) {
    resultField.textContent = value;
}

function clear() {
    tmpValue = undefined;
    tmpValue2 = undefined;
    tmpOperator = undefined;
    optCounter = 0;
    replaceField = true;
    resultField.textContent = '0';
}


setupCalculator()