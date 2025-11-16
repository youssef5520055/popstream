/**
 * Streaming Platform - JavaScript
 * Handles interactivity and dynamic features
 */

// Payment verification - check if user has completed payment
(function checkPaymentStatus() {
  const paymentCompleted = localStorage.getItem('paymentCompleted');
  
  if (!paymentCompleted || paymentCompleted !== 'true') {
    // Payment not completed, redirect to subscription page
    alert('Please complete your subscription and payment setup to access the home page.');
    window.location.href = '../4-subscription/subscription.html';
    return;
  }
})();

// Play button functionality - navigate to movie details
document.querySelector(".btn-play")?.addEventListener("click", () => {
  window.location.href = "../8-movie-detail/movie details.html";
})

// More info button functionality - navigate to movie details
document.querySelector(".btn-more-info")?.addEventListener("click", () => {
  window.location.href = "../8-movie-detail/movie details.html";
})

// Carousel items click handlers - navigate to movie details
document.querySelectorAll(".carousel-item").forEach((item) => {
  item.addEventListener("click", () => {
    window.location.href = "../8-movie-detail/movie details.html";
  })
})

// Top 10 item click handlers - navigate to movie details
document.querySelectorAll(".top-10-item").forEach((item, index) => {
  item.addEventListener("click", () => {
    window.location.href = "../8-movie-detail/movie details.html";
  })
})

// Footer link functionality
document.querySelectorAll(".footer-links a, .footer-secondary-links a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
  })
})

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})
