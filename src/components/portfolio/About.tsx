
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Server, Container, Network } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: Server, text: "Backend Engineering" },
    { icon: Network, text: "System Architecture" },
    { icon: Container, text: "DevOps & CI/CD" },
    { icon: Sparkles, text: "AI-Assisted Frontend" }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50 subtle-texture">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-black mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-orange mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Backend engineer and system architect
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 animate-slide-in-left">
              <Card className="bg-white shadow-2xl border-0 hover-scale">
                <CardContent className="p-6 md:p-10 lg:p-12">
                  <p className="text-base md:text-xl text-gray-700 leading-relaxed mb-6 md:mb-8 font-light">
                    I'm a <span className="font-semibold text-orange">Backend Engineer</span> who majors in
                    <span className="font-semibold text-orange"> backend development and system architecture</span>. I build with
                    <span className="font-semibold"> TypeScript, Node.js and Express.js</span> on PostgreSQL, MongoDB and Redis, designing
                    RBAC, state machines, audit trails and background jobs, and shipping with Docker, Nginx and GitHub Actions CI/CD.
                  </p>
                  <p className="text-base md:text-xl text-gray-700 leading-relaxed mb-8 md:mb-10 font-light">
                    For the frontend, I'm highly proficient with <span className="font-semibold text-orange">AI tools like Lovable and Claude</span>.
                    I use them to generate the frontend, then <span className="font-semibold">analyse the codebase</span>, fix workflow and role-gating
                    issues, and build the backend that powers it myself. That lets me spend my time where it matters most: the systems underneath.
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
