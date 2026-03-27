# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Current UI Structure

The current app renders a single hero section for the Whakatane Moving landing page.

- `App` provides the page shell and background.
- `Hero` contains the main heading, supporting copy, logo, and call-to-action.
- `Box` is a lightweight presentational wrapper used for bordered content blocks.

### Hero layout

The hero is built with Tailwind utility classes and a small set of theme tokens defined in `src/index.css`.

- `--color-bg` sets the cream page background.
- `--color-text` controls the dark text and border color.
- `--color-cta` powers the primary call-to-action button.

This keeps the current landing page easy to evolve without carrying documentation for components that have already been removed.
