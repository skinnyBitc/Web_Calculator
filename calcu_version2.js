function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.toString().slice(0, -1);
}

function appendValue(value) {
    let display = document.getElementById('display');
    display.value += value;
}

function calculateResult() {
    let display = document.getElementById('display');
    
    try {
        // Calculate the result of the expression
        let result = eval(display.value);
        
        // Ensure that the expression only involves addition
        if (/^[0-9+\s]+$/.test(display.value)) {
            display.value = result;
        } else {
            display.value = 'Error';
        }
    } catch (e) {
        display.value = 'Error';
    }
}

