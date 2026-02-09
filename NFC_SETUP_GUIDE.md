# NFC Chip Setup Guide for Nike Digital Twin

## Quick Start: Get Your URL

Your project is already linked to Vercel with the project name **nike-digital-twin**.

### Option 1: Find Your Existing Deployment URL

1. **Visit Vercel Dashboard:**
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Log in with your account
   - Find the "nike-digital-twin" project
   - Click on it to see your deployment URL

2. **Your URL will look like:**
   ```
   https://nike-digital-twin.vercel.app
   ```
   or
   ```
   https://nike-digital-twin-[random-string].vercel.app
   ```

### Option 2: Deploy Now (If Not Already Deployed)

If you don't see a deployment, run this command in your terminal:

```bash
cd nike-digital-twin
vercel --prod
```

After deployment completes, you'll see your production URL in the terminal output.

---

## Program Your NFC Chip

Once you have your URL, follow these steps to program your NFC chip:

### For iOS (iPhone):

**App Recommendation: NFC Tools**

1. **Download NFC Tools** from the App Store
   - Free app by wakdev

2. **Open the app and go to "Write" tab**

3. **Add a record:**
   - Tap "Add a record"
   - Select "URL / URI"
   - Enter your Vercel URL: `https://nike-digital-twin.vercel.app`

4. **Write to chip:**
   - Tap "Write" button
   - Hold your NFC chip near the top edge of your iPhone
   - Wait for the "Write successful" message

5. **Test it:**
   - Lock your iPhone screen
   - Tap the NFC chip to the top of your phone
   - A notification should appear with your URL
   - Tap it to open the experience

### For Android:

**App Recommendations: NFC Tools or Trigger**

#### Option A: NFC Tools (Same as iOS)

1. **Download NFC Tools** from Google Play Store

2. **Open app → Write tab**

3. **Add record:**
   - Tap "Add a record"
   - Select "URL/URI"
   - Enter: `https://nike-digital-twin.vercel.app`

4. **Write:**
   - Tap "Write"
   - Hold chip to back of phone
   - Wait for confirmation

#### Option B: Trigger App

1. **Download Trigger** from Google Play

2. **Create new task:**
   - Select "URL/URI"
   - Enter your Vercel URL
   - Name it "Nike Digital Twin"

3. **Write to chip:**
   - Tap "Write to NFC Tag"
   - Hold chip to phone back

---

## NFC Chip Recommendations

If you haven't purchased NFC chips yet, here are good options:

### Best for This Project:
- **NTAG215 or NTAG216** chips
  - 504-888 bytes capacity (plenty for a URL)
  - Compatible with all modern smartphones
  - Available as:
    - Stickers (easiest to hide in shoe box or tag)
    - Cards (credit card size)
    - Key fobs
    - Epoxy tags (durable)

### Where to Buy:
- Amazon: "NTAG215 NFC Tags"
- AliExpress: "NFC Stickers NTAG215"
- TagsForDroid.com
- BlueBiteLLC.com

### Recommended Format:
**Small circular stickers (25mm diameter)** - Easy to place on:
- Inside shoe box lid
- Back of authentication card
- Under shoe insole
- Sewn into shoe tongue tag

---

## Advanced: Custom Short URL

Want a cleaner URL like `nike.verify.com` instead of the Vercel URL?

### Option 1: Custom Domain in Vercel (Free)

1. **In Vercel Dashboard:**
   - Go to Project Settings → Domains
   - Click "Add Domain"
   - Enter your domain (e.g., `verify.yourdomain.com`)
   - Follow DNS configuration instructions

2. **Update DNS:**
   - Add CNAME record pointing to `cname.vercel-dns.com`
   - Wait 5-60 minutes for propagation

3. **Update NFC chip:**
   - Use your new custom domain when programming

### Option 2: URL Shortener (Quick & Free)

Use a service like:
- **Bitly**: Create `bit.ly/nike-twin`
- **TinyURL**: Create `tinyurl.com/nike-verify`
- **Rebrandly**: Custom short domain

