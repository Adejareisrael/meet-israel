
import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with Node.js backend and responsive frontend",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400",
      technologies: ["WordPress", "Node.js", "API Integration", "Responsive Design"],
      details: "Built a comprehensive e-commerce platform featuring custom WordPress development, Node.js backend API, payment gateway integration, and mobile-responsive design. Implemented advanced product filtering, user authentication, and order management systems.",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Creative Agency Website",
      description: "Modern agency website with 3D animations and interactive elements",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=400",
      technologies: ["Wix", "Blender", "Custom Animations", "UI/UX"],
      details: "Designed and developed a stunning creative agency website using Wix with custom 3D animations created in Blender. Features include smooth scroll animations, interactive project showcases, and optimized performance across all devices.",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "API Management Dashboard",
      description: "Backend dashboard for API monitoring and analytics",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400",
      technologies: ["Node.js", "Express", "MongoDB", "Real-time Analytics"],
      details: "Developed a comprehensive API management dashboard with real-time monitoring, analytics, and user management. Built with Node.js and Express, featuring WebSocket connections for live updates and comprehensive API documentation.",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Interactive Portfolio",
      description: "Creative portfolio with 3D elements and smooth animations",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400",
      technologies: ["WordPress", "Blender", "Custom CSS", "Figma"],
      details: "Created an interactive portfolio website featuring 3D animated elements, smooth transitions, and creative layouts. Designed in Figma and developed with custom WordPress themes, showcasing both technical and creative capabilities.",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-32 bg-white">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-bold text-5xl md:text-6xl text-black mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-orange mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A showcase of my latest work in web development and creative solutions
            </p>
          </div>
          
          {/* Project Slider Controls */}
          <div className="flex justify-center items-center mb-12 space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-2 border-orange text-orange hover:bg-orange hover:text-white"
              onClick={() => scroll('left')}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <span className="text-gray-500 font-medium">Swipe or use arrows to navigate</span>
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-2 border-orange text-orange hover:bg-orange hover:text-white"
              onClick={() => scroll('right')}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
          
          {/* Horizontal Scroll Container */}
          <div 
            ref={scrollRef}
            className="flex space-x-8 overflow-x-auto scrollbar-hide pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="group min-w-[400px] bg-white shadow-xl border-0 hover-scale overflow-hidden cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-4">
                    <Button
                      size="sm"
                      className="bg-orange hover:bg-orange-dark text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Site
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white text-white hover:bg-white hover:text-black"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <h3 className="font-bold text-2xl text-black mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-orange/10 text-orange text-sm font-medium rounded-full"
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
