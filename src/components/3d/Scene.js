"use client";

import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

export default function Scene({ children, orbit = false, style, cameraPosition = [0, 0, 5] }) {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: orbit ? 'auto' : 'none', ...style }}>
      <Canvas camera={{ position: cameraPosition, fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          
          {children}

          {orbit && (
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              autoRotate={false}
            />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}
