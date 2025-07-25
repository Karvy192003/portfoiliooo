"use client";

import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls, Sphere, Box, Text } from '@react-three/drei';
import { Group, Vector3, Color } from 'three';
import { motion } from 'framer-motion';

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

type Tech = { name: string; color: string; icon: string };

type TechNodeProps = {
  tech: Tech;
  index: number;
  position: [number, number, number];
  onClick: () => void;
  isSelected: boolean;
};

function TechNode({ tech, index, position, onClick, isSelected }: TechNodeProps) {
  const meshRef = useRef<any>();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    // No animation, no scaling, no rotation: icons are static and plain
  });

  return (
    <group position={position}>
      {/* Main glowing sphere */}
      <Sphere
        ref={meshRef}
        args={[0.4, 32, 32]}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial 
          color={tech.color} 
          emissive={new Color(tech.color)}
          emissiveIntensity={hovered || isSelected ? 0.6 : 0.2}
          transparent
          opacity={0.9}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
      {/* Outer glow ring */}
      <Sphere args={[0.5, 16, 16]}>
        <meshBasicMaterial 
          color={tech.color} 
          transparent 
          opacity={hovered || isSelected ? 0.3 : 0.1}
          wireframe
        />
      </Sphere>
      {/* Tech icon and name */}
      <Html center style={{ pointerEvents: 'none' }}>
        <div style={{
          background: hovered || isSelected ? 'rgba(0,0,0,0.95)' : 'rgba(0,0,0,0.8)',
          color: tech.color,
          padding: '12px 20px',
          borderRadius: 16,
          fontWeight: 700,
          fontSize: 16,
          boxShadow: `0 0 30px ${tech.color}60`,
          marginTop: -80,
          whiteSpace: 'nowrap',
          border: `2px solid ${tech.color}60`,
          backdropFilter: 'blur(15px)',
          transform: hovered || isSelected ? 'scale(1.15)' : 'scale(1)',
          transition: 'all 0.4s ease',
          textAlign: 'center',
        }}>
          <div style={{ 
            fontSize: 24, 
            marginBottom: 4,
            filter: `drop-shadow(0 0 8px ${tech.color})`,
          }}>
            {tech.icon}
          </div>
          <div style={{ fontSize: 14, fontWeight: 600 }}>
            {tech.name}
          </div>
        </div>
      </Html>
    </group>
  );
}

function CentralCore() {
  const coreRef = useRef<any>();
  
  useFrame((state) => {
    if (coreRef.current) {
      coreRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      coreRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      coreRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={coreRef}>
      {/* Central glowing core */}
      <Sphere args={[0.2, 32, 32]}>
        <meshStandardMaterial 
          color="#4ECDC4" 
          emissive="#4ECDC4"
          emissiveIntensity={0.5}
          transparent
          opacity={0.9}
          roughness={0}
          metalness={1}
        />
      </Sphere>
      
      {/* Core energy rings */}
      {[0.4, 0.6, 0.8, 1.0].map((radius, i) => (
        <Sphere key={i} args={[radius, 16, 16]}>
          <meshBasicMaterial 
            color="#4ECDC4" 
            transparent 
            opacity={0.1 - i * 0.02}
            wireframe
          />
        </Sphere>
      ))}
    </group>
  );
}

function FloatingParticles() {
  const particlesRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.03;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
  });

  return (
    <group ref={particlesRef}>
      {Array.from({ length: 80 }).map((_, i) => (
        <Box
          key={i}
          position={[
            (Math.random() - 0.5) * 25,
            (Math.random() - 0.5) * 25,
            (Math.random() - 0.5) * 25
          ]}
          args={[0.02, 0.02, 0.02]}
        >
          <meshBasicMaterial 
            color={techs[i % techs.length].color} 
            transparent 
            opacity={0.15} 
          />
        </Box>
      ))}
    </group>
  );
}

