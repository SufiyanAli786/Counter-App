let count = 0;
let limit = null; // null = unlimited by default

const countDisplay = document.getElementById("count");
const limitText = document.getElementById("limitText");
const limitInput = document.getElementById("limitInput");

const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

const settingsBtn = document.getElementById("settingsBtn");
const settingsPanel = document.getElementById("settingsPanel");
const closeSettings = document.getElementById("closeSettings");

const themeToggle = document.getElementById("themeToggle");
const colors = document.querySelectorAll(".color");

// ===== Update counter display =====
function update() {
  countDisplay.textContent = count;
  limitText.textContent = limit !== null ? `Limit: ${limit}` : "Limit: ∞";
}

// ===== Increase (check limit only if set) =====
increaseBtn.addEventListener("click", () => {
  if (limit === null || count < limit) {
    count++;
    update();
  }
});

// ===== Decrease (prevent negative if you want) =====
decreaseBtn.addEventListener("click", () => {
  count--;
  update();
});

// ===== Reset =====
resetBtn.addEventListener("click", () => {
  count = 0;
  update();
});

// ===== Settings panel =====
settingsBtn.addEventListener("click", () => {
  settingsPanel.classList.remove("hidden");
});

closeSettings.addEventListener("click", () => {
  settingsPanel.classList.add("hidden");
});

// ===== Theme toggle =====
themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

// ===== User-defined limit =====
limitInput.addEventListener("input", () => {
  const userLimit = Number(limitInput.value);

  if (!limitInput.value || userLimit <= 0) {
    limit = null; // unlimited if empty or 0
  } else {
    limit = userLimit;
    if (count > limit) count = limit;
  }

  update();
});

// ===== Background colors =====
colors.forEach(color => {
  color.style.background = color.dataset.bg;
  color.addEventListener("click", () => {
    document.body.style.background = color.dataset.bg;
  });
});

// ===== Initial render =====
update();
