import Link from "next/link"
import { Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="backdrop-blur-md bg-background/80 border-t border-white/10 py-12">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">@shawnmcrowley</h3>
          <p className="text-foreground/70 max-w-4xl mx-auto">Streamlining Your Development and Technical Sales Process, One Conversation At A Time.</p>
        </div>
        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-4">Connect</h4>
          <div className="flex justify-center space-x-4">
            <Link href="https://www.twitter.com/shawnmcrowley/" className="text-foreground/70 hover:text-foreground transition-colors">
              <Twitter className="h-6 w-6" />
            </Link>
             <Link href="https://www.linkedin.com/in/shawnmcrowley" className="text-foreground/70 hover:text-foreground transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-8 border-t border-white/10 text-center text-foreground/60">
        <p>&copy; 2025 @shawnmcrowley. All rights reserved.</p>
      </div>
    </footer>
  )
}
