import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls, Sphere, Box } from '@react-three/drei';
import { Group, Vector3 } from 'three';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  percentage: number;
  color: string;
  position: [number, number, number];
}

const skills: Skill[] = [
  { name: 'DevOps', percentage: 90, color: '#FF6B6B', position: [0, 2, 0] },
  { name: 'Python', percentage: 95, color: '#4ECDC4', position: [2, 1, 1] },
  { name: 'Java', percentage: 80, color: '#45B7D1', position: [-2, 1, 1] },
  { name: 'Frontend', percentage: 85, color: '#96CEB4', position: [1, -1, 2] },
  { name: 'Backend', percentage: 88, color: '#FFEAA7', position: [-1, -1, 2] },
  { name: 'AI/ML', percentage: 82, color: '#DDA0DD', position: [0, 0, -2] },
  { name: 'GenAI', percentage: 78, color: '#98D8C8', position: [2, -2, 0] },
  { name: 'Agentic AI', percentage: 75, color: '#F7DC6F', position: [-2, -2, 0] },
];

function SkillSphere({ skill, onClick, isSelected }: { 
  skill: Skill; 
  onClick: () => void; 
  isSelected: boolean;
}) {
  const meshRef = useRef<any>();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.y += 0.01;
      
      if (hovered || isSelected) {
        meshRef.current.scale.lerp(new Vector3(1.3, 1.3, 1.3), 0.1);
      } else {
        meshRef.current.scale.lerp(new Vector3(1, 1, 1), 0.1);
      }
    }
  });

  return (
    <group position={skill.position}>
      <Sphere
        ref={meshRef}
        args={[0.5, 32, 32]}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial 
          color={skill.color} 
          emissive={skill.color}
          emissiveIntensity={hovered || isSelected ? 0.3 : 0.1}
          transparent
          opacity={0.8}
        />
      </Sphere>
      
      <Text
        position={[0, 0.8, 0]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-bold.woff"
      >
        {skill.name}
      </Text>
      
      <Text
        position={[0, -0.8, 0]}
        fontSize={0.15}
        color={skill.color}
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-regular.woff"
      >
        {skill.percentage}%
      </Text>
    </group>
  );
}

function FloatingParticles() {
  const particlesRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={particlesRef}>
      {Array.from({ length: 50 }).map((_, i) => (
        <Box
          key={i}
          position={[
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20
          ]}
          args={[0.02, 0.02, 0.02]}
        >
          <meshBasicMaterial color="#4ECDC4" transparent opacity={0.3} />
        </Box>
      ))}
    </group>
  );
}

export default function Skills3D() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  return (
    <div className="w-full h-[600px] relative">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <pointLight position={[-10, -10, -5]} intensity={0.3} color="#4ECDC4" />
        
        <FloatingParticles />
        
        {skills.map((skill) => (
          <SkillSphere
            key={skill.name}
            skill={skill}
            onClick={() => setSelectedSkill(skill)}
            isSelected={selectedSkill?.name === skill.name}
          />
        ))}
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
      
      {selectedSkill && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-md rounded-xl p-4 border border-border"
        >
          <h3 className="text-xl font-bold text-foreground mb-2">{selectedSkill.name}</h3>
          <div className="flex items-center space-x-3">
            <div className="flex-1 bg-secondary rounded-full h-2">
              <motion.div
                className="h-2 rounded-full"
                style={{ backgroundColor: selectedSkill.color }}
                initial={{ width: 0 }}
                animate={{ width: `${selectedSkill.percentage}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
            <span className="text-lg font-semibold" style={{ color: selectedSkill.color }}>
              {selectedSkill.percentage}%
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
}