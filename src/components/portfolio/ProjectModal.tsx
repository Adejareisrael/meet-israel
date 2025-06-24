
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-cream dark:bg-midnight border-gold/20">
        <DialogHeader>
          <DialogTitle className="font-playfair text-2xl text-midnight dark:text-cream">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-80 object-cover rounded-lg"
          />
          
          <div>
            <h3 className="font-semibold text-lg mb-2 text-midnight dark:text-cream">Project Overview</h3>
            <p className="text-midnight/80 dark:text-cream/80 leading-relaxed">
              {project.details}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3 text-midnight dark:text-cream">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gold/20 text-midnight dark:text-cream rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4 pt-4 border-t border-gold/20">
            <Button className="bg-gold hover:bg-gold/90 text-midnight font-semibold">
              View Live Site
            </Button>
            <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-midnight">
              View Code
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
