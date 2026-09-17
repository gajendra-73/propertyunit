# PropertyUnit — React Frontend

India's multi-vendor real estate marketplace.

## Quick start (local)

```bash
npm install
npm run dev
# → http://localhost:5173
```

## Deploy to Vercel

### Option A — Vercel CLI (fastest)
```bash
npm install -g vercel
vercel        # follow prompts — auto-detects Vite
```

### Option B — GitHub import
1. Push this folder to a GitHub repo
2. Go to vercel.com → Add New Project
3. Import the repo
4. Vercel auto-detects settings from `vercel.json` — click **Deploy**

### Option C — Vercel Dashboard drag & drop
1. Run `npm run build` locally → produces `dist/` folder
2. Go to vercel.com → drag the `dist/` folder onto the dashboard
3. Get a live URL instantly

## Environment variables

Copy `.env.example` → `.env.local` for local dev.

For production, add in **Vercel → Project → Settings → Environment Variables**:

| Variable | Value |
|----------|-------|
| `VITE_API_BASE_URL` | `https://api.propertyunit.in/api/v1` |
| `VITE_RAZORPAY_KEY_ID` | Your Razorpay public key |
| `VITE_APP_URL` | `https://propertyunit.in` |

## Project structure

```
propertyunit/
├── public/
│   ├── favicon.svg       # App icon
│   └── robots.txt        # Search engine crawling rules
├── src/
│   ├── App.jsx           # Complete app — 5,915 lines, 51 components
│   └── main.jsx          # React DOM entry point
├── index.html            # Vite HTML shell
├── package.json          # Dependencies + scripts
├── vite.config.js        # Vite + React plugin + dev proxy
├── vercel.json           # Vercel deployment config (SPA rewrites)
├── .env.example          # Environment variable template
└── .gitignore
```

## Build

```bash
npm run build             # outputs to dist/
npm run preview           # preview the production build locally
```
