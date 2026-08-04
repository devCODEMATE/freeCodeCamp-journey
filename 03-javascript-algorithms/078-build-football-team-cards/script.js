const footballTeam = {
  team: "Argentina",
  year: 1986,
  headCoach: "Carlos Bilardo",
  players: [
    {
      name: "Diego Maradona",
      position: "midfielder",
      isCaptain: true,
    },
    {
      name: "Jorge Valdano",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Oscar Ruggeri",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Nery Pumpido",
      position: "goalkeeper",
      isCaptain: false,
    },
    {
      name: "Sergio Batista",
      position: "midfielder",
      isCaptain: false,
    },
  ],
};

const teamElement = document.getElementById("team");
const yearElement = document.getElementById("year");
const headCoachElement = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdown = document.getElementById("players");

teamElement.textContent = footballTeam.team;
yearElement.textContent = footballTeam.year;
headCoachElement.textContent = footballTeam.headCoach;

function displayPlayers(players) {
  playerCards.innerHTML = players
    .map((player) => {
      return `
        <div class="player-card">
          <h2>${player.isCaptain ? "(Captain) " : ""}${player.name}</h2>
          <p>Position: ${player.position}</p>
        </div>
      `;
    })
    .join("");
}

displayPlayers(footballTeam.players);

playersDropdown.addEventListener("change", () => {
  if (playersDropdown.value === "all") {
    displayPlayers(footballTeam.players);
  } else {
    const filteredPlayers = footballTeam.players.filter(
      (player) => player.position === playersDropdown.value
    );

    displayPlayers(filteredPlayers);
  }
});
