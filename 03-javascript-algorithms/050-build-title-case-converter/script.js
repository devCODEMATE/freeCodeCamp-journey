function titleCase(str) {
  const words = str.toLowerCase().split(" ");
  const result = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const titleWord = word[0].toUpperCase() + word.slice(1);
    result.push(titleWord);
  }

  return result.join(" ");
}
 
console.log(titleCase("I'm a little tea pot"));  //I'm A Little Tea Pot
console.log(titleCase("sHoRt AnD sToUt"));  //Short And Stout
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));  //Here Is My Handle Here Is My Spout
