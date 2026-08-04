const favoriteIcons = document.querySelectorAll(".favorite-icon");

favoriteIcons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("filled");

    if (button.classList.contains("filled")) {
      button.innerHTML = "&#10084;";
    } else {
      button.innerHTML = "&#9825;";
    }
  });
});
