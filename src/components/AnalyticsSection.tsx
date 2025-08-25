const metrics = [
  {
    title: "Engagement Rate",
    value: "12.4%",
    change: "+34%",
    icon: "❤️",
    color: "accent-pink",
    description: "Likes, comments, saves combined"
  },
  {
    title: "Save-to-View Ratio", 
    value: "8.2%",
    change: "+127%",
    icon: "📌",
    color: "accent-orange",
    description: "The hidden gold metric"
  },
  {
    title: "Growth Velocity",
    value: "2.1M/hr",
    change: "+89%", 
    icon: "🚀",
    color: "accent-green",
    description: "How fast views pile up"
  },
  {
    title: "Format Frequency",
    value: "Hook+Story",
    change: "Trending",
    icon: "📈",
    color: "accent-blue", 
    description: "What structures are working"
  }
];

const AnalyticsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Analytics that matter 📈
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We track the metrics that actually predict viral success - not just vanity numbers
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 card-hover group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{metric.icon}</span>
                  <span className={`text-sm font-medium px-2 py-1 rounded-full bg-${metric.color}/10 text-${metric.color}`}>
                    {metric.change}
                  </span>
                </div>
                
                <h3 className="font-semibold text-foreground mb-2">
                  {metric.title}
                </h3>
                
                <div className="text-3xl font-bold text-gradient mb-2">
                  {metric.value}
                </div>
                
                <p className="text-sm text-muted-foreground">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="bg-card rounded-3xl p-8 card-hover">
            <h3 className="text-2xl font-bold text-center mb-8">
              Live Dashboard Preview 🎯
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Hook Performance</span>
                  <span className="text-accent-green font-bold">92% viral rate</span>
                </div>
                <div className="h-4 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-accent rounded-full" style={{ width: '92%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Format Trending</span>
                  <span className="text-accent-blue font-bold">Story + CTA</span>
                </div>
                <div className="h-4 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-secondary rounded-full" style={{ width: '78%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Best Time to Post</span>
                  <span className="text-accent-orange font-bold">7-9 PM EST</span>
                </div>
                <div className="h-4 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-primary rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/5 to-accent-pink/5 rounded-2xl p-6">
                <h4 className="font-bold mb-4 text-center">Top Viral Hooks This Week 🔥</h4>
                <div className="space-y-3">
                  <div className="bg-card rounded-lg p-3 flex items-center justify-between">
                    <span className="text-sm">"POV: You didn't know..."</span>
                    <span className="text-accent-green font-bold text-sm">2.1M views</span>
                  </div>
                  <div className="bg-card rounded-lg p-3 flex items-center justify-between">
                    <span className="text-sm">"Things I wish I knew..."</span>
                    <span className="text-accent-orange font-bold text-sm">1.8M views</span>
                  </div>
                  <div className="bg-card rounded-lg p-3 flex items-center justify-between">
                    <span className="text-sm">"Watch me transform..."</span>
                    <span className="text-accent-blue font-bold text-sm">1.5M views</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;