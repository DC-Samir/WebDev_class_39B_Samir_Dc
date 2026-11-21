
let add = (a, b) => {
    return a + b;
};

let subtract = (a, b) => {
    return a - b;
};

let multiply = (a, b) => {
    return a * b;
};

let divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    else {
        return a / b;
    }
};

let calculate = (a, b, operationCallback) => {
    return operationCallback(a, b);
};

let num1 = 50;
let num2 = 45;

console.log("Addition: " + num1 + " + " + num2 + " = " + calculate(num1, num2, add));

console.log("Subtraction: " + num1 + " - " + num2 + " = " + calculate(num1, num2, subtract));

console.log("Multiplication: " + num1 + " * " + num2 + " = " + calculate(num1, num2, multiply));

console.log("Division: " + num1 + " / " + num2 + " = " + calculate(num1, num2, divide));
