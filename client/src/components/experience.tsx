import { Card, CardContent } from "@/components/ui/card";

export default function Experience() {
  const experiences = [
    {
      title: "Junior Software Developer",
      company: "Self-Employed",
      period: "2025 - Present",
      type: "work",
      description: [
        "Designed and built full-stack and cross-platform applications",
        "Applied Agile principles and version control practices",
        "Continued learning in React, .NET MAUI, and MongoDB Atlas"
      ]
    },
    {
      title: "Geography Faculty Member",
      company: "Morehead State University",
      period: "2002 - 2025",
      type: "work",
      description: [
        "Taught in-person and online courses from general education to graduate level",
        "Mentored students and supervised research projects",
        "Led curriculum development and served in leadership roles"
      ]
    },
    {
      title: "Code Kentucky Certificate",
      company: "Software Development Pathway",
      period: "2025",
      type: "education",
      description: [
        "Completed comprehensive training in full-stack development, including modern frameworks and deployment practices."
      ]
    },
    {
      title: "PhD in Geography",
      company: "Rutgers University",
      period: "Rutgers University",
      type: "education",
      description: [
        "Advanced degree providing strong analytical and research skills that translate well to software development and problem-solving."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-primary"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center mb-8">
                {/* Timeline Dot */}
                <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg ${
                  exp.type === 'work' ? 'bg-primary' : 'bg-accent'
                }`}></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 ${
                  index % 2 === 0 
                    ? 'md:w-1/2 md:pr-8' 
                    : 'md:w-1/2 md:pl-8 md:ml-auto'
                }`}>
                  <Card className="bg-white shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <span className={`font-medium ${
                          exp.type === 'work' ? 'text-primary' : 'text-accent'
                        }`}>
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-slate-600 mb-2">{exp.company}</p>
                      <div className="text-slate-600 space-y-1">
                        {exp.description.map((desc, i) => (
                          <p key={i} className={exp.description.length > 1 ? "• " + desc : desc}>
                            {exp.description.length === 1 ? desc : desc}
                          </p>
                        ))}
                      </div>
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
