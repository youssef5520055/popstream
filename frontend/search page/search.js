// Movie Data
const MOVIES = [
  { id: 1, title: "Scream 7", category: "Horror", image: "https://www.movieposters.com/cdn/shop/files/scream_seven_cd9467f2-d6db-4a6e-b357-e8eb0c8391ec.jpg?v=1762881819&width=250" },
  { id: 2, title: "kungfo panda ", category: "Wildlife", image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/05c297e4ca4c20cf6f6f144f96737611_a06b6e4f-d505-4731-a1c5-5152a8aa3775_500x749.jpg?v=1762509505" },
  { id: 3, title: "shutter island", category: "Adventure", image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/files/shutterisland.24x36.MPW-146058_500x749.jpg?v=1762978992" },
  { id: 4, title: "Tiger", category: "Action", image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/6e152c409bc7fcfdc755743fe69c0832_8db4e76d-ddcc-4858-bb60-495a11fc2a47_500x749.jpg?v=1762519255" },
  { id: 5, title: "Village Of The Giants ", category: "Sci-Fi", image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/files/villagegiants_500x749.jpg?v=1763132696" },
  { id: 6, title: "Wild Forest", category: "Documentary", image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/files/blazing_9c687e31-1158-43ca-bda7-f16971f2f3e7_500x749.jpg?v=1762974861" },
  { id: 7, title: "Django Unchained", category: "Crime", image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ff35c38cb67f47a5f4cbec6c92a5d5a8_acb37f4c-8110-4bc9-b597-01e75e565a60_500x749.jpg?v=1762963219" },
  { id: 8, title: "Aaron Loves Angela", category: "Drama", image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/09e6b88b6244455fce422180354c9596_0b0b7a4a-a417-4260-90ec-8a34c171f559_500x749.jpg?v=1762474741" },
  { id: 9, title: "Dark Knight", category: "Documentary", image: "https://www.movieposters.com/cdn/shop/products/d3401e97e249c56ed1c11a13dd02b47f.jpg?v=1762495891&width=1680" },
];

const FILTER_TAGS = ["Popular", "Horror", "Sci-Fi", "Comedy", "Action", "Documentary", "Crime"];

let searchQuery = '';
let activeTag = null;

// Initialize Stars Background
/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Resizes the canvas to fit the window size.
/*******  5d69a2ca-6470-4182-ab82-3eaaec4ba92f  *******/function initStars() {
  const canvas = document.getElementById('starsCanvas');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const stars = [];
  const starCount = 150;

  class Star {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.radius = Math.random() * 1.5;
      this.opacity = Math.random() * 0.5 + 0.5;
      this.twinkleSpeed = Math.random() * 0.02 + 0.01;
      this.direction = Math.random() > 0.5 ? 1 : -1;
    }

    update() {
      this.opacity += this.twinkleSpeed * this.direction;
      if (this.opacity >= 1 || this.opacity <= 0.3) {
        this.direction *= -1;
      }
    }

    draw() {
      ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Create stars
  for (let i = 0; i < starCount; i++) {
    stars.push(new Star());
  }

  function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
      star.update();
      star.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();

  // Handle window resize
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// Render Movies
function renderMovies(movies) {
  const movieGrid = document.getElementById('movieGrid');
  const resultsTitle = document.getElementById('resultsTitle');

  if (movies.length === 0) {
    movieGrid.innerHTML = '<div class="no-results">No results found.</div>';
    resultsTitle.textContent = 'No Results';
    return;
  }

  if (searchQuery || activeTag) {
    resultsTitle.textContent = `Titles related to: ${searchQuery || activeTag}`;
  } else {
    resultsTitle.textContent = 'All Movies';
  }

  movieGrid.innerHTML = movies
    .map(
      movie => `
      <div class="movie-card">
        <img src="${movie.image}" alt="${movie.title}" loading="lazy">
        <div class="movie-overlay">
          <div class="movie-title">${movie.title}</div>
        </div>
      </div>
    `
    )
    .join('');
}

// Filter Movies
function filterMovies() {
  const query = (searchQuery || activeTag)?.toLowerCase() || '';
  
  if (!query) {
    renderMovies(MOVIES);
    return;
  }

  const filtered = MOVIES.filter(movie =>
    movie.title.toLowerCase().includes(query) ||
    movie.category.toLowerCase().includes(query)
  );

  renderMovies(filtered);
}

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Search Input Handler
document.getElementById('searchInput').addEventListener('input', (e) => {
  searchQuery = e.target.value;
  activeTag = null;
  document.querySelectorAll('.tag').forEach(tag => tag.classList.remove('active'));
  filterMovies();
});

// Filter Tags Handler
document.querySelectorAll('.tag').forEach(tag => {
  tag.addEventListener('click', () => {
    const tagName = tag.dataset.tag;
    
    if (activeTag === tagName) {
      activeTag = null;
      tag.classList.remove('active');
    } else {
      document.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));
      activeTag = tagName;
      tag.classList.add('active');
    }
    
    searchQuery = '';
    document.getElementById('searchInput').value = '';
    filterMovies();
  });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initStars();
  renderMovies(MOVIES);
});
