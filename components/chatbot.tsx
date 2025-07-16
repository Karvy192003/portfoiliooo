"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Karvy's AI assistant. I can help you learn about his skills, projects, and experience. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Skills related responses
    if (message.includes('skill') || message.includes('technology') || message.includes('tech stack')) {
      return "Karvy specializes in DevOps (90%), Python (95%), Java (80%), Frontend (85%), Backend (88%), AI/ML (82%), GenAI (78%), and Agentic AI (75%). He's particularly strong in Docker, Jenkins, Kubernetes, React, and Flask!";
    }
    
    // Projects related responses
    if (message.includes('project') || message.includes('work') || message.includes('portfolio')) {
      return "Karvy has built amazing projects including:\n• CI/CD Pipeline Automation\n• PropGuard AI - Rental Scam Detector\n• MindBloom - AI Therapy Assistant\n• Docker Management UI\n• NeoToolkit - Smart Productivity Suite\n\nAll projects showcase his DevOps, AI/ML, and full-stack expertise!";
    }
    
    // DevOps related responses
    if (message.includes('devops') || message.includes('docker') || message.includes('jenkins') || message.includes('kubernetes')) {
      return "Karvy is a DevOps specialist with 90% expertise! He excels in:\n• Docker containerization (92%)\n• Jenkins CI/CD pipelines (88%)\n• Kubernetes orchestration (85%)\n• Git/GitHub workflows (95%)\n• Linux system administration (90%)";
    }
    
    // AI/ML related responses
    if (message.includes('ai') || message.includes('ml') || message.includes('machine learning') || message.includes('artificial intelligence')) {
      return "Karvy has strong AI/ML capabilities:\n• Machine Learning (82%)\n• GenAI with Gemini API (85%)\n• LangChain integration (82%)\n• Agentic AI systems (75%)\n• Data Analysis with Pandas/NumPy (88%)\n• Computer Vision with OpenCV (78%)";
    }
    
    // Programming languages
    if (message.includes('python') || message.includes('java') || message.includes('javascript')) {
      return "Karvy's programming expertise:\n• Python (95%) - His strongest language!\n• Java (80%) - Solid foundation\n• JavaScript (85%) - Modern web development\n• Bash scripting (88%) - System automation\n• HTML/CSS (90%) - Frontend styling";
    }
    
    // Contact related responses
    if (message.includes('contact') || message.includes('email') || message.includes('phone') || message.includes('reach')) {
      return "You can reach Karvy at:\n📧 karvy1902@gmail.com\n📍 Delhi, India\n💼 LinkedIn: linkedin.com/in/karvy-goyel-716202227\n🐙 GitHub: github.com/Karvy192003";
    }
    
    // Education related responses
    if (message.includes('education') || message.includes('study') || message.includes('mca') || message.includes('student')) {
      return "Karvy is currently pursuing his Master's in Computer Applications (MCA) with a focus on emerging technologies. He's passionate about DevOps, automation, and building intelligent, scalable systems!";
    }
    
    // Experience related responses
    if (message.includes('experience') || message.includes('background') || message.includes('about')) {
      return "Karvy is a passionate DevOps engineer and MCA student specializing in:\n• CI/CD pipeline automation\n• Containerization with Docker\n• AI/ML integration\n• Full-stack development\n• Cloud technologies\n\nHe's built 15+ projects and has 3+ years of learning experience!";
    }
    
    // Greeting responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! 👋 I'm here to help you learn about Karvy Goyel. He's a talented DevOps engineer with expertise in automation, AI/ML, and full-stack development. What would you like to know?";
    }
    
    // Default response
    return "That's a great question! I can help you learn about Karvy's skills, projects, experience, or contact information. Try asking about his DevOps expertise, AI/ML projects, or programming skills!";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl neon-glow"
          >
            <MessageCircle className="h-8 w-8" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)]"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <Card className="shadow-2xl border-2 border-primary/20 overflow-hidden">
              {/* Header */}
              <CardHeader className="bg-gradient-to-r from-primary to-accent text-primary-foreground p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Bot className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Karvy's AI Assistant</CardTitle>
                      <p className="text-sm opacity-90">Ask me anything!</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsMinimized(!isMinimized)}
                      className="text-primary-foreground hover:bg-white/20 h-8 w-8"
                    >
                      {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="text-primary-foreground hover:bg-white/20 h-8 w-8"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <AnimatePresence>
                {!isMinimized && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent className="p-0">
                      <div className="h-80 overflow-y-auto p-4 space-y-4 bg-secondary/5">
                        {messages.map((message) => (
                          <motion.div
                            key={message.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                          >
                            <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'}`}>
                                {message.sender === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                              </div>
                              <div className={`p-3 rounded-2xl ${message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-background border border-border'}`}>
                                <p className="text-sm whitespace-pre-line">{message.text}</p>
                                <p className={`text-xs mt-1 opacity-70`}>
                                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                        
                        {/* Typing indicator */}
                        {isTyping && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex justify-start"
                          >
                            <div className="flex items-start space-x-2">
                              <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                                <Bot className="h-4 w-4" />
                              </div>
                              <div className="bg-background border border-border p-3 rounded-2xl">
                                <div className="flex space-x-1">
                                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        <div ref={messagesEndRef} />
                      </div>

                      {/* Input */}
                      <div className="p-4 border-t border-border bg-background">
                        <div className="flex space-x-2">
                          <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Ask about skills, projects, experience..."
                            className="flex-1 border-2 border-border focus:border-primary"
                            disabled={isTyping}
                          />
                          <Button
                            onClick={handleSendMessage}
                            disabled={!inputValue.trim() || isTyping}
                            className="bg-primary hover:bg-primary/90 text-primary-foreground px-4"
                          >
                            <Send className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}