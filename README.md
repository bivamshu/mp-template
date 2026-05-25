# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv@0.15.3 create --template minimal --types ts --add prettier eslint tailwindcss="plugins:typography,forms" --install npm ./
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

Here is the complete, comprehensive technical documentation for the entire project based on your fresh, modular architecture. You can save this as a `README.md` file in the root of your project directory for future reference, handover, or repository management.

---

# Technical Project Documentation: Sasmit Pokhrel Campaign Platform

This document provides the complete structural breakdown, design system tokens, state management architecture, and file-system topography for the modular web platform built with SvelteKit and Tailwind CSS.

---

## 1. Project Directory Topography

The system adheres to a strict, decoupled file layout designed to keep the presentation tier isolated from state mechanics and global layout trees.

```text
sasmit-pokhrel-website/
├── src/
│   ├── lib/
│   │   ├── assets/               # Raw graphic elements & static vectors
│   │   ├── components/           # Decoupled presentation elements
│   │   │   ├── HeroText.svelte   # Typographic hero component
│   │   │   ├── HeroVisuals.svelte# Graphics/portrait canvas container
│   │   │   ├── Navbar.svelte      # Floating main navigation header
│   │   │   ├── LatestUpdates.svelte # News announcement carousel track
│   │   │   └── index.ts          # Central component barrel pipeline
│   │   └── index.svelte.ts       # Central translation & reactive state engine
│   ├── routes/
│   │   ├── +layout.svelte        # View slot interceptor & configuration manager
│   │   ├── +page.svelte          # Main view compositor
│   │   └── layout.css            # Tailwind directives stylesheet
│   ├── app.d.ts                  # Global TypeScript declaration layer
│   └── app.html                  # Core HTML single page entry point boilerplate
├── static/                       # Unprocessed global assets accessible by browser roots
├── svelte.config.js              # Svelte compiler engine configurations
├── tsconfig.json                 # Strict type compilation parameters
└── vite.config.ts                # Hot reloading bundler architecture configurations

```

---

## 2. Design Tokens & Styling Specification

The visual interface implements a high-contrast cinematic color scheme emphasizing institutional authority, change, and structural transparency.

### Chromatic Palette

* **Hero Canvas Color Gradient:** Deep Cinematic Sea Teal (`bg-[#0d2d3a]` transitioning into a mix-blend radial overlay via from `#091f29`, through `#113a4b`, to `#1a4a5e`).
* **Announcements Tracker Background:** Vibrant Campaign Royal Indigo Blue (`bg-[#0046b8]`).
* **Accents and Highlights:** High-vis Alert Yellow (`bg-yellow-400`) reserved exclusively for pagination focal indicators.
* **Borders & Outlines:** Low-opacity crisp whites (`border-white/10` and `border-white/20`) ensuring separation without adding heavy visual weight.

---

## 3. Isolated UI Component Specifications

### `Navbar.svelte`

* **Purpose:** Houses the main upper structural anchor point, containing global branding typography weights and localized context triggers.
* **Layout Structure:** Flex rows space elements evenly (`justify-between`) bounded by max-width constraints matching standard widescreen rules (`max-w-7xl`).

### `HeroText.svelte`

* **Purpose:** Isolates core messaging hooks, positioning metadata tags cleanly over large screen coordinates.
* **Typography Sizing Hierarchy:** Generates tight letter tracking leading into massive display variants (`text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight leading-[0.95]`) for immediate visual impact.

### `HeroVisuals.svelte`

* **Purpose:** Coordinates the background asset layering, positioning background election symbols relative to transparent foreground candidate cutouts.
* **Implementation Note:** Uses structural bounding dashed containers to cleanly separate graphics layouts from text baselines before rendering real visual nodes.

### `LatestUpdates.svelte`

* **Purpose:** Houses an interactive news slider track.
* **Mobile Behavior (`< 768px`):** Flexes elements horizontally on a full viewport block, sliding via a dynamic CSS translation matrix tracker (`transform: translateX(-{currentIndex * 100}%)`).
* **Desktop Behavior (`>= 768px`):** Locks columns in place dynamically using grid cells (`md:grid-cols-2 lg:grid-cols-3`), exposing all items for simultaneous readability.

---

## 4. State Management Mechanics (Svelte 5 Framework)

The architecture leverages native **Svelte 5 Runes** to ensure reactive components and animations skip legacy evaluation methods.

### Interactive Slider Tracking

The **Carousel Controller** panel uses local state checking variables:

* `let currentIndex = $state(0);`: Binds a reactive integer reference tracking the current focused news position.
* `$derived`: Automatically mirrors indicator layouts when index values step higher or lower.
* **Boundary Validation Safety:** `nextSlide` and `prevSlide` intercept action steps, resetting indices back to the zero index boundaries when increment limits are breached to keep the carousel looping.

---

## 5. Deployment & Optimization Rules

To run and maintain the project pipeline smoothly, ensure the following settings are preserved:

1. **Strict File Extensions:** Files including Svelte 5 state handlers must use the `.svelte.ts` extension format so Vite's compiler hooks process runes correctly.
2. **Linting and Asset Integrity:** All custom presentation modules must sit behind clear pascal-cased naming boundaries (e.g., `HeroText.svelte`) to eliminate target collision behavior across Linux staging distributions during build processes.
3. **Local Dev Server Check:** ```bash
npm run dev
```

```


4. **Production Compile Verification:**
```bash
npm run build

