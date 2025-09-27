import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();
    const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
    const [displayedCode, setDisplayedCode] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    const codeSnippets = [
        {
            language: 'React',
            code: `const Portfolio = () => {
  const [skills] = useState(['React', 'Node.js', 'Python']);
  return <div>Building the future</div>;
};`,
            color: 'text-blue-400'
        },
        {
            language: 'Node.js',
            code: `const express = require('express');
const app = express();
app.get('/api/projects', (req, res) => {
  res.json({ success: true, data: projects });
});`,
            color: 'text-green-400'
        },
        {
            language: 'Python',
            code: `def optimize_performance(data):
    processed = [item for item in data if item.is_valid()]
    return {"optimized": True, "count": len(processed)}`,
            color: 'text-yellow-400'
        }
    ];

    useEffect(() => {
        const currentSnippet = codeSnippets?.[currentCodeIndex];
        let index = 0;
        setDisplayedCode('');
        setIsTyping(true);

        const typeCode = () => {
            if (index < currentSnippet?.code?.length) {
                setDisplayedCode(currentSnippet?.code?.slice(0, index + 1));
                index++;
                setTimeout(typeCode, 50);
            } else {
                setIsTyping(false);
                setTimeout(() => {
                    setCurrentCodeIndex((prev) => (prev + 1) % codeSnippets?.length);
                }, 3000);
            }
        };

        const timer = setTimeout(typeCode, 500);
        return () => clearTimeout(timer);
    }, [currentCodeIndex]);

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, cyan-400 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, blue-900 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2 text-accent font-mono text-sm">
                                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                                <span>Available for new opportunities</span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                                Building{' '}
                                <span className="gradient-text">Scalable Solutions</span>{' '}
                                That Drive Business Growth
                            </h1>

                            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                                Full-stack developer specializing in React, Node.js, and Python.
                                I transform complex business requirements into elegant, performant applications
                                that scale with your growth.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                variant="default"
                                size="lg"
                                onClick={() => navigate('/project-showcase-hub')}
                                iconName="ArrowRight"
                                iconPosition="right"
                                className="bg-cta hover:bg-cta/90 text-cta-foreground"
                            >
                                View My Work
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => navigate('/contact-command-center')}
                                iconName="Calendar"
                                iconPosition="left"
                                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                            >
                                Schedule Call
                            </Button>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">50+</div>
                                <div className="text-sm text-muted-foreground">Projects Delivered</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">5+</div>
                                <div className="text-sm text-muted-foreground">Years Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">98%</div>
                                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Code Editor */}
                    <div className="relative">
                        <div className="bg-card border border-border rounded-lg shadow-elevation overflow-hidden">
                            {/* Editor Header */}
                            <div className="flex items-center justify-between px-4 py-3 bg-muted border-b border-border">
                                <div className="flex items-center space-x-2">
                                    <div className="flex space-x-1">
                                        <div className="w-3 h-3 bg-destructive rounded-full"></div>
                                        <div className="w-3 h-3 bg-warning rounded-full"></div>
                                        <div className="w-3 h-3 bg-success rounded-full"></div>
                                    </div>
                                    <span className="text-sm font-mono text-muted-foreground ml-4">
                                        {codeSnippets?.[currentCodeIndex]?.language?.toLowerCase()}.js
                                    </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Icon name="Code2" size={16} className="text-muted-foreground" />
                                    <span className="text-xs text-muted-foreground">Live Coding</span>
                                </div>
                            </div>

                            {/* Code Content */}
                            <div className="p-6 bg-gray-900 min-h-[300px]">
                                <pre className="font-mono text-sm leading-relaxed">
                                    <code className={`${codeSnippets?.[currentCodeIndex]?.color} whitespace-pre-wrap`}>
                                        {displayedCode}
                                        {isTyping && <span className="animate-pulse">|</span>}
                                    </code>
                                </pre>
                            </div>

                            {/* Language Indicators */}
                            <div className="flex items-center justify-between px-4 py-2 bg-muted border-t border-border">
                                <div className="flex space-x-4">
                                    {codeSnippets?.map((snippet, index) => (
                                        <div
                                            key={snippet?.language}
                                            className={`flex items-center space-x-1 text-xs ${index === currentCodeIndex ? 'text-accent' : 'text-muted-foreground'
                                                }`}
                                        >
                                            <div className={`w-2 h-2 rounded-full ${index === currentCodeIndex ? 'bg-accent' : 'bg-muted-foreground'
                                                }`}></div>
                                            <span>{snippet?.language}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                    Auto-switching every 3s
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-3 py-1 rounded-full text-xs font-medium animate-bounce">
                            Currently Building
                        </div>
                        <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                            <Icon name="GitBranch" size={12} className="inline mr-1" />
                            Latest Commit: 2h ago
                        </div>
                    </div>
                </div>
            </div>
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <Icon name="ChevronDown" size={24} className="text-muted-foreground" />
            </div>
        </section>
    );
};

export default HeroSection;