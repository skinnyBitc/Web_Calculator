let displayValue = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';
let resultCalculated = false;

function clearDisplay() {
    displayValue = '';
    operator = '';
    firstOperand = '';
    secondOperand = '';
    resultCalculated = false;
    updateDisplay();
}

function deleteLast() {
    if (resultCalculated) {
        clearDisplay();
    } else {
        displayValue = displayValue.slice(0, -1);
        if (operator === '') {
            firstOperand = firstOperand.slice(0, -1);
        } else if (secondOperand !== '') {
            secondOperand = secondOperand.slice(0, -1);
        }
        updateDisplay();
    }
}

function appendValue(value) {
    if (resultCalculated) {
        clearDisplay();
    }
    if (operator === '') {
        firstOperand += value;
    } else {
        secondOperand += value;
    }
    displayValue += value;
    updateDisplay();
}

function appendOperator(op) {
    if (resultCalculated) {
        clearDisplay();
    }
    if (operator === '') {
        operator = op;
        displayValue += op;
        updateDisplay();
    }
}

function calculateResult() {
    if (firstOperand && operator && secondOperand) {
        let result;
        const num1 = parseFloat(firstOperand);
        const num2 = parseFloat(secondOperand);

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
        }

        displayValue = result.toString();
        operator = '';
        firstOperand = '';
        secondOperand = '';
        resultCalculated = true;
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

