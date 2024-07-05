const add = (a, b) => Number(a) + Number(b);

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

let mem = document.createTextNode('Memory: ');
const container = document.querySelector('#container');
container.insertBefore(mem, display);

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
zero.onclick = () => {
    display.textContent += 0;
}
clear.onclick = () => {
    first, operator, second = undefined, undefined, undefined;
    display.textContent = '';
}

const plus = document.querySelector('#add');
const minus = document.querySelector('#subtract');
const multiplication = document.querySelector('#multiply');
const division = document.querySelector('#divide');

plus.onclick = () => {
    if (!first) {
        first = display.textContent;
    } else {
        second = display.textContent;
        first = Math.fround(operate(first, operator, second));
        mem.textContent = 'Memory: ' + first;
    }
    operator = '+';
    display.textContent = '';
};
minus.onclick = () => {
    if (!first) {
        first = display.textContent;
    } else {
        second = display.textContent;
        first = Math.fround(operate(first, operator, second));
        mem.textContent = 'Memory: ' + first;
    }
    operator = '-';
    display.textContent = '';
};
multiplication.onclick = () => {
    if (!first) {
        first = display.textContent;
    } else {
        second = display.textContent;
        first = Math.fround(operate(first, operator, second));
        mem.textContent = 'Memory: ' + first;
    }
    operator = '*';
    display.textContent = '';
};
division.onclick = () => {
    if (!first) {
        first = display.textContent;
    } else {
        second = display.textContent;
        first = Math.fround(operate(first, operator, second));
        mem.textContent = 'Memory: ' + first;
    }
    operator = '/';
    display.textContent = '';
};


equals.onclick = () => {
    second = display.textContent;
    mem.textContent = 'Memory: ';
    if (first !== undefined && operator !== undefined) {
        display.textContent = Math.fround(operate(first, operator, second));
    } else if (operator === '/' && second === 0) {
        display.textContent = 'Crash Test Dummy';
    } else {
        display.textContent = 'Incomplete equation';
    }
    first, operator, second = undefined, undefined, undefined;
};