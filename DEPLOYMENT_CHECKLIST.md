# 🚀 Deployment Checklist - Legend Physiotherapy

## Pre-Deployment Checklist

### ✅ Code Changes Complete
- [x] Updated sitemap.ts with real domain
- [x] Updated robots.txt with real domain
- [x] Updated layout.tsx metadata
- [x] Updated schema.org structured data
- [x] Built project successfully
- [ ] Add Google verification code (after getting from Google)

---

## 📤 Deployment Steps

### Step 1: Commit and Push
```bash
# Check what files changed
git status

# Add all changes
git add .

# Commit with message
git commit -m "Update domain to www.legendphysiotherapy.com and optimize SEO"

# Push to GitHub
git push origin main
```

### Step 2: Verify Vercel Deployment
1. Go to your Vercel dashboard
2. Wait for deployment to complete (1-2 minutes)
3. Check deployment status shows "Ready"

### Step 3: Test Your Domain
Visit these URLs to verify everything works:

- [ ] https://www.legendphysiotherapy.com (Homepage loads)
- [ ] https://www.legendphysiotherapy.com/sitemap.xml (Sitemap shows)
- [ ] https://www.legendphysiotherapy.com/robots.txt (Robots.txt shows)
- [ ] https://www.legendphysiotherapy.com/about (About page loads)
- [ ] https://www.legendphysiotherapy.com/locations/lb-nagar (Location page loads)

---

## 🔍 Google Search Console Setup

### Step 1: Add Property
- [ ] Go to https://search.google.com/search-console
- [ ] Click "Add Property"
- [ ] Enter: `https://www.legendphysiotherapy.com`
- [ ] Click "Continue"

### Step 2: Verify Ownership
- [ ] Choose "HTML tag" method
- [ ] Copy the verification code (looks like: `ABC123XYZ...`)
- [ ] Open `src/app/layout.tsx`
- [ ] Find line 157: `google: 'your-google-verification-code'`
- [ ] Replace with your actual code
- [ ] Save file
- [ ] Commit and push:
  ```bash
  git add src/app/layout.tsx
  git commit -m "Add Google Search Console verification"
  git push
  ```
- [ ] Wait for Vercel deployment (1-2 minutes)
- [ ] Click "Verify" in Google Search Console
- [ ] ✅ Verification successful!

### Step 3: Submit Sitemap
- [ ] In Google Search Console, click "Sitemaps" (left sidebar)
- [ ] Enter: `sitemap.xml`
- [ ] Click "Submit"
- [ ] ✅ Sitemap submitted!

### Step 4: Request Indexing (Priority Pages)
Request indexing for these pages in order:

1. [ ] `https://www.legendphysiotherapy.com` (Homepage)
2. [ ] `https://www.legendphysiotherapy.com/locations/lb-nagar` (Main clinic)
3. [ ] `https://www.legendphysiotherapy.com/book-appointment` (Conversion page)
4. [ ] `https://www.legendphysiotherapy.com/contact` (Contact page)
5. [ ] `https://www.legendphysiotherapy.com/locations/dilsukhnagar`
6. [ ] `https://www.legendphysiotherapy.com/locations/kothapet`
7. [ ] `https://www.legendphysiotherapy.com/blog/back-pain-relief`
8. [ ] `https://www.legendphysiotherapy.com/blog/knee-pain-management`
9. [ ] `https://www.legendphysiotherapy.com/about`
10. [ ] `https://www.legendphysiotherapy.com/locations`

**How to request indexing:**
1. Click "URL Inspection" in left sidebar
2. Paste the URL
3. Click "Request Indexing"
4. Wait for confirmation
5. Repeat for next URL

---

## 📊 Post-Deployment Monitoring

### Day 1 (Today)
- [ ] Verify all pages load correctly
- [ ] Check sitemap.xml is accessible
- [ ] Check robots.txt is accessible
- [ ] Submit to Google Search Console
- [ ] Request indexing for top 10 pages

### Day 2-3
- [ ] Check Google Search Console for any errors
- [ ] Verify sitemap was processed
- [ ] Check "Coverage" report

### Week 1
- [ ] Monitor indexing progress in "Coverage" report
- [ ] Fix any crawl errors that appear
- [ ] Check mobile usability report
- [ ] Verify structured data is working

### Week 2-4
- [ ] Check "Performance" report for impressions
- [ ] Monitor which pages are getting indexed
- [ ] Track keyword rankings
- [ ] Review Core Web Vitals

---

## 🎯 Additional SEO Tasks

### Immediate (This Week)
- [ ] Create Google Business Profile for LB Nagar clinic
- [ ] Verify Google Business Profile
- [ ] Add photos to Google Business Profile
- [ ] Submit to Bing Webmaster Tools
- [ ] Submit to Yandex Webmaster

### Short-term (This Month)
- [ ] Get listed in local directories (Justdial, Sulekha, etc.)
- [ ] Create social media profiles (if not done)
- [ ] Share blog posts on social media
- [ ] Encourage patient reviews on Google
- [ ] Build backlinks from health websites

### Long-term (Ongoing)
- [ ] Publish new blog posts regularly (1-2 per month)
- [ ] Update existing content
- [ ] Monitor and respond to reviews
- [ ] Track keyword rankings
- [ ] Analyze competitor SEO strategies

---

## 🛠️ Troubleshooting

### Sitemap Not Found
**Problem:** https://www.legendphysiotherapy.com/sitemap.xml shows 404

**Solution:**
1. Check Vercel deployment completed successfully
2. Clear browser cache
3. Wait 5-10 minutes after deployment
4. Check build logs in Vercel dashboard

### Verification Failed
**Problem:** Google says verification failed

**Solution:**
1. Double-check the verification code is correct
2. Ensure code is in `src/app/layout.tsx` line 157
3. Verify deployment completed
4. Clear cache and try again
5. Try alternative verification method (HTML file upload)

### Pages Not Indexing
**Problem:** Pages not showing in Google after 1 week

**Solution:**
1. Check "Coverage" report for errors
2. Verify robots.txt isn't blocking pages
3. Check pages have unique, quality content
4. Request indexing again
5. Check for technical errors (broken links, slow loading)

### Domain Not Working
**Problem:** www.legendphysiotherapy.com not loading

**Solution:**
1. Check domain DNS settings in your domain registrar
2. Verify domain is connected in Vercel settings
3. Check SSL certificate is active
4. Wait for DNS propagation (up to 48 hours)

---

## 📞 Support Resources

- **Google Search Console Help:** https://support.google.com/webmasters
- **Vercel Documentation:** https://vercel.com/docs
- **Next.js SEO Guide:** https://nextjs.org/learn/seo/introduction-to-seo

---

## ✅ Final Checklist

Before you consider this complete:

- [ ] Code deployed to production
- [ ] Domain working correctly
- [ ] Sitemap accessible
- [ ] Robots.txt accessible
- [ ] Google Search Console verified
- [ ] Sitemap submitted to Google
- [ ] Top 10 pages requested for indexing
- [ ] No errors in Google Search Console

---

## 🎉 Success Criteria

You'll know everything is working when:

✅ Google Search Console shows "Verified"
✅ Sitemap shows "Success" status
✅ Coverage report shows pages being indexed
✅ No errors in Coverage report
✅ Pages start appearing in Google search (3-7 days)

---

**Current Status:** Ready for deployment
**Next Action:** Deploy to production and add to Google Search Console

Good luck! 🚀
