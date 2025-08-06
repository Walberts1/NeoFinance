
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-entrepreneurs.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="African entrepreneurs and investors" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-85"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="inline-block bg-gradient-text bg-clip-text text-transparent">
              Empowering Visionaries
            </span>
            <span className="block mt-2">
              <span className="inline-block bg-gradient-secondary bg-clip-text text-transparent">
                Connecting Capital
              </span>
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Where Africa's founders and investors meet, collaborate and fuel tomorrow's innovators.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button variant="cta" size="xl" className="w-full sm:w-auto animate-float">
              Get Funded
            </Button>
            <Button variant="cta" size="xl" className="w-full sm:w-auto">
              Invest Now
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
