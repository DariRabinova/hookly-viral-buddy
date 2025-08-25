import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-analytics.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-float">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Your AI buddy for viral hooks ✨
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Drop in the accounts you want to track, and Hookly will show you the hooks, formats, and ideas that will go viral next.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto animate-glow">
              Join Waitlist 🚀
            </Button>
            <Button variant="accent" size="lg" className="text-lg px-8 py-4 h-auto">
              See Demo
            </Button>
          </div>
          
          <div className="relative max-w-3xl mx-auto">
            <img
              src={heroImage}
              alt="Hookly analytics dashboard showing viral content insights"
              className="rounded-2xl shadow-2xl w-full h-auto card-hover"
            />
            <div className="absolute -top-4 -right-4 bg-accent-yellow text-black font-bold px-4 py-2 rounded-full shadow-lg animate-bounce">
              Find viral content in 60s! ⚡
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;