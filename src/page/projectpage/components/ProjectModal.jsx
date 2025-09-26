import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [copiedCode, setCopiedCode] = useState('');

  if (!project) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Eye' },
    { id: 'technical', label: 'Technical Details', icon: 'Code2' },
    { id: 'results', label: 'Results & Impact', icon: 'TrendingUp' },
    { id: 'code', label: 'Code Samples', icon: 'FileCode' }
  ];

  const copyToClipboard = (code, id) => {
    navigator.clipboard?.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const renderOverviewTab = () => (
    <div className="space-y-6">
      {/* Project Hero */}
      <div className="relative h-64 rounded-lg overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h2 className="text-2xl font-bold text-white mb-2">{project?.title}</h2>
          <p className="text-white/90">{project?.description}</p>
        </div>
      </div>

      {/* Challenge Section */}
      <div className="bg-muted/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
          <Icon name="Target" size={20} className="mr-2 text-primary" />
          Challenge
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {project?.challenge}
        </p>
      </div>

      {/* Solution Approach */}
      <div className="bg-card rounded-lg p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
          <Icon name="Lightbulb" size={20} className="mr-2 text-accent" />
          Solution Approach
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          {project?.approach}
        </p>
        
        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project?.keyFeatures?.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <Icon name="CheckCircle" size={16} className="text-success mt-1 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Project Links */}
      <div className="flex flex-wrap gap-4">
        {project?.liveUrl && (
          <Button
            variant="default"
            onClick={() => window.open(project?.liveUrl, '_blank')}
            iconName="ExternalLink"
            iconPosition="right"
            className="bg-primary hover:bg-primary/90"
          >
            View Live Demo
          </Button>
        )}
        {project?.githubUrl && (
          <Button
            variant="outline"
            onClick={() => window.open(project?.githubUrl, '_blank')}
            iconName="Github"
            iconPosition="left"
          >
            View Source Code
          </Button>
        )}
      </div>
    </div>
  );

  const renderTechnicalTab = () => (
    <div className="space-y-6">
      {/* Architecture Diagram */}
      <div className="bg-card rounded-lg p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
          <Icon name="Network" size={20} className="mr-2 text-primary" />
          System Architecture
        </h3>
        <div className="bg-muted/30 rounded-lg p-8 text-center">
          <Icon name="Layers" size={48} className="mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground">Architecture diagram would be displayed here</p>
        </div>
      </div>

      {/* Tech Stack Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card rounded-lg p-6 border border-border">
          <h4 className="font-semibold text-foreground mb-3 flex items-center">
            <Icon name="Layers" size={18} className="mr-2 text-accent" />
            Frontend Technologies
          </h4>
          <div className="space-y-2">
            {project?.techStack?.filter(tech => 
              ['React', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS']?.includes(tech)
            )?.map((tech, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{tech}</span>
                <div className="w-16 h-2 bg-muted rounded-full">
                  <div className="h-full bg-accent rounded-full" style={{ width: '85%' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <h4 className="font-semibold text-foreground mb-3 flex items-center">
            <Icon name="Server" size={18} className="mr-2 text-success" />
            Backend Technologies
          </h4>
          <div className="space-y-2">
            {project?.techStack?.filter(tech => 
              ['Node.js', 'Python', 'Django', 'Express', 'MongoDB', 'PostgreSQL']?.includes(tech)
            )?.map((tech, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{tech}</span>
                <div className="w-16 h-2 bg-muted rounded-full">
                  <div className="h-full bg-success rounded-full" style={{ width: '90%' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Implementation Challenges */}
      <div className="bg-muted/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
          <Icon name="AlertTriangle" size={20} className="mr-2 text-warning" />
          Technical Challenges & Solutions
        </h3>
        <div className="space-y-4">
          {project?.technicalChallenges?.map((challenge, index) => (
            <div key={index} className="border-l-4 border-primary pl-4">
              <h4 className="font-medium text-foreground mb-1">{challenge?.title}</h4>
              <p className="text-sm text-muted-foreground mb-2">{challenge?.problem}</p>
              <p className="text-sm text-success font-medium">Solution: {challenge?.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderResultsTab = () => (
    <div className="space-y-6">
      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {project?.performanceMetrics?.map((metric, index) => (
          <div key={index} className="bg-card rounded-lg p-6 border border-border text-center">
            <div className="text-3xl font-bold text-primary mb-2">{metric?.value}</div>
            <div className="text-sm text-muted-foreground mb-1">{metric?.label}</div>
            <div className="flex items-center justify-center text-xs text-success">
              <Icon name="TrendingUp" size={14} className="mr-1" />
              {metric?.improvement}
            </div>
          </div>
        ))}
      </div>

      {/* Business Impact */}
      <div className="bg-card rounded-lg p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
          <Icon name="BarChart3" size={20} className="mr-2 text-success" />
          Business Impact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-foreground mb-3">Key Achievements</h4>
            <ul className="space-y-2">
              {project?.businessImpact?.achievements?.map((achievement, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-3">ROI Metrics</h4>
            <div className="space-y-3">
              {project?.businessImpact?.roi?.map((metric, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{metric?.label}</span>
                  <span className="font-semibold text-success">{metric?.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* User Feedback */}
      <div className="bg-muted/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
          <Icon name="MessageSquare" size={20} className="mr-2 text-accent" />
          Client Testimonial
        </h3>
        <blockquote className="text-muted-foreground italic mb-4">
          "{project?.testimonial?.quote}"
        </blockquote>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-medium">
              {project?.testimonial?.author?.charAt(0)}
            </span>
          </div>
          <div>
            <div className="font-medium text-foreground">{project?.testimonial?.author}</div>
            <div className="text-sm text-muted-foreground">{project?.testimonial?.position}</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCodeTab = () => (
    <div className="space-y-6">
      {project?.codeSnippets?.map((snippet, index) => (
        <div key={index} className="bg-card rounded-lg border border-border overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border">
            <div className="flex items-center space-x-2">
              <Icon name="FileCode" size={16} className="text-primary" />
              <span className="font-medium text-foreground">{snippet?.title}</span>
              <span className="text-xs text-muted-foreground px-2 py-1 bg-muted rounded">
                {snippet?.language}
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => copyToClipboard(snippet?.code, `code-${index}`)}
              iconName={copiedCode === `code-${index}` ? "Check" : "Copy"}
              iconPosition="left"
              className="text-muted-foreground hover:text-foreground"
            >
              {copiedCode === `code-${index}` ? 'Copied!' : 'Copy'}
            </Button>
          </div>
          <div className="p-4">
            <p className="text-sm text-muted-foreground mb-4">{snippet?.description}</p>
            <pre className="bg-muted/50 rounded-lg p-4 overflow-x-auto text-sm font-mono">
              <code>{snippet?.code}</code>
            </pre>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-background rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-2xl font-bold text-foreground">{project?.title}</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                iconName="X"
                className="text-muted-foreground hover:text-foreground"
              />
            </div>

            {/* Tabs */}
            <div className="flex border-b border-border">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                    activeTab === tab?.id
                      ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name={tab?.icon} size={16} />
                  <span>{tab?.label}</span>
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              {activeTab === 'overview' && renderOverviewTab()}
              {activeTab === 'technical' && renderTechnicalTab()}
              {activeTab === 'results' && renderResultsTab()}
              {activeTab === 'code' && renderCodeTab()}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;