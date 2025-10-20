import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cpu, Home, Mail, Wifi, Database, Code, Activity, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const IoTEmbedded = () => {
  const navigate = useNavigate();

  const competencies = [
    { icon: Code, title: "Embedded C/C++ Programming", description: "Develop efficient firmware for microcontrollers" },
    { icon: Activity, title: "Sensor Integration & Calibration", description: "Interface and calibrate various sensors" },
    { icon: Wifi, title: "Wireless Communication", description: "Implement MQTT, Wi-Fi protocols" },
    { icon: Database, title: "Real-time Data Processing", description: "Process and analyze sensor data in real-time" },
    { icon: Cpu, title: "IoT Dashboard Development", description: "Create intuitive data visualization dashboards" },
  ];

  const hardware = ["ESP32", "Arduino UNO", "NodeMCU"];
  const software = ["C/C++", "MicroPython"];
  const protocols = ["MQTT", "Blynk", "ThingSpeak"];
  const sensors = ["LDR", "DHT11", "ACS712", "PZEM-004T"];

  const projects = [
    {
      title: "Smart Energy Meter with IoT",
      description: "Comprehensive load monitoring with IoT integration",
      achievements: ["Real-time voltage/current data on web dashboard", "Wireless data transmission", "Remote monitoring capability"]
    },
    {
      title: "Dual Axis Solar Tracker",
      description: "Automated system with IoT-based data monitoring",
      achievements: ["Automated sun tracking", "IoT data monitoring", "Efficiency optimization"]
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
              className="absolute w-2 h-2 bg-energy-cyan/20 rounded-full animate-float"
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
            <span className="text-foreground">IoT Embedded Systems</span>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 inline-block animate-pulse-glow">
              <div className="p-6 bg-energy-cyan rounded-2xl shadow-glow">
                <Cpu className="h-20 w-20 text-white" />
              </div>
            </div>
            
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              IoT <span className="bg-gradient-primary bg-clip-text text-transparent">Embedded Systems</span>
            </h1>
            
            <p className="text-xl text-muted-foreground animate-fade-in-up">
              Connecting physical devices to the digital world through innovative embedded solutions
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
                IoT systems connect physical devices to the digital world for real-time data processing, automation, and monitoring. By integrating sensors, controllers, and communication modules, I create intelligent systems that collect, analyze, and visualize data for enhanced decision-making and automation.
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
                    <div className="p-4 bg-energy-cyan rounded-lg">
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
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
              Tools & <span className="bg-gradient-primary bg-clip-text text-transparent">Technologies</span>
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-xl font-bold mb-4 text-center">Hardware</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {hardware.map((tool, index) => (
                    <Badge key={index} className="px-4 py-2 text-sm bg-energy-cyan text-white hover:bg-energy-cyan/90 transition-all hover:scale-105">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold mb-4 text-center">Software</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {software.map((tool, index) => (
                    <Badge key={index} className="px-4 py-2 text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold mb-4 text-center">Protocols</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {protocols.map((tool, index) => (
                    <Badge key={index} className="px-4 py-2 text-sm bg-accent text-accent-foreground hover:bg-accent/90 transition-all hover:scale-105">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold mb-4 text-center">Sensors</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {sensors.map((tool, index) => (
                    <Badge key={index} className="px-4 py-2 text-sm bg-energy-green text-white hover:bg-energy-green/90 transition-all hover:scale-105">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
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
                    <div className="p-3 bg-energy-cyan rounded-lg flex-shrink-0">
                      <Cpu className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <ChevronRight className="h-4 w-4 text-energy-cyan flex-shrink-0 mt-0.5" />
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
                <div className="p-4 bg-energy-cyan rounded-lg flex-shrink-0">
                  <Cpu className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4">Future Learning</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Edge computing, AI integration with IoT, and cloud-based energy management systems to push the boundaries of intelligent connected devices.
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

export default IoTEmbedded;
