"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Stars } from "@react-three/drei";
import { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";

function ScrollReactiveElements() {
  const ringRef1 = useRef();
  const ringRef2 = useRef();
  const footerRef = useRef();
  const shardsRef = useRef();

  // Create shards data once
  const shards = useMemo(() => {
    return Array.from({ length: 15 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 30 + 10,
        (Math.random() - 0.5) * 10 - 5
      ],
      size: Math.random() * 0.5 + 0.1,
    }));
  }, []);

  useFrame((state) => {
    // Calculate scroll progress (0 to 1)
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const progress = Math.max(0, Math.min(1, scrollY / (maxScroll || 1)));

    // Smooth damp variables
    const targetRingX = progress * Math.PI * 2;
    const targetRingY = progress * Math.PI;
    const targetRingZ = -5 - (progress * 10);

    if (ringRef1.current) {
      ringRef1.current.rotation.x = THREE.MathUtils.lerp(ringRef1.current.rotation.x, targetRingX, 0.05);
      ringRef1.current.rotation.y = THREE.MathUtils.lerp(ringRef1.current.rotation.y, targetRingY, 0.05);
      ringRef1.current.position.z = THREE.MathUtils.lerp(ringRef1.current.position.z, targetRingZ, 0.05);
    }

    if (ringRef2.current) {
      ringRef2.current.rotation.x = THREE.MathUtils.lerp(ringRef2.current.rotation.x, targetRingY, 0.05);
      ringRef2.current.rotation.z = THREE.MathUtils.lerp(ringRef2.current.rotation.z, targetRingX, 0.05);
    }

    if (shardsRef.current) {
      // Move shards upwards based on scroll
      const shardYOffset = progress * 20 - 10;
      shardsRef.current.position.y = THREE.MathUtils.lerp(shardsRef.current.position.y, shardYOffset, 0.05);
      shardsRef.current.rotation.y = THREE.MathUtils.lerp(shardsRef.current.rotation.y, progress * Math.PI * 4, 0.05);
      shardsRef.current.rotation.x = THREE.MathUtils.lerp(shardsRef.current.rotation.x, progress * Math.PI * 2, 0.05);
    }

    if (footerRef.current) {
      // Footer rises at the very end
      const footerProgress = Math.max(0, (progress - 0.8) / 0.2); // 0 to 1 in the last 20%
      const targetFooterY = -20 + (footerProgress * 15);
      
      footerRef.current.position.y = THREE.MathUtils.lerp(footerRef.current.position.y, targetFooterY, 0.05);
      footerRef.current.scale.setScalar(THREE.MathUtils.lerp(footerRef.current.scale.x, footerProgress, 0.05));
      footerRef.current.rotation.y = THREE.MathUtils.lerp(footerRef.current.rotation.y, targetRingX, 0.05);
    }
  });

  return (
    <>
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

      <mesh ref={ringRef1} position={[0, 0, -5]}>
        <torusGeometry args={[8, 0.02, 16, 100]} />
        <meshStandardMaterial color="#88aaff" emissive="#4466ff" emissiveIntensity={2} toneMapped={false} />
      </mesh>

      <mesh ref={ringRef2} position={[0, 0, -10]}>
        <torusGeometry args={[12, 0.01, 16, 100]} />
        <meshStandardMaterial color="#ffaa88" emissive="#ff6644" emissiveIntensity={1.5} toneMapped={false} />
      </mesh>

      <group ref={shardsRef}>
        {shards.map((shard, i) => (
          <Float key={i} speed={2} rotationIntensity={2} floatIntensity={2}>
            <mesh position={shard.position}>
              <octahedronGeometry args={[shard.size]} />
              <meshStandardMaterial 
                color="#ffffff" 
                metalness={0.8} 
                roughness={0.2} 
                transparent 
                opacity={0.6}
              />
            </mesh>
          </Float>
        ))}
      </group>

      <mesh ref={footerRef} position={[0, -20, -5]} scale={0}>
        <icosahedronGeometry args={[4, 1]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          metalness={0.9} 
          roughness={0.1}
          wireframe
        />
      </mesh>
    </>
  );
}

export default function GlobalCanvas() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        background: "transparent",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#4466ff" />
        
        <Suspense fallback={null}>
          <ScrollReactiveElements />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
