
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
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-white border-0 shadow-2xl">
        <DialogHeader className="border-b border-gray-100 pb-6">
          <div className="flex justify-between items-start">
            <DialogTitle className="font-bold text-3xl text-black">
              {project.title}
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-gray-500 hover:text-black"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="space-y-8 pt-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
          
          <div>
            <h3 className="font-bold text-2xl mb-4 text-black">Project Overview</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {project.details}
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-2xl mb-6 text-black">Technologies & Tools</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-3 bg-orange/10 text-orange rounded-lg font-semibold text-center hover:bg-orange/20 transition-colors duration-200"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4 pt-6 border-t border-gray-100">
            <Button 
              className="btn-primary flex items-center"
              onClick={() => window.open(project.liveUrl, '_blank')}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              View Live Site
            </Button>
            <Button 
              variant="outline" 
              className="btn-secondary flex items-center"
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              View Source Code
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
