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



const display = document.querySelector('#display');
display.classList.add('display');
const clear = document.querySelector('#clear');
clear.classList.add('clear');
const equals = document.querySelector('#equals');
equals.classList.add('equals');
const number = document.querySelectorAll('#number');
const operator = document.querySelectorAll('#operator');
let number1;
let number2;
let displayValue;
let selectedOperator;


number.forEach(button => button.addEventListener('click', function() {
    display.textContent += this.textContent;
    displayValue = display.textContent;    
}))
operator.forEach(button => button.addEventListener('click', function() {
    if (selectedOperator == undefined && displayValue != undefined) {
        number1 = display.textContent;
        display.textContent += this.textContent;
        selectedOperator = this.textContent;
    }else{
        alert("error")
    }     
}))
equals.addEventListener('click', function(){
    number2 = displayValue.split(selectedOperator)[1];
    let result = operate(Number(number1), selectedOperator, Number(number2));
    display.textContent = result;
    selectedOperator = undefined;
})

operate = function(number1, operator, number2) {
    if (operator == "÷" && number2 == "0"){
        alert("Cant divide by zero :D");
    }else if(operator = "+") {
      return addFunc(number1, number2);
    }else if (operator = "-") {
      return subtractFunc(number1, number2);
    }else if (operator = "*") {
      return multiplyFunc(number1, number2);
    } else if (operator = "/") {
      return divideFunc(number1, number2);
    }else {
      return prompt("error");
    }
}


/* function operate(number1, operator, number2) {
  switch (operator) {
    case "÷" && number2 == "0":
    throw("cant divide by 0 dumbass")
  case "+":
    return addFunc(number1, number2)
  case "-":
    return subtractFunc(number1, number2)
  case "*":
    return multiplyFunc(number1, number2)
  case "÷":
    return divideFunc(number1, number2)
  default:
    throw("Did not recognise operator")
  }
}
 */


