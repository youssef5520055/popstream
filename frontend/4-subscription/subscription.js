// Check if plan is pre-selected from signup page
document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const preSelectedPlan = urlParams.get('plan');
  
  if (preSelectedPlan) {
    // Find and highlight the matching plan
    const planButtons = document.querySelectorAll(".cta button");
    planButtons.forEach(btn => {
      const planName = btn.dataset.plan;
      if (planName && preSelectedPlan.toLowerCase().includes(planName.toLowerCase())) {
        btn.closest(".card").classList.add("selected");
      }
    });
  }
});

// Simple interactivity: mark selected plan and redirect to payment
document.querySelectorAll(".cta button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const plan = btn.dataset.plan;
    // visual selection
    document.querySelectorAll(".card").forEach(c => c.classList.remove("selected"));
    btn.closest(".card").classList.add("selected");

    // Show confirmation and redirect to payment with plan info
    alert(`You selected the ${plan} plan. Redirecting to payment...`);
    setTimeout(() => {
      window.location.href = "../5-payment-method/payment-methods.html?plan=" + plan;
    }, 500);
  });
});

// Optional: add a subtle outline when a card becomes selected
const style = document.createElement("style");
style.textContent = `
  .card.selected { outline: 2px solid rgba(239,35,60,.65); outline-offset: 3px; }
`;
document.head.appendChild(style);
