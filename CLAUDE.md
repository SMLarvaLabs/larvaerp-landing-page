# LarvaERP Landing Page — AI Agent Guide

This file provides guidance for Claude and other AI agents working on the LarvaERP landing page.

**Read `README.md` first.** It contains all architectural and setup information.

## Quick Start for AI Agents

1. **Understand the architecture:** This is a static landing page (Vite + React), NOT the actual app
2. **The app is separate:** Running at `https://larvaerp-portal.larvalabs-apps.store` via Cloudflare Tunnel
3. **Editing the page:** All changes are in `src/components/*.jsx` files
4. **Testing locally:** `npm install && npm run dev`
5. **Deploying:** `git push origin main` (auto-deploys to Cloudflare Pages in ~1-2 minutes)

## File Organization

| File | Purpose | Edit For |
|------|---------|----------|
| `src/App.jsx` | Component orchestrator | Changing section order |
| `src/components/Header.jsx` | Navigation header | Navbar links, logo |
| `src/components/Hero.jsx` | Main headline + buttons | Title, description, CTAs |
| `src/components/Features.jsx` | 6 feature cards | Feature list, descriptions |
| `src/components/Modules.jsx` | Demo data stats | Numbers, data highlights |
| `src/components/TechStack.jsx` | Tech stack showcase | Technologies, descriptions |
| `src/components/CTA.jsx` | Call-to-action section | Bottom CTA, buttons |
| `src/components/Footer.jsx` | Footer | Links, copyright, company info |
| `src/index.css` | Custom CSS | Tailwind directives, custom classes |

## Common Tasks & Instructions

### Task: Update Portal URL

Both Hero.jsx and CTA.jsx have buttons pointing to the portal. If the portal URL changes:

```jsx
// In src/components/Hero.jsx (line ~16)
<a href="https://larvaerp-portal.larvalabs-apps.store">

// In src/components/CTA.jsx (line ~14)
<a href="https://larvaerp-portal.larvalabs-apps.store">
```

**IMPORTANT:** The portal URL should ALWAYS be `https://{appname}-portal.larvalabs-apps.store`, NOT nested `portal.{appname}.larvalabs-apps.store`. See "Cloudflare SSL Limitation" in README.md.

### Task: Add a New Feature Section

1. Create `src/components/NewFeature.jsx`:
```jsx
export default function NewFeature() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Your Heading</h2>
        <div className="grid grid-cols-2 gap-8">
          {/* Your content */}
        </div>
      </div>
    </section>
  )
}
```

2. Import in `src/App.jsx`:
```jsx
import NewFeature from './components/NewFeature'
```

3. Add to render (order matters):
```jsx
<NewFeature />
```

### Task: Update Hero/CTA Button Text

Edit the text in the button element:
```jsx
<a href="...">
  Old Text → ← New Text
</a>
```

The text automatically updates when you push to main.

### Task: Change Feature Cards

Edit `src/components/Features.jsx`. Each feature is a card object. Find the array and modify:
```jsx
const features = [
  { icon: '📦', title: 'Inventory', description: 'Edit this description' },
  // ... more features
]
```

### Task: Update Demo Data Numbers

Edit `src/components/Modules.jsx`. Find the stats section and change the numbers.

## Deployment Workflow

### Standard Workflow
```bash
# Make changes in src/components/*.jsx
nano src/components/Hero.jsx

# Test locally (optional)
npm run dev           # Opens http://localhost:5173

# Commit and push
git add .
git commit -m "Update hero text"
git push origin main

# Cloudflare Pages auto-deploys (~1-2 min)
```

### When Deployment Takes Longer
- Check GitHub Actions: github.com/SMLarvaLabs/larvaerp-landing-page → Actions
- Check Cloudflare: dash.cloudflare.com → Pages → larvaerp-landing-page → Deployments
- Clear browser cache (Ctrl+Shift+Del or Cmd+Shift+Del)

## Styling Guidelines

