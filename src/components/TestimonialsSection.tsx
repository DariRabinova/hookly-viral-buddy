const benefits = [
  {
    icon: "⏰",
    title: "No more endless scrolling", 
    description: "Stop wasting hours browsing for inspiration. Get curated viral content delivered to you.",
    gradient: "from-accent-orange to-accent-pink"
  },
  {
    icon: "📊",
    title: "Data tells me what's hot — I just create",
    description: "Focus on creating amazing content while we handle the trend analysis and research.",
    gradient: "from-accent-blue to-primary"
  },
  {
    icon: "🕐",
    title: "10+ hours saved weekly",
    description: "Creators report saving 10-15 hours per week on content research and planning.",
    gradient: "from-accent-green to-accent-blue"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why creators love it ❤️
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of creators who've supercharged their content strategy
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative bg-card rounded-3xl p-8 card-hover group-hover:scale-105 transition-all duration-500 border border-primary/10">
                <div className="text-5xl mb-6 text-center animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                  {benefit.icon}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                  "{benefit.title}"
                </h3>
                
                <p className="text-muted-foreground text-center leading-relaxed">
                  {benefit.description}
                </p>
                
                <div className="flex justify-center mt-6">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent-yellow text-lg">⭐</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-white text-xl md:text-2xl font-semibold mb-4">
              "Hookly helped me go from 10K to 100K followers in 2 months! 🚀"
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                👩‍💼
              </div>
              <div className="text-white/90">
                <div className="font-medium">Sarah Chen</div>
                <div className="text-sm">@contentqueen • 127K followers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;