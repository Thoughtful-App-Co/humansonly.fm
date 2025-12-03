# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is an Astro-based web project for humansonly.fm. The project uses Astro v5.16.3 with TypeScript and follows Astro's strict TypeScript configuration.

## Development Commands

All commands should be run from the repository root:

- `npm install` - Install dependencies
- `npm run dev` - Start development server at `localhost:4321`
- `npm run build` - Build production site to `./dist/`
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands (e.g., `npm run astro add`, `npm run astro check`)

## Architecture

### File-based Routing
Astro uses file-based routing where each file in `src/pages/` becomes a route:
- `src/pages/index.astro` → `/`
- `src/pages/about.astro` → `/about`
- Files can be `.astro`, `.md`, or `.mdx`

### Component Structure
- **Pages**: `src/pages/` - Astro pages with file-based routing
- **Components**: `src/components/` - Reusable Astro/React/Vue/Svelte/Preact components
- **Static Assets**: `public/` - Static files served as-is (images, fonts, etc.)

### TypeScript Configuration
- Uses Astro's strict TypeScript preset (`astro/tsconfigs/strict`)
- Generated types are placed in `.astro/types.d.ts`
- Build output and `.astro/` directory are excluded from TypeScript compilation

## Astro-Specific Patterns

### Astro Components
Astro files have two main sections:
1. **Component Script** (frontmatter): Code between `---` fences at the top, runs at build time
2. **Component Template**: HTML-like template below the frontmatter

### Build Output
- Development: Uses Vite dev server with HMR
- Production: Static site output to `dist/` directory
- Generated types: `.astro/` directory (git-ignored)

## Environment Variables
Environment variables follow Astro conventions:
- `.env` files are supported
- Use `import.meta.env.*` to access environment variables
- `.env.production` for production-specific variables
