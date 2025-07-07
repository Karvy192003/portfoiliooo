"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  const techStack = [
    { name: 'Python', icon: '🐍' },
    { name: 'Java', icon: '☕' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Jenkins', icon: '🔧' },
    { name: 'Kubernetes', icon: '⚙️' },
    { name: 'AI/ML', icon: '🤖' },
    { name: 'Full Stack', icon: '💻' },
    { name: 'React', icon: '⚛️' },
  ];

  return (
    <motion.section
      id="about"
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                As an MCA student, I am passionate about AI/ML, Java, and DevOps, focusing on building 
                intelligent, scalable systems. With a strong foundation in software development, data 
                analytics, and automation, I strive to create efficient solutions that drive technological innovation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise lies in model development, workflow optimization, and seamless AI deployment. 
                Committed to problem-solving and next-gen technologies, I am eager to collaborate and 
                contribute to impactful projects.
              </p>
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Education & Background
                </h3>
                <p className="text-muted-foreground">
                  Currently pursuing MCA with focus on emerging technologies and modern software development practices.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div className="relative">
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full flex items-center justify-center">
                    <span className="text-6xl">👩‍🎓</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                  Tech Stack
                </h3>
                <div className="grid grid-cols-4 gap-4">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Card className="text-center p-4 hover:shadow-lg transition-shadow">
                        <CardContent className="p-0">
                          <div className="text-3xl mb-2">{tech.icon}</div>
                          <p className="text-sm font-medium text-foreground">{tech.name}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}