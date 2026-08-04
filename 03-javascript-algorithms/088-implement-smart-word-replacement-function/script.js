function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1).toLowerCase();
  } else {
    after = after[0].toLowerCase() + after.slice(1);
  }

  return str.replace(before, after);
}

console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("I think we should look up there", "up", "Down"));
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
console.log(myReplace("His name is Tom", "Tom", "john"));
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));
