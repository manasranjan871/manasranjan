import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const badges = [
    { text: "Electrical Engineering", color: "bg-primary" },
    { text: "IoT Integration", color: "bg-energy-cyan" },
    { text: "Smart Energy Systems", color: "bg-accent" },
    { text: "Renewable Technologies", color: "bg-energy-green" },
  ];

  return (
    <section id="home" className="min-h-screen bg-gradient-hero relative overflow-hidden pt-20">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-accent/10 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-40 left-20 w-24 h-24 rounded-full bg-energy-cyan/10 animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-card rounded-full shadow-sm">
              <p className="text-sm font-medium text-muted-foreground">Available for hire</p>
            </div>
            
            <div>
              <h1 className="font-heading text-5xl md:text-7xl font-bold mb-2">
                Hello, I'm
              </h1>
              <h2 className="font-heading text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                Manas Ranjan Matiary
              </h2>
              <p className="text-xl text-muted-foreground font-medium">
                Exploring Smart Energy, IoT, and Renewable Innovation
              </p>
            </div>

            {/* Skill Badges */}
            <div className="flex flex-wrap gap-3">
              {badges.map((badge, index) => (
                <span
                  key={index}
                  className={`${badge.color} text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:scale-105 transition-transform`}
                >
                  {badge.text}
                </span>
              ))}
            </div>

            <p className="text-lg text-muted-foreground max-w-lg">
              Developing intelligent solutions with a focus on energy efficiency and sustainable technologies
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all"
                onClick={() => scrollToSection("projects")}
              >
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Photo */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-pulse-glow" />
              <img
                src={profilePhoto}
                alt="Manas Ranjan Matiary - Electrical Engineering Student"
                className="relative rounded-full w-80 h-80 md:w-96 md:h-96 object-cover shadow-lg ring-8 ring-card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
