import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "IdeaFile MERN App",
      description: "A responsive web application for capturing and organizing project ideas. Built with the MERN stack and deployed to Render with GitHub integration.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      status: "Deployed",
      type: "Full-Stack Web App",
      github: "https://github.com/VerdieCraig/IdeaFile",
      demo: "https://ideafile.onrender.com"
    },
    {
      title: "Finance Analyzer CLI",
      description: "A command-line tool for parsing and analyzing CSV files of financial transactions with robust error handling and data validation.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "CSV Processing", "Data Analysis"],
      status: "Completed",
      type: "CLI Application",
      github: "https://github.com/VerdieCraig/Smart-Personal-Finance-Analyzer"
    },
    {
      title: "RecipeBox MAUI App",
      description: "A cross-platform desktop and mobile application for managing personal recipes with full CRUD functionality and local storage.",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["C#", ".NET MAUI", "Blazor"],
      status: "Completed",
      type: "Cross-Platform App",
      github: "https://github.com/VerdieCraig/RecipeBoxXI"
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
                  className="w-full h-48 object-cover"
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