Then program the NFC chip with the shortened URL.

---

## Testing Your Setup

### Before Programming:

1. **Test the URL on your phone's browser:**
   - Open Safari (iOS) or Chrome (Android)
   - Enter your Vercel URL
   - Ensure the experience loads correctly
   - Check that animations and images work

### After Programming:

1. **Test with iPhone:**
   - Lock screen
   - Hold NFC chip to top edge of phone
   - Should get notification instantly

2. **Test with Android:**
   - Keep phone unlocked (first time)
   - Hold chip to back of phone
   - Should open browser automatically

3. **Test loading speed:**
   - First load will be slower (downloading images)
   - Subsequent loads should be faster (cached)

---

## Troubleshooting

### "NFC Not Working on iPhone"

**Check these settings:**
1. Go to Settings → General → NFC
2. Ensure NFC is turned ON
3. iPhone must be unlocked for first read
4. Hold chip to TOP EDGE of phone (where notch is)
5. Remove phone case if thick

### "NFC Not Working on Android"

**Check these settings:**
1. Settings → Connected devices → Connection preferences → NFC
2. Toggle NFC ON
3. Try holding chip to different areas of phone back
4. Remove phone case if it has metal

### "URL Opens But Site Doesn't Load"

**Possible causes:**
1. **Slow internet:** The site loads 140 PNG frames
   - Wait 10-15 seconds for full load
   - Consider optimizing images (see DEPLOYMENT.md)

2. **Wrong URL:** Double-check the URL on your Vercel dashboard

3. **Deployment issue:** Check Vercel dashboard for build errors

### "NFC Chip Won't Program"

**Try this:**
1. Ensure chip is NTAG215/216 (cheaper chips may not work)
2. Hold chip flat and still against phone
3. Try different NFC writing app
4. Test with a different chip (might be defective)

---

## Production Tips

### For Professional Use:

1. **Test with multiple phones:**
   - iPhone (iOS 14+)
   - Samsung Galaxy (Android 10+)
   - Google Pixel
   - Ensure compatibility

2. **Monitor usage:**
   - Add Vercel Analytics to track taps
   - See which devices are accessing
   - Monitor load times

3. **QR Code backup:**
   - Include a QR code alongside NFC
   - For phones without NFC or if NFC fails
   - Print QR code on authentication card

4. **Multiple languages:**
   - Detect user's language
   - Show experience in their language
   - Add language selector

---

## Example Use Cases

### Where to Place NFC Chips:

1. **Shoe Box:**
   - Inside lid (hidden)
   - On authentication card
   - On size/style sticker

2. **Shoe Itself:**
   - Under insole (waterproof chip required)
   - Sewn into tongue tag
   - Inside zipper pocket

3. **Retail Display:**
   - On product pedestal
   - On "Tap to Learn More" sign
   - On store shelf edge

4. **Marketing Materials:**
   - Event badges
   - Business cards
   - Posters ("Tap Here")

---

## Next Steps

1. ✅ Get your Vercel URL from dashboard
2. ⏳ Test URL on your phone's browser
3. ⏳ Download NFC programming app
4. ⏳ Program your NFC chip with the URL
5. ⏳ Test NFC tap on multiple phones
6. ⏳ Place chip in desired location
7. ⏳ Share with users!

---

## Resources

- **Vercel Dashboard:** https://vercel.com/dashboard
- **NFC Tools iOS:** https://apps.apple.com/app/nfc-tools/id1252962749
- **NFC Tools Android:** https://play.google.com/store/apps/details?id=com.wakdev.wdnfc
- **NFC Chip Specs:** https://www.nxp.com/docs/en/data-sheet/NTAG213_215_216.pdf
- **Your Project:** https://vercel.com/dashboard (find "nike-digital-twin")

---

**Need help?** Check the DEPLOYMENT.md file for more technical details about the web app itself.

**Your project name on Vercel:** `nike-digital-twin`  
**Project ID:** `prj_iD8vRianVMpDtDwnaTTnS1OekiqX`
