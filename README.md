# Rujul Talekar — Research Portfolio & Systems Dossier

Personal research portfolio, academic dossiers, and systems engineering showcase of **Rujul Talekar** (`AI Researcher × Systems Builder`).

```
[ PROFILE STATUS // ACTIVE RESEARCH & SYSTEMS DOSSIER ]
-----------------------------------------------------------------------------------------
Identity     : Rujul Talekar (Roojool)
Affiliation  : Computer Engineering @ Vishwakarma Institute of Technology (VIT Pune)
Core Domains : Human-Centered AI · Video Management Systems · Edge Vision · Transport Dynamics
Live Routes  : / · /resume · /research · /projects · /publications · /writing · /about · /llms.txt
-----------------------------------------------------------------------------------------
```

---

## Architecture & Technology Stack

The portfolio is built from scratch as a high-density, academic and engineering dossier combining the interaction speed and density of modern technical portfolios with rigorous scientific methodology.

* **Framework:** [Next.js 15](https://nextjs.org/) (App Router, Server Components, Edge OG)
* **Runtime & Language:** [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Typography:** [Geist](https://vercel.com/font) (`GeistSans`, `GeistMono`)
* **Interactive Navigation:** [cmdk](https://cmdk.paco.me/) command palette (`Cmd/Ctrl + K`)
* **Theme System:** [next-themes](https://github.com/pacocoursey/next-themes) (Dark mode default with light mode toggle)
* **Writing & Content Engine:** Frontmatter-parsed MDX with reading-time calculation and RSS 2.0 generation
* **Telemetry & Activity:** Public GitHub REST integration with edge revalidation (no private API tokens required)
* **Structured Data & SEO:** Dynamic OpenGraph (`opengraph-image.tsx`), `schema.org/Person` JSON-LD, `robots.ts`, `sitemap.ts`, `/feed.xml`, and `/llms.txt`

---

## Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── ci.yml                 # Automated CI quality gate
├── content/
│   ├── research/                  # Extended research dossiers
│   ├── notes/                     # Field notes and telemetry records
│   └── writing/                   # Technical essays (MDX)
│       └── configured-state-is-not-wire-behavior.mdx
├── public/
│   ├── rt-favicon-v2.svg          # Canonical RT monogram favicon
│   ├── rt-icon-v2.svg             # High-contrast RT site icon
│   ├── images/
│   │   └── rujul-hero.png         # Pixel portrait asset
│   └── manifest.webmanifest       # Web application manifest
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout with fonts & JSON-LD
│   │   ├── page.tsx               # 14-section homepage
│   │   ├── opengraph-image.tsx    # Dynamic edge OpenGraph image
│   │   ├── twitter-image.tsx      # Twitter summary card
│   │   ├── about/page.tsx         # Extended academic dossier
│   │   ├── resume/page.tsx        # Printable A4 curriculum vitae
│   │   ├── research/page.tsx      # Research index & hypotheses
│   │   ├── projects/page.tsx      # Engineering projects catalog
│   │   ├── publications/page.tsx  # Academic papers & BibTeX citations
│   │   ├── writing/               # Writing index and article reader
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── feed.xml/route.ts      # Automated RSS 2.0 XML feed
│   │   ├── llms.txt/route.ts      # Plaintext context for LLMs
│   │   ├── sitemap.ts             # Dynamic sitemap index
│   │   └── robots.ts              # Search engine crawler policies
│   ├── components/
│   │   ├── brand/                 # Monogram (RT) and Wordmark
│   │   ├── command-palette/       # Cmd+K interactive palette
│   │   ├── layout/                # Header, Footer, MobileNav
│   │   ├── sections/              # 14 distinct homepage sections
│   │   └── ui/                    # Buttons, Badges, Cards, ThemeToggle
│   ├── data/                      # Centralized type-safe content layer
│   │   ├── profile.ts             # Core bio, principles, status
│   │   ├── resume.ts              # Curated resume config and dynamic skills mapping
│   │   ├── experience.ts          # Lab appointments & timeline
│   │   ├── education.ts           # Academic credentials (VIT Pune)
│   │   ├── projects.ts            # Public repositories & showcases
│   │   ├── research.ts            # Research vectors, states, questions
│   │   ├── publications.ts        # Verified proceedings & BibTeX
│   │   ├── patents.ts             # Intellectual property & IPC codes
│   │   ├── open-source.ts         # Upstream contributions schema
│   │   ├── skills.ts              # Categorized technical tooling
│   │   ├── awards.ts              # Awards schema
│   │   ├── certifications.ts      # Certifications schema
│   │   └── links.ts               # Social, GitHub, LinkedIn, ORCID
│   ├── lib/
│   │   ├── github.ts              # Safe public REST telemetry client
│   │   ├── mdx.ts                 # MDX reader & frontmatter parser
│   │   ├── reading-time.ts        # Word count calculation
│   │   └── utils.ts               # Style merging & formatting
│   └── styles/
│       └── globals.css            # Tailwind v4 theme & engineering grid
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── next.config.ts
├── LICENSE
└── README.md
```

---

## Local Development

### Prerequisites
* Node.js >= 20
* pnpm (`npm install -g pnpm`)

### Setup & Run
```bash
# Clone the repository
git clone https://github.com/Roojool/portfolio.git
cd portfolio

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

Visit `http://localhost:3000` to view the running application.

### Quality Verification
```bash
# Typecheck TypeScript codebase
pnpm run check-types

# Run ESLint linter
pnpm run lint

# Compile production build
pnpm run build
```

---

## Content Editing

All personal data, research vectors, and achievements are centralized in `src/data/`:

* **Research Vectors:** Add or modify tracks in `src/data/research.ts` (assign `ACTIVE`, `EXPERIMENTAL`, or `IN DEVELOPMENT`).
* **Publications:** Add verified conference proceedings in `src/data/publications.ts` with authors, venue, year, and BibTeX.
* **Patents:** Maintain intellectual property records in `src/data/patents.ts`.
* **Projects:** Add verified repositories in `src/data/projects.ts`.
* **Resume & CV:** Configure curated projects and display categories in `src/data/resume.ts` for the live and printable `/resume` route.
* **Writing & Field Notes:** Add `.mdx` or `.md` files to `content/writing/` with frontmatter:
  ```yaml
  ---
  title: "Configured State Is Not Wire Behavior"
  description: "A methodological note on network transport queuing dynamics."
  publishedAt: "2026-03-20"
  tags: ["Networking", "Bufferbloat", "Systems"]
  author: "Rujul Talekar"
  ---
  ```

---

## Deployment to Vercel

The portfolio is fully optimized for Vercel deployment:

1. Push your changes to GitHub (`Roojool/portfolio`).
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the `Roojool/portfolio` repository.
4. Framework Preset: **Next.js** (detected automatically).
5. Build Command: `pnpm run build` (or default).
6. Click **Deploy**.

Alternatively, via the Vercel CLI:
```bash
vercel login
vercel
```

---

## Attribution & Licensing

* **Author:** Rujul Talekar ([@Roojool](https://github.com/Roojool))
* **License:** [MIT License](LICENSE)
* **Attribution:**
  * Design inspiration: [prathadox.com](https://www.prathadox.com/).
  * Portions of the architecture and interaction patterns were adapted from [ncdai/chanhdai.com](https://github.com/ncdai/chanhdai.com) under the MIT License.
  * All original branding, personal likenesses, and custom marks are unique to Rujul Talekar.
