// Elements
const profilesGrid = document.getElementById('profilesGrid');
const filePicker   = document.getElementById('filePicker');

// Click on a profile or the "Add" tile
profilesGrid.addEventListener('click', (e) => {
  const tile = e.target.closest('.profile, .add');
  if (!tile) return;

  if (tile.classList.contains('add')) {
    handleAddProfile();
    return;
  }

  // Check if user wants to edit (Ctrl+Click or right-click)
  if (e.ctrlKey || e.metaKey || e.button === 2) {
    e.preventDefault();
    // Navigate to profile management for editing
    location.href = 'Profile Management/profile.html?user=' + tile.dataset.id;
    return;
  }

  // visually set active ring
  document.querySelectorAll('.profile').forEach(p => p.classList.remove('active'));
  tile.classList.add('active');

  // Check payment status before navigating to home
  const paymentCompleted = localStorage.getItem('paymentCompleted');
  
  if (!paymentCompleted || paymentCompleted !== 'true') {
    alert('Please complete your subscription and payment setup to access the home page.');
    location.href = '../4-subscription/subscription.html';
    return;
  }
  
  // Navigate to home page for that user
  location.href = '../6-home/Home.html?user=' + tile.dataset.id;
});

// Add context menu for editing profile
profilesGrid.addEventListener('contextmenu', (e) => {
  const tile = e.target.closest('.profile');
  if (tile) {
    e.preventDefault();
    if (confirm('Edit this profile?')) {
      location.href = 'Profile Management/profile.html?user=' + tile.dataset.id;
    }
  }
});

// Keyboard accessibility (Enter / Space)
profilesGrid.addEventListener('keydown', (e) => {
  const tile = e.target.closest('.tile');
  if (!tile) return;
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    tile.click();
  }
});

// Add profile flow - redirect to profile management to create new profile
function handleAddProfile() {
  // Navigate to profile management to create a new profile
  location.href = 'Profile Management/profile.html?new=true';
}

function createProfile(name, file) {
  const tile = document.createElement('button');
  tile.className = 'tile profile';
  tile.setAttribute('aria-label', `Open ${name} profile`);
  tile.dataset.name = name;
  tile.dataset.id   = name.toLowerCase().replace(/\s+/g,'-');

  const ring = document.createElement('span');
  ring.className = 'ring';

  const img = document.createElement('img');
  img.className = 'avatar';
  img.alt = '';

  if (file) {
    const reader = new FileReader();
    reader.onload = () => { img.src = reader.result; };
    reader.readAsDataURL(file);
  } else {
    img.src = ''; // trigger CSS fallback avatar
  }

  const label = document.createElement('span');
  label.className = 'name';
  label.textContent = name;

  tile.append(ring, img, label);

  const addTile = document.getElementById('addProfile');
  profilesGrid.insertBefore(tile, addTile);
}
