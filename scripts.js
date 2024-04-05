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

const divide = function(x, Y) {
    let result = x / Y;
    return result;
};

let number1 
let operator 
let number2 

const operate = function(number1, operator, number2) {
    if (operator = "+") {
        add(number1, number2);
    }else if (operator = "-") {
        subtract(number1, number2);
    }else if (operator = "*") {
        multiply(number1, number2);
    } else if (operator = "/") {
        divide(number1, number2);
    }else {
        return prompt("error");
    }

}