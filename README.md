<div align="center">
    <a href="https://chaplindev.com">
        <h1 align="center">chaplindev.com</h1>
    </a>

My personal website, built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and deployed to [Vercel](https://vercel.com/).
</div>

<br/>

## Running Locally

Use Node.js 24 (see `.nvmrc`) and pnpm 11.12 through Corepack:

```sh-session
nvm use
corepack enable
```

```sh-session
git clone https://github.com/frankdavidcorona/chaplin.dev.git
cd chaplindev.com
```

Experience and testimonial data is read directly from `store.json`.

Install dependencies and run the development server:

```sh-session
pnpm install --frozen-lockfile
pnpm dev
```

## Cloning / Forking

Please remove all of my personal information (projects, images, etc.) before deploying your own version of this site.
