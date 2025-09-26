import React, { useEffect, useState } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import FeaturedProjects from './components/FeaturedProjects';
import ResumeModal from './components/ResumeModal.jsx';
// import GitHubActivity from './components/GitHubActivity';
// import SkillsVisualization from './components/SkillsVisualization';
// import LatestInsights from './components/LatestInsights';
// import FloatingCTA from './components/FloatingCTA';


const InteractiveHomepage = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Sahil Portfolio - Full-Stack Developer & Technical Innovator';

    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 'Full-stack developer specializing in React, Node.js, and Python. Building scalable solutions that drive business growth with 5+ years of experience and 50+ successful projects.');
    }

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <HeroSection />

        {/* Featured Projects */}
        <FeaturedProjects />

        {/* GitHub Activity - Live Development Activity */}
        {/* <GitHubActivity /> */}

        {/* Skills Visualization - Technical Expertise */}
        {/* <SkillsVisualization /> */}

        {/* Latest Insights - Knowledge Sharing */}
        {/* <LatestInsights /> */}

        {/* Floating CTA */}
        {/* <FloatingCTA /> */}
      </main>
      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div>
                  <div className="text-xl font-bold text-primary">Sahil Portfolio</div>
                  <div className="text-sm text-muted-foreground">Building the Future, One Line at a Time</div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Full-stack developer passionate about creating scalable solutions that drive business growth.
                Specializing in React, Node.js, JavaScript, and emerging technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/project-showcase-hub" className="text-muted-foreground hover:text-accent transition-colors">Projects</a></li>
                <li><a href="/contact-command-center" className="text-muted-foreground hover:text-accent transition-colors">Contact</a></li>
                {/* <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Blog</a></li> */}
                <li><ResumeModal/></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-foreground font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://github.com/Sahil9111" className="text-muted-foreground hover:text-accent transition-colors">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/sahil-soni-0a4416182/" className="text-muted-foreground hover:text-accent transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Twitter</a></li>
                <li><a href="mailto:sahilsoni9111@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">Email</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-muted-foreground">
              © {new Date()?.getFullYear()} SahilSoni Portfolio. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0 text-sm text-muted-foreground">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <div className="flex items-center space-x-1">
                <span>Made with</span>
                <span className="text-red-500">♥</span>
                <span>using React & Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InteractiveHomepage;