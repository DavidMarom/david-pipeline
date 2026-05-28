# David Pipeline

> A template pipeline built for developers. Skip the boilerplate, own your stack, ship faster.

David Pipeline is an open-source Next.js starter built around a composable, developer-first philosophy. Every stage of the pipeline is a small, swappable module — extend what you need, skip what you don't.

---

## Features

- **Fast by default** — pre-wired with sensible defaults so you spend zero time on boilerplate
- **Composable** — each pipeline stage is an independent module; replace or remove anything
- **Developer-first** — built for the command line, integrates with the tools you already use
- **MIT licensed** — fork it, own it, ship it your way

## Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | TypeScript 5 |
| Styling | CSS Modules (no Tailwind, no CSS-in-JS) |
| Font | [Geist](https://vercel.com/font) via `next/font` |
| Runtime | Node.js |

## Getting Started

```bash
# Clone the repo
git clone https://github.com/your-org/david-pipeline.git
cd david-pipeline

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Build for production |
| `npm run start` | Start the production server |
| `node scripts/generate-favicon.mjs` | Regenerate all favicon assets from the SVG source |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout — fonts, metadata, global styles
│   ├── page.tsx          # Home route
│   └── globals.css       # Design tokens and resets
└── components/
    ├── Navbar/
    ├── Hero/
    ├── Features/
    ├── FeatureCard/
    └── Footer/

public/
├── favicon.svg           # Master favicon source (Star of David mark)
├── favicon.ico           # ICO bundle (16, 32, 48 px)
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png  # 180×180
├── icon-192.png          # PWA / Android
├── icon-512.png          # PWA splash
└── manifest.webmanifest  # Web App Manifest

scripts/
└── generate-favicon.mjs  # Rasterises favicon.svg → all PNG/ICO sizes
```

## Contributing

Pull requests are welcome. For significant changes, open an issue first to discuss what you'd like to change.

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Commit your changes: `git commit -m "feat: add my feature"`
4. Push and open a pull request

## License

[MIT](LICENSE)
