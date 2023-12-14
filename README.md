## Restaurant Reservation Project

Simple copy of the opentable.com.
This is restaurant reservation application where people can view restaurants and reserve tables

#### Business Requirements / Main Functionalities:

- Show list of restaurants
- Search for restaurants in the city
- Show retaurants details
- Search for a particular date and time, number of people to make reservation
- Availability system
- Booking system
- Authentication system (sign in, sign up)

#### Pages:

- homepage
- /search
- /restaurant/[slug]
- /restaurant/[slug]/menu
- /reserve/[slug]

#### Technologies Stack

- NextJS 13 (main concepts: file system, static and dynamic routes, handle loading, error, not found, and success states, server and client components);
- supabase (Postgres with Prisma (ORM) for defining models);
- authentication - from scratch by utilizing middleware, hashers and json web tokens. context API for storing user data;

#### Reastaurant availability assumptions and rules:

- Restaurant availability is based on the number of tables that they have, not the number of seats;
- Tables can only have 2 or 4 seats (to simplify the app);
- Possible to combine tables togather for larger bookings;

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
