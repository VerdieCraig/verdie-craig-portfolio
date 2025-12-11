import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Software Developer",
      company: "Dark Lotus",
      period: "Nov 2025 - Present",
      type: "work",
      description: [
        "Developing and publishing mobile applications, including a protein tracker in Google Play closed testing",
        "Managing the full product lifecycle from requirements and design through development, testing, and deployment"
      ]
    },
    {
      title: "Generative AI Pathway Certificate",
      company: "Code Kentucky",
      period: "Oct 2025",
      type: "education",
      description: [
        "Completed a project-based program focused on modern generative AI tools, workflows, and integration into software development"
      ]
    },
    {
      title: "Junior Software Developer",
      company: "Self-Employed",
      period: "Mar 2025 - Oct 2025",
      type: "work",
      description: [
        "Designed and built full-stack and cross-platform applications, including a finance CLI tool, recipe manager, and idea-tracking web app",
        "Deployed applications to the cloud using Git/GitHub and Agile practices with an emphasis on testing and maintainability"
      ]
    },
    {
      title: "Software Development Pathway Certificate",
      company: "Code Kentucky",
      period: "Apr 2025",
      type: "education",
      description: [
        "Completed comprehensive training in full-stack development, including modern frameworks, databases, and deployment practices"
      ]
    },
    {
      title: "Geography Faculty Member",
      company: "Morehead State University",
      period: "Aug 2002 - Jul 2025",
      type: "work",
      description: [
        "Taught in-person and online courses and mentored students across undergraduate and graduate levels",
        "Led curriculum development, coordinated academic programs, and contributed to institutional leadership"
      ]
    },
    {
      title: "PhD & MS in Geography",
      company: "Rutgers University",
      period: "Completed",
      type: "education",
      description: [
        "Advanced graduate training that developed strong analytical, research, and problem-solving skills applicable to software engineering"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Education and Experience</h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-primary/30"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center mb-12 last:mb-0">
                {/* Timeline Dot with Icon */}
                <div
                  className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center ${
                    exp.type === "work" ? "bg-primary" : "bg-accent"
                  }`}
                >
                  {exp.type === "work" ? (
                    <Briefcase className="w-5 h-5 text-white" />
                  ) : (
                    <GraduationCap className="w-5 h-5 text-white" />
                  )}
                </div>
                
                {/* Content */}
                <div
                  className={`ml-20 md:ml-0 ${
                    index % 2 === 0
                      ? "md:w-1/2 md:pr-12"
                      : "md:w-1/2 md:pl-12 md:ml-auto"
                  }`}
                >
                  <Card className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-800 mb-1">{exp.title}</h3>
                          <p className="text-primary font-semibold">{exp.company}</p>
                        </div>
                        <Badge 
                          variant="secondary" 
                          className={`ml-2 ${
                            exp.type === "work" 
                              ? "bg-primary/10 text-primary" 
                              : "bg-accent/10 text-accent"
                          }`}
                        >
                          {exp.period}
                        </Badge>
                      </div>
                      
                      <ul className="space-y-2 mt-4">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="flex items-start text-slate-600">
                            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}