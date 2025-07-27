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
      title: 'MindBloom - AI Therapy Assistant',
      description: 'AI-powered emotional support companion using Flask, SQLite, and Gemini API for therapeutic conversations.',
      tech: ['Python', 'Flask', 'Gemini API', 'SQLite', 'Bootstrap'],
      github: 'https://github.com/Karvy192003/aitherapist.git',
      image: '🌿',
      category: 'AI/ML',
      featured: true
    },
    {
      title: 'NeoToolkit - Smart Productivity Suite',
      description: 'All-in-one desktop application for WhatsApp messaging, emailing, maps, and media capture with dark UI.',
      tech: ['Python', 'Streamlit', 'OpenCV', 'Folium', 'pywhatkit'],
      github: 'https://github.com/Karvy192003/Pythonmenu.git',
      image: '🚀',
      category: 'Full Stack',
      featured: true
    },
    {
      title: 'Solitaire Predictor',
      description: 'Machine learning model for predicting Solitaire game outcomes with advanced algorithms and data analysis.',
      tech: ['Python', 'Machine Learning', 'Data Analysis', 'Prediction'],
      github: 'https://github.com/Karvy192003/Solitairepredict.git',
      image: '🃏',
      category: 'AI/ML',
      featured: true
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
      featured: true
    },
    {
      title: 'Mobile JS Functionality',
      description: 'Interactive mobile web application with JavaScript onclick functionality and responsive design.',
      tech: ['JavaScript', 'HTML', 'CSS', 'Mobile Development'],
      github: 'https://github.com/Karvy192003/JSonclick.git',
      image: '📱',
      category: 'Frontend',
      featured: true
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
      title: 'IntelliTrader Pro',
      description: 'Professional trading platform with real-time stock insights, live market news, AI-generated reports, and smart investment analysis. Built with Streamlit and Gemini 1.5 Flash.',
      tech: ['Python', 'Streamlit', 'Gemini', 'Web Scraping'],
      github: 'https://github.com/Karvy192003/stockmultitools',
      image: '📈',
      category: 'Full Stack',
      featured: true
    },
    {
      title: 'Multi_technique Devops AI engineer',
      description: 'Professional Streamlit app leveraging LLM prompting to generate optimized Dockerfiles for any application. Compare different prompt engineering styles for better containerized deployments.',
      tech: ['Docker', 'Python', 'Streamlit', 'LLM'],
      github: 'https://github.com/Karvy192003/dockerimgdashboard',
      image: '🐳',
      category: 'DevOps',
      featured: true
    },

    {
      title: 'Docker Management UI',
      description: 'Streamlit-based interface for managing Docker operations. List containers, pull images, create volumes/networks, and perform system cleanups through an easy-to-use web UI.',
      tech: ['Docker', 'Python', 'Streamlit'],
      github: 'https://github.com/Karvy192003/Docker_streamlit',
      image: '🐳',
      category: 'DevOps',
      featured: true
    },

    {
      title: 'Prop Gaurd AI',
      description: 'Smart Streamlit app using Gemini and LangChain to detect rental scams, validate prices, and show real-time map views. Instantly flags scam probability and compares rent vs market.',
      tech: ['Python', 'Streamlit', 'Gemini', 'LangChain', 'Plotly'],
      github: 'https://github.com/Karvy192003/Langproject',
      image: '🌐',
      category: 'AI/ML',
      featured: true
    },

    {
      title: 'KubeFlow',
      description: 'Powerful Kubernetes Management Dashboard built with Python and Streamlit. Simplifies Kubernetes operations with an interactive interface that eliminates complex CLI commands.',
      tech: ['Kubernetes', 'Python', 'Streamlit'],
      github: 'https://github.com/Karvy192003/Kubernetes_menu',
      image: '☸️',
      category: 'DevOps',
      featured: true
    },

    {
      title: 'Sentiment analyzer',
      description: 'Real-time sentiment analyzer using TextBlob and Gradio. Detects polarity and subjectivity of any sentence with instant feedback on positive/negative or subjective/objective content.',
      tech: ['Python', 'TextBlob', 'Gradio', 'NLP'],
      github: 'https://github.com/Karvy192003/Sentence_polarity',
      image: '💬',
      category: 'AI/ML',
      featured: true
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
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