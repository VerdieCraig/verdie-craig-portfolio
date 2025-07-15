import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Professional developer workspace with laptop and code"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            
            <div>
              <p className="text-lg text-slate-600 mb-6">
                Detail-oriented software developer with a passion for problem-solving and building practical, user-focused applications. I bring a unique perspective to tech, combining analytical thinking from my academic background with hands-on development skills.
              </p>
              
              <p className="text-lg text-slate-600 mb-6">
                After a successful career in higher education as a Geography Faculty Member at Morehead State University, I've transitioned into software development, bringing strong organizational skills, communication abilities, and a commitment to continuous learning.
              </p>
              
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
                    <div className="text-2xl font-bold text-primary">20+</div>
                    <div className="text-sm text-slate-600">Years Teaching</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
