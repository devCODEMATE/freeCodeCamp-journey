const { useState, useEffect, useRef } = React;

enum PetAction {
  Eat = "eat",
  Play = "play",
  Sleep = "sleep",
}

enum PetMood {
  HAPPY,
  EXCITED,
  CONTENT,
  SAD,
  TIRED,
  SICK,
  HUNGRY,
}

const petMoodEmojis: Record<PetMood, string> = {
  [PetMood.HAPPY]: "😊",
  [PetMood.EXCITED]: "🤩",
  [PetMood.CONTENT]: "😌",
  [PetMood.SAD]: "😢",
  [PetMood.TIRED]: "😴",
  [PetMood.SICK]: "🤒",
  [PetMood.HUNGRY]: "🍽",
};

function clamp(value: number, min = 0, max = 100): number {
  return Math.min(max, Math.max(min, value));
}

function getPetMood(hunger: number, energy: number, happiness: number): PetMood {
  if (hunger > 70) return PetMood.HUNGRY;
  if (energy < 30) return PetMood.TIRED;
  if (happiness < 30) return PetMood.SAD;
  if (happiness > 80 && energy > 70) return PetMood.EXCITED;
  if (happiness > 60) return PetMood.HAPPY;
  return PetMood.CONTENT;
}

const DECAY_INTERVAL_MS = 30000;
const DECAY_STEP = 5;

export const PetGame = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [petName, setPetName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [hunger, setHunger] = useState(0);
  const [energy, setEnergy] = useState(100);
  const [happiness, setHappiness] = useState(100);

  useEffect(() => {
    if (!submitted) {
      return;
    }
    const intervalId = setInterval(() => {
      setHunger((prev) => clamp(prev + DECAY_STEP));
      setHappiness((prev) => clamp(prev - DECAY_STEP));
    }, DECAY_INTERVAL_MS);
    return () => clearInterval(intervalId);
  }, [submitted]);

  const handleStart = () => {
    const value = nameInputRef.current?.value.trim() ?? "";
    if (value === "") {
      return;
    }
    setPetName(value);
    setSubmitted(true);
  };

  const handleAction = (action: PetAction) => {
    if (action === PetAction.Eat) {
      setHunger((prev) => clamp(prev - 10));
      setEnergy((prev) => clamp(prev + 10));
    } else if (action === PetAction.Play) {
      setEnergy((prev) => clamp(prev - 10));
      setHappiness((prev) => clamp(prev + 10));
    } else if (action === PetAction.Sleep) {
      setHunger((prev) => clamp(prev + 10));
      setEnergy((prev) => clamp(prev + 10));
    }
  };

  const mood = getPetMood(hunger, energy, happiness);

  const statFillClass = (value: number): string => {
    if (value > 60) return "high";
    if (value > 30) return "medium";
    return "low";
  };

  if (!submitted) {
    return (
      <div className="base-container">
        <header>
          <h1>Digital Pet Game</h1>
        </header>
        <div className="info-panel">
          <form className="start-questions">
            <div>
              <label htmlFor="pet-name">Name your pet</label>
              <input id="pet-name" name="pet-name" type="text" ref={nameInputRef} />
            </div>
            <button id="set-name-btn" type="button" onClick={handleStart}>
              Start Game
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="base-container">
      <header>
        <h1>Digital Pet Game</h1>
      </header>

      <div className="game-container">
        <p className="pet-name">{petName}</p>
        <div className="pet-sprite">{petMoodEmojis[mood]}</div>
        <p>{mood}</p>

        <div className="stats-grid">
          <div className="stat stat-bar">
            <div className="stat-header">
              <div className="stat-label">
                <span className="stat-icon">🍔</span>
                <span className="stat-name">Hunger</span>
              </div>
              <span className="stat-value">{hunger}</span>
            </div>
            <div className="stat-progress">
              <div className={`stat-fill ${statFillClass(hunger)}`} style={{ width: `${hunger}%` }}></div>
            </div>
          </div>

          <div className="stat stat-bar">
            <div className="stat-header">
              <div className="stat-label">
                <span className="stat-icon">⚡</span>
                <span className="stat-name">Energy</span>
              </div>
              <span className="stat-value">{energy}</span>
            </div>
            <div className="stat-progress">
              <div className={`stat-fill ${statFillClass(energy)}`} style={{ width: `${energy}%` }}></div>
            </div>
          </div>

          <div className="stat stat-bar">
            <div className="stat-header">
              <div className="stat-label">
                <span className="stat-icon">💖</span>
                <span className="stat-name">Happiness</span>
              </div>
              <span className="stat-value">{happiness}</span>
            </div>
            <div className="stat-progress">
              <div className={`stat-fill ${statFillClass(happiness)}`} style={{ width: `${happiness}%` }}></div>
            </div>
          </div>
        </div>

        <div className="pet-buttons">
          <button id="eat-action" className="pet-button" onClick={() => handleAction(PetAction.Eat)}>
            EAT
          </button>
          <button id="play-action" className="pet-button" onClick={() => handleAction(PetAction.Play)}>
            PLAY
          </button>
          <button id="sleep-action" className="pet-button" onClick={() => handleAction(PetAction.Sleep)}>
            SLEEP
          </button>
        </div>
      </div>
    </div>
  );
};