### Tailwind Classes Used
- **Spacing:** `py-20` (padding-y), `px-4` (padding-x), `mb-12` (margin-bottom)
- **Sizing:** `max-w-4xl` (max width), `w-full` (full width)
- **Typography:** `text-4xl` (size), `font-bold` (weight), `text-slate-600` (color)
- **Layout:** `grid grid-cols-3` (3-column grid), `flex flex-col` (flex column)
- **Responsive:** `sm:flex-row` (tablet+), `md:text-6xl` (medium+), `lg:` (large+)

### Custom Classes (from `src/index.css`)
- `.gradient-text` - Blue to purple gradient (use on headings)
- `.glass-effect` - Frosted glass background
- `.smooth-transition` - Smooth 300ms transition (use on hover elements)

## Component Architecture

### No State Management
This page doesn't use Redux, Context, or global state. Each component is independent and renders static content.

### No API Calls
All data is hardcoded in components. If you need dynamic content, it will require refactoring to add:
- State management (useState)
- Environment variables
- API fetching

### Simple is Better
Keep components focused and simple. Don't add unnecessary abstraction.

## Troubleshooting for AI Agents

### Build Command Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Local Dev Server Won't Start
```bash
# Check Node version
node --version  # Should be 18+

# Kill any running processes on port 5173
lsof -i :5173
kill -9 <PID>

# Try again
npm run dev
```

### Changes Don't Appear After Push
1. Wait 2-3 minutes (Cloudflare CDN propagation)
2. Hard refresh browser: Ctrl+Shift+R (Cmd+Shift+R on Mac)
3. Check if build succeeded in GitHub Actions

### Git Push Rejected
```bash
# Fetch latest from origin
git fetch origin

# If main branch is behind:
git pull origin main

# Then push
git push origin main
```

## Important Constraints

### DO
- Edit `src/components/*.jsx` files
- Update text, links, colors, styling
- Add new components
- Test locally before pushing
- Write clear commit messages

### DON'T
- Move or rename the project directory
- Delete `dist/` folder (it's generated)
- Change `.nvmrc` unless Node version needs update
- Commit `node_modules/` (already in .gitignore)
- Push to branches other than `main` (won't auto-deploy)

## Integration Points

### Landing Page ↔ Portal
- Landing page is at `https://larvaerp.larvalabs-apps.store`
- Portal is at `https://larvaerp-portal.larvalabs-apps.store` (separate)
- Portal is configured in `/opt/cloudflared/config.yml` on Web Server VPS
- No code changes to landing page affect the portal

### Landing Page ↔ Cloudflare Pages
- Auto-deploys on push to `main` branch
- Build command: `npm run build`
- Output: `dist/` folder
- Uses `.nvmrc` for Node version (18.18.0)

### Landing Page ↔ GitHub
- Repository: https://github.com/SMLarvaLabs/larvaerp-landing-page
- Webhook triggers on push to `main`
- All other branches are ignored

## For Future Agents: Creating Similar Landing Pages

When creating a new landing page for a different app:

1. **Copy this directory:** `cp -r larvaerp-landing appname-landing`
2. **Update identifying information:**
   - `package.json`: Change `name`, `description`
   - `README.md`: Update app name, URLs, links
   - `src/components/Hero.jsx`: Update title, description, portal URL
   - `src/components/CTA.jsx`: Update text, portal URL
3. **Customize content:**
   - Update `Features.jsx` with your features
   - Update `Modules.jsx` with your demo data
   - Update `TechStack.jsx` with your technologies
4. **Create Cloudflare Pages project:**
   - See `documentation/CLOUDFLARE_LANDING_PAGE_SETUP.md`
   - Use sibling subdomain for portal: `appname-portal.yourdomain.store`
5. **Push to GitHub and set up auto-deploy**

## Key Learnings from LarvaERP Setup

1. **Cloudflare SSL Limitation:** Nested subdomains pointing to tunnel endpoints don't get proper certificates. Use sibling subdomains.
2. **Static + Dynamic Split:** Landing page (static) and app (dynamic) should be on different subdomains.
3. **Auto-Deploy Works:** GitHub → Cloudflare Pages integration is reliable and fast.
4. **Keep It Simple:** React + Vite + Tailwind is all you need for marketing pages.

---

**Last Updated:** 2026-05-04  
**Maintained by:** LarvaLabs AI Agent Development
