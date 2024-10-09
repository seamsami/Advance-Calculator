// Calculator functionality for basic calculations
let output = document.getElementById('outputText');
let buttons = document.querySelectorAll('.button');
let clearButton = document.getElementById('clear');
let equalButton = document.getElementById('equal');
let currentExpression = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;
        if (value === 'C') {
            currentExpression = '';
        } else if (value === '=') {
            currentExpression = eval(currentExpression);
        } else {
            currentExpression += value;
        }
        output.innerText = currentExpression;
    });
});

clearButton.addEventListener('click', () => {
    currentExpression = '';
    output.innerText = '0';
});

equalButton.addEventListener('click', () => {
    try {
        currentExpression = eval(currentExpression).toString();
        output.innerText = currentExpression;
    } catch (e) {
        output.innerText = 'Error';
        currentExpression = '';
    }
});
