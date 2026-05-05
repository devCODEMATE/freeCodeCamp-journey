function cardCounter(card) {
  // subir el count
  if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
    count++;
  } else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
    count--;
  }
  // 7, 8, 9 no cambian nada

  const decision = count > 0 ? "Bet" : "Hold";
  return `${count} ${decision}`;
}


console.log(cardCounter(2));   // 1 Bet
console.log(cardCounter(9));   // 1 Bet
console.log(cardCounter("K")); // 0 Hold
