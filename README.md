# Personal Branding Website (Next.js + shadcn/ui)

A responsive personal branding website for a Fullstack Developer with 3 pages:
- Home
- Profile
- Contact

Includes:
- Next.js App Router + TypeScript
- shadcn/ui-style components (Radix + Tailwind)
- Dark mode toggle with persisted preference
- Lightweight 3D-style dangling badge animation
- Contact form with React Hook Form + Zod validation
- Secure server-side email sending via SMTP (Nodemailer)
- Honeypot spam field + basic per-IP rate limiting

## 1. Prerequisites

- Node.js 20+
- npm 10+

## 2. Install dependencies

```bash
npm install
```

## 3. Configure environment variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Set values in `.env.local`:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_TO_EMAIL` (defaults to `afif.maliki21@gmail.com` if not set)
- `CONTACT_FROM_EMAIL` (defaults to `SMTP_USER` if not set)

## 4. Run in development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 5. Production build

```bash
npm run build
npm run start
```

## Project structure

```text
.
├── app
│   ├── api
│   │   └── contact
│   │       └── route.ts
│   ├── contact
│   │   └── page.tsx
│   ├── profile
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── contact
│   │   └── contact-form.tsx
│   ├── ui
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   └── textarea.tsx
│   ├── dangling-badge.tsx
│   ├── site-footer.tsx
│   ├── site-header.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── lib
│   ├── contact-schema.ts
│   ├── rate-limit.ts
│   ├── site-config.ts
│   └── utils.ts
├── .env.example
├── components.json
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Contact form behavior

- Client-side validation: Zod schema via React Hook Form
- Server-side validation: same Zod schema in API route
- Spam protection:
  - Honeypot field: `website` (hidden field)
  - Rate limiting: 5 requests per 15 minutes per IP (in-memory)

## Vercel deployment notes

1. Push this project to a Git repository.
2. Import the repository in Vercel.
3. Add environment variables in Vercel Project Settings:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_FROM_EMAIL`
4. Deploy.

Notes:
- In-memory rate limiting resets on server restarts and is per-instance. For stronger production protection, replace with Upstash Redis or a managed KV.
- If using Gmail SMTP, use an App Password (not your normal account password).
