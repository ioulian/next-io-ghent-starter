# next-io-ghent-starter kit (Next.js v13)

This is a [Next.js](https://nextjs.org/) starter kit created to be used as a
template to start new projects in iO Ghent campus. The idea behind is that you
can directly start on working on your project instead of setting up Next.js
first.

It contains a lot of useful presets and common components to be used in your
project. Using latest technologies and dev tools we allow developers to focus on
the project first.

## Features

- "Full" Typescript: All project code is written in Typescript where possible.
- Translations: Allow using intellisense (with TS) for translations and custom
  scripts to check if translations are complete
- GTM: Automatic tracking of page views when GTM_ID is provided
- Styling using [styled-components](https://styled-components.com/)
- [SWR](https://swr.vercel.app/)
- Favicons: Manual usage with provided helpers. (Use
  <https://realfavicongenerator.net/> with <https://maskable.app/editor>)
- Avif/webm conversion of images (Provided by Next.js)
- SEO with provided helpers + [Sitemap](https://www.npmjs.com/package/next-sitemap)
- Bundle analyser (Provided by Next.js)
- [NVM](https://github.com/nvm-sh/nvm) preset
- .env variables (Provided by Next.js)
- PWA ready (Using [next-pwa](https://www.npmjs.com/package/next-pwa))
- REDUX with server hydration ([next-redux-wrapper](https://www.npmjs.com/package/next-redux-wrapper)). Can keep state in cookies ([next-redux-cookie-wrapper](https://www.npmjs.com/package/next-redux-cookie-wrapper))
- JWT Auth starter kit (Preset utilities)
- [SVG Sprites](https://www.npmjs.com/package/svg-sprite-loader) (Custom or with
  [Tabler icons](https://tabler-icons.io/))
- Font optimisation (Provided by Next.js)
- [Storybook](https://github.com/storybookjs/storybook) with a11y checks,
  styled-components theme support, i18next support and Next.js support.
- Common components preset (with a11y in mind): <https://ioulian.github.io/next-io-ghent-starter/>
- [Why Did You Render](https://github.com/welldone-software/why-did-you-render)
  included (but disabled by default).
- Auto injection of `<link rel="alternate" />` for different languages (does not
  support translated routes)

## Getting Started

### Install

```bash
yarn create next-app --example https://github.com/ioulian/next-io-ghent-starter
yarn dev
```

### Remove demo content

- Remove content from `pages/index.tsx` and `pages/serverside.tsx`
- Remove `src/features/counter` (also from `src/store/store.ts`) and `src/components/Demo.ts`

## Go live checklist

- `.env`
- `next-seo.config.js`
- `next-i18next.config.js`
- `src/lib/page-head.tsx` and make sure the favicons are all regenerated. Make
  sure "short_name" in `public/site.webmanifest` is <= 12 chars
- `.gitignore` Generated files should be enabled if no build step exists
- (Optional) You can use [JSON-LD](https://github.com/garmeeh/next-seo#json-ld) from next-seo bundle
- Sharp version can be upgraded to newer one. To support old OSX versions we
  use older version.

## Redux

If you want to use redux on the server (authentication for example), you'll need
to convert your app to use SSR on every page where you want to use redux. You'll
want to enable cookie storage for select redux values (in `src/store/store.ts`).

If you want to use redux, but with SSG, you should remove HYDRATION from slices.

## JWT Auth

If you want to use JWT Auth presets, you'll need to use SSR and use AuthFetcher
in `pages/_app.tsx`.

## Build

On build step, we run some basic production checks. You should disable them if
they are not needed.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub
repository](https://github.com/vercel/next.js/) - your feedback and
contributions are welcome!

## Issues/TODO's

Issues and TODO's can be found here: <https://github.com/ioulian/next-io-ghent-starter/issues>

## Component export convention

We use `export default` in an component, see discussion here: <https://esdiscuss.org/topic/moduleimport>
