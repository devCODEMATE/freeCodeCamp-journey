function convertHTML(str) {
  const entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (entities[char]) {
      result += entities[char];
    } else {
      result += char;
    }
  }

  return result;
}

console.log(convertHTML("Dolce & Gabbana"));  //Dolce & Gabbana
console.log(convertHTML("Hamburgers < Pizza < Tacos"));  //Hamburgers < Pizza < Tacos
console.log(convertHTML("Sixty > twelve"));  //Sixty > twelve
console.log(convertHTML('Stuff in "quotation marks"'));  //Stuff in "quotation marks"
console.log(convertHTML("Schindler's List"));  //Schindler's List
console.log(convertHTML("<>"));  //<>
console.log(convertHTML("abc"));  //abc
