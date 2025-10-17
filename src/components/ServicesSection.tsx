import { Card } from "@/components/ui/card";
import { Sun, Cog, LineChart, Wrench } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Sun,
      title: "Renewable Energy Solutions",
      description: "Design and implementation of sustainable energy systems including solar tracking and optimization.",
      color: "bg-accent",
    },
    {
      icon: Cog,
      title: "Automation Systems",
      description: "Development of intelligent automation solutions for energy management and monitoring.",
      color: "bg-primary",
    },
    {
      icon: LineChart,
      title: "Power Distribution Analysis",
      description: "Comprehensive analysis and optimization of electrical power distribution systems.",
      color: "bg-energy-cyan",
    },
    {
      icon: Wrench,
      title: "Project Design & Development",
      description: "End-to-end project development from concept to implementation in electrical and IoT domains.",
      color: "bg-energy-green",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              What I <span className="bg-gradient-primary bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Services and expertise in electrical engineering and smart systems
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 bg-gradient-card hover:shadow-lg transition-all hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-block p-4 ${service.color} rounded-lg mb-4`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
