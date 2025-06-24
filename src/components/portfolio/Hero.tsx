
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden parallax-bg">
      <div className="absolute inset-0 bg-gradient-to-br from-midnight via-midnight-light to-midnight opacity-90"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-gold/20 rounded-full animate-parallax"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 border border-gold/30 rounded-full animate-parallax" style={{ animationDelay: '-2s' }}></div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen section-padding">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="font-playfair font-black text-5xl md:text-7xl lg:text-8xl text-cream mb-6 leading-tight">
              Alex <span className="text-gradient">Morgan</span>
            </h1>
            <p className="text-xl md:text-2xl text-cream/80 mb-8 font-light">
              Full Stack Developer & Creative Technologist
            </p>
            <p className="text-lg text-cream/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              Crafting digital experiences that blend innovative technology with stunning design. 
              Specializing in React, Node.js, and modern web architectures.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-midnight font-semibold px-8 py-3 text-lg"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gold text-gold hover:bg-gold hover:text-midnight px-8 py-3 text-lg"
            >
              Download Resume
            </Button>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-8 h-8 text-gold" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
