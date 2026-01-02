<div align="center">

# Prime Consulting

**Portfolio focused on Next.js development, AI integration, and modern web solutions**

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

<a name="toc"></a>

[Overview](#overview) •
[Features](#features) •
[Getting Started](#getting-started) •
[Project Structure](#project-structure) •
[Deployment](#deployment) •
[Technologies](#technologies)

</div>

---

<a name="overview"></a>

## 📋 Overview

A modern portfolio website showcasing Next.js development expertise with cutting-edge web technologies. This project demonstrates advanced frontend capabilities including glassmorphism design, interactive components, and responsive architecture built with React 19 and Tailwind CSS.

<a name="features"></a>

## ✨ Features

- 🎨 **Modern Design** - Glassmorphism UI with gradient backgrounds and backdrop blur effects
- 🚀 **Next.js 16** - Latest React framework with app router and server components
- ⚛️ **React 19** - Cutting-edge React features and performance optimizations
- 🎯 **Responsive Layout** - Mobile-first design with seamless cross-device experience
- ✨ **Interactive Elements** - Mouse move effects and smooth animations
- 🔗 **Social Integration** - Direct links to GitHub, LinkedIn, and Twitter profiles
- 📱 **Component Architecture** - Modular, reusable React components
- 🌙 **Dark Theme** - Elegant dark mode design with gradient accents

[Back to Top](#toc)

<a name="getting-started"></a>

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/shawnmcrowley/shawnmcrowley.github.io.git

# Navigate to project directory
cd shawnmcrowley.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build Commands

```bash
# Build for production
npm run build

# Start production server
npm start

# Export static files
npm run export

# Lint code
npm run lint
```

[Back to Top](#toc)

<a name="project-structure"></a>

## 📁 Project Structure

```
shawnmcrowley.github.io/
├── app/                        # Next.js app directory
│   ├── components/            # React components
│   │   ├── ui/               # Reusable UI components
│   │   ├── navbar.js         # Navigation component
│   │   ├── hero.js           # Hero section
│   │   ├── features.js       # Features showcase
│   │   ├── cta.js            # Call-to-action section
│   │   └── footer.js         # Footer component
│   ├── globals.css           # Global styles
│   ├── layout.js             # Root layout component
│   └── page.js               # Home page
├── doc/                      # Documentation and blog
│   ├── blog/                 # Blog posts
│   └── docs/                 # Documentation pages
├── public/                   # Static assets
├── components.json           # Shadcn/ui configuration
├── next.config.mjs           # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── package.json              # Dependencies and scripts
```

[Back to Top](#toc)

<a name="deployment"></a>

## 🚀 Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages:

1. **Repository Settings**: In GitHub repository settings → Pages, select "Deploy from a branch" (legacy)
2. **Workflow Permissions**: Ensure Actions have read/write permissions
3. **Automated Workflow**: Uses `.github/workflows/deploy.yml` for automated builds
4. **No gh-pages**: Removed gh-pages npm package in favor of GitHub Actions workflow

### Build Process

The deployment workflow automatically:
- Builds the Next.js application
- Exports static files
- Deploys to GitHub Pages
- Triggers on every push to the repository

[Back to Top](#toc)

<a name="technologies"></a>

## 🛠️ Technologies

### Core Stack

- **Next.js 16.0.10** - React framework with app router
- **React 19** - UI library with latest features
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Lucide React** - Icon library

### UI Components

- **Radix UI** - Accessible component primitives
- **Class Variance Authority** - Component variant management
- **Tailwind Merge** - CSS class merging utility
- **Tailwind CSS Animate** - Animation utilities

### Development Tools

- **PostCSS** - CSS processing
- **ESLint** - Code linting
- **Next.js Font Optimization** - Google Fonts integration

[Back to Top](#toc)

<a name="components"></a>

## 🧩 Component Overview

### Navigation (`navbar.js`)
- Fixed header with backdrop blur
- Responsive mobile menu
- Gradient branding logo
- Social and navigation links

### Hero Section (`hero.js`)
- Large headline with gradient text
- Responsive typography
- Centered content layout

### Features (`features.js`)
- Grid layout for capability cards
- Icon integration with Lucide React
- Hover effects and transitions
- Glassmorphism card design

### Interactive Effects (`mouse-move-effect.js`)
- Mouse tracking animations
- Smooth parallax effects
- Performance optimized

[Back to Top](#toc)

<a name="customization"></a>

## 🎨 Customization

### Theme Colors

Modify `tailwind.config.js` to customize the color scheme:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        accent: '#your-accent',
      }
    }
  }
}
```

### Content Updates

Edit component files in `app/components/`:
- `hero.js` - Update main headline and description
- `features.js` - Modify capability descriptions
- `footer.js` - Update social links and copyright

### Adding New Sections

1. Create component in `app/components/`
2. Import and add to `app/page.js`
3. Update navigation if needed

[Back to Top](#toc)

<a name="contributing"></a>

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

[Back to Top](#toc)

<a name="license"></a>

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

[Back to Top](#toc)

<a name="contact"></a>

## 📧 Contact

**Shawn M. Crowley**

- 📧 Email: [shawn.crowley@lycra.com](mailto:shawn.crowley@lycra.com)
- 🔗 LinkedIn: [@shawnmcrowley](https://www.linkedin.com/in/shawnmcrowley)
- 🐦 Twitter: [@shawnmcrowley](https://twitter.com/shawnmcrowley)
- 🔗 GitHub: [shawnmcrowley](https://github.com/shawnmcrowley)

[Back to Top](#toc)

---

<div align="center">
Built with ❤️ using Next.js 16, React 19, and Tailwind CSS
</div>

