"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { BebokId } from "@/lib/beboki-store";

export type BebokPose = "idle" | "walk" | "dig" | "craft" | "shine" | "pet";

const LOOK: Record<
  BebokId,
  { clay: string; ear: string; accent: string; hat: "helm" | "beanie" | "bow" | "none" }
> = {
  hanys: { clay: "#6a8c38", ear: "#3f5c22", accent: "#d4a84a", hat: "helm" },
  hopla: { clay: "#e3b7a6", ear: "#c45a8c", accent: "#e07ab0", hat: "bow" },
  fachura: { clay: "#3ea0a6", ear: "#2a6c74", accent: "#8fd4dc", hat: "beanie" },
  podciep: { clay: "#7b5aa8", ear: "#4e3478", accent: "#e8c36a", hat: "none" },
};

function clayMat(color: string, extra?: THREE.MeshPhysicalMaterialParameters) {
  return new THREE.MeshPhysicalMaterial({
    color,
    roughness: 0.38,
    metalness: 0.04,
    clearcoat: 0.55,
    clearcoatRoughness: 0.35,
    ...extra,
  });
}

export function BebokModel({
  who,
  pose = "idle",
  squash = 1,
}: {
  who: BebokId;
  pose?: BebokPose;
  squash?: number;
}) {
  const look = LOOK[who];
  const bodyM = useMemo(() => clayMat(look.clay), [look.clay]);
  const earM = useMemo(() => clayMat(look.ear), [look.ear]);
  const accM = useMemo(
    () =>
      clayMat(look.accent, {
        emissive: who === "podciep" || look.hat === "helm" ? look.accent : "#000000",
        emissiveIntensity: who === "podciep" || look.hat === "helm" ? 0.45 : 0,
        metalness: look.hat === "helm" ? 0.45 : 0.08,
      }),
    [look.accent, look.hat, who],
  );
  const darkM = useMemo(() => clayMat("#2a1c12", { roughness: 0.6 }), []);
  const whiteM = useMemo(() => clayMat("#f4efe6", { roughness: 0.25, clearcoat: 0.8 }), []);
  const pupilM = useMemo(() => clayMat("#1a140e", { roughness: 0.4 }), []);
  const woodM = useMemo(() => clayMat("#6a4428", { roughness: 0.7 }), []);
  const beanieM = useMemo(() => clayMat("#2f7a84"), []);
  const bowM = useMemo(() => clayMat("#d45a90"), []);

  const root = useRef<THREE.Group>(null);
  const pick = useRef<THREE.Group>(null);
  const lamp = useRef<THREE.Group>(null);

  useFrame((s) => {
    const t = s.clock.elapsedTime;
    const busy = pose === "dig" || pose === "craft" || pose === "shine" || pose === "pet";
    const hop = pose === "walk";
    if (root.current) {
      const bob = hop ? Math.abs(Math.sin(t * 9)) * 0.04 : Math.sin(t * 2.2) * 0.02;
      root.current.position.y = bob;
      const sq = hop ? 1 + Math.sin(t * 9) * 0.06 : squash;
      root.current.scale.set(1 / Math.sqrt(sq), sq, 1 / Math.sqrt(sq));
      if (pose === "pet") root.current.rotation.x = Math.sin(t * 3) * 0.12 - 0.08;
      else root.current.rotation.x = 0;
    }
    if (pick.current) {
      const swing = pose === "dig" || pose === "craft" ? Math.sin(t * 8) * 0.7 : Math.sin(t * 1.4) * 0.08;
      pick.current.rotation.z = -0.4 + swing;
      pick.current.rotation.x = pose === "dig" ? 0.5 + Math.sin(t * 8) * 0.25 : 0.2;
    }
    if (lamp.current) {
      lamp.current.position.y = 0.22 + Math.sin(t * (pose === "shine" ? 6 : 2)) * 0.04;
    }
  });

  return (
    <group>
      <group ref={root}>
        <mesh position={[0, 0.36, 0]} castShadow material={bodyM}>
          <sphereGeometry args={[0.36, 22, 18]} />
        </mesh>
        <mesh position={[0, 0.5, 0.02]} scale={[0.92, 0.72, 0.88]} castShadow material={bodyM}>
          <sphereGeometry args={[0.28, 18, 16]} />
        </mesh>

        {[-1, 1].map((side) => (
          <mesh
            key={side}
            position={[0.28 * side, 0.58, 0]}
            rotation={[0.15, 0, -1.05 * side]}
            material={earM}
            castShadow
          >
            <coneGeometry args={[0.09, 0.28, 10]} />
          </mesh>
        ))}

        {[-1, 1].map((side) => (
          <group key={`eye-${side}`} position={[0.1 * side, 0.42, 0.28]}>
            <mesh material={whiteM}>
              <sphereGeometry args={[0.075, 12, 12]} />
            </mesh>
            <mesh position={[0, -0.01, 0.045]} material={pupilM}>
              <sphereGeometry args={[0.032, 10, 10]} />
            </mesh>
          </group>
        ))}
        <mesh position={[0, 0.34, 0.34]} material={bodyM}>
          <sphereGeometry args={[0.045, 10, 10]} />
        </mesh>

        {look.hat === "helm" ? (
          <group position={[0, 0.58, 0]}>
            <mesh material={accM} castShadow>
              <sphereGeometry args={[0.26, 18, 12, 0, Math.PI * 2, 0, Math.PI / 1.7]} />
            </mesh>
            <mesh position={[0, 0.02, 0]} rotation={[Math.PI / 2, 0, 0]} material={accM}>
              <torusGeometry args={[0.255, 0.03, 8, 20]} />
            </mesh>
            <mesh position={[0, 0.08, 0.22]} material={accM}>
              <sphereGeometry args={[0.07, 12, 12]} />
            </mesh>
            <pointLight position={[0, 0.08, 0.3]} color="#ffe08a" intensity={1.6} distance={2.8} />
          </group>
        ) : null}

        {look.hat === "beanie" ? (
          <group position={[0, 0.62, 0]}>
            <mesh material={beanieM} castShadow>
              <sphereGeometry args={[0.24, 16, 12, 0, Math.PI * 2, 0, Math.PI / 1.8]} />
            </mesh>
            <mesh position={[0, 0.16, 0]} material={beanieM}>
              <sphereGeometry args={[0.06, 10, 10]} />
            </mesh>
          </group>
        ) : null}

        {look.hat === "bow" ? (
          <group position={[0, 0.22, 0.34]}>
            <mesh position={[-0.08, 0, 0]} material={bowM}>
              <sphereGeometry args={[0.07, 10, 8]} />
            </mesh>
            <mesh position={[0.08, 0, 0]} material={bowM}>
              <sphereGeometry args={[0.07, 10, 8]} />
            </mesh>
            <mesh material={bowM}>
              <sphereGeometry args={[0.04, 8, 8]} />
            </mesh>
          </group>
        ) : null}

        {who === "hopla" ? (
          <mesh position={[0, 0.74, 0]} material={earM}>
            <coneGeometry args={[0.08, 0.22, 8]} />
          </mesh>
        ) : null}

        <group ref={pick} position={[0.38, 0.28, 0.12]}>
          {who === "hanys" ? (
            <>
              <mesh rotation={[0.2, 0, -0.5]} material={woodM}>
                <cylinderGeometry args={[0.025, 0.03, 0.7, 8]} />
              </mesh>
              <mesh position={[0.22, 0.28, 0]} rotation={[0, 0, Math.PI / 2.4]} material={darkM}>
                <boxGeometry args={[0.08, 0.28, 0.06]} />
              </mesh>
            </>
          ) : null}
          {who === "fachura" ? (
            <mesh rotation={[0.3, 0.4, -0.5]} material={accM}>
              <boxGeometry args={[0.07, 0.42, 0.07]} />
            </mesh>
          ) : null}
        </group>

        {who === "podciep" ? (
          <group ref={lamp} position={[0.34, 0.22, 0.22]}>
            <mesh material={darkM}>
              <cylinderGeometry args={[0.02, 0.025, 0.28, 8]} />
            </mesh>
            <mesh position={[0, 0.2, 0]} material={accM}>
              <sphereGeometry args={[0.1, 14, 14]} />
            </mesh>
            <mesh position={[0, 0.28, 0]} material={darkM}>
              <cylinderGeometry args={[0.08, 0.09, 0.04, 10]} />
            </mesh>
            <pointLight position={[0, 0.2, 0]} color="#ffe08a" intensity={pose === "shine" ? 3.4 : 1.8} distance={3.5} />
          </group>
        ) : null}
      </group>
    </group>
  );
}

export function PupModel({ color = "#c9a24a" }: { color?: string }) {
  const fur = useMemo(() => clayMat(color, { roughness: 0.55, clearcoat: 0.2 }), [color]);
  const dark = useMemo(() => clayMat("#2a1c12"), []);
  const ref = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (ref.current) ref.current.position.y = Math.sin(s.clock.elapsedTime * 3 + color.length) * 0.03;
  });
  return (
    <group ref={ref}>
      <mesh position={[0, 0.16, 0]} castShadow material={fur}>
        <sphereGeometry args={[0.16, 12, 10]} />
      </mesh>
      <mesh position={[0, 0.22, 0.14]} material={fur}>
        <sphereGeometry args={[0.1, 10, 8]} />
      </mesh>
      {[-1, 1].map((s) => (
        <mesh key={s} position={[0.06 * s, 0.3, 0.12]} material={fur}>
          <coneGeometry args={[0.03, 0.08, 6]} />
        </mesh>
      ))}
      <mesh position={[0, 0.2, 0.22]} material={dark}>
        <sphereGeometry args={[0.02, 6, 6]} />
      </mesh>
    </group>
  );
}
