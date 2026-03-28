const ideaButton = document.getElementById("ideaButton");
const pitchOutput = document.getElementById("pitchOutput");
const featureCards = document.querySelectorAll(".feature-card");
const themeBox = document.getElementById("themeBox");
const statValues = document.querySelectorAll(".stat-value");

const pitches = [
  "Currently focused on premium brand systems for founders building modern, category-defining companies.",
  "Exploring interface directions that make dense products feel calm, sharp, and usable at a glance.",
  "Building presentation design systems that help teams tell a clear story in rooms where decisions happen."
];

let currentPitch = 0;

ideaButton.addEventListener("click", () => {
  currentPitch = (currentPitch + 1) % pitches.length;
  pitchOutput.textContent = pitches[currentPitch];
});

featureCards.forEach((card) => {
  card.addEventListener("click", () => {
    featureCards.forEach((item) => item.classList.remove("active"));
    card.classList.add("active");
    themeBox.textContent = card.dataset.theme;
  });
});

function animateValue(element) {
  const target = Number(element.dataset.target);
  let current = 0;
  const step = Math.max(1, Math.ceil(target / 30));

  const timer = setInterval(() => {
    current += step;

    if (current >= target) {
      current = target;
      clearInterval(timer);
    }

    element.textContent = current;
  }, 40);
}

statValues.forEach(animateValue);
