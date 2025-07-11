import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const menuItems = [
  {
    name: "The Classic Club",
    description: "Turkey, bacon, lettuce, tomato, mayo on artisan sourdough",
    price: "$14.99",
    category: "Signature"
  },
  {
    name: "Veggie Delight",
    description: "Roasted vegetables, hummus, sprouts on multigrain bread",
    price: "$12.99",
    category: "Vegetarian"
  },
  {
    name: "BBQ Brisket",
    description: "Slow-cooked brisket, coleslaw, pickles on brioche bun",
    price: "$16.99",
    category: "Signature"
  },
  {
    name: "Mediterranean",
    description: "Grilled chicken, feta, olives, cucumber on pita bread",
    price: "$13.99",
    category: "International"
  },
  {
    name: "Spicy Italian",
    description: "Salami, pepperoni, provolone, peppers on focaccia",
    price: "$15.99",
    category: "International"
  },
  {
    name: "Grilled Cheese Supreme",
    description: "Three cheeses, caramelized onions on buttery brioche",
    price: "$11.99",
    category: "Comfort"
  }
];

export function Menu() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Menu Preview
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get a taste of what's coming. These are just some of the delicious sandwiches 
            we'll be serving when we open our doors.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <Card key={index} className="hover:shadow-warm transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl text-foreground">{item.name}</CardTitle>
                  <span className="text-2xl font-bold text-primary">{item.price}</span>
                </div>
                <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full font-medium">
                  {item.category}
                </span>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            More delicious options coming soon! Follow us for the full menu reveal.
          </p>
        </div>
      </div>
    </section>
  );
}