# TaskOps

A multi-tenant project management SaaS built with Next.js 15 App Router. Modelled loosely after Linear and Notion — teams create workspaces, invite members, manage projects and tasks, and unlock a Pro plan via Stripe.

Built as a structured six-week learning project to close gaps in server-side Next.js development: Server Components, Server Actions, middleware, Prisma, and Stripe webhooks.

---

## Features

- **Public workspace browsing** — Server Components with SEO-ready metadata
- **Authentication** — Google OAuth and email/password via NextAuth v5
- **Multi-tenant workspaces** — create, invite members, assign roles (Owner, Admin, Member)
- **Project and task CRUD** — full lifecycle management per workspace
- **Task search and filtering** — URL-param-driven, no client state
- **Cursor-based pagination** — via Prisma
- **Stripe subscriptions** — Free vs Pro plan, Checkout session, webhook handling
- **Feature gating** — Pro-only features blocked at the Server Action level
- **Admin dashboard** — view all workspaces and users, revoke access
- **AI task descriptions** — streaming generation via Vercel AI SDK + Anthropic
- **Email notifications** — invite and task-assignment emails via Resend

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS (default utility classes only) |
| Auth | NextAuth v5 |
| Database | PostgreSQL via Neon |
| ORM | Prisma 7 |
| Payments | Stripe (Checkout + webhooks) |
| Client state | Zustand |
| AI | Vercel AI SDK + Anthropic |
| Email | Resend |
| Deployment | Vercel |

---

## Project Structure

```
taskops/
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── (dashboard)/
│   │   │   ├── dashboard/
│   │   │   └── workspace/[workspaceId]/
│   │   │       ├── project/[projectId]/
│   │   │       │   └── task/[taskId]/
│   │   │       ├── members/
│   │   │       └── billing/
│   │   ├── (marketing)/
│   │   │   ├── page.tsx          ← public homepage
│   │   │   └── templates/
│   │   ├── admin/
│   │   ├── api/
│   │   │   ├── auth/[...nextauth]/
│   │   │   └── webhooks/stripe/
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── actions/                  ← Server Actions
│   ├── components/
│   ├── lib/
│   │   └── db.ts                 ← Prisma client exported as `db`
│   ├── stores/                   ← Zustand stores
│   └── types/
├── auth.ts                       ← NextAuth config
├── middleware.ts
├── prisma.config.ts
├── .env.local                    ← secrets (not committed)
└── .env.local.example
```

---

## Database Schema

Eight models covering the full multi-tenant data shape:

- `User` — auth identity, linked to workspaces via membership
- `Account` — NextAuth OAuth accounts
- `Session` — NextAuth sessions
- `Workspace` — top-level tenant unit
- `WorkspaceMember` — join table with role (OWNER / ADMIN / MEMBER)
- `Project` — belongs to a workspace
- `Task` — belongs to a project, single assignee, status + priority enums
- `Invitation` — pending invite by email + workspace, unique constraint on the pair
- `Subscription` — Stripe subscription state per workspace, never deleted only status-updated

---

## Getting Started

### Prerequisites

- Node.js 20+
- PostgreSQL database (Neon recommended)
- Stripe account
- Google OAuth credentials
- Resend account
- Anthropic API key

### Installation

```bash
git clone https://github.com/your-username/taskops.git
cd taskops
npm install
```

### Environment Variables

Copy `.env.local.example` to `.env.local` and fill in all values.

```bash
cp .env.local.example .env.local
```

```env
# Database
DATABASE_URL=""          # pooled connection string (runtime)
DIRECT_URL=""            # direct connection string (migrations)

# Auth
AUTH_SECRET=""
AUTH_GOOGLE_ID=""
AUTH_GOOGLE_SECRET=""

# Stripe
STRIPE_SECRET_KEY=""
STRIPE_WEBHOOK_SECRET=""
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=""

# AI
ANTHROPIC_API_KEY=""

# Email
RESEND_API_KEY=""
NEXT_PUBLIC_APP_URL=""
```

### Database Setup

```bash
npx prisma migrate dev --name init
npx prisma db seed
```

### Run Locally

```bash
npm run dev
```

### Stripe Webhooks (local)

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

---

## Prisma Conventions

These conventions are enforced throughout the codebase:

- Prisma client is exported as `db` from `@/lib/db`
- Auth config lives at `auth.ts` (root level), imported as `@/auth`
- Middleware lives at `middleware.ts` (root level)
- `DATABASE_URL` is the pooled connection (runtime queries)
- `DIRECT_URL` is the direct connection (migrations only)
- `prisma.config.ts` at root imports `dotenv/config` for migration tooling

---

## Key Architectural Decisions

**Server Actions over API routes** for all mutations. Server Actions colocate the server logic with the component that triggers it, reduce boilerplate, and integrate naturally with Next.js form handling and revalidation.

**URL-param-driven filtering** instead of `useState` for search and filter state. This makes filter state bookmarkable, shareable, and handled entirely on the server — no hydration cost.

**Workspace-level roles** rather than global roles. Permissions are always evaluated in the context of a specific workspace, which maps cleanly to the multi-tenant model.

**Subscription records are never deleted** — only the status field is updated. This preserves billing history and simplifies webhook handling.

**Feature gating at the Server Action level** — not just in the UI. UI gates are UX; Server Action gates are the actual security boundary.

---

## Build Schedule

| Week | Focus |
|---|---|
| 1 | Foundation — schema, migrations, seed, layout shell |
| 2 | Auth + Workspace — NextAuth, middleware, workspace creation, invitations, roles |
| 3 | Core Product — project and task CRUD, search, filtering, pagination |
| 4 | Payments — Stripe Checkout, webhooks, feature gating, billing page |
| 5 | Admin + AI + Email — admin dashboard, AI generation, Resend notifications |
| 6 | Polish + Rebuild — metadata, loading states, closed-book rebuilds, deploy |

---

## Deployment

Deploy to Vercel with the following settings:

- **Framework preset:** Next.js
- **Root directory:** `/` (default)
- **Environment variables:** add all `.env.local` keys in the Vercel dashboard
- **Database:** use the pooled `DATABASE_URL` for runtime and `DIRECT_URL` for build-time migrations

Run migrations against the production database before first deploy:

```bash
npx prisma migrate deploy
```

---

## Learning Goals

By the end of this build:

- Explain every file in the codebase out loud without notes
- Make architectural decisions with articulated tradeoffs (Server Actions vs API routes, middleware vs layout guards, multi-tenant patterns)
- Start a new Next.js SaaS project from a blank folder without reference
- Build the backend of any standard SaaS from scratch

---

## License

MIT
