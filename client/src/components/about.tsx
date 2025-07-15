import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <p className="text-lg text-slate-600 mb-6">
                Detail-oriented software developer with a passion for problem-solving and building practical, user-focused applications. After a successful career as a Geography Faculty Member at Morehead State University, I've transitioned into software development, bringing analytical thinking, strong organizational skills, and excellent communication abilities.
              </p>
              
              <p className="text-lg text-slate-600 mb-6">I'm passionate about lifelong learning—currently studying Portuguese and French (adding to my Spanish proficiency), working on becoming a data maven when I should be sleeping, and one day I'll learn to play the cello. This curiosity and drive to continuously grow drives my approach to software development.</p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <Card className="text-center p-4 bg-slate-50">
                  <CardContent className="p-2">
                    <div className="text-2xl font-bold text-primary">3+</div>
                    <div className="text-sm text-slate-600">Projects Completed</div>
                  </CardContent>
                </Card>
                <Card className="text-center p-4 bg-slate-50">
                  <CardContent className="p-2">
                    <div className="text-2xl font-bold text-primary">6+</div>
                    <div className="text-sm text-slate-600">Technologies</div>
                  </CardContent>
                </Card>
                <Card className="text-center p-4 bg-slate-50">
                  <CardContent className="p-2">
                    <div className="text-2xl font-bold text-primary">PhD</div>
                    <div className="text-sm text-slate-600">Geography</div>
                  </CardContent>
                </Card>
                <Card className="text-center p-4 bg-slate-50">
                  <CardContent className="p-2">
                    <div className="text-2xl font-bold text-primary">4</div>
                    <div className="text-sm text-slate-600">Languages</div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
                alt="Professional developer workspace with laptop and code"
                className="rounded-xl shadow-lg w-full h-auto"
              />
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
                alt="World map representing geography background and global perspective"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
