import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import hellLogo from "@/assets/hellLogo.png";

export function Header() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <img src={hellLogo} alt="Hell Market" className="h-8 w-auto" />
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            HELL MARKET
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
        </nav>
        <Button 
          variant="default" 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
          onClick={() => navigate("/signin")}
        >
          Get Started
        </Button>
      </div>
    </header>
  );
}