```

Let's update your project's comprehensive technical documentation to include the new `CandidateIntro` section, and then commit this stable baseline to your Git repository.

---

## Step 1: Update the Master Documentation

Overwrite your **`README.md`** file in the root directory to ensure the new component, file dependencies, and structure are completely documented.

```markdown
# Technical Project Documentation: Sasmit Pokhrel Campaign Platform

This document provides the complete structural breakdown, design system tokens, state management architecture, and file-system topography for the modular web platform built with SvelteKit and Tailwind CSS.

---

## 1. Project Directory Topography
The system adheres to a strict, decoupled file layout designed to keep the presentation tier isolated from state mechanics and global layout trees.

```text
sasmit-pokhrel-website/
├── src/
│   ├── lib/
│   │   ├── assets/               # Raw graphic elements & static vectors
│   │   ├── components/           # Decoupled presentation elements
│   │   │   ├── HeroText.svelte   # Typographic hero component
│   │   │   ├── HeroVisuals.svelte# Graphics/portrait canvas container
│   │   │   ├── Navbar.svelte      # Floating main navigation header
│   │   │   ├── CandidateIntro.svelte # Biographical narrative block
│   │   │   ├── LatestUpdates.svelte # News announcement carousel track
│   │   │   └── index.ts          # Central component barrel pipeline
│   │   └── index.svelte.ts       # Central translation & reactive state engine
│   ├── routes/
│   │   ├── +layout.svelte        # View slot interceptor & configuration manager
│   │   ├── +page.svelte          # Main view compositor
│   │   └── layout.css            # Tailwind directives stylesheet
│   ├── app.d.ts                  # Global TypeScript declaration layer
│   └── app.html                  # Core HTML single page entry point boilerplate
├── static/                       # Unprocessed global assets accessible by browser roots
├── svelte.config.js              # Svelte compiler engine configurations
├── tsconfig.json                 # Strict type compilation parameters
└── vite.config.ts                # Hot reloading bundler architecture configurations

```

---

## 2. Design Tokens & Styling Specification

The visual interface implements a high-contrast color scheme emphasizing institutional authority, change, and structural transparency.

### Chromatic Palette

* **Hero Canvas Color Gradient:** Deep Cinematic Sea Teal (`bg-[#0d2d3a]` transitioning into a mix-blend radial overlay via from `#091f29`, through `#113a4b`, to `#1a4a5e`).
* **Biographical Section:** Balanced, high-contrast minimalist canvas (`bg-white` with `text-slate-900`).
* **Announcements Tracker Background:** Vibrant Campaign Royal Indigo Blue (`bg-[#0046b8]`).
* **Accents and Highlights:** High-vis Alert Yellow (`bg-yellow-400`) reserved exclusively for active pagination controls.

---

## 3. Isolated UI Component Specifications

### `Navbar.svelte`

* **Purpose:** Houses the main upper structural anchor point, containing global branding typography weights and localized context triggers.

### `HeroText.svelte`

* **Purpose:** Isolates core messaging hooks, positioning metadata tags cleanly over large screen coordinates.

### `HeroVisuals.svelte`

* **Purpose:** Coordinates the background asset layering, positioning background election symbols relative to transparent foreground candidate cutouts.

### `CandidateIntro.svelte`

* **Purpose:** Renders an asymmetrical introductory bio block. Features a prominent layered focal badge representing the constituency region identifier alongside a clean call-to-action path for user engagement.

### `LatestUpdates.svelte`

* **Purpose:** Houses an interactive news slider track. Implements hardware-accelerated transforms (`translateX`) for seamless mobile swiping layout behaviors while gracefully resetting layout columns for horizontal desktop views.

---

## 4. State Management Mechanics (Svelte 5 Framework)

The architecture leverages native **Svelte 5 Runes** to ensure reactive components and animations skip legacy evaluation methods.

### Interactive Slider Tracking

The **Carousel Controller** panel uses local state checking variables:
* `let currentIndex = $state(0);`: Binds a reactive integer reference tracking the current focused news position.
* **Boundary Validation Safety:** `nextSlide` and `prevSlide` intercept action steps, resetting indices back to the zero index boundaries when increment limits are breached to keep the carousel looping.

---

## 5. Deployment & Optimization Rules

1. **Strict File Extensions:** Files including Svelte 5 state handlers must use the `.svelte.ts` extension format so Vite's compiler hooks process runes correctly.
2. **Linting and Asset Integrity:** All custom presentation modules must sit behind clear pascal-cased naming boundaries (e.g., `HeroText.svelte`) to eliminate target collision behavior across Linux staging distributions during build processes.

```

---

## Step 2: Track and Commit to Git

Open your PowerShell terminal inside `D:\projects\sasmit-pokhrel-wesbite` and fire off these commands to bundle up our changes cleanly:

```powershell
# 1. Stage all project documentation and the introduction block additions
git add .

# 2. Commit with a highly descriptive message following semantic conventions
git commit -m "docs: compile complete project specifications; feat: integrate candidate intro component"

# 3. Securely push to the main track on GitHub
git push origin main

```

Everything is now completely backed up, synchronized, and documented without a single dangling reference or warning file in your problems log! Where should we point the ship next?

### `MediaCoverage.svelte`
* **Purpose:** Renders a three-column media grid component highlighting recent video appearances, fireside talks, and external discussions. Implements a clean horizontal slide mechanism for constrained touch layouts.
