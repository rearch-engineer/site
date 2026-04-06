# ReArch Website

This is the official ReArch website.

## Quick Start

### Prerequisites

- **bun** >=1.3.10

### Development

```bash
# Clone
git clone hgit@github.com:rearch-engineer/site.git
cd site

# Install dependencies
bun i

# Develop
bun run dev

# Type checking
bun run check

# Linting
bun run lint
```

## Project Structure

```
src/
  components/
    ui/           # UI components (form, data-display, feedback, overlay, etc.)
    patterns/     # Composed patterns (ContactForm, SearchInput, StatCard, etc.)
    layout/       # Header, Footer, ThemeToggle, Analytics
    landing/      # Credibility, TechStack, FeatureTabs, and more
    seo/          # SEO, JsonLd, Breadcrumbs
  content/        # Blog posts, authors, FAQs
  config/         # Site and navigation config
  styles/         # Global CSS and design tokens
  pages/          # Routes, API endpoints, OG image generation
```

## Deployment

The site is deployed on Vercel with automatic builds from the main branch.
