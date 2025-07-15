"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Server, Cloud, Zap, Database, Shield, Brain, Cpu, Globe, Layers } from 'lucide-react';
import Skills3D from './skills-3d';
import { useState } from 'react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('overview');

  const skillsData = [
    {
      category: "DevOps & Cloud",
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        { name: "Docker", level: 92, color: "from-blue-500 to-blue-600" },
        { name: "Jenkins", level: 88, color: "from-red-500 to-red-600" },
        { name: "Kubernetes", level: 85, color: "from-purple-500 to-purple-600" },
        { name: "Git/GitHub", level: 95, color: "from-gray-600 to-gray-700" },
        { name: "Linux", level: 90, color: "from-yellow-500 to-yellow-600" },
        { name: "CI/CD", level: 89, color: "from-green-500 to-green-600" }
      ]
    },
    {
      category: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Python", level: 95, color: "from-blue-400 to-blue-500" },
        { name: "Java", level: 80, color: "from-orange-500 to-orange-600" },
        { name: "JavaScript", level: 85, color: "from-yellow-400 to-yellow-500" },
        { name: "Bash", level: 88, color: "from-gray-500 to-gray-600" },
        { name: "HTML/CSS", level: 90, color: "from-pink-500 to-pink-600" }
      ]
    },
    {
      category: "Frontend Development",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "React", level: 88, color: "from-cyan-400 to-cyan-500" },
        { name: "Next.js", level: 82, color: "from-gray-800 to-gray-900" },
        { name: "Tailwind CSS", level: 90, color: "from-teal-400 to-teal-500" },
        { name: "Streamlit", level: 92, color: "from-red-400 to-red-500" },
        { name: "Responsive Design", level: 87, color: "from-purple-400 to-purple-500" }
      ]
    },
    {
      category: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "Flask", level: 85, color: "from-gray-600 to-gray-700" },
        { name: "FastAPI", level: 78, color: "from-green-400 to-green-500" },
        { name: "REST APIs", level: 88, color: "from-blue-500 to-blue-600" },
        { name: "Database Design", level: 82, color: "from-indigo-500 to-indigo-600" },
        { name: "Microservices", level: 80, color: "from-purple-500 to-purple-600" }
      ]
    },
    {
      category: "AI/ML & Data Science",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        { name: "Machine Learning", level: 82, color: "from-pink-500 to-pink-600" },
        { name: "Data Analysis", level: 85, color: "from-blue-500 to-blue-600" },
        { name: "OpenCV", level: 78, color: "from-green-500 to-green-600" },
        { name: "Pandas/NumPy", level: 88, color: "from-orange-500 to-orange-600" },
        { name: "Model Deployment", level: 80, color: "from-purple-500 to-purple-600" }
      ]
    },
    {
      category: "GenAI & Agentic AI",
      icon: <Cpu className="h-6 w-6" />,
      skills: [
        { name: "Gemini API", level: 85, color: "from-blue-400 to-blue-500" },
        { name: "LangChain", level: 82, color: "from-green-400 to-green-500" },
        { name: "Prompt Engineering", level: 88, color: "from-purple-400 to-purple-500" },
        { name: "Agentic AI", level: 75, color: "from-pink-400 to-pink-500" },
        { name: "RAG Systems", level: 78, color: "from-indigo-400 to-indigo-500" },
        { name: "AI Integration", level: 83, color: "from-teal-400 to-teal-500" }
      ]
    }
  ];

  const services = [
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'DevOps Excellence',
      description: 'Complete CI/CD pipeline automation with containerization and cloud deployment.',
      rating: 90,
      skills: ['Docker', 'Jenkins', 'Kubernetes', 'Git'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Full Stack Development',
      description: 'End-to-end application development with modern frameworks and best practices.',
      rating: 85,
      skills: ['Python', 'React', 'Next.js', 'Flask'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'AI/ML Integration',
      description: 'Intelligent systems with machine learning and generative AI capabilities.',
      rating: 82,
      skills: ['GenAI', 'LangChain', 'ML Models', 'Agentic AI'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: 'Backend Architecture',
      description: 'Scalable backend systems with robust APIs and database management.',
      rating: 88,
      skills: ['APIs', 'Databases', 'Microservices', 'Security'],
      color: 'from-orange-500 to-red-500'
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
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technical expertise across DevOps, AI/ML, and full-stack development
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex space-x-2 bg-secondary/20 p-2 rounded-xl">
            {[
              { id: 'overview', label: 'Overview', icon: <Layers className="h-4 w-4" /> },
              { id: 'detailed', label: 'Detailed', icon: <Database className="h-4 w-4" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    <div className="flex items-center justify-center space-x-2 mt-2">
                      <div className="flex-1 bg-secondary rounded-full h-2 max-w-32">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${service.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${service.rating}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: index * 0.2 }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-primary">{service.rating}%</span>
                    </div>
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
        )}

        {activeTab === 'detailed' && (
          <div className="space-y-12">
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-foreground">{skill.name}</h4>
                        <span className="text-sm font-bold text-primary">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}