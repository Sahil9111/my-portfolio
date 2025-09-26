import React, { useState } from 'react';
import Input from '../../../components/ui/Input.jsx';
import Button from '../../../components/ui/Button.jsx';
import Select from '../../../components/ui/Select.jsx';
import { Checkbox } from '../../../components/ui/Checkbox.jsx';
import Icon from '../../../components/AppIcon.jsx';

const SpeakingMediaForm = ({ onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    requestType: '',
    eventName: '',
    eventDate: '',
    eventLocation: '',
    audienceSize: '',
    topics: [],
    format: '',
    duration: '',
    compensation: '',
    travelRequired: false,
    recordingAllowed: false,
    provideMaterials: false,
    additionalInfo: ''
  });

  const [errors, setErrors] = useState({});

  const requestTypes = [
    { value: 'conference', label: 'Conference Speaking' },
    { value: 'workshop', label: 'Workshop/Training' },
    { value: 'podcast', label: 'Podcast Interview' },
    { value: 'webinar', label: 'Webinar/Online Event' },
    { value: 'panel', label: 'Panel Discussion' },
    { value: 'keynote', label: 'Keynote Address' },
    { value: 'interview', label: 'Media Interview' },
    { value: 'meetup', label: 'Meetup/User Group' },
    { value: 'other', label: 'Other' }
  ];

  const topicOptions = [
    { value: 'react', label: 'React & Modern Frontend' },
    { value: 'fullstack', label: 'Full-Stack Development' },
    { value: 'nodejs', label: 'Node.js & Backend' },
    { value: 'architecture', label: 'Software Architecture' },
    { value: 'performance', label: 'Web Performance' },
    { value: 'devops', label: 'DevOps & Deployment' },
    { value: 'career', label: 'Career Development' },
    { value: 'freelancing', label: 'Freelancing & Business' },
    { value: 'opensource', label: 'Open Source' },
    { value: 'ai-ml', label: 'AI/ML Integration' },
    { value: 'startup', label: 'Startup Technology' },
    { value: 'leadership', label: 'Technical Leadership' }
  ];

  const formatOptions = [
    { value: 'presentation', label: 'Presentation/Talk' },
    { value: 'workshop', label: 'Hands-on Workshop' },
    { value: 'interview', label: 'Interview/Q&A' },
    { value: 'panel', label: 'Panel Discussion' },
    { value: 'demo', label: 'Live Demo/Coding' },
    { value: 'fireside', label: 'Fireside Chat' }
  ];

  const durationOptions = [
    { value: '15-min', label: '15 minutes' },
    { value: '30-min', label: '30 minutes' },
    { value: '45-min', label: '45 minutes' },
    { value: '1-hour', label: '1 hour' },
    { value: '2-hours', label: '2 hours' },
    { value: 'half-day', label: 'Half day (4 hours)' },
    { value: 'full-day', label: 'Full day (8 hours)' },
    { value: 'flexible', label: 'Flexible' }
  ];

  const audienceSizeOptions = [
    { value: 'small', label: 'Small (< 50 people)' },
    { value: 'medium', label: 'Medium (50-200 people)' },
    { value: 'large', label: 'Large (200-500 people)' },
    { value: 'very-large', label: 'Very Large (500+ people)' },
    { value: 'online', label: 'Online (unlimited)' },
    { value: 'unknown', label: 'To be determined' }
  ];

  const compensationOptions = [
    { value: 'paid', label: 'Paid speaking fee' },
    { value: 'expenses', label: 'Travel expenses only' },
    { value: 'volunteer', label: 'Volunteer/Community event' },
    { value: 'discuss', label: 'Open to discussion' }
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
    if (!formData?.organization?.trim()) newErrors.organization = 'Organization is required';
    if (!formData?.role?.trim()) newErrors.role = 'Role is required';
    if (!formData?.requestType) newErrors.requestType = 'Request type is required';
    if (!formData?.eventName?.trim()) newErrors.eventName = 'Event name is required';
    if (!formData?.eventDate) newErrors.eventDate = 'Event date is required';
    if (!formData?.format) newErrors.format = 'Format is required';
    if (!formData?.duration) newErrors.duration = 'Duration is required';
    
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
        <div className="p-2 bg-warning/10 rounded-lg">
          <Icon name="Mic" size={20} color={`rgb(var(--color-warning))`} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Speaking & Media Request</h3>
          <p className="text-sm text-muted-foreground">Conference talks, interviews, and media appearances</p>
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
              label="Organization"
              type="text"
              name="organization"
              placeholder="Conference name, company, etc."
              value={formData?.organization}
              onChange={handleChange}
              error={errors?.organization}
              required
            />
            <Input
              label="Your Role"
              type="text"
              name="role"
              placeholder="Event organizer, producer, etc."
              value={formData?.role}
              onChange={handleChange}
              error={errors?.role}
              required
            />
          </div>
        </div>

        {/* Event Details */}
        <div className="space-y-4">
          <h4 className="text-md font-medium text-foreground border-b border-border pb-2">
            Event Details
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              label="Request Type"
              placeholder="Select request type"
              options={requestTypes}
              value={formData?.requestType}
              onChange={(value) => handleSelectChange('requestType', value)}
              error={errors?.requestType}
              required
            />
            <Input
              label="Event Name"
              type="text"
              name="eventName"
              placeholder="TechConf 2025, DevPodcast, etc."
              value={formData?.eventName}
              onChange={handleChange}
              error={errors?.eventName}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Event Date"
              type="date"
              name="eventDate"
              value={formData?.eventDate}
              onChange={handleChange}
              error={errors?.eventDate}
              required
            />
            <Input
              label="Event Location"
              type="text"
              name="eventLocation"
              placeholder="San Francisco, CA or Virtual"
              value={formData?.eventLocation}
              onChange={handleChange}
              description="City/state or 'Virtual' for online events"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              label="Expected Audience Size"
              placeholder="Select audience size"
              options={audienceSizeOptions}
              value={formData?.audienceSize}
              onChange={(value) => handleSelectChange('audienceSize', value)}
            />
            <Select
              label="Compensation"
              placeholder="Select compensation type"
              options={compensationOptions}
              value={formData?.compensation}
              onChange={(value) => handleSelectChange('compensation', value)}
            />
          </div>
        </div>

        {/* Speaking Details */}
        <div className="space-y-4">
          <h4 className="text-md font-medium text-foreground border-b border-border pb-2">
            Speaking Details
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              label="Preferred Topics"
              placeholder="Select relevant topics"
              options={topicOptions}
              value={formData?.topics}
              onChange={(value) => handleSelectChange('topics', value)}
              multiple
              searchable
              description="What topics would you like me to cover?"
            />
            <Select
              label="Format"
              placeholder="Select format"
              options={formatOptions}
              value={formData?.format}
              onChange={(value) => handleSelectChange('format', value)}
              error={errors?.format}
              required
            />
          </div>

          <Select
            label="Duration"
            placeholder="Select duration"
            options={durationOptions}
            value={formData?.duration}
            onChange={(value) => handleSelectChange('duration', value)}
            error={errors?.duration}
            required
            className="md:w-1/2"
          />
        </div>

        {/* Additional Requirements */}
        <div className="space-y-4">
          <h4 className="text-md font-medium text-foreground border-b border-border pb-2">
            Additional Requirements
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <Checkbox
                label="Travel required"
                description="In-person attendance needed"
                checked={formData?.travelRequired}
                onChange={(e) => handleChange({ target: { name: 'travelRequired', type: 'checkbox', checked: e?.target?.checked } })}
              />
              <Checkbox
                label="Recording allowed"
                description="Session will be recorded/livestreamed"
                checked={formData?.recordingAllowed}
                onChange={(e) => handleChange({ target: { name: 'recordingAllowed', type: 'checkbox', checked: e?.target?.checked } })}
              />
            </div>
            <div className="space-y-3">
              <Checkbox
                label="Provide materials"
                description="Slides, resources, or handouts needed"
                checked={formData?.provideMaterials}
                onChange={(e) => handleChange({ target: { name: 'provideMaterials', type: 'checkbox', checked: e?.target?.checked } })}
              />
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Additional Information
          </label>
          <textarea
            name="additionalInfo"
            rows={4}
            className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none bg-input text-foreground placeholder-muted-foreground"
            placeholder="Any additional details about the event, audience, or specific requirements..."
            value={formData?.additionalInfo}
            onChange={handleChange}
          />
          <p className="mt-1 text-xs text-muted-foreground">
            Include event website, audience background, or any special requests
          </p>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-border">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="Calendar" size={16} />
            <span>I'll respond within 48 hours</span>
          </div>
          <Button
            type="submit"
            variant="default"
            loading={isSubmitting}
            iconName="Send"
            iconPosition="right"
            className="bg-warning hover:bg-warning/90 text-warning-foreground"
          >
            Submit Request
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SpeakingMediaForm;