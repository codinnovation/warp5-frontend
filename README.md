This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Project Structure

```
warp5-frontend/
├─ app/
│  ├─ (publicPages)/  # marketing and anonymous experiences
│  └─ (renter)/       # authenticated renter dashboard
├─ components/
│  ├─ auth/           # authentication modals and forms
│  ├─ layout/         # shared layout pieces (headers, footers, renter sidebar)
│  ├─ marketing/      # hero, CTA, grids, FAQ, etc. used across public routes
│  └─ renter/         # renter-only widgets (dashboard header, future cards)
└─ public/            # static assets (logos, equipment imagery)
```

All UI imports use the `@/` alias that maps to the workspace root (see `tsconfig.json`). This keeps imports stable when files move.

## Component Conventions

- **Marketing UI** lives in `components/marketing`. If both public and renter pages need the same section, build it here once and pass props to control small differences instead of forking files.
- **Layout primitives** (navigation bars, footer, renter sidebar) live in `components/layout`. Variants are explicitly named (`PublicPageHeader`, `RenterPageHeader`) so imports are unambiguous.
- **Auth** flows share `components/auth/LoginForm`. Pass route props (e.g., `/renter/signup`) rather than copying the modal.
- **Renter-only widgets** (dashboard chips, reservation tables, etc.) live in `components/renter`. When a widget graduates to multi-surface usage, promote it into a domain folder such as `marketing/` or `layout/`.
- **Naming**: prefer PascalCase filenames that describe intent (`WhyChooseUsSection`, `DashboardHeader`). Avoid generic duplicates like `CarGrid` in multiple folders.

## Routing Guidelines

- Use route groups (`app/(publicPages)`, `app/(renter)`) to separate marketing vs. authenticated shells.
- Keep URL nouns consistent (`/renter/reservations`, `/renter/profile`). If you need verb-based flows, introduce nested segments (`/renter/reservations/new`).
- Shared layouts should import from `components/layout` so that header/sidebar changes propagate everywhere automatically.

## Adding New UI

1. Identify the domain (auth, layout, marketing, renter) and add the component inside that folder.
2. Export strongly typed props that cover both renter/public differences instead of duplicating JSX.
3. Update any consuming route with the `@/` alias import path.
4. Extend this README when you introduce a new domain folder so future contributors know where things belong.
