// This is the correct and complete code for components/site-header.tsx//
'use client';
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold text-text-primary hover:text-accent transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5} // Use curly braces for number props
              stroke="currentColor"
              className="w-8 h-8 text-accent"
            >
              <path
                strokeLinecap="round"   // Use camelCase for JSX props
                strokeLinejoin="round"  // Use camelCase for JSX props
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.553L16.5 21.75l-.398-1.197a3.375 3.375 0 00-2.455-2.456L12.75 18l1.197-.398a3.375 3.375 0 002.455-2.456L16.5 14.25l.398 1.197a3.375 3.375 0 002.456 2.456L20.25 18l-1.197.398a3.375 3.375 0 00-2.455 2.456z"
              />
            </svg>
            <span>X-models</span>
          </Link>

          <nav className="rounded-full px-4 py-2 shadow-skeuo-sm bg-base-100">
            <Link
              href="/"
              className="text-text-secondary hover:text-text-primary transition-colors font-medium"
            >
              Discover Models
            </Link>
          </nav>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-base-300 to-transparent"></div>
    </header>
  );
}

//```*(I have also corrected the JSX syntax for props like `stroke - width` to `strokeWidth` and `stroke - linecap` to `strokeLinecap`, which would have caused the next set of errors.)*
//This code is a clean, complete, and syntactically correct translation of the header from your prototype. Replacing the broken code with this will fix the parsing error.
