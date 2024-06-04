import Image from "next/image";
import Link from "next/link";
import "tailwindcss/tailwind.css";
// import "./globals.css";

export default function NotFound() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center content-container">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-7xl font-extrabold sm:text-9xl">OOPS!</h1>
          <strong className="font-extrabold text-red-700 sm:block heading">
            404 | page could not be found
          </strong>

          <p className="mt-4 sm:text-xl/relaxed text-sm">
            Sorry, the page you&#39;re looking for couldn&#39;t be found. It
            seems the link you followed might be broken or the page has been
            removed.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded hover:bg-secondary-400 px-12 py-3 text-sm text-white  hover:text-action-950 font-bold shadow bg-secondary-600 focus:outline-none focus:ring-secondary-300 focus:ring sm:w-auto"
              href="/"
            >
              Back Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
