import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Solo",
    price: "$29",
    period: "/month", 
    description: "Perfect for individual creators",
    features: [
      "5 accounts to track",
      "Daily hook reports",
      "Basic analytics",
      "Email support",
      "Mobile app access"
    ],
    color: "accent-orange",
    popular: false,
    emoji: "🎨"
  },
  {
    name: "Team", 
    price: "$149",
    period: "/month",
    description: "For agencies & content teams", 
    features: [
      "50 accounts to track",
      "Real-time notifications",
      "PDF report exports",
      "Team collaboration",
      "Priority support",
      "Custom branding"
    ],
    color: "primary",
    popular: true,
    emoji: "🚀"
  },
  {
    name: "Pro",
    price: "$399", 
    period: "/month",
    description: "Enterprise-grade insights",
    features: [
      "Unlimited accounts",
      "API access",
      "Competitor matrix",
      "White-label reports",
      "Dedicated manager",
      "Custom integrations"
    ],
    color: "accent-pink",
    popular: false,
    emoji: "⭐"
  }
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Future Pricing 💵
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing when we launch. Join the waitlist now for free early access!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group ${plan.popular ? 'scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-bold z-10">
                  Most Popular 🔥
                </div>
              )}
              
              <div className={`bg-card rounded-3xl p-8 card-hover group-hover:scale-105 transition-all duration-500 border-2 ${plan.popular ? 'border-primary shadow-2xl' : 'border-transparent'}`}>
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{plan.emoji}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {plan.description}
                  </p>
                  
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gradient">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-1">
                      {plan.period}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="text-accent-green mr-3">✅</span>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "hero" : "outline"} 
                  size="lg" 
                  className="w-full"
                >
                  {plan.popular ? "Join Waitlist 🚀" : "Join Waitlist"}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Join the waitlist now for free early access • No payment required
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <span>🔒</span>
            <span>SSL encrypted</span>
            <span>•</span>
            <span>💳</span>
            <span>Cancel anytime</span>
            <span>•</span>
            <span>📱</span>
            <span>Mobile & desktop</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;