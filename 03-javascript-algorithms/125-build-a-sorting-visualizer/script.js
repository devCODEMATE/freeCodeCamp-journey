const arrayContainer = document.getElementById("array-container");
const startingArray = document.getElementById("starting-array");
const generateBtn = document.getElementById("generate-btn");
const sortBtn = document.getElementById("sort-btn");

function generateElement() {
  return Math.floor(Math.random() * 100) + 1;
}

function generateArray() {
  return Array.from({ length: 5 }, generateElement);
}

function generateContainer() {
  return document.createElement("div");
}

function fillArrContainer(element, array) {
  element.innerHTML = "";

  array.forEach((number) => {
    const span = document.createElement("span");
    span.textContent = number;
    element.appendChild(span);
  });
}

function isOrdered(firstNumber, secondNumber) {
  return firstNumber <= secondNumber;
}

function swapElements(array, index) {
  if (!isOrdered(array[index], array[index + 1])) {
    const temporaryValue = array[index];
    array[index] = array[index + 1];
    array[index + 1] = temporaryValue;
  }
}

function highlightCurrentEls(element, index) {
  element.children[index].style.border = "2px dashed red";
  element.children[index + 1].style.border = "2px dashed red";
}

generateBtn.addEventListener("click", () => {
  const newArray = generateArray();

  arrayContainer.innerHTML = "";
  arrayContainer.appendChild(startingArray);

  fillArrContainer(startingArray, newArray);
});

sortBtn.addEventListener("click", () => {
  const array = Array.from(startingArray.children).map((span) =>
    Number(span.textContent)
  );

  if (array.length !== 5) {
    return;
  }

  arrayContainer.innerHTML = "";
  arrayContainer.appendChild(startingArray);

  fillArrContainer(startingArray, array);
  highlightCurrentEls(startingArray, 0);

  let swapped;

  do {
    swapped = false;

    for (let index = 0; index < array.length - 1; index++) {
      const currentContainer =
        index === 0 && arrayContainer.children.length === 1
          ? startingArray
          : generateContainer();

      if (currentContainer !== startingArray) {
        fillArrContainer(currentContainer, array);
        highlightCurrentEls(currentContainer, index);
        arrayContainer.appendChild(currentContainer);
      }

      if (!isOrdered(array[index], array[index + 1])) {
        swapElements(array, index);
        swapped = true;
      }
    }
  } while (swapped);

  const sortedContainer = generateContainer();
  fillArrContainer(sortedContainer, array);
  arrayContainer.appendChild(sortedContainer);
});