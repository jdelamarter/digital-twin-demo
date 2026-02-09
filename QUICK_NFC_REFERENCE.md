# Quick NFC Setup Reference Card

## 🚀 3-Step Setup

### Step 1: Get Your URL
```
1. Go to: https://vercel.com/dashboard
2. Find project: "nike-digital-twin"
3. Copy your URL (looks like):
   https://nike-digital-twin.vercel.app
```

### Step 2: Download NFC App
**iOS:** NFC Tools (App Store)  
**Android:** NFC Tools (Google Play)

### Step 3: Program Chip
```
1. Open NFC Tools app
2. Go to "Write" tab
3. Add record → URL/URI
4. Paste your Vercel URL
5. Tap "Write"
6. Hold chip to phone
7. Done! ✓
```

---

## 📱 Testing

### iPhone:
- **Lock screen** → Hold chip to **top edge**
- Should see notification instantly

### Android:
- **Unlock phone** → Hold chip to **back**
- Should auto-open browser

---

## 🛒 Buy NFC Chips

**Chip Type:** NTAG215 or NTAG216  
**Form:** 25mm round stickers (recommended)  
**Where:** Amazon, AliExpress  
**Search:** "NTAG215 NFC stickers"

---

## ⚡ Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| iPhone not detecting | Hold to TOP EDGE (near notch) |
| Android not detecting | Settings → NFC → Turn ON |
| Site loads slowly | Normal first time (140 images) |
| Wrong URL | Check Vercel dashboard |

---

## 📍 Your Project Info

**Vercel Project:** `nike-digital-twin`  
**Project ID:** `prj_iD8vRianVMpDtDwnaTTnS1OekiqX`  
**Dashboard:** https://vercel.com/dashboard

---

**Full guide:** See `NFC_SETUP_GUIDE.md` for detailed instructions
