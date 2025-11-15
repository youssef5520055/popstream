const avatarImg = document.getElementById('avatarImg');
const avatarInput = document.getElementById('avatarInput');
const placeholder = document.querySelector('.placeholder-text');
const form = document.getElementById('profileForm');
const toast = document.getElementById('toast');

// LIVE PREVIEW
avatarInput.addEventListener('change', function () {
  const file = this.files && this.files[0];
  if (!file) return;

  if (!file.type.startsWith('image/')) {
    alert('Please select an image.');
    this.value = '';
    return;
  }
  if (file.size > 2 * 1024 * 1024) {
    alert('Image too large (max 2MB).');
    this.value = '';
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    avatarImg.src = reader.result;
    document.querySelector('.avatar').classList.add('has-image');
    if (placeholder) placeholder.style.display = 'none';
  };
  reader.readAsDataURL(file);
});

// SAVE (toast)
form.addEventListener('submit', (e) => {
  e.preventDefault();
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1400);
});

// CANCEL → reset
document.getElementById('cancelBtn').addEventListener('click', () => {
  if (!confirm('Discard changes?')) return;
  form.reset();
  avatarImg.src = '';
  document.querySelector('.avatar').classList.remove('has-image');
  if (placeholder) placeholder.style.display = '';
  avatarInput.value = '';
});
