"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { SKARBNIK, useGame, type BebokId, type BuildingId } from "@/lib/beboki-store";
import { BebokModel } from "./BebokModel";

const HOME: Record<BebokId, BuildingId> = {
  hanys: "kopalnia",
  hopla: "schronisko",
  fachura: "warsztat",
  podciep: "latarnia",
};

const SPAWN: Record<BebokId, [number, number, number]> = {
  hanys: [-1.55, 0, 0.55],
  fachura: [0.12, 0, 0.72],
  podciep: [1.55, 0, 0.28],
  hopla: [2.1, 0, 1.02],
};

const G = -22;

function Hopper({ who, scale = 1.35 }: { who: BebokId; scale?: number }) {
  const ref = useRef<THREE.Group>(null);
  const openBuilding = useGame((s) => s.openBuilding);
  const { size } = useThree();
  const portrait = size.width / Math.max(1, size.height) < 0.8;
  const s = scale * (portrait ? 0.7 : 1);
  const spawn = SPAWN[who];
  const pos = useRef({ x: spawn[0], y: 0.8, z: spawn[2] });
  const vel = useRef({ x: 0, y: 0, z: 0 });
  const next = useRef(0.15 + Math.random() * 0.4);
  const squash = useRef(1);
  const yaw = useRef(0);

  useFrame((_, dt) => {
    const d = Math.min(dt, 0.08);
    const p = pos.current;
    const v = vel.current;
    v.y += G * d;
    p.x += v.x * d;
    p.y += v.y * d;
    p.z += v.z * d;
    v.x *= 0.985;
    v.z *= 0.985;
    if (p.y <= 0) {
      p.y = 0;
      if (v.y < -1.2) squash.current = 0.72;
      v.y = Math.abs(v.y) * 0.32;
      if (v.y < 1.4) v.y = 0;
    }
    squash.current += (1 - squash.current) * (1 - Math.exp(-10 * d));
    next.current -= d;
    if (next.current <= 0 && p.y <= 0.02) {
      next.current = 0.55 + Math.random() * 0.5;
      const ang = Math.random() * Math.PI * 2;
      v.y = 5.6 + Math.random() * 0.8;
      v.x = Math.cos(ang) * (1.4 + Math.random());
      v.z = Math.sin(ang) * (0.9 + Math.random() * 0.4);
      yaw.current = Math.atan2(v.x, v.z);
    }
    p.x = THREE.MathUtils.clamp(p.x, -2.55, 2.45);
    p.z = THREE.MathUtils.clamp(p.z, 0.12, 1.48);
    if (p.x <= -2.55 || p.x >= 2.45) v.x *= -0.6;
    if (p.z <= 0.12 || p.z >= 1.48) v.z *= -0.6;
    if (!ref.current) return;
    ref.current.position.set(p.x, p.y, p.z);
    ref.current.rotation.y = yaw.current;
    const sq = squash.current;
    ref.current.scale.set((s / Math.sqrt(sq)) * 1, s * sq, s / Math.sqrt(sq));
  });

  return (
    <group
      ref={ref}
      position={spawn}
      scale={s}
      onClick={(e) => {
        e.stopPropagation();
        vel.current.y = 7;
        window.setTimeout(() => openBuilding(HOME[who]), 240);
      }}
      onPointerOver={() => {
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        document.body.style.cursor = "";
      }}
    >
      <BebokModel who={who} pose="walk" squash={1} />
    </group>
  );
}

function Lump({ origin }: { origin: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null);
  const pos = useRef({ x: origin[0], y: origin[1], z: origin[2] });
  const vel = useRef({
    x: (Math.random() - 0.5) * 0.6,
    y: 2 + Math.random(),
    z: (Math.random() - 0.5) * 0.4,
  });
  const rock = useMemo(() => new THREE.MeshStandardMaterial({ color: "#1c1612", roughness: 0.92 }), []);
  useFrame((_, dt) => {
    const d = Math.min(dt, 0.08);
    const p = pos.current;
    const v = vel.current;
    v.y += G * d;
    p.x += v.x * d;
    p.y += v.y * d;
    p.z += v.z * d;
    if (p.y < 0.08) {
      p.y = 0.08;
      v.y *= -0.35;
      v.x *= 0.8;
      v.z *= 0.8;
      if (Math.abs(v.y) < 0.6) v.y = 0;
    }
    p.x = THREE.MathUtils.clamp(p.x, -2.4, 2.3);
    if (ref.current) ref.current.position.set(p.x, p.y, p.z);
  });
  return (
    <mesh ref={ref} position={origin} scale={0.15} castShadow material={rock}>
      <sphereGeometry args={[1, 8, 6]} />
    </mesh>
  );
}

