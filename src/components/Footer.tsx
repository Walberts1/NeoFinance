import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Linkedin, 
  Twitter, 
  MessageCircle, 
  Mail, 
  Download 
} from "lucide-react";

const Footer = () => {
  const navigationLinks = [
    { label: "About", href: "#about" },
    { label: "Founders", href: "#founders" },
    { label: "Funders", href: "#funders" },
    { label: "Funding Models", href: "#funding-models" },
    { label: "Resources", href: "#resources" },
    { label: "Contact", href: "#contact" }
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms & Conditions", href: "#terms" }
  ];

  return (
    <footer className="bg-navy-deep text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="bg-gradient-text bg-clip-text text-transparent">
                  NeoFinance
                </span>
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed max-w-md">
                Building better businesses and brighter futures together.
              </p>
            </div>
            
            {/* App Download */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">Get the NeoFin App</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline-hero" size="sm" className="w-full sm:w-auto">
                  <Download className="w-4 h-4 mr-2" />
                  App Store
                </Button>
                <Button variant="outline-hero" size="sm" className="w-full sm:w-auto">
                  <Download className="w-4 h-4 mr-2" />
                  Play Store
                </Button>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-aqua-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Connect With Us</h4>
            <div className="flex space-x-4 mb-8">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-aqua-accent hover:bg-aqua-accent/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-blue-light hover:bg-blue-light/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-aqua-accent hover:bg-aqua-accent/10">
                <MessageCircle className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-blue-light hover:bg-blue-light/10">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
            
            <div>
              <h5 className="text-sm font-semibold mb-3 text-gray-400">Legal</h5>
              <ul className="space-y-2">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-sm text-gray-400 hover:text-gray-200 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <Separator className="my-12 bg-gray-600" />
        
        <div className="text-center">
          <p className="text-gray-400">
            © 2024 NeoFinance. All rights reserved. Building Africa's innovation ecosystem.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;