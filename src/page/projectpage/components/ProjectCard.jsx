import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon.jsx';
import Image from '../../../components/AppImage.jsx';
import Button from '../../../components/ui/Button.jsx';

const ProjectCard = ({ project, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getTechBadgeColor = (tech) => {
    const colors = {
      'React': 'bg-blue-100 text-blue-800',
      'Node.js': 'bg-green-100 text-green-800',
      'Python': 'bg-yellow-100 text-yellow-800',
      'TypeScript': 'bg-blue-100 text-blue-900',
      'MongoDB': 'bg-green-100 text-green-900',
      'PostgreSQL': 'bg-indigo-100 text-indigo-800',
      'Express': 'bg-gray-100 text-gray-800',
      'Next.js': 'bg-black text-white',
      // 'Vue.js': 'bg-green-100 text-green-700',
      'Django': 'bg-green-100 text-green-900',
      'AWS': 'bg-orange-100 text-orange-800',
      'Docker': 'bg-blue-100 text-blue-700',
      // 'Redis': 'bg-red-100 text-red-800',
      // 'GraphQL': 'bg-pink-100 text-pink-800'
    };
    return colors?.[tech] || 'bg-gray-100 text-gray-700';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-xl shadow-elevation hover:shadow-lg transition-all duration-300 overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Live Demo Button Overlay */}
        {project?.liveUrl && (
          <div className="absolute top-4 right-4">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => window.open(project?.liveUrl, '_blank')}
              iconName="ExternalLink"
              iconPosition="right"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Live Demo
            </Button>
          </div>
        )}

        {/* Project Type Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            project?.type === 'Full-Stack' ? 'bg-primary text-primary-foreground' :
            project?.type === 'Frontend' ? 'bg-accent text-accent-foreground' :
            project?.type === 'Backend' ? 'bg-secondary text-secondary-foreground' :
            'bg-muted text-muted-foreground'
          }`}>
            {project?.type}
          </span>
        </div>
      </div>
      {/* Project Content */}
      <div className="p-6">
        {/* Title and Description */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
            {project?.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-3">
            {project?.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project?.techStack?.slice(0, 4)?.map((tech, index) => (
            <span
              key={index}
              className={`px-2 py-1 rounded-md text-xs font-medium ${getTechBadgeColor(tech)}`}
            >
              {tech}
            </span>
          ))}
          {project?.techStack?.length > 4 && (
            <span className="px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground">
              +{project?.techStack?.length - 4} more
            </span>
          )}
        </div>

        {/* Project Stats */}
        <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={16} />
              <span>{project?.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Users" size={16} />
              <span>{project?.teamSize}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Star" size={16} className="text-yellow-500" />
            <span className="font-medium">{project?.rating}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {project?.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(project?.githubUrl, '_blank')}
                iconName="Github"
                iconPosition="left"
              >
                Code
              </Button>
            )}
          </div>
          
          <Button
            variant="default"
            size="sm"
            onClick={() => onViewDetails(project)}
            iconName="ArrowRight"
            iconPosition="right"
            className="bg-primary hover:bg-primary/90"
          >
            View Details
          </Button>
        </div>

        {/* Performance Metrics Preview */}
        {project?.metrics && (
          <div className="mt-4 pt-4 border-t border-border">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-lg font-semibold text-success">
                  {project?.metrics?.performance}
                </div>
                <div className="text-xs text-muted-foreground">Performance</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-primary">
                  {project?.metrics?.impact}
                </div>
                <div className="text-xs text-muted-foreground">Impact</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;