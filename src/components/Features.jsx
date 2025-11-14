import { Shield, Zap, DollarSign, Globe, Lock, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Transactions",
    description: "Buy and sell gift cards in seconds. No waiting, no delays. Get your digital gift cards instantly delivered to your email.",
  },
  {
    icon: Shield,
    title: "100% Secure",
    description: "Bank-level encryption and security protocols protect every transaction. Your data and payments are always safe.",
  },
  {
    icon: DollarSign,
    title: "Best Rates",
    description: "Get the best rates in the market. We offer competitive prices for both buyers and sellers with transparent pricing.",
  },
  {
    icon: Globe,
    title: "Global Brands",
    description: "Access gift cards from thousands of popular brands worldwide. From gaming to shopping, we have it all.",
  },
  {
    icon: Lock,
    title: "Verified Sellers",
    description: "All sellers are verified and trusted. Every gift card is tested and guaranteed to work before delivery.",
  },
  {
    icon: TrendingUp,
    title: "24/7 Support",
    description: "Our support team is available around the clock to help you with any questions or issues you might have.",
  },
];

export function Features() {
  return (
    <section id="features" className="w-full py-24 md:py-32 bg-card/50">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Why Choose <span className="text-primary">Hell Market</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the best gift card marketplace with features designed for speed, security, and convenience.
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

