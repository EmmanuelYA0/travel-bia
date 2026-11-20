# Bia — Côte d'Ivoire Travel Experience

Bia is a responsive travel landing page inspired by the landscapes, culture and destinations of Côte d'Ivoire. It is built with Next.js, React, TypeScript and Tailwind CSS.

## Features

- Ivory Coast-focused hero and destination content
- Responsive destination cards
- Travel guide and experience section
- Feature overview for planning and local exploration
- Reusable navigation, buttons, footer and content constants
- Responsive layout for mobile, tablet and desktop

## Tech stack

- Next.js 13
- React 18
- TypeScript
- Tailwind CSS
- Next Image

## Getting started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open `http://localhost:3000`.

### Production build

```bash
npm run build
npm run start
```

## Project structure

```text
app/
  layout.tsx       # Shared page layout and metadata
  page.tsx         # Home page sections
  globals.css      # Global styles and reusable Tailwind utilities

components/
  Navbar.tsx
  Hero.tsx
  Camp.tsx
  Guide.tsx
  Features.tsx
  GetApp.tsx
  Footer.tsx
  Button.tsx

constants/
  index.ts         # Navigation, feature and footer content

public/
  ...              # Images and icons
```

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run the configured Next.js lint command |

## Customization

- Update navigation and reusable content in `constants/index.ts`.
- Update the hero, destination, feature and guide copy in `components/`.
- Update theme colors and shared utilities in `tailwind.config.ts` and `app/globals.css`.
- Place new image assets in `public/` and reference them with paths beginning at `/`.
