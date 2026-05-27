// Demo video generator - creates test MP4 with canvas
function generateDemoVideo(title) {
    return new Promise((resolve) => {
        const canvas = document.createElement('canvas');
        canvas.width = 1280;
        canvas.height = 720;
        const ctx = canvas.getContext('2d');
        
        const frames = [];
        for (let f = 0; f < 60; f++) {
            // Clear
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Gradient background
            const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            grad.addColorStop(0, `hsl(${f * 6}, 100%, 10%)`);
            grad.addColorStop(1, `hsl(${f * 6 + 180}, 100%, 20%)`);
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Animated shapes
            ctx.fillStyle = '#ff00ff';
            ctx.globalAlpha = 0.6 + Math.sin(f / 10) * 0.4;
            ctx.fillRect(200 + f * 5, 200, 200, 200);
            
            ctx.fillStyle = '#00ffff';
            ctx.beginPath();
            ctx.arc(640 + Math.cos(f / 10) * 100, 360 + Math.sin(f / 10) * 100, 80, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.globalAlpha = 1;
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 48px Orbitron';
            ctx.textAlign = 'center';
            ctx.fillText(title, 640, 100);
            
            ctx.font = '24px Montserrat';
            ctx.fillText(`Frame ${f + 1}/60`, 640, 680);
            
            frames.push(canvas.toDataURL('image/png'));
        }
        
        // Create blob video from frames
        resolve({
            title: title,
            url: 'data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAACKmmd2lkdGg9MTI4MCBoZWlnaHQ9NzIwIGNvZGVjPWg...'
        });
    });
}

// Configuration with demo data
const CONFIG = {
    PASSWORD: 'AMIS',
    IS_DEMO: true,
    VIDEOS: [
        {
            id: 'tokyo',
            title: 'TOKYO NIGHTS',
            thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200"%3E%3Cdefs%3E%3ClinearGradient id="g1"%3E%3Cstop offset="0%25" style="stop-color:%23ff00ff"%3E%3C/stop%3E%3Cstop offset="100%25" style="stop-color:%23000080"%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="300" height="200" fill="url(%23g1)"%3E%3C/rect%3E%3Ctext x="150" y="100" font-family="Orbitron" font-size="32" fill="%23fff" text-anchor="middle" dominant-baseline="middle"%3ETOKYO%3C/text%3E%3C/svg%3E'
        },
        {
            id: 'paris',
            title: 'PARIS AFTERHOURS',
            thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200"%3E%3Cdefs%3E%3ClinearGradient id="g2"%3E%3Cstop offset="0%25" style="stop-color:%2300ffff"%3E%3C/stop%3E%3Cstop offset="100%25" style="stop-color:%23000040"%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="300" height="200" fill="url(%23g2)"%3E%3C/rect%3E%3Ctext x="150" y="100" font-family="Orbitron" font-size="32" fill="%23fff" text-anchor="middle" dominant-baseline="middle"%3EPARIS%3C/text%3E%3C/svg%3E'
        },
        {
            id: 'newyork',
            title: 'NEW YORK VIBES',
            thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200"%3E%3Cdefs%3E%3ClinearGradient id="g3"%3E%3Cstop offset="0%25" style="stop-color:%23ffff00"%3E%3C/stop%3E%3Cstop offset="100%25" style="stop-color:%23ff6600"%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="300" height="200" fill="url(%23g3)"%3E%3C/rect%3E%3Ctext x="150" y="100" font-family="Orbitron" font-size="24" fill="%23000" text-anchor="middle" dominant-baseline="middle"%3ENEW YORK%3C/text%3E%3C/svg%3E'
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
            data-video-title="${video.title}"
        >
            <div class="cassette">
                <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" style="width:100%; display:block;">
                    <!-- Cassette body -->
                    <defs>
                        <linearGradient id="cassGrad${video.id}" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:#333"/>
                            <stop offset="100%" style="stop-color:#000"/>
                        </linearGradient>
                    </defs>
                    <rect x="20" y="30" width="260" height="340" rx="10" fill="url(%23cassGrad${video.id})" stroke="#666" stroke-width="2"/>
                    <rect x="30" y="50" width="240" height="300" rx="5" fill="#1a1a1a" stroke="#444" stroke-width="1"/>
                    <!-- Left reel -->
                    <circle cx="80" cy="120" r="25" fill="#222" stroke="#888" stroke-width="2"/>
                    <circle cx="80" cy="120" r="15" fill="#111"/>
                    <!-- Right reel -->
                    <circle cx="220" cy="120" r="25" fill="#222" stroke="#888" stroke-width="2"/>
                    <circle cx="220" cy="120" r="15" fill="#111"/>
                    <!-- Label area -->
                    <rect x="50" y="160" width="200" height="120" fill="#222" stroke="#666" stroke-width="1"/>
                    <text x="150" y="210" font-family="Orbitron" font-size="16" fill="#ff00ff" text-anchor="middle" font-weight="bold">${video.title}</text>
                    <!-- Thumbnail area -->
                    <rect x="65" y="175" width="170" height="95" fill="url(#thumbGrad${video.id})"/>
                    <image href="${video.thumbnail}" x="65" y="175" width="170" height="95"/>
                </svg>
            </div>
            <div class="video-title">${video.title}</div>
        </button>
    `;
    
    card.querySelector('.cassette-btn').addEventListener('click', (e) => {
        const title = e.currentTarget.getAttribute('data-video-title');
        playDemoVideo(title);
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

// Demo Video Player
function playDemoVideo(title) {
    elements.bgMusic.pause();
    elements.playerOverlay.classList.add('active');
    
    // Create a colorful demo video canvas
    createDemoVideoStream(title);
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
        
        // Background with gradient
        const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        grad.addColorStop(0, `hsl(${frameCount * 2}, 100%, 15%)`);
        grad.addColorStop(1, `hsl(${frameCount * 2 + 180}, 100%, 25%)`);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Animated rectangles
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
        
        ctx.globalAlpha = 1;
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 72px Orbitron';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.shadowColor = '#ff00ff';
        ctx.shadowBlur = 20;
        ctx.fillText(title, 640, 200);
        
        ctx.font = '32px Montserrat';
        ctx.fillText('DEMO VIDEO', 640, 650);
        
        elements.mainVideo.srcObject = canvas.captureStream(30);
        
        if (frameCount < 600) {
            requestAnimationFrame(animate);
        }
    }
    
    animate();
    elements.mainVideo.play();
}

function closePlayer() {
    elements.playerOverlay.classList.remove('active');
    elements.crtContainer.classList.remove('active');
    elements.mainVideo.pause();
    elements.crtVideo.pause();
    elements.mainVideo.srcObject = null;
    elements.crtVideo.srcObject = null;
    
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