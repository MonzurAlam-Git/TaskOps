/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { signIn } from "../../../../auth";

export default function SignInPage() {
  return (
    <div className="min-h-screen grid grid-cols-2">
      {/* Left panel */}
      <div className="bg-gray-50 border-r border-gray-200 p-12 flex flex-col justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <span className="text-base font-medium text-gray-900">TaskOps</span>
        </div>

        {/* Quote */}
        <div>
          <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
            "TaskOps cut our sprint planning from 2 hours to 20 minutes. Every
            team member always knows what's next."
          </p>
          <p className="text-xs text-gray-400 mt-4">
            Manzurul Alam · Engineering Lead, Novu
          </p>
        </div>

        {/* Stats */}
        <div className="flex gap-8">
          <div>
            <p className="text-xl font-medium text-gray-900">12k+</p>
            <p className="text-xs text-gray-400 mt-1">Teams worldwide</p>
          </div>
          <div>
            <p className="text-xl font-medium text-gray-900">98%</p>
            <p className="text-xs text-gray-400 mt-1">Retention rate</p>
          </div>
          <div>
            <p className="text-xl font-medium text-gray-900">4.9★</p>
            <p className="text-xs text-gray-400 mt-1">Average rating</p>
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex items-center justify-center p-12">
        <div className="w-full max-w-sm">
          <h1 className="text-xl font-medium text-gray-900">Welcome back</h1>
          <p className="text-sm text-gray-500 mt-1.5">
            Sign in to your workspace to continue.
          </p>

          {/* Google button */}
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <button className="mt-8 w-full flex items-center justify-center gap-2.5 px-4 py-2.5 border border-gray-200 rounded-lg bg-white text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors">
              <Image
                src="https://www.google.com/favicon.ico"
                alt="Google"
                width={18}
                height={18}
                className="w-4.5 h-4.5"
              />
              Continue with Google
            </button>
          </form>
          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Email field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-xs text-gray-600 mb-1.5"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="name@company.com"
              className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg bg-white text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
            />
          </div>

          {/* Password field */}
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block text-xs text-gray-600 mb-1.5"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg bg-white text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
            />
          </div>

          {/* Submit */}
          <button className="w-full py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors">
            Sign in
          </button>

          {/* Footer */}
          <p className="text-xs text-gray-400 text-center mt-6 leading-relaxed">
            Don't have an account?{" "}
            <a href="#" className="text-gray-600 underline underline-offset-2">
              Create one
            </a>
            <br />
            <a href="#" className="text-gray-600 underline underline-offset-2">
              Forgot your password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
