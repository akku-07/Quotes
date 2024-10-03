const modeButton = document.getElementById("mode-button");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");
const currentMode = localStorage.getItem("mode");

if (currentMode) {
  document.body.classList.toggle("dark", currentMode === "dark");
  sunIcon.style.display = currentMode === "dark" ? "inline" : "none";
  moonIcon.style.display = currentMode === "dark" ? "none" : "inline";
  updateIconColors(currentMode === "dark" ? "white" : "black");
}

modeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    sunIcon.style.display = "inline";
    moonIcon.style.display = "none";
    updateIconColors("white")
    localStorage.setItem("mode", "dark");
  } else {
    sunIcon.style.display = "none";
    moonIcon.style.display = "inline";
    updateIconColors("black")
    localStorage.setItem("mode", "light");
  }
});

function updateIconColors(color) {
  const icons = document.querySelectorAll(".icon");
  icons.forEach((icon) => {
    icon.style.color = color;
  });
}
