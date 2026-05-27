// Configuration
const CONFIG = {
    PASSWORD: 'AMIS', // Use environment variables in production
    VIDEOS: [
        {
            id: 'tokyo',
            src: 'videos/tokyo.mp4',
            title: 'TOKYO NIGHTS',
            thumbnail: 'images/thumb1.jpg'
        },
        {
            id: 'paris',
            src: 'videos/paris.mp4',
            title: 'PARIS AFTERHOURS',
            thumbnail: 'images/thumb2.jpg'
        }
    ]
};

// DOM Elements
const elements = {
    bgMusic: document.getElementById('bgMusic'),
    clock: document.getElementById('clock'),
    clockTime: document.querySelector('.clock-time'),
    clockDate: document.querySelector('.clock-date'),
    heroSection: document.getElementById('heroSection'),
    enterBtn: document.getElementById('enterBtn'),
    passwordScreen: document.getElementById('passwordScreen'),
    passwordForm: document.getElementById('passwordForm'),
    passwordInput: document.getElementById('passwordInput'),
    passwordError: document.getElementById('passwordError'),
    gallery: document.getElementById('gallery'),
    videosContainer: document.getElementById('videosContainer'),
    playerOverlay: document.getElementById('playerOverlay'),
    mainVideo: document.getElementById('mainVideo'),
    closeBtn: document.getElementById('closeBtn'),
    crtContainer: document.getElementById('crtContainer'),
    crtVideo: document.getElementById('crtVideo'),
    crtTitle: document.getElementById('crtTitle')
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    initializeGallery();
    updateClock();
    setInterval(updateClock, 1000);
});

// Event Listeners
function initializeEventListeners() {
    elements.enterBtn.addEventListener('click', openPasswordScreen);
    elements.passwordForm.addEventListener('submit', handlePasswordSubmit);
    elements.closeBtn.addEventListener('click', closePlayer);
    elements.mainVideo.addEventListener('fullscreenchange', handleFullscreenChange);
    
    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && elements.playerOverlay.classList.contains('active')) {
            closePlayer();
        }
    });
}

// Gallery Initialization
function initializeGallery() {
    elements.videosContainer.innerHTML = '';
    CONFIG.VIDEOS.forEach(video => {
        const card = createVideoCard(video);
        elements.videosContainer.appendChild(card);
    });
}

function createVideoCard(video) {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.innerHTML = `
        <button 
            class="cassette-btn" 
            aria-label="Play ${video.title}"
            data-video-src="${video.src}"
            data-video-title="${video.title}"
        >
            <div class="cassette">
                <img src="images/cassette.png" alt="Cassette frame" loading="lazy">
                <img src="${video.thumbnail}" alt="${video.title}" class="thumbnail" loading="lazy">
            </div>
            <div class="video-title">${video.title}</div>
        </button>
    `;
    
    card.querySelector('.cassette-btn').addEventListener('click', (e) => {
        const src = e.currentTarget.getAttribute('data-video-src');
        const title = e.currentTarget.getAttribute('data-video-title');
        playVideo(src, title);
    });
    
    return card;
}

// Password Handling
function openPasswordScreen() {
    elements.passwordScreen.classList.add('active');
    elements.passwordInput.focus();
    elements.passwordError.textContent = '';
}

function handlePasswordSubmit(event) {
    event.preventDefault();
    const password = elements.passwordInput.value.trim().toUpperCase();
    
    if (password === CONFIG.PASSWORD) {
        closePasswordScreen();
        showGallery();
    } else {
        elements.passwordError.textContent = 'Wrong password';
        elements.passwordInput.value = '';
        elements.passwordInput.focus();
    }
}

function closePasswordScreen() {
    elements.passwordScreen.classList.remove('active');
    elements.passwordInput.value = '';
    elements.passwordError.textContent = '';
}

// Gallery Display
function showGallery() {
    elements.heroSection.style.display = 'none';
    elements.gallery.classList.add('active');
}

// Video Player
function playVideo(src, title) {
    elements.bgMusic.pause();
    elements.playerOverlay.classList.add('active');
    elements.mainVideo.src = src;
    elements.crtTitle.textContent = title;
    
    // Attempt fullscreen with fallbacks
    const fullscreenPromise = elements.mainVideo.requestFullscreen?.() || 
                             elements.mainVideo.webkitRequestFullscreen?.() || 
                             Promise.reject('Fullscreen not supported');
    
    fullscreenPromise.catch(() => {
        console.warn('Fullscreen not available');
    });
}

function handleFullscreenChange() {
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        elements.crtContainer.classList.add('active');
        elements.crtVideo.src = elements.mainVideo.src;
    }
}

function closePlayer() {
    elements.playerOverlay.classList.remove('active');
    elements.crtContainer.classList.remove('active');
    elements.mainVideo.pause();
    elements.crtVideo.pause();
    elements.mainVideo.src = '';
    elements.crtVideo.src = '';
    
    // Exit fullscreen if active
    if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
    } else if (document.webkitFullscreenElement) {
        document.webkitExitFullscreen?.();
    }
    
    elements.bgMusic.play().catch(() => {
        console.warn('Audio autoplay blocked');
    });
}

// Clock
function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString('fr-FR');
    const date = now.toLocaleDateString('fr-FR');
    
    elements.clockTime.textContent = time;
    elements.clockDate.textContent = date;
}