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
        numberButton.style.cssText = buttonStyle;
        numbers.appendChild(numberButton);
        if(i === 1) {
            const dotButton = document.createElement("button");
            dotButton.textContent = ".";
            dotButton.style.cssText = buttonStyle;
            numbers.appendChild(dotButton);
        }
    }
    const negativeButton = document.createElement("button");
    negativeButton.style.cssText = buttonStyle;
    negativeButton.textContent = "(-/+)";
    numbers.appendChild(negativeButton);
}

function createOperators() {
    let operatorArray = ["*", "-", "+", "="];
    for(let i = 0; i < operatorArray.length; i++) {
        const operatorButton = document.createElement("button");
        operatorButton.textContent = operatorArray[i];
        operatorButton.style.cssText = buttonStyle;
        operators.appendChild(operatorButton);
    }
}

function createAdjusters() {
    let adjusterArray = ["C", "(", ")", "/"];
    for(let i = 0; i < adjusterArray.length; i++) {
        const adjusterButton = document.createElement("button");
        adjusterButton.textContent = adjusterArray[i];
        adjusterButton.style.cssText = buttonStyle;
        adjusters.appendChild(adjusterButton);
    }
}

let num1;
let num2;
let operator;
const calculator = document.getElementById("calculator");
const display = document.getElementById("display");
const numbers = document.getElementById("numbers");
const operators = document.getElementById("operators");
const adjusters = document.getElementById("adjusters");
const deleteButton = document.getElementById("delete");
const LAST_DIGIT = 9;
const CALCULATOR_WIDTH = 400;

const calculatorStyle = `
    width: ${CALCULATOR_WIDTH}px;
    height: auto;
    display: flex;
    justify-content:center;
    flex-direction: column;
    align-items: center;
    border: solid black 3px;
    border-radius: 8px;
`;
const buttonStyle = `
    width: ${(CALCULATOR_WIDTH-24)/4}px;
    height: ${(CALCULATOR_WIDTH-24)/4}px;
    border-radius: 8px;
    margin: 3px;
    font-size: 20px;
    background-color: #e8a87c;
`;

const displayStyle = `
    display: flex;
    justify-content: end;
    align-items: center;
    width: ${CALCULATOR_WIDTH}px;
    height: 100px;
    font-size: 50px;
    font-weight: bold;
    border: solid 2px;
`;

const deleteButtonStyle = `
    width: ${(CALCULATOR_WIDTH-24)/4}px;
    height: ${(CALCULATOR_WIDTH-24)/8}px;
    border-radius: 8px;
    margin: 3px;
    font-size: 20px;
    background-color: #e8a87c;
`;

calculator.style.cssText = calculatorStyle;
display.style.cssText = displayStyle;
deleteButton.style.cssText = deleteButtonStyle;
deleteButton.textContent = "←";

createNumbers();
createOperators();
createAdjusters();

