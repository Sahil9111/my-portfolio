import React, { useState } from 'react';
// import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header.jsx';
import Icon from '../../components/AppIcon.jsx';
import Button from '../../components/ui/Button.jsx';

// Import components
import ContactMethodCard from './components/ContactMethodCard.jsx';
import QuickContactForm from './components/QuickContactForm.jsx';
import ProjectInquiryForm from './components/ProjectInquiryForm.jsx';
import CollaborationForm from './components/CollaborationForm.jsx';
import SpeakingMediaForm from './components/SpeakingMediaForm.jsx';
import AvailabilityCalendar from './components/AvailabilityCalendar.jsx';
import ContactInfoCard from './components/ContactInfoCard.jsx';

const ContactCommandCenter = () => {
  const [selectedMethod, setSelectedMethod] = useState('quick');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const contactMethods = [
    {
      id: 'quick',
      title: 'Quick Questions',
      description: 'General inquiries, brief questions, or initial contact',
      icon: 'MessageSquare',
      responseTime: '< 4 hours',
      bestFor: 'General inquiries',
      color: 'var(--color-accent)'
    },
    {
      id: 'project',
      title: 'Project Discussions',
      description: 'Detailed project scoping, requirements, and proposals',
      icon: 'Briefcase',
      responseTime: '< 24 hours',
      bestFor: 'Project inquiries',
      color: 'var(--color-primary)'
    },
    {
      id: 'collaboration',
      title: 'Collaboration Inquiries',
      description: 'Partnerships, co-founder opportunities, and joint ventures',
      icon: 'Users',
      responseTime: '< 48 hours',
      bestFor: 'Partnerships',
      color: 'var(--color-success)'
    },
    {
      id: 'speaking',
      title: 'Speaking/Media Requests',
      description: 'Conference talks, podcast interviews, and media appearances',
      icon: 'Mic',
      responseTime: '< 48 hours',
      bestFor: 'Events & media',
      color: 'var(--color-warning)'
    }
  ];

  const handleMethodSelect = (methodId) => {
    setSelectedMethod(methodId);
    setSubmitSuccess(false);
  };

  const handleFormSubmit = async (formData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', {
        method: selectedMethod,
        data: formData,
        selectedSlot: selectedSlot
      });
      
      setSubmitSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setSubmitSuccess(false);
        setSelectedSlot(null);
      }, 5000);
      
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
  };

  const renderSelectedForm = () => {
    if (submitSuccess) {
      return (
        <div className="bg-success/10 border border-success/20 rounded-xl p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-success/20 rounded-full">
              <Icon name="CheckCircle" size={32} color="var(--color-success)" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent Successfully!</h3>
          <p className="text-muted-foreground mb-4">
            Thank you for reaching out. I'll get back to you within the expected timeframe.
          </p>
          {selectedSlot && (
            <div className="bg-card border border-border rounded-lg p-4 mb-4">
              <p className="text-sm font-medium text-foreground">
                Consultation scheduled for: {selectedSlot?.datetime}
              </p>
              <p className="text-xs text-muted-foreground">
                You'll receive a calendar invite shortly
              </p>
            </div>
          )}
          <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Icon name="Mail" size={16} />
              <span>Check your email for confirmation</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Calendar" size={16} />
              <span>Calendar invite coming soon</span>
            </div>
          </div>
        </div>
      );
    }

    switch (selectedMethod) {
      case 'quick':
        return <QuickContactForm onSubmit={handleFormSubmit} isSubmitting={isSubmitting} />;
      case 'project':
        return <ProjectInquiryForm onSubmit={handleFormSubmit} isSubmitting={isSubmitting} />;
      case 'collaboration':
        return <CollaborationForm onSubmit={handleFormSubmit} isSubmitting={isSubmitting} />;
      case 'speaking':
        return <SpeakingMediaForm onSubmit={handleFormSubmit} isSubmitting={isSubmitting} />;
      default:
        return <QuickContactForm onSubmit={handleFormSubmit} isSubmitting={isSubmitting} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* <Helmet>
        <title>Contact Command Center - Sahil Portfolio</title>
        <meta name="description" content="Get in touch with Alex through multiple communication channels. Project inquiries, collaborations, speaking requests, and general questions welcome." />
        <meta name="keywords" content="contact developer, project inquiry, collaboration, speaking requests, technical consultation" />
      </Helmet> */}
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-success/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <Icon name="MessageCircle" size={48} color={`rgb(var(--color-primary))`} />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Contact Center
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Multiple communication channels designed for different types of inquiries. 
                Choose the method that best fits your needs for the fastest response.
              </p>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-8 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} color="var(--color-success)" />
                  <span className="text-muted-foreground">Average response: &lt; 4 hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="TrendingUp" size={16} color="var(--color-success)" />
                  <span className="text-muted-foreground">98% response rate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Globe" size={16} color="var(--color-success)" />
                  <span className="text-muted-foreground">Available globally</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods Selection */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Choose Your Communication Method
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Each method is optimized for different types of inquiries to ensure 
                you get the most relevant and timely response.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {contactMethods?.map((method) => (
                <ContactMethodCard
                  key={method?.id}
                  method={method}
                  onSelect={handleMethodSelect}
                  isSelected={selectedMethod === method?.id}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form Area */}
              <div className="lg:col-span-2">
                {renderSelectedForm()}
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Availability Calendar */}
                {(selectedMethod === 'project' || selectedMethod === 'collaboration') && (
                  <AvailabilityCalendar onSlotSelect={handleSlotSelect} />
                )}
                
                {/* Contact Information */}
                <ContactInfoCard />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Common questions about working together and communication preferences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    What's your typical response time?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    I aim to respond to all inquiries within 4 hours during business hours (9 AM - 6 PM EST). 
                    Project inquiries may take up to 24 hours for a detailed response.
                  </p>
                </div>

                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Do you work with international clients?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Absolutely! I work with clients globally and am experienced in managing 
                    projects across different time zones. I'm flexible with meeting times 
                    to accommodate your schedule.
                  </p>
                </div>

                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    What information should I include in my inquiry?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    The more details you provide, the better I can help. Include your project 
                    goals, timeline, budget range, and any specific technical requirements. 
                    Don't worry if you're not sure about everything - we can discuss details.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Do you offer free consultations?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Yes! I offer a complimentary 30-minute strategy session for potential 
                    projects to discuss your needs and see if we're a good fit. You can 
                    schedule this through the calendar above.
                  </p>
                </div>

                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    What's your availability for new projects?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    My availability varies based on current commitments. I typically book 
                    projects 2-4 weeks in advance, but I can accommodate urgent requests 
                    when possible. Let's discuss your timeline!
                  </p>
                </div>

                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Can you help with existing projects?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Yes! I can help with code reviews, performance optimization, bug fixes, 
                    feature additions, or technical consulting for existing applications. 
                    Use the project inquiry form to describe your current situation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-primary-foreground">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss how I can help bring your ideas to life with clean, 
                scalable, and performant solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => {
                    setSelectedMethod('project');
                    document.querySelector('main')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  iconName="Briefcase"
                  iconPosition="left"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Start Project Discussion
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    setSelectedMethod('quick');
                    document.querySelector('main')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  iconName="MessageSquare"
                  iconPosition="left"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Ask a Quick Question
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <Icon name="Code2" size={20} color="white" />
                </div>
                <span className="text-xl font-bold">DevCraft</span>
              </div>
              <p className="text-secondary-foreground/80 text-sm">
                Building exceptional digital experiences through clean code, 
                innovative solutions, and strategic thinking.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2 text-sm">
                <a href="/" className="block text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Home
                </a>
                <a href="/project-showcase-hub" className="block text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Projects
                </a>
                <a href="/contact-command-center" className="block text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Contact
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/Sahil9111" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  <Icon name="Github" size={20} />
                </a>
                <a href="https://www.linkedin.com/in/sahil-soni-0a4416182/" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
                <a href="mailto:sahilsoni9111@gmail.com" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  <Icon name="Mail" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/60">
            <p>&copy; {new Date()?.getFullYear()} SahilSoni Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactCommandCenter;