
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, Github, X } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  details: string;
  liveUrl: string;
  githubUrl: string;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-5xl max-h-[90vh] overflow-y-auto bg-elevated border border-neon/20 shadow-2xl shadow-neon/10 p-0">
        <DialogHeader className="border-b border-neon/20 p-5 md:p-8 pb-5 md:pb-6">
          <div className="flex justify-between items-start gap-4">
            <DialogTitle className="font-bold text-xl md:text-3xl text-cyber-text leading-tight">
              {project.title}
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-cyber-muted hover:text-neon flex-shrink-0"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6 md:space-y-8 p-5 md:p-8">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 md:h-96 object-cover rounded-xl shadow-lg"
          />

          <div>
            <h3 className="font-bold text-xl md:text-2xl mb-3 md:mb-4 text-cyber-text">Project Overview</h3>
            <p className="text-cyber-text leading-relaxed text-base md:text-lg">
              {project.details}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl md:text-2xl mb-4 md:mb-6 text-cyber-text">Technologies & Tools</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className="px-3 py-2 md:px-4 md:py-3 bg-neon/5 border border-neon/20 text-neon rounded-lg font-semibold text-center text-sm md:text-base hover:bg-neon/10 transition-colors duration-200"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 md:pt-6 border-t border-neon/20">
            {project.liveUrl !== "#" && (
              <Button
                className="btn-primary flex items-center justify-center"
                onClick={() => window.open(project.liveUrl, '_blank')}
              >
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                View Live Site
              </Button>
            )}
            {project.githubUrl !== "#" && (
              <Button
                variant="outline"
                className="btn-secondary flex items-center justify-center"
                onClick={() => window.open(project.githubUrl, '_blank')}
              >
                <Github className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                View Source Code
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
