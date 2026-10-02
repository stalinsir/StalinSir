# Stalin Kumar Sahoo — Portfolio

Single-page portfolio with a scroll-driven background animation (299 frames drawn on a `<canvas>`).
Pure HTML, CSS and vanilla JavaScript — no build step needed.

## Run

Just double-click `index.html`, or use VS Code's **Live Server** extension for auto-reload.

## Folder structure

```
StalinSir/
├── index.html                  # The page (only HTML file)
├── README.md
├── .gitignore
│
├── assets/
│   ├── css/                    # Load order = order in index.html
│   │   ├── base.css            # Colour/font variables, body, h1/h2/p
│   │   ├── layout.css          # Canvas, overlay, sections, glass card
│   │   ├── hero.css            # Hero section + scroll indicator
│   │   ├── about.css           # Tech-stack badges
│   │   ├── contact.css         # Social icon links
│   │   ├── animations.css      # Section reveal + keyframes
│   │   └── responsive.css      # All media queries (keep LAST)
│   │
│   ├── js/
│   │   ├── modules/
│   │   │   ├── scroll-canvas.js   # Frame preloading + scroll → frame mapping
│   │   │   └── reveal.js          # Fade-in sections on scroll
│   │   └── main.js                # Entry point, starts the modules
│   │
│   ├── images/
│   │   ├── hero/               # Hero portrait
│   │   ├── about/              # About-section photos
│   │   ├── profile/            # Profile photo
│   │   └── scroll-frames/      # frame-001.jpg … frame-299.jpg
│   │
│   ├── icons/
│   │   ├── tech/               # Python, Java, React, Git … logos (SVG)
│   │   ├── education/          # Education icons
│   │   └── softskills/         # Soft-skill icons
│   │
│   └── docs/
│       └── resume.pdf          # Resume (linked from the Contact section)
│
└── _archive/                   # Old unused files — safe to delete when ready
```

## Where do I change things?

| I want to…                         | Edit                              |
|------------------------------------|-----------------------------------|
| Change colours / fonts             | `assets/css/base.css` (`:root`)   |
| Change hero text or photo          | `index.html` + `assets/css/hero.css` |
| Change skills badges               | `index.html` + `assets/css/about.css` |
| Add / edit social links            | `index.html` + `assets/css/contact.css` |
| Fix something on mobile            | `assets/css/responsive.css`       |
| Change number of animation frames  | `FRAME_COUNT` in `assets/js/modules/scroll-canvas.js` |

## Adding a new section

1. Add a `<section id="...">` in `index.html`
2. Create `assets/css/<name>.css` and link it **before** `animations.css`
3. (Optional) Add `assets/js/modules/<name>.js`, link it before `main.js`, and call it from `main.js`
