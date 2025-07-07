"use client";

import { Button } from '@/components/ui/button';
import { Download, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 80, damping: 18, duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-background rounded-full flex items-center justify-center">
                    <span className="text-6xl">👩‍💻</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-4 h-4 bg-primary rounded-full animate-ping"></div>
              <div className="absolute bottom-8 left-8 w-6 h-6 bg-secondary rounded-full animate-bounce"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Hi, I'm{' '}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary cursor-pointer"
                whileHover={{
                  backgroundPosition: '200% 0',
                  scale: 1.08,
                  transition: { type: 'spring', stiffness: 300, damping: 20, backgroundPosition: { duration: 0.5 } }
                }}
                style={{
                  backgroundSize: '200% 100%',
                  backgroundPosition: '0% 0%'
                }}
              >
                Karvy Goyel
              </motion.span>{' '}
              👋
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-4">
              A Passionate Software Engineer
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              I design and build modern web applications with beautiful UI and powerful backend. 
              Specializing in AI/ML, Java, and DevOps to create intelligent, scalable systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.15)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 border-neon"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <Download className="mr-2 h-4 w-4" />
                View Resume
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.15)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="border border-neon text-primary px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 bg-transparent hover:bg-primary/10"
                onClick={scrollToProjects}
              >
                Explore Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}