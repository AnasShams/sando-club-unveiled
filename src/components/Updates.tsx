import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Hammer, MapPin, Clock } from "lucide-react";

const updates = [
  {
    date: "January 2025",
    title: "Construction Begins!",
    description: "We've officially broken ground on our new location. The excitement is real!",
    icon: Hammer,
    status: "completed"
  },
  {
    date: "February 2025",
    title: "Interior Design Phase",
    description: "Working with local designers to create the perfect atmosphere for sandwich lovers.",
    icon: MapPin,
    status: "in-progress"
  },
  {
    date: "March 2025",
    title: "Kitchen Installation",
    description: "Our state-of-the-art kitchen equipment is being installed. Fresh bread, here we come!",
    icon: Clock,
    status: "upcoming"
  },
  {
    date: "April 2025",
    title: "Grand Opening!",
    description: "The moment we've all been waiting for. Sando Club opens its doors to the community!",
    icon: Calendar,
    status: "upcoming"
  }
];

export function Updates() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Construction Updates
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow our journey from blueprint to your favorite sandwich spot. 
            We're building something special!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {updates.map((update, index) => {
            const Icon = update.icon;
            return (
              <Card 
                key={index} 
                className={`transition-all duration-300 hover:shadow-warm ${
                  update.status === 'completed' ? 'border-accent bg-accent/5' :
                  update.status === 'in-progress' ? 'border-primary bg-primary/5' :
                  'border-muted bg-background'
                }`}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className={`p-3 rounded-full ${
                      update.status === 'completed' ? 'bg-accent text-accent-foreground' :
                      update.status === 'in-progress' ? 'bg-primary text-primary-foreground' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">{update.title}</CardTitle>
                      <p className="text-sm text-muted-foreground font-medium">{update.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide ${
                      update.status === 'completed' ? 'bg-accent text-accent-foreground' :
                      update.status === 'in-progress' ? 'bg-primary text-primary-foreground' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {update.status === 'completed' ? '✓ Complete' :
                       update.status === 'in-progress' ? '🔄 In Progress' :
                       '📅 Upcoming'}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {update.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}