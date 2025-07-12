"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Star, GitBranch } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Complete DevOps pipeline automating code commits to container deployment with Git, Jenkins, and Docker.',
      tech: ['Git', 'GitHub', 'Jenkins', 'Docker', 'Linux'],
      liveDemo: 'https://github.com/Karvy192003/cicd-pipeline',
      github: 'https://github.com/Karvy192003/cicd-pipeline',
      image: '🔄',
      category: 'DevOps',
      featured: true
    },
    {
      title: 'Docker Management UI',
      description: 'Streamlit-based interface for managing Docker operations with easy-to-use web UI for container management.',
      tech: ['Python', 'Streamlit', 'Docker', 'Subprocess'],
      liveDemo: 'https://docker-ui.streamlit.app',
      github: 'https://github.com/Karvy192003/docker-management-ui',
      image: '🐳',
      category: 'DevOps',
      featured: true
    },
    {
      title: 'PropGuard AI - Rental Scam Detector',
      description: 'GenAI-powered Streamlit app using Gemini and LangChain to detect rental scams and validate property listings.',
      tech: ['Python', 'Streamlit', 'Gemini', 'LangChain', 'Plotly'],
      liveDemo: 'https://propguard-ai.streamlit.app',
      github: 'https://github.com/Karvy192003/propguard-ai',
      image: '🏠',
      category: 'AI/ML',
      featured: true
    },
    {
      title: 'MindBloom - AI Therapy Assistant',
      description: 'AI-powered emotional support companion using Flask, SQLite, and Gemini API for therapeutic conversations.',
      tech: ['Python', 'Flask', 'Gemini API', 'SQLite', 'Bootstrap'],
      liveDemo: 'https://mindbloom-therapy.herokuapp.com',
      github: 'https://github.com/Karvy192003/mindbloom-ai',
      image: '🌿',
      category: 'AI/ML',
      featured: false
    },
    {
      title: 'NeoToolkit - Smart Productivity Suite',
      description: 'All-in-one desktop application for WhatsApp messaging, emailing, maps, and media capture with dark UI.',
      tech: ['Python', 'Streamlit', 'OpenCV', 'Folium', 'pywhatkit'],
      liveDemo: 'https://neotoolkit.streamlit.app',
      github: 'https://github.com/Karvy192003/neotoolkit',
      image: '🚀',
      category: 'Full Stack',
      featured: false
    },
    {
      title: 'Diamond Estimator ML',
      description: 'Machine learning model predicting diamond prices based on Carat, Cut, and Clarity with Streamlit interface.',
      tech: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas'],
      liveDemo: 'https://diamond-estimator.streamlit.app',
      github: 'https://github.com/Karvy192003/diamond-estimator',
      image: '💎',
      category: 'AI/ML',
      featured: false
    },
    {
      title: 'TextSync - Real-Time Text Reflector',
      description: 'Interactive mini web project with live text reflection, HTML rendering, and beautiful glassmorphism design.',
      tech: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation'],
      liveDemo: 'https://karvy192003.github.io/textsync',
      github: 'https://github.com/Karvy192003/textsync',
      image: '✨',
      category: 'Frontend',
      featured: false
    }
  ];

  const categories = ['All', 'DevOps', 'AI/ML', 'Full Stack', 'Frontend'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 lg:py-32 bg-secondary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My work
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 heading-gradient">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects showcasing my skills in DevOps, AI/ML, and full-stack development
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-20">
          <motion.h3
            className="text-2xl font-bold text-foreground mb-8 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Star className="h-6 w-6 text-primary mr-2" />
            Featured Projects
          </motion.h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="lg:col-span-1"
              >
                <Card className="h-full card-hover border-2 hover:border-primary/30 transition-all duration-500 overflow-hidden group">
                  <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
                  <CardHeader className="relative">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {project.image}
                    </div>
                    <Badge variant="secondary" className="absolute top-4 right-4 bg-primary/10 text-primary">
                      {project.category}
                    </Badge>
                    <CardTitle className="text-xl font-bold text-foreground text-center group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-center leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs border-primary/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2 pt-4">
                      <Button
                        variant="default"
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary/90"
                        onClick={() => window.open(project.liveDemo, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-primary/30 hover:bg-primary hover:text-primary-foreground"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <motion.h3
            className="text-2xl font-bold text-foreground mb-8 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GitBranch className="h-6 w-6 text-primary mr-2" />
            More Projects
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full card-hover border-2 hover:border-primary/30 transition-all duration-500 overflow-hidden group">
                  <CardHeader className="pb-3">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {project.image}
                    </div>
                    <Badge variant="secondary" className="w-fit mx-auto bg-primary/10 text-primary text-xs">
                      {project.category}
                    </Badge>
                    <CardTitle className="text-lg font-bold text-foreground text-center group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs border-primary/30">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge variant="outline" className="text-xs border-primary/30">
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 text-xs border-primary/30 hover:bg-primary hover:text-primary-foreground"
                        onClick={() => window.open(project.liveDemo, '_blank')}
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 text-xs border-primary/30 hover:bg-primary hover:text-primary-foreground"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl font-semibold"
            onClick={() => window.open('https://github.com/Karvy192003', '_blank')}
          >
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// Add useState import at the top
import { useState } from 'react';