// Main application functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize all event listeners
    setupEventListeners();
    
    // Initialize any other app functionality
    setupVideoPlayer();
    setupNotifications();
    
    // Add fade-in animation to main content
    addFadeInAnimations();
    
    console.log('Loki Series App initialized');
}

// Event Listeners
function setupEventListeners() {
    // Play button
    const playButton = document.getElementById('playButton');
    if (playButton) {
        playButton.addEventListener('click', handlePlayClick);
    }
    
    // Trailer button
    const trailerButton = document.getElementById('trailerButton');
    if (trailerButton) {
        trailerButton.addEventListener('click', handleTrailerClick);
    }
    
    // Add to list button
    const addToListButton = document.getElementById('addToListButton');
    if (addToListButton) {
        addToListButton.addEventListener('click', handleAddToList);
    }
    
    // Info button
    const infoButton = document.getElementById('infoButton');
    if (infoButton) {
        infoButton.addEventListener('click', handleInfoClick);
    }
    
    // Search button
    const searchButton = document.getElementById('searchButton');
    if (searchButton) {
        searchButton.addEventListener('click', handleSearchClick);
    }
    
    // Notification button
    const notificationButton = document.getElementById('notificationButton');
    if (notificationButton) {
        notificationButton.addEventListener('click', handleNotificationClick);
    }
    
    // Profile button
    const profileButton = document.getElementById('profileButton');
    if (profileButton) {
        profileButton.addEventListener('click', handleProfileClick);
    }
    
    // Episode cards
    const episodeCards = document.querySelectorAll('.episode-card');
    episodeCards.forEach(card => {
        card.addEventListener('click', handleEpisodeClick);
        card.addEventListener('mouseenter', handleEpisodeHover);
        card.addEventListener('mouseleave', handleEpisodeHoverOut);
    });
    
    // Poster cards
    const posterCards = document.querySelectorAll('.poster-card');
    posterCards.forEach(card => {
        card.addEventListener('click', handlePosterClick);
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
    
    // Window resize handling
    window.addEventListener('resize', debounce(handleWindowResize, 250));
}

// Animation functions
function addFadeInAnimations() {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Event Handlers
function handlePlayClick() {
    console.log('Play button clicked');
    showNotification('Starting Loki: Season 1', 'success');
    // In a real app, this would start video playback
    simulateVideoPlayback();
}

function handleTrailerClick() {
    console.log('Trailer button clicked');
    showNotification('Playing Loki Trailer', 'info');
    // In a real app, this would play the trailer
    simulateTrailerPlayback();
}

function handleAddToList() {
    console.log('Add to list button clicked');
    const button = document.getElementById('addToListButton');
    
    // Toggle added state
    const isAdded = button.classList.contains('added');
    
    if (isAdded) {
        button.classList.remove('added');
        button.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
        `;
        showNotification('Removed from My List', 'info');
    } else {
        button.classList.add('added');
        button.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
        `;
        showNotification('Added to My List', 'success');
    }
}

function handleInfoClick() {
    console.log('Info button clicked');
    showNotification('Showing series information', 'info');
    // In a real app, this would show a modal with series info
    showSeriesInfoModal();
}

function handleSearchClick() {
    console.log('Search button clicked');
    showNotification('Opening search', 'info');
    // In a real app, this would open a search modal
    showSearchModal();
}

function handleNotificationClick() {
    console.log('Notification button clicked');
    showNotification('You have no new notifications', 'info');
    // In a real app, this would show notifications
}

function handleProfileClick() {
    console.log('Profile button clicked');
    showNotification('Opening profile menu', 'info');
    // In a real app, this would open a profile menu
}

function handleEpisodeClick(event) {
    const episodeCard = event.currentTarget;
    const episodeNumber = episodeCard.getAttribute('data-episode');
    const episodeTitle = episodeCard.querySelector('h4').textContent;
    
    console.log(`Episode ${episodeNumber} clicked: ${episodeTitle}`);
    showNotification(`Playing Episode ${episodeNumber}: ${episodeTitle}`, 'success');
    
    // In a real app, this would start playing the specific episode
    simulateEpisodePlayback(episodeNumber);
}

function handleEpisodeHover(event) {
    const card = event.currentTarget;
    card.style.transform = 'translateY(-8px) scale(1.02)';
    card.style.zIndex = '10';
}

function handleEpisodeHoverOut(event) {
    const card = event.currentTarget;
    card.style.transform = 'translateY(0) scale(1)';
    card.style.zIndex = '1';
}

function handlePosterClick(event) {
    const posterCard = event.currentTarget;
    const seriesTitle = posterCard.querySelector('span').textContent;
    
    console.log(`Poster clicked: ${seriesTitle}`);
    showNotification(`Opening ${seriesTitle}`, 'info');
    
    // In a real app, this would navigate to the series page
}

function handleKeyboardShortcuts(event) {
    // Spacebar to play/pause
    if (event.code === 'Space' && !event.target.matches('input, textarea')) {
        event.preventDefault();
        handlePlayClick();
    }
    
    // Escape to close modals (if any were open)
    if (event.code === 'Escape') {
        closeAllModals();
    }
}

function handleWindowResize() {
    console.log('Window resized - adjusting layout');
    // Add any responsive layout adjustments here
}

// Video Player Simulation
function setupVideoPlayer() {
    console.log('Video player setup complete');
    // In a real app, this would initialize the video player
}

function simulateVideoPlayback() {
    // Simulate video playback
    console.log('Simulating video playback...');
    
    // Show loading state
    const playButton = document.getElementById('playButton');
    const originalText = playButton.innerHTML;
    
    playButton.innerHTML = `
        <svg class="animate-spin h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Loading...
    `;
    playButton.disabled = true;
    
    // Simulate loading time
    setTimeout(() => {
        playButton.innerHTML = originalText;
        playButton.disabled = false;
        showNotification('Now playing: Loki - Season 1', 'success');
    }, 2000);
}

function simulateTrailerPlayback() {
    console.log('Simulating trailer playback...');
    // Similar to simulateVideoPlayback but for trailers
}

function simulateEpisodePlayback(episodeNumber) {
    console.log(`Simulating playback of episode ${episodeNumber}...`);
    // Similar to simulateVideoPlayback but for specific episodes
}

// Modal Functions
function showSeriesInfoModal() {
    // In a real app, this would show a modal with series information
    console.log('Showing series info modal');
}

function showSearchModal() {
    // In a real app, this would show a search modal
    console.log('Showing search modal');
}

function closeAllModals() {
    // In a real app, this would close any open modals
    console.log('Closing all modals');
}

// Notification System
function setupNotifications() {
    console.log('Notification system initialized');
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 z-50 p-4 rounded-lg shadow-lg transform transition-all duration-300 translate-x-full ${
        type === 'success' ? 'bg-green-600' : 
        type === 'error' ? 'bg-red-600' : 
        'bg-gray-800'
    } text-white max-w-sm border-l-4 ${type === 'success' ? 'border-green-400' : type === 'error' ? 'border-red-400' : 'border-gray-400'}`;
    
    notification.innerHTML = `
        <div class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            <span class="font-medium">${message}</span>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Header background management
function changeHeaderBackground(newImageUrl) {
    document.documentElement.style.setProperty('--header-background', `url('${newImageUrl}')`);
}

// Example usage: changeHeaderBackground('https://new-image-url.com/image.jpg');

// Export functions for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeApp,
        showNotification,
        debounce,
        changeHeaderBackground
    };
}
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
