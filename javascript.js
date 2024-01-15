function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    if(operator === "+") {
        return add(num1, num2);
    } else if(operator === "-") {
        return subtract(num1, num2);
    } else if(operator === "*") {
        return multiply(num1, num2);
    } else if(operator === "/") {
        return divide(num1, num2);
    } else {
        throw new Error("Not a valid operator!");
    }
}

function createNumbers() {
    for(let i = 9; i >= 0; i--) {
        const numberButton = document.createElement("button");
        numberButton.textContent = `${i}`;
        numberButton.style.cssText = numberStyle;
        numbers.appendChild(numberButton);
        if(i === 1) {
            const dotButton = document.createElement("button");
            dotButton.textContent = ".";
            dotButton.style.cssText = numberStyle;
            numbers.appendChild(dotButton);
        }
    }
    const emptyDiv = document.createElement("div");
    emptyDiv.style.cssText = numberStyle;
    numbers.appendChild(emptyDiv);
}

function createOperators() {
    let operatorArray = ["*", "-", "+", "="]
    for(let i = 0; i < operatorArray.length; i++) {
        const operatorButton = document.createElement("button");
        operatorButton.textContent = operatorArray[i];
        operatorButton.style.cssText = numberStyle;
        operators.appendChild(operatorButton);
    }
}

let num1;
let num2;
let operator;
const calculator = document.getElementById("calculator");
const display = document.getElementById("display");
const numbers = document.getElementById("numbers");
const operators = document.getElementById("operators");
const LAST_DIGIT = 9;
const CALCULATOR_HEIGHT = 600;
const CALCULATOR_WIDTH = 400;

const calculatorStyle = `
    width: ${CALCULATOR_WIDTH}px;
    height: ${CALCULATOR_HEIGHT}px;
    display: flex;
    justify-content:center;
    flex-direction: column;
    align-items: center;
    border: solid black 3px;
    border-radius: 8px;
`;
const numberStyle = `
    width: ${CALCULATOR_WIDTH/4}px;
    height: ${CALCULATOR_WIDTH/4}px;
    border-radius: 8px;
    margin: 0px;
    font-size: 20px;
`;
calculator.style.cssText = calculatorStyle;

createNumbers();
createOperators();

