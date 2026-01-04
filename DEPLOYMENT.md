# Production Deployment Guide

## Prerequisites
- Node.js >= 20.0.0
- npm >= 10.0.0

## Build & Test Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for type errors
npm run check
```

## Security Checklist ✅

- [x] Content Security Policy (CSP) configured
- [x] HTTPS enforced (Strict-Transport-Security)
- [x] X-Frame-Options: SAMEORIGIN
- [x] X-Content-Type-Options: nosniff
- [x] X-XSS-Protection enabled
- [x] Referrer-Policy configured
- [x] Permissions-Policy set
- [x] security.txt file added
- [x] No sensitive data in frontend
- [x] Environment variables template (.env.example)

## SEO Checklist ✅

- [x] Comprehensive meta tags (Open Graph, Twitter Cards)
- [x] Structured data (JSON-LD Schema.org)
- [x] robots.txt configured
- [x] sitemap.xml generated
- [x] Canonical URLs set
- [x] Meta descriptions optimized
- [x] Semantic HTML5 markup
- [x] Accessible navigation with ARIA labels
- [x] 404 error page
- [x] humans.txt file

## Performance Checklist ✅

- [x] Font preloading with display=swap
- [x] DNS prefetch for external resources
- [x] Image optimization ready
- [x] CSS/JS minification
- [x] GZIP compression enabled
- [x] Browser caching configured
- [x] Lazy loading for images
- [x] Core Web Vitals monitoring
- [x] Code splitting
- [x] Asset versioning

## Accessibility Checklist ✅

- [x] Skip to main content link
- [x] Semantic HTML elements
- [x] ARIA landmarks and labels
- [x] Keyboard navigation
- [x] Focus indicators
- [x] Color contrast ratios
- [x] Alt text for images
- [x] NoScript fallback
- [x] Reduced motion support

## Deployment Options

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Or use vercel.json configuration (already included)
```

### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod

# Or use netlify.toml configuration (already included)
```

### GitHub Pages
```bash
# Update astro.config.mjs with your repo name
site: 'https://username.github.io'
base: '/repo-name'

# Enable GitHub Actions workflow (already included)
# Push to main/master branch
```

## Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

## Post-Deployment

1. **Test the deployed site:**
   - Check all pages load correctly
   - Test navigation and links
   - Verify mobile responsiveness
   - Test form submissions (if any)

2. **SEO Tools:**
   - Submit sitemap to Google Search Console
   - Verify site in Bing Webmaster Tools
   - Check structured data with Google Rich Results Test
   - Run Lighthouse audit

3. **Monitor Performance:**
   - Set up analytics (GA4 if needed)
   - Monitor Core Web Vitals
   - Check error logs regularly

4. **Update DNS:**
   - Point your domain to deployment platform
   - Configure SSL/TLS certificate
   - Set up CDN if needed

## Monitoring & Analytics

Add your tracking IDs to `.env`:
- Google Analytics
- Google Tag Manager
- Error tracking (Sentry, etc.)

## Maintenance

- Update dependencies regularly: `npm update`
- Monitor security advisories: `npm audit`
- Keep content fresh (projects, experience, skills)
- Check broken links monthly
- Backup configuration files

## Troubleshooting

**Build fails:**
```bash
npm run clean
npm install
npm run build
```

**Type errors:**
```bash
npm run check
```

**Preview not working:**
```bash
npm run build
npm run preview
```

## Support

- Documentation: [Astro Docs](https://docs.astro.build)
- Issues: Create an issue in your repository
- Email: sarvagya653@gmail.com

## License

MIT License - See LICENSE.md
