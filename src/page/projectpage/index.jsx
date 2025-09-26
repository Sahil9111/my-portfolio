import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header.jsx';
import Icon from '../../components/AppIcon.jsx';
import Button from '../../components/ui/Button.jsx';
import FilterBar from './components/FilterBar.jsx';
import FeaturedProject from './components/FeaturedProject.jsx';
import ProjectGrid from './components/ProjectGrid.jsx';
import ProjectModal from './components/ProjectModal.jsx';

const ProjectShowcaseHub = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    type: 'All',
    technology: 'All',
    industry: 'All',
    complexity: 'All'
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Mock Projects Data
  const allProjects = [
    {
      id: 1,
      title: "Real-Time Chat Application",
      description: "A full-stack SaaS chat solution built with React, Node.js, and MongoDB, featuring real-time messaging with WebSockets, user presence indicators, message history, and seamless multi-platform support.",
      image: "https://plus.unsplash.com/premium_photo-1719282201356-9a00daff3af5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "Full-Stack",
      industry: "SaaS",
      complexity: "Medium",
      techStack: ["React", "Node.js", "MongoDB", "Express"],
      duration: "1.5 months",
      teamSize: "1 developers",
      rating: "4.9",
      liveUrl: "https://echolet-frontend.onrender.com/",
      githubUrl: "https://github.com/Sahil9111/-echolet-backend",
      metrics: {
        performance: "+40%",
        impact: "+25%"
      },
      challenge: `Needed a modern web application that could deliver fast, responsive user experiences while supporting real-time communication features and scalable performance for growing traffic demands.`,
      approach: `Built the solution using the MERN stack (MongoDB, Express.js, React, and Node.js) with WebSocket integration for real-time updates. Implemented efficient state management on the frontend, optimized database queries for performance, and deployed the application on render.com.`,
     keyFeatures: [
    "Real-time inventory updates using WebSockets",
    "Dynamic user filtering and search with React",
    "Integration with multiple payment gateways",
    "Fully responsive, mobile-first design",
  ],
      performanceMetrics: [
        { label: "Load Time Improvement", value: "40%", improvement: "vs previous system" },
        { label: "Conversion Rate", value: "25%", improvement: "increase" },
        { label: "User Satisfaction", value: "4.9/5", improvement: "rating" }
      ],
      businessImpact: {
        achievements: [
          "Reduced cart abandonment by 35%",
          "Increased average order value by 28%",
          "Improved customer retention by 45%",
          "Decreased support tickets by 50%"
        ],
        roi: [
          { label: "Revenue Increase", value: "+180%" },
          { label: "Cost Reduction", value: "-45%" },
          { label: "Time to Market", value: "-60%" }
        ]
      },
      technicalChallenges: [
        {
          title: "Real-time Messaging",
          problem: "Enabling instant communication between users with low latency and reliable delivery.",
          solution: "Implemented WebSocket-based communication with Node.js backend  real-time message synchronization across all connected clients."
        },
        {
          title: "High Traffic Scalability",
          problem: "Handling traffic spikes during sales events",
          solution: "Auto-scaling infrastructure with load balancers and CDN optimization"
        }
      ],
      testimonial: {
        quote: "This platform transformed our business. The performance improvements and user experience exceeded all expectations.",
        author: "Sarah Johnson",
        position: "CEO, RetailCorp"
      },
      codeSnippets: [
        {
          title: "Real-time two way communication",
          language: "JavaScript",
          description: "WebSocket implementation for real-time inventory synchronization",
          code: `// Real-time communication system

// Connect to DB
connectDB().then(() => {
  const server = http.createServer(app);
  const io = new Server(server, {
    pingTimeout: 60000,
    cors: {
      origin: [process.env.CORS_ORIGIN, "http://localhost:5173"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log("🔌 User connected to Socket.IO:", socket.id);

    // Setup user
    socket.on("setup", (userData) => {
      socket.join(userData._id);
      socket.emit("connected");
      console.log(\`User setup complete: \${userData._id}\`);
    });

    // Join chat room
    socket.on("join chat", (room) => {
      socket.join(room);
      console.log(\`User joined chat room: \${room}\`);
    });

    // Handle new message
    socket.on("new message", (newMessageReceived) => {
      const chat = newMessageReceived.chat;
      if (!chat?.users) {
        console.log("Chat users not defined!");
        return;
      }

      // Send to all users except the sender
      chat.users.forEach((user) => {
        if (user._id !== newMessageReceived.sender._id) {
          socket.to(user._id).emit("messageReceived", newMessageReceived);
        }
      });
    });

    // Disconnect
    socket.on("disconnect", () => {
      console.log("❌ User disconnected:", socket.id);
    });
  });

  const PORT = process.env.PORT || 5000;
  server.listen(PORT, () => console.log(\`🚀 Server running on port \${PORT}\`));
}).catch((error) => {
  console.error("Database connection error:", error);
});`
        }
      ],
      highlights: [
        "40% faster load times",
        "Real-time inventory sync",
        "25% conversion increase",
        "Enterprise-grade security"
      ]
    },
    // {
    //   id: 2,
    //   title: "Healthcare Management System",
    //   description: "A secure patient management platform with appointment scheduling, medical records, and telemedicine capabilities built with React and Python Django.",
    //   image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?w=800&h=600&fit=crop",
    //   type: "Full-Stack",
    //   industry: "Healthcare",
    //   complexity: "Enterprise",
    //   techStack: ["React", "Python", "Django", "PostgreSQL", "Redis", "Docker"],
    //   duration: "8 months",
    //   teamSize: "6 developers",
    //   rating: "4.8",
    //   liveUrl: "https://demo-healthcare.example.com",
    //   githubUrl: "https://github.com/example/healthcare-system",
    //   metrics: {
    //     performance: "+50%",
    //     impact: "+60%"
    //   },
    //   challenge: `Healthcare providers needed a comprehensive digital solution to manage patient records, appointments, and telemedicine consultations while ensuring HIPAA compliance and data security.`,
    //   approach: `Developed a secure, scalable platform using React for the frontend and Django REST framework for the backend. Implemented role-based access control, encrypted data storage, and integrated video calling for telemedicine.`,
    //   keyFeatures: [
    //     "HIPAA-compliant patient records",
    //     "Appointment scheduling system",
    //     "Telemedicine video consultations",
    //     "Prescription management",
    //     "Insurance claim processing",
    //     "Medical report generation"
    //   ]
    // },
    // {
    //   id: 3,
    //   title: "Financial Dashboard Analytics",
    //   description: "Real-time financial analytics dashboard with interactive charts, portfolio tracking, and automated reporting for investment management firms.",
    //   image: "https://images.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg?w=800&h=600&fit=crop",
    //   type: "Frontend",
    //   industry: "Finance",
    //   complexity: "Complex",
    //   techStack: ["React", "TypeScript", "D3.js", "Node.js", "MongoDB"],
    //   duration: "4 months",
    //   teamSize: "3 developers",
    //   rating: "4.7",
    //   liveUrl: "https://demo-finance.example.com",
    //   githubUrl: "https://github.com/example/finance-dashboard",
    //   metrics: {
    //     performance: "+35%",
    //     impact: "+45%"
    //   }
    // },
    // {
    //   id: 4,
    //   title: "Educational Learning Platform",
    //   description: "Interactive online learning platform with video streaming, progress tracking, and collaborative tools for educational institutions.",
    //   image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    //   type: "Full-Stack",
    //   industry: "Education",
    //   complexity: "Complex",
    //   techStack: ["Vue.js", "Node.js", "MongoDB", "Express", "WebRTC"],
    //   duration: "5 months",
    //   teamSize: "4 developers",
    //   rating: "4.6",
    //   liveUrl: "https://demo-education.example.com",
    //   githubUrl: "https://github.com/example/learning-platform",
    //   metrics: {
    //     performance: "+30%",
    //     impact: "+55%"
    //   }
    // },
    // {
    //   id: 5,
    //   title: "SaaS Project Management Tool",
    //   description: "Comprehensive project management solution with team collaboration, time tracking, and advanced reporting capabilities for remote teams.",
    //   image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=800&h=600&fit=crop",
    //   type: "Full-Stack",
    //   industry: "SaaS",
    //   complexity: "Enterprise",
    //   techStack: ["Next.js", "TypeScript", "PostgreSQL", "GraphQL", "AWS"],
    //   duration: "7 months",
    //   teamSize: "5 developers",
    //   rating: "4.9",
    //   liveUrl: "https://demo-saas.example.com",
    //   githubUrl: "https://github.com/example/saas-platform",
    //   metrics: {
    //     performance: "+45%",
    //     impact: "+70%"
    //   }
    // },
    // {
    //   id: 6,
    //   title: "Entertainment Streaming App",
    //   description: "Mobile-first streaming application with personalized recommendations, offline viewing, and social features for content discovery.",
    //   image: "https://images.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg?w=800&h=600&fit=crop",
    //   type: "Mobile",
    //   industry: "Entertainment",
    //   complexity: "Complex",
    //   techStack: ["React Native", "Node.js", "MongoDB", "Redis", "AWS"],
    //   duration: "6 months",
    //   teamSize: "4 developers",
    //   rating: "4.5",
    //   liveUrl: "https://demo-streaming.example.com",
    //   githubUrl: "https://github.com/example/streaming-app",
    //   metrics: {
    //     performance: "+25%",
    //     impact: "+40%"
    //   }
    // }
  ];

  // Featured project (first project)
  const featuredProject = allProjects?.[0];

  // Filter projects based on search and filters
  const filteredProjects = useMemo(() => {
    return allProjects?.filter(project => {
      const matchesSearch = project?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                           project?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                           project?.techStack?.some(tech => tech?.toLowerCase()?.includes(searchTerm?.toLowerCase()));

      const matchesType = selectedFilters?.type === 'All' || project?.type === selectedFilters?.type;
      const matchesTechnology = selectedFilters?.technology === 'All' || 
                               project?.techStack?.includes(selectedFilters?.technology);
      const matchesIndustry = selectedFilters?.industry === 'All' || project?.industry === selectedFilters?.industry;
      const matchesComplexity = selectedFilters?.complexity === 'All' || project?.complexity === selectedFilters?.complexity;

      return matchesSearch && matchesType && matchesTechnology && matchesIndustry && matchesComplexity;
    });
  }, [searchTerm, selectedFilters]);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleFilterChange = (category, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const handleClearFilters = () => {
    setSelectedFilters({
      type: 'All',
      technology: 'All',
      industry: 'All',
      complexity: 'All'
    });
    setSearchTerm('');
  };

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="FolderOpen" size={24} className="text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Project Portfolio
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Project <span className="gradient-text">Showcase Hub</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore a comprehensive collection of full-stack projects, each demonstrating 
              technical expertise, problem-solving capabilities, and measurable business impact.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{allProjects?.length}+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Industries</div>
            </div>
          </motion.div>

          {/* Featured Project */}
          <FeaturedProject 
            project={featuredProject} 
            onViewDetails={handleViewDetails}
          />

          {/* Filter Bar */}
          <FilterBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
            projectCount={filteredProjects?.length}
          />

          {/* Projects Grid */}
          <ProjectGrid
            projects={filteredProjects}
            onViewDetails={handleViewDetails}
            loading={loading}
          />

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16 pt-16 border-t border-border"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with cutting-edge technology 
              and proven development practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                onClick={() => window.location.href = '/contact-command-center'}
                iconName="MessageSquare"
                iconPosition="left"
                className="bg-cta hover:bg-cta/90 text-cta-foreground"
              >
                Start a Conversation
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = '/interactive-homepage'}
                iconName="ArrowLeft"
                iconPosition="left"
              >
                Back to Home
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default ProjectShowcaseHub;