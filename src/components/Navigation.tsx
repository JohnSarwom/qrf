
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Contact', href: '#contact' },
    { label: 'Get Quote', href: '/quote', isRoute: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, isRoute?: boolean) => {
    setIsOpen(false);
    if (isRoute) {
      navigate(href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">QRF</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-primary">Quick Response Force</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href, item.isRoute)}
                  className={`text-foreground hover:text-primary transition-colors font-medium ${
                    item.label === 'Get Quote' ? 'text-primary font-semibold' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button className="gradient-blue text-white hover:opacity-90 transition-opacity">
                Emergency Contact
              </Button>
            </div>

            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="sm">
                  <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                    <div className="w-full h-0.5 bg-foreground"></div>
                    <div className="w-full h-0.5 bg-foreground"></div>
                    <div className="w-full h-0.5 bg-foreground"></div>
                  </div>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-6 mt-6">
                  {navItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleNavClick(item.href, item.isRoute)}
                      className={`text-lg font-medium hover:text-primary transition-colors text-left ${
                        item.label === 'Get Quote' ? 'text-primary font-semibold' : ''
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                  <Button className="gradient-blue text-white w-full">
                    Emergency Contact
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Emergency Floating Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button className="w-14 h-14 rounded-full gradient-accent text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse">
          <div className="text-xs font-bold">24/7</div>
        </Button>
      </div>
    </>
  );
};

export default Navigation;
