const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome(text) {
  const cleanedText = text.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversedText = cleanedText.split("").reverse().join("");

  return cleanedText === reversedText;
}

checkButton.addEventListener("click", () => {
  const inputValue = textInput.value;

  if (inputValue === "") {
    alert("Please input a value");
    return;
  }

  if (isPalindrome(inputValue)) {
    result.textContent = `${inputValue} is a palindrome.`;
  } else {
    result.textContent = `${inputValue} is not a palindrome.`;
  }
});
