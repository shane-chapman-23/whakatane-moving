# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## Grid Layout System

This project includes a small reusable grid layout system built from three composable components:

- `GridLayout` creates the parent CSS Grid container and controls the total column count, row height, and gap.
- `GridItem` handles placement and span using `colSpan`, `rowSpan`, and optional start positions.
- `Box` is visual-only and is responsible for styling content without adding any layout behavior.

### Example usage

```tsx
import Box from './components/Box'
import GridItem from './components/GridItem'
import GridLayout from './components/GridLayout'

export default function ExamplePage() {
  return (
    <GridLayout columns={12} rowHeight={80} gap={16}>
      <GridItem colSpan={4} rowSpan={2}>
        <Box>4x2 Box</Box>
      </GridItem>

      <GridItem colSpan={8} rowSpan={3}>
        <Box>8x3 Box</Box>
      </GridItem>

      <GridItem colSpan={3} rowSpan={1}>
        <Box>3x1 Box</Box>
      </GridItem>
    </GridLayout>
  )
}
```

### Span props

`colSpan` controls how many grid columns an item spans, and `rowSpan` controls how many rows it spans. For example, a `4x2` layout block is represented as `colSpan={4}` and `rowSpan={2}`.

### Why this helps

By separating grid structure from visual styling, the system stays flexible. `GridLayout` and `GridItem` define placement, while `Box` can be reused to style any content inside the grid.
