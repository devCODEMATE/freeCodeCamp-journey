function addTogether(...args) {
  const isValidNumber = (value) =>
    typeof value === "number" && Number.isFinite(value);

  const firstNumber = args[0];

  if (!isValidNumber(firstNumber)) {
    return undefined;
  }

  if (args.length === 2) {
    const secondNumber = args[1];

    if (!isValidNumber(secondNumber)) {
      return undefined;
    }

    return firstNumber + secondNumber;
  }

  return function (secondNumber) {
    if (!isValidNumber(secondNumber)) {
      return undefined;
    }

    return firstNumber + secondNumber;
  };
}

// Pruebas en consola
console.log(addTogether(2, 3)); // 5
console.log(addTogether(23.4, 30)); // 53.4
console.log(addTogether("2", 3)); // undefined
console.log(addTogether(5, undefined)); // undefined
console.log(
  addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
); // undefined
console.log(addTogether(5)); // [Function]
console.log(addTogether(5)(7)); // 12
console.log(addTogether(2)([3])); // undefined
console.log(addTogether(2, "3")); // undefined