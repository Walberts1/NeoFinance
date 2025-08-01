import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "NeoFinance connected us to the right investor in under a month. Our deal room made due diligence seamless.",
    author: "Sarah Mbeki",
    role: "CEO, AgriTech Solutions",
    type: "founder"
  },
  {
    quote: "As an angel, I found ventures that matched my interests and got transparent communication throughout.",
    author: "David Okafor",
    role: "Angel Investor",
    type: "funder"
  },
  {
    quote: "This is Africa's most founder-friendly investment portal - simple, secure and effective.",
    author: "Amara Kamara",
    role: "Founder, HealthTech Innovations",
    type: "founder"
  }
];

const SuccessStories = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Success Stories & Testimonials
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from founders and funders who've found success through our platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 bg-background border-2 hover:border-blue-violet/30">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-blue-violet mb-4" />
                  <p className="text-foreground text-lg leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="border-t pt-6">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${
                    testimonial.type === 'founder' 
                      ? 'bg-blue-violet/10 text-blue-violet' 
                      : 'bg-aqua-accent/10 text-aqua-accent'
                  }`}>
                    {testimonial.type === 'founder' ? 'Founder' : 'Funder'}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;