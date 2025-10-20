import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Home, Mail, Target, MessageSquare, GitBranch, FileText, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TeamCollaboration = () => {
  const navigate = useNavigate();

  const competencies = [
    { icon: Target, title: "Project Coordination", description: "Manage tasks and milestones effectively" },
    { icon: MessageSquare, title: "Clear Communication", description: "Articulate ideas and technical concepts" },
    { icon: FileText, title: "Task Management", description: "Organize and prioritize team activities" },
    { icon: GitBranch, title: "Collaborative Development", description: "Work seamlessly with cross-functional teams" },
    { icon: FileText, title: "Documentation & Reporting", description: "Maintain clear project documentation" },
  ];

  const tools = [
    "Trello",
    "Notion",
    "GitHub",
    "Google Workspace",
    "Slack"
  ];

  const examples = [
    {
      title: "Dual Axis Solar Tracker Project",
      description: "Led a 3-member team through complete project lifecycle",
      achievements: ["Coordinated hardware and programming efforts", "Managed timeline and deliverables", "Facilitated effective team communication", "Ensured successful project completion"]
    }
  ];

  return (
    <div className="min-h-screen font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-[50vh] bg-gradient-hero relative overflow-hidden pt-20">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-tech-purple/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8 animate-fade-in">
            <button onClick={() => navigate("/")} className="hover:text-primary transition-colors">
              Home
            </button>
            <ChevronRight className="h-4 w-4" />
            <button onClick={() => navigate("/#skills")} className="hover:text-primary transition-colors">
              Skills
            </button>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Team Collaboration</span>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 inline-block animate-pulse-glow">
              <div className="p-6 bg-tech-purple rounded-2xl shadow-glow">
                <Users className="h-20 w-20 text-white" />
              </div>
            </div>
            
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Team <span className="bg-gradient-primary bg-clip-text text-transparent">Collaboration</span>
            </h1>
            
            <p className="text-xl text-muted-foreground animate-fade-in-up">
              Building success through effective communication and coordination
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-card shadow-lg animate-fade-in-up">
              <h2 className="font-heading text-3xl font-bold mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Engineering projects require clear communication, coordination, and collaboration. Through effective task division, systematic coordination, and comprehensive documentation, I facilitate seamless teamwork that drives project success and fosters innovation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Competencies Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
              Key <span className="bg-gradient-primary bg-clip-text text-transparent">Competencies</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {competencies.map((competency, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card hover:shadow-lg transition-all hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-4 bg-tech-purple rounded-lg">
                      <competency.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-lg">{competency.title}</h3>
                    <p className="text-sm text-muted-foreground">{competency.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Methods Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
              Tools & <span className="bg-gradient-primary bg-clip-text text-transparent">Methods</span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <Badge
                  key={index}
                  className="px-4 py-2 text-sm bg-tech-purple text-white hover:bg-tech-purple/90 transition-all hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
              Leadership <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
            </h2>
            
            {examples.map((example, index) => (
              <Card
                key={index}
                className="p-8 bg-card hover:shadow-lg transition-all animate-fade-in-up"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-tech-purple rounded-lg flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-2">{example.title}</h3>
                    <p className="text-muted-foreground mb-4">{example.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {example.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <ChevronRight className="h-4 w-4 text-tech-purple flex-shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Learning Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-card shadow-lg animate-fade-in-up">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-tech-purple rounded-lg flex-shrink-0">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4">Future Learning</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Improving leadership and collaborative development in professional teams to drive innovation and deliver exceptional engineering solutions.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="outline" onClick={() => navigate("/")} className="gap-2">
              <Home className="h-5 w-5" />
              Back to Home
            </Button>
            <Button
              size="lg"
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="gap-2"
            >
              <Mail className="h-5 w-5" />
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamCollaboration;
