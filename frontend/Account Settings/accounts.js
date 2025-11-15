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

  // visually set active ring
  document.querySelectorAll('.profile').forEach(p => p.classList.remove('active'));
  tile.classList.add('active');

  // TODO: navigate to app page for that user
  // location.href = '../home/index.html?user=' + tile.dataset.id;
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

// Add profile flow
function handleAddProfile() {
  const name = prompt('Enter profile name:');
  if (!name) return;

  // Optional avatar via file picker
  filePicker.onchange = () => {
    const file = filePicker.files && filePicker.files[0];
    createProfile(name, file || null);
    filePicker.value = '';
  };
  filePicker.click();
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
