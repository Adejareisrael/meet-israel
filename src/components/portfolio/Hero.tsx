
import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-orange/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-orange/10 rounded-lg rotate-45 animate-bounce"></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 border-2 border-black/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="section-padding w-full">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="flex justify-center items-center mb-6">
              <Code className="w-8 h-8 text-orange mr-3" />
              <span className="text-orange font-semibold text-lg">Web Developer & Backend Specialist</span>
              <Zap className="w-8 h-8 text-orange ml-3" />
            </div>
            
            <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl text-black mb-8 leading-tight">
              Hi, I'm <span className="text-gradient">Israel Adejare</span>
            </h1>
            
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-black mb-8 leading-relaxed">
              I Build Web Experiences <br />
              <span className="font-semibold text-orange">That Work</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Creating responsive websites, scalable APIs, and engaging digital experiences 
              that combine technical excellence with creative flair.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg" 
              className="btn-primary text-xl px-12 py-6"
            >
              Let's Work Together
            </Button>
            <Button 
              size="lg"
              className="btn-secondary text-xl px-12 py-6"
            >
              Explore My Work
            </Button>
          </div>
          
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-8 h-8 text-orange" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
