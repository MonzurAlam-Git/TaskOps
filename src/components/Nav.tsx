import Link from "next/link";

export default function Nav() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="font-semibold text-gray-900">
          TaskOps
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link
            href="/pricing"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Pricing
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/auth/signIn"
            className="text-sm font-medium text-gray-900 hover:underline"
          >
            Sign in
          </Link>
          <Link
            href="/register"
            className="rounded-md bg-gray-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-800"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
