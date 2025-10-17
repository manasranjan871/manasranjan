import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Show success message
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Let's connect and discuss opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in-up">
              <Card className="p-6 bg-gradient-card hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-2">Email</h3>
                    <a
                      href="mailto:manasranjan8711@gmail.com"
                      className="text-primary hover:underline"
                    >
                      manasranjan8711@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-energy-cyan rounded-lg">
                    <Linkedin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-2">LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/in/manas-ranjan-matiary"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Manas Ranjan Matiary
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-primary text-white">
                <h3 className="font-heading font-bold text-xl mb-3">Let's Collaborate</h3>
                <p className="leading-relaxed">
                  I'm always interested in discussing new projects, innovative ideas, or opportunities 
                  in the fields of electrical engineering, IoT, and renewable energy systems.
                </p>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-6 bg-gradient-card animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-primary hover:shadow-glow transition-all">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
