const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

const maxLength = 50;

function updateCounter() {
  if (textInput.value.length > maxLength) {
    textInput.value = textInput.value.slice(0, maxLength);
  }

  const currentLength = textInput.value.length;

  charCount.textContent = `Character Count: ${currentLength}/50`;

  if (currentLength === maxLength) {
    charCount.style.color = "red";
  } else {
    charCount.style.color = "black";
  }
}

textInput.addEventListener("input", updateCounter);
