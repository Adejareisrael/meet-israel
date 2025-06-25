
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Server, Palette, Globe, GitBranch, Figma } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["WordPress", "Wix", "HTML/CSS", "JavaScript", "Responsive Design", "UI Components"]
    },
    {
      title: "Backend Development", 
      icon: Server,
      skills: ["Node.js", "Express.js", "API Development", "Database Design", "Authentication", "Server Management"]
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
    { name: "Wix", level: 85, icon: Code },
    { name: "Blender", level: 80, icon: Palette },
    { name: "Git", level: 88, icon: GitBranch },
    { name: "Figma", level: 75, icon: Figma }
  ];

  return (
    <section id="skills" className="py-32 bg-gray-50">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-bold text-5xl md:text-6xl text-black mb-6">
              Skills & Tools
            </h2>
            <div className="w-24 h-1 bg-orange mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Technical expertise and creative tools that bring ideas to life
            </p>
          </div>
          
          {/* Skills Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                className="bg-white shadow-xl border-0 hover-scale group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center group-hover:bg-orange/20 transition-colors duration-300">
                    <category.icon className="w-8 h-8 text-orange" />
                  </div>
                  <CardTitle className="font-bold text-xl text-black">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="px-4 py-2 bg-gray-50 text-black rounded-lg text-center font-medium hover:bg-orange/10 hover:text-orange transition-all duration-200 cursor-default"
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
              <CardTitle className="font-bold text-3xl text-black mb-4">
                Technical Proficiency
              </CardTitle>
            </CardHeader>
            <CardContent className="p-12">
              <div className="grid md:grid-cols-2 gap-8">
                {technicalSkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <skill.icon className="w-6 h-6 text-orange" />
                        <span className="font-semibold text-black text-lg">{skill.name}</span>
                      </div>
                      <span className="text-orange font-bold text-lg">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-orange to-orange-light h-3 rounded-full transition-all duration-1000 ease-out"
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
