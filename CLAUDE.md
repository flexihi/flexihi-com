# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 landing page for FlexiHi, built with TypeScript, Tailwind CSS, and next-intl for internationalization. The project supports both English and Arabic languages with RTL/LTR layout switching. Built with React 19 and modern web technologies.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

The development server runs on http://localhost:3000.
IMPORTANT: Always use Playwright MCP to access it and test the changes.

## Dependencies

### Core Technologies

- **Next.js 15.5.0** - React framework with App Router
  IMPORTANT: Use the official docs for NextJS: https://nextjs.org/docs
- **React 19** - Latest React with modern features
  IMPORTANT: Use the official API referance for React: https://react.dev/reference/react
- **TypeScript 5** - Type-safe JavaScript development
  IMPORTANT: Use the offcial TypeScript documentation: https://www.typescriptlang.org/docs/
- **Tailwind CSS 4.1.12** - Utility-first CSS framework (latest v4)
  IMPORTANT: Use the offical Docs for Tailwind CSS: https://tailwindcss.com/docs/

### Key Libraries

- **next-intl 4.3.5** - Internationalization with server-side support
- **react-icons 5.5.0** - Popular icon library
- **cookies-next 6.1.0** - Cookie management for Next.js
- **clsx 2.1.1** - Conditional className utility

### Development Tools

- **ESLint 9** - Code linting with Next.js config
- **PostCSS 8** - CSS processing tool

## Architecture

### Internationalization

- Uses next-intl with server-side configuration
- Supports English ("en") and Arabic ("ar") locales
- Default locale is English (config.ts:1)
- Locale detection via cookies with fallback to DEFAULT_LOCALE
- Translation files in `messages/` directory
- Layout automatically switches between LTR/RTL based on locale (app/layout.tsx:79)

### Project Structure

- `app/` - Next.js App Router pages and layout
- `components/` - Reusable UI components (Hero, Features, Services, etc.)
- `layouts/` - Layout components (NavBar, Footer, LangSwitchButton)
- `messages/` - Translation JSON files for i18n
- `public/` - Static assets including custom Bukra font files
- `types/` - TypeScript type definitions

### Styling

- Tailwind CSS v4 with custom configuration
- Custom color palette: primary (#005394), secondary (#EF6C00), additional variants (primary-light, primary-lightest)
- Custom font family: Bukra (loaded via local fonts with 9 weight variants)
- Custom utilities: max-w-content (1440px), m-nav-bar (94px)
- Responsive design with full RTL/LTR support

IMPORTANT: Use Figma MCP to check the designs from this link: https://www.figma.com/design/TnaWytaqmd2y5JKDfjqkX9/MCP?node-id=1348-131294&m=dev

### Component Architecture

- Landing page composed of modular sections: Hero, Features, Services, Demos, Pricing, FAQs, Apps
- Components receive locale props for internationalization
- Uses LocaleType from types/LocaleProps.ts for type safety

### Key Configuration

- next-intl plugin configured in next.config.mjs
- Custom font loading with 9 font weights (100-900) in app/layout.tsx:15-64
- Tailwind extends base configuration with project-specific utilities
- Locale detection via cookies ("lang") with server-side configuration in i18n.ts
- Custom margin utility: m-nav-bar (94px) for navbar spacing

### Key Files

- `config.ts` - Global configuration constants (DEFAULT_LOCALE, NUMBER_OF_FAQS)
- `i18n.ts` - next-intl server configuration with cookie-based locale detection
- `types/LocaleProps.ts` - TypeScript interface for locale prop typing
- Static policy pages: privacy-policy, refund-policy, terms-and-conditions
