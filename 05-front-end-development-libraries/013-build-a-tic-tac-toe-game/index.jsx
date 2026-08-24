const { useState } = React;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function calculateWinner(squares) {
  for (
    const [
      first,
      second,
      third
    ] of winningCombinations
  ) {
    if (
      squares[first] &&
      squares[first] === squares[second] &&
      squares[first] === squares[third]
    ) {
      return squares[first];
    }
  }

  return null;
}

export function Board() {
  const [squares, setSquares] =
    useState(Array(9).fill(null));

  const [isXNext, setIsXNext] =
    useState(true);

  const winner =
    calculateWinner(squares);

  const isDraw =
    !winner &&
    squares.every(
      (square) => square !== null
    );

  function handleSquareClick(index) {
    if (
      squares[index] ||
      winner ||
      isDraw
    ) {
      return;
    }

    const updatedSquares = [
      ...squares
    ];

    updatedSquares[index] =
      isXNext ? "X" : "O";

    setSquares(updatedSquares);
    setIsXNext(!isXNext);
  }

  function resetGame() {
    setSquares(
      Array(9).fill(null)
    );

    setIsXNext(true);
  }

  let statusMessage =
    `Next player: ${
      isXNext ? "X" : "O"
    }`;

  if (winner) {
    statusMessage =
      `Winner: ${winner}`;
  } else if (isDraw) {
    statusMessage = "Draw";
  }

  return (
    <main className="game-page">
      <section className="game-card">
        <p className="eyebrow">
          CodeMate Games
        </p>

        <h1>Tic-Tac-Toe</h1>

        <p
          className={`status ${
            winner || isDraw
              ? "game-over"
              : ""
          }`}
          aria-live="polite"
        >
          {statusMessage}
        </p>

        <div className="board">
          {squares.map(
            (square, index) => (
              <button
                className={`square ${
                  square === "X"
                    ? "square-x"
                    : square === "O"
                      ? "square-o"
                      : ""
                }`}
                type="button"
                key={index}
                onClick={() =>
                  handleSquareClick(index)
                }
                aria-label={
                  `Square ${index + 1}${
                    square
                      ? `: ${square}`
                      : ""
                  }`
                }
              >
                {square}
              </button>
            )
          )}
        </div>

        <button
          id="reset"
          type="button"
          onClick={resetGame}
        >
          Reset Game
        </button>
      </section>
    </main>
  );
}