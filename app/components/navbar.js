import Link from "next/link";
import { Button } from "@/app/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
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
        </div>
      </div>
    </nav>
  );
}
