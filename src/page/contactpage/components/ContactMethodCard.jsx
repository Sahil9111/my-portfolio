import React from 'react';
import Icon from '../../../components/AppIcon.jsx';


const ContactMethodCard = ({ method, onSelect, isSelected }) => {
  const getIconColor = () => {
    if (isSelected) return 'white';
    return 'rgb(var(--color-primary))';
  };

  return (
    <div 
      className={`relative p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
        isSelected 
          ? 'border-primary bg-primary text-primary-foreground shadow-lg transform scale-105' 
          : 'border-border bg-card hover:border-accent hover:shadow-md'
      }`}
      onClick={() => onSelect(method?.id)}
    >
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-lg ${
          isSelected ? 'bg-primary-foreground/20' : 'bg-muted'
        }`}>
          <Icon 
            name={method?.icon} 
            size={24} 
            color={getIconColor()}
          />
        </div>
        <div className="flex-1">
          <h3 className={`text-lg font-semibold mb-2 ${
            isSelected ? 'text-primary-foreground' : 'text-foreground'
          }`}>
            {method?.title}
          </h3>
          <p className={`text-sm mb-3 ${
            isSelected ? 'text-primary-foreground/80' : 'text-muted-foreground'
          }`}>
            {method?.description}
          </p>
          <div className="flex items-center space-x-4 text-xs">
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={14} color={getIconColor()} />
              <span className={isSelected ? 'text-primary-foreground/80' : 'text-muted-foreground'}>
                {method?.responseTime}
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Users" size={14} color={getIconColor()} />
              <span className={isSelected ? 'text-primary-foreground/80' : 'text-muted-foreground'}>
                {method?.bestFor}
              </span>
            </div>
          </div>
        </div>
        {isSelected && (
          <div className="absolute top-4 right-4">
            <Icon name="CheckCircle" size={20} color="white" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactMethodCard;