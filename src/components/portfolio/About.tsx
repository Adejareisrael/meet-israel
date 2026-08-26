
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Server, Palette, Globe } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: Code2, text: "Full-Stack Development" },
    { icon: Server, text: "Backend & API Architecture" },
    { icon: Palette, text: "3D Animation & Design" },
    { icon: Globe, text: "Scalable System Design" }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-black mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-orange mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate engineer building scalable solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 animate-slide-in-left">
              <Card className="bg-white shadow-2xl border-0 hover-scale">
                <CardContent className="p-6 md:p-10 lg:p-12">
                  <p className="text-base md:text-xl text-gray-700 leading-relaxed mb-6 md:mb-8 font-light">
                    I'm a <span className="font-semibold text-orange">Software Engineer</span> passionate about building robust, scalable systems and
                    crafting clean, maintainable code. I specialize in <span className="font-semibold text-orange">backend development</span> with
                    <span className="font-semibold"> Node.js</span>, designing efficient APIs and architecting solutions that grow with business needs.
                  </p>
                  <p className="text-base md:text-xl text-gray-700 leading-relaxed mb-8 md:mb-10 font-light">
                    Beyond engineering, I bring creativity through <span className="font-semibold text-orange">3D animations with Blender</span> and
                    have a keen eye for <span className="font-semibold">user experience</span>.
                    I believe great software balances technical excellence with intuitive design.
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {highlights.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2 md:space-x-3 p-2 md:p-3 bg-orange/5 rounded-lg">
                        <item.icon className="w-5 h-5 md:w-6 md:h-6 text-orange flex-shrink-0" />
                        <span className="text-xs md:text-sm font-medium text-black">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="order-1 lg:order-2 flex justify-center animate-slide-in-right">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-orange">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&h=400"
                    alt="Developer Workspace"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-16 h-16 md:w-24 md:h-24 bg-orange rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-10 h-10 md:w-16 md:h-16 border-4 border-black rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
