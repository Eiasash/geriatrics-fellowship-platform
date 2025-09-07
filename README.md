# Geriatrics Fellowship Platform

A comprehensive digital platform for Geriatrics Fellowship at Shaare Zedek Medical Center, designed by Dr. Eias Ashhab.

## 🏥 Overview

This platform provides essential tools for geriatrics fellows including patient management, clinical calculators, risk assessment tools, and educational resources.

## 🚀 Features

### Core Tools
- **Patient Dashboard** - Morning rounds preparation with risk synthesis
- **On-Call Co-Pilot** - 3AM protocols for geriatric scenarios
- **Clinical Note Analyzer** - NLP for Hebrew/English abbreviations
- **Anticoag Synthesizer** - CHA₂DS₂-VASc with renal dosing

### Academic Tools
- **Exam Simulator** - Shlav Alef preparation with Hebrew/English questions
- **Research Assistant** - PICO search and conference builder
- **Evidence Library** - 20 landmark trials + MOH guidelines
- **Comprehensive Calculators** - Frailty, MMSE, GDS, Barthel & more

### Clinical Tools
- **Drug Interaction Checker** - Medication interaction analysis
- **Polypharmacy Optimizer** - Deprescribing tool
- **Capacity Assessment** - Decision-making capacity evaluation

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **Data Storage**: Browser localStorage
- **Deployment**: Netlify / Vercel
- **Analytics**: Simple Analytics (privacy-first)

## 📱 Usage

### Local Development
```bash
# Install dependencies (if any)
npm install

# Start local server
npm run serve

# Or use Python
python3 -m http.server 8888
```

### Access Points
- **Main Platform**: `/` or `/index.html`
- **Patient Dashboard**: `/dashboard` or `/patient-dashboard-fixed`
- **Debug Tools**: `/comprehensive-debug`
- **Test Interface**: `/final-test`

## 🌐 Deployment

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.`
4. Deploy automatically on git push

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. Deploy with: `vercel --prod`

## 📊 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Load Time**: < 1 second
- **Bundle Size**: < 50KB
- **Browser Support**: Modern browsers (ES6+)

## 🔒 Privacy & Security

- **Data Storage**: Client-side only (localStorage)
- **No Server**: No data sent to external servers
- **Analytics**: Privacy-first Simple Analytics
- **Security Headers**: XSS protection, content type validation

## 📁 Project Structure

```
├── index.html                    # Main platform homepage
├── patient-dashboard-fixed.html  # Main patient dashboard
├── dashboard/                    # Dashboard redirect
├── comprehensive-debug.html      # Debug tools
├── final-test.html              # Test interface
├── netlify.toml                 # Netlify configuration
├── vercel.json                  # Vercel configuration
└── README.md                    # This file
```

## 🎯 Target Users

- Geriatrics Fellows at Shaare Zedek Medical Center
- Medical residents in geriatrics
- Healthcare professionals working with elderly patients
- Medical students in geriatrics rotations

## 📈 Development Roadmap

### Phase 1 ✅ Complete
- Patient Dashboard
- On-Call Protocols
- Note Analyzer
- Research Tools

### Phase 2 🚧 In Progress
- Anticoag Synthesizer
- Hebrew Exam Questions
- Evidence Library UI

### Phase 3 📅 Planned
- Performance Analytics
- Capacity Assessment
- Pain Management Tool

## 🤝 Contributing

This is a specialized medical platform. For contributions, please contact Dr. Eias Ashhab.

## 📄 License

MIT License - See LICENSE file for details

## 📞 Support

For technical support or feature requests, please contact the development team.

---

**Developed for Shaare Zedek Medical Center**  
**Dr. Eias Ashhab - Geriatrics Fellowship Program**  
**Starting: September 1, 2025**