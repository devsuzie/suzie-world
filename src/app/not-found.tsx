import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="grid min-h-full place-items-center px-6 py-48 lg:px-8 bg-white-gray">
      <div className="text-center">
        <p className="font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-7xl font-bold tracking-tight text-gray-900 font-daruma">
          Page not found
        </h1>
        <p className="mt-6 leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-blue-dark px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
}
