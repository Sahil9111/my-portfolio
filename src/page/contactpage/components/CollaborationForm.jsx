import React, { useState } from 'react';
import Input from '../../../components/ui/Input.jsx';
import Button from '../../../components/ui/Button.jsx';
import Select from '../../../components/ui/Select.jsx';
import { Checkbox } from '../../../components/ui/Checkbox.jsx';
import Icon from '../../../components/AppIcon.jsx';

const CollaborationForm = ({ onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    collaborationType: '',
    projectIdea: '',
    skills: [],
    timeline: '',
    hasTeam: false,
    hasFunding: false,
    lookingForCofounder: false,
    openToEquity: false
  });

  const [errors, setErrors] = useState({});

  const collaborationTypes = [
    { value: 'partnership', label: 'Business Partnership' },
    { value: 'cofounder', label: 'Co-founder Opportunity' },
    { value: 'joint-venture', label: 'Joint Venture' },
    { value: 'consulting', label: 'Technical Consulting' },
    { value: 'mentorship', label: 'Mentorship Exchange' },
    { value: 'open-source', label: 'Open Source Collaboration' },
    { value: 'speaking', label: 'Speaking/Conference' },
    { value: 'other', label: 'Other Collaboration' }
  ];

  const skillAreas = [
    { value: 'frontend', label: 'Frontend Development' },
    { value: 'backend', label: 'Backend Development' },
    { value: 'fullstack', label: 'Full-Stack Development' },
    { value: 'mobile', label: 'Mobile Development' },
    { value: 'devops', label: 'DevOps/Infrastructure' },
    { value: 'design', label: 'UI/UX Design' },
    { value: 'product', label: 'Product Management' },
    { value: 'marketing', label: 'Marketing/Growth' },
    { value: 'business', label: 'Business Development' },
    { value: 'data', label: 'Data Science/Analytics' }
  ];

  const timelineOptions = [
    { value: 'immediate', label: 'Immediate (This month)' },
    { value: '1-3-months', label: '1-3 Months' },
    { value: '3-6-months', label: '3-6 Months' },
    { value: '6-12-months', label: '6-12 Months' },
    { value: 'long-term', label: 'Long-term (1+ years)' },
    { value: 'flexible', label: 'Flexible timeline' }
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
    if (!formData?.role?.trim()) newErrors.role = 'Role/title is required';
    if (!formData?.collaborationType) newErrors.collaborationType = 'Collaboration type is required';
    if (!formData?.projectIdea?.trim()) {
      newErrors.projectIdea = 'Project idea is required';
    } else if (formData?.projectIdea?.trim()?.length < 30) {
      newErrors.projectIdea = 'Please provide more details (minimum 30 characters)';
    }
    if (!formData?.timeline) newErrors.timeline = 'Timeline is required';
    
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
        <div className="p-2 bg-success/10 rounded-lg">
          <Icon name="Users" size={20} color={`rgb(var(--color-success))`} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Collaboration Inquiry</h3>
          <p className="text-sm text-muted-foreground">Let's explore partnership opportunities</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Company/Organization"
              type="text"
              name="company"
              placeholder="Acme Corp"
              value={formData?.company}
              onChange={handleChange}
              description="Optional"
            />
            <Input
              label="Your Role/Title"
              type="text"
              name="role"
              placeholder="CTO, Founder, Developer, etc."
              value={formData?.role}
              onChange={handleChange}
              error={errors?.role}
              required
            />
          </div>
        </div>

        {/* Collaboration Details */}
        <div className="space-y-4">
          <h4 className="text-md font-medium text-foreground border-b border-border pb-2">
            Collaboration Details
          </h4>
          
          <Select
            label="Type of Collaboration"
            placeholder="Select collaboration type"
            options={collaborationTypes}
            value={formData?.collaborationType}
            onChange={(value) => handleSelectChange('collaborationType', value)}
            error={errors?.collaborationType}
            required
          />

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Project/Idea Description <span className="text-destructive">*</span>
            </label>
            <textarea
              name="projectIdea"
              rows={4}
              className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none bg-input text-foreground placeholder-muted-foreground"
              placeholder="Describe your project idea, collaboration goals, and what you're looking for in a partner..."
              value={formData?.projectIdea}
              onChange={handleChange}
            />
            {errors?.projectIdea && (
              <p className="mt-1 text-sm text-destructive">{errors?.projectIdea}</p>
            )}
            <p className="mt-1 text-xs text-muted-foreground">
              {formData?.projectIdea?.length}/500 characters (minimum 30)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              label="Skills/Expertise Needed"
              placeholder="Select relevant skills"
              options={skillAreas}
              value={formData?.skills}
              onChange={(value) => handleSelectChange('skills', value)}
              multiple
              searchable
              description="What skills are you looking for?"
            />
            <Select
              label="Timeline"
              placeholder="Select timeline"
              options={timelineOptions}
              value={formData?.timeline}
              onChange={(value) => handleSelectChange('timeline', value)}
              error={errors?.timeline}
              required
            />
          </div>
        </div>

        {/* Project Status */}
        <div className="space-y-4">
          <h4 className="text-md font-medium text-foreground border-b border-border pb-2">
            Project Status
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <Checkbox
                label="I have a team in place"
                description="Existing team members or co-founders"
                checked={formData?.hasTeam}
                onChange={(e) => handleChange({ target: { name: 'hasTeam', type: 'checkbox', checked: e?.target?.checked } })}
              />
              <Checkbox
                label="I have funding secured"
                description="Investment, grants, or self-funded"
                checked={formData?.hasFunding}
                onChange={(e) => handleChange({ target: { name: 'hasFunding', type: 'checkbox', checked: e?.target?.checked } })}
              />
            </div>
            <div className="space-y-3">
              <Checkbox
                label="Looking for a co-founder"
                description="Seeking long-term partnership"
                checked={formData?.lookingForCofounder}
                onChange={(e) => handleChange({ target: { name: 'lookingForCofounder', type: 'checkbox', checked: e?.target?.checked } })}
              />
              <Checkbox
                label="Open to equity arrangements"
                description="Willing to discuss equity compensation"
                checked={formData?.openToEquity}
                onChange={(e) => handleChange({ target: { name: 'openToEquity', type: 'checkbox', checked: e?.target?.checked } })}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-border">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="Handshake" size={16} />
            <span>All discussions are confidential</span>
          </div>
          <Button
            type="submit"
            variant="default"
            loading={isSubmitting}
            iconName="Send"
            iconPosition="right"
            className="bg-success hover:bg-success/90 text-success-foreground"
          >
            Submit Inquiry
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CollaborationForm;