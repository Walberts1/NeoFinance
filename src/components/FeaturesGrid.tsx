import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  MessageSquare, 
  Brain, 
  BookOpen, 
  Smartphone 
} from "lucide-react";

const features = [
  {
    title: "Verified Members",
    description: "All users fully KYC/AML screened—building trust from day one.",
    icon: Shield,
    color: "text-blue-violet"
  },
  {
    title: "Deal Rooms",
    description: "Secure, data-rich workspaces for due diligence, messaging, and negotiations.",
    icon: MessageSquare,
    color: "text-aqua-accent"
  },
  {
    title: "Smart Matching",
    description: "AI-driven recommendations for both founders and funders based on sector, stage, and appetite.",
    icon: Brain,
    color: "text-blue-light"
  },
  {
    title: "Educational Hub",
    description: "Resource center and guides for funders, founders, and first-time investors.",
    icon: BookOpen,
    color: "text-blue-violet"
  },
  {
    title: "Mobile & Desktop Ready",
    description: "Responsive layout, progressive web app, instant notifications.",
    icon: Smartphone,
    color: "text-aqua-accent"
  }
];

const FeaturesGrid = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Why Choose Us
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Features at a glance – everything you need for successful venture funding.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-background to-muted/30 border-2 hover:border-blue-violet/30">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:animate-float">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-blue-violet transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;