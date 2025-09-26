import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard.jsx';
import Icon from '../../../components/AppIcon.jsx';
import Button from '../../../components/ui/Button.jsx';



const ProjectGrid = ({ projects, onViewDetails, loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)]?.map((_, index) => (
          <div key={index} className="bg-card rounded-xl shadow-elevation p-6 animate-pulse">
            <div className="h-48 bg-muted rounded-lg mb-4" />
            <div className="space-y-3">
              <div className="h-4 bg-muted rounded w-3/4" />
              <div className="h-3 bg-muted rounded w-full" />
              <div className="h-3 bg-muted rounded w-2/3" />
              <div className="flex space-x-2">
                <div className="h-6 bg-muted rounded w-16" />
                <div className="h-6 bg-muted rounded w-20" />
                <div className="h-6 bg-muted rounded w-14" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (projects?.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16"
      >
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="Search" size={32} className="text-muted-foreground" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">No Projects Found</h3>
        <p className="text-muted-foreground mb-6">
          Try adjusting your filters or search terms to find relevant projects.
        </p>
        <Button
          variant="outline"
          onClick={() => window.location?.reload()}
          iconName="RefreshCw"
          iconPosition="left"
        >
          Reset Filters
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {projects?.map((project, index) => (
        <motion.div
          key={project?.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ProjectCard
            project={project}
            onViewDetails={onViewDetails}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectGrid;