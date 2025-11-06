const yesBtn = document.getElementById("yesBtn");
const maybeBtn = document.getElementById("maybeBtn");
const response = document.getElementById("response");
const planner = document.getElementById("planner");
const planForm = document.getElementById("planForm");
const thankYou = document.getElementById("thankYou");

// Button interactions
yesBtn.addEventListener("click", () => {
  response.textContent = "Yay! I can’t wait to celebrate with you 💞";
  response.style.color = "#e86ba1";
  planner.classList.remove("hidden");
  createHearts();
});

maybeBtn.addEventListener("click", () => {
  response.textContent = "No pressure, beautiful 💫";
  response.style.color = "#888";
});

planForm.addEventListener("submit", (e) => {
  e.preventDefault();
  thankYou.classList.remove("hidden");
  planForm.reset();
});

// Floating hearts animation
function createHearts() {
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement("span");
    heart.textContent = "💖";
    heart.classList.add("floating-heart");
    document.body.appendChild(heart);

    const x = Math.random() * window.innerWidth;
    const y = window.innerHeight;
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    const size = 20 + Math.random() * 20;
    heart.style.fontSize = `${size}px`;
    heart.style.animationDuration = `${3 + Math.random() * 2}s`;

    setTimeout(() => heart.remove(), 5000);
  }
}

// Countdown to December 10, 2025, at 07:28 AM
function startCountdown() {
  const countdown = document.getElementById("countdown");
  const eventDate = new Date("December 10, 2025 07:28:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
      countdown.innerHTML = "🎂 It's our special day! Let’s make memories starting now 💖";
      clearInterval(interval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `
      ⏳ Only <span>${days}</span>d <span>${hours}</span>h 
      <span>${minutes}</span>m <span>${seconds}</span>s left until our day together 💕
    `;
  }

  updateCountdown();
  const interval = setInterval(updateCountdown, 1000);
}

startCountdown();
