const firstOperand = "";
const secondOperand = "";
const operator = "";

function operate(firstOperand, operator, secondOperand) {
    const firstNumber = Number(firstOperand);
    const secondNumber = Number(secondOperand);

    switch (operator) {
        case "+":
            add(firstNumber, secondNumber);
            break;
        case "-":
            subtract(firstNumber, secondNumber);
            break;
        case "*":
            multiply(firstNumber, secondNumber);
            break;
        case "/":
            divide(firstNumber, secondNumber);
            break;
    }
}

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    const quotient = firstNumber / secondNumber;
    const divisionByZero = "Division by 0 not possible";

    return quotient === Infinity ? divisionByZero : quotient;
}

if (typeof module === "object") {
    module.exports = {
        add,
        subtract,
        multiply,
        divide,
    };
}
