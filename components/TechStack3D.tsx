import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { Group } from 'three';

const techs = [
  { name: 'Python', color: '#3776AB' },
  { name: 'Java', color: '#b07219' },
  { name: 'Docker', color: '#2496ed' },
  { name: 'Jenkins', color: '#d33833' },
  { name: 'Kubernetes', color: '#326ce5' },
  { name: 'AI/ML', color: '#ffb300' },
  { name: 'Full Stack', color: '#00bcd4' },
  { name: 'React', color: '#61dafb' },
];

type Tech = { name: string; color: string };

type TechIconProps = {
  position: [number, number, number];
  tech: Tech;
  paused: boolean;
  onClick: () => void;
};

function TechRing() {
  const group = useRef<Group>(null);
  const [pausedIndex, setPausedIndex] = useState<number | null>(null);
  useFrame((state, delta) => {
    if (group.current) {
      if (pausedIndex === null) {
        group.current.rotation.y += delta * 0.5;
      }
    }
  });
  return (
    <group ref={group}>
      {techs.map((tech, i) => {
        const angle = (i / techs.length) * Math.PI * 2;
        const x = Math.cos(angle) * 3;
        const z = Math.sin(angle) * 3;
        return (
          <TechIcon
            key={tech.name}
            position={[x, 0, z]}
            tech={tech}
            paused={pausedIndex === i}
            onClick={() => setPausedIndex(pausedIndex === i ? null : i)}
          />
        );
      })}
    </group>
  );
}

function TechIcon({ position, tech, paused, onClick }: TechIconProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <mesh
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={onClick}
      scale={hovered ? 1.2 : 1}
    >
      <sphereGeometry args={[0.4, 32, 32]} />
      <meshStandardMaterial color={tech.color} emissive={hovered ? tech.color : '#222'} emissiveIntensity={hovered ? 0.7 : 0.2} />
      {hovered && (
        <Html center style={{ pointerEvents: 'none' }}>
          <div style={{
            background: 'rgba(30,30,40,0.95)',
            color: tech.color,
            padding: '6px 16px',
            borderRadius: 8,
            fontWeight: 600,
            fontSize: 14,
            boxShadow: `0 0 12px ${tech.color}`,
            marginTop: -40,
            whiteSpace: 'nowrap',
          }}>{tech.name}</div>
        </Html>
      )}
    </mesh>
  );
}

export default function TechStack3D() {
  return (
    <div style={{ width: '100%', height: 350 }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={0.7} />
        <TechRing />
      </Canvas>
    </div>
  );
} 