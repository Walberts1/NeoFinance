const AboutSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              About NeoFinance – Our Magic Offering
            </h2>
          </div>
          
          <div className="space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">NeoFinance</strong> brings together the best of modern venture funding. Through our digital marketplace, we make it easy for founders to pitch verified investors, and for funders to discover high-value businesses, solopreneurs, innovators, SMEs poised for growth.
            </p>
            
            <p>
              Our <strong className="text-blue-violet">Tech-driven deal rooms</strong>, <strong className="text-aqua-accent">powerful matching engine</strong> and <strong className="text-blue-light">compliance support</strong> unlock funding for sectors ranging from fintech and agritech, to health, logistics, property and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;