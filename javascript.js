function add(num1, num2) {
    let sum = (num1 + num2).toString();
    if(sum.length > 13) {
        sum = sum.substring(0,10)
    }
    return sum;
}

function subtract(num1, num2) {
    let difference = (num1 - num2).toString();
    if(difference.length > 13) {
        difference = difference.substring(0,10)
    }
    return difference;
}

function multiply(num1, num2) {
    let product = (num1 * num2).toString();
    if(product.length > 13) {
        product = product.substring(0,10)
    }
    return product;
}

function divide(num1, num2) {
    let quotient = (num1 / num2).toString();
    if(quotient.length > 13) {
        quotient = quotient.substring(0,10)
    }
    return quotient;
}

function operate(num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
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
        numberButton.addEventListener('click', () => {
            if(operator == "") {
                display.textContent += numberButton.textContent;
            } else if(operator != "" && num2 != "") {
                num2 = "";
                display.textContent = "" + numberButton.textContent;
            } else {
                display.textContent += numberButton.textContent;
            }
            
        });
        numbers.appendChild(numberButton);
        if(i === 1) {
            const dotButton = document.createElement("button");
            dotButton.textContent = ".";
            dotButton.style.cssText = buttonStyle;
            dotButton.addEventListener('click', () => {
                if(!display.textContent.includes(".")) {
                    display.textContent += ".";
                }
                
            });
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
        if(i < operatorArray.length - 1) {
            operatorButton.addEventListener('click', () => {
                if(operator != "") {
                    num2 = display.textContent;
                    num1 = operate(num1, num2, operator);
                    operator = operatorButton.textContent;
                    display.textContent = num1;
                } else {
                    operator = operatorButton.textContent;
                    num1 = display.textContent;
                    display.textContent = "";
                }
                
            });
        } else {
            operatorButton.addEventListener('click', () => {
                if(num1 != undefined) {
                    num2 = display.textContent;
                    num1 = operate(num1, num2, operator);
                    display.textContent = num1;
                    operator = "";
                }
            })
        }
    }
}

function createDeleteButton() {
    deleteButton.style.cssText = deleteButtonStyle;
    deleteButton.textContent = "←";
    deleteButton.addEventListener('click', () => {
        display.textContent = display.textContent.slice(0,-1);
    });
}

function createAdjusters() {
    let adjusterArray = ["C", "/"];
    for(let i = 0; i < adjusterArray.length; i++) {
        const adjusterButton = document.createElement("button");
        adjusterButton.textContent = adjusterArray[i];
        adjusterButton.style.cssText = buttonStyle;
        adjusters.appendChild(adjusterButton);
        if(i === 0) {
            adjusterButton.addEventListener('click', () => {
                display.textContent = '';
                num1 = '';
                num2 = '';
                operator = '';
            })
        } else {
            adjusterButton.addEventListener('click', () => {
                operator = adjusterButton.textContent;
                num1 = display.textContent;
                display.textContent = "";
            })
        }
    }
}

let num1;
let num2;
let operator = "";
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
    border: solid black 10px;
    border-radius: 8px;
    padding: 15px
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
    margin-left: 5px;
`;

const deleteButtonStyle = `
    width: ${(CALCULATOR_WIDTH-24)/3}px;
    height: ${(CALCULATOR_WIDTH-24)/8}px;
    border-radius: 8px;
    margin: 3px;
    font-size: 20px;
    background-color: #e8a87c;
`;

calculator.style.cssText = calculatorStyle;
display.style.cssText = displayStyle;

createNumbers();
createOperators();
createAdjusters();
createDeleteButton();
