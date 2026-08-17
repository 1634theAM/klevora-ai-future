import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import klerovaLogo from '@/assets/klerova-logo.png';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY || 0;
      setIsScrolled(currentY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll as any);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isMenuOpen
          ? 'bg-background border-b border-white/10'
          : isScrolled
            ? 'bg-background/60 backdrop-blur-md border-b border-white/10'
            : 'bg-gradient-to-b from-background/20 to-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20 relative">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={klerovaLogo} 
              alt="Klevora Logo" 
              className="w-11 h-11 object-contain"
            />
            <span className="text-2xl font-black text-gradient tracking-tight">Klevora</span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <nav className="flex items-center space-x-8">
              <NavLink to="/about" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                About Us
              </NavLink>
              <NavLink to="/modules" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                Modules
              </NavLink>
              <NavLink to="/testimonials" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                Testimonials
              </NavLink>
              <NavLink to="/careers" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                Careers
              </NavLink>
              <NavLink to="/contact" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                Contact Us
              </NavLink>
            </nav>
          </div>

          {/* Theme Toggle and Mobile Menu */}
          <div className="flex items-center space-x-4 ml-auto">
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border mt-4 bg-background shadow-lg">
            <div className="flex flex-col items-center space-y-4">
              <NavLink to="/about" onClick={closeMenu} className={({isActive}) => `text-center py-2 text-foreground hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`}>
                About Us
              </NavLink>
              <NavLink to="/modules" onClick={closeMenu} className={({isActive}) => `text-center py-2 text-foreground hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`}>
                Modules
              </NavLink>
              <NavLink to="/testimonials" onClick={closeMenu} className={({isActive}) => `text-center py-2 text-foreground hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`}>
                Testimonials
              </NavLink>
              <NavLink to="/careers" onClick={closeMenu} className={({isActive}) => `text-center py-2 text-foreground hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`}>
                Careers
              </NavLink>
              <NavLink to="/contact" onClick={closeMenu} className={({isActive}) => `text-center py-2 text-foreground hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`}>
                Contact Us
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
