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

let num1;
let num2;
let operator;

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

try {
    console.log(operate(3, 4, "-"));
} catch(e) {
    console.error(e);
}