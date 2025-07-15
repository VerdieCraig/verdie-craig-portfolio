import { Card, CardContent } from "@/components/ui/card";
import { Code, Layers, Wrench, Database, GraduationCap, Users, Search, MessageCircle, CheckSquare, Puzzle, Users as UsersIcon } from "lucide-react";

export default function Skills() {
  const technicalSkills = [
    {
      title: "Languages",
      icon: <Code className="w-8 h-8 text-primary" />,
      skills: ["C#", "Python", "JavaScript", "SQL", "HTML/CSS"]
    },
    {
      title: "Frameworks",
      icon: <Layers className="w-8 h-8 text-primary" />,
      skills: [".NET MAUI", "Blazor Hybrid", "React", "Node.js", "Express"]
    },
    {
      title: "Tools",
      icon: <Wrench className="w-8 h-8 text-primary" />,
      skills: ["Git/GitHub", "Visual Studio", "VS Code", "PowerShell", "Git Bash"]
    },
    {
      title: "Databases",
      icon: <Database className="w-8 h-8 text-primary" />,
      skills: ["SQL Server", "MongoDB Atlas", "Entity Framework"]
    }
  ];

  const professionalSkills = [
    { title: "Teaching & Mentoring", icon: <GraduationCap className="w-6 h-6 text-primary" /> },
    { title: "Research & Analysis", icon: <Search className="w-6 h-6 text-primary" /> },
    { title: "Communication", icon: <MessageCircle className="w-6 h-6 text-primary" /> },
    { title: "Project Management", icon: <CheckSquare className="w-6 h-6 text-primary" /> },
    { title: "Problem Solving", icon: <Puzzle className="w-6 h-6 text-primary" /> },
    { title: "Team Leadership", icon: <UsersIcon className="w-6 h-6 text-primary" /> }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSkills.map((category) => (
              <Card key={category.title} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    {category.icon}
                    <h3 className="text-xl font-semibold mt-2">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-center text-slate-600">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Professional Skills */}
          <Card className="mt-12 bg-white shadow-md">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-center mb-6">Professional Skills</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {professionalSkills.map((skill) => (
                  <div key={skill.title} className="text-center p-4 bg-slate-50 rounded-lg">
                    {skill.icon}
                    <p className="font-medium mt-2">{skill.title}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
