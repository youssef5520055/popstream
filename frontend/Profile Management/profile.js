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

// SAVE (toast) and navigate
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form values for validation
  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  
  if (!fullName || !email) {
    alert('Please fill in at least your name and email.');
    return;
  }
  
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
    // Navigate to account settings after saving
    window.location.href = '../Account Settings/accounts.html';
  }, 1500);
});

// CANCEL → reset and navigate back
document.getElementById('cancelBtn').addEventListener('click', () => {
  if (!confirm('Discard changes?')) return;
  form.reset();
  avatarImg.src = '';
  document.querySelector('.avatar').classList.remove('has-image');
  if (placeholder) placeholder.style.display = '';
  avatarInput.value = '';
  // Navigate back to account settings
  window.location.href = '../Account Settings/accounts.html';
});
