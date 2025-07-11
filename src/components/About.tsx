export function About() {
  return (
    <section className="py-20 bg-warm-gradient">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Welcome to Sando Club, where every sandwich tells a story. Founded by passionate food lovers 
                Maria Santos and Jake Thompson, our mission is to revolutionize the way you think about sandwiches.
              </p>
              <p>
                After years of perfecting recipes in their home kitchen and traveling the world to discover 
                unique flavor combinations, Maria and Jake decided to bring their vision to life. From artisanal 
                breads baked fresh daily to locally-sourced ingredients, every element is carefully chosen.
              </p>
              <p>
                We believe that a great sandwich is more than just a meal—it's comfort, creativity, and 
                community all wrapped up in one delicious package.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 shadow-warm">
              <h3 className="text-2xl font-bold text-foreground mb-4">Meet the Founders</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                    M
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Maria Santos</h4>
                    <p className="text-muted-foreground">Head Chef & Co-Founder</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl">
                    J
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Jake Thompson</h4>
                    <p className="text-muted-foreground">Operations & Co-Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}