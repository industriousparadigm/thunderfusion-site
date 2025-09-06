# Thunder Fusion Site - Development Guide

## Overview
Thunder Fusion is a single-page scrolling website for a creative consultancy specializing in humanitarian storytelling and video production. Built with modern web technologies for optimal performance and user experience.

## Tech Stack
- **Framework**: Next.js 15.1.6 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: CSS Modules with custom properties
- **Animations**: Framer Motion
- **Forms**: React Hook Form with validation
- **Analytics**: Vercel Analytics + Google Analytics
- **Email**: Nodemailer (contact form backend)
- **Icons**: React Icons

## Commands
```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure
```
src/app/
├── page.tsx              # Home page with hero, about, work grid, testimonials, contact
├── layout.tsx            # Root layout with fonts and metadata
├── globals.css           # Global styles and CSS variables
├── services/             # Services page with packages
├── about/                # About page with team info
├── api/contact/          # Contact form API endpoint
├── components/
│   ├── WorkGrid          # Video portfolio grid with lazy loading
│   ├── ContactForm       # Contact form with validation
│   ├── Testimonials      # Client testimonials carousel
│   └── Analytics         # Google Analytics component
└── data/
    └── thumbnails.ts     # Video portfolio data
```

## Key Features
### Visual & UX
- ✅ Animated gradient hero with particle effects
- ✅ Glitch text animation on hero title
- ✅ Transparent header that animates to solid on scroll
- ✅ Smooth scroll single-page navigation
- ✅ Mobile hamburger menu with slide-in navigation
- ✅ Swipeable service cards on mobile
- ✅ Touch-enabled testimonials carousel
- ✅ Video grid with subtle hover effects
- ✅ Modal video player with YouTube embeds
- ✅ Lazy loading with skeleton screens

### Technical
- ✅ SEO optimization (meta tags, Open Graph, sitemap, robots.txt)
- ✅ Google Analytics + Vercel Analytics
- ✅ Contact form with email backend
- ✅ Responsive design with mobile-first approach
- ✅ Optimized YouTube thumbnail loading (i.ytimg.com)
- ✅ TypeScript strict mode
- ✅ All lint checks passing

## Environment Variables
Create a `.env.local` file with:
```env
# Google Analytics
NEXT_PUBLIC_GA_ID=your-ga-id

# Email Configuration (for contact form)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Optional
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code
```

## Design System
### Color Palette (Enhanced for Contrast)
- **Primary Pink**: `#e91e63` (strong)
- **Pink Light**: `#feaeb5` (accents)
- **Primary Cyan**: `#00bcd4` (strong)
- **Cyan Light**: `#bee8fa` (accents)
- **Black**: `#0a0f14` (darkest)
- **Black Soft**: `#1a232e` (backgrounds)
- **Gray**: `#9e9e9e` (text)
- **Gray Light**: `#e0e1e1` (borders)
- **Gray Dark**: `#616161` (strong text)
- **Blue**: `#2196f3` (links)
- **Blue Dark**: `#547287` (accents)

### Typography
- **Headings**: Prata (serif)
- **Body**: Jost (sans-serif)
- **Hero**: Permanent Marker (display)

### Breakpoints
- Mobile: <= 768px
- Tablet: 769px - 1024px
- Desktop: > 1024px

## Fonts
- **Headings**: Prata (serif)
- **Body**: Jost (sans-serif)
- **Hero**: Permanent Marker (display)

## Code Conventions
- Use TypeScript strict mode
- CSS Modules for component styles
- Framer Motion for animations
- Keep components in separate files
- Use semantic HTML
- Follow existing patterns

## Adding New Videos
Edit `src/app/data/thumbnails.ts`:
```typescript
{
    title: 'Video Title',
    client: 'Client Name',
    src: '/thumbnails/image.jpg', // or YouTube URL
    alt: 'Description',
    videoId: 'YouTubeVideoId'
}
```

## Deployment Notes
- The site is optimized for Vercel deployment
- Images should be optimized before upload
- Contact form requires email configuration
- Update sitemap URL in production

## Mobile-Specific Features
- Hamburger menu with overlay
- Swipeable service cards with indicators
- Touch gestures for testimonials
- Optimized font sizes and spacing
- Sticky header with reduced height
- Horizontal scrolling for grids

## Performance Optimizations
- Image lazy loading
- YouTube thumbnail optimization
- CSS Module tree shaking
- Turbopack development
- Optimized animations (GPU accelerated)

## Common Development Tasks
### Run Development Server
```bash
npm run dev
```

### Update Video Portfolio
Edit `src/app/data/thumbnails.ts`

### Modify Services
Edit `src/app/components/ServicesSection.tsx`

### Update Testimonials
Edit `src/app/components/Testimonials.tsx`

### Configure Email
Set environment variables for Nodemailer in `.env.local`