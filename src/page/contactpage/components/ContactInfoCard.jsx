import React from 'react';
import Icon from '../../../components/AppIcon.jsx';
import Button from '../../../components/ui/Button.jsx';

const ContactInfoCard = () => {
  const contactMethods = [
    {
      icon: 'Mail',
      label: 'Email',
      value: 'sahilsoni9111@gmail.com',
      action: 'mailto:sahilsoni9111@gmail.com',
      description: 'Best for detailed inquiries'
    },
    {
      icon: 'Linkedin',
      label: 'LinkedIn',
      value: '/in/sahil',
      action: 'https://www.linkedin.com/in/sahil-soni-0a4416182/',
      description: 'Professional networking'
    },
    {
      icon: 'Github',
      label: 'GitHub',
      value: '@sahil',
      action: 'https://github.com/Sahil9111',
      description: 'View my code repositories'
    },
    {
      icon: 'MapPin',
      label: 'Location',
      value: 'Tikamgarh Madhya Pradesh',
      description: 'Available for remote work globally'
    }
  ];

  const responseStats = [
    { label: 'Average Response Time', value: '< 4 hours', icon: 'Clock' },
    { label: 'Response Rate', value: '98%', icon: 'TrendingUp' },
    { label: 'Client Satisfaction', value: '4.9/5', icon: 'Star' }
  ];

  return (
    <div className="space-y-6">
      {/* Contact Methods */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon name="Phone" size={20} color={`rgb(var(--color-foreground))`} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Get In Touch</h3>
            <p className="text-sm text-muted-foreground">Multiple ways to connect</p>
          </div>
        </div>

        <div className="space-y-4">
          {contactMethods?.map((method, index) => (
            <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200">
              <div className="p-2 bg-muted rounded-lg">
                <Icon name={method?.icon} size={18} color={`rgb(var(--color-foreground))`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-foreground">{method?.label}</span>
                  {method?.action && method?.action?.startsWith('http') && (
                    <Icon name="ExternalLink" size={14} color={`rgb(var(--color-muted-foreground)`} />
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{method?.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{method?.description}</p>
              </div>
              {method?.action && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open(method?.action, '_blank')}
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  Connect
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Response Statistics */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-success/10 rounded-lg">
            <Icon name="BarChart3" size={20} color={`rgb(var(--color-success))`} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Response Stats</h3>
            <p className="text-sm text-muted-foreground">My commitment to communication</p>
          </div>
        </div>

        <div className="space-y-4">
          {responseStats?.map((stat, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <div className="flex items-center space-x-3">
                <Icon name={stat?.icon} size={16} color={`rgb(var(--color-success))`} />
                <span className="text-sm text-foreground">{stat?.label}</span>
              </div>
              <span className="text-sm font-semibold text-success">{stat?.value}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Emergency Contact */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-warning/10 rounded-lg">
            <Icon name="AlertTriangle" size={20} color={`rgb(var(--color-warning))`} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Existing Clients</h3>
            <p className="text-sm text-muted-foreground">Critical issues & urgent support</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="p-3 bg-warning/5 border border-warning/20 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Phone" size={16} color={`rgb(var(--color-warning))`} />
              <span className="text-sm font-medium text-foreground">Emergency Hotline</span>
            </div>
            <p className="text-sm text-muted-foreground">
              For production issues or critical bugs affecting live applications
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Available 24/7 for existing clients with active support contracts
            </p>
          </div>
        </div>
      </div>
      {/* Office Hours */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-accent/10 rounded-lg">
            <Icon name="Clock" size={20} color={`rgb(var(--color-accent))`} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Availability</h3>
            <p className="text-sm text-muted-foreground">When you can expect responses</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-foreground">Monday - Friday</span>
            <span className="text-sm font-medium text-success">9:00 AM - 6:00 PM EST</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-foreground">Saturday</span>
            <span className="text-sm font-medium text-warning">10:00 AM - 2:00 PM EST</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-foreground">Sunday</span>
            <span className="text-sm font-medium text-muted-foreground">Emergency only</span>
          </div>
          <div className="pt-2 border-t border-border">
            <p className="text-xs text-muted-foreground">
              Response times may vary during holidays and conference travel. 
              I'll always provide advance notice of any extended unavailability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCard;