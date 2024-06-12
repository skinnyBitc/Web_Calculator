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
    let historyList = document.getElementById('historyList');
    
    try {
        let result = eval(display.value);
        
        display.value = result;
    } catch (e) {
        display.value = 'Error';
    }
}
