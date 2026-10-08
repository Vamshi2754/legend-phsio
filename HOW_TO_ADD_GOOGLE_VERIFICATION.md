# How to Add Google Search Console Verification

## Quick Guide

Your site is already set up to accept Google verification! Here's what to do:

### Step 1: Get Your Verification Code from Google

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property: `https://www.legendphysiotherapy.com`
3. Choose **"HTML tag"** verification method
4. Google will give you a code that looks like this:
   ```html
   <meta name="google-site-verification" content="ABC123XYZ456..." />
   ```
5. Copy the code part: `ABC123XYZ456...`

### Step 2: Add the Code to Your Site

Open `src/app/layout.tsx` and find this line (around line 157):

```typescript
verification: {
  google: 'your-google-verification-code', // Add your Google Search Console verification code
},
```

Replace `'your-google-verification-code'` with your actual code:

```typescript
verification: {
  google: 'ABC123XYZ456...', // Your actual code from Google
},
```

### Step 3: Deploy to Vercel

1. Save the file
2. Commit and push to GitHub:
   ```bash
   git add src/app/layout.tsx
   git commit -m "Add Google Search Console verification"
   git push
   ```
3. Vercel will automatically deploy (takes 1-2 minutes)

### Step 4: Verify in Google Search Console

1. Go back to Google Search Console
2. Click **"Verify"** button
3. ✅ Done! Your site is now verified

---

## Alternative Method: HTML File Upload

If you prefer to use an HTML file instead:

1. Google will provide a file like `google1234567890abcdef.html`
2. Download the file
3. Place it in your `public` folder
4. Deploy to Vercel
5. The file will be accessible at: `https://www.legendphysiotherapy.com/google1234567890abcdef.html`
6. Click "Verify" in Google Search Console

---

## What Happens After Verification?

Once verified, you can:
- ✅ Submit your sitemap
- ✅ Request indexing for pages
- ✅ Monitor search performance
- ✅ Fix crawl errors
- ✅ See which keywords bring traffic

---

## Current Site Status

✅ **Sitemap**: Ready at `/sitemap.xml` (40+ pages)
✅ **Robots.txt**: Configured and working
✅ **Meta Tags**: SEO optimized
✅ **Schema Markup**: Local business structured data
✅ **Verification Setup**: Ready to add your code

**You're 99% done! Just add the verification code and deploy!** 🚀
