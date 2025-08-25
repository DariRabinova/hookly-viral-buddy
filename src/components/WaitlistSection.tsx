import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const WaitlistSection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Hookly Beta 🚀
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Be among the first to discover tomorrow's viral content. Early access opens next week!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-xl flex-1 h-12"
              />
              <Button variant="accent" size="lg" className="h-12 px-8 shrink-0">
                Join Beta ✨
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-2 text-white/80 mb-6">
              <span className="text-2xl">🪄</span>
              <span className="font-medium">First 100 users get Founding Member perks</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-white/70">
              <div className="flex items-center justify-center space-x-2">
                <span>🎁</span>
                <span>50% off lifetime</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span>⭐</span>
                <span>Priority support</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span>🔥</span>
                <span>Exclusive features</span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex items-center justify-center space-x-8 text-white/60">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">2,847</div>
              <div className="text-sm">Creators waiting</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">156</div>
              <div className="text-sm">Agencies signed up</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">12M+</div>
              <div className="text-sm">Posts analyzed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;