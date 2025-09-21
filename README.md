# Portfolio Website

A modern, responsive portfolio website built with Next.js 15, showcasing professional experience, skills, projects, and achievements. Features an interactive dashboard and AI-powered chat assistant.

## 🚀 Features

- **Interactive Dashboard**: Overview of key metrics, achievements, and quick actions
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

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **UI Library**: [shadcn/ui](https://ui.shadcn.com) with Radix UI components
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Icons**: [Lucide React](https://lucide.dev)
- **AI Integration**: [Vercel AI SDK](https://ai-sdk.dev) with Google Gemini
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Language**: TypeScript

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
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Google AI API key to `.env.local`:
   ```env
   GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here
   ```
   
   Get your API key from: https://aistudio.google.com/app/apikey

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
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── articles/          # Articles page with tabs
│   ├── awards/            # Awards and certifications
│   ├── projects/          # Project portfolio
│   ├── skills/            # Technical skills
│   ├── talks/             # Speaking engagements
│   ├── api/chat/          # AI chat API endpoint
│   ├── layout.tsx         # Root layout with sidebar
│   └── page.tsx           # Dashboard homepage
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   ├── app-sidebar.tsx   # Navigation sidebar
│   ├── chat-bot.tsx      # AI chat assistant
│   ├── theme-provider.tsx # Theme context provider
│   └── theme-toggle.tsx   # Dark mode toggle
└── lib/                   # Utility functions
    └── utils.ts          # Common utilities
```

## 🎨 Customization

### Updating Content

1. **Personal Information**: Edit the content in each page component
2. **Projects**: Modify the `ProjectCard` components in `/src/app/projects/page.tsx`
3. **Skills**: Update skill ratings and categories in `/src/app/skills/page.tsx`
4. **AI Assistant Context**: Update portfolio information in `/src/app/api/chat/route.ts`

### Styling

- All components use Tailwind CSS classes
- Theme colors can be customized in `tailwind.config.js`
- Dark mode variants are included throughout

### Adding New Sections

1. Create a new page in `/src/app/[section]/page.tsx`
2. Add navigation link in `/src/components/app-sidebar.tsx`
3. Follow existing page structure and styling patterns

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

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

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
