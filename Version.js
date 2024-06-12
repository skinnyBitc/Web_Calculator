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
        let historyItem = document.createElement('li');
        historyItem.textContent = `${display.value} = ${result}`;
        
        if (historyList.children.length >= 5) {
            historyList.removeChild(historyList.lastChild);
        }
        
        historyList.insertBefore(historyItem, historyList.firstChild); 
        display.value = result;
    } catch (e) {
        display.value = 'Error';
    }
}

function toggleHistory() {
    let historyContainer = document.getElementById('historyContainer');
    let toggleButton = document.getElementById('toggleHistoryButton');
    if (historyContainer.style.display === 'none' || historyContainer.style.display === '') {
        historyContainer.style.display = 'block';
        toggleButton.textContent = 'Hide History';
    } else {
        historyContainer.style.display = 'none';
        toggleButton.textContent = 'Show History';
    }
}
