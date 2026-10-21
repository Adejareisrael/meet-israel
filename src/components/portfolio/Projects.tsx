
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
      description: "Combined CRM and ticketing platform for a telematics company, used by 50+ people and processing 100+ tickets per week",
      image: "/project-screenshots/gambus-energy-crm.png",
      technologies: ["TypeScript", "Node.js", "Express.js", "MongoDB", "JWT", "RBAC", "React (AI-generated)"],
      details: "Built the TypeScript (Node.js, Express) and MongoDB backend for a combined CRM and ticketing platform used by 50+ people at Gambus Energy, processing 100+ tickets per week and linking each ticket to its customer record. Enforced SLA deadlines on the server with overdue detection and escalation, and modelled the ticket lifecycle with state rules that reject invalid status changes. Secured it with JWT authentication, bcrypt password hashing and role-based access control, with every ticket and customer change recorded in an append-only audit trail. The React frontend was generated with AI tools; I analysed the codebase and connected it to the backend I designed and built.",
      liveUrl: "https://gambus-crm.vercel.app/",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Ecobus Data Centre",
      description: "Unified data centre for 4 departments at Ecobus Transport, replacing spreadsheet and WhatsApp-based reporting",
      image: "/project-screenshots/ecobus-data-centre.png",
      technologies: ["TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker", "GitHub Actions", "Render", "Lovable (frontend)"],
      details: "Designed and built a unified data centre in TypeScript (Node.js, Express) and PostgreSQL for Ecobus Transport's Financials, Operations, Management and Administration departments, replacing spreadsheet and WhatsApp-based reporting and cutting daily reporting turnaround by an average of 7 hours. The backend automates daily reports from 10 terminals with profit/loss calculated per terminal and company-wide, runs payroll and staff records for 100+ staff, tracks 71 vehicles through a repair approval workflow, and blocks duplicate repair requests. PostgreSQL is partitioned to keep queries lean as the system scales, alerts run as background jobs on Redis, and the main database is backed up to both Cloudflare and Backblaze buckets, giving two independent off-site copies. Access is enforced with RBAC, JWT, OAuth 2.0 and bcrypt. The React frontend was generated with Lovable and customised by me, and the system deploys with Docker, Nginx and PM2 through GitHub Actions CI/CD on Vercel and Render, with UptimeRobot keeping the Render server responsive.",
      liveUrl: "https://datacentre.ecobusoperations.com/",
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
      title: "WitExpress Creative Agency",
      description: "Official agency website and backend systems for managing clients, projects and creative strategies",
      image: "/project-screenshots/creative-agency.png",
      technologies: ["Lovable (frontend)", "3D Animations", "Node.js", "Express.js", "SQL"],
      details: "As Technical Consultant for WitExpress, I designed a centralized database to manage an average of 200 clients, projects and creative strategies, with schema design and validation to keep the data accurate. Built backend services to track client engagement, campaign strategies and execution history, and optimized SQL queries to cut API response time by 40% on high-volume endpoints. Also built the agency's official website with Lovable, featuring custom 3D animations, responsive interfaces and backend logic for dynamic content and service listings.",
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
      description: "This portfolio, built with AI tools and refined by hand",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Lovable", "Claude"],
      details: "The site you're on. I generated the React and TypeScript frontend with Lovable, then used Claude to analyse and refine the codebase: restyling, restructuring content and keeping projects and skills up to date. It's a small example of how I work: AI tools for a fast, polished frontend, so my own engineering time goes into backends and system architecture.",
      liveUrl: "https://www.meet-israel.me/",
      githubUrl: "#"
    },
    {
      id: 8,
      title: "Gambus Energy Sim Management Portal",
      description: "SIM stock inventory and request system tracking 500+ SIMs for a telematics company",
      image: "/project-screenshots/gambus-sim-portal.png",
      technologies: ["TypeScript", "Node.js", "Express.js", "MongoDB", "State Machines", "OpenAPI", "Lovable (frontend)"],
      details: "Built the TypeScript backend that tracks 500+ SIMs and handles SIM requests, modelling the SIM lifecycle as a state machine so a SIM can only move between valid states. Designed a two-factor handover for replacements: a replacement is only issued once the damaged SIM is physically returned, confirmed by a passcode that automatically records receipt. Added strict RBAC for 10 users, a lost/stolen flow and an admin override with mandatory audit logging. The React frontend started from a Lovable AI-generated base, which I analysed and customised to fix workflow deviations, role-gating and UI issues. The API is documented with OpenAPI, covered by unit and integration tests, and deployed through GitHub Actions CI/CD.",
      liveUrl: "https://simportal.gambusenergycrm.com/technician",
      githubUrl: "#"
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
    <section id="projects" className="py-20 md:py-32 bg-white subtle-texture">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-black mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-orange mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              A showcase of my latest work in web development and creative solutions
            </p>
          </div>

          {/* Project Slider Controls */}
          <div className="flex justify-center items-center mb-8 md:mb-12 space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-orange text-orange hover:bg-orange hover:text-white"
              onClick={() => scroll('left')}
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </Button>
            <span className="text-gray-500 font-medium text-sm md:text-base">Swipe or use arrows to navigate</span>
            <Button
              variant="outline"
              size="icon"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-orange text-orange hover:bg-orange hover:text-white"
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
                className="group w-[280px] sm:w-[340px] md:w-[400px] flex-shrink-0 flex flex-col bg-white shadow-xl border-0 overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-2xl"
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
                        className="bg-orange hover:bg-orange-dark text-white text-xs md:text-sm"
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
                        className="border-white text-white hover:bg-white hover:text-black text-xs md:text-sm"
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
                  <h3 className="font-bold text-lg md:text-2xl text-black mb-3 md:mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 md:px-3 py-1 bg-orange/10 text-orange text-xs md:text-sm font-medium rounded-full"
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
