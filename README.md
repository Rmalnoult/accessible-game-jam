# Accessible Game Jam

A web-based single-player mini-game where users earn points by fixing accessibility errors on a fictitious user interface. Built with Nuxt 3, Vue 3, and Tailwind CSS.

## 🎮 Overview

Accessible Game Jam gamifies web accessibility knowledge, allowing players to identify and correct common accessibility issues in a fun, interactive way. The app educates users on the European accessibility standards (WCAG 2.1 AA) set to be enforced by 2025.

## ✨ Features

- **5 Accessibility Challenges**: Fix common issues including:
  - Missing alt text on images
  - Low color contrast text
  - Form inputs without labels
  - Non-descriptive link text ("click here")
  - Non-semantic interactive elements

- **Educational Quiz System**: Multiple-choice questions with instant feedback
- **Real-time Scoring**: Track your progress with live score updates
- **Comprehensive Results**: Detailed recap of all issues with solutions
- **Mobile-First Design**: Fully responsive, optimized for all screen sizes
- **Accessible UI**: Built with accessibility best practices using Radix Vue components

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:3000`

## 🛠️ Tech Stack

- **Framework**: Nuxt 3
- **UI Library**: Vue 3 with Composition API
- **Styling**: Tailwind CSS
- **Components**: Radix Vue (accessible headless UI components)
- **Type Safety**: TypeScript
- **State Management**: Vue Composables

## 📁 Project Structure

```
accessibile-game-jam/
├── assets/
│   └── css/
│       └── tailwind.css          # Global styles and Tailwind config
├── components/
│   ├── ui/
│   │   ├── Button.vue            # Reusable button component
│   │   └── Dialog.vue            # Modal dialog component
│   ├── GameScreen.vue            # Main game interface
│   ├── MockInterface.vue         # Page with intentional accessibility errors
│   └── ResultsScreen.vue         # Game completion summary
├── composables/
│   └── useGameData.ts            # Game state management
├── pages/
│   └── index.vue                 # Main app entry point
├── public/                       # Static assets
├── utils/
│   └── cn.ts                     # Utility functions
├── nuxt.config.ts                # Nuxt configuration
├── tailwind.config.ts            # Tailwind configuration
└── package.json                  # Dependencies
```

## 🎯 Game Flow

1. **Home Screen**: Welcome message with "Start Game" and "How to Play" buttons
2. **Game Interface**: Interactive mock webpage with 5 accessibility issues
3. **Issue Detection**: Click on problematic elements to identify issues
4. **Quiz Dialogs**: Answer multiple-choice questions to fix each issue
5. **Results Screen**: View your score and learn from detailed explanations

## 🧪 Testing

The application has been thoroughly tested using Playwright MCP for:

- ✅ Navigation flow (home → game → results)
- ✅ Game mechanics (all 5 issues can be found and fixed)
- ✅ Score tracking and display
- ✅ Dialog interactions
- ✅ Responsive design
- ✅ Accessibility compliance of the app itself

## 🎨 Accessibility Features

The app itself demonstrates excellent accessibility:

- Proper semantic HTML
- Keyboard navigation support
- Focus indicators on all interactive elements
- ARIA labels where needed
- Sufficient color contrast (4.5:1 minimum)
- Screen reader compatible
- Responsive text sizing

## 📚 Learning Outcomes

Players will learn about:

- **Alternative Text**: Why images need descriptive alt attributes
- **Color Contrast**: WCAG requirements for text visibility (4.5:1 ratio)
- **Form Labels**: Importance of visible labels for form inputs
- **Link Context**: Using descriptive link text instead of "click here"
- **Semantic HTML**: Using proper button elements for interactivity

## 🌍 Standards Compliance

Based on:
- **WCAG 2.1 Level AA** guidelines
- **European Accessibility Act** requirements (effective 2025)
- **EN 301 549** standards

## 🔧 Configuration

### Tailwind CSS

The project uses a custom Tailwind configuration with CSS variables for theming. Colors can be customized in `assets/css/tailwind.css`.

### Nuxt Config

Key configurations in `nuxt.config.ts`:
- Tailwind CSS module
- Color mode support
- Component auto-import
- Meta tags for SEO

## 📝 Development Notes

### Component Architecture

- **Composables** for shared state management
- **Props and Events** for component communication
- **Scoped slots** for flexible content
- **TypeScript** for type safety

### State Management

The `useGameData` composable manages:
- Current score
- Fixed issues tracking
- Game completion status
- Issue definitions

### Styling Approach

- **Mobile-first** responsive design
- **Utility-first** with Tailwind CSS
- **Component variants** using class-variance-authority
- **Dark mode** support (via color-mode module)

## 🐛 Known Issues

- Minor hydration warnings in development (cosmetic, doesn't affect functionality)
- Dialog components show SSR/CSR mismatch warnings (Radix Vue limitation)

## 🚀 Deployment

The app can be deployed to any static hosting service:

```bash
# Generate static site
npm run generate

# The .output/public directory can be deployed to:
# - Vercel
# - Netlify
# - GitHub Pages
# - Any static hosting service
```

## 📄 License

This project was created as an educational tool to promote web accessibility awareness.

## 🙏 Acknowledgments

- Built with [Nuxt 3](https://nuxt.com/)
- UI components from [Radix Vue](https://www.radix-vue.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Accessibility guidelines from [W3C WCAG](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Built with ❤️ to make the web more accessible for everyone**
