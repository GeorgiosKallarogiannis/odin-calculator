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
