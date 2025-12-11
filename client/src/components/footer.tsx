import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Verdie Craig</h3>
            <p className="text-slate-300">Full-Stack Software Developer</p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/VerdieCraig"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/verdie-craig/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:craigverdie@gmail.com"
              className="text-slate-300 hover:text-white transition-colors"
            >
              <Mail size={28} />
            </a>
          </div>
          
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400">
              © 2025 Verdie Craig. Built with passion for clean code and user experience.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
