const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];


function golfScore(par, strokes) {
  if (strokes === 1) {
    return "Hole-in-one!";
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes === par - 1) {
    return "Birdie";
  } else if (strokes === par) {
    return "Par";
  } else if (strokes === par + 1) {
    return "Bogey";
  } else if (strokes === par + 2) {
    return "Double Bogey";
  } else {
    return "Go Home!";
  }
}


console.log(golfScore(5, 1));
console.log(golfScore(5, 3));
console.log(golfScore(5, 4));
console.log(golfScore(5, 5));
console.log(golfScore(5, 6));
console.log(golfScore(5, 7));
console.log(golfScore(5, 8));
