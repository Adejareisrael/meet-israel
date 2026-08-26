
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Server, Palette, Globe, GitBranch, Figma } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["WordPress", "React", "HTML/CSS", "JavaScript", "Responsive Design", "UI Components"]
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: ["Node.js", "Express.js", "API Development", "Database Design", "Authentication & Security", "Server Management"]
    },
    {
      title: "Creative Tools",
      icon: Palette,
      skills: ["Blender", "3D Animation", "Visual Effects", "Motion Graphics", "Creative Design", "Asset Creation"]
    },
    {
      title: "Design & Tools",
      icon: Globe,
      skills: ["Figma", "UI/UX Design", "Git", "Version Control", "Project Management", "Testing"]
    }
  ];

  const technicalSkills = [
    { name: "WordPress", level: 95, icon: Globe },
    { name: "Node.js", level: 90, icon: Server },
    { name: "React", level: 85, icon: Code },
    { name: "Blender", level: 80, icon: Palette },
    { name: "Git", level: 88, icon: GitBranch },
    { name: "Figma", level: 75, icon: Figma }
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-gray-50">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-black mb-6">
              Skills & Tools
            </h2>
            <div className="w-24 h-1 bg-orange mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Technical expertise and creative tools that bring ideas to life
            </p>
          </div>

          {/* Skills Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-20">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                className="bg-white shadow-xl border-0 hover-scale group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-14 h-14 md:w-16 md:h-16 bg-orange/10 rounded-full flex items-center justify-center group-hover:bg-orange/20 transition-colors duration-300">
                    <category.icon className="w-7 h-7 md:w-8 md:h-8 text-orange" />
                  </div>
                  <CardTitle className="font-bold text-lg md:text-xl text-black">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 md:space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="px-3 py-2 bg-gray-50 text-black rounded-lg text-center text-sm md:text-base font-medium hover:bg-orange/10 hover:text-orange transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technical Proficiency */}
          <Card className="bg-white shadow-xl border-0">
            <CardHeader className="text-center">
              <CardTitle className="font-bold text-2xl md:text-3xl text-black mb-2 md:mb-4">
                Technical Proficiency
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {technicalSkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-3 md:space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2 md:space-x-3">
                        <skill.icon className="w-5 h-5 md:w-6 md:h-6 text-orange" />
                        <span className="font-semibold text-black text-base md:text-lg">{skill.name}</span>
                      </div>
                      <span className="text-orange font-bold text-base md:text-lg">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 md:h-3">
                      <div
                        className="bg-gradient-to-r from-orange to-orange-light h-2 md:h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.2}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
