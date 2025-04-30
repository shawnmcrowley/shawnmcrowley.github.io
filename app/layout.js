import "./globals.css"
import { Inter } from "next/font/google"
import MouseMoveEffect from "./components/mouse-move-effect"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Prime Consulting - Cutting-Edge Software Solutions",
  description: "Prime Consulting delivers innovative, high-performance software solutions for businesses of the future.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <MouseMoveEffect />
        {children}
      </body>
    </html>
  )
}
