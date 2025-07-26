# SkLoftLife Villas - Multilingual Marketing Site

A production-ready, multilingual marketing website for luxury villas built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.

## 🌟 Features

- **🌍 Multilingual Support**: EN (default), TR, RU with next-intl
- **📱 Mobile-First Design**: Responsive layout with Tailwind CSS
- **🎨 Modern UI**: shadcn/ui components with custom branding
- **⚡ Performance Optimized**: Static generation, image optimization
- **🎯 SEO Ready**: Structured metadata and schema.org markup
- **♿ Accessible**: ARIA labels and keyboard navigation
- **🔧 Developer Experience**: TypeScript, ESLint, Hot reload

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Variables
- **Components**: shadcn/ui
- **Internationalization**: next-intl
- **Animations**: Framer Motion
- **3D Graphics**: @react-three/fiber + drei
- **Form Handling**: React Hook Form + Zod
- **Package Manager**: npm

## 📂 Project Structure

```
skloftlife-villas/
├── src/
│   ├── app/
│   │   ├── [locale]/           # Internationalized routes
│   │   │   ├── layout.tsx      # Root layout with i18n
│   │   │   ├── page.tsx        # Home page
│   │   │   ├── about/          # About page
│   │   │   ├── villas/         # Villa plans
│   │   │   ├── gallery/        # Image gallery
│   │   │   ├── live/           # Live camera
│   │   │   └── contact/        # Contact form
│   │   ├── api/                # API routes
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── navigation/         # Header & language switcher
│   │   ├── ui/                 # shadcn/ui components
│   │   └── ...                 # Feature components
│   ├── i18n/
│   │   ├── config.ts           # Locale configuration
│   │   └── request.ts          # Server-side i18n
│   ├── lib/
│   │   └── utils.ts            # Utility functions
│   └── navigation.ts           # i18n navigation helpers
├── messages/                   # Translation files
│   ├── en.json
│   ├── tr.json
│   └── ru.json
├── public/                     # Static assets
└── ...config files
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd skloftlife-villas
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## 🌐 Internationalization

The site supports three languages:

- **English** (`en`) - Default language
- **Turkish** (`tr`) - Turkish market
- **Russian** (`ru`) - CIS investors

### URL Structure

- Default: `/` (English)
- Turkish: `/tr`
- Russian: `/ru`

### Adding New Translations

1. Add new locale to `src/i18n/config.ts`
2. Create translation file in `messages/{locale}.json`
3. Update middleware in `src/middleware.ts`

## 🎨 Styling & Theming

### Design System

- **Primary Color**: Deep Navy (`#0B1F33`)
- **Accent Color**: Gold (`#D19E67`) 
- **Background**: Light Gray (`#F5F5F5`)
- **Typography**: Inter font family

### Custom CSS Variables

All colors use CSS variables for easy theming:

```css
:root {
  --primary: 209 47% 12%;
  --accent: 33 48% 62%;
  --background: 0 0% 100%;
  /* ... */
}
```

## 📱 Responsive Design

- **Mobile First**: Base styles for mobile devices
- **Breakpoints**: Following Tailwind CSS conventions
  - `sm`: 640px+
  - `md`: 768px+
  - `lg`: 1024px+
  - `xl`: 1280px+
  - `2xl`: 1536px+

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to GitHub**
   ```bash
   vercel --prod
   ```

2. **Environment Variables**
   ```env
   SENDGRID_API_KEY=your_sendgrid_key
   RECAPTCHA_SECRET=your_recaptcha_secret
   ```

### Other Platforms

The app works on any platform supporting Node.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🧪 Testing

```bash
# Run tests (when implemented)
npm run test

# Run E2E tests (when implemented)  
npm run test:e2e
```

## 📋 Planned Features

- [ ] 360° Hero section with Three.js
- [ ] Villa plan viewer with PDF downloads
- [ ] Image gallery with lightbox
- [ ] Live construction camera
- [ ] Contact form with SendGrid
- [ ] SEO optimization
- [ ] Unit tests with Vitest
- [ ] CI/CD pipeline

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is proprietary software for SkLoftLife Villas.

## 🆘 Support

For support, email [dev@skloftlife.com](mailto:dev@skloftlife.com) or create an issue in the repository.

---

**Built with ❤️ for SkLoftLife Villas**