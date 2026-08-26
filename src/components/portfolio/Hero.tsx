
import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-4 md:left-10 w-12 md:w-20 h-12 md:h-20 border-2 border-orange/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-4 md:right-16 w-10 md:w-16 h-10 md:h-16 bg-orange/10 rounded-lg rotate-45 animate-bounce"></div>
      <div className="absolute top-1/3 right-4 md:right-20 w-8 md:w-12 h-8 md:h-12 border-2 border-black/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="section-padding w-full">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="flex justify-center items-center mb-6 flex-wrap gap-2">
              <Code className="w-6 h-6 md:w-8 md:h-8 text-orange" />
              <span className="text-orange font-semibold text-sm md:text-lg text-center">Software Engineer & Backend Specialist</span>
              <Zap className="w-6 h-6 md:w-8 md:h-8 text-orange" />
            </div>

            <h1 className="font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-black mb-6 md:mb-8 leading-tight">
              Hi, I'm <span className="text-gradient">Israel Adejare</span>
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light text-black mb-6 md:mb-8 leading-relaxed">
              I Build Software Solutions <br />
              <span className="font-semibold text-orange">That Scale</span>
            </h2>

            <p className="text-base md:text-xl lg:text-2xl text-gray-600 mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-light px-2">
              Creating responsive websites, scalable APIs, and engaging digital experiences
              that combine technical excellence with creative flair.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
            <a href="#contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="btn-primary text-base md:text-xl px-8 md:px-12 py-4 md:py-6 w-full"
              >
                Let's Work Together
              </Button>
            </a>
            <a href="#projects" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="btn-secondary text-base md:text-xl px-8 md:px-12 py-4 md:py-6 w-full"
              >
                Explore My Work
              </Button>
            </a>
          </div>

          <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 md:w-8 md:h-8 text-orange" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
