// Configuration
const CONFIG = {
    PASSWORD: 'AMIS',
    VIDEOS: [
        {
            id: 'tokyo',
            title: 'TOKYO NIGHTS',
            date: '08.06.26',
            thumbnail: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22%3E%3Cdefs%3E%3ClinearGradient id=%22g1%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:%23ff00ff%22%3E%3C/stop%3E%3Cstop offset=%22100%25%22 style=%22stop-color:%23000080%22%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22300%22 height=%22200%22 fill=%22url(%23g1)%22%3E%3C/rect%3E%3Ctext x=%22150%22 y=%22100%22 font-family=%22Orbitron%22 font-size=%2232%22 fill=%22%23fff%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3ETOKYO%3C/text%3E%3C/svg%3E'
        },
        {
            id: 'california',
            title: 'CALIFORNIA TRIP',
            date: '21.05.26',
            thumbnail: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22%3E%3Cdefs%3E%3ClinearGradient id=%22g2%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:%23ffaa00%22%3E%3C/stop%3E%3Cstop offset=%22100%25%22 style=%22stop-color:%23ff5500%22%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22300%22 height=%22200%22 fill=%22url(%23g2)%22%3E%3C/rect%3E%3Ctext x=%22150%22 y=%22100%22 font-family=%22Orbitron%22 font-size=%2224%22 fill=%22%23fff%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3ECALIFORNIA%3C/text%3E%3C/svg%3E'
        },
        {
            id: 'soiree',
            title: 'SOIRÉE ALEX\'',
            date: '09.05.26',
            thumbnail: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22%3E%3Cdefs%3E%3ClinearGradient id=%22g3%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:%2300ffff%22%3E%3C/stop%3E%3Cstop offset=%22100%25%22 style=%22stop-color:%23000080%22%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22300%22 height=%22200%22 fill=%22url(%23g3)%22%3E%3C/rect%3E%3Ctext x=%22150%22 y=%22100%22 font-family=%22Orbitron%22 font-size=%2222%22 fill=%22%23fff%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3ESOIRÉE%3C/text%3E%3C/svg%3E'
        },
        {
            id: 'bali',
            title: 'BALI SUNSET',
            date: '17.04.26',
            thumbnail: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22%3E%3Cdefs%3E%3ClinearGradient id=%22g4%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:%23ff3300%22%3E%3C/stop%3E%3Cstop offset=%22100%25%22 style=%22stop-color:%23ff00ff%22%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22300%22 height=%22200%22 fill=%22url(%23g4)%22%3E%3C/rect%3E%3Ctext x=%22150%22 y=%22100%22 font-family=%22Orbitron%22 font-size=%2228%22 fill=%22%23fff%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EBALI%3C/text%3E%3C/svg%3E'
        },
        {
            id: 'paris',
            title: 'PARIS AFTERHOURS',
            date: '28.03.26',
            thumbnail: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22%3E%3Cdefs%3E%3ClinearGradient id=%22g5%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:%23ff00ff%22%3E%3C/stop%3E%3Cstop offset=%22100%25%22 style=%22stop-color:%23330099%22%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22300%22 height=%22200%22 fill=%22url(%23g5)%22%3E%3C/rect%3E%3Ctext x=%22150%22 y=%22100%22 font-family=%22Orbitron%22 font-size=%2228%22 fill=%22%23fff%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EPARIS%3C/text%3E%3C/svg%3E'
        },
        {
            id: 'winter',
            title: 'WINTER VIBES',
            date: '10.02.26',
            thumbnail: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22%3E%3Cdefs%3E%3ClinearGradient id=%22g6%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:%2300ffff%22%3E%3C/stop%3E%3Cstop offset=%22100%25%22 style=%22stop-color:%23000033%22%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22300%22 height=%22200%22 fill=%22url(%23g6)%22%3E%3C/rect%3E%3Ctext x=%22150%22 y=%22100%22 font-family=%22Orbitron%22 font-size=%2224%22 fill=%22%23fff%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EWINTER%3C/text%3E%3C/svg%3E'
        }
    ]
};

// DOM Elements
const DOM = {
    heroSection: document.getElementById('heroSection'),
    enterBtn: document.getElementById('enterBtn'),
    passwordScreen: document.getElementById('passwordScreen'),
    passwordInput: document.getElementById('passwordInput'),
    passwordError: document.getElementById('passwordError'),
    submitBtn: document.getElementById('submitBtn'),
    gallery: document.getElementById('gallery'),
    galleryGrid: document.getElementById('galleryGrid'),
    playerOverlay: document.getElementById('playerOverlay'),
    mainVideo: document.getElementById('mainVideo'),
    closeBtn: document.getElementById('closeBtn'),
    videoTitle: document.getElementById('videoTitle'),
    videoDate: document.getElementById('videoDate'),
    bgMusic: document.getElementById('bgMusic')
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    setupGallery();
    setupClock();
});

// Event Listeners
function setupEventListeners() {
    DOM.enterBtn.addEventListener('click', showPasswordScreen);
    DOM.submitBtn.addEventListener('submit', handlePasswordSubmit);
    DOM.passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handlePasswordSubmit(e);
    });
    DOM.closeBtn.addEventListener('click', closePlayer);
    
    // ESC to close player
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && DOM.playerOverlay.classList.contains('active')) {
            closePlayer();
        }
    });
}

