This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

_________________________________________________________________________

## Docker

You can use this app with DOCKER ` docker build -t docker-saas .` and ` docker run -p 3000:3000 docker-saas`
to lunch `docker start <name-conteneur> `

## How to use ?

this app is a set-up for your next project 
stack : 
- nextjs
- prisma
- tailwind
- supabase
- nextauth
- shadcn
- stripe
- Lucide icons
- Light/Dark

for personalize this project, create `.env` in a root and add your envrionments variables : 
`DATABASE_URL=`
`secret` : same of NEXTAUTH_SECRET
`NEXTAUTH_SECRET=`
`NEXTAUTH_URL=`
`SECRET_KEY=`

and `npm install` for install all depedencies


## Ressources 

- Prisma for NextJs + Supabase => https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql
- Supabase => https://supabase.com/
- Lucide => https://lucide.dev/
- NextAuth => https://youtu.be/0eu4_lLFkGk?si=bKkHZwNGWpd7-MZW (for set-up if page is accessible with accesstoken 59min)


## Rules

all the size app : 
- max-w-screen-2xl
- p-4
- gap-4