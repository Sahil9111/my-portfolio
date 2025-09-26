import React, { useState } from 'react';
import Icon from '../../../components/AppIcon.jsx';
import Image from '../../../components/AppImage.jsx';
import Button from '../../../components/ui/Button.jsx';
import { useNavigate } from 'react-router-dom';

const FeaturedProjects = () => {
  const navigate = useNavigate();
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Real-Time Chat Application",
      description: "A full-stack SaaS chat solution built with React, Node.js, and MongoDB, featuring real-time messaging with WebSockets, user presence indicators, message history, and seamless multi-platform support.",
      image: "https://plus.unsplash.com/premium_photo-1719282201356-9a00daff3af5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      techStack: ["React", "Node.js", "MongoDB"],
      metrics: {
        performance: "99.9% uptime",
        users: "10K+ active users",
        revenue: "$2M+ processed"
      },
      liveDemo: "https://echolet-frontend.onrender.com/",
      github: "https://github.com/Sahil9111/-echolet-backend",
      category: "Full-Stack",
      status: "Live"
    },
    // {
    //   id: 2,
    //   title: "AI-Powered Analytics Dashboard",
    //   description: "Machine learning dashboard for predictive analytics with real-time data visualization and automated reporting features.",
    //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    //   techStack: ["Python", "React", "TensorFlow", "D3.js", "Docker"],
    //   metrics: {
    //     accuracy: "94% prediction accuracy",
    //     processing: "1M+ data points/day",
    //     insights: "500+ automated reports"
    //   },
    //   liveDemo: "https://demo-analytics.com",
    //   github: "https://github.com/devcraft/ai-dashboard",
    //   category: "AI/ML",
    //   status: "Live"
    // },
    // {
    //   id: 3,
    //   title: "Real-Time Collaboration Tool",
    //   description: "WebRTC-based collaboration platform with video conferencing, screen sharing, and synchronized document editing.",
    //   image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    //   techStack: ["React", "WebRTC", "Socket.io", "MongoDB", "Redis"],
    //   metrics: {
    //     latency: "<50ms response time",
    //     concurrent: "1K+ concurrent users",
    //     reliability: "99.8% connection success"
    //   },
    //   liveDemo: "https://demo-collab.com",
    //   github: "https://github.com/devcraft/collab-tool",
    //   category: "Real-Time",
    //   status: "Beta"
    // },
    // {
    //   id: 4,
    //   title: "Blockchain Voting System",
    //   description: "Secure, transparent voting platform built on Ethereum with smart contracts and decentralized identity verification.",
    //   image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop",
    //   techStack: ["Solidity", "React", "Web3.js", "IPFS", "Ethereum"],
    //   metrics: {
    //     security: "Zero security breaches",
    //     transparency: "100% vote traceability",
    //     efficiency: "90% cost reduction"
    //   },
    //   liveDemo: "https://demo-voting.com",
    //   github: "https://github.com/devcraft/blockchain-voting",
    //   category: "Blockchain",
    //   status: "Live"
    // }
  ];

  const handleProjectChange = (index) => {
    setActiveProject(index);
  };

  const currentProject = projects?.[activeProject];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-accent font-mono text-sm mb-4">
            <Icon name="Folder" size={16} />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projects That Drive Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my latest work showcasing full-stack development, AI integration, 
            and innovative solutions that solve real business challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Project Showcase */}
          <div className="relative">
            <div className="bg-card border border-border rounded-xl shadow-elevation overflow-hidden">
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={currentProject?.image}
                  alt={currentProject?.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    currentProject?.status === 'Live' ?'bg-success text-success-foreground' :'bg-warning text-warning-foreground'
                  }`}>
                    {currentProject?.status}
                  </div>
                  <div className="px-2 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
                    {currentProject?.category}
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a
                    href={currentProject?.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-background/80 backdrop-blur-sm rounded-full text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                  >
                    <Icon name="ExternalLink" size={16} />
                  </a>
                  <a
                    href={currentProject?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-background/80 backdrop-blur-sm rounded-full text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                  >
                    <Icon name="Github" size={16} />
                  </a>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {currentProject?.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {currentProject?.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProject?.techStack?.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {Object.entries(currentProject?.metrics)?.map(([key, value], index) => (
                    <div key={index} className="text-center p-3 bg-muted rounded-lg">
                      <div className="text-lg font-bold text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="default"
                    onClick={() => window.open(currentProject?.liveDemo, '_blank')}
                    iconName="ExternalLink"
                    iconPosition="right"
                    className="bg-cta hover:bg-cta/90 text-cta-foreground flex-1"
                  >
                    View Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.open(currentProject?.github, '_blank')}
                    iconName="Github"
                    iconPosition="left"
                    className="flex-1"
                  >
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Project Navigation */}
          <div className="space-y-4">
            {projects?.map((project, index) => (
              <div
                key={project?.id}
                onClick={() => handleProjectChange(index)}
                className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                  index === activeProject
                    ? 'border-accent bg-accent/5 shadow-elevation'
                    : 'border-border bg-card hover:border-accent/50 hover:bg-accent/5'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg overflow-hidden">
                      <Image
                        src={project?.image}
                        alt={project?.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-lg font-semibold text-foreground truncate">
                        {project?.title}
                      </h4>
                      <div className={`w-2 h-2 rounded-full ${
                        index === activeProject ? 'bg-accent' : 'bg-muted-foreground'
                      }`}></div>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                      {project?.description}
                    </p>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-accent font-medium">{project?.category}</span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">{project?.techStack?.length} technologies</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* View All Projects Button */}
            <div className="pt-4">
              <Button
                variant="outline"
                fullWidth
                onClick={() => navigate('/project-showcase-hub')}
                iconName="ArrowRight"
                iconPosition="right"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;