let resultField = document.querySelector('.result-field')
let tmpValue;
let tmpOperator;
let optCounter = 0;

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
            console.log('invalid operator');
            break;
    }

    tmpOperator = undefined;
}

function setupCalculator() {
   const buttons = document.querySelectorAll('.calc-btn');
   buttons.forEach(button => {
       if (!isNaN(button.textContent)) {
           button.addEventListener('click', () => {
               if (tmpOperator !== undefined) {
                   displayValue(button.textContent)
                   operate(tmpValue, Number(button.textContent), tmpOperator)
               } else {
                   let value = button.textContent;
                   if (resultField.textContent === '0') {
                        displayValue(value)
                   }
                    else {
                       let processedValue = resultField.textContent.concat(value)
                        tmpValue = Number(processedValue);
                        displayValue(processedValue)
                   }
               }
           });
       } else {
           button.addEventListener('click', () => {
               if ((button.textContent == '=') || (button.textContent != '=' && optCounter > 0)) {
                   tmpOperator = button.textContent;
                   displayValue(tmpValue);
               } else {
                   tmpOperator = button.textContent;
                   optCounter++;
               }
           });
       }
   });
}

function displayValue(value) {
    console.log(value)
    resultField.textContent = value;
}

setupCalculator()