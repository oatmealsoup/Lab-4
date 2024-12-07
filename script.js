let num1 = 1;
let num2 = 2;
let name = 'you';

function changeValue(operation) {
	
  if (document.getElementById('name').value !== name && document.getElementById('name').value !== ''){
  name = document.getElementById('name').value;
  }
  
  if (document.getElementById('num1').value !== num1 && document.getElementById('num1').value !== ''){
  num1 = parseFloat(document.getElementById('num1').value);
  }
  
  if (document.getElementById('num2').value !== num2 && document.getElementById('num2').value !== ''){
  num2 = parseFloat(document.getElementById('num2').value);
  }

  console.log(`Hello, ${name}!`);

  const calculator = createCalculator();

  let result;
  switch (operation) {
    case 'add':
      result = calculator.add(num1, num2);
      break;
    case 'subtract':
      result = calculator.subtract(num1, num2);
      break;
    case 'multiply':   

      result = calculator.multiply(num1, num2);
      break;
    case 'divide':
      result = calculator.divide(num1, num2);
      break;   

    case 'modulo':
      result = calculator.modulo(num1, num2);
      break;
    default:
      result = 'Invalid operation';
  }

  const resultElement = document.getElementById('result');
  resultElement.textContent = `Result: ${result}`;
}

function createCalculator() {
  return {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b !== 0 ? a / b : "Division by zero",
    modulo: (a, b) => b >= 0 ? a % b : a-b*Math.floor(a/b)
	};
}