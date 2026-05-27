# 🎬 Remi's Tapes - DEMO VERSION

Welcome to the **interactive demo** of Remi's Tapes! This version includes everything working with generated placeholder content so you can see exactly how the website looks and feels.

## 🚀 Try It Now

**Live Demo:** [View the Demo](index-demo.html) (open in your browser)

### Quick Start

1. Open `index-demo.html` in your web browser
2. Click **"ENTRER"** button
3. Enter password: **AMIS**
4. Explore the gallery with 3 demo videos
5. Click any video to play

## ✨ What's Included in the Demo

✅ **Full working website** - All features functional  
✅ **3 Demo Videos** - "Tokyo Nights", "Paris Afterhours", "New York Vibes"  
✅ **Animated SVG Graphics** - Custom portrait and cassette designs  
✅ **Interactive Video Player** - Click and play demo videos  
✅ **Responsive Design** - Works on desktop, tablet, mobile  
✅ **All original styling** - Retro VHS aesthetic intact  

## 🎨 Demo Features

- **Animated SVG Portrait** - Custom generated avatar
- **Generated Cassette Tapes** - SVG-based cassette designs
- **Canvas-based Demo Videos** - Colorful animated video demos
- **Working Password System** - Try "AMIS"
- **Digital Clock** - Live time and date display
- **CRT TV Effect** - Retro display frame

## 📝 What to Replace When You Have Real Files

### To Use Your Own Photos/Videos:

1. **Copy `index-demo.html` to `index.html`**
   - Or modify `index-demo.html` directly

2. **Replace placeholder images with yours:**
   - Create `images/` folder
   - Add your files: `portrait.png`, `cassette.png`, `tv.png`, `background.jpg`
   - Update image references in HTML

3. **Replace demo videos:**
   - Create `videos/` folder
   - Add your MP4 files: `tokyo.mp4`, `paris.mp4`, etc.
   - Update `CONFIG.VIDEOS` in script.js with actual video paths

4. **Switch to the production script:**
   - Use `script.js` instead of `script-demo.js`
   - Remove or keep the demo SVG graphics as you prefer

## 🎮 Interactive Demo Elements

### Hero Section
- 🎭 Animated SVG portrait
- 💫 Floating animation effect
- 🌈 Gradient text title
- 🔮 Glowing effects

### Gallery
- 📼 SVG cassette tape designs with thumbnails
- 🎬 Click to play videos
- ✨ Hover effects and animations
- 📱 Responsive grid layout

### Video Player
- ▶️ Full-featured HTML5 video player
- 🖥️ CRT TV frame design
- 🎨 Canvas-based demo video generation
- ⌨️ Press ESC to close

## 🔧 Customize the Demo

### Change Password
Edit `script-demo.js` line 6:
```javascript
PASSWORD: 'YOUR_PASSWORD_HERE',
```

### Add More Videos
Edit `script-demo.js` in the `VIDEOS` array (around line 7):
```javascript
{
    id: 'london',
    title: 'LONDON CALLING',
    thumbnail: 'data:image/svg+xml,...'
}
```

### Change Colors
Edit `styles.css` to modify:
- `#ff00ff` - Magenta (main accent)
- `#00ffff` - Cyan (secondary)
- `black` - Background

## 📚 File Structure

```
├── index-demo.html        👈 Open this file in browser
├── script-demo.js         Demo version with generated content
├── styles.css             Shared styling (works with both)
├── README-DEMO.md         This file
├── index.html             Production version (needs media files)
├── script.js              Production version
└── .gitignore
```

## 🎬 Next Steps: Adding Your Media

When you're ready to use your real content:

### 1. Prepare Your Files
```
images/
  ├── background.jpg    (1920x1080 or larger)
  ├── portrait.png      (300x300px)
  ├── cassette.png      (cassette tape design)
  ├── tv.png            (TV frame)
  ├── thumb1.jpg        (video thumbnail)
  └── thumb2.jpg        (video thumbnail)

videos/
  ├── tokyo.mp4
  └── paris.mp4

music/
  └── groove.mp3
```

### 2. Upload to GitHub
- Create folders in your repository
- Upload your files
- Update file paths in `index.html` and `script.js`

### 3. Deploy
- Use GitHub Pages to host for free
- Or upload to any web host

## ❓ Frequently Asked Questions

**Q: Can I share this demo with friends?**  
A: Yes! Just send them the link to `index-demo.html`

**Q: Does it work offline?**  
A: Yes! Everything works locally in your browser

**Q: Can I modify the demo?**  
A: Absolutely! It's yours to customize

**Q: How do I deploy my real version?**  
A: We'll help you set up GitHub Pages or any web host

## 🎨 Design Credits

- **Fonts**: Orbitron (Google Fonts) for retro feel
- **Color Scheme**: Inspired by 80s VHS aesthetic
- **SVG Graphics**: Custom generated
- **Animations**: CSS + Canvas API

---

**Enjoy exploring the demo! 🚀**

When you're ready to add your real photos and videos, just let me know!
