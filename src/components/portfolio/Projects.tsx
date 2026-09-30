
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
      title: "Gambus Energy CRM",
      description: "Customer relationship management platform built for a telematics company to streamline client and fleet operations",
      image: "/project-screenshots/gambus-energy-crm.png",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      details: "Designed and developed a full-featured CRM platform tailored for Gambus, a telematics company, enabling the team to manage client records, track interactions, and monitor fleet and sales pipelines. Built a responsive React and Tailwind CSS frontend with a Node.js and Express.js API backed by MongoDB, including role-based access control and real-time dashboard analytics.",
      liveUrl: "https://gambus-crm.vercel.app/",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Ecobus Financial Dashboard",
      description: "Financial analytics dashboard for Ecobus providing real-time insights into revenue, expenses, and business performance",
      image: "/project-screenshots/ecobus-financial-dashboard.png",
      technologies: ["React", "TypeScript", "BigQuery", "Charts", "Vite"],
      details: "Built a comprehensive financial dashboard for Ecobus with React and TypeScript, using BigQuery data and Vite to deliver real-time visibility into key financial metrics including revenue tracking, expense management, and performance analytics. Features interactive charts, filterable data tables, and a clean responsive UI designed for quick decision-making.",
      liveUrl: "https://ecobus-financial-bot.vercel.app/",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Table of Kings Catering Services",
      description: "Professional catering services website showcasing menus, events, and booking for a premium catering brand",
      image: "/project-screenshots/table-of-kings.png",
      technologies: ["React", "Tailwind CSS", "Vite"],
      details: "Designed and developed a modern website for Table of Kings Catering Services with React, Tailwind CSS, and Vite, featuring an elegant layout to showcase their menu offerings, event gallery, and service packages. Built for a fully responsive experience across all devices.",
      liveUrl: "https://tableof-kings-nvwi.vercel.app/",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Personalized Content Recommendation Engine",
      description: "User engagement platform focused on personalized book recommendations and growth tracking",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&h=400",
      technologies: ["Node.js", "REST API"],
      details: "Collaborated with a development team to build a user engagement platform using Node.js and REST APIs, focused on personalized book recommendations and growth tracking. Engineered the backend infrastructure to ingest and manage user data, implementing algorithmic logic to tailor content suggestions to individual user profiles. Designed scalable API endpoints and data models to support future content expansion and detailed user reporting. Translated high-level organizational goals into functional technical requirements, ensuring the final build met stakeholder expectations.",
      liveUrl: "#",
      githubUrl: "https://github.com/Marvis111/rcfbackend"
    },
    {
      id: 5,
      title: "Creative Agency Website",
      description: "Modern agency website with 3D animations and interactive elements",
      image: "/project-screenshots/creative-agency.png",
      technologies: ["React", "Nodejs", "Expressjs"],
      details: "Designed and developed a stunning creative agency website using Wix with custom 3D animations created in Blender. Features include smooth scroll animations, interactive project showcases, and optimized performance across all devices.",
      liveUrl: "https://witexpress.vercel.app/",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Product CRUD API",
      description: "RESTful API for product management with full CRUD operations",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400",
      technologies: ["Node.js", "Express", "MongoDB", "REST API", "Swagger"],
      details: "Built a robust Node.js and Express REST API with MongoDB for complete product management, featuring Create, Read, Update, and Delete operations. Includes authentication, input validation, error handling, pagination, and comprehensive API documentation with Swagger.",
      liveUrl: "#",
      githubUrl: "https://github.com/Adejareisrael/simple-API"
    },
    {
      id: 7,
      title: "Interactive Portfolio",
      description: "Creative portfolio with 3D elements and smooth animations",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400",
      technologies: ["React", "Typescript", "Custom CSS", "Figma"],
      details: "Created an interactive portfolio website featuring 3D animated elements, smooth transitions, and creative layouts. Designed in Figma and developed with custom WordPress themes, showcasing both technical and creative capabilities.",
      liveUrl: "https://www.meet-israel.me/",
      githubUrl: "#"
    },
    {
      id: 8,
      title: "Gambus Energy Sim Management Portal",
      description: "A web portal for managing SIM cards and telematics devices for a fleet management company",
      image: "/project-screenshots/gambus-sim-portal.png",
      technologies: ["React", "TypeScript", "Custom CSS", "Node.js", "Express.js", "MongoDB"],
      details: "Developed a comprehensive React and TypeScript web portal with custom CSS, Node.js and Express.js APIs, and MongoDB for managing SIM cards and telematics devices. The platform includes user authentication, device management, data visualization, and reporting capabilities, with a modern stack designed for a robust and scalable solution.",
      liveUrl: "https://simportal.gambusenergycrm.com/technician",
      githubUrl: "https://github.com/Adejareisrael/Gambus_Sim_Portal"
  }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-cyber subtle-texture">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-cyber-text mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 neon-underline mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-cyber-muted max-w-2xl mx-auto">
              A showcase of my latest work in web development and creative solutions
            </p>
          </div>

          {/* Project Slider Controls */}
          <div className="flex justify-center items-center mb-8 md:mb-12 space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full neon-outline"
              onClick={() => scroll('left')}
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </Button>
            <span className="text-cyber-muted font-medium text-sm md:text-base">Swipe or use arrows to navigate</span>
            <Button
              variant="outline"
              size="icon"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full neon-outline"
              onClick={() => scroll('right')}
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </Button>
          </div>

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollRef}
            className="flex items-stretch space-x-4 md:space-x-8 overflow-x-auto scrollbar-hide pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="group w-[280px] sm:w-[340px] md:w-[400px] flex-shrink-0 flex flex-col cyber-card overflow-hidden cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-3 md:space-x-4">
                    {project.liveUrl !== "#" && (
                      <Button
                        size="sm"
                        className="neon-outline text-xs md:text-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.liveUrl, '_blank');
                        }}
                      >
                        <ExternalLink className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                        Live Site
                      </Button>
                    )}
                    {project.githubUrl !== "#" && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-neon text-neon hover:bg-neon hover:text-cyber text-xs md:text-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, '_blank');
                        }}
                      >
                        <Github className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                        Code
                      </Button>
                    )}
                  </div>
                </div>

                <CardContent className="p-5 md:p-8 flex flex-col flex-1">
                  <h3 className="font-bold text-lg md:text-2xl text-cyber-text mb-3 md:mb-4">
                    {project.title}
                  </h3>
                  <p className="text-cyber-muted mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 md:px-3 py-1 bg-neon/5 border border-neon/20 text-neon text-xs md:text-sm font-medium rounded-full"
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
