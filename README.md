This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

**1. Create .env-local:**

So we can avoid having api keys in code  

```bash
cp .env.local-example .env.local
```

Then, inside `.env-local` fill in the missing value `MAX_API_KEY` with the api key you can get from me. 

---
**2. Install Dependencies:**

```bash
yarn install
```

---
**3. Run the development server:**

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing

For demonstration purposes I configured Jest and wrote a test for one component.
Ideally in a production app we should have close to 100% test coverage with some
effective tests.

**Test**
```bash
# Run test suite
yarn test
# Run test suite w/ watch
yarn test:watch
```