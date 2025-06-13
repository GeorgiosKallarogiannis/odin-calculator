let firstOperand = "";
let secondOperand = "";
let operator = "";

const keyboard = document.querySelector(".keyboard");
const display = document.querySelector(".display");

keyboard.addEventListener("click", (e) => {
    if (e.target.classList.contains("operation-field")) {
        if (!operator) {
            operator = e.target.innerText;
        } else {
            if (firstOperand && secondOperand && operator) {
                display.innerText = operate(
                    firstOperand,
                    secondOperand,
                    operator
                );

                firstOperand = display.innerText;
                secondOperand = "";
                operator = e.target.innerText;
                console.log({ firstOperand, secondOperand, operator });
            }
        }
    }

    if (e.target.classList.contains("num-field")) {
        if (!operator) {
            firstOperand += e.target.innerText;
            console.log({ firstOperand });
        } else {
            secondOperand += e.target.innerText;
            console.log({ secondOperand });
        }
    }

    if (e.target.classList.contains("input")) {
        display.innerText += e.target.innerText;
    }

    if (e.target.classList.contains("equal-field")) {
        if (firstOperand && secondOperand && operator) {
            display.innerText = operate(firstOperand, secondOperand, operator);
        }
    }

    if (e.target.classList.contains("clear-field")) {
        firstOperand = secondOperand = operator = "";
        result = 0;
        display.innerText = "";
    }
});

function operate(firstNumber, secondNumber, operator) {
    let result = 0;

    switch (operator) {
        case "+":
            result = add(
                parseFloat(firstNumber.replace(",", ".")),
                parseFloat(secondNumber.replace(",", "."))
            );
            break;
        case "-":
            result = subtract(
                parseFloat(firstNumber.replace(",", ".")),
                parseFloat(secondNumber.replace(",", "."))
            );
            break;
        case "*":
            result = multiply(
                parseFloat(firstNumber.replace(",", ".")),
                parseFloat(secondNumber.replace(",", "."))
            );
            break;
        case "/":
            result = divide(
                parseFloat(firstNumber.replace(",", ".")),
                parseFloat(secondNumber.replace(",", "."))
            );
            break;
        default:
            break;
    }

    return result;
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
