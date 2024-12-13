let num1 = 507;
let num2 = 312;

function changeValue(operation) {
	

let name = 'you';
	
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

abstraction();
let operations = abstraction();

  let result;
  switch (operation) {
    case 'add':
      result = operations.add(num1, num2, operations.additiveIdentity);
      break;
	  
    case 'subtract':
      result = operations.subtract(num1, num2, operations.additiveIdentity);
      break;
	  
    case 'multiply': 
      result = operations.multiply(num1, num2, operations.multiplicativeIdentity);
      break;
	  
    case 'divide':
      result = operations.divide(num1, num2, operations.multiplicativeIdentity);
      break;   

    case 'modulo':
      result = operations.modulo(num1, num2)
      break;
	  
	case 'three':
	  result = operations.three(num1, num2, operations.additiveIdentity);
	  break;
	  
	default:
	  result = 'Invalid operation';
  }

   const resultElement = document.getElementById('result');
   resultElement.textContent = `Result: ${result}`;
}

function abstraction() {
	const additiveIdentity = 0;
	const multiplicativeIdentity = 1;
  return operations = {
    add: (a, b, c) => (a + b + c),
    subtract: (a, b, c) => (a - b - c),
	multiply: (a, b, c) => ((a * b ) * c),
    divide: (a, b, c) => b !== 0 ? (a / b) * c: "Division by zero",
    modulo: (a, b, c) => b >= 0 ? a%b : a-b*Math.floor(a/b),
	three: (a, b ,c ) => 3 + c,
	additiveIdentity,
	multiplicativeIdentity //I transfer these bad boys over in the object so I can set c, and show how they don't affect calculations, but also don't break them
	};
}

console.log(name); //Variable changes in functions do not change variables in global scope...
