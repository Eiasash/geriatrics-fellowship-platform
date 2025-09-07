# 🚀 Deployment Guide - Geriatrics Fellowship Platform

This guide covers deploying the Geriatrics Fellowship Platform to both Netlify and Vercel.

## 📋 Prerequisites

### For Netlify Deployment
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login
```

### For Vercel Deployment
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login
```

## 🌐 Option 1: Netlify Deployment

### Method A: Using Netlify CLI
```bash
# Deploy to production
./deploy.sh netlify

# Deploy preview
./deploy.sh netlify preview

# Or use npm scripts
npm run deploy:netlify
npm run deploy:netlify:preview
```

### Method B: Using Netlify Web Interface
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.`
5. Click "Deploy site"

### Method C: Drag & Drop
1. Zip the entire project folder
2. Go to [netlify.com/drop](https://netlify.com/drop)
3. Drag and drop the zip file
4. Your site will be live instantly!

## ⚡ Option 2: Vercel Deployment

### Method A: Using Vercel CLI
```bash
# Deploy to production
./deploy.sh vercel

# Deploy preview
./deploy.sh vercel preview

# Or use npm scripts
npm run deploy:vercel
npm run deploy:vercel:preview
```

### Method B: Using Vercel Web Interface
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect the settings
5. Click "Deploy"

## 🔧 Configuration Files

### Netlify Configuration (`netlify.toml`)
- ✅ Already configured with security headers
- ✅ Redirects for medical terms
- ✅ Performance optimizations
- ✅ Lighthouse CI integration

### Vercel Configuration (`vercel.json`)
- ✅ Static site configuration
- ✅ Custom routing for dashboard
- ✅ Security headers
- ✅ Cache optimization

## 📊 Performance Optimizations

Both platforms include:
- **Security Headers**: XSS protection, content type validation
- **Cache Control**: Optimized caching for static assets
- **Compression**: Automatic gzip compression
- **CDN**: Global content delivery network
- **HTTPS**: Automatic SSL certificates

## 🔗 Custom Domains

### Netlify
1. Go to Site Settings → Domain Management
2. Add your custom domain
3. Update DNS records as instructed
4. Enable HTTPS

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. HTTPS is automatic

## 📱 Mobile Optimization

The platform is fully responsive and includes:
- Mobile-first design
- Touch-friendly interfaces
- Optimized for tablets and phones
- Offline functionality (PWA ready)

## 🔒 Security Features

- **XSS Protection**: Prevents cross-site scripting
- **Content Security Policy**: Restricts resource loading
- **HTTPS Only**: Secure data transmission
- **No Server**: Client-side only, no data breaches possible

## 📈 Analytics & Monitoring

### Built-in Analytics
- Simple Analytics (privacy-first)
- No personal data collection
- GDPR compliant

### Performance Monitoring
- Lighthouse CI integration (Netlify)
- Core Web Vitals tracking
- Real-time performance metrics

## 🛠️ Development Workflow

### Local Development
```bash
# Start local server
npm run dev
# or
python3 -m http.server 3000
```

### Testing
```bash
# Test all functionality
open http://localhost:3000/final-test
```

### Deployment
```bash
# Deploy to production
./deploy.sh netlify
# or
./deploy.sh vercel
```

## 🚨 Troubleshooting

### Common Issues

#### Netlify
- **Build fails**: Check `netlify.toml` configuration
- **Redirects not working**: Verify redirect rules
- **Assets not loading**: Check file paths

#### Vercel
- **Routing issues**: Check `vercel.json` routes
- **Build errors**: Verify project structure
- **Performance**: Check cache headers

### Debug Commands
```bash
# Check Netlify status
netlify status

# Check Vercel status
vercel whoami

# Test locally
npm run dev
```

## 📞 Support

### Platform Support
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)

### Project Support
- Check `/comprehensive-debug` for diagnostics
- Review console logs for errors
- Test with `/final-test` interface

## 🎯 Recommended Deployment

For the Geriatrics Fellowship Platform, we recommend:

1. **Primary**: Netlify (better for static sites)
2. **Backup**: Vercel (excellent performance)
3. **Custom Domain**: `geriatrics.shaarezedek.org.il`

### Quick Start
```bash
# Clone and deploy in 3 commands
git clone <your-repo>
cd geriatrics-fellowship-platform
./deploy.sh netlify
```

Your platform will be live in under 2 minutes! 🚀

---

**Ready to deploy? Choose your platform and run the deployment script!**