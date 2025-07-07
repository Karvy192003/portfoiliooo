"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'AI-Powered Task Manager',
      description: 'Smart task management system with AI-driven priority suggestions and automated scheduling.',
      tech: ['React', 'Python', 'TensorFlow', 'FastAPI'],
      liveDemo: 'https://ai-task-manager.vercel.app',
      github: 'https://github.com/karvy/ai-task-manager',
      image: '🤖'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and inventory management.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      liveDemo: 'https://ecommerce-platform.vercel.app',
      github: 'https://github.com/karvy/ecommerce-platform',
      image: '🛍️'
    },
    {
      title: 'DevOps Dashboard',
      description: 'Comprehensive monitoring dashboard for CI/CD pipelines and infrastructure metrics.',
      tech: ['React', 'Docker', 'Kubernetes', 'Jenkins'],
      liveDemo: 'https://devops-dashboard.vercel.app',
      github: 'https://github.com/karvy/devops-dashboard',
      image: '📊'
    },
    {
      title: 'Social Media Analytics',
      description: 'Data analytics platform for social media insights with real-time visualization.',
      tech: ['Python', 'Pandas', 'D3.js', 'PostgreSQL'],
      liveDemo: 'https://social-analytics.vercel.app',
      github: 'https://github.com/karvy/social-analytics',
      image: '📱'
    },
    {
      title: 'Weather Prediction App',
      description: 'Machine learning-based weather prediction system with interactive maps.',
      tech: ['Python', 'Scikit-learn', 'React', 'OpenWeatherAPI'],
      liveDemo: 'https://weather-prediction.vercel.app',
      github: 'https://github.com/karvy/weather-prediction',
      image: '🌤️'
    },
    {
      title: 'Blockchain Voting System',
      description: 'Secure voting platform built on blockchain technology with smart contracts.',
      tech: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      liveDemo: 'https://blockchain-voting.vercel.app',
      github: 'https://github.com/karvy/blockchain-voting',
      image: '🗳️'
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