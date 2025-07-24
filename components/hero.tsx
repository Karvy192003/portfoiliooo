"use client";

import { Button } from '@/components/ui/button';
import { Download, ArrowRight, Code, Server, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingIcons = [
    { icon: <Code className="h-8 w-8" />, delay: 0, x: 100, y: 50 },
    { icon: <Server className="h-8 w-8" />, delay: 0.5, x: -80, y: 80 },
    { icon: <Zap className="h-8 w-8" />, delay: 1, x: 120, y: -60 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 hero-bg">
        <div className="particles">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${20 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Hi, I'm{' '}
              <motion.span
                className="heading-gradient block lg:inline"
                whileHover={{
                  scale: 1.05,
                  transition: { type: 'spring', stiffness: 300, damping: 20 }
                }}
              >
                Karvy Goyel
              </motion.span>
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              DevOps Engineer & Automation Specialist
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              I design and build automated CI/CD pipelines with containerization and cloud deployment. 
              Specializing in Docker, Jenkins, and automation to create intelligent, scalable systems 
              that drive technological innovation.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold shadow-lg neon-glow"
                  onClick={() => window.open('https://drive.google.com/file/d/15AwwSDjZJ6aLYSbmOG3jLq0aKcd-4kO4/view?usp=drive_link', '_blank')}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                  onClick={scrollToContact}
                >
                  Let's Connect
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {[
                { number: '15+', label: 'Projects' },
                { number: '3+', label: 'Years Learning' },
                { number: '100%', label: 'Dedication' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* 3D Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
              {/* Main avatar circle */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 backdrop-blur-sm"
                animate={{
                  rotate: 360,
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <div className="w-48 h-48 lg:w-64 lg:h-64 bg-background rounded-full flex items-center justify-center shadow-2xl">
                    <span className="text-6xl lg:text-8xl">👩‍💻</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating tech icons */}
              {floatingIcons.map((item, index) => (
                <motion.div
                  key={index}
                  className="absolute text-primary/60"
                  style={{
                    left: `calc(50% + ${item.x}px)`,
                    top: `calc(50% + ${item.y}px)`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: item.delay,
                  }}
                >
                  <div className="p-3 bg-background/80 backdrop-blur-sm rounded-full shadow-lg border border-primary/20">
                    {item.icon}
                  </div>
                </motion.div>
              ))}

              {/* Orbital rings */}
              {[1, 2, 3].map((ring) => (
                <motion.div
                  key={ring}
                  className="absolute inset-0 border border-primary/20 rounded-full"
                  style={{
                    margin: `${ring * 20}px`,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10 + ring * 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
}