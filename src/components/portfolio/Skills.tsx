
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js", "Angular"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "Express.js", "Django", "GraphQL", "REST APIs"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Supabase"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Jest", "Webpack", "Figma"]
    }
  ];

  const tools = [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 88 },
    { name: "Python", level: 85 },
    { name: "AWS", level: 82 },
    { name: "Docker", level: 78 }
  ];

  return (
    <section id="skills" className="py-20 bg-cream dark:bg-midnight-light">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-midnight dark:text-cream mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
            <p className="text-lg text-midnight/70 dark:text-cream/70 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels.
            </p>
          </div>
          
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                className="bg-white/50 dark:bg-midnight/50 border-gold/20 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="font-playfair text-xl text-midnight dark:text-cream text-center">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="px-3 py-2 bg-gold/10 text-midnight dark:text-cream rounded-lg text-center font-medium hover:bg-gold/20 transition-colors duration-200"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Proficiency Bars */}
          <Card className="bg-white/50 dark:bg-midnight/50 border-gold/20 shadow-lg">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl text-midnight dark:text-cream text-center">
                Proficiency Levels
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {tools.map((tool, index) => (
                  <div key={tool.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-midnight dark:text-cream">{tool.name}</span>
                      <span className="text-sm text-midnight/70 dark:text-cream/70">{tool.level}%</span>
                    </div>
                    <div className="w-full bg-gold/20 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-gold to-gold-light h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${tool.level}%`,
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
