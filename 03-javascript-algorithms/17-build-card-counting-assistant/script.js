let count = 0;

function cardCounter(card) {
  // Sumar 1 para 2-6
  if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
    count++;
  }
  // Restar 1 para 10, J, Q, K, A
  else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
    count--;
  }
  // 7, 8, 9 no cambian count

  // Decisión
  const decision = count > 0 ? "Bet" : "Hold";
  return `${count} ${decision}`;
}
