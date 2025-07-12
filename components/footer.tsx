"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Contact', href: 'contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="h-5 w-5" />,
      href: 'https://github.com/Karvy192003',
      color: 'hover:text-gray-800 dark:hover:text-gray-200'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-5 w-5" />,
      href: 'https://www.linkedin.com/in/karvy-goyel-716202227',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: <Mail className="h-5 w-5" />,
      href: 'mailto:karvy1902@gmail.com',
      color: 'hover:text-blue-500'
    }
  ];

  const contactInfo = [
    {
      icon: <Phone className="h-4 w-4" />,
      text: '+91 7248727000',
      href: 'tel:+917248727000'
    },
    {
      icon: <Mail className="h-4 w-4" />,
      text: 'karvy1902@gmail.com',
      href: 'mailto:karvy1902@gmail.com'
    },
    {
      icon: <MapPin className="h-4 w-4" />,
      text: 'Delhi, India',
      href: '#'
    }
  ];

  return (
    <footer className="bg-secondary/10 border-t border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <motion.h3 
              className="text-2xl font-bold heading-gradient mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Karvy Goyel
            </motion.h3>
            <p className="text-muted-foreground max-w-md mb-6 leading-relaxed">
              Passionate DevOps engineer building intelligent, scalable systems for the future. 
              Specializing in automation, containerization, and cutting-edge technologies.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </span>
                  <span className="text-sm">{info.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
            <div className="space-y-3">
              {footerLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-left group"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <span className="relative">
                    {link.name}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-6">Connect</h4>
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-3 text-muted-foreground ${link.color} transition-colors duration-300 group`}
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </span>
                  <span className="text-sm">{link.name}</span>
                </motion.a>
              ))}
            </div>

            {/* Back to Top Button */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ArrowUp className="h-4 w-4 mr-2" />
                Back to Top
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Bottom Section */}
        <motion.div
          className="border-t border-border/50 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p 
              className="text-muted-foreground text-sm flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              © 2024 Karvy Goyel. Made with{' '}
              <motion.span
                className="mx-1 text-red-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="h-4 w-4 fill-current" />
              </motion.span>
              {' '}and passion for technology.
            </motion.p>
            <motion.p 
              className="text-muted-foreground text-sm"
              whileHover={{ scale: 1.05 }}
            >
              Built with Next.js, Tailwind CSS & Framer Motion
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}