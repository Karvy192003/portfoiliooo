"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Complete DevOps pipeline automating code commits to container deployment with Git, Jenkins, and Docker.',
      tech: ['Git', 'GitHub', 'Jenkins', 'Docker', 'Linux'],
      liveDemo: 'https://github.com/karvy/cicd-pipeline',
      github: 'https://github.com/karvy/cicd-pipeline',
      image: '🔄'
    },
    {
      title: 'Docker Management UI',
      description: 'Streamlit-based interface for managing Docker operations with easy-to-use web UI for container management.',
      tech: ['Python', 'Streamlit', 'Docker', 'Subprocess'],
      liveDemo: 'https://docker-ui.streamlit.app',
      github: 'https://github.com/karvy/docker-management-ui',
      image: '🐳'
    },
    {
      title: 'PropGuard AI - Rental Scam Detector',
      description: 'GenAI-powered Streamlit app using Gemini and LangChain to detect rental scams and validate property listings.',
      tech: ['Python', 'Streamlit', 'Gemini', 'LangChain', 'Plotly'],
      liveDemo: 'https://propguard-ai.streamlit.app',
      github: 'https://github.com/karvy/propguard-ai',
      image: '🏠'
    },
    {
      title: 'MindBloom - AI Therapy Assistant',
      description: 'AI-powered emotional support companion using Flask, SQLite, and Gemini API for therapeutic conversations.',
      tech: ['Python', 'Flask', 'Gemini API', 'SQLite', 'Bootstrap'],
      liveDemo: 'https://mindbloom-therapy.herokuapp.com',
      github: 'https://github.com/karvy/mindbloom-ai',
      image: '🌿'
    },
    {
      title: 'NeoToolkit - Smart Productivity Suite',
      description: 'All-in-one desktop application for WhatsApp messaging, emailing, maps, and media capture with dark UI.',
      tech: ['Python', 'Streamlit', 'OpenCV', 'Folium', 'pywhatkit'],
      liveDemo: 'https://neotoolkit.streamlit.app',
      github: 'https://github.com/karvy/neotoolkit',
      image: '🚀'
    },
    {
      title: 'Diamond Estimator ML',
      description: 'Machine learning model predicting diamond prices based on Carat, Cut, and Clarity with Streamlit interface.',
      tech: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas'],
      liveDemo: 'https://diamond-estimator.streamlit.app',
      github: 'https://github.com/karvy/diamond-estimator',
      image: '💎'
    },
    {
      title: 'TextSync - Real-Time Text Reflector',
      description: 'Interactive mini web project with live text reflection, HTML rendering, and beautiful glassmorphism design.',
      tech: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation'],
      liveDemo: 'https://karvy.github.io/textsync',
      github: 'https://github.com/karvy/textsync',
      image: '✨'
    }
  ];

  return (
    <motion.section
      id="projects"
      className="py-20 bg-secondary/10"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 80, damping: 18, duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills and expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 180, damping: 22, duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.04, rotateX: 4, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)' }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 rounded-2xl">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center text-4xl mb-4">
                    {project.image}
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground text-center">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-center">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.liveDemo, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}