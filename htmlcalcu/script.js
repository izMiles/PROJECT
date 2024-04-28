function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let expression = document.getElementById('display').value;
    let result;

    try {
        result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Error in expression');
    }
}
