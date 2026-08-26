
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "WitExpress",
      role: "Creatives Agency",
      content: "Working with this developer was exceptional. They delivered a stunning WordPress site with custom 3D animations that perfectly captured our brand vision. The attention to detail and technical execution exceeded all expectations.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=100&h=100"
    },
    {
      id: 2,
      name: "Louis Macjob",
      role: "Louis Ventures",
      content: "The Node.js API they built for our platform is incredibly robust and scalable. Not only did they deliver clean, efficient code, but they also provided excellent documentation and ongoing support.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1581091534298-04dcbce3278c?auto=format&fit=crop&w=100&h=100"
    },
    {
      id: 3,
      name: "Gbenga Adeyemi",
      role: "MemeFactory",
      content: "They built the entire backend infrastructure for my startup, including robust authentication systems and security protocols. Their technical expertise transformed our vision into a secure, scalable platform ready for growth.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=100&h=100"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const goToPrevious = () => setCurrentIndex((prevIndex) =>
    prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
  );
  const goToNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-4 md:top-20 md:left-10 w-20 h-20 md:w-32 md:h-32 border-2 border-orange/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-4 md:bottom-20 md:right-10 w-12 h-12 md:w-20 md:h-20 bg-orange/10 rotate-45"></div>

      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Client Testimonials
            </h2>
            <div className="w-24 h-1 bg-orange mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              What clients say about our collaboration and results
            </p>
          </div>

          {/* Main Testimonial Display */}
          <div className="relative px-8 md:px-16">
            <Card className="bg-white/5 border-orange/20 shadow-2xl backdrop-blur-sm">
              <CardContent className="p-6 md:p-12 text-center">
                <Quote className="w-10 h-10 md:w-16 md:h-16 text-orange mx-auto mb-6 md:mb-8" />

                {/* Rating Stars */}
                <div className="flex justify-center mb-6 md:mb-8">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-orange text-orange mx-0.5 md:mx-1" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-base md:text-2xl lg:text-3xl text-white mb-8 md:mb-12 leading-relaxed font-light italic">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Client Info */}
                <div className="flex flex-col items-center">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full mb-4 md:mb-6 border-4 border-orange"
                  />
                  <h4 className="font-bold text-lg md:text-xl text-white mb-2">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-orange font-medium text-sm md:text-base">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-orange text-orange hover:bg-orange hover:text-white"
              onClick={goToPrevious}
            >
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-orange text-orange hover:bg-orange hover:text-white"
              onClick={goToNext}
            >
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 md:mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
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
