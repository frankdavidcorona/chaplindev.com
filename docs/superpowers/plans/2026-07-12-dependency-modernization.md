# Dependency Modernization Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the portfolio to the latest stable dependency stack, remove obsolete packages, migrate affected configuration and components, and finish with a reproducible clean build.

**Architecture:** Keep the existing Next.js App Router architecture and visual design. Upgrade the framework foundation first, migrate Tailwind to its current PostCSS/CSS-first integration, then fix only concrete React/TypeScript compatibility issues exposed by verification.

**Tech Stack:** Next.js 16, React 19, TypeScript 5.9, Tailwind CSS 4, pnpm 11, Vercel Analytics and Edge Config

---

## Chunk 1: Dependency and toolchain foundation

### Task 1: Establish the supported package surface

**Files:**
- Modify: `package.json`
- Modify: `pnpm-lock.yaml`
- Create: `.nvmrc`
- Create: `pnpm-workspace.yaml`

- [ ] **Step 1: Record baseline failures**

Run: `pnpm install --frozen-lockfile`

Expected: the legacy pnpm 8 lockfile is rejected by pnpm 11, establishing the lockfile migration baseline.

- [ ] **Step 2: Replace the dependency manifest with the minimal current package set**

Set runtime dependencies to `@opentelemetry/api@1.9.1`, `@vercel/analytics@2.0.1`, `@vercel/edge-config@1.4.3`, `lucide-react@1.24.0`, `motion@12.42.2`, `next@16.2.10`, `react@19.2.7`, `react-dom@19.2.7`, `react-flagkit@2.0.4`, and no others. Set development dependencies to `@tailwindcss/postcss@4.3.2`, `@types/node@26.1.1`, `@types/react@19.2.17`, `@types/react-dom@19.2.3`, `postcss@8.5.17`, `prettier@3.9.5`, `prettier-plugin-tailwindcss@0.8.0`, `tailwindcss@4.3.2`, `tailwindcss-debug-screens@3.0.1`, and `typescript@5.9.3`. TypeScript 7.0.2 is excluded because Next.js 16.2.10 still resolves the removed `typescript/lib/typescript` package subpath and cannot build with it.

Remove `framer-motion`, `markdown-wasm`, `react-wrap-balancer`, all `rehype-*`/`remark-*` packages, `@tailwindcss/line-clamp`, `@tailwindcss/typography`, `autoprefixer`, `postcss-nesting`, and `rome`. Add `typecheck: tsc --noEmit`, make Prettier explicit, set `packageManager` to `pnpm@11.12.0`, and set Node engines to `>=22.13`. Pin the local runtime to Node `24.16.0` in `.nvmrc`.

- [ ] **Step 3: Remove stale pnpm overrides**

Remove the ignored legacy OpenTelemetry overrides. Keep the current Edge Config peer explicit at `@opentelemetry/api@1.9.1`, allow only Next.js's `sharp` dependency to run its required install script, and override Next's vulnerable PostCSS 8.4.31 pin with the compatible patched 8.5.17 release in `pnpm-workspace.yaml`.

- [ ] **Step 4: Regenerate the lockfile**

Run: `pnpm install --force`

Expected: installation succeeds with a pnpm 11-compatible lockfile and no ignored-settings warning.

## Chunk 2: Framework and styling migrations

### Task 2: Migrate Tailwind CSS 3 configuration to Tailwind CSS 4

**Files:**
- Modify: `global.css`
- Modify: `postcss.config.js`
- Delete: `tailwind.config.js`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Replace Tailwind directives with the Tailwind 4 import**

Use `@import "tailwindcss"`, load `tailwindcss-debug-screens` with `@plugin`, and define the existing font, animation, keyframe, and text-outline customizations in CSS.

- [ ] **Step 2: Use the current Tailwind PostCSS plugin**

Configure only `@tailwindcss/postcss`; remove obsolete nesting, autoprefixer, typography, and line-clamp integration.

- [ ] **Step 3: Preserve the debug-screen development behavior**

Keep the development-only body class with the Tailwind 4-compatible debug-screen plugin, while ensuring production does not emit a literal `undefined` class.

- [ ] **Step 4: Verify generated styles**

Run: `pnpm build`

Expected: all existing utility classes and custom animations compile under Tailwind 4.

### Task 3: Apply React 19 and current library compatibility updates

**Files:**
- Modify: `app/components/card.tsx`
- Modify: `app/components/particles.tsx`
- Modify: `app/contact/page.tsx`
- Modify: `app/experience/page.tsx`
- Modify: `app/testimonials/page.tsx`
- Modify: `app/components/nav.tsx`
- Delete: `app/components/mdx.tsx`
- Modify: `tsconfig.json`
- Modify: `next.config.js`
- Delete: `rome.json`

- [ ] **Step 1: Remove the unused broken MDX component**

Delete the unreferenced component whose `next-contentlayer` import has no installed provider, remove its unused markdown dependencies, remove the stale `contentlayer/generated` path alias and `.contentlayer` ignore, remove the unused `.md` page extension, and delete the unused Rome configuration.

- [ ] **Step 2: Update Motion imports and strict event types**

Import from `motion/react`, replace `any` mouse events with concrete React types, and prefer immutable local bindings.

- [ ] **Step 3: Update current component APIs**

Replace removed Lucide brand icon exports with focused inline SVG components while retaining Lucide's `Mail`. Remove deprecated `next/image` props, use correct avatar dimensions, remove obsolete external-link `as` props and unused icon imports, correct invalid Tailwind utilities, remove an empty `head`, and set the production metadata base.

- [ ] **Step 4: Stabilize particle animation lifecycle**

Track and cancel the animation frame and use concrete circle types without changing the effect's visual behavior.

- [ ] **Step 5: Run static verification**

Run: `pnpm typecheck && pnpm check:format`

Expected: both commands pass with no TypeScript suppressions in live code.

## Chunk 3: Final verification

### Task 4: Prove the upgraded app is reproducible

**Files:**
- Modify: `README.md` only if the required local runtime or commands changed

- [ ] **Step 1: Run a clean dependency install**

Run: `rm -rf node_modules .next && pnpm install --frozen-lockfile`

Expected: installation succeeds without changing `pnpm-lock.yaml`.

- [ ] **Step 2: Run all credential-free repository checks**

Run: `pnpm typecheck && pnpm check:format && pnpm exec next build --experimental-build-mode compile`

Expected: every check exits successfully without Edge Config credentials. A full `pnpm build` additionally requires a valid `EDGE_CONFIG` connection string because `/experience` and `/testimonials` prerender remote data; do not invent or commit credentials.

- [ ] **Step 3: Browser-smoke the upgraded routes**

Run `pnpm dev`, then inspect `/`, `/contact`, `/experience`, and `/testimonials` at mobile and desktop widths. Verify custom fonts and entrance animations, particle motion and single animation-loop cleanup under React Strict Mode, card hover masks, navigation, avatar sizing, layout, and browser console output. The two Edge Config routes are expected to need a valid `EDGE_CONFIG`; if unavailable, confirm their error boundary and report that environment limit explicitly.

- [ ] **Step 4: Audit dependency freshness and review the final diff**

Run: `pnpm outdated; git diff --check; git status --short; git diff --stat; git diff -- . ':(exclude)pnpm-lock.yaml'`

Expected: `pnpm outdated` reports only the documented TypeScript 7 incompatibility; there are no whitespace errors, and only dependency-modernization files are changed.
