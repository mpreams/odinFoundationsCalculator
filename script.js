const add = function(a, b) {
    return a + b;
};

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

let first;
let operator;
let second;

const operate = function(first, operator, second) {
    if (operator === '+') return add(first, second);
    if (operator === '-') return subtract(first, second);
    if (operator === '*') return multiply(first, second);
    if (operator === '/') return divide(first, second);
}