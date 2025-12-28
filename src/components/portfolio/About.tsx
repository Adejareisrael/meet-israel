
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Server, Palette, Globe } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: Code2, text: "Responsive Web Development" },
    { icon: Server, text: "Backend API Development" },
    { icon: Palette, text: "3D Animation & Design" },
    { icon: Globe, text: "UI/UX Design" }
  ];

  return (
    <section id="about" className="py-32 bg-gray-50">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-bold text-5xl md:text-6xl text-black mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-orange mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate developer with a creative edge
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 animate-slide-in-left">
              <Card className="bg-white shadow-2xl border-0 hover-scale">
                <CardContent className="p-12">
                  <p className="text-xl text-gray-700 leading-relaxed mb-8 font-light">
                    I'm a <span className="font-semibold text-orange">Web Developer</span> skilled in building responsive and functional websites using 
                    <span className="font-semibold"> WordPress and Wix</span>. As a <span className="font-semibold text-orange">backend developer</span>, 
                    I specialize in <span className="font-semibold">Node.js</span> to build scalable and efficient APIs.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed mb-10 font-light">
                    I'm also proficient in creating <span className="font-semibold text-orange">3D animations with Blender</span>, 
                    fluent in English, and have a growing interest in <span className="font-semibold">UI/UX design</span>. 
                    I believe in crafting digital experiences that are both beautiful and functional.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {highlights.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-orange/5 rounded-lg">
                        <item.icon className="w-6 h-6 text-orange" />
                        <span className="text-sm font-medium text-black">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center animate-slide-in-right">
              <div className="relative">
                <div className="w-96 h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-orange">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&h=400"
                    alt="Developer Workspace"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange rounded-full animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 border-4 border-black rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
