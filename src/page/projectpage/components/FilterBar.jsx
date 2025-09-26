import React from 'react';
import Icon from '../../../components/AppIcon.jsx';
import Button from '../../../components/ui/Button.jsx';
import Input from '../../../components/ui/Input.jsx';

const FilterBar = ({ 
  searchTerm, 
  onSearchChange, 
  selectedFilters, 
  onFilterChange, 
  onClearFilters,
  projectCount 
}) => {
  const filterCategories = {
    type: {
      label: 'Project Type',
      options: ['All', 'Full-Stack', 'Frontend', 'Backend', 'Mobile', 'DevOps']
    },
    technology: {
      label: 'Technology',
      options: ['All', 'React', 'Node.js', 'Python', 'TypeScript', 'Vue.js', 'Django', 'Next.js']
    },
    industry: {
      label: 'Industry',
      options: ['All', 'E-commerce', 'Healthcare', 'Finance', 'Education', 'SaaS', 'Entertainment']
    },
    complexity: {
      label: 'Complexity',
      options: ['All', 'Simple', 'Medium', 'Complex', 'Enterprise']
    }
  };

  const handleFilterClick = (category, value) => {
    onFilterChange(category, value);
  };

  const getActiveFiltersCount = () => {
    return Object.values(selectedFilters)?.filter(value => value !== 'All')?.length;
  };

  return (
    <div className="bg-card rounded-xl shadow-elevation p-6 mb-8">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Input
            type="search"
            placeholder="Search projects by name, technology, or description..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e?.target?.value)}
            className="pl-10"
          />
          <Icon 
            name="Search" 
            size={20} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
          />
        </div>
      </div>
      {/* Filter Categories */}
      <div className="space-y-4">
        {Object.entries(filterCategories)?.map(([category, config]) => {
          const { label, options } = config;
          return (
            <div key={category}>
              <h4 className="text-sm font-medium text-foreground mb-2">{label}</h4>
              <div className="flex flex-wrap gap-2">
                {options?.map((option) => (
                  <Button
                    key={option}
                    variant={selectedFilters?.[category] === option ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handleFilterClick(category, option)}
                    className={`transition-all duration-200 ${
                      selectedFilters?.[category] === option 
                        ? 'bg-primary text-primary-foreground' 
                        : 'hover:bg-muted'
                    }`}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      {/* Filter Actions and Results */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
        <div className="flex items-center space-x-4">
          <div className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{projectCount}</span> projects found
          </div>
          {getActiveFiltersCount() > 0 && (
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">
                {getActiveFiltersCount()} filter{getActiveFiltersCount() > 1 ? 's' : ''} active
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClearFilters}
                iconName="X"
                iconPosition="left"
                className="text-muted-foreground hover:text-foreground"
              >
                Clear All
              </Button>
            </div>
          )}
        </div>

        {/* Sort Options */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <Button variant="ghost" size="sm" className="text-foreground">
            Latest
            <Icon name="ChevronDown" size={16} className="ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;