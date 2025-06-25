
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Creative Director at InnovateCo",
      content: "Working with this developer was exceptional. They delivered a stunning WordPress site with custom 3D animations that perfectly captured our brand vision. The attention to detail and technical execution exceeded all expectations.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=100&h=100"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Startup Founder",
      content: "The Node.js API they built for our platform is incredibly robust and scalable. Not only did they deliver clean, efficient code, but they also provided excellent documentation and ongoing support.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1581091534298-04dcbce3278c?auto=format&fit=crop&w=100&h=100"
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "E-commerce Manager",
      content: "They transformed our Wix store into a conversion machine. The custom integrations and responsive design have significantly improved our user experience and sales. Truly professional work!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=100&h=100"
    },
    {
      id: 4,
      name: "David Park",
      role: "Tech Lead at StartupXYZ",
      content: "Their blend of technical skills and creative vision is rare. The 3D animations they created in Blender brought our product demos to life, and the backend integration was flawless.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-32 bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-orange/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-orange/10 rotate-45"></div>
      
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-bold text-5xl md:text-6xl text-white mb-6">
              Client Testimonials
            </h2>
            <div className="w-24 h-1 bg-orange mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              What clients say about our collaboration and results
            </p>
          </div>
          
          {/* Main Testimonial Display */}
          <div className="relative">
            <Card className="bg-white/5 border-orange/20 shadow-2xl backdrop-blur-sm">
              <CardContent className="p-12 text-center">
                <Quote className="w-16 h-16 text-orange mx-auto mb-8" />
                
                {/* Rating Stars */}
                <div className="flex justify-center mb-8">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-orange text-orange mx-1" />
                  ))}
                </div>
                
                {/* Testimonial Content */}
                <p className="text-2xl md:text-3xl text-white mb-12 leading-relaxed font-light italic">
                  "{testimonials[currentIndex].content}"
                </p>
                
                {/* Client Info */}
                <div className="flex flex-col items-center">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 rounded-full mb-6 border-4 border-orange"
                  />
                  <h4 className="font-bold text-xl text-white mb-2">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-orange font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full border-2 border-orange text-orange hover:bg-orange hover:text-white"
              onClick={goToPrevious}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full border-2 border-orange text-orange hover:bg-orange hover:text-white"
              onClick={goToNext}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-orange scale-125' : 'bg-gray-600 hover:bg-gray-400'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
