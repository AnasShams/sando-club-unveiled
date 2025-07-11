import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-sandwiches.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-primary-foreground mb-6 tracking-tight">
          Sando Club
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Artisanal sandwiches crafted with passion. Coming soon to satisfy your cravings.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="xl" className="min-w-[200px]">
            Join the Waitlist
          </Button>
          <Button variant="outline" size="xl" className="min-w-[200px] bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
            View Menu
          </Button>
        </div>
        
        {/* Coming Soon Badge */}
        <div className="mt-12">
          <span className="inline-flex items-center px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold text-lg shadow-glow">
            🏗️ Opening Soon - Stay Tuned!
          </span>
        </div>
      </div>
    </section>
  );
}