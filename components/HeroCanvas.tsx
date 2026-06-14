"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";

/** React to the user's reduced-motion preference. */
function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

/**
 * A length of fabric: a subdivided plane rippled on the GPU (drei's distort
 * material) so it undulates like draped satin. The whole sheet eases toward
 * the cursor — tilting and drifting subtly to follow the pointer.
 */
function Cloth({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    const g = group.current;
    if (!g) return;
    const px = state.pointer.x;
    const py = state.pointer.y;
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, px * 0.5, 0.05);
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, -0.1 - py * 0.32, 0.05);
    g.position.x = THREE.MathUtils.lerp(g.position.x, px * 0.6, 0.05);
    g.position.y = THREE.MathUtils.lerp(g.position.y, py * 0.4, 0.05);
  });

  return (
    <group ref={group} rotation={[-0.1, 0, 0.05]}>
      <Float
        speed={reduced ? 0 : 1.2}
        rotationIntensity={reduced ? 0 : 0.18}
        floatIntensity={reduced ? 0 : 0.6}
      >
        <mesh scale={[1.9, 2.5, 1]}>
          <planeGeometry args={[3, 3, 48, 48]} />
          <MeshDistortMaterial
            color="#A89F92"
            roughness={0.72}
            metalness={0.12}
            distort={0.5}
            speed={reduced ? 0 : 1.6}
            side={THREE.DoubleSide}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroCanvas() {
  const reduced = useReducedMotion();
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 7], fov: 34 }}
      dpr={[1, 1.25]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        {/* Raking key light skims across the folds so the drape reads clearly. */}
        <directionalLight position={[7, 2, 3]} intensity={2.1} color="#FBFAF6" />
        <directionalLight position={[-5, -3, 2]} intensity={0.6} color="#8C857B" />
        <pointLight position={[-2, 3, 4]} intensity={0.5} color="#F4F1EA" />
        <Cloth reduced={reduced} />
      </Suspense>
    </Canvas>
  );
}
