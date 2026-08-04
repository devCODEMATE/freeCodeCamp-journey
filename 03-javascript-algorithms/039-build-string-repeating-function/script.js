
function repeatStringNumTimes(str, number) {
  let result = "";

  if (number <= 0) {
    return result;
  }

  for (let i = 0; i < number; i++) {
    result += str;
  }

  return result;

}
console.log(repeatStringNumTimes("*", 3)),
console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("abc", 4));
console.log(repeatStringNumTimes("abc", 1));
console.log(repeatStringNumTimes("*", 8));
console.log(repeatStringNumTimes("abc", -2));
console.log(repeatStringNumTimes("abc", 0));
