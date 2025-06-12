let firstOperand = "";
let secondOperand = "";
let operator = "";
let result = 0;

const keyboard = document.querySelector(".keyboard");
const display = document.querySelector(".display");

keyboard.addEventListener("click", (e) => {
    if (e.target.classList.contains("operation-field")) {
        if (!operator) {
            operator = e.target.innerText;
            console.log({ operator });
        }
    }

    if (e.target.classList.contains("num-field")) {
        if (result) {
            display.innerText = "";
            result = 0;
        }

        if (!operator) {
            firstOperand += e.target.innerText;
            console.log({ firstOperand });
        } else {
            secondOperand += e.target.innerText;
            console.log({ secondOperand });
        }
    }

    if (e.target.classList.contains("input")) {
        if (result) {
            display.innerText = "";
            result = 0;
        }

        display.innerText += e.target.innerText;
    }

    if (e.target.classList.contains("equal-field")) {
        switch (operator) {
            case "+":
                result = add(
                    parseFloat(firstOperand.replace(",", ".")),
                    parseFloat(secondOperand.replace(",", "."))
                );
                break;
            case "-":
                result = subtract(
                    parseFloat(firstOperand.replace(",", ".")),
                    parseFloat(secondOperand.replace(",", "."))
                );
                break;
            case "*":
                result = multiply(
                    parseFloat(firstOperand.replace(",", ".")),
                    parseFloat(secondOperand.replace(",", "."))
                );
                break;
            case "/":
                result = divide(
                    parseFloat(firstOperand.replace(",", ".")),
                    parseFloat(secondOperand.replace(",", "."))
                );
                break;
            default:
                break;
        }

        display.innerText = result;
        firstOperand = secondOperand = operator = "";
    }

    if (e.target.classList.contains("clear-field")) {
        firstOperand = secondOperand = operator = "";
        result = 0;
        display.innerText = "";
    }
});

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
