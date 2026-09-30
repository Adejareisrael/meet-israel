
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Server, Globe, GitBranch, Container, Database } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["React", "HTML/CSS", "JavaScript", "Responsive Design", "UI Components"]
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: ["Node.js", "Express.js", "API Development", "MongoDB", "Database Design", "Authentication & Security", "Server Management", "Performance Optimization"]
    },
    {
      title: "DevOps Tools",
      icon: Container,
      skills: ["Vercel", "Render", "Redis", "CI/CD", "Docker", "Cloud Deployment"]
    },
    {
      title: "Design Tools & Testing",
      icon: Globe,
      skills: ["Figma", "Postman", "Git", "Version Control", "Project Management", "Testing"]
    }
  ];

  const technicalSkills = [
    { name: "Node.js", level: 85, label: "Advanced", icon: Server },
    { name: "React", level: 80, label: "Proficient", icon: Code },
    { name: "Express.js", level: 85, label: "Advanced", icon: Server },
    { name: "MongoDB", level: 80, label: "Proficient", icon: Database },
    { name: "Redis", level: 75, label: "Proficient", icon: Database },
    { name: "Docker", level: 75, label: "Proficient", icon: Container },
    { name: "Git", level: 88, label: "Advanced", icon: GitBranch }
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-cyber subtle-texture">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-cyber-text mb-6">
              Skills & Tools
            </h2>
            <div className="w-24 h-1 neon-underline mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-cyber-muted max-w-2xl mx-auto">
              Technical expertise and creative tools that bring ideas to life
            </p>
          </div>

          {/* Skills Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-20">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                className="cyber-card hover-scale group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-14 h-14 md:w-16 md:h-16 bg-neon/5 border border-neon/20 rounded-full flex items-center justify-center group-hover:bg-neon/10 transition-colors duration-300">
                    <category.icon className="w-7 h-7 md:w-8 md:h-8 text-neon" />
                  </div>
                  <CardTitle className="font-bold text-lg md:text-xl text-cyber-text">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 md:space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="px-3 py-2 bg-cyber border border-neon/20 text-cyber-text rounded-lg text-center text-sm md:text-base font-medium hover:bg-neon/10 hover:text-neon transition-all duration-200 cursor-default"
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
          <Card className="cyber-card">
            <CardHeader className="text-center">
              <CardTitle className="font-bold text-2xl md:text-3xl text-cyber-text mb-2 md:mb-4">
                Technical Proficiency
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {technicalSkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-3 md:space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2 md:space-x-3">
                        <skill.icon className="w-5 h-5 md:w-6 md:h-6 text-neon" />
                        <span className="font-semibold text-cyber-text text-base md:text-lg">{skill.name}</span>
                      </div>
                      <span className="text-neon font-bold text-sm md:text-base">{skill.label}</span>
                    </div>
                    <div className="w-full bg-cyber rounded-full h-2 md:h-3 border border-neon/20">
                      <div
                        className="bg-gradient-to-r from-neon to-neon-2 h-2 md:h-3 rounded-full transition-all duration-1000 ease-out"
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
