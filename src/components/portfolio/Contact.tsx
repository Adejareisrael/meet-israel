
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Send, MessageCircle, Phone } from "lucide-react";
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
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours!",
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
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-black mb-6">
              Let's Create Something Amazing
            </h2>
            <div className="w-24 h-1 bg-orange mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to bring your vision to life? Let's discuss your project and make it happen.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Contact Form */}
            <Card className="bg-white shadow-2xl border-0 animate-slide-in-left">
              <CardHeader className="p-6 md:p-8">
                <CardTitle className="font-bold text-2xl md:text-3xl text-black flex items-center">
                  <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-orange mr-3" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <Label htmlFor="name" className="text-black font-medium text-base md:text-lg mb-2 block">
                        Your Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-11 md:h-12 border-2 border-gray-200 focus:border-orange text-black text-base md:text-lg"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-black font-medium text-base md:text-lg mb-2 block">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-11 md:h-12 border-2 border-gray-200 focus:border-orange text-black text-base md:text-lg"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-black font-medium text-base md:text-lg mb-2 block">
                      Project Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="h-11 md:h-12 border-2 border-gray-200 focus:border-orange text-black text-base md:text-lg"
                      placeholder="Website Development Project"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-black font-medium text-base md:text-lg mb-2 block">
                      Project Details
                    </Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-black text-base md:text-lg focus:outline-none focus:border-orange resize-none"
                      placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full btn-primary text-base md:text-xl py-5 md:py-6 flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 md:w-6 md:h-6 mr-3" />
                    Start a Project
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Social */}
            <div className="space-y-6 md:space-y-8 animate-slide-in-right">
              {/* Contact Details */}
              <Card className="bg-gray-50 shadow-xl border-0">
                <CardContent className="p-6 md:p-8">
                  <h3 className="font-bold text-xl md:text-2xl text-black mb-5 md:mb-6 flex items-center">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-orange mr-3" />
                    Get In Touch
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 text-base md:text-lg">
                    I'm always excited to work on new projects and collaborate with amazing people.
                    Whether you need a responsive website, scalable backend, or creative 3D animations,
                    let's bring your ideas to life!
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 md:w-6 md:h-6 text-orange" />
                      </div>
                      <div>
                        <p className="text-black font-medium text-sm md:text-base">Email</p>
                        <p className="text-gray-600 text-sm md:text-base">theizzylogic@gmail.com</p>
                      </div>
                    </div>
                    <a
                      href="https://wa.me/2348161396891"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 hover:bg-orange/5 rounded-lg p-2 -ml-2 transition-colors"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
                      </div>
                      <div>
                        <p className="text-black font-medium text-sm md:text-base">WhatsApp</p>
                        <p className="text-gray-600 text-sm md:text-base">08161396891</p>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-black shadow-xl border-0">
                <CardContent className="p-6 md:p-8">
                  <h3 className="font-bold text-xl md:text-2xl text-white mb-5 md:mb-6">
                    Connect With Me
                  </h3>
                  <div className="flex space-x-4">
                    <a href="https://wa.me/2348161396891" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-12 h-12 md:w-14 md:h-14 border-2 border-orange text-orange hover:bg-orange hover:text-white transition-all duration-300"
                      >
                        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
                      </Button>
                    </a>
                    <a href="mailto:theizzylogic@gmail.com">
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-12 h-12 md:w-14 md:h-14 border-2 border-orange text-orange hover:bg-orange hover:text-white transition-all duration-300"
                      >
                        <Mail className="w-6 h-6 md:w-7 md:h-7" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <Card className="bg-gradient-to-br from-orange to-orange-dark shadow-xl border-0 text-white">
                <CardContent className="p-6 md:p-8 text-center">
                  <h3 className="font-bold text-xl md:text-2xl mb-3 md:mb-4">Ready to Start?</h3>
                  <p className="mb-5 md:mb-6 text-base md:text-lg">
                    Download my resume to learn more about my experience and skills.
                  </p>
                  <a href="/My_resume.pdf" download>
                    <Button
                      size="lg"
                      className="bg-white text-orange hover:bg-gray-100 font-bold text-base md:text-lg px-6 md:px-8 py-3"
                    >
                      Download Resume
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 mt-16 md:mt-20 pt-10 md:pt-12">
        <div className="section-padding">
          <div className="text-center">
            <p className="text-gray-600 text-base md:text-lg">
              © 2024 Olaosebikan Israel. Crafted with creativity, built with passion. ⚡
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
