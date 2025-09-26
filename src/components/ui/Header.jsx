import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { name: 'Home', path: '/', icon: 'Home' },
    { name: 'Projects', path: '/project-showcase-hub', icon: 'FolderOpen' },
    { name: 'Contact', path: '/contact-command-center', icon: 'MessageSquare' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const Logo = () => (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
          <Icon name="Code2" size={24} color="white" strokeWidth={2.5} />
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full animate-pulse"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-primary font-sans">Sahil Soni</span>
        <span className="text-xs text-muted-foreground font-mono">Portfolio</span>
      </div>
    </div>
  );

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-elevation border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="cursor-pointer transition-transform duration-200 hover:scale-105"
            onClick={() => handleNavigation('/')}
          >
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <button
                key={item?.path}
                onClick={() => handleNavigation(item?.path)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground shadow-elevation'
                    : 'text-foreground hover:bg-muted hover:text-primary'
                }`}
              >
                <Icon name={item?.icon} size={18} />
                <span>{item?.name}</span>
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleNavigation('/contact-command-center')}
              iconName="Calendar"
              iconPosition="left"
              className="transition-all duration-200 hover:border-accent hover:text-accent"
            >
              Schedule Call
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={() => handleNavigation('/project-showcase-hub')}
              iconName="ArrowRight"
              iconPosition="right"
              className="bg-cta hover:bg-cta/90 text-cta-foreground"
            >
              View Work
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors duration-200"
          >
            <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-elevation-lg">
            <div className="px-4 py-4 space-y-2">
              {navigationItems?.map((item) => (
                <button
                  key={item?.path}
                  onClick={() => handleNavigation(item?.path)}
                  className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span className="font-medium">{item?.name}</span>
                </button>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-2 border-t border-border">
                <Button
                  variant="outline"
                  fullWidth
                  onClick={() => handleNavigation('/contact-command-center')}
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Schedule Call
                </Button>
                <Button
                  variant="default"
                  fullWidth
                  onClick={() => handleNavigation('/project-showcase-hub')}
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="bg-cta hover:bg-cta/90 text-cta-foreground"
                >
                  View Work
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;