function SphereGrid() {
  const gridRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={gridRef}>
      {/* Outer sphere wireframe */}
      <Sphere args={[4, 32, 32]}>
        <meshBasicMaterial 
          color="#4ECDC4" 
          transparent 
          opacity={0.05}
          wireframe
        />
      </Sphere>
      
      {/* Inner sphere wireframe */}
      <Sphere args={[3, 24, 24]}>
        <meshBasicMaterial 
          color="#FF6B6B" 
          transparent 
          opacity={0.03}
          wireframe
        />
      </Sphere>
    </group>
  );
}

export default function TechSphere3D() {
  const [selectedTech, setSelectedTech] = useState<Tech | null>(null);

  return (
    <div className="w-full h-[600px] relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl overflow-hidden border border-gray-700">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]"></div>
      
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          {/* Enhanced lighting setup */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={0.8} color="#ffffff" />
          <pointLight position={[-10, -10, -5]} intensity={0.6} color="#4ECDC4" />
          <pointLight position={[10, -10, 5]} intensity={0.4} color="#FF6B6B" />
          <pointLight position={[0, 10, -5]} intensity={0.3} color="#FFD700" />
          
          {/* Central core */}
          <CentralCore />
          
          {/* Sphere grid structure */}
          <SphereGrid />
          
          {/* Floating particles */}
          <FloatingParticles />
          
          {/* Tech nodes */}
          {techs.map((tech, i) => (
            <TechNode
              key={tech.name}
              tech={tech}
              index={i}
              position={[i * 2.2 - (techs.length - 1), 0, 0]}
              onClick={() => setSelectedTech(selectedTech?.name === tech.name ? null : tech)}
              isSelected={selectedTech?.name === tech.name}
            />
          ))}
          
          <OrbitControls 
            enableZoom={true}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.8}
            minDistance={6}
            maxDistance={15}
            enableDamping
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>
      
      {/* Selected tech info panel */}
      {selectedTech && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          className="absolute bottom-6 left-6 right-6 bg-gray-900/95 backdrop-blur-xl rounded-2xl p-6 border-2 border-gray-700 shadow-2xl"
          style={{
            boxShadow: `0 0 30px ${selectedTech.color}40`,
            borderColor: `${selectedTech.color}40`
          }}
        >
          <div className="flex items-center space-x-4">
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg border-2"
              style={{ 
                backgroundColor: `${selectedTech.color}20`, 
                borderColor: `${selectedTech.color}60`,
                boxShadow: `0 0 20px ${selectedTech.color}30`
              }}
            >
              {selectedTech.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedTech.name}</h3>
              <p className="text-gray-300 text-sm">
                {selectedTech.name === 'Python' && 'High-level programming language for automation and AI/ML'}
                {selectedTech.name === 'Java' && 'Object-oriented programming language for enterprise applications'}
                {selectedTech.name === 'Docker' && 'Containerization platform for application deployment'}
                {selectedTech.name === 'Jenkins' && 'Automation server for CI/CD pipelines'}
                {selectedTech.name === 'Kubernetes' && 'Container orchestration platform for scalable deployments'}
                {selectedTech.name === 'AI/ML' && 'Artificial Intelligence and Machine Learning technologies'}
                {selectedTech.name === 'React' && 'JavaScript library for building user interfaces'}
                {selectedTech.name === 'Git' && 'Version control system for tracking code changes'}
                {selectedTech.name === 'Ansible' && 'Infrastructure automation and configuration management'}
                {selectedTech.name === 'AWS Cloud' && 'Amazon Web Services cloud computing platform'}
              </p>
            </div>
          </div>
        </motion.div>
      )}
      
      {/* Instructions overlay */}
      <div className="absolute top-6 right-6 bg-gray-900/80 backdrop-blur-md rounded-xl p-4 border border-gray-700">
        <p className="text-sm text-gray-300">
          🖱️ Click nodes to explore • 🔄 Drag to rotate • 🔍 Scroll to zoom
        </p>
      </div>
      
      {/* Loading fallback */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-gray-400 text-lg font-medium opacity-50">
          Loading 3D Tech Sphere...
        </div>
      </div>
    </div>
  );
}