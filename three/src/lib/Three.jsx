// ThreeScene.jsx
import * as THREE from 'three';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { useRef, useState, useMemo } from 'react';
import { RoundedBoxGeometry } from 'three-stdlib';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { KernelSize } from 'postprocessing';
import { Sky } from '@react-three/drei';

extend({ RoundedBoxGeometry });

function FloatingCube({ position, color }) {
  const meshRef = useRef();
  const initialOffset = useMemo(() => Math.random() * 1000, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() + initialOffset;
    meshRef.current.rotation.x = Math.sin(t / 2) * 0.5;
    meshRef.current.rotation.y = Math.cos(t / 3) * 0.5;
    meshRef.current.position.x = position[0] + Math.sin(t + position[0]) * 0.05;
    meshRef.current.position.y = position[1] + Math.cos(t + position[1]) * 0.05;
    meshRef.current.position.z = position[2] + Math.sin(t + position[2]) * 0.05;
  });

  return (
    <mesh ref={meshRef} castShadow>
      <roundedBoxGeometry args={[1, 1, 1, 3, 0.08]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.0}
        roughness={0.5}
        metalness={0.2}
      />
    </mesh>
  );
}

function SmoothCameraFollow() {
  const { camera, mouse } = useThree();
  const [target] = useState(new THREE.Vector3());

  useFrame(() => {
    const targetX = mouse.x * 1.5;
    const targetY = mouse.y * 1.5;
    target.set(targetX, targetY, 5);
    camera.position.lerp(target, 0.03);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function ShadowReceiver() {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[20, 20]} />
      <shadowMaterial opacity={0.25} />
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 5], fov: 60 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ powerPreference: 'high-performance', antialias: true }}
    >
      {/* Sky */}
      <Sky
        distance={450000}
        sunPosition={[100, 20, 100]}
        inclination={0.47}
        azimuth={0.25}
        mieCoefficient={0.005}
        turbidity={4}
        rayleigh={1}
      />

      {/* Lights */}
      <ambientLight intensity={0.4} color="#aaaaff" />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.9}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={1}
        shadow-camera-far={20}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Shadow Receiver only, no floor */}
      <ShadowReceiver />

      {/* Cubes */}
      <FloatingCube position={[-1.5, 0, 0]} color={'#991141'} />
      <FloatingCube position={[0, 1, -1]} color={'#108236'} />
      <FloatingCube position={[1.5, -0.5, 0.5]} color={'#124bb3'} />

      <SmoothCameraFollow />

      {/* Postprocessing */}
      <EffectComposer multisampling={0}>
        <Bloom
          intensity={0.8}
          kernelSize={KernelSize.VERY_SMALL}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.05}
        />
      </EffectComposer>
    </Canvas>
  );
}
