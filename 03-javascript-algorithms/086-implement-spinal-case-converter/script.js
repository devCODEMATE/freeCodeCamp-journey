function spinalCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_\s]+/g, "-")
    .toLowerCase();
}

console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));
