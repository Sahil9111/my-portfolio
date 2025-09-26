import React, { useState } from 'react';
import Input from '../../../components/ui/Input.jsx';
import Button from '../../../components/ui/Button.jsx';
import Select from '../../../components/ui/Select.jsx';
import { Checkbox } from '../../../components/ui/Checkbox.jsx';
import Icon from '../../../components/AppIcon.jsx';

const ProjectInquiryForm = ({ onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectTitle: '',
    projectDescription: '',
    budget: '',
    timeline: '',
    projectType: '',
    technologies: [],
    hasDesigns: false,
    hasContent: false,
    needsConsultation: false
  });

  const [errors, setErrors] = useState({});

  const budgetOptions = [
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-15k', label: '$5,000 - $15,000' },
    { value: '15k-50k', label: '$15,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: 'over-100k', label: 'Over $100,000' },
    { value: 'discuss', label: 'Let\'s discuss' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP (Rush job)' },
    { value: '1-month', label: '1 Month' },
    { value: '2-3-months', label: '2-3 Months' },
    { value: '3-6-months', label: '3-6 Months' },
    { value: '6-months-plus', label: '6+ Months' },
    { value: 'flexible', label: 'Flexible timeline' }
  ];

  const projectTypeOptions = [
    { value: 'web-app', label: 'Web Application' },
    { value: 'mobile-app', label: 'Mobile Application' },
    { value: 'ecommerce', label: 'E-commerce Platform' },
    { value: 'portfolio', label: 'Portfolio/Business Website' },
    { value: 'saas', label: 'SaaS Platform' },
    { value: 'api', label: 'API Development' },
    { value: 'other', label: 'Other' }
  ];

  const technologyOptions = [
    { value: 'react', label: 'React' },
    { value: 'nextjs', label: 'Next.js' },
    { value: 'nodejs', label: 'Node.js' },
    { value: 'python', label: 'Python' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'mongodb', label: 'MongoDB' },
    { value: 'postgresql', label: 'PostgreSQL' },
    { value: 'aws', label: 'AWS' },
    { value: 'docker', label: 'Docker' },
    { value: 'graphql', label: 'GraphQL' }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors?.[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors?.[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData?.name?.trim()) newErrors.name = 'Name is required';
    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData?.projectTitle?.trim()) newErrors.projectTitle = 'Project title is required';
    if (!formData?.projectDescription?.trim()) {
      newErrors.projectDescription = 'Project description is required';
    } else if (formData?.projectDescription?.trim()?.length < 50) {
      newErrors.projectDescription = 'Please provide more details (minimum 50 characters)';
    }
    if (!formData?.budget) newErrors.budget = 'Budget range is required';
    if (!formData?.timeline) newErrors.timeline = 'Timeline is required';
    if (!formData?.projectType) newErrors.projectType = 'Project type is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="bg-card rounded-xl p-6 border border-border">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Icon name="Briefcase" size={20} color={`rgb(var(--color-primary))`} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Project Inquiry</h3>
          <p className="text-sm text-muted-foreground">Let's discuss your project in detail</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Contact Information */}
        <div className="space-y-4">
          <h4 className="text-md font-medium text-foreground border-b border-border pb-2">
            Contact Information
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Full Name"
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData?.name}
              onChange={handleChange}
              error={errors?.name}
              required
            />
            <Input
              label="Email Address"
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData?.email}
              onChange={handleChange}
              error={errors?.email}
              required
            />
          </div>
          <Input
            label="Company/Organization"
            type="text"
            name="company"
            placeholder="Acme Corp (Optional)"
            value={formData?.company}
            onChange={handleChange}
            description="Optional - helps me understand your context"
          />
        </div>

        {/* Project Details */}
        <div className="space-y-4">
          <h4 className="text-md font-medium text-foreground border-b border-border pb-2">
            Project Details
          </h4>
          <Input
            label="Project Title"
            type="text"
            name="projectTitle"
            placeholder="My Awesome Project"
            value={formData?.projectTitle}
            onChange={handleChange}
            error={errors?.projectTitle}
            required
          />
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Project Description <span className="text-destructive">*</span>
            </label>
            <textarea
              name="projectDescription"
              rows={5}
              className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none bg-input text-foreground placeholder-muted-foreground"
              placeholder="Describe your project goals, target audience, key features, and any specific requirements..."
              value={formData?.projectDescription}
              onChange={handleChange}
            />
            {errors?.projectDescription && (
              <p className="mt-1 text-sm text-destructive">{errors?.projectDescription}</p>
            )}
            <p className="mt-1 text-xs text-muted-foreground">
              {formData?.projectDescription?.length}/500 characters (minimum 50)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              label="Project Type"
              placeholder="Select project type"
              options={projectTypeOptions}
              value={formData?.projectType}
              onChange={(value) => handleSelectChange('projectType', value)}
              error={errors?.projectType}
              required
            />
            <Select
              label="Preferred Technologies"
              placeholder="Select technologies"
              options={technologyOptions}
              value={formData?.technologies}
              onChange={(value) => handleSelectChange('technologies', value)}
              multiple
              searchable
              description="Optional - I'll recommend the best stack"
            />
          </div>
        </div>

        {/* Budget & Timeline */}
        <div className="space-y-4">
          <h4 className="text-md font-medium text-foreground border-b border-border pb-2">
            Budget & Timeline
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              label="Budget Range"
              placeholder="Select budget range"
              options={budgetOptions}
              value={formData?.budget}
              onChange={(value) => handleSelectChange('budget', value)}
              error={errors?.budget}
              required
              description="All estimates are confidential"
            />
            <Select
              label="Desired Timeline"
              placeholder="Select timeline"
              options={timelineOptions}
              value={formData?.timeline}
              onChange={(value) => handleSelectChange('timeline', value)}
              error={errors?.timeline}
              required
            />
          </div>
        </div>

        {/* Project Assets */}
        <div className="space-y-4">
          <h4 className="text-md font-medium text-foreground border-b border-border pb-2">
            Project Assets
          </h4>
          <div className="space-y-3">
            <Checkbox
              label="I have designs/wireframes ready"
              description="Figma, Sketch, or other design files"
              checked={formData?.hasDesigns}
              onChange={(e) => handleChange({ target: { name: 'hasDesigns', type: 'checkbox', checked: e?.target?.checked } })}
            />
            <Checkbox
              label="I have content prepared"
              description="Text, images, and other content materials"
              checked={formData?.hasContent}
              onChange={(e) => handleChange({ target: { name: 'hasContent', type: 'checkbox', checked: e?.target?.checked } })}
            />
            <Checkbox
              label="I need a consultation call first"
              description="30-minute strategy session to discuss requirements"
              checked={formData?.needsConsultation}
              onChange={(e) => handleChange({ target: { name: 'needsConsultation', type: 'checkbox', checked: e?.target?.checked } })}
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-border">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="Lock" size={16} />
            <span>All project details are confidential</span>
          </div>
          <Button
            type="submit"
            variant="default"
            loading={isSubmitting}
            iconName="Send"
            iconPosition="right"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Submit Inquiry
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProjectInquiryForm;