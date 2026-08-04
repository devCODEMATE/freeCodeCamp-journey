function translatePigLatin(str) {
  const vowels = ["a", "e", "i", "o", "u"];

  if (vowels.includes(str[0])) {
    return str + "way";
  }

  let firstVowelIndex = -1;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      firstVowelIndex = i;
      break;
    }
  }

  if (firstVowelIndex === -1) {
    return str + "ay";
  }

  return str.slice(firstVowelIndex) + str.slice(0, firstVowelIndex) + "ay";
}

console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"));
