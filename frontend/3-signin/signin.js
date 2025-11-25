// Sign in form submission
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  // Simulate successful login
  alert("Signed in to Popstream successfully!");
  
  // Check if payment has been completed
  const paymentCompleted = localStorage.getItem('paymentCompleted');
  
  if (!paymentCompleted || paymentCompleted !== 'true') {
    // Payment not completed, redirect to subscription page
    alert('Please complete your subscription and payment setup to continue.');
    window.location.href = "../4-subscription/subscription.html";
  } else {
    // Payment completed, redirect to home page
    window.location.href = "../6-home/Home.html";
  }
});
