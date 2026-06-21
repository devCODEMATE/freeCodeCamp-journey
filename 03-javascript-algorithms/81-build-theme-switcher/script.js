const themeSwitcherButton = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");
const themeStatus = document.getElementById("theme-status");

const themes = [
  {
    name: "light",
    message: "Light theme selected.",
  },
  {
    name: "dark",
    message: "Dark theme selected.",
  },
  {
    name: "ocean",
    message: "Ocean theme selected.",
  },
];

themeSwitcherButton.addEventListener("click", () => {
  if (themeDropdown.hidden) {
    themeDropdown.hidden = false;
    themeSwitcherButton.setAttribute("aria-expanded", "true");
  } else {
    themeDropdown.hidden = true;
    themeSwitcherButton.setAttribute("aria-expanded", "false");
  }
});

themeDropdown.addEventListener("click", (event) => {
  const selectedTheme = event.target.textContent.trim().toLowerCase();

  const theme = themes.find((theme) => theme.name === selectedTheme);

  if (!theme) {
    return;
  }

  themes.forEach((theme) => {
    document.body.classList.remove(`theme-${theme.name}`);
  });

  document.body.classList.add(`theme-${selectedTheme}`);

  themeStatus.textContent = theme.message;

  themeDropdown.hidden = true;
  themeSwitcherButton.setAttribute("aria-expanded", "false");
});
