export function MoodBoardItem({ color, image, description }) {
  return (
    <div
      className="mood-board-item"
      style={{ backgroundColor: color }}
    >
      <img
        className="mood-board-image"
        src={image}
        alt={description}
      />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}

export function MoodBoard() {
  return (
    <div>
      <h1 className="mood-board-heading">
        Destination Mood Board
      </h1>

      <div className="mood-board">
        <MoodBoardItem
          color="#2da84f"
          image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
          description="Caribbean"
        />

        <MoodBoardItem
          color="#9844b3"
          image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
          description="Gwadar Beach"
        />

        <MoodBoardItem
          color="#379bd3"
          image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"
          description="Cape Town"
        />

        <MoodBoardItem
          color="#c33880"
          image="https://cdn.freecodecamp.org/curriculum/labs/ship.jpg"
          description="Suez Canal"
        />

        <MoodBoardItem
          color="#ef4b3d"
          image="https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg"
          description="Santorini"
        />

        <MoodBoardItem
          color="#9caaac"
          image="https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg"
          description="Istanbul"
        />
      </div>
    </div>
  );
}