// Setup Gallery
function setupGallery() {
    DOM.galleryGrid.innerHTML = '';
    CONFIG.VIDEOS.forEach(video => {
        const card = createVideoCard(video);
        DOM.galleryGrid.appendChild(card);
    });
}

function createVideoCard(video) {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.addEventListener('click', () => playVideo(video));
    
    card.innerHTML = `
        <div class="video-cassette">
            <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail">
            <div class="video-label">
                <div class="video-title">${video.title}</div>
                <div class="video-date">${video.date}</div>
            </div>
            <div class="cassette-sony">
                <div>SONY</div>
                <div>HiB</div>
            </div>
        </div>
    `;
    
    return card;
}

// Password Screen
function showPasswordScreen() {
    DOM.passwordScreen.classList.add('active');
    DOM.passwordInput.focus();
    DOM.bgMusic.play().catch(() => console.warn('Audio autoplay blocked'));
}

function handlePasswordSubmit(e) {
    e.preventDefault();
    const password = DOM.passwordInput.value.trim().toUpperCase();
    
    if (password === CONFIG.PASSWORD) {
        DOM.passwordScreen.classList.remove('active');
        DOM.heroSection.style.display = 'none';
        DOM.gallery.classList.add('active');
    } else {
        DOM.passwordError.textContent = 'Wrong password';
        DOM.passwordInput.value = '';
        DOM.passwordInput.focus();
        setTimeout(() => {
            DOM.passwordError.textContent = '';
        }, 2000);
    }
}

// Video Player
function playVideo(video) {
    DOM.bgMusic.pause();
    DOM.playerOverlay.classList.add('active');
    DOM.videoTitle.textContent = video.title;
    DOM.videoDate.textContent = video.date;
    
    // Create demo video stream
    createDemoVideoStream(video.title);
}

function createDemoVideoStream(title) {
    const canvas = document.createElement('canvas');
    canvas.width = 1280;
    canvas.height = 720;
    const ctx = canvas.getContext('2d');
    
    let frameCount = 0;
    const colors = ['#ff00ff', '#00ffff', '#ffff00', '#ff6600', '#00ff00'];
    
    function animate() {
        frameCount++;
        
        // Background gradient
        const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        grad.addColorStop(0, `hsl(${frameCount * 2}, 100%, 15%)`);
        grad.addColorStop(1, `hsl(${frameCount * 2 + 180}, 100%, 25%)`);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Animated shapes
        for (let i = 0; i < 5; i++) {
            ctx.fillStyle = colors[i];
            ctx.globalAlpha = 0.3 + Math.sin(frameCount / 20 + i) * 0.3;
            ctx.fillRect(
                100 + i * 200 + Math.sin(frameCount / 10 + i) * 30,
                200 + Math.cos(frameCount / 15 + i) * 50,
                150,
                200
            );
        }
        
        // Animated circles
        for (let i = 0; i < 3; i++) {
            ctx.fillStyle = colors[(i + 1) % colors.length];
            ctx.globalAlpha = 0.5 + Math.cos(frameCount / 15 + i * 2) * 0.4;
            ctx.beginPath();
            ctx.arc(
                640 + Math.cos(frameCount / 20 + i) * 200,
                360 + Math.sin(frameCount / 25 + i) * 150,
                100 + Math.sin(frameCount / 30) * 50,
                0,
                Math.PI * 2
            );
            ctx.fill();
        }
        
        // Title
        ctx.globalAlpha = 1;
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 72px Orbitron';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.shadowColor = '#ff00ff';
        ctx.shadowBlur = 20;
        ctx.fillText(title, 640, 200);
        
        DOM.mainVideo.srcObject = canvas.captureStream(30);
        
        if (frameCount < 600) {
            requestAnimationFrame(animate);
        }
    }
    
    animate();
    DOM.mainVideo.play().catch(() => console.warn('Video autoplay blocked'));
}

function closePlayer() {
    DOM.playerOverlay.classList.remove('active');
    DOM.mainVideo.pause();
    DOM.mainVideo.srcObject = null;
    DOM.bgMusic.play().catch(() => console.warn('Audio autoplay blocked'));
}

// Clock
function setupClock() {
    function updateClock() {
        const now = new Date();
        const time = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
        const date = now.toLocaleDateString('fr-FR', { month: 'short', day: '2-digit', year: '2-digit' }).toUpperCase();
        
        const timeElement = document.getElementById('clockTime');
        const dateElement = document.getElementById('clockDate');
        const passwordTimeElement = document.getElementById('passwordClockTime');
        const passwordDateElement = document.getElementById('passwordClockDate');
        
        if (timeElement) timeElement.textContent = time;
        if (dateElement) dateElement.textContent = date;
        if (passwordTimeElement) passwordTimeElement.textContent = time;
        if (passwordDateElement) passwordDateElement.textContent = date;
    }
    
    updateClock();
    setInterval(updateClock, 1000);
}
