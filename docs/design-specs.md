# Design Specifications

## Philosophy
"It Sucks, Make it Pop!" - Human-first, technology-second. Minimalist base with deliberate, high-contrast accents.

## Typography
- **Primary (Body)**: 'Kameron', serif (Weights: 400, 700). High character, readable serif for content.
- **Headings (H1)**: 'Noto Serif', serif (Weights: 400, 700). Classic, authoritative.
- **Subheadings (H2-H6, UI)**: 'Fira Sans', sans-serif (Weights: 400, 600). Clean, humanist sans for structure and navigation.

- **Scale**: Modular scale based on 16px base.
  - Heading 1: 2rem (32px)
  - Heading 2: 1.5rem (24px)
  - Heading 3: 1.125rem (18px)
  - Body: 1rem (16px)
  - Small: 0.875rem (14px)

## Colors
### Base (Monochroism - Silver/Charcoal/Stone/Clay)
- `--c-bg`: `hsl(30, 10%, 97%)` (Almost white clay)
- `--c-surface`: `hsl(30, 8%, 93%)` (Light stone)
- `--c-border`: `hsl(30, 6%, 86%)` (Silver)
- `--c-text`: `hsl(30, 4%, 25%)` (Charcoal)
- `--c-heading`: `hsl(30, 4%, 10%)` (Deep Charcoal)

### Accents
- `--c-accent-gunmetal`: `hsl(260, 20%, 30%)` (Deep Purple Gunmetal)
  - Usage: Secondary emphasis, subtle depth.
- `--c-accent-orange`: `hsl(25, 100%, 50%)` (Crazy Bright Orange)
  - Usage: Sparingly. Thin lines, periods in logo, critical calls to action. High impact.

## Spacing
- Base unit: 8px
- Scale:
  - 1: 0.5rem (8px)
  - 2: 1rem (16px)
  - 3: 1.5rem (24px)
  - 4: 2rem (32px)
  - 6: 3rem (48px)
  - 8: 4rem (64px)

## Components
- **Navigation**: Simple text links, high contrast on hover.
- **Lines**: Thin (1px-2px) borders, optionally in accent orange for emphasis.
- **Logo**: Text-based, with the period colored in `--c-accent-orange`.
