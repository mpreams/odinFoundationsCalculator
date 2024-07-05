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

const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const clear = document.querySelector('#clear');
const zero = document.querySelector('#zero');
const equals = document.querySelector('#equals');
const display = document.querySelector('#display');

one.onclick = () => {
    display.textContent += 1;
}
two.onclick = () => {
    display.textContent += 2;
}
three.onclick = () => {
    display.textContent += 3;
}
four.onclick = () => {
    display.textContent += 4;
}
five.onclick = () => {
    display.textContent += 5;
}
six.onclick = () => {
    display.textContent += 6;
}
seven.onclick = () => {
    display.textContent += 7;
}
eight.onclick = () => {
    display.textContent += 8;
}
nine.onclick = () => {
    display.textContent += 9;
}