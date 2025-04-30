import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="backdrop-blur-md bg-background/80 border-t border-white/10 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">StreamLine</h3>
          <p className="text-foreground/70">Streamlining your workflow, one task at a time.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Product</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#features" className="text-foreground/70 hover:text-foreground transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="text-foreground/70 hover:text-foreground transition-colors">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                Integrations
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect</h4>
          <div className="flex space-x-4">
            <Link href="#" className="text-foreground/70 hover:text-foreground transition-colors">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-foreground/70 hover:text-foreground transition-colors">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-foreground/70 hover:text-foreground transition-colors">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-foreground/70 hover:text-foreground transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-white/10 text-center text-foreground/60">
        <p>&copy; 2025 StreamLine. All rights reserved.</p>
      </div>
    </footer>
  )
}
