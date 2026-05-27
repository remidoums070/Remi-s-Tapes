# Remi's Tapes 🎬

A retro VHS-themed portfolio website showcasing memories captured with a Sony Camcorder. Built with vanilla HTML, CSS, and JavaScript featuring a nostalgic aesthetic with CRT TV effects and cassette tape interfaces.

## Features

- 🎨 **Retro VHS Aesthetic**: Scan lines, CRT TV effects, cassette tape design
- 🔐 **Password Protected**: Access code required to view the gallery
- 📹 **Video Player**: Fullscreen video player with CRT display mode
- 🎵 **Background Music**: Ambient music that plays in the gallery
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile
- ♿ **Accessible**: ARIA labels, keyboard navigation, semantic HTML
- 🌍 **Bilingual**: French/English support

## Project Structure

```
remi-tapes/
├── index.html          # Main HTML file
├── styles.css          # Styling (separated from HTML)
├── script.js           # JavaScript logic (separated from HTML)
├── .gitignore          # Git ignore rules
├── README.md           # This file
├── images/             # Image assets
│   ├── background.jpg
│   ├── portrait.png
│   ├── cassette.png
│   ├── tv.png
│   ├── thumb1.jpg
│   └── thumb2.jpg
├── videos/             # Video files
│   ├── tokyo.mp4
│   └── paris.mp4
└── music/              # Audio files
    └── groove.mp3
```

## How to Use

### File Structure Setup

1. Create the folders as shown in the project structure above
2. Add your images to the `images/` folder:
   - `portrait.png` - Your profile picture (300px recommended)
   - `cassette.png` - Cassette tape frame design
   - `tv.png` - CRT TV frame design
   - `background.jpg` - Background image
   - `thumb1.jpg`, `thumb2.jpg` - Video thumbnails

3. Add your video files to the `videos/` folder:
   - `tokyo.mp4`
   - `paris.mp4`

4. Add your audio to the `music/` folder:
   - `groove.mp3`

### Running Locally

1. Clone or download this repository
2. Open `index.html` in a web browser
3. Enter password: **AMIS**

### Adding More Videos

Edit `script.js` and add to the `CONFIG.VIDEOS` array:

```javascript
{
    id: 'new-video',
    src: 'videos/new-video.mp4',
    title: 'VIDEO TITLE',
    thumbnail: 'images/thumb3.jpg'
}
```

## Customization

### Change Password

Edit `script.js` line 3:
```javascript
const CONFIG = {
    PASSWORD: 'YOUR_PASSWORD_HERE',
    // ...
};
```

### Change Colors

Edit `styles.css` to modify the color scheme:
- `#ff00ff` - Magenta (main accent color)
- `#ffffff` - White (text)
- `black` - Black (background)

### Modify Videos

Edit the `CONFIG.VIDEOS` array in `script.js` to add, remove, or update videos.

## Code Improvements

This refactored version includes:

✅ Separated HTML, CSS, and JavaScript for better maintainability  
✅ Improved accessibility with ARIA labels and semantic HTML  
✅ Better error handling and browser compatibility  
✅ Lazy loading for images and videos  
✅ Responsive design with `clamp()` for fluid typography  
✅ No inline event handlers  
✅ Keyboard navigation (ESC to close player)  
✅ Better UX with button states and form feedback  

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Credits

Created with ❤️ by Remi

## License

Private - Unauthorized use, distribution, or modification is prohibited.
