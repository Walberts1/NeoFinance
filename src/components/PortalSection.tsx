import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Target } from "lucide-react";

const PortalSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Choose Your Path
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're seeking investment or looking to invest, our platform connects the right people at the right time.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Founders Portal */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-blue-violet/50 bg-gradient-to-br from-background to-muted/30">
            <CardContent className="p-8 md:p-12 text-center bg-blue-50/30">
              <div className="mb-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center group-hover:animate-pulse-glow">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  FOUNDERS
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Raise capital by pitching to qualified, growth-focused investors. Get mentoring, feedback, and global exposure—all in one place.
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-left">
                  <ArrowRight className="w-5 h-5 text-blue-violet mr-3 flex-shrink-0" />
                  <span className="text-foreground">Showcase opportunities</span>
                </div>
                <div className="flex items-center text-left">
                  <ArrowRight className="w-5 h-5 text-blue-violet mr-3 flex-shrink-0" />
                  <span className="text-foreground">Join deal rooms</span>
                </div>
                <div className="flex items-center text-left">
                  <ArrowRight className="w-5 h-5 text-blue-violet mr-3 flex-shrink-0" />
                  <span className="text-foreground">Track your funding journey</span>
                </div>
              </div>
              
              <Button variant="founder" size="lg" className="w-full group-hover:scale-105 transition-transform duration-300">
                Pitch Your Venture
              </Button>
            </CardContent>
          </Card>
          
          {/* Funders Portal */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-aqua-accent/50 bg-gradient-to-br from-background to-muted/30">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="mb-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-secondary rounded-full flex items-center justify-center group-hover:animate-pulse-glow">
                  <Target className="w-10 h-10 text-navy-deep" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  FUNDERS
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Access a curated flow of impact-driven ventures, filter by industry, size, or stage, and engage in data-rich deal rooms for smarter investing.
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-left">
                  <ArrowRight className="w-5 h-5 text-aqua-accent mr-3 flex-shrink-0" />
                  <span className="text-foreground">Unlock exclusive ventures</span>
                </div>
                <div className="flex items-center text-left">
                  <ArrowRight className="w-5 h-5 text-aqua-accent mr-3 flex-shrink-0" />
                  <span className="text-foreground">Set your appetite</span>
                </div>
                <div className="flex items-center text-left">
                  <ArrowRight className="w-5 h-5 text-aqua-accent mr-3 flex-shrink-0" />
                  <span className="text-foreground">Connect & close deals</span>
                </div>
              </div>
              
              <Button variant="funder" size="lg" className="w-full group-hover:scale-105 transition-transform duration-300">
                Discover Investments
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PortalSection;