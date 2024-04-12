const addFunc = function(x, y) {
    let result = x + y;
    return result;	
  };
  
const subtractFunc = function(x, y) {
    let result = x - y;
    return result;		
  };

const multiplyFunc = function(x, Y) {
    let result = x * Y;
    return result;
};

const divideFunc = function(x, Y) {
    let result = x / Y;
    return result;
};

let number1;
let number2;

const operate = function(number1, operator, number2) {
    if (operator = "+") {
        let result = addFunc(number1, number2);
        return result;
    }else if (operator = "-") {
        let result = subtractFunc(number1, number2);
        return result;
    }else if (operator = "*") {
        let result = multiplyFunc(number1, number2);
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
const number = document.querySelector('#number');
number.classList.add('number');
const operator = document.querySelector('#operator');
operator.classList.add('operator');




const displayValue = function() {
    let display = querySelector
}