// 1) Variable num (entre 1 y 20)
const num = 7;

// 2) Función factorialCalculator
function factorialCalculator(number) {
  let result = 1;

  // 3) Loop de 1 a number (inclusive)
  for (let i = 1; i <= number; i++) {
    result *= i;
  }

  return result;
}

// 4) Llamar la función y guardar el resultado
const factorial = factorialCalculator(num);

// 5) Armar el mensaje final
const resultMsg = `Factorial of ${num} is ${factorial}`;

// 6) Mostrar en consola
console.log(resultMsg);
