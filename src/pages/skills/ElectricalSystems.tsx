import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Home, Mail, CircuitBoard, Gauge, Battery, TrendingUp, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ElectricalSystems = () => {
  const navigate = useNavigate();

  const competencies = [
    { icon: CircuitBoard, title: "Circuit Analysis & Design", description: "Design and analyze electrical circuits with precision" },
    { icon: Zap, title: "Power Flow & Load Balancing", description: "Optimize power distribution across systems" },
    { icon: Gauge, title: "Energy Loss Calculation", description: "Calculate and minimize energy losses" },
    { icon: Battery, title: "Transformer Analysis", description: "Analyze transformer performance and efficiency" },
    { icon: Gauge, title: "Power Measurement Systems", description: "Implement accurate power measurement solutions" },
  ];

  const tools = [
    "MATLAB/Simulink",
    "Multisim",
    "Proteus",
    "Circuit Design Tools",
    "PZEM-004T",
    "ESP32"
  ];

  const projects = [
    {
      title: "Smart Energy Meter",
      description: "Implemented real-time monitoring and load analysis system",
      achievements: ["Real-time voltage and current monitoring", "Load pattern analysis", "Energy consumption tracking"]
    },
    {
      title: "Load Testing & Efficiency",
      description: "Conducted comprehensive load tests using power sensors",
      achievements: ["Efficiency calculations", "Power sensor integration", "Microcontroller-based measurement"]
    }
  ];

  return (
    <div className="min-h-screen font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-[50vh] bg-gradient-hero relative overflow-hidden pt-20">
        {/* Animated background particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
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
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8 animate-fade-in">
            <button onClick={() => navigate("/")} className="hover:text-primary transition-colors">
              Home
            </button>
            <ChevronRight className="h-4 w-4" />
            <button onClick={() => navigate("/#skills")} className="hover:text-primary transition-colors">
              Skills
            </button>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Electrical Systems</span>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            {/* Large icon with glow */}
            <div className="mb-8 inline-block animate-pulse-glow">
              <div className="p-6 bg-primary rounded-2xl shadow-glow">
                <Zap className="h-20 w-20 text-white" />
              </div>
            </div>
            
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Electrical Systems & <span className="bg-gradient-primary bg-clip-text text-transparent">Power Analysis</span>
            </h1>
            
            <p className="text-xl text-muted-foreground animate-fade-in-up">
              Mastering power distribution, efficiency analysis, and electrical circuit design
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
                Understanding how electrical systems function, distribute, and consume energy is fundamental to efficient power management. Through comprehensive analysis of load distribution, energy efficiency, and power flow characteristics, I develop solutions that optimize electrical system performance and reduce energy losses.
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
                    <div className="p-4 bg-primary rounded-lg">
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

      {/* Tools & Technologies Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
              Tools & <span className="bg-gradient-primary bg-clip-text text-transparent">Technologies</span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <Badge
                  key={index}
                  className="px-4 py-2 text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
              Projects & <span className="bg-gradient-primary bg-clip-text text-transparent">Applications</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="p-8 bg-card hover:shadow-lg transition-all hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary rounded-lg flex-shrink-0">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Learning Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-card shadow-lg animate-fade-in-up">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-primary rounded-lg flex-shrink-0">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4">Future Learning</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Exploring smart grid technologies, advanced power systems, and renewable grid integration to stay at the forefront of electrical engineering innovation.
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
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/")}
              className="gap-2"
            >
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

export default ElectricalSystems;
