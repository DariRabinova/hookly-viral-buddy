const steps = [
  {
    emoji: "👀",
    title: "Add accounts",
    description: "Simply paste the Instagram, TikTok, or YouTube accounts you want to track. No complicated setup required!"
  },
  {
    emoji: "📊", 
    title: "AI analyzes posts",
    description: "Our AI examines engagement rates, saves, growth velocity, and identifies winning patterns in seconds."
  },
  {
    emoji: "🎯",
    title: "Get actionable insights",
    description: "Receive a snack-sized report with top hooks, trending formats, and exactly why they work."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How it works 🛠️
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to discovering tomorrow's viral content
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="bg-card rounded-3xl p-8 text-center card-hover group-hover:scale-105 transition-all duration-500">
                <div className="text-6xl mb-6 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                  {step.emoji}
                </div>
                
                <div className="flex items-center justify-center mb-4">
                  <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                    {index + 1}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground">
                    {step.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-4xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;