# LunoRX Website

Astro 7 starter for the LunoRX website, deployed through the Cloudflare adapter.

## Stack

- Astro 7 and Cloudflare
- Tailwind CSS 4 via the Vite plugin
- React 19 islands for interactive components
- shadcn/ui CLI with the Base UI primitive library and zinc semantic tokens
- All currently served shadcn/Base UI and Magic UI registry components, installed as editable source
- Motion, Lucide, `cn()` utility, and squircle radius utilities

## Getting started

Requires Node.js `>=22.23.4` and Bun.

```sh
bun install
bun run dev
```

Astro's dev server runs in background mode. Manage it with `bunx astro dev status`, `bunx astro dev logs`, and `bunx astro dev stop`.

## Checks and deployment

```sh
bun run typecheck
bun run build
bun run preview
```

GitHub Actions runs typecheck and a production build for pushes to `main`, pull requests targeting `main`, and manual dispatches.

## Component gallery

Open `/components/` for a searchable catalog and interactive examples. Component source lives in `src/components/ui/` (with `striped-pattern` in `src/components/magicui/`). Copy an import path from any catalog row to use the component in another page or React island.

## UI foundation

Global design tokens and `squircle-*` utilities live in `src/styles/global.css`. Prefer semantic classes such as `bg-canvas`, `bg-surface`, `border-line`, `text-foreground`, and `text-muted-foreground`; use `bg-emphasis` sparingly for primary actions. Use the `squircle-*` utilities instead of Tailwind's `rounded-*` utilities.

Add shadcn components with `bun run shadcn add button`. Add Magic UI registry components with `bun run shadcn add @magicui/marquee`. Components are copied into `src/components/ui` and can be composed in Astro pages or hydrated React islands.
