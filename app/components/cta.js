import { Button } from "./ui/button"

export default function CTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto backdrop-blur-sm bg-background/20 border border-white/10 rounded-lg p-10 shadow-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Understand the Art of the Possible!</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-foreground/80">
              Reach Out To Connect
            </p>
            <Button size="lg" className="px-8 py-6 text-lg bg-primary hover:bg-primary/90 transition-all duration-300">
              Connect, it's fun to expand your network
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
