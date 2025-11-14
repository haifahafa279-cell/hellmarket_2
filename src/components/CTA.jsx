import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  const navigate = useNavigate();

  return (
    <section className="w-full py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent" />
      <div className="container relative z-10 px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center space-y-8 rounded-2xl border border-primary/20 bg-card/50 backdrop-blur p-12 md:p-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers buying and selling gift cards on Hell Market. 
            Start your journey today!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-6"
              onClick={() => navigate("/signin")}
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8 py-6 border-primary/20 hover:bg-primary/10 hover:border-primary/40">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

