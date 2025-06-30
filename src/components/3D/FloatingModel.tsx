import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Float, Center } from '@react-three/drei';
import * as THREE from 'three';

interface MouseFollowingCubeProps {
  mousePosition: { x: number; y: number };
  isHovering: boolean;
}

const MouseFollowingCube: React.FC<MouseFollowingCubeProps> = ({ mousePosition, isHovering }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Auto rotation
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.rotation.x += delta * 0.2;
      
      // Mouse following effect
      if (isHovering) {
        // Convert mouse position to 3D space
        const x = (mousePosition.x / window.innerWidth) * 2 - 1;
        const y = -(mousePosition.y / window.innerHeight) * 2 + 1;
        
        // Smoothly move the cube towards mouse position
        const targetX = x * viewport.width * 0.3;
        const targetY = y * viewport.height * 0.3;
        
        meshRef.current.position.x = THREE.MathUtils.lerp(
          meshRef.current.position.x,
          targetX,
          delta * 3
        );
        meshRef.current.position.y = THREE.MathUtils.lerp(
          meshRef.current.position.y,
          targetY,
          delta * 3
        );
        
        // Add slight rotation based on mouse position
        meshRef.current.rotation.z = THREE.MathUtils.lerp(
          meshRef.current.rotation.z,
          x * 0.2,
          delta * 2
        );
      } else {
        // Return to center when not hovering
        meshRef.current.position.x = THREE.MathUtils.lerp(
          meshRef.current.position.x,
          0,
          delta * 2
        );
        meshRef.current.position.y = THREE.MathUtils.lerp(
          meshRef.current.position.y,
          0,
          delta * 2
        );
        meshRef.current.rotation.z = THREE.MathUtils.lerp(
          meshRef.current.rotation.z,
          0,
          delta * 2
        );
      }
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={isHovering ? 0.5 : 2}>
      <Center>
        <mesh ref={meshRef}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial
            color={isHovering ? "#aa33ff" : "#33bbff"}
            emissive={isHovering ? "#ff3399" : "#aa33ff"}
            emissiveIntensity={isHovering ? 0.5 : 0.3}
            transparent
            opacity={0.8}
          />
          {/* Add wireframe overlay for extra effect */}
          <meshBasicMaterial
            attach="material"
            wireframe
            color={isHovering ? "#ffffff" : "#33bbff"}
            transparent
            opacity={0.2}
          />
        </mesh>
      </Center>
    </Float>
  );
};

interface FloatingModelProps {
  mousePosition: { x: number; y: number };
  isHovering: boolean;
}

const FloatingModel: React.FC<FloatingModelProps> = ({ mousePosition, isHovering }) => {
  return (
    <div className="w-full h-full">
      <Canvas 
        camera={{ position: [0, 0, 5] }}
        gl={{ antialias: true, alpha: true }}
        onCreated={({ gl }) => {
          gl.setClearColor('#000000', 0);
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight 
          position={[-10, -10, -10]} 
          intensity={isHovering ? 1 : 0.5} 
          color="#aa33ff" 
        />
        {/* Add dynamic lighting that follows mouse */}
        <pointLight
          position={[
            (mousePosition.x / window.innerWidth - 0.5) * 10,
            -(mousePosition.y / window.innerHeight - 0.5) * 10,
            5
          ]}
          intensity={isHovering ? 0.8 : 0}
          color="#ff3399"
        />
        <MouseFollowingCube mousePosition={mousePosition} isHovering={isHovering} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate={!isHovering}
          autoRotateSpeed={0.5}
          enabled={!isHovering}
        />
      </Canvas>
    </div>
  );
};

export default FloatingModel;