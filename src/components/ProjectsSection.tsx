import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Cpu, Sun, Gauge } from "lucide-react";
import solarTrackerDiagram from "@/assets/solar-tracker-diagram.jpg";

const ProjectsSection = () => {
  const technologies = [
    { name: "Arduino UNO / ESP32", icon: Cpu },
    { name: "LDR Sensors", icon: Gauge },
    { name: "Servo/Stepper Motors", icon: Cpu },
    { name: "Solar Panel", icon: Sun },
    { name: "IoT Module", icon: Cpu },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Innovation in renewable energy and smart systems
            </p>
          </div>

          {/* Main Project Card */}
          <Card className="overflow-hidden bg-card shadow-lg animate-fade-in-up">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Project Image */}
              <div className="relative h-64 md:h-auto">
                <img
                  src={solarTrackerDiagram}
                  alt="Dual Axis Automatic Sun Tracking Solar Panel System Diagram"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-gradient-primary px-4 py-2 rounded-full">
                  <span className="text-white font-medium text-sm">Featured Project</span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8">
                <h3 className="font-heading text-3xl font-bold mb-4">
                  Dual Axis Automatic Sun Tracking Solar Panel
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Sun className="h-5 w-5 text-accent" />
                      Description
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      The project maximizes solar energy capture by adjusting the solar panel's orientation in both 
                      horizontal and vertical directions to follow the sun's path throughout the day.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Goal</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      To improve energy efficiency and power generation compared to fixed systems, achieving up to 
                      40% more energy capture.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-2 px-3 py-2 bg-muted rounded-lg text-sm font-medium"
                        >
                          <tech.icon className="h-4 w-4 text-primary" />
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Button className="bg-gradient-primary hover:shadow-glow transition-all">
                  View Project Details
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
