function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    const currentCode = str.charCodeAt(i);
    const nextCode = str.charCodeAt(i + 1);

    if (nextCode !== currentCode + 1) {
      return String.fromCharCode(currentCode + 1);
    }
  }

  return undefined;
}

console.log(fearNotLetter("abce"));  //d
console.log(fearNotLetter("abcdefghjklmno")); //i
console.log(fearNotLetter("stvwx"));  //u
console.log(fearNotLetter("bcdf"));  //e
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));  //undefined
