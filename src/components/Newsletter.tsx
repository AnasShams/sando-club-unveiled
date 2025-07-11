import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thanks for joining!",
        description: "You'll be the first to know when we open our doors.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-hero-gradient">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
          Stay in the Loop
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Be the first to know about our grand opening, special offers, and behind-the-scenes updates. 
          Join our sandwich-loving community!
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
            required
          />
          <Button type="submit" variant="accent" size="lg" className="whitespace-nowrap">
            Join Waitlist
          </Button>
        </form>
        
        <p className="text-sm text-primary-foreground/70 mt-4">
          No spam, just sandwich updates. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}