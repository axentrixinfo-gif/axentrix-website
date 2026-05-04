# Axentrix Inc Website - Deployment Guide

## ✅ Build Complete - All Features Implemented

### What's Been Built:

1. **Environment Configuration**
   - `.env.local` - Contains your API keys (NOT committed to Git)
   - `.env.example` - Template for deployment

2. **Email System (Resend + Gemini AI)**
   - Contact form sends to `info@axentrixinc.com`
   - AI-generated acknowledgment emails via Gemini API
   - Beautiful HTML email templates with Axentrix branding

3. **AI Chatbot "Axie"**
   - Floating chat bubble on ALL pages
   - Powered by Gemini 1.5 Flash API
   - Quick reply buttons for common queries
   - Initial message: "Welcome to Axentrix Inc. I'm Axie. Ask me about our ERP and AI services!"

4. **Enhanced Contact Form**
   - Fields: Name, Email, Mobile, Address (optional), Service Interest, Message
   - Sends data to Resend API
   - Shows success message on submission

5. **Social Links Cleanup**
   - Removed fake LinkedIn/Facebook/Twitter links
   - Added "Coming Soon" placeholder page at `/social-coming-soon`

6. **Layout & Typography Fixes**
   - Fixed font system (Inter + system fonts)
   - Standardized spacing (py-16 md:py-24)
   - Slowed holographic animations (15s) for performance
   - Added mobile responsive breakpoints

7. **New Pages**
   - `/services/industry-solutions` - Industry solutions page
   - `/privacy-policy` - Privacy policy page
   - `/social-coming-soon` - Placeholder page
   - `/not-found` - Custom 404 page

8. **SEO & Meta Tags**
   - Added Open Graph tags in layout.tsx
   - Prepared for og-image.jpg

---

## 🚀 Testing Locally

### Step 1: Start Dev Server
```bash
cd "/Users/Ai Mark/axentrix-website"
npm run dev
```

### Step 2: Test These URLs
1. `http://localhost:3000` - Home page (check chatbot in bottom-right)
2. `http://localhost:3000/about` - About page
3. `http://localhost:3000/services` - Services
4. `http://localhost:3000/services/industry-solutions` - NEW
5. `http://localhost:3000/services/erp-consultancy` - ERP page
6. `http://localhost:3000/services/ai-consultancy` - AI page
7. `http://localhost:3000/contact` - Contact form (test submission)
8. `http://localhost:3000/privacy-policy` - NEW
9. `http://localhost:3000/social-coming-soon` - NEW

### Step 3: Test Features
- **Chatbot**: Click pink bubble → Should say "Welcome to Axentrix Inc. I'm Axie. Ask me about our ERP and AI services!"
- **Contact Form**: Fill all fields → Check info@axentrixinc.com inbox
- **Mobile**: Test responsive design

---

## 📦 Pushing to GitHub

### Step 1: Initialize Git (if not done)
```bash
cd "/Users/Ai Mark/axentrix-website"
git init
git add .
git commit -m "Initial commit: Axentrix Inc website with AI features"
```

### Step 2: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `axentrix-website`
3. Make it **public** (for free Vercel)
4. Don't initialize with README

### Step 3: Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/axentrix-website.git
git branch -M main
git push -u origin main
```

---

## 🌐 Deploying to Vercel

### Step 1: Connect to Vercel
1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Vercel auto-detects Next.js

### Step 2: Add Environment Variables
In Vercel dashboard → Settings → Environment Variables, add:
```
RESEND_API_KEY = (your_resend_api_key)
GEMINI_API_KEY = (your_gemini_api_key)
ADMIN_EMAIL = info@axentrixinc.com
NEXT_PUBLIC_SITE_URL = https://axentrixinc.com
```

**Get API keys:**
- Resend: https://resend.com/api-keys
- Gemini: https://ai.google.dev/

### Step 3: Deploy
- Click "Deploy"
- Wait ~2 minutes
- Your site is live at `https://axentrix-website.vercel.app`

---

## 🌍 Connecting GoDaddy Domain

### Step 1: Get Vercel Nameservers
In Vercel dashboard → Domains → Add Domain → `axentrixinc.com`

Vercel will show nameservers like:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

### Step 2: Update GoDaddy
1. Login to GoDaddy
2. My Products → Domains → DNS
3. Change Nameservers to Vercel's nameservers
4. Wait 24-48 hours for propagation

### Step 3: Verify in Vercel
- Vercel will show "Valid Configuration" when DNS propagates
- Your site is now live at `https://axentrixinc.com`

---

## 📧 Email Configuration

### Current Setup (Testing):
- Sending FROM: `onboarding@resend.dev`
- Sending TO: `info@axentrixinc.com` (Zoho Mail)

### Production Setup (After Domain Verification):
1. Login to Resend: https://resend.com
2. Verify domain: `axentrixinc.com`
3. Update `/api/contact/route.ts`:
   - Change `from: "Axentrix Website <onboarding@resend.dev>"` 
   - To: `from: "Axentrix Inc. <info@axentrixinc.com>"`

---

## 💰 Cost Breakdown

| Service | Cost |
|---------|------|
| **Gemini API** (Google AI Studio) | **FREE** (15 RPM) |
| **Resend** (3,000 emails/month) | **FREE** |
| **Zoho Mail** (info@axentrixinc.com) | **FREE** (already set up) |
| **Vercel Hosting** | **FREE** (hobby plan) |
| **Domain** (axentrixinc.com) | **~$15/year** (already have) |
| **TOTAL MONTHLY COST** | **$0/month** |

---

## 🔧 Troubleshooting

### Issue: Chatbot not responding
- Check browser console for errors
- Verify `GEMINI_API_KEY` is correct
- Check `/api/chat/route.ts` logs

### Issue: Emails not sending
- Verify `RESEND_API_KEY` is correct
- Check `info@axentrixinc.com` spam folder
- View logs in Vercel dashboard

### Issue: Build fails
```bash
rm -rf .next node_modules
npm install
npm run build
```

---

## 📝 Next Steps After Launch

1. **Verify domain** in Resend for professional emails
2. **Set up Google Analytics** (add GA4 tag)
3. **Create real social media accounts** (replace `/social-coming-soon`)
4. **Add more testimonials** (update `constants.ts`)
5. **SEO optimization** (submit sitemap to Google Search Console)

---

## 🎉 You're Ready to Launch!

All features are built and tested. Follow the steps above to go live!

For questions, contact: info@axentrixinc.com
