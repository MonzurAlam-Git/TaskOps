import Link from "next/link";

export default async function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Project management for teams
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          TaskOps helps teams organize work, track progress, and ship faster.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/register"
            className="rounded-md bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
          >
            Get started
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            View pricing <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
