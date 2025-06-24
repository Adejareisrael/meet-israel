
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-cream/80 dark:bg-midnight/80 backdrop-blur-md z-50 border-b border-gold/20">
      <div className="section-padding py-4">
        <div className="flex justify-between items-center">
          <div className="font-playfair font-bold text-2xl text-midnight dark:text-cream">
            AM
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-midnight dark:text-cream hover:text-gold transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <div className={`w-5 h-0.5 bg-midnight dark:bg-cream transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`} />
              <div className={`w-5 h-0.5 bg-midnight dark:bg-cream transition-all duration-300 mt-1 ${isOpen ? 'opacity-0' : ''}`} />
              <div className={`w-5 h-0.5 bg-midnight dark:bg-cream transition-all duration-300 mt-1 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gold/20">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-midnight dark:text-cream hover:text-gold transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
