let lunches = [];

function addLunchToEnd(arr, lunchItem) {
  arr.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return arr;
}

function addLunchToStart(arr, lunchItem) {
  arr.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return arr;
}

function removeLastLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
    return arr;
  }
  const removed = arr.pop();
  console.log(`${removed} removed from the end of the lunch menu.`);
  return arr;
}

function removeFirstLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
    return arr;
  }
  const removed = arr.shift();
  console.log(`${removed} removed from the start of the lunch menu.`);
  return arr;
}

function getRandomLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches available.");
    return;
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  const chosen = arr[randomIndex];
  console.log(`Randomly selected lunch: ${chosen}`);
}

function showLunchMenu(arr) {
  if (arr.length === 0) {
    console.log("The menu is empty.");
    return;
  }
  console.log(`Menu items: ${arr.join(", ")}`);
}


addLunchToEnd(lunches, "Pizza");
addLunchToStart(lunches, "Salad");
showLunchMenu(lunches);
getRandomLunch(lunches);
removeFirstLunch(lunches);
removeLastLunch(lunches);
showLunchMenu(lunches);
