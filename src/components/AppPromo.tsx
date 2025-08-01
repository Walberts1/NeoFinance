import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Download, Bell, BarChart3 } from "lucide-react";

const AppPromo = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-hero text-white overflow-hidden relative">
            <CardContent className="p-12 md:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    The NeoFin App
                  </h2>
                  <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                    Get the NeoFin app on mobile or desktop for instant funding alerts, portfolio tracking, and secure chat.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <Bell className="w-6 h-6 mr-4 text-aqua-accent" />
                      <span className="text-lg">Instant funding alerts</span>
                    </div>
                    <div className="flex items-center">
                      <BarChart3 className="w-6 h-6 mr-4 text-aqua-accent" />
                      <span className="text-lg">Portfolio tracking</span>
                    </div>
                    <div className="flex items-center">
                      <Smartphone className="w-6 h-6 mr-4 text-aqua-accent" />
                      <span className="text-lg">Secure chat & messaging</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="cta" size="lg" className="bg-white text-navy-deep hover:bg-gray-100">
                      <Download className="w-5 h-5 mr-2" />
                      App Store
                    </Button>
                    <Button variant="outline-hero" size="lg" className="border-white text-white hover:bg-white hover:text-navy-deep">
                      <Download className="w-5 h-5 mr-2" />
                      Play Store
                    </Button>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="w-64 h-96 mx-auto bg-gradient-to-b from-white/20 to-white/10 rounded-3xl border border-white/30 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center">
                      <Smartphone className="w-24 h-24 mx-auto mb-4 text-aqua-accent animate-float" />
                      <p className="text-lg font-semibold">NeoFin App</p>
                      <p className="text-sm text-blue-100">Coming Soon</p>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-aqua-accent/20 rounded-full flex items-center justify-center animate-pulse">
                    <Bell className="w-8 h-8 text-aqua-accent" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-light/20 rounded-full flex items-center justify-center animate-bounce">
                    <BarChart3 className="w-6 h-6 text-blue-light" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AppPromo;