"use client";

import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import type { BebokId } from "@/lib/beboki-store";
import { BebokModel, PupModel, type BebokPose } from "./BebokModel";

export function InteriorCanvas({
  who,
  pose,
  dogs = [],
  showDogs = false,
}: {
  who: BebokId | null;
  pose: BebokPose;
  dogs?: string[];
  showDogs?: boolean;
}) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0.4, 1.15, 2.35], fov: 32, near: 0.1, far: 20 }}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ scene, gl }) => {
        scene.background = null;
        gl.setClearColor(0x000000, 0);
        gl.toneMapping = THREE.ACESFilmicToneMapping;
      }}
      style={{ background: "transparent", pointerEvents: "none" }}
      className="absolute inset-0 h-full w-full"
    >
      <ambientLight intensity={0.55} color="#e8d2a8" />
      <directionalLight position={[2, 3, 2]} intensity={1.1} color="#ffd089" />
      <pointLight position={[0, 1.4, 0.6]} color="#e8c36a" intensity={2.2} distance={5} />
      {who ? (
        <group position={[0, 0, 0]} rotation={[0, 0.35, 0]} scale={1.15}>
          <BebokModel who={who} pose={pose} />
        </group>
      ) : null}
      {showDogs
        ? dogs.slice(0, 4).map((name, i) => (
            <group key={name} position={[-0.7 + i * 0.45, 0, 0.55]} scale={0.85}>
              <PupModel color={i % 2 ? "#c9a24a" : "#8a6a48"} />
            </group>
          ))
        : null}
    </Canvas>
  );
}
