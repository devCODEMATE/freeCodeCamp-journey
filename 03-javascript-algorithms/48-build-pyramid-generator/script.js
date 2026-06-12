function pyramid(char, rows, inverted) {
  let result = "\n";

  if (!inverted) {
    for (let i = 0; i < rows; i++) {
      const spaces = " ".repeat(rows - i - 1);
      const chars = char.repeat(2 * i + 1);
      result += spaces + chars + "\n";
    }
  } else {
    for (let i = rows - 1; i >= 0; i--) {
      const spaces = " ".repeat(rows - i - 1);
      const chars = char.repeat(2 * i + 1);
      result += spaces + chars + "\n";
    }
  }

  return result;
}

console.log(pyramid("o", 4, false));
console.log(pyramid("p", 5, true));
