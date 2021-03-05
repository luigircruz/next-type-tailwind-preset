import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen px-2 flex flex-col justify-center items-center">
      <Head>
        <title>NextJS, Typescript, and Tailwind Preset</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-6 py-20 sm:px-0 flex flex-col flex-1 justify-center items-center">
        <h1 className="m-0 text-4xl sm:text-7xl flex flex-col justify-center items-center text-center">
          <span>You are now using</span>
          <a href="#" className="text-blue-500 no-underline hover:underline focus:underline mt-4">
            NextJS + Typescript + TailwindCSS!
          </a>
        </h1>

        <p className="text-2xl mt-12 text-center">
          Get started by editing{' '}
          <code className="bg-gray-50 rounded p-2 text-lg">pages/index.tsx</code>
        </p>

        <div className="flex justify-center items-center flex-wrap max-w-3xl mt-12">
          <a
            href="https://nextjs.org/docs"
            className="m-4 p-6 text-left no-underline border border-solid border-gray-200 rounded-lg transition hover:text-blue-500 hover:border-blue-500 max-w-xs"
          >
            <h3 className="mb-4 text-xl sm:text-2xl">NextJS Docs &rarr;</h3>
            <p className="m-0 text-xl">Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            href="https://tailwindcss.com/docs"
            className="m-4 p-6 text-left no-underline border border-solid border-gray-200 rounded-lg transition hover:text-blue-500 hover:border-blue-500 max-w-xs"
          >
            <h3 className="mb-4 text-xl sm:text-2xl">TailwindCSS Docs &rarr;</h3>
            <p className="m-0 text-xl">Learn more about TailwindCSS!</p>
          </a>
        </div>
      </main>

      <footer className="w-full h-24 border-t border-solid border-gray-200 flex justify-center items-center">
        <a
          href="https://luigicruz.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center"
        >
          Made with ❤️ by{' '}
          <img
            src="https://luigicruz.dev/logo-soft.svg"
            alt="Luigi Controller Logo"
            className="ml-2 w-6 h-6"
          />
        </a>
      </footer>
    </div>
  )
}
