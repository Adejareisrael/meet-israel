
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      content: "Alex delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise exceeded our expectations. The project was completed on time and within budget.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=100&h=100"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO at StartupXYZ",
      content: "Working with Alex was a game-changer for our startup. He not only built a robust backend system but also provided valuable insights on architecture and scalability.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1581091534298-04dcbce3278c?auto=format&fit=crop&w=100&h=100"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Design Director at Creative Agency",
      content: "Alex has an amazing ability to bring designs to life with pixel-perfect precision. His code is clean, maintainable, and always follows best practices.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=100&h=100"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-midnight">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-midnight dark:text-cream mb-4">
              Client Testimonials
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
            <p className="text-lg text-midnight/70 dark:text-cream/70 max-w-2xl mx-auto">
              What clients say about working with me and the results we've achieved together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className="bg-cream/50 dark:bg-midnight-light/50 border-gold/20 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  {/* Rating Stars */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  
                  {/* Testimonial Content */}
                  <p className="text-midnight/80 dark:text-cream/80 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Client Info */}
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 border-2 border-gold"
                    />
                    <div>
                      <h4 className="font-semibold text-midnight dark:text-cream">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-midnight/60 dark:text-cream/60">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
