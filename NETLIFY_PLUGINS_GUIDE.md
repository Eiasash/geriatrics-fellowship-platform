# 📚 Netlify Plugins Usage Guide

## 🚀 Installed Plugins & How to Use Them

### 1. 🏎️ **Lighthouse Plugin** - Performance Monitoring

**What it does:**
- Runs Google Lighthouse tests on every deploy
- Checks performance, accessibility, SEO, and best practices
- Fails deployment if scores drop below thresholds

**How to view results:**
1. Go to your Netlify dashboard
2. Click on any deploy
3. Look for "Plugin: Lighthouse" in the deploy log
4. Click "View full report" link

**Current thresholds:**
- Performance: 80%
- Accessibility: 90% (critical for medical apps)
- Best Practices: 80%
- SEO: 80%

**What to look for:**
```
✅ Good scores:
- Performance: 80-100
- Accessibility: 90-100
- First Contentful Paint: <2s
- Time to Interactive: <3s

⚠️ Warning signs:
- Performance below 80
- Accessibility below 90
- Large JavaScript bundles
- Missing alt text on images
```

**How to improve scores:**
- Optimize images (use WebP format)
- Minimize JavaScript
- Add alt text to all images
- Ensure proper heading hierarchy
- Use semantic HTML

---

### 2. 🗺️ **Sitemap Plugin** - SEO Enhancement

**What it does:**
- Automatically generates sitemap.xml
- Updates on every deploy
- Helps search engines index your site

**How to verify it's working:**
1. Visit: https://geriatrics-study.netlify.app/sitemap.xml
2. You should see XML with all your pages listed

**How to submit to Google:**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property: `geriatrics-study.netlify.app`
3. Go to "Sitemaps" in sidebar
4. Submit: `https://geriatrics-study.netlify.app/sitemap.xml`

**Expected sitemap content:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://geriatrics-study.netlify.app/</loc>
    <lastmod>2024-08-30</lastmod>
  </url>
  <url>
    <loc>https://geriatrics-study.netlify.app/patient-dashboard.html</loc>
    <lastmod>2024-08-30</lastmod>
  </url>
  <!-- All other pages... -->
</urlset>
```

---

### 3. 🔗 **Checklinks Plugin** - Broken Link Detection

**What it does:**
- Scans all internal links
- Reports broken links
- Prevents 404 errors

**How to view results:**
1. Check deploy logs in Netlify dashboard
2. Look for "Plugin: checklinks" section
3. Review any reported issues

**Common issues it finds:**
```
❌ Broken links:
- Missing pages (404)
- Incorrect file paths
- Typos in URLs

✅ What it ignores:
- External links (by default)
- Anchor links (#)
- mailto: and tel: links
```

**How to fix issues:**
1. Check the deploy log for specific broken links
2. Update the HTML files with correct paths
3. Redeploy to verify fixes

---

## 📊 **Monitoring Dashboard**

### Weekly Checks:
1. **Lighthouse Scores**
   - Review performance trends
   - Check accessibility remains >90%
   - Monitor load times

2. **Broken Links**
   - Check deploy logs for new issues
   - Fix any 404s immediately

3. **Sitemap**
   - Verify all new pages are included
   - Check Google Search Console for indexing

### Monthly Review:
1. **Performance Optimization**
   - Review Lighthouse suggestions
   - Implement recommended improvements
   - Test on slow 3G connection

2. **SEO Health**
   - Check search console for errors
   - Review meta descriptions
   - Update sitemap if needed

---

## 🛠️ **Quick Commands**

### Deploy with plugin checks:
```bash
cd Desktop/geriatrics-fellowship-deploy
git add .
git commit -m "Update with plugin checks"
npx netlify deploy --prod
```

### View plugin results:
1. **Lighthouse:** Check deploy logs → Plugin section
2. **Sitemap:** Visit `/sitemap.xml`
3. **Checklinks:** Review deploy logs for warnings

---

## 🎯 **Best Practices**

1. **Before Each Deploy:**
   - Run local tests if possible
   - Check for console errors
   - Verify all links work

2. **After Deploy:**
   - Check Lighthouse scores
   - Review plugin outputs
   - Test critical user paths

3. **Weekly:**
   - Monitor performance trends
   - Fix any accessibility issues
   - Update broken links

---

## 📈 **Target Metrics**

For a medical platform, aim for:
- **Performance:** >85 (fast emergency access)
- **Accessibility:** >95 (inclusive for all users)
- **Best Practices:** >90 (security & standards)
- **SEO:** >85 (findable by medical professionals)
- **Zero broken links** (reliability is critical)

---

## 🆘 **Troubleshooting**

### Plugin not running?
1. Check Netlify dashboard → Site settings → Build & deploy → Build settings
2. Verify plugins are enabled
3. Check netlify.toml configuration

### Low Lighthouse scores?
1. Review detailed report in deploy log
2. Focus on largest contentful paint (LCP)
3. Optimize images and JavaScript

### Sitemap not updating?
1. Clear cache and redeploy
2. Check exclude patterns in config
3. Verify all HTML files are in root

### Too many broken links reported?
1. Update skipPatterns in config
2. Fix internal links first
3. Consider adding redirects

---

## 📞 **Support Resources**

- **Netlify Forums:** https://answers.netlify.com/
- **Lighthouse Docs:** https://developers.google.com/web/tools/lighthouse
- **Plugin Issues:** Check individual plugin repos on GitHub

---

Remember: These plugins help maintain a high-quality, accessible, and performant medical platform that doctors can rely on 24/7! 🏥