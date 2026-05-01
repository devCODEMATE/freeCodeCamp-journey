const fortune1 = "Your cat will look very cuddly today.";
const fortune2 = "Be cautious of your new neighbors.";
const fortune3 = "You will find a new hobby soon.";
const fortune4 = "It would be wise to avoid the color red today.";
const fortune5 = "The weather will be nice tomorrow.";

const randomNumber = Math.floor(Math.random() * 5) + 1;

let selectedFortune;

if (randomNumber === 1) {
  selectedFortune = fortune1;
} else if (randomNumber === 2) {
  selectedFortune = fortune2;
} else if (randomNumber === 3) {
  selectedFortune = fortune3;
} else if (randomNumber === 4) {
  selectedFortune = fortune4;
} else {
  selectedFortune = fortune5;
}

console.log(selectedFortune);
