"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Server, Cloud, Zap, Database, Shield, Brain, Cpu, Globe, Layers } from 'lucide-react';
import { useState } from 'react';
import { 
  SiPython, SiJavascript, SiDocker, SiJenkins, SiKubernetes, 
  SiGit, SiLinux, SiReact, SiNextdotjs, SiTailwindcss, SiStreamlit, 
  SiFlask, SiFastapi, SiPandas, SiNumpy, SiOpencv
} from 'react-icons/si';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('overview');

  const skillsData = [
    {
      category: "DevOps & Cloud",
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        { name: 'Docker', level: 92, color: "from-blue-500 to-blue-600", icon: <SiDocker className="h-5 w-5" /> },
        { name: 'Jenkins', level: 88, color: "from-red-500 to-red-600", icon: <SiJenkins className="h-5 w-5" /> },
        { name: 'Kubernetes', level: 85, color: "from-purple-500 to-purple-600", icon: <SiKubernetes className="h-5 w-5" /> },
        { name: 'Git/GitHub', level: 95, color: "from-gray-600 to-gray-700", icon: <SiGit className="h-5 w-5" /> },
        { name: 'Linux', level: 90, color: "from-yellow-500 to-yellow-600", icon: <SiLinux className="h-5 w-5" /> },
        { name: 'CI/CD', level: 89, color: "from-green-500 to-green-600", icon: <Zap className="h-5 w-5" /> }
      ]
    },
    {
      category: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: 'Python', level: 95, color: "from-blue-400 to-blue-500", icon: <SiPython className="h-5 w-5" /> },
        { name: 'Java', level: 80, color: "from-orange-500 to-orange-600", icon: <Cpu className="h-5 w-5" /> },
        { name: 'JavaScript', level: 85, color: "from-yellow-400 to-yellow-500", icon: <SiJavascript className="h-5 w-5" /> },
        { name: 'Bash', level: 88, color: "from-gray-500 to-gray-600", icon: <Server className="h-5 w-5" /> },
        { name: 'HTML/CSS', level: 90, color: "from-pink-500 to-pink-600", icon: <Code className="h-5 w-5" /> }
      ]
    },
    {
      category: "Frontend Development",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: 'React', level: 88, color: "from-cyan-400 to-cyan-500", icon: <SiReact className="h-5 w-5" /> },
        { name: 'Next.js', level: 82, color: "from-gray-800 to-gray-900", icon: <SiNextdotjs className="h-5 w-5" /> },
        { name: 'Tailwind CSS', level: 90, color: "from-teal-400 to-teal-500", icon: <SiTailwindcss className="h-5 w-5" /> },
        { name: 'Streamlit', level: 92, color: "from-red-400 to-red-500", icon: <SiStreamlit className="h-5 w-5" /> },
        { name: 'Responsive Design', level: 87, color: "from-purple-400 to-purple-500", icon: <Globe className="h-5 w-5" /> }
      ]
    },
    {
      category: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: 'Flask', level: 85, color: "from-gray-600 to-gray-700", icon: <SiFlask className="h-5 w-5" /> },
        { name: 'FastAPI', level: 78, color: "from-green-400 to-green-500", icon: <SiFastapi className="h-5 w-5" /> },
        { name: 'REST APIs', level: 88, color: "from-blue-500 to-blue-600", icon: <Server className="h-5 w-5" /> },
        { name: 'Database Design', level: 82, color: "from-indigo-500 to-indigo-600", icon: <Database className="h-5 w-5" /> },
        { name: 'Microservices', level: 80, color: "from-purple-500 to-purple-600", icon: <Server className="h-5 w-5" /> }
      ]
    },
    {
      category: "AI/ML & Data Science",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        { name: 'Machine Learning', level: 82, color: "from-pink-500 to-pink-600", icon: <Brain className="h-5 w-5" /> },
        { name: 'Data Analysis', level: 85, color: "from-blue-500 to-blue-600", icon: <Database className="h-5 w-5" /> },
        { name: 'OpenCV', level: 78, color: "from-green-500 to-green-600", icon: <SiOpencv className="h-5 w-5" /> },
        { name: 'Pandas/NumPy', level: 88, color: "from-orange-500 to-orange-600", icon: <SiPandas className="h-5 w-5" /> },
        { name: 'Model Deployment', level: 80, color: "from-purple-500 to-purple-600", icon: <Cloud className="h-5 w-5" /> }
      ]
    },
    {
      category: "GenAI & Agentic AI",
      icon: <Cpu className="h-6 w-6" />,
      skills: [
        { name: 'Gemini API', level: 85, color: "from-blue-400 to-blue-500", icon: <Brain className="h-5 w-5" /> },
        { name: 'LangChain', level: 82, color: "from-green-400 to-green-500", icon: <Cpu className="h-5 w-5" /> },
        { name: 'Prompt Engineering', level: 88, color: "from-purple-400 to-purple-500", icon: <Brain className="h-5 w-5" /> },
        { name: 'Agentic AI', level: 75, color: "from-pink-400 to-pink-500", icon: <Cpu className="h-5 w-5" /> },
        { name: 'RAG Systems', level: 78, color: "from-indigo-400 to-indigo-500", icon: <Database className="h-5 w-5" /> },
        { name: 'AI Integration', level: 83, color: "from-teal-400 to-teal-500", icon: <Server className="h-5 w-5" /> }
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
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            What I offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 heading-gradient">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technical expertise across DevOps, AI/ML, and full-stack development
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
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
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="group h-full">
                <Card className="h-full card-hover professional-glow border-2 hover:border-primary/30 transition-all duration-500 overflow-hidden bg-gradient-to-br from-background via-background to-secondary/10">
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                  <CardHeader className="relative text-center pb-4">
                    <div className="relative w-20 h-20 mx-auto bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-3xl flex items-center justify-center text-primary mb-6 group-hover:scale-125 transition-all duration-500 shadow-lg">
                      {/* Inner glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-sm group-hover:blur-md transition-all duration-500"></div>
                      {service.icon}
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    
                    <div className="flex items-center justify-center space-x-3 mt-4">
                      <div className="flex-1 bg-secondary/50 rounded-full h-3 max-w-40 overflow-hidden relative">
                        <div className={`h-3 rounded-full bg-gradient-to-r ${service.color} relative overflow-hidden`} style={{ width: `${service.rating}%` }}>
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                        </div>
                      </div>
                      <span className="text-lg font-bold text-primary">{service.rating}%</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative text-center space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                      {service.skills.map((skill) => (
                        <div key={skill}>
                          <Badge
                            variant="secondary"
                            className="bg-gradient-to-r from-primary/10 to-accent/10 text-primary hover:from-primary hover:to-accent hover:text-primary-foreground transition-all duration-300 px-3 py-1 text-sm font-medium border border-primary/20 hover:border-primary/50 shadow-sm hover:shadow-md"
                          >
                            {skill}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'detailed' && (
          <div className="space-y-12">
            {skillsData.map((category, categoryIndex) => (
              <div key={category.category}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="skill-flip-card group"
                    >
                      <div className="skill-flip-card-inner">
                        {/* Front of card */}
                        <div className="skill-flip-card-front bg-card rounded-xl p-4 border border-border hover:border-primary/30 transition-all duration-300">
                          <div className="flex items-center justify-center mb-3">
                            <div className="text-2xl text-primary">
                              {skill.icon}
                            </div>
                          </div>
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-semibold text-foreground text-sm">{skill.name}</h4>
                            <span className="text-sm font-bold text-primary">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-secondary rounded-full h-2">
                            <div
                              className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                          <div className="mt-2 text-xs text-muted-foreground text-center">
                            Hover for details
                          </div>
                        </div>
                        
                        {/* Back of card */}
                        <div className="skill-flip-card-back bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-4 border border-primary/30">
                          <div className="h-full flex flex-col justify-center">
                            <div className="flex items-center justify-center mb-2">
                              <div className="text-xl text-primary">
                                {skill.icon}
                              </div>
                            </div>
                            <h4 className="font-semibold text-foreground text-sm mb-2 text-center">{skill.name}</h4>
                            <p className="text-xs text-muted-foreground text-center leading-relaxed">
                              {skill.name === 'Docker' && 'Containerization platform for application deployment and management'}
                              {skill.name === 'Jenkins' && 'Automation server for continuous integration and deployment pipelines'}
                              {skill.name === 'Kubernetes' && 'Container orchestration platform for scalable deployments'}
                              {skill.name === 'Git/GitHub' && 'Version control system for tracking code changes and collaboration'}
                              {skill.name === 'Linux' && 'Operating system administration and shell scripting'}
                              {skill.name === 'CI/CD' && 'Continuous Integration and Continuous Deployment practices'}
                              {skill.name === 'Python' && 'High-level programming language for automation and AI/ML development'}
                              {skill.name === 'Java' && 'Object-oriented programming language for enterprise applications'}
                              {skill.name === 'JavaScript' && 'Dynamic programming language for web development'}
                              {skill.name === 'Bash' && 'Shell scripting and command line automation'}
                              {skill.name === 'HTML/CSS' && 'Markup and styling languages for web development'}
                              {skill.name === 'React' && 'JavaScript library for building interactive user interfaces'}
                              {skill.name === 'Next.js' && 'React framework for production-ready applications'}
                              {skill.name === 'Tailwind CSS' && 'Utility-first CSS framework for rapid UI development'}
                              {skill.name === 'Streamlit' && 'Python library for creating web applications'}
                              {skill.name === 'Responsive Design' && 'Creating websites that work on all devices'}
                              {skill.name === 'Flask' && 'Lightweight Python web framework'}
                              {skill.name === 'FastAPI' && 'Modern Python web framework for APIs'}
                              {skill.name === 'REST APIs' && 'Representational State Transfer API design'}
                              {skill.name === 'Database Design' && 'Designing efficient database schemas and relationships'}
                              {skill.name === 'Microservices' && 'Architectural pattern for distributed systems'}
                              {skill.name === 'Machine Learning' && 'Algorithms and models for predictive analytics'}
                              {skill.name === 'Data Analysis' && 'Extracting insights from data using statistical methods'}
                              {skill.name === 'OpenCV' && 'Computer vision library for image processing'}
                              {skill.name === 'Pandas/NumPy' && 'Data manipulation and numerical computing libraries'}
                              {skill.name === 'Model Deployment' && 'Deploying ML models to production environments'}
                              {skill.name === 'Gemini API' && 'Google\'s generative AI API for text and image generation'}
                              {skill.name === 'LangChain' && 'Framework for building LLM-powered applications'}
                              {skill.name === 'Prompt Engineering' && 'Designing effective prompts for AI models'}
                              {skill.name === 'Agentic AI' && 'Autonomous AI agents that can perform complex tasks'}
                              {skill.name === 'RAG Systems' && 'Retrieval-Augmented Generation for enhanced AI responses'}
                              {skill.name === 'AI Integration' && 'Integrating AI capabilities into existing applications'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}