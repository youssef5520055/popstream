document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const plan = document.getElementById("plan").value;

  if (!name || !email || !plan) {
    alert("Please fill all fields and choose a plan.");
    return;
  }
  alert(`Welcome to Popstream, ${name}! You chose the ${plan} plan.`);
});
