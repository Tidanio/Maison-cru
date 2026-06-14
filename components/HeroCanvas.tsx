"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";

/** Tracks the user's reduced-motion preference without re-rendering each frame. */
function useReducedMotionRef() {
  const reduced = useRef(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => (reduced.current = mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

/**
 * A softly distorting sphere — a draped, fabric-like form in stone/taupe.
 * It rotates on its own and parallaxes gently toward the cursor.
 */
function Drape() {
  const group = useRef<THREE.Group>(null);
  const mesh = useRef<THREE.Mesh>(null);
  const reduced = useReducedMotionRef();

  useFrame((state, delta) => {
    const g = group.current;
    const m = mesh.current;
    if (!g || !m) return;

    if (!reduced.current) {
      m.rotation.y += delta * 0.12;
      m.rotation.z += delta * 0.04;
    }

    // Gentle, eased cursor parallax (state.pointer is normalised -1..1).
    const px = state.pointer.x;
    const py = state.pointer.y;
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, px * 0.4, 0.045);
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, -py * 0.3, 0.045);
    g.position.x = THREE.MathUtils.lerp(g.position.x, px * 0.35, 0.045);
    g.position.y = THREE.MathUtils.lerp(g.position.y, py * 0.2, 0.045);
  });

  return (
    <group ref={group}>
      <Float speed={1.1} rotationIntensity={0.35} floatIntensity={0.9}>
        <mesh ref={mesh} scale={2.15}>
          <sphereGeometry args={[1, 96, 96]} />
          <MeshDistortMaterial
            color="#A89F92"
            roughness={0.5}
            metalness={0.18}
            distort={0.32}
            speed={1.4}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 6], fov: 32 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.75} />
        <directionalLight position={[4, 6, 5]} intensity={1.3} />
        <directionalLight position={[-6, -3, -4]} intensity={0.5} color="#8C857B" />
        <pointLight position={[0, 1, 3]} intensity={0.6} color="#F4F1EA" />
        <Drape />
      </Suspense>
    </Canvas>
  );
}
