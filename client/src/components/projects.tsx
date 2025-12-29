import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Protein Tracker",
      description: "A mobile application for tracking daily protein and calorie intake with an intuitive interface for logging meals and monitoring nutritional goals.",
      image: "/attached_assets/protein_tracker_logo.png", 
      technologies: ["React Native", "Mobile Development", "UI/UX"],
      status: "Deployed to Google Play Store",
      type: "Mobile App",
      github: "https://github.com/VerdieCraig/protein-tracker",
      demo: "https://play.google.com/store/apps/details?id=com.darklotusdev.proteintracker"
    },
    {
      title: "Dark Lotus Website",
      description: "A business website featuring modern design, responsive layout, and clean navigation. Integrates backend functionality for contact form and consultation scheduling.",
      image: "/attached_assets/dark_lotus_screenshot.png",
      technologies: ["React", "Web Design", "Responsive"],
      status: "Deployed",
      type: "Business Website",
      github: "https://github.com/VerdieCraig/dark-lotus", 
      demo: "https://darklotus.dev/"
    },
    {
      title: "IdeaFile MERN App",
      description: "A responsive web application for capturing and organizing project ideas. Built with the MERN stack and deployed to Render with GitHub integration.",
      image: "/attached_assets/ideafile_screenshot.png",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      status: "Deployed",
      type: "Full-Stack Web App",
      github: "https://github.com/VerdieCraig/IdeaFile",
      demo: "https://ideafile.onrender.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="bg-slate-50 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <div className="flex space-x-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 hover:text-primary transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-600 hover:text-primary transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500">{project.type}</span>
                    <span className="text-sm text-emerald-600 font-medium">{project.status}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-primary hover:bg-secondary text-white px-8 py-3 font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <a href="https://github.com/VerdieCraig" target="_blank" rel="noopener noreferrer">
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}