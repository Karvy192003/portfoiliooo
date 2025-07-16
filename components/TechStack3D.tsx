import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Text3D, OrbitControls, Sphere, Box, Torus, Cone } from '@react-three/drei';
import { Group, Vector3, Color } from 'three';
import { motion } from 'framer-motion';

const techs = [
  { name: 'Python', color: '#3776AB', icon: '🐍' },
  { name: 'Java', color: '#b07219', icon: '☕' },
  { name: 'Docker', color: '#2496ed', icon: '🐳' },
  { name: 'Jenkins', color: '#d33833', icon: '🔧' },
  { name: 'Kubernetes', color: '#326ce5', icon: '⚙️' },
  { name: 'AI/ML', color: '#ffb300', icon: '🤖' },
  { name: 'React', color: '#61dafb', icon: '⚛️' },
  { name: 'Git', color: '#f05032', icon: '📚' },
];

type Tech = { name: string; color: string; icon: string };

type TechSphereProps = {
  position: [number, number, number];
  tech: Tech;
  index: number;
  onClick: () => void;
  isSelected: boolean;
};

function TechSphere({ position, tech, index, onClick, isSelected }: TechSphereProps) {
  const meshRef = useRef<any>();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Continuous rotation
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime + index) * 0.1;
      
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.2;
      
      // Scale animation on hover/select
      const targetScale = hovered || isSelected ? 1.4 : 1;
      meshRef.current.scale.lerp(new Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <group position={position}>
      {/* Main sphere */}
      <Sphere
        ref={meshRef}
        args={[0.6, 32, 32]}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial 
          color={tech.color} 
          emissive={new Color(tech.color)}
          emissiveIntensity={hovered || isSelected ? 0.4 : 0.1}
          transparent
          opacity={0.9}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
      
      {/* Orbiting ring */}
      <Torus
        args={[1, 0.05, 8, 32]}
        rotation={[Math.PI / 2, 0, index * 0.5]}
      >
        <meshBasicMaterial color={tech.color} transparent opacity={0.3} />
      </Torus>
      
      {/* Tech name */}
      <Html center style={{ pointerEvents: 'none' }}>
        <div style={{
          background: hovered || isSelected ? 'rgba(0,0,0,0.9)' : 'rgba(0,0,0,0.7)',
          color: tech.color,
          padding: '8px 16px',
          borderRadius: 12,
          fontWeight: 700,
          fontSize: 14,
          boxShadow: `0 0 20px ${tech.color}40`,
          marginTop: -60,
          whiteSpace: 'nowrap',
          border: `2px solid ${tech.color}40`,
          backdropFilter: 'blur(10px)',
          transform: hovered || isSelected ? 'scale(1.1)' : 'scale(1)',
          transition: 'all 0.3s ease',
        }}>
          <span style={{ marginRight: 8, fontSize: 16 }}>{tech.icon}</span>
          {tech.name}
        </div>
      </Html>
      
      {/* Floating particles around sphere */}
      {[...Array(3)].map((_, i) => (
        <Box
          key={i}
          args={[0.02, 0.02, 0.02]}
          position={[
            Math.cos(i * 2) * 1.5,
            Math.sin(i * 2) * 1.5,
            Math.sin(i) * 1.5
          ]}
        >
          <meshBasicMaterial color={tech.color} transparent opacity={0.6} />
        </Box>
      ))}
    </group>
  );
}

function CentralCore() {
  const coreRef = useRef<any>();
  
  useFrame((state) => {
    if (coreRef.current) {
      coreRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      coreRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      coreRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={coreRef}>
      <Sphere args={[0.3, 32, 32]}>
        <meshStandardMaterial 
          color="#4ECDC4" 
          emissive="#4ECDC4"
          emissiveIntensity={0.3}
          transparent
          opacity={0.8}
          roughness={0}
          metalness={1}
        />
      </Sphere>
      
      {/* Core rings */}
      {[0.5, 0.7, 0.9].map((radius, i) => (
        <Torus
          key={i}
          args={[radius, 0.02, 8, 32]}
          rotation={[i * Math.PI / 3, i * Math.PI / 4, 0]}
        >
          <meshBasicMaterial color="#4ECDC4" transparent opacity={0.4} />
        </Torus>
      ))}
    </group>
  );
}

function FloatingParticles() {
  const particlesRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={particlesRef}>
      {Array.from({ length: 100 }).map((_, i) => (
        <Box
          key={i}
          position={[
            (Math.random() - 0.5) * 30,
            (Math.random() - 0.5) * 30,
            (Math.random() - 0.5) * 30
          ]}
          args={[0.03, 0.03, 0.03]}
        >
          <meshBasicMaterial 
            color={techs[i % techs.length].color} 
            transparent 
            opacity={0.2} 
          />
        </Box>
      ))}
    </group>
  );
}

export default function TechStack3D() {
  const [selectedTech, setSelectedTech] = useState<Tech | null>(null);

  return (
    <div className="w-full h-[500px] relative bg-gradient-to-br from-background via-secondary/5 to-background rounded-2xl overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      <Canvas camera={{ position: [0, 0, 12], fov: 60 }}>
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4ECDC4" />
          <pointLight position={[10, -10, 5]} intensity={0.3} color="#FF6B6B" />
          
          {/* Central core */}
          <CentralCore />
          
          {/* Floating particles */}
          <FloatingParticles />
          
          {/* Tech spheres in a circle */}
          {techs.map((tech, i) => {
            const angle = (i / techs.length) * Math.PI * 2;
            const radius = 4;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            const y = Math.sin(i * 0.5) * 0.5;
            
            return (
              <TechSphere
                key={tech.name}
                position={[x, y, z]}
                tech={tech}
                index={i}
                onClick={() => setSelectedTech(selectedTech?.name === tech.name ? null : tech)}
                isSelected={selectedTech?.name === tech.name}
              />
            );
          })}
          
          <OrbitControls 
            enableZoom={true}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.3}
            minDistance={8}
            maxDistance={20}
          />
        </Suspense>
      </Canvas>
      
      {/* Selected tech info */}
      {selectedTech && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-xl rounded-2xl p-6 border-2 border-primary/20 shadow-2xl"
        >
          <div className="flex items-center space-x-4">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg"
              style={{ backgroundColor: `${selectedTech.color}20`, border: `2px solid ${selectedTech.color}40` }}
            >
              {selectedTech.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">{selectedTech.name}</h3>
              <p className="text-muted-foreground">Click and drag to explore • Scroll to zoom</p>
            </div>
          </div>
        </motion.div>
      )}
      
      {/* Instructions */}
      <div className="absolute top-6 right-6 bg-background/80 backdrop-blur-md rounded-xl p-4 border border-border/50">
        <p className="text-sm text-muted-foreground">
          🖱️ Click spheres to select • 🔄 Auto-rotating view
        </p>
      </div>
    </div>
  );
}