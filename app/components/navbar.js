"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-3xl font-black bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-lg hover:scale-105 transition-transform duration-200"
            >
              Prime
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-8">
                <Link
                  href="/doc/docs/intro"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Articles
                </Link>
                <Link
                  href="/doc/blog/"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Blog
                </Link>
                <Link
                  href="https://github.com/shawnmcrowley/"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Projects
                </Link>
                <Link
                  href="https://www.linkedin.com/in/shawnmcrowley"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Bio
                </Link>
              </div>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/90 backdrop-blur-md border-t border-white/10">
              <Link
                href="/doc/docs/intro"
                className="block px-3 py-2 text-base text-gray-300 hover:text-white hover:bg-white/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Articles
              </Link>
              <Link
                href="/doc/blog/"
                className="block px-3 py-2 text-base text-gray-300 hover:text-white hover:bg-white/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="https://github.com/shawnmcrowley/"
                className="block px-3 py-2 text-base text-gray-300 hover:text-white hover:bg-white/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="https://www.linkedin.com/in/shawnmcrowley"
                className="block px-3 py-2 text-base text-gray-300 hover:text-white hover:bg-white/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Bio
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
