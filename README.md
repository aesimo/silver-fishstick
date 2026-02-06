# IdeaMart Platform

IdeaMart is a full-stack marketplace for curated ideas. This scaffold includes a modern Next.js frontend, a Node/Express API server, Supabase (Postgres) integration, and JWT-based authentication.

## Monorepo Structure

```
.
├── server/   # Express + Supabase API
└── web/      # Next.js frontend
```

## Requirements

- Node.js 18+
- A Supabase project (URL + service role key)

## Environment Setup

Copy the environment template and fill in values:

```bash
cp .env.example .env
```

Key variables:
- `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` for the API.
- `JWT_SECRET` for signing API tokens.
- `NEXT_PUBLIC_API_URL` for the web app to reach the API.

## Install Dependencies

```bash
npm install
```

## Development

Run both apps:

```bash
npm run dev
```

Run individually:

```bash
npm run dev:web
npm run dev:server
```

## Production

```bash
npm run build
npm run start
```

## API Overview

Base URL: `/api/v1`

- `POST /auth/register` – create user + JWT
- `POST /auth/login` – login + JWT
- `GET /auth/profile` – user profile
- `GET /ideas` – list ideas
- `POST /ideas` – create idea (auth)
- `PATCH /ideas/:id` – update idea (auth)
- `POST /ideas/:id/submit` – submit for review
- `GET /wallet/balance` – wallet snapshot (auth)
- `POST /wallet/withdraw` – payout request (auth)
- `GET /admin/overview` – admin stats (admin)

Webhook stubs are available at:
- `POST /wallet/webhooks/razorpay`
- `POST /wallet/webhooks/cashfree`

## Frontend Highlights

- Marketing landing page with animated hero, feature cards, and stats.
- Auth screens for login and registration.
- Dashboard shells for creators, moderators, and admins.
- Framer Motion transitions and glassmorphism styling.

## Deployment Notes

- Deploy the `server` folder to Railway/Render/Fly with environment variables.
- Deploy the `web` folder to Vercel or Netlify and set `NEXT_PUBLIC_API_URL`.
