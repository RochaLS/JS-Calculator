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
            add(n1, n2);
            break;
        case '-':
            subtract(n1, n2);
            break;
        case 'x':
            multiply(n1, n2);
            break;
        case '÷':
            divide(n1, n2);
            break;
        default:
            console.log('invalid operator');
            break;
    }
}