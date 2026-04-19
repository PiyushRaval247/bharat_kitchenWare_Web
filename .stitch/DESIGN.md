# Design System: The Artisanal Gallery (Bharat Kitchenware)

## 1. Creative North Star: "The Artisanal Gallery"
Kitchenware is treated as curated art, not just tools. We blend the warmth of Indian hospitality with the precision of modern industrial design.

### Aesthetic Principles
- **Intentional Asymmetry**: Product imagery breaks container bounds.
- **Tonal Layering**: Depth is created through subtle color shifts, not harsh lines or 1px borders.
- **High-End Editorial**: Large typography scales and generous white space.

## 2. Color Palette (Calibrated Tones)
The palette reflects the "heart of the flame" and the prestige of "Chef's Choice" materials.

| Token | Value | Role |
| :--- | :--- | :--- |
| `primary` | `#a43700` | High-energy focal points (The Flame) |
| `primary-container` | `#cd4700` | Large action areas |
| `secondary` | `#a82d68` | Sophisticated accents (Beet Red) |
| `tertiary` | `#755717` | Luxury indicators (Subtle Gold) |
| `background` | `#fdf8f5` | Warm canvas |
| `surface` | `#fdf8f5` | The base surface |
| `surface-container` | `#f1edea` | Section grouping |
| `on-surface` | `#1c1b1a` | High-contrast text |

## 3. Typography: The Editorial Voice
- **Display & Headlines**: `Plus Jakarta Sans` - Wide apertures, modern geometry.
- **Body & Labels**: `Manrope` - Highly functional, rhythmic structure.
- **Hierarchy Strategy**: Massive contrast between `display-lg` and `body-md` to create authority.

## 4. Elevation & Depth: Layering over Shadows
- **Level 0 (Base)**: `surface`
- **Level 1 (Sections)**: `surface-container-low`
- **Level 2 (Cards)**: `surface-container-lowest`
- **Ambient Shadows**: Blur 40px, Opacity 6%, using `on-surface` for floating modals.

## 5. Components: Precision Primitives
- **Cards**: No dividers. Use 24px-32px whitespace or background shifts.
- **Buttons**: `Rounded-xl` (1.5rem), high-gloss primary, or ghost tertiary.
- **Inputs**: `surface-container-high` background, minimal ghost border on focus.

## 6. Micro-Motion
- **Hover Transitions**: 0.3s `cubic-bezier(0.4, 0, 0.2, 1)`.
- **Entrance Animations**: Subtle vertical drift (20px) on scroll for hero elements.
