/**
 * Streaming Platform - JavaScript
 * Handles interactivity and dynamic features
 */

// Smooth scroll for navigation links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
  })
})

// Play button functionality
document.querySelector(".btn-play").addEventListener("click", () => {
  alert("Starting playback...")
})

// More info button functionality
document.querySelector(".btn-more-info").addEventListener("click", () => {
  alert("Loading more information...")
})

// Hover effects on carousel items
document.querySelectorAll(".carousel-item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    // Hover effect
  })
})

// Top 10 item click handlers
document.querySelectorAll(".top-10-item").forEach((item, index) => {
  item.addEventListener("click", () => {
    console.log("[v0] Top 10 item clicked:", index + 1)
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
