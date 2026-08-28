"use client";

import { Component, Suspense, useEffect, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { cn } from "@/lib/cn";
import { DogImg } from "./Dog";
import type { DogId } from "@/lib/beboki-store";

export type DogClip = "idle" | "walk" | "happy" | "sleep";

function canWebGL() {
  try {
    const c = document.createElement("canvas");
    return Boolean(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

class CanvasGuard extends Component<{ fallback: ReactNode; children: ReactNode }, { err: boolean }> {
  state = { err: false };
  static getDerivedStateFromError() {
    return { err: true };
  }
  render() {
    return this.state.err ? this.props.fallback : this.props.children;
  }
}

function hideExtras(root: THREE.Object3D) {
  root.traverse((o) => {
    const n = o.name.toLowerCase();
    if (n.includes("box") || n.includes("object001") || n.includes("shadow")) {
      o.visible = false;
    }
    if ((o as THREE.Mesh).isMesh) {
      const mesh = o as THREE.Mesh;
      mesh.castShadow = true;
      mesh.frustumCulled = false;
      const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      for (const m of mats) {
        if (m) {
          m.side = THREE.DoubleSide;
          m.needsUpdate = true;
        }
      }
    }
  });
}

function Shiba({ clip, orbit }: { clip: DogClip; orbit?: boolean }) {
  const gltf = useGLTF("/models/shiba.glb");
  const cloned = useMemo(() => {
    const c = gltf.scene.clone(true);
    hideExtras(c);
    return c;
  }, [gltf.scene]);

  const anim = useRef<THREE.Group>(null);
  const fit = useRef<THREE.Group>(null);
  const fitted = useRef(false);

  useLayoutEffect(() => {
    if (!fit.current || fitted.current) return;
    const box = new THREE.Box3().setFromObject(fit.current);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const s = 1.28 / Math.max(size.y, 0.0001);
    fit.current.scale.setScalar(s);
    fit.current.position.set(-center.x * s, -box.min.y * s, -center.z * s);
    fitted.current = true;
  }, [cloned]);

  useFrame((st, delta) => {
    const d = Math.min(delta, 0.1);
    const t = st.clock.elapsedTime;
    const g = anim.current;
    if (!g) return;

    if (orbit) {
      const a = t * 0.28;
      st.camera.position.x = Math.sin(a) * 2.05;
      st.camera.position.z = Math.cos(a) * 2.2;
      st.camera.position.y = 1.08;
      st.camera.lookAt(0, 0.48, 0);
    }

    let y = 0;
    let yaw = 0;
    let roll = 0;
    let pitch = 0;
    let sx = 1;
    let sy = 1;
    const breathe = 1 + Math.sin(t * 2.2) * 0.02;

    if (clip === "walk") {
      const hop = Math.abs(Math.sin(t * 8.2));
      y = hop * 0.14;
      yaw = Math.sin(t * 4.1) * 0.18;
      roll = Math.sin(t * 8.2) * 0.1;
      sx = 1 + (1 - hop) * 0.1;
      sy = 1 - (1 - hop) * 0.1 + hop * 0.05;
    } else if (clip === "happy") {
      const hop = Math.abs(Math.sin(t * 11));
      y = hop * 0.22;
      yaw = t * 2.4;
      sx = 1 + (1 - hop) * 0.12;
      sy = 1 - (1 - hop) * 0.14 + hop * 0.08;
    } else if (clip === "sleep") {
      y = 0.08 + Math.sin(t * 1.3) * 0.012;
      roll = 1.15;
      pitch = 0.12;
      yaw = 0.35;
      sy = 0.86 + Math.sin(t * 1.3) * 0.02;
      sx = 1.12;
    } else {
      y = Math.sin(t * 2.1) * 0.03;
      yaw = orbit ? Math.sin(t * 0.7) * 0.12 : Math.sin(t * 0.65) * 0.48;
      pitch = Math.sin(t * 1.4) * 0.04;
    }

    g.position.y = THREE.MathUtils.damp(g.position.y, y, 8, d);
    g.rotation.y = clip === "happy" ? yaw : THREE.MathUtils.damp(g.rotation.y, yaw, 6, d);
    g.rotation.z = THREE.MathUtils.damp(g.rotation.z, roll, 7, d);
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, pitch, 7, d);
    g.scale.set(sx * breathe, sy * breathe, sx * breathe);
  });

  return (
    <group ref={anim}>
      <group ref={fit}>
        <primitive object={cloned} />
      </group>
    </group>
  );
}

function Ground() {
  return (
    <group>
      <mesh rotation-x={-Math.PI / 2} position={[0, 0, 0]} receiveShadow>
        <circleGeometry args={[0.9, 40]} />
        <meshStandardMaterial color="#2a2014" roughness={0.92} metalness={0.05} />
      </mesh>
      <mesh rotation-x={-Math.PI / 2} position={[0, 0.01, 0]}>
        <ringGeometry args={[0.7, 0.82, 40]} />
        <meshStandardMaterial
          color="#c9a24a"
          emissive="#c9a24a"
          emissiveIntensity={0.32}
          roughness={0.45}
          metalness={0.35}
        />
      </mesh>
    </group>
  );
}

export function Dog3D({
  who = "punia",
  clip = "idle",
  orbit = false,
  ground = true,
  className,
}: {
  who?: DogId;
  clip?: DogClip;
  orbit?: boolean;
  ground?: boolean;
  className?: string;
}) {
  const [gl, setGl] = useState(false);
  const [ready, setReady] = useState(false);
  const fallback = <DogImg who={who} size={140} className={cn("sprite-bob mx-auto", className)} />;

  useEffect(() => {
    setGl(canWebGL());
  }, []);

  if (!gl) return fallback;

  return (
    <CanvasGuard fallback={fallback}>
      <div className={cn("relative h-full w-full", className)}>
        {!ready ? (
          <div className="absolute inset-0 grid place-items-center">
            <DogImg who={who} size={96} className="sprite-bob opacity-80" />
          </div>
        ) : null}
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [1.55, 1.1, 2.15], fov: 34, near: 0.05, far: 20 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          onCreated={({ scene, gl: renderer }) => {
            scene.background = null;
            renderer.setClearColor(0x000000, 0);
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            setReady(true);
          }}
          style={{ background: "transparent", pointerEvents: "none", touchAction: "none" }}
          className="absolute inset-0 h-full w-full"
        >
          <ambientLight intensity={0.72} />
          <hemisphereLight args={["#fff1d0", "#3a2a18", 0.85]} />
          <directionalLight position={[2.2, 4.2, 2.8]} intensity={1.55} color="#fff4dc" />
          <pointLight position={[-1.4, 1.6, 1.2]} intensity={0.55} color="#e8c36a" />
          <Suspense fallback={null}>
            <Shiba clip={clip} orbit={orbit} />
          </Suspense>
          {ground ? <Ground /> : null}
        </Canvas>
      </div>
    </CanvasGuard>
  );
}
