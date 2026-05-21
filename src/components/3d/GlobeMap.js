"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Line, Html } from "@react-three/drei";
import * as THREE from "three";

export default function GlobeMap() {
  const globeRef = useRef();

  // Simple rotation for the globe
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002;
    }
  });

  // Coordinates for our stops (simplified spherical mapping)
  // Assuming radius of 2.
  // Formula: 
  // x = r * cos(lat) * cos(lon)
  // y = r * sin(lat)
  // z = r * cos(lat) * sin(lon)
  // These are roughly mapped for visual effect rather than exact GPS
  
  const stops = [
    { name: "Estes Park", pos: [-1.2, 0.8, 1.4] },
    { name: "Yellowstone", pos: [-1.5, 1.0, 0.8] },
    { name: "Glacier NP", pos: [-1.4, 1.3, 0.5] }
  ];

  // Create points for the line connecting them
  const linePoints = stops.map(s => new THREE.Vector3(...s.pos));

  return (
    <group ref={globeRef}>
      {/* The wireframe globe */}
      <Sphere args={[2, 32, 32]}>
        <meshStandardMaterial 
          color="#112244" 
          wireframe={true} 
          transparent 
          opacity={0.3} 
        />
      </Sphere>
      
      {/* Solid inner core to hide the back lines slightly */}
      <Sphere args={[1.98, 32, 32]}>
        <meshBasicMaterial color="#050a15" />
      </Sphere>

      {/* The Route Line */}
      <Line 
        points={linePoints}
        color="#ffaa00"
        lineWidth={3}
        dashed={true}
      />

      {/* The Route Stops */}
      {stops.map((stop, index) => (
        <group key={index} position={stop.pos}>
          {/* Glowing marker */}
          <Sphere args={[0.08, 16, 16]}>
            <meshBasicMaterial color="#ffaa00" />
          </Sphere>
          
          {/* Larger translucent halo */}
          <Sphere args={[0.15, 16, 16]}>
            <meshBasicMaterial color="#ffaa00" transparent opacity={0.4} />
          </Sphere>

          {/* HTML Label */}
          <Html position={[0.2, 0.2, 0]} center className="globe-label">
            <div style={{
              background: 'rgba(0,0,0,0.7)',
              border: '1px solid #ffaa00',
              padding: '4px 8px',
              borderRadius: '4px',
              color: '#fff',
              fontFamily: 'monospace',
              fontSize: '12px',
              whiteSpace: 'nowrap',
              pointerEvents: 'none'
            }}>
              {stop.name}
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
}
