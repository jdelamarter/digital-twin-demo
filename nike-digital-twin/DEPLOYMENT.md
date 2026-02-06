# Deployment Instructions

## Deploy to Vercel (Recommended)

### Option 1: Vercel CLI (Fastest)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. From the project directory, run:
```bash
vercel
```

3. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? (select your account)
   - Link to existing project? **N**
   - Project name? **nike-digital-twin** (or your choice)
   - Directory? **./nike-digital-twin**
   - Override settings? **N**

4. Your site will be deployed! You'll get a URL like:
   `https://nike-digital-twin-xxx.vercel.app`

5. For production deployment:
```bash
vercel --prod
```

### Option 2: GitHub + Vercel (For Continuous Deployment)

1. **Push to GitHub:**
```bash
cd nike-digital-twin
git init
git add .
git commit -m "Initial commit: Nike Digital Twin NFC site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/nike-digital-twin.git
git push -u origin main
```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

3. **Custom Domain (Optional):**
   - In Vercel dashboard, go to Project Settings > Domains
   - Add your custom domain (e.g., `digitaltwin.nike.com`)
   - Update DNS records as instructed

### Option 3: Manual Build Upload

```bash
npm run build
vercel --prod
```

## Program Your NFC Chip

Once deployed, use the Vercel URL to program your NFC chip:

1. **Get your URL:** `https://your-project.vercel.app`
2. **Use NFC programming app** (iOS: NFC Tools, Android: NFC Tools)
3. **Write URL to chip** as a URI/Web Link record
4. **Test:** Tap chip with phone to verify

## Testing on Mobile

### Local Testing

The dev server had permission issues, but you can test the built version:

```bash
npm run build
npx serve dist
```

Then access via your phone on the same WiFi network.

### Production Testing

Once deployed to Vercel, simply visit the URL on your mobile device.

## Troubleshooting

### Fonts Not Loading
- Ensure font files are in `public/fonts/`
- Check browser console for 404 errors
- Verify @font-face paths in `src/index.css`

### Images Not Rotating
- Check that all 140 frames (0001.png - 0140.png) are in `public/shoe-frames/`
- Open browser console and look for missing image errors
- Verify frame numbering is zero-padded (0001, not 1)

### Slow Loading
- The 140 PNG files take time to load initially
- Consider converting to WebP for smaller file sizes:
  ```bash
  brew install webp
  for file in public/shoe-frames/*.png; do
    cwebp "$file" -o "${file%.png}.webp"
  done
  ```
  Then update `RotatingShoe.jsx` to use `.webp` extension

### Glassmorphism Not Working
- Ensure you're testing on a modern browser (Chrome 76+, Safari 13+)
- backdrop-filter may not work on older devices

## Performance Optimization

### Reduce Image Size
```bash
# Install ImageMagick
brew install imagemagick

# Resize all frames to 50% (faster loading)
cd public/shoe-frames
for file in *.png; do
  convert "$file" -resize 50% "$file"
done
```

### Enable Gzip Compression
Vercel does this automatically, but verify in Network tab (Response Headers should show `content-encoding: gzip`)

## Custom Domain Setup

If you want a branded URL like `verify.yourdomain.com`:

1. In Vercel Dashboard: Settings > Domains
2. Add your domain
3. Update DNS with provided records:
   - Type: A
   - Name: @ or subdomain
   - Value: (Vercel IP provided)
4. Wait for DNS propagation (5 mins - 48 hours)

## Project Files

Your built site is in `nike-digital-twin/`:
- `dist/` - Production build (deploy this)
- `src/` - Source code
- `public/` - Static assets (fonts, images, logos)

## Next Steps

1. ✅ Build successful
2. ⏳ Deploy to Vercel
3. ⏳ Test on mobile device
4. ⏳ Program NFC chip
5. ⏳ Test NFC tap-to-open

Enjoy your stunning Nike Digital Twin verification experience!
