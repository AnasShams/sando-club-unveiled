import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Find Us Soon
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're setting up shop in the heart of downtown. Here's where you'll find us 
            when we're ready to serve you the best sandwiches in town.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center hover:shadow-warm transition-all duration-300">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl">Location</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                123 Main Street<br />
                Downtown District<br />
                City, State 12345
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-warm transition-all duration-300">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-accent-foreground" />
              </div>
              <CardTitle className="text-xl">Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Coming Soon!<br />
                Expected Hours:<br />
                Mon-Sat: 8AM-8PM<br />
                Sun: 9AM-6PM
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-warm transition-all duration-300">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <Phone className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl">Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                (555) 123-SANDO<br />
                <span className="text-sm text-muted-foreground/80">
                  Available after opening
                </span>
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-warm transition-all duration-300">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-accent-foreground" />
              </div>
              <CardTitle className="text-xl">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                hello@sandoclub.com<br />
                <span className="text-sm text-muted-foreground/80">
                  We'd love to hear from you!
                </span>
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}