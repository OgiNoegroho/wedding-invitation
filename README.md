This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Supabase

- **Setup**: Create a Supabase project at https://app.supabase.com and copy the project URL and anon key.
- **Env**: Copy `.env.local.example` to `.env.local` and fill in `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and (optionally) `SUPABASE_SERVICE_ROLE_KEY`.
- **Usage**: Import `supabase` from `lib/supabaseClient` and use it:

```ts
import supabase from "lib/supabaseClient";

const { data, error } = await supabase.from("your_table").select("*");
```

- **Apply SQL**: Run the SQL in `sql/01_create_rsvps.sql` in the Supabase SQL editor or with the Supabase CLI:

```bash
# using supabase cli (if installed)
supabase db reset --code
supabase db push sql/01_create_rsvps.sql
```

- **API**: A simple API is available at `/api/rsvps`:

  - `GET /api/rsvps` — list RSVPs
  - `POST /api/rsvps` — create RSVP (JSON body: `name`, `attendance`, optional `message`)

Example curl:

```bash
curl -X POST http://localhost:3000/api/rsvps -H "Content-Type: application/json" \
  -d '{"name":"Alex","attendance":"Yes","message":"See you!"}'
```

- **Quick test**: Run the lightweight check script (loads `.env`) to verify connection:

```bash
node scripts/check-supabase.mjs
```

- **Note**: If you see "Could not find the table 'public.rsvps' in the schema cache", the Supabase project is reachable but the `rsvps` table hasn't been created — run `sql/01_create_rsvps.sql` in the Supabase SQL editor to create it.
