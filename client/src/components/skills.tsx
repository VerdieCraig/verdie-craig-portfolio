import { Card, CardContent } from "@/components/ui/card";
import { Code, Layers, Wrench, Database, GraduationCap, Search, MessageCircle, CheckSquare, Puzzle, Users as UsersIcon } from "lucide-react";

export default function Skills() {
  const technicalSkills = [
    {
      title: "Languages",
      icon: <Code className="w-8 h-8 text-primary" />,
      skills: ["C#", "Python", "JavaScript", "TypeScript", "Kotlin", "SQL", "HTML", "CSS"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className="w-8 h-8 text-primary" />,
      skills: [
        "React Native",
        "Expo",
        ".NET MAUI",
        "Blazor Hybrid",
        "React",
        "Node.js",
        "Express",
        "Entity Framework Core"
      ]
    },
    {
      title: "Databases",
      icon: <Database className="w-8 h-8 text-primary" />,
      skills: ["SQLite", "SQL Server", "MongoDB Atlas", "PostgreSQL", "Supabase"]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-8 h-8 text-primary" />,
      skills: [
        "Git",
        "GitHub",
        "Visual Studio",
        "VS Code",
        "Cursor",
        "Android Studio",
        "Render",
        "Vercel",
        "Google Play Console",
        "PowerShell",
        "Git Bash"
      ]
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
          {/* Main Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Skills</h2>
          <p className="text-center text-slate-600 mb-16 text-lg">
            Mobile-first, full-stack, and cross-platform technologies combined with strong professional capabilities
          </p>

          {/* Technical Skills Subsection */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-slate-800">
              Technical Skills
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technicalSkills.map((category) => (
                <Card key={category.title} className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      {category.icon}
                      <h4 className="text-xl font-semibold mt-2">{category.title}</h4>
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
          </div>

          {/* Professional Skills Subsection */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-slate-800">
              Professional Skills
            </h3>
            <Card className="bg-white shadow-md">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  {professionalSkills.map((skill) => (
                    <div key={skill.title} className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                      <div className="mb-3">{skill.icon}</div>
                      <p className="font-medium text-slate-700">{skill.title}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}