function GhostSkarbnik() {
  const [on, setOn] = useState(false);
  const setToast = useGame((s) => s.setToast);
  const openBuilding = useGame((s) => s.openBuilding);
  const group = useRef<THREE.Group>(null);
  const { size } = useThree();
  const portrait = size.width / Math.max(1, size.height) < 0.8;
  const robe = useMemo(() => new THREE.MeshStandardMaterial({ color: "#3b2a1c" }), []);
  const gold = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#c9a24a", emissive: "#6b3f16", emissiveIntensity: 0.35 }),
    [],
  );
  const skin = useMemo(() => new THREE.MeshStandardMaterial({ color: "#c48a62" }), []);
  const hair = useMemo(() => new THREE.MeshStandardMaterial({ color: "#5c3a24" }), []);
  const glass = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#111111", metalness: 0.85, roughness: 0.15 }),
    [],
  );

  useEffect(() => {
    let hide = 0;
    let show = 0;
    const arm = () => {
      show = window.setTimeout(() => {
        setOn(true);
        setToast("Mgła przy siedzibie zgęstniała…");
        hide = window.setTimeout(() => {
          setOn(false);
          arm();
        }, 8000);
      }, 18000 + Math.random() * 14000);
    };
    arm();
    return () => {
      window.clearTimeout(show);
      window.clearTimeout(hide);
    };
  }, [setToast]);

  useFrame((s) => {
    if (!group.current || !on) return;
    group.current.position.y = 0.05 + Math.sin(s.clock.elapsedTime * 1.4) * 0.04;
  });

  if (!on) return null;

  return (
    <group
      ref={group}
      position={[-2.55, 0, 0.35]}
      scale={portrait ? 0.95 : 1.45}
      onClick={(e) => {
        e.stopPropagation();
        openBuilding("siedziba");
        setToast(SKARBNIK.line);
      }}
    >
      <mesh position={[0, 0.7, 0]} castShadow material={robe}>
        <cylinderGeometry args={[0.34, 0.48, 1.25, 12]} />
      </mesh>
      <mesh position={[0, 1.42, 0]} castShadow material={skin}>
        <sphereGeometry args={[0.24, 14, 14]} />
      </mesh>
      <mesh position={[0, 1.58, -0.04]} material={hair}>
        <sphereGeometry args={[0.26, 12, 12]} />
      </mesh>
      <mesh position={[0, 1.44, 0.2]} material={glass}>
        <boxGeometry args={[0.24, 0.07, 0.05]} />
      </mesh>
      <mesh position={[-0.42, 1.25, 0.08]} material={gold}>
        <sphereGeometry args={[0.12, 10, 10]} />
      </mesh>
    </group>
  );
}

function CameraRig() {
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const aspect = state.size.width / Math.max(1, state.size.height);
    const portrait = aspect < 0.8;
    const z = portrait ? 8.2 : 5.5;
    const y = portrait ? 2.55 : 1.95;
    state.camera.position.set(Math.sin(t * 0.12) * 0.16, y + Math.sin(t * 0.17) * 0.03, z);
    state.camera.lookAt(0.1, portrait ? 0.15 : 0.32, 0.1);
  });
  return null;
}

function Scene() {
  return (
    <>
      <CameraRig />
      <ambientLight intensity={0.5} color="#d7c4a0" />
      <hemisphereLight args={["#6a7a9a", "#3a2414", 0.5]} />
      <directionalLight position={[3.2, 4.5, 2.2]} intensity={1.2} color="#ffd089" />
      <pointLight position={[2.4, 2.2, 0.6]} color="#ffb24a" intensity={3.2} distance={6} />
      <pointLight position={[-2.6, 1.4, 0.4]} color="#ffcc77" intensity={1.8} distance={5} />
      <Hopper who="hanys" scale={1.42} />
      <Hopper who="fachura" scale={1.34} />
      <Hopper who="podciep" scale={1.34} />
      <Hopper who="hopla" scale={1.28} />
      <Lump origin={[-0.85, 1.2, 0.95]} />
      <Lump origin={[0.55, 1.4, 1.1]} />
      <Lump origin={[-1.85, 1.1, 0.7]} />
      <GhostSkarbnik />
    </>
  );
}

export function VillageCanvas() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 1.92, 5.35], fov: 28, near: 0.1, far: 40 }}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ scene, gl }) => {
        scene.background = null;
        gl.setClearColor(0x000000, 0);
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.05;
      }}
      style={{ background: "transparent", touchAction: "none" }}
      className="absolute inset-0 h-full w-full"
    >
      <Scene />
    </Canvas>
  );
}
