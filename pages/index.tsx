import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-2">
      <Head>
        <title>NextJS, Typescript, and Tailwind Preset</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-6 py-20 sm:px-0">
        <h1 className="flex flex-col items-center justify-center m-0 text-4xl text-center sm:text-7xl">
          <span>You are now using</span>
          <a href="#" className="mt-4 text-blue-500 no-underline hover:underline focus:underline">
            NextJS + Typescript + TailwindCSS!
          </a>
        </h1>

        <p className="mt-12 text-2xl text-center">
          Get started by editing{' '}
          <code className="p-2 text-lg rounded bg-gray-50">pages/index.tsx</code>
        </p>

        <div className="flex flex-wrap items-center justify-center max-w-3xl mt-12">
          <a
            href="https://nextjs.org/docs"
            className="max-w-xs p-6 m-4 text-left no-underline transition border border-gray-200 border-solid rounded-lg hover:text-blue-500 hover:border-blue-500"
          >
            <h3 className="mb-4 text-xl sm:text-2xl">NextJS Docs &rarr;</h3>
            <p className="m-0 text-xl">Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            href="https://www.typescriptlang.org/docs"
            className="max-w-xs p-6 m-4 text-left no-underline transition border border-gray-200 border-solid rounded-lg hover:text-blue-500 hover:border-blue-500"
          >
            <h3 className="mb-4 text-xl sm:text-2xl">TypeScript Docs &rarr;</h3>
            <p className="m-0 text-xl">Learn how to use TypeScript into your app.</p>
          </a>

          <a
            href="https://tailwindcss.com/docs"
            className="max-w-xs p-6 m-4 text-left no-underline transition border border-gray-200 border-solid rounded-lg hover:text-blue-500 hover:border-blue-500"
          >
            <h3 className="mb-4 text-xl sm:text-2xl">TailwindCSS Docs &rarr;</h3>
            <p className="m-0 text-xl">Learn more about TailwindCSS!</p>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t border-gray-200 border-solid">
        <a
          href="https://luigicruz.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          Made with ❤️ by{' '}
          <img
            src="https://luigicruz.dev/logo-soft.svg"
            alt="Luigi Controller Logo"
            className="w-6 h-6 ml-2"
          />
        </a>
      </footer>
    </div>
  )
}
