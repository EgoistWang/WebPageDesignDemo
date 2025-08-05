# 🚀 Modern Portfolio Website

A cutting-edge personal portfolio built with **Astro**, **Tailwind CSS**, and **Node.js**, featuring 2025's latest design trends including glassmorphism, 3D effects, smooth animations, and responsive design.

## ✨ Features

### 🎨 Design & UI
- **Modern 2025 Design Trends**: Glassmorphism, 3D depth effects, gradient backgrounds
- **Dark/Light Mode Toggle**: Seamless theme switching with system preference detection
- **Responsive Design**: Mobile-first approach with perfect adaptation across all devices
- **Smooth Animations**: GSAP-powered scroll triggers and microinteractions
- **Interactive Elements**: Hover effects, floating animations, and engaging transitions

### 🧩 Sections
- **Hero Section**: Animated name/title with typewriter effects and background animations
- **Experience**: Interactive timeline with scroll-triggered animations
- **Projects**: Gallery with hover effects, filtering, and expandable modals
- **Resume**: PDF preview/download with professional styling
- **Contact**: Animated form with Node.js backend integration

### 🚀 Technical Features
- **Astro Framework**: Hybrid rendering for optimal performance
- **Tailwind CSS**: Utility-first styling with custom design system
- **GSAP Animations**: Professional scroll-based and component animations
- **Node.js Backend**: Contact form handling with email notifications
- **TypeScript Support**: Type-safe development experience
- **SEO Optimized**: Meta tags, structured data, and performance optimization

## 🛠 Tech Stack

### Frontend
- **Astro 4.0** - Modern static site generator with hybrid rendering
- **React 18** - For interactive components
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **GSAP 3.12** - Professional animation library

### Backend
- **Node.js** - Server-side JavaScript runtime
- **Express.js** - Web application framework
- **Nodemailer** - Email sending functionality
- **CORS** - Cross-origin resource sharing

### Development
- **Vite** - Fast build tool and dev server
- **PostCSS** - CSS transformation
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
Web_Design_Demo/
├── src/
│   ├── components/
│   │   ├── Navbar.astro          # Navigation with mobile menu
│   │   ├── Hero.astro            # Hero section with animations
│   │   ├── Experience.astro      # Timeline with GSAP triggers
│   │   ├── Projects.astro        # Project gallery with modals
│   │   ├── Resume.astro          # Resume preview/download
│   │   ├── Contact.astro         # Contact form with validation
│   │   └── ThemeToggle.tsx       # Dark/light mode toggle
│   ├── layouts/
│   │   └── Layout.astro          # Base layout with SEO
│   ├── pages/
│   │   ├── index.astro           # Main portfolio page
│   │   └── api/
│   │       └── contact.js        # Contact form API endpoint
│   ├── styles/
│   │   └── global.css            # Global styles and utilities
│   └── env.d.ts                  # Environment type definitions
├── server/
│   └── index.js                  # Express server for enhanced backend
├── public/
│   ├── favicon.svg               # Site favicon
│   └── resume.pdf                # Resume file (add your own)
├── package.json                  # Dependencies and scripts
├── astro.config.mjs              # Astro configuration
├── tailwind.config.mjs           # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── env.example                   # Environment variables template
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.0.0 or higher
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Web_Design_Demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example environment file
   cp env.example .env
   
   # Edit .env with your email configuration
   # For Gmail, you'll need to use App Passwords
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Optional: Start the backend server** (for enhanced contact form features)
   ```bash
   npm run server
   ```

Your portfolio will be available at `http://localhost:4321`

## 🔧 Configuration

### Email Setup (Contact Form)

1. **For Gmail:**
   - Enable 2-factor authentication
   - Generate an App Password: [Google App Passwords](https://support.google.com/accounts/answer/185833)
   - Add to your `.env` file:
     ```
     EMAIL_USER=your.email@gmail.com
     EMAIL_PASS=your-app-password
     ```

2. **For other email providers:**
   - Configure SMTP settings in `.env`:
     ```
     SMTP_HOST=smtp.your-provider.com
     SMTP_PORT=587
     SMTP_SECURE=true
     EMAIL_USER=your.email@example.com
     EMAIL_PASS=your-password
     ```

### Customization

#### Personal Information
Update the following files with your information:

1. **src/components/Hero.astro**
   - Name and title
   - Description
   - Social media links

2. **src/components/Experience.astro**
   - Work experience data
   - Skills and technologies

3. **src/components/Projects.astro**
   - Project details
   - GitHub and demo links

4. **src/components/Resume.astro**
   - Resume content
   - Contact information

5. **src/components/Contact.astro**
   - Contact details
   - Social media links

#### Design Customization

1. **Colors**: Edit `tailwind.config.mjs` for color scheme
2. **Fonts**: Modify font imports in `src/styles/global.css`
3. **Animations**: Adjust GSAP animations in component scripts
4. **Layout**: Modify section layouts and spacing

## 📱 Responsive Design

The portfolio is built with a mobile-first approach and includes:

- **Mobile**: Optimized for phones (320px+)
- **Tablet**: Responsive design for tablets (768px+)
- **Desktop**: Full desktop experience (1024px+)
- **Large Screens**: Enhanced for large displays (1280px+)

## 🎭 Animation Features

### GSAP Animations
- **Scroll Triggers**: Elements animate as they enter viewport
- **Timeline Animations**: Coordinated multi-element animations
- **Hover Effects**: Interactive microinteractions
- **Page Transitions**: Smooth section-to-section navigation

### CSS Animations
- **Floating Elements**: Subtle background animations
- **Loading States**: Animated form submissions
- **Hover Effects**: Transform and transition effects
- **Theme Transitions**: Smooth dark/light mode switching

## 🚢 Deployment

### Astro (Frontend)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel/Netlify**
   ```bash
   # For Vercel
   npm install -g vercel
   vercel

   # For Netlify
   npm install -g netlify-cli
   netlify deploy
   ```

### Node.js Backend

1. **Deploy to Railway/Heroku/DigitalOcean**
   ```bash
   # Railway
   npm install -g @railway/cli
   railway deploy

   # Heroku
   git add .
   git commit -m "Deploy"
   git push heroku main
   ```

2. **Environment Variables**
   Set the same variables from your `.env` file in your deployment platform

## 📊 Performance Optimization

- **Image Optimization**: Responsive images with proper loading
- **Code Splitting**: Automatic JavaScript bundling
- **CSS Purging**: Unused styles removed in production
- **Font Loading**: Optimized web font loading
- **Minification**: All assets minified for production

## 🐛 Troubleshooting

### Common Issues

1. **GSAP not loading properly**
   ```bash
   npm install gsap@3.12.2
   ```

2. **Email not sending**
   - Check your `.env` configuration
   - Verify Gmail App Password settings
   - Check server logs for detailed errors

3. **Build errors**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

4. **Styling issues**
   - Ensure Tailwind CSS is properly configured
   - Check for conflicting CSS imports

## 🔗 Links & Resources

- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GSAP Documentation](https://greensock.com/docs/)
- [Node.js Documentation](https://nodejs.org/en/docs/)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 👨‍💻 Author

**Your Name**
- Website: [your-portfolio-url]
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [@your-username](https://linkedin.com/in/your-username)

---

⭐️ If you like this project, please give it a star on GitHub!