import { Card } from "@/components/ui/card";
import { Zap, Cpu, Gauge, Lightbulb, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const SkillsSection = () => {
  const technicalSkills = [
    { name: "Electrical Systems & Power Analysis", icon: Zap, color: "bg-primary", url: "/skills/electrical-systems" },
    { name: "IoT Embedded Systems", icon: Cpu, color: "bg-energy-cyan", url: "/skills/iot-embedded" },
    { name: "Smart Metering", icon: Gauge, color: "bg-accent", url: "/skills/smart-metering" },
  ];

  const softSkills = [
    { name: "Problem Solving & Analytical Thinking", icon: Lightbulb, color: "bg-energy-green", url: "/skills/problem-solving" },
    { name: "Team Collaboration", icon: Users, color: "bg-tech-purple", url: "/skills/team-collaboration" },
    { name: "Research & Innovation", icon: TrendingUp, color: "bg-primary", url: "/skills/research-innovation" },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              My <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Technical expertise and professional capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div className="animate-fade-in-up">
              <h3 className="font-heading text-2xl font-bold mb-6 text-center">Technical Skills</h3>
              <div className="space-y-4">
                {technicalSkills.map((skill, index) => (
                  <Link key={index} to={skill.url}>
                    <Card className="p-6 bg-card hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 ${skill.color} rounded-lg`}>
                          <skill.icon className="h-6 w-6 text-white" />
                        </div>
                        <p className="font-medium text-lg">{skill.name}</p>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="font-heading text-2xl font-bold mb-6 text-center">Soft Skills</h3>
              <div className="space-y-4">
                {softSkills.map((skill, index) => (
                  <Link key={index} to={skill.url}>
                    <Card className="p-6 bg-card hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 ${skill.color} rounded-lg`}>
                          <skill.icon className="h-6 w-6 text-white" />
                        </div>
                        <p className="font-medium text-lg">{skill.name}</p>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
