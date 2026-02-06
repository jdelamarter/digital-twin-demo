# Nike Digital Twin NFC Verification Site

A visually stunning mobile-first website for Nike product verification via NFC chips.

## Features

- **Screen 1**: Verifying Purchase animation (4 seconds)
- **Screen 2**: Verified confirmation message (3 seconds)
- **Screen 3**: 3D rotating shoe display with glassmorphism UI

## Tech Stack

- React + Vite
- Framer Motion for animations
- 140-frame shoe rotation sequence
- Mobile-optimized design

## Local Development

```bash
npm install
npm run dev
```

## Deployment to Vercel

### Option 1: Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option 2: GitHub Integration

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will auto-detect Vite and deploy

### Option 3: Manual Deploy

```bash
npm run build
vercel --prod
```

## NFC Chip Configuration

Once deployed, program your NFC chip with the Vercel URL:
- Example: `https://your-project.vercel.app`

## Mobile Testing

1. **Browser DevTools**: Use device emulation (Cmd+Shift+M)
2. **Local Network**: Access via local IP on same WiFi
3. **Vercel Preview**: Test on actual phone via deployment URL

## Project Structure

```
nike-digital-twin/
├── public/
│   ├── shoe-frames/     # 140 PNG frames
│   ├── fonts/           # Helvetica Neue & Optimistic
│   └── logo/            # Nike logos
├── src/
│   ├── components/
│   │   ├── Screen1Verifying.jsx
│   │   ├── Screen2Verified.jsx
│   │   ├── Screen3DigitalTwin.jsx
│   │   └── RotatingShoe.jsx
│   ├── App.jsx
│   └── index.css
└── vercel.json
```

## Customization

### Adjust Rotation Speed
Edit `RotatingShoe.jsx` line 32:
```javascript
const fps = 7; // Change to adjust rotation speed
```

### Adjust Screen Timing
Edit `App.jsx` lines 13 and 18:
```javascript
setTimeout(() => setCurrentScreen(2), 4000); // Screen 1 duration
setTimeout(() => setCurrentScreen(3), 7000); // Screen 2 duration
```

### Adjust Colors/Brightness
Edit `RotatingShoe.css` to add filters:
```css
.shoe-image {
  filter: drop-shadow(0 33px 43.6px rgba(0, 0, 0, 0.52)) 
          brightness(1.2) saturate(1.3);
}
```

## License

© Nike, Inc. All rights reserved.
