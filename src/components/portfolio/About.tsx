
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-cream dark:bg-midnight-light">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-midnight dark:text-cream mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Card className="bg-white/50 dark:bg-midnight/50 border-gold/20 shadow-2xl hover-scale">
                <CardContent className="p-8">
                  <p className="text-lg text-midnight/80 dark:text-cream/80 leading-relaxed mb-6">
                    With over 5 years of experience in full-stack development, I specialize in creating 
                    scalable web applications that deliver exceptional user experiences. My passion lies 
                    in the intersection of technology and design.
                  </p>
                  <p className="text-lg text-midnight/80 dark:text-cream/80 leading-relaxed mb-6">
                    I believe in writing clean, maintainable code and staying up-to-date with the latest 
                    technologies. When I'm not coding, you'll find me exploring new design trends, 
                    contributing to open-source projects, or enjoying a good cup of coffee.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Problem Solver", "Creative Thinker", "Team Player", "Continuous Learner"].map((trait) => (
                      <span
                        key={trait}
                        className="px-4 py-2 bg-gold/20 text-midnight dark:text-cream rounded-full text-sm font-medium"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gold shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&h=400"
                    alt="Alex Morgan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-gold rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-gold rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
