# Ketan Choyal's Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring an iOS-inspired design system and focusing on Fullstack development showcase, I use Flutter as front end and AWS with Typescript and Node.js as backend with framework like serverless.

## Tech Stack

- **Framework**: Next.js 15.2.2
- **Package Manager**: npm
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel (recommended)
- **Charting**: Recharts
- **GitHub**: Next.js GitHub API
- **WakaTime**: WakaTime API

## Features

- Mobile-first responsive design
- iOS-inspired design system
- Dark/light mode with system preference detection
- Interactive project showcases
- Development activity visualization
- Smooth animations and transitions

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
portfolio-website/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Next.js pages
│   ├── styles/        # Global styles
│   ├── data/         # Data files for projects
│   ├── utils/        # Utility functions (do not modify)
│   └── lib/          # Shared libraries
└── public/
│   ├── images/       # Static images
│   └── icons/        # Icons
└── package.json
```

## Design System

The website follows an iOS-inspired design system with:

- **Colors**: System-standard iOS colors
  - Primary Blue: #007AFF (light) / #0A84FF (dark)
  - Text: #1C1C1E (light) / white (dark)
  - Secondary Text: #8E8E93 (light) / #98989D (dark)

- **Typography**: Inter font family
  - Headers: text-3xl font-bold
  - Subheaders: text-xl font-semibold
  - Body: text-sm

- **Components**: Modern, iOS-style UI elements
  - Rounded corners (rounded-2xl)
  - Subtle shadows
  - Smooth hover states
  - Native-feeling animations

## Development

To add new features or make changes:

1. Create a new branch
2. Make your changes
3. Test locally
4. Deploy to your preferred platform (Vercel recommended)

## License

MIT
