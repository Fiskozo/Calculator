const add = function(x, y) {
    let result = x + y;
    return result;	
  };
  
const subtract = function(x, y) {
    let result = x - y;
    return result;		
  };

const multiply = function(x, Y) {
    let result = x * Y;
    return result;
};

const divideFunc = function(x, Y) {
    let result = x / Y;
    return result;
};

let number1;
let operator;
let number2;

const operate = function(number1, operator, number2) {
    if (operator = "+") {
        let result = add(number1, number2);
        return result;
    }else if (operator = "-") {
        let result = subtract(number1, number2);
        return result;
    }else if (operator = "*") {
        let result = multiply(number1, number2);
        return result;
    } else if (operator = "/") {
        let result= divideFunc(number1, number2);
        return result;
    }else {
        return prompt("error");
    }

}

const display = document.querySelector('#display');
display.classList.add('display');
const clear = document.querySelector('#clear');
clear.classList.add('clear');
const divide = document.querySelector('#divide');
divide.classList.add('divide');
const seven = document.querySelector('#seven');
seven.classList.add('seven');

const displayValue = function() {
    let display = querySelector
}