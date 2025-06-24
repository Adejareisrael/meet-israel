
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      details: "Built a comprehensive e-commerce platform with user authentication, payment processing, inventory management, and admin dashboard. Implemented responsive design and optimized for performance.",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400",
      technologies: ["Vue.js", "Firebase", "WebSocket", "Tailwind"],
      details: "Developed a real-time collaborative task management application with drag-and-drop functionality, team collaboration features, and real-time notifications.",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "AI Analytics Dashboard",
      description: "Data visualization platform with machine learning insights",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&h=400",
      technologies: ["React", "Python", "TensorFlow", "D3.js"],
      details: "Created an advanced analytics dashboard that processes large datasets and provides AI-powered insights through interactive visualizations and predictive models.",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-midnight">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-midnight dark:text-cream mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
            <p className="text-lg text-midnight/70 dark:text-cream/70 max-w-2xl mx-auto">
              A showcase of my recent work, highlighting my expertise in modern web development and design.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="group bg-cream/50 dark:bg-midnight-light/50 border-gold/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover-scale overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-midnight/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      onClick={() => setSelectedProject(project)}
                      className="bg-gold hover:bg-gold/90 text-midnight font-semibold"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="font-playfair text-xl text-midnight dark:text-cream">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-midnight/70 dark:text-cream/70 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gold/20 text-midnight dark:text-cream text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
