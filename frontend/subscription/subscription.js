// Simple interactivity: mark selected plan and simulate click action
document.querySelectorAll(".cta button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const plan = btn.dataset.plan;
    // visual selection
    document.querySelectorAll(".card").forEach(c => c.classList.remove("selected"));
    btn.closest(".card").classList.add("selected");

    // demo action
    alert(`You selected the ${plan} plan.`);
  });
});

// Optional: add a subtle outline when a card becomes selected
const style = document.createElement("style");
style.textContent = `
  .card.selected { outline: 2px solid rgba(239,35,60,.65); outline-offset: 3px; }
`;
document.head.appendChild(style);
