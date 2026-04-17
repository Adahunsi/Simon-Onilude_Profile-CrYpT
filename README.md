# Profile Card — Frontend Wizards Stage 1B

A testable, accessible, responsive profile card component built with semantic HTML, modern CSS, and vanilla JavaScript.

## Project Overview

This project implements a professional profile card displaying user information with full accessibility support and comprehensive test coverage via `data-testid` attributes.

## Project Structure

```
Profile-Card_CrYpT/
├── index.html          # Main HTML file
├── styles.css          # Styling (dark theme, responsive)
├── script.js           # JavaScript (epoch clock)
├── images/             # Image folder
│   └── 1767615379721.jpg  # Profile photo
└── README.md           # This file
```

## Features

### Core Requirements 
- **Profile Card Container** — `data-testid="test-profile-card"`
- **User Name** — `data-testid="test-user-name"`
- **Biography** — `data-testid="test-user-bio"`
- **Epoch Time Display** — `data-testid="test-user-time"` (updates every 500ms)
- **Avatar Image** — `data-testid="test-user-avatar"` (circular with glow effect)
- **Social Links** — `data-testid="test-user-social-links"` with individual network IDs:
  - `test-user-social-twitter`
  - `test-user-social-github`
  - `test-user-social-linkedin`
- **Hobbies List** — `data-testid="test-user-hobbies"`
- **Dislikes List** — `data-testid="test-user-dislikes"`

### Semantic HTML
- `<article>` for card container
- `<header>` for name section
- `<figure>` + `<img>` + `<figcaption>` for avatar
- `<nav>` for social links
- `<section>` for hobbies/dislikes
- `<main>` for main content area

### Accessibility Features
- ✓ Meaningful alt text for avatar
- ✓ WCAG AA color contrast (dark theme with cyan accents)
- ✓ Accessible names on all interactive elements
- ✓ `aria-live="polite"` on time display for screen readers
- ✓ Keyboard navigation with focus styles
- ✓ All links keyboard-focusable

### Responsive Design
- **Mobile-first approach** — stacked layout on small screens
- **Tablet (600px+)** — avatar left, content right
- **Desktop** — optimized layout with max-width

### Dark Theme
- **Background**: Deep charcoal (`#1f2020`)
- **Accent**: Vibrant cyan (`#9cfcd9`)
- **Text**: Light and readable
- **Shadows**: Subtle, dark-mode appropriate

### Design Details
- **Avatar**: Circular with cyan border and smooth hover effect
- **Time Display**: Live epoch clock updating every 500ms
- **Social Links**: Open in new tabs with `rel="noopener noreferrer"`
- **Animations**: Smooth transitions and entrance animations
- **Grain Texture**: Subtle SVG background noise

## How to Use & Getting Started

### ⚡ Quick Start (Simplest Method)

1. **Navigate to your project folder**
   ```bash
   cd Profile-Card_CrYpT
   ```

2. **Open directly in browser**
   - Double-click `index.html` to open in your default browser
   - Or right-click `index.html` → "Open with" → Select your browser
   - **URL will be**: `file:///path/to/Profile-Card_CrYpT/index.html`


##  Acceptance Criteria — All Met

- [x] All required elements exist with correct `data-testid` attributes
- [x] HTML uses semantic tags appropriately
- [x] Epoch time displays in milliseconds via `Date.now()`
- [x] Avatar renders with meaningful alt text
- [x] Social links have individual testids and open in new tabs
- [x] Hobbies and dislikes are distinct, properly marked lists
- [x] Keyboard navigation works with visible focus styles
- [x] Layout is responsive across breakpoints
- [x] Dark theme with excellent contrast (WCAG AA)
- [x] Avatar is circular with professional styling

## Technologies Used

- **HTML5** — Semantic markup
- **CSS3** — Flexbox, Grid, media queries, custom properties
- **JavaScript (Vanilla)** — Epoch clock updates
- **Fonts** — Google Fonts (DM Serif, Instrument Sans, DM Mono)

## Accessibility Compliance

- WCAG 2.1 Level AA compliant
- Screen reader friendly with appropriate ARIA labels
- High color contrast ratios
- Keyboard navigable throughout
- Semantic HTML for assistive technology support

## Responsive Breakpoints

- **Mobile** (< 420px) — Single column lists
- **Tablet** (600px+) — Two-column layout (avatar + content)
- **Desktop** (860px max-width) — Optimized card width

## Testing

All elements include `data-testid` attributes for automated testing:

```html
<article data-testid="test-profile-card">
  <h2 data-testid="test-user-name">Simon Onilude</h2>
  <p data-testid="test-user-bio">...</p>
  <time data-testid="test-user-time">...</time>
  <img data-testid="test-user-avatar" />
  <nav data-testid="test-user-social-links">
    <a data-testid="test-user-social-twitter">...</a>
    <a data-testid="test-user-social-github">...</a>
    <a data-testid="test-user-social-linkedin">...</a>
  </nav>
  <ul data-testid="test-user-hobbies">...</ul>
  <ul data-testid="test-user-dislikes">...</ul>
</article>
```

---

