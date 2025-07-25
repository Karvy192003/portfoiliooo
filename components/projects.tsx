"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Star, GitBranch } from 'lucide-react';
import { useState } from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Complete DevOps pipeline automating code commits to container deployment with Git, Jenkins, and Docker.',
      tech: ['Git', 'GitHub', 'Jenkins', 'Docker', 'Linux'],
      github: 'https://github.com/Karvy192003/cicd-pipeline',
      image: '🔄',
      category: 'DevOps',
      featured: true
    },
    {
      title: 'Docker Management UI',
      description: 'Streamlit-based interface for managing Docker operations with easy-to-use web UI for container management.',
      tech: ['Python', 'Streamlit', 'Docker', 'Subprocess'],
      github: 'https://github.com/Karvy192003/Docker_streamlit.git',
      image: '🐳',
      category: 'DevOps',
      featured: true
    },
    {
      title: 'PropGuard AI - Rental Scam Detector',
      description: 'GenAI-powered Streamlit app using Gemini and LangChain to detect rental scams and validate property listings.',
      tech: ['Python', 'Streamlit', 'Gemini', 'LangChain', 'Plotly'],
      github: 'https://github.com/Karvy192003/Langproject.git',
      image: '🏠',
      category: 'AI/ML',
      featured: true
    },
    {
      title: 'MindBloom - AI Therapy Assistant',
      description: 'AI-powered emotional support companion using Flask, SQLite, and Gemini API for therapeutic conversations.',
      tech: ['Python', 'Flask', 'Gemini API', 'SQLite', 'Bootstrap'],
      github: 'https://github.com/Karvy192003/aitherapist.git',
      image: '🌿',
      category: 'AI/ML',
      featured: false
    },
    {
      title: 'NeoToolkit - Smart Productivity Suite',
      description: 'All-in-one desktop application for WhatsApp messaging, emailing, maps, and media capture with dark UI.',
      tech: ['Python', 'Streamlit', 'OpenCV', 'Folium', 'pywhatkit'],
      github: 'https://github.com/Karvy192003/Pythonmenu.git',
      image: '🚀',
      category: 'Full Stack',
      featured: false
    },
    {
      title: 'Solitaire Predictor',
      description: 'Machine learning model for predicting Solitaire game outcomes with advanced algorithms and data analysis.',
      tech: ['Python', 'Machine Learning', 'Data Analysis', 'Prediction'],
      github: 'https://github.com/Karvy192003/Solitairepredict.git',
      image: '🃏',
      category: 'AI/ML',
      featured: false
    },
    {
      title: 'Linux Management UI',
      description: 'Streamlit-based web interface for Linux system management with intuitive controls and monitoring.',
      tech: ['Python', 'Streamlit', 'Linux', 'System Administration'],
      github: 'https://github.com/Karvy192003/Linux-streamlit.git',
      image: '🐧',
      category: 'DevOps',
      featured: false
    },
    {
      title: 'Wikipedia Chatbot AI',
      description: 'Intelligent chatbot that scrapes Wikipedia data using BeautifulSoup for interactive knowledge queries.',
      tech: ['Python', 'BeautifulSoup', 'Web Scraping', 'AI Chatbot'],
      github: 'https://github.com/Karvy192003/Beautifulsoup.git',
      image: '📚',
      category: 'AI/ML',
      featured: false
    },
    {
      title: 'Mobile JS Functionality',
      description: 'Interactive mobile web application with JavaScript onclick functionality and responsive design.',
      tech: ['JavaScript', 'HTML', 'CSS', 'Mobile Development'],
      github: 'https://github.com/Karvy192003/JSonclick.git',
      image: '📱',
      category: 'Frontend',
      featured: false
    },
    {
      title: 'AWS Automation Container Launch',
      description: 'Automated AWS container deployment system with infrastructure as code and scalable architecture.',
      tech: ['AWS', 'Docker', 'Automation', 'Infrastructure'],
      github: 'https://github.com/Karvy192003/awscontainer.git',
      image: '☁️',
      category: 'DevOps',
      featured: false
    },
    {
      title: 'TextSync - Real-Time Text Reflector',
      description: 'Interactive mini web project with live text reflection, HTML rendering, and beautiful glassmorphism design.',
      tech: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation'],
      github: 'https://github.com/Karvy192003/Textsync.git',
      image: '✨',
      category: 'Frontend',
      featured: false
    },
    {
      title: 'Portfolio',
      description: 'Personal portfolio website built with Next.js and React.',
      tech: ['Next.js', 'React', 'TailwindCSS'],
      github: 'https://github.com/Karvy192003/Portfolio',
      image: '🌐',
      category: 'Frontend',
      featured: false
    },
    {
      title: 'reposabcd',
      description: 'Project reposabcd.',
      tech: ['Python'],
      github: 'https://github.com/Karvy192003/reposabcd',
      image: '📦',
      category: 'Full Stack',
      featured: false
    },
    {
      title: 'stockmultitools',
      description: 'Project stockmultitools.',
      tech: ['Python'],
      github: 'https://github.com/Karvy192003/stockmultitools',
      image: '📈',
      category: 'Full Stack',
      featured: false
    },
    {
      title: 'dockerimgdashboard',
      description: 'Project dockerimgdashboard.',
      tech: ['Docker'],
      github: 'https://github.com/Karvy192003/dockerimgdashboard',
      image: '🐳',
      category: 'DevOps',
      featured: false
    },
    {
      title: 'Docker_tasksmenu',
      description: 'Project Docker_tasksmenu.',
      tech: ['Docker'],
      github: 'https://github.com/Karvy192003/Docker_tasksmenu',
      image: '📝',
      category: 'DevOps',
      featured: false
    },
    {
      title: 'aitherapist',
      description: 'Project aitherapist.',
      tech: ['Python', 'AI'],
      github: 'https://github.com/Karvy192003/aitherapist',
      image: '🧠',
      category: 'AI/ML',
      featured: false
    },
    {
      title: 'Solitairepredict',
      description: 'Project Solitairepredict.',
      tech: ['Python', 'ML'],
      github: 'https://github.com/Karvy192003/Solitairepredict',
      image: '🃏',
      category: 'AI/ML',
      featured: false
    },
    {
      title: 'Docker_streamlit',
      description: 'Project Docker_streamlit.',
      tech: ['Docker', 'Streamlit'],
      github: 'https://github.com/Karvy192003/Docker_streamlit',
      image: '🐳',
      category: 'DevOps',
      featured: false
    },
    {
      title: 'Linux-streamlit',
      description: 'Project Linux-streamlit.',
      tech: ['Linux', 'Streamlit'],
      github: 'https://github.com/Karvy192003/Linux-streamlit',
      image: '🐧',
      category: 'DevOps',
      featured: false
    },
    {
      title: 'Pythonmenu',
      description: 'Project Pythonmenu.',
      tech: ['Python'],
      github: 'https://github.com/Karvy192003/Pythonmenu',
      image: '🐍',
      category: 'Full Stack',
      featured: false
    },
    {
      title: 'Langproject',
      description: 'Project Langproject.',
      tech: ['Python', 'LangChain'],
      github: 'https://github.com/Karvy192003/Langproject',
      image: '🌐',
      category: 'AI/ML',
      featured: false
    },
    {
      title: 'Beautifulsoup',
      description: 'Project Beautifulsoup.',
      tech: ['Python', 'BeautifulSoup'],
      github: 'https://github.com/Karvy192003/Beautifulsoup',
      image: '📚',
      category: 'AI/ML',
      featured: false
    },
    {
      title: 'awscontainer',
      description: 'Project awscontainer.',
      tech: ['AWS', 'Docker'],
      github: 'https://github.com/Karvy192003/awscontainer',
      image: '☁️',
      category: 'DevOps',
      featured: false
    },
    {
      title: 'Textsync',
      description: 'Project Textsync.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/Karvy192003/Textsync',
      image: '🔤',
      category: 'Frontend',
      featured: false
    },
    {
      title: 'Kubernetes_menu',
      description: 'Project Kubernetes_menu.',
      tech: ['Kubernetes'],
      github: 'https://github.com/Karvy192003/Kubernetes_menu',
      image: '☸️',
      category: 'DevOps',
      featured: false
    },
    {
      title: 'agents',
      description: 'Project agents.',
      tech: ['Python', 'AI'],
      github: 'https://github.com/Karvy192003/agents',
      image: '🤖',
      category: 'AI/ML',
      featured: false
    },
    {
      title: 'JSonclick',
      description: 'Project JSonclick.',
      tech: ['JavaScript'],
      github: 'https://github.com/Karvy192003/JSonclick',
      image: '🖱️',
      category: 'Frontend',
      featured: false
    },
    {
      title: 'Sentence_polarity',
      description: 'Project Sentence_polarity.',
      tech: ['Python', 'NLP'],
      github: 'https://github.com/Karvy192003/Sentence_polarity',
      image: '💬',
      category: 'AI/ML',
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
                <Card className="h-full card-hover professional-glow border-2 hover:border-primary/30 transition-all duration-500 overflow-hidden group bg-gradient-to-br from-background via-background to-secondary/10">
                  <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
                  <CardHeader className="relative pb-4">
                    {/* Floating particles */}
                    <div className="absolute inset-0 overflow-hidden">
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-primary/30 rounded-full"
                          style={{
                            left: `${15 + i * 25}%`,
                            top: `${20 + i * 20}%`,
                          }}
                          animate={{
                            y: [0, -15, 0],
                            opacity: [0.3, 0.9, 0.3],
                          }}
                          transition={{
                            duration: 2.5 + i * 0.3,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                    
                    <motion.div 
                      className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-3xl flex items-center justify-center text-6xl mb-6 group-hover:scale-125 transition-all duration-500 shadow-xl"
                      whileHover={{ 
                        rotateY: 180,
                        scale: 1.3,
                        boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)",
                        transition: { duration: 0.8, type: "spring" }
                      }}
                      animate={{
                        rotateX: [0, 5, 0],
                        rotateY: [0, 360],
                      }}
                      style={{
                        transformStyle: 'preserve-3d',
                        animation: 'techFloat 10s ease-in-out infinite'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                      {project.image}
                    </motion.div>
                    
                    <Badge variant="secondary" className="absolute top-4 right-4 bg-primary/10 text-primary">
                      {project.category}
                    </Badge>
                    
                    <CardTitle className="text-xl font-bold text-foreground text-center group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground text-center leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                      {project.tech.map((tech) => (
                        <motion.div
                          key={tech}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge 
                            variant="outline" 
                            className="text-xs border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 px-2 py-1"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex justify-center pt-4">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          className="border-primary/30 hover:bg-primary hover:text-primary-foreground px-8 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Show Code
                        </Button>
                      </motion.div>
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
                    <div className="flex justify-center pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs border-primary/30 hover:bg-primary hover:text-primary-foreground px-4"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="h-3 w-3 mr-1" />
                        Show Code
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