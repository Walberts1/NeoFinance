import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  PieChart, 
  CreditCard, 
  Coins, 
  TrendingUp, 
  Users, 
  Building2,
  ArrowRight 
} from "lucide-react";
import fundingBg from "@/assets/funding-models-bg.jpg";

const fundingModels = [
  {
    title: "Fractional Ownership",
    description: "Invest or raise funds by selling shares in property, businesses, or assets. Lower entry, better liquidity, shared returns.",
    icon: PieChart,
    gradient: "from-blue-violet to-blue-light"
  },
  {
    title: "Seller Finance",
    description: "Enable direct deals - founders and buyers agree to flexible terms, digital contracts, lower friction - bank-free.",
    icon: CreditCard,
    gradient: "from-blue-light to-aqua-accent"
  },
  {
    title: "DeFi & Crypto Lending",
    description: "Borrow, lend or invest using digital assets. Fast, borderless, regulated and transparent.",
    icon: Coins,
    gradient: "from-aqua-accent to-blue-violet"
  },
  {
    title: "Revenue-Based Funding",
    description: "Grow now, repay as you earn via revenue-share. No equity dilution, perfect for scale-ups and SMEs.",
    icon: TrendingUp,
    gradient: "from-blue-violet to-aqua-accent"
  },
  {
    title: "Peer-to-Peer & Crowd Lending",
    description: "Funders pool capital to back vetted ventures and entrepreneurs. Diversified risk, community-powered returns.",
    icon: Users,
    gradient: "from-blue-light to-blue-violet"
  },
  {
    title: "Traditional & Hybrid Models",
    description: "Classic term loans, working capital, or custom funding models - digitized for speed and auditability.",
    icon: Building2,
    gradient: "from-aqua-accent to-blue-light"
  }
];

const FundingModels = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={fundingBg} 
          alt="Funding models background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 to-muted/90"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Our Funding Models
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Choose from diverse funding options designed to meet every stage of your venture's growth journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {fundingModels.map((model, index) => {
            const IconComponent = model.icon;
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 bg-background/80 backdrop-blur-sm border-2 hover:border-blue-violet/30">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${model.gradient} rounded-full flex items-center justify-center group-hover:animate-float`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-blue-violet transition-colors duration-300">
                    {model.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {model.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Info Note */}
        <div className="bg-blue-violet/10 border-l-4 border-blue-violet rounded-lg p-6 mb-8 max-w-4xl mx-auto">
          <p className="text-foreground text-center leading-relaxed">
            <strong>All our models</strong> are underpinned by strict compliance, transparent terms and mobile-first efficiency, inspiring confidence for both founders and funders.
          </p>
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="lg" className="group">
            Explore All Models
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FundingModels;