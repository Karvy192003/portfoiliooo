"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Server, Cloud, Zap, Database, Shield } from 'lucide-react';

export default function Skills() {
  const services = [
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'CI/CD & Automation',
      description: 'Building automated pipelines for continuous integration and deployment with modern DevOps tools.',
      skills: ['Jenkins', 'Git/GitHub', 'Docker', 'Linux'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: 'Containerization',
      description: 'Developing containerized applications and orchestration with Docker and Kubernetes.',
      skills: ['Docker', 'Kubernetes', 'Container Registry', 'Microservices'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Full Stack Development',
      description: 'Creating end-to-end applications with modern frameworks and technologies.',
      skills: ['Python', 'React', 'Streamlit', 'Flask'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'AI/ML Integration',
      description: 'Integrating AI/ML models into production systems with proper deployment and monitoring.',
      skills: ['Python', 'Gemini API', 'LangChain', 'Model Deployment'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Database Management',
      description: 'Designing and managing databases for scalable applications.',
      skills: ['SQLite', 'PostgreSQL', 'Database Design', 'Data Modeling'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Security & Monitoring',
      description: 'Implementing security best practices and monitoring solutions.',
      skills: ['Security Scanning', 'Monitoring', 'Logging', 'Best Practices'],
      color: 'from-teal-500 to-blue-500'
    }
  ];

  const skillCategories = [
    {
      category: "DevOps & Cloud",
      skills: ["Docker", "Jenkins", "Kubernetes", "Git/GitHub", "Linux", "CI/CD"]
    },
    {
      category: "Programming",
      skills: ["Python", "Java", "JavaScript", "Bash", "HTML/CSS"]
    },
    {
      category: "Frameworks & Tools",
      skills: ["React", "Streamlit", "Flask", "Next.js", "Tailwind CSS"]
    },
    {
      category: "AI/ML & APIs",
      skills: ["Gemini API", "LangChain", "OpenCV", "Machine Learning", "Data Analysis"]
    }
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
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
            What I offer
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 heading-gradient">
            Skills & Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I offer a comprehensive range of services to bring your ideas to life with cutting-edge technology
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group h-full"
            >
              <Card className="h-full card-hover border-2 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <CardHeader className="text-center pb-4">
                  <motion.div
                    className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {service.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Technical Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-4"
              >
                <h4 className="text-xl font-semibold text-foreground flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  {category.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge
                        variant="outline"
                        className="px-3 py-1 border-primary/30 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}