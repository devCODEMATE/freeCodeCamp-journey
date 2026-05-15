const questions = [
  {
    category: "JavaScript",
    question: "Which keyword declares a variable that can be reassigned?",
    choices: ["let", "const", "function"],
    answer: "let",
  },
  {
    category: "CSS",
    question: "Which property changes the text color?",
    choices: ["color", "font-size", "background-color"],
    answer: "color",
  },
  {
    category: "HTML",
    question: "Which tag is used for the largest heading?",
    choices: ["<h1>", "<p>", "<div>"],
    answer: "<h1>",
  },
  {
    category: "Web",
    question: "What does API stand for?",
    choices: ["Application Programming Interface", "Advanced Program Internet", "Applied Protocol Index"],
    answer: "Application Programming Interface",
  },
  {
    category: "Logic",
    question: "What is the result of 2 + 2?",
    choices: ["4", "22", "5"],
    answer: "4",
  },
];

function getRandomQuestion(questionsArray) {
  const index = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[index];
}

function getRandomComputerChoice(choicesArray) {
  const index = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[index];
}

function getResults(questionObj, computerChoice) {
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  }
  return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
}
