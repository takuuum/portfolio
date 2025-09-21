# Portfolio Website

A modern, multilingual portfolio website built with Next.js 15, showcasing professional experience, skills, projects, and achievements. Features an interactive dashboard, AI-powered chat assistant, and full internationalization support.

## 🚀 Features

- **Interactive Dashboard**: Overview of key metrics, achievements, and quick actions
- **Multilingual Support**: Full internationalization with Japanese and English support
- **Responsive Design**: Optimized for all devices with modern UI/UX
- **Dark Mode Support**: Toggle between light and dark themes
- **AI Chat Assistant**: Ask questions about portfolio content using Gemini AI
- **Professional Sections**:
  - About Me with career history and expertise
  - Technical Skills with proficiency ratings
  - Project Portfolio with detailed descriptions
  - Articles and Publications
  - Speaking Engagements
  - Awards and Certifications

## 🛠 Tech Stack

- **Framework**: [Next.js 15.5.3](https://nextjs.org) with App Router and Turbopack
- **Language**: TypeScript 5+
- **UI Library**: [shadcn/ui](https://ui.shadcn.com) with Radix UI components
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) with PostCSS
- **Icons**: [Lucide React](https://lucide.dev) & [React Icons](https://react-icons.github.io/react-icons/)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/) for multilingual support
- **AI Integration**: [Vercel AI SDK](https://ai-sdk.dev) with Google Gemini
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes) for dark mode
- **Animations**: [tw-animate-css](https://github.com/jamesqquick/tw-animate-css)
- **Runtime**: React 19.1.0 with React DOM 19.1.0

## 📋 Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- Google AI API key (for chat assistant)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:
   ```bash
   touch .env.local
   ```

   Add the following environment variables to `.env.local`:
   ```env
   # Google AI API Key for chat assistant
   GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here

   # Optional: Custom base URL (defaults to localhost:3000 in development)
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

   Get your Google AI API key from: https://aistudio.google.com/app/apikey

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Internationalized routes
│   │   ├── about/         # About page
│   │   ├── articles/      # Articles page with tabs
│   │   ├── awards/        # Awards and certifications
│   │   ├── projects/      # Project portfolio
│   │   ├── skills/        # Technical skills
│   │   ├── talks/         # Speaking engagements
│   │   ├── layout.tsx     # Locale-specific layout
│   │   └── page.tsx       # Dashboard homepage
│   ├── api/chat/          # AI chat API endpoint
│   ├── favicon.ico        # Site favicon
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   ├── app-sidebar.tsx   # Navigation sidebar
│   ├── chat-bot.tsx      # AI chat assistant
│   ├── locale-switcher.tsx # Language switcher
│   ├── theme-provider.tsx # Theme context provider
│   └── theme-toggle.tsx   # Dark mode toggle
├── hooks/                 # Custom React hooks
│   └── use-mobile.ts     # Mobile detection hook
├── i18n/                  # Internationalization config
│   ├── request.ts        # Server-side i18n setup
│   └── routing.ts        # Locale routing config
├── lib/                   # Utility functions
│   └── utils.ts          # Common utilities
└── middleware.ts          # Next.js middleware for i18n
messages/                  # Translation files
├── en.json               # English translations
└── ja.json               # Japanese translations
```

## 🎨 Customization

### Updating Content

1. **Personal Information**: Edit the content in each page component under `/src/app/[locale]/`
2. **Projects**: Modify the project data in `/src/app/[locale]/projects/page.tsx`
3. **Skills**: Update skill ratings and categories in `/src/app/[locale]/skills/page.tsx`
4. **Translations**: Update text content in `/messages/en.json` and `/messages/ja.json`
5. **AI Assistant Context**: Update portfolio information in `/src/app/api/chat/route.ts`

### Internationalization

The portfolio supports multiple languages through next-intl:

1. **Adding New Languages**:
   - Add new translation files in the `/messages/` directory
   - Update the locale configuration in `/src/i18n/routing.ts`
   - Add the new locale to the middleware configuration

2. **Updating Translations**:
   - Edit the JSON files in `/messages/` directory
   - Use the `useTranslations` hook in components to access translations

3. **Language Switching**:
   - Users can switch languages using the locale switcher in the sidebar
   - URLs automatically include the locale prefix (e.g., `/en/about`, `/ja/about`)

### Styling

- All components use Tailwind CSS classes
- Theme colors can be customized in `tailwind.config.js`
- Dark mode variants are included throughout

### Adding New Sections

1. Create a new page in `/src/app/[locale]/[section]/page.tsx`
2. Add navigation link in `/src/components/app-sidebar.tsx`
3. Add translations for the new section in `/messages/en.json` and `/messages/ja.json`
4. Follow existing page structure and styling patterns

## 🤖 AI Chat Assistant

The portfolio includes an AI-powered chat assistant that can answer questions about:

- Professional background and experience
- Technical skills and expertise
- Project details and technologies used
- Articles and publications
- Speaking engagements and awards

The assistant uses Google's Gemini AI model and is configured with comprehensive portfolio context.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your `GOOGLE_GENERATIVE_AI_API_KEY` environment variable
4. Deploy automatically on each commit

### Other Platforms

The app can be deployed to any platform that supports Node.js:

```bash
npm run build
npm start
```

## 📝 Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is for personal portfolio use. Feel free to use as inspiration for your own portfolio.

## 📞 Contact

- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]
- **Email**: [Your Email]

---

Built with ❤️ using Next.js and modern web technologies.
