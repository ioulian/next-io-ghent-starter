This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Go live checklist

- `.env`
- `next-seo.config.js`
- `next-i18next.config.js`
- `src/lib/page-head.tsx` and make sure the favicons are all regenerated
- `.gitignore` Generated files should be enabled if no build step exists

## Redux

If you want to use redux on the server (authentication for example), you'll need
to convert your app to use SSR on every page where you want to use redux. You'll
want to enable cookie storage for select redux values.

If you want to use redux, but with SSG, you should remove HYDRATION from slices

## Features

- Full Typescript
- Translations intellisense (TS) + checks for missing translations
- easy GTM (auto tracking of pages)
- SWR
- React 18 en Next 13 -> fast minification and dev server enabled
- Favicons (manual, but we have helpers)
- Avif/webm conversion of images
- SEO + Sitemap
- Bundle analyser
- NVM
- .env variables
- PWA ready (but not fully battle tested)
- REDUX + hydration
- JWT Auth starter kit
- SVG Sprites
- Next13 Font optimisation
- Storybook
- [Tabler icons](https://tabler-icons.io/) svg sprite
- Common components preset

## TODO

- add <https://github.com/vercel/next.js/tree/canary/examples/with-why-did-you-render>
- find a good PWA generator
- add .env checker
- Check code structure <https://github.com/yannvr/react-components-cli>

## Component export convention

We use `export default` in an component, see discussion here: <https://esdiscuss.org/topic/moduleimport>
