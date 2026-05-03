function booWho(argument) {
  return typeof argument === "boolean";
}

booWho(true); //true
booWho(false); //true
booWho([1, 2, 3]); //false
booWho([].slice); //false
booWho({ "a": 1 }); //false
booWho(1); //false
booWho(NaN); //false
booWho("a"); //false
booWho("true"); //false
booWho("false"); //false
