"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Server, Palette, Cloud } from 'lucide-react';

export default function Skills() {
  const services = [
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'CI/CD & Automation',
      description: 'Building automated pipelines for continuous integration and deployment with modern DevOps tools.',
      skills: ['Jenkins', 'Git/GitHub', 'Docker', 'Linux']
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: 'Containerization',
      description: 'Developing containerized applications and orchestration with Docker and Kubernetes.',
      skills: ['Docker', 'Kubernetes', 'Container Registry', 'Microservices']
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Automation & Scripting',
      description: 'Creating automation scripts and tools for infrastructure management and deployment.',
      skills: ['Python', 'Bash', 'Streamlit', 'Process Automation']
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'AI/ML Integration',
      description: 'Integrating AI/ML models into production systems with proper deployment and monitoring.',
      skills: ['Python', 'Gemini API', 'LangChain', 'Model Deployment']
    }
  ];

  return (
    <motion.section
      id="skills"
      className="py-20 bg-background"
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
            Skills & Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I offer a comprehensive range of services to bring your ideas to life
          </p>
        </motion.div>
        {/* Remove Tech Stack 3D Showcase */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              style={{ perspective: 1200 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ rotateY: 22, rotateX: 14, scale: 1.12 }}
                style={{ transformStyle: 'preserve-3d' }}
                transition={{ type: 'spring', stiffness: 250, damping: 18, duration: 0.7, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/40">
                  <CardHeader className="text-center">
                    <motion.div
                      className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center text-primary mb-4 relative"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                      whileHover={{ y: 0 }}
                    >
                      {service.icon}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: -30 }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-1/2 -translate-x-1/2 -top-8 px-3 py-1 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-xs font-bold shadow-lg pointer-events-none"
                        style={{ filter: 'drop-shadow(0 0 8px #a78bfa)' }}
                      >
                        {service.title}
                      </motion.div>
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {service.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}