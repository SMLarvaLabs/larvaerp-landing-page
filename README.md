# LarvaERP Landing Page

Modern, clean landing page for LarvaERP built with React, Vite, and Tailwind CSS.

## Features

- **Hero Section**: Eye-catching introduction with dual CTAs and demo data metrics
- **Features Showcase**: Six core ERP modules with descriptions (Inventory, Purchase, Sales, Jewellery, Contacts, Analytics)
- **Demo Data Section**: Highlights 50+ pre-loaded records across modules
- **Technology Stack**: Visual showcase of the modern tech stack (React, Fastify, PostgreSQL, etc.)
- **Call-to-Action**: Conversion-focused CTA section
- **Footer**: Navigation, links, and company info
- **Responsive Design**: Mobile-first approach works on all devices
- **Smooth Animations**: Tailwind smooth transitions for interactive elements

## Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Cloudflare Pages

## Development

### Install Dependencies
```bash
npm install
```

### Run Dev Server
```bash
npm run dev
```

Opens at `http://localhost:5173` with hot reload enabled.

### Build for Production
```bash
npm run build
```

Outputs optimized assets to `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

## Structure

```
src/
├── components/
│   ├── Header.jsx      # Sticky navigation with logo and CTA
│   ├── Hero.jsx        # Main headline section with dual CTAs
│   ├── Features.jsx    # Six feature cards
│   ├── Modules.jsx     # Demo data statistics
│   ├── TechStack.jsx   # Technology stack showcase
│   ├── CTA.jsx         # Call-to-action section
│   └── Footer.jsx      # Footer with links
├── App.jsx             # Main app component
├── index.css           # Tailwind directives and custom styles
└── main.jsx            # React entry point
```

## Key Styling

- **Gradient Text**: `gradient-text` class applies blue-to-purple gradient
- **Glass Effect**: `glass-effect` class for frosted glass backgrounds
- **Smooth Transitions**: `smooth-transition` class for 300ms ease-out transitions
- **Color Scheme**: Primary (blue-600), Secondary (purple-600)

## Demo Data Shown

- **Inventory**: 300+ stock levels across 3 locations
- **Purchase Orders**: 2 sample POs totaling ₹147.5K
- **Sales Orders**: 2 sample SOs totaling ₹295K
- **Jewellery**: 4 metals, 5 stones, 3 collections, 4 designs
- **Total Records**: 50+ demo records

## Deployment

See [CLOUDFLARE_PAGES.md](../docs/CLOUDFLARE_PAGES.md) for detailed deployment instructions.

### Quick Deploy

1. Push changes to `main` branch
2. Cloudflare Pages automatically builds and deploys
3. Build command: `npm install && npm run build`
4. Output directory: `dist`

## Performance

- **LCP**: < 2s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)

Optimized bundle size: ~25KB gzipped (JavaScript only, CSS included)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS 14+, Android 9+)

## Links

- **Live App**: https://larvaerp.larvalabs-apps.store
- **GitHub**: [LarvaERP Repository]
- **Documentation**: [LarvaERP Docs]

## Metadata

See `metadata.md` for complete landing page metadata and configuration.
