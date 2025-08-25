import { Button } from "@/components/ui/button";

const demoCards = [
  {
    type: "Hook Analysis",
    title: "\"POV: You didn't know this trick\"",
    metrics: {
      views: "2.1M",
      engagement: "12.4%",
      saves: "86K"
    },
    insight: "Questions + POV format = 94% higher engagement",
    color: "accent-pink",
    emoji: "🎯"
  },
  {
    type: "Format Breakdown", 
    title: "Story + Transformation",
    metrics: {
      usage: "847 posts",
      success: "78%",
      trending: "+156%"
    },
    insight: "Before/after content peaks at 7-9 PM",
    color: "accent-blue",
    emoji: "📊"
  },
  {
    type: "Trending Topic",
    title: "\"Things I wish I knew at 20\"",
    metrics: {
      posts: "1.2K",
      growth: "+245%",
      viral: "23%"
    },
    insight: "Life advice content viral rate: 23%",
    color: "accent-green", 
    emoji: "💡"
  }
];

const DemoSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Demo preview 🔍
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See exactly what insights you'll get. Real data, real results, real viral potential.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {demoCards.map((card, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="bg-card rounded-3xl p-6 card-hover group-hover:scale-105 transition-all duration-500 border border-primary/10">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-sm font-medium px-3 py-1 rounded-full bg-${card.color}/10 text-${card.color}`}>
                    {card.type}
                  </span>
                  <span className="text-2xl">{card.emoji}</span>
                </div>
                
                <h3 className="font-bold text-foreground mb-4 text-lg">
                  {card.title}
                </h3>
                
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {Object.entries(card.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-gradient">
                        {value}
                      </div>
                      <div className="text-xs text-muted-foreground capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className={`bg-${card.color}/5 rounded-xl p-3 border border-${card.color}/20`}>
                  <p className="text-sm font-medium text-foreground">
                    💡 {card.insight}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-gradient-secondary rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to see your full report? 📋
            </h3>
            <p className="text-white/90 mb-6">
              Get detailed breakdowns, competitor analysis, and personalized recommendations
            </p>
            <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
              See Full Sample Report 🚀
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;