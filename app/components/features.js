import { CheckCircle, Zap, Users, TrendingUp } from "lucide-react"

const features = [
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "Application Development",
    description: "Custom Software Develop with all platforms in mind; Cloud, Desktop, Mobile. CI/CD Delivery with or without Containerization",
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Solution Engineering",
    description: "Build and Grow Your Solution Engineering/Technical Sales Organization to Focus on Discovery and Qualification of Technical Solution Opportunities.  It's NOT Just Demo's.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Sales Enablement and Customer Success",
    description: "Focus On Full Solution Implementation and Up-Sell/Cross Sell Strategies.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Strategy + Execution + Metrics",
    description: "What Are You Going to Do, How Are You Going to Do It, And When to Measure It.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="backdrop-blur-sm bg-background/20 border border-white/10 p-6 rounded-lg shadow-lg hover:bg-background/30 transition-all duration-300"
            >
              <div className="mb-4 text-primary">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
