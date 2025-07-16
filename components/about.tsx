"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Target, Heart } from 'lucide-react';

export default function About() {
  const techStack = [
    { name: 'Python', icon: '🐍', color: 'bg-yellow-500/10 text-yellow-600' },
    { name: 'Java', icon: '☕', color: 'bg-orange-500/10 text-orange-600' },
    { name: 'Docker', icon: '🐳', color: 'bg-blue-500/10 text-blue-600' },
    { name: 'Jenkins', icon: '🔧', color: 'bg-red-500/10 text-red-600' },
    { name: 'Kubernetes', icon: '⚙️', color: 'bg-purple-500/10 text-purple-600' },
    { name: 'AI/ML', icon: '🤖', color: 'bg-green-500/10 text-green-600' },
    { name: 'React', icon: '⚛️', color: 'bg-cyan-500/10 text-cyan-600' },
    { name: 'Git', icon: '📚', color: 'bg-gray-500/10 text-gray-600' },
  ];

  const highlights = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "MCA Student",
      description: "Pursuing Master's in Computer Applications with focus on emerging technologies"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "DevOps Specialist",
      description: "Expert in CI/CD pipelines, containerization, and automation"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Problem Solver",
      description: "Building intelligent, scalable systems for real-world challenges"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Innovation Driven",
      description: "Passionate about next-gen technologies and best practices"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
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
            Get to know me
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 heading-gradient">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate DevOps engineer building the future of technology through automation and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                As an MCA student, I am passionate about <span className="text-primary font-semibold">DevOps, automation, and containerization</span>, 
                focusing on building intelligent, scalable systems. With a strong foundation in CI/CD pipelines, Docker, Jenkins, 
                and cloud technologies, I strive to create efficient solutions that drive technological innovation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise lies in <span className="text-primary font-semibold">automation, workflow optimization, and seamless container deployment</span>. 
                Committed to DevOps best practices and next-gen technologies, I am eager to collaborate and 
                contribute to impactful projects that make a difference.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 text-primary rounded-lg">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main image container */}
              <motion.div
                className="w-80 h-80 lg:w-96 lg:h-96 mx-auto relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl backdrop-blur-sm">
                  <div className="absolute inset-4 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                    <div className="w-64 h-64 lg:w-80 lg:h-80 bg-background rounded-xl flex items-center justify-center shadow-2xl">
                      <span className="text-8xl lg:text-9xl">👩‍💻</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 p-3 bg-primary text-primary-foreground rounded-full shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <GraduationCap className="h-6 w-6" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 p-3 bg-accent text-accent-foreground rounded-full shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <Award className="h-6 w-6" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack with 3D Animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Technologies I Work With
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.2,
                  rotateY: 180,
                  rotateX: 15,
                  z: 50
                }}
                className="group perspective-1000"
                style={{ 
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <Card className="relative card-hover border-2 hover:border-primary/30 transition-all duration-500 overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20 transform-gpu">
                  {/* Animated background glow */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      background: [
                        'linear-gradient(45deg, rgba(59, 130, 246, 0.1), transparent, rgba(147, 51, 234, 0.1))',
                        'linear-gradient(135deg, rgba(147, 51, 234, 0.1), transparent, rgba(59, 130, 246, 0.1))',
                        'linear-gradient(225deg, rgba(59, 130, 246, 0.1), transparent, rgba(147, 51, 234, 0.1))',
                        'linear-gradient(315deg, rgba(147, 51, 234, 0.1), transparent, rgba(59, 130, 246, 0.1))',
                      ]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Floating particles */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary/40 rounded-full"
                        style={{
                          left: `${15 + i * 25}%`,
                          top: `${20 + i * 20}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          x: [0, 10, 0, -10, 0],
                          opacity: [0.2, 1, 0.2],
                          scale: [1, 2, 1],
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 3 + i * 0.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                  
                  <CardContent className="relative p-6 text-center">
                    {/* 3D Spinning Icon */}
                    <motion.div 
                      className="text-4xl mb-4 relative"
                      animate={{
                        rotateY: [0, 360],
                        rotateX: [0, 15, 0, -15, 0],
                        rotateZ: [0, 5, 0, -5, 0],
                        scale: [1, 1.1, 1, 0.95, 1],
                      }}
                      transition={{
                        duration: 8 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                      whileHover={{
                        rotateY: [0, 720],
                        rotateX: [0, 360],
                        scale: 1.5,
                        transition: { 
                          duration: 1,
                          type: "spring",
                          stiffness: 200
                        }
                      }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {/* 3D depth layers */}
                      <div className="absolute inset-0 text-4xl opacity-30 transform translate-x-0.5 translate-y-0.5 blur-sm">
                        {tech.icon}
                      </div>
                      <div className="absolute inset-0 text-4xl opacity-15 transform translate-x-1 translate-y-1 blur-md">
                        {tech.icon}
                      </div>
                      <div className="relative z-10">
                        {tech.icon}
                      </div>
                    </motion.div>
                    
                    {/* Rotating border rings */}
                    <motion.div
                      className="absolute inset-0 rounded-lg border-2 border-primary/0 group-hover:border-primary/50"
                      animate={{
                        rotate: [0, 360],
                        borderColor: [
                          'rgba(59, 130, 246, 0)',
                          'rgba(59, 130, 246, 0.3)',
                          'rgba(147, 51, 234, 0.3)',
                          'rgba(59, 130, 246, 0)',
                        ],
                      }}
                      transition={{
                        rotate: { 
                          duration: 10 + index * 0.5, 
                          repeat: Infinity, 
                          ease: "linear" 
                        },
                        borderColor: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    />
                    
                    {/* Inner rotating ring */}
                    <motion.div
                      className="absolute inset-2 rounded-lg border border-accent/30"
                      animate={{
                        rotate: [0, -360],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        rotate: {
                          duration: 6 + index * 0.3,
                          repeat: Infinity,
                          ease: "linear",
                          delay: index * 0.1
                        },
                        scale: {
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    />
                    
                    {/* Pulsing glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5"
                      animate={{
                        opacity: [0, 0.5, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2 + index * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.1
                      }}
                    />
                    
                    {/* Animated Badge */}
                    <motion.div
                      animate={{
                        y: [0, -2, 0],
                      }}
                      transition={{
                        duration: 2 + index * 0.1,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.05
                      }}
                    >
                      <Badge 
                        variant="secondary" 
                        className={`${tech.color} font-semibold text-xs px-3 py-1 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-500 relative z-10`}
                      >
                        <motion.span
                          animate={{
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 3 + index * 0.1,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.05
                          }}
                        >
                          {tech.name}
                        </motion.span>
                      </Badge>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}