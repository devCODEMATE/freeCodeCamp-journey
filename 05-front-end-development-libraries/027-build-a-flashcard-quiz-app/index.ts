interface FlashCard {
  questionText: string;
  questionAnswer: string;
}

const currentCards: FlashCard[] = [
  {
    questionText: "What is the capital of France?",
    questionAnswer: "Paris",
  },
  {
    questionText: "What does HTML stand for?",
    questionAnswer: "HyperText Markup Language",
  },
  {
    questionText: "What is 7 x 8?",
    questionAnswer: "56",
  },
];

let currentIndex = 0;

function getElement<T extends HTMLElement>(selector: string): T {
  const el = document.querySelector<T>(selector);
  if (!el) {
    throw new Error(`Element not found: ${selector}`);
  }
  return el;
}

const flashcardEl = getElement<HTMLDivElement>("#flashcard");
const questionTextEl = getElement<HTMLParagraphElement>("#question-text");
const answerTextEl = getElement<HTMLParagraphElement>("#answer-text");

function renderCard(): void {
  const card = currentCards[currentIndex];
  questionTextEl.textContent = card.questionText;
  answerTextEl.textContent = card.questionAnswer;
  flashcardEl.classList.remove("flipped");
}

renderCard();

flashcardEl.addEventListener("click", () => {
  flashcardEl.classList.toggle("flipped");
});

class InvalidUserInputError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidUserInputError";
  }
}

const entryFormEl = getElement<HTMLFormElement>("#entry-form");
const frontTextEl = getElement<HTMLTextAreaElement>("#front-text");
const backTextEl = getElement<HTMLTextAreaElement>("#back-text");

function addCard(questionText: string, questionAnswer: string): void {
  if (questionText.trim() === "" || questionAnswer.trim() === "") {
    throw new InvalidUserInputError("Question text and answer cannot be empty.");
  }

  currentCards.push({ questionText, questionAnswer });
  currentIndex = currentCards.length - 1;
  renderCard();
}

const deleteBtnEl = getElement<HTMLButtonElement>("#delete-btn");

deleteBtnEl.addEventListener("click", () => {
  if (currentCards.length <= 1) {
    return;
  }

  currentCards.splice(currentIndex, 1);
  currentIndex = currentIndex > 0 ? currentIndex - 1 : 0;
  renderCard();
});

entryFormEl.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  addCard(frontTextEl.value, backTextEl.value);
  entryFormEl.reset();
});