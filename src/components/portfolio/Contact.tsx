
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-midnight via-midnight-light to-midnight">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-cream mb-4">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
            <p className="text-lg text-cream/70 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-cream/10 border-gold/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-cream">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-cream/90">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-cream/10 border-gold/30 text-cream placeholder:text-cream/50"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-cream/90">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-cream/10 border-gold/30 text-cream placeholder:text-cream/50"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-cream/90">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-cream/10 border-gold/30 text-cream placeholder:text-cream/50"
                      placeholder="Project inquiry"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-cream/90">Message</Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3 py-2 bg-cream/10 border border-gold/30 rounded-md text-cream placeholder:text-cream/50 focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gold hover:bg-gold/90 text-midnight font-semibold"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="bg-cream/10 border-gold/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl text-cream mb-4">Get In Touch</h3>
                  <p className="text-cream/80 leading-relaxed mb-6">
                    I'm always excited to work on new projects and collaborate with amazing people. 
                    Whether you have a project in mind or just want to say hello, feel free to reach out!
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-gold" />
                      <span className="text-cream/90">alex.morgan@email.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Social Links */}
              <Card className="bg-cream/10 border-gold/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl text-cream mb-4">Follow Me</h3>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-gold/30 text-gold hover:bg-gold hover:text-midnight"
                    >
                      <Linkedin className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-gold/30 text-gold hover:bg-gold hover:text-midnight"
                    >
                      <Youtube className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-gold/30 text-gold hover:bg-gold hover:text-midnight"
                    >
                      <Mail className="w-5 h-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Resume Download */}
              <Card className="bg-gold/20 border-gold/40 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <h3 className="font-playfair text-xl text-cream mb-4">Download Resume</h3>
                  <Button
                    size="lg"
                    className="bg-gold hover:bg-gold/90 text-midnight font-semibold"
                  >
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="border-t border-gold/20 mt-16 pt-8">
        <div className="section-padding">
          <div className="text-center">
            <p className="text-cream/60">
              © 2024 Alex Morgan. Built with React, TypeScript, and lots of ☕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
