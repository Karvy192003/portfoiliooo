"use client";

import React from 'react';

const techs = [
  { name: 'Python', color: '#3776AB', icon: '🐍' },
  { name: 'Java', color: '#ED8B00', icon: '☕' },
  { name: 'Docker', color: '#2496ED', icon: '🐳' },
  { name: 'Jenkins', color: '#D33833', icon: '🔧' },
  { name: 'Kubernetes', color: '#326CE5', icon: '⚙️' },
  { name: 'AI/ML', color: '#FF6B00', icon: '🤖' },
  { name: 'React', color: '#61DAFB', icon: '⚛️' },
  { name: 'Git', color: '#F05032', icon: '📚' },
  { name: 'Ansible', color: '#EE0000', icon: '🔄' },
  { name: 'AWS Cloud', color: '#FF9900', icon: '☁️' },
];

export default function TechSphere3D() {
  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl overflow-hidden border border-gray-700 p-8">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]"></div>
      
      {/* Static technology grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
        {techs.map((tech) => (
          <div
            key={tech.name}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 text-center group"
            style={{
              boxShadow: `0 0 20px ${tech.color}20`,
            }}
          >
            <div 
              className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center text-3xl shadow-lg border-2 group-hover:scale-110 transition-transform duration-300"
              style={{ 
                backgroundColor: `${tech.color}20`, 
                borderColor: `${tech.color}60`,
                boxShadow: `0 0 20px ${tech.color}30`
              }}
            >
              {tech.icon}
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
            <p className="text-gray-300 text-sm">
              {tech.name === 'Python' && 'High-level programming language for automation and AI/ML'}
              {tech.name === 'Java' && 'Object-oriented programming language for enterprise applications'}
              {tech.name === 'Docker' && 'Containerization platform for application deployment'}
              {tech.name === 'Jenkins' && 'Automation server for CI/CD pipelines'}
              {tech.name === 'Kubernetes' && 'Container orchestration platform for scalable deployments'}
              {tech.name === 'AI/ML' && 'Artificial Intelligence and Machine Learning technologies'}
              {tech.name === 'React' && 'JavaScript library for building user interfaces'}
              {tech.name === 'Git' && 'Version control system for tracking code changes'}
              {tech.name === 'Ansible' && 'Infrastructure automation and configuration management'}
              {tech.name === 'AWS Cloud' && 'Amazon Web Services cloud computing platform'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}