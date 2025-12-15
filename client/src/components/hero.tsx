import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Professional headshot */}
          <div className="w-40 h-40 rounded-full mx-auto mb-8 overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="/attached_assets/portfoliopic.jpg"
              alt="Verdie Craig - Professional Headshot"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
            Hi, I'm Verdie Craig
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Full-Stack Software Developer delivering reliable, maintainable applications through clean architecture and thoughtful design
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-secondary text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("projects")}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300"
            >
              View My Work
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/VerdieCraig"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-primary transition-colors text-2xl"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/verdie-craig/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-primary transition-colors text-2xl"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:craigverdie@gmail.com"
              className="text-slate-600 hover:text-primary transition-colors text-2xl"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
