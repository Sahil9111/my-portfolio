import React, { useState } from 'react';
import Input from '../../../components/ui/Input.jsx';
import Button from '../../../components/ui/Button.jsx';
import Icon from '../../../components/AppIcon.jsx';

const QuickContactForm = ({ onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors?.[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData?.name?.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData?.subject?.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData?.message?.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData?.message?.trim()?.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
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
        <div className="p-2 bg-accent/10 rounded-lg">
          <Icon name="MessageSquare" size={20} color={`rgb(var(--color-accent))`} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Quick Contact</h3>
          <p className="text-sm text-muted-foreground">Get in touch for general inquiries</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
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
          label="Subject"
          type="text"
          name="subject"
          placeholder="What's this about?"
          value={formData?.subject}
          onChange={handleChange}
          error={errors?.subject}
          required
        />

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Message <span className="text-destructive">*</span>
          </label>
          <textarea
            name="message"
            rows={4}
            className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none bg-input text-foreground placeholder-muted-foreground"
            placeholder="Tell me about your inquiry..."
            value={formData?.message}
            onChange={handleChange}
          />
          {errors?.message && (
            <p className="mt-1 text-sm text-destructive">{errors?.message}</p>
          )}
        </div>

        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="Shield" size={16} />
            <span>Your information is secure</span>
          </div>
          <Button
            type="submit"
            variant="default"
            loading={isSubmitting}
            iconName="Send"
            iconPosition="right"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
};

export default QuickContactForm;