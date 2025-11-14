import { Search, ShoppingCart, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse & Search",
    description: "Search through thousands of gift cards from your favorite brands. Filter by category, value, or brand.",
  },
  {
    icon: ShoppingCart,
    title: "Purchase Instantly",
    description: "Add to cart and checkout securely. Your payment is processed instantly with multiple payment options.",
  },
  {
    icon: CheckCircle,
    title: "Receive & Use",
    description: "Get your gift card code delivered instantly via email. Use it immediately at your favorite store.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Get started in three simple steps. It's that easy!
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary border-2 border-primary/20">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-sm font-semibold text-primary">Step {index + 1}</span>
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground max-w-sm mx-auto">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

