
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-cyber/95 backdrop-blur-md shadow-lg shadow-neon/10' : 'bg-transparent'
    }`}>
      <div className="section-padding py-4">
        <div className="flex justify-between items-center">
          <div className="font-bold text-2xl">
            <span className={`transition-colors duration-300 ${
              scrolled ? 'text-cyber-text' : 'text-cyber-text'
            }`}>
              &lt;
            </span>
            <span className="text-neon text-glow">Dev</span>
            <span className={`transition-colors duration-300 ${
              scrolled ? 'text-cyber-text' : 'text-cyber-text'
            }`}>
              /&gt;
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`neon-outline rounded-md px-3 py-2 font-medium transition-all duration-300 hover:scale-105 ${
                  scrolled ? 'text-cyber-text' : 'text-cyber-text'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <Button 
              className="btn-primary"
              onClick={() => scrollToSection('#contact')}
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden neon-outline"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-cyber-text" />
            ) : (
              <Menu className="w-6 h-6 text-cyber-text" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-neon/20 bg-elevated/95 backdrop-blur-md rounded-lg">
            <div className="flex flex-col space-y-4 pt-4 px-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="neon-outline rounded-md px-3 py-2 transition-colors duration-300 text-left font-medium"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                className="btn-primary mt-4"
                onClick={() => scrollToSection('#contact')}
              >
                Let's Talk
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
