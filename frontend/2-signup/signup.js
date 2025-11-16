document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const plan = document.getElementById("plan").value;

  if (!name || !email || !password || !plan) {
    alert("Please fill all fields and choose a plan.");
    return;
  }

  // Simulate successful signup
  alert(`Welcome to Popstream, ${name}! You chose the ${plan} plan. Redirecting to subscription...`);
  
  // Always redirect to subscription page to confirm plan selection
  setTimeout(() => {
    window.location.href = "../4-subscription/subscription.html?plan=" + plan;
  }, 500);
});
