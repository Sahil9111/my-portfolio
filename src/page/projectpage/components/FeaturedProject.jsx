import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon.jsx';
import Image from '../../../components/AppImage.jsx';
import Button from '../../../components/ui/Button.jsx';

const FeaturedProject = ({ project, onViewDetails }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 mb-12 border border-primary/10"
    >
      <div className="flex items-center space-x-2 mb-4">
        <Icon name="Star" size={20} className="text-yellow-500" />
        <span className="text-sm font-medium text-primary">Featured Project</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Project Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-3">{project?.title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project?.description}
            </p>
          </div>

          {/* Key Highlights */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Key Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project?.highlights?.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project?.techStack?.slice(0, 6)?.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-3 gap-4">
            {project?.metrics && Object.entries(project?.metrics)?.map(([key, value], index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-primary">{value}</div>
                <div className="text-xs text-muted-foreground capitalize">{key}</div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button
              variant="default"
              onClick={() => onViewDetails(project)}
              iconName="Eye"
              iconPosition="left"
              className="bg-primary hover:bg-primary/90"
            >
              View Case Study
            </Button>
            {project?.liveUrl && (
              <Button
                variant="outline"
                onClick={() => window.open(project?.liveUrl, '_blank')}
                iconName="ExternalLink"
                iconPosition="right"
              >
                Live Demo
              </Button>
            )}
            {project?.githubUrl && (
              <Button
                variant="ghost"
                onClick={() => window.open(project?.githubUrl, '_blank')}
                iconName="Github"
                iconPosition="left"
                className="text-muted-foreground hover:text-foreground"
              >
                Source Code
              </Button>
            )}
          </div>
        </div>

        {/* Project Image */}
        <div className="relative">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={project?.image}
              alt={project?.title}
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            
            {/* Live Demo Overlay */}
            {project?.liveUrl && (
              <div className="absolute top-4 right-4">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => window.open(project?.liveUrl, '_blank')}
                  iconName="Play"
                  iconPosition="left"
                  className="bg-white/90 text-gray-900 hover:bg-white"
                >
                  Live Demo
                </Button>
              </div>
            )}
          </div>

          {/* Floating Stats */}
          <div className="absolute -bottom-4 -right-4 bg-card rounded-lg shadow-elevation p-4 border border-border">
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-lg font-bold text-success">{project?.rating}</div>
                <div className="text-xs text-muted-foreground">Rating</div>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center">
                <div className="text-lg font-bold text-primary">{project?.duration}</div>
                <div className="text-xs text-muted-foreground">Duration</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProject;