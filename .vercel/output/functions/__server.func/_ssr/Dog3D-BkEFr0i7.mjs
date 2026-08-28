import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { a as Box3, l as require_jsx_runtime, n as Canvas, o as MathUtils, r as useFrame, s as Vector3, t as useGLTF } from "../_libs/@react-three/drei+[...].mjs";
import { n as DogImg, r as cn } from "./routes-D51URccO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Dog3D-BkEFr0i7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function canWebGL() {
	try {
		const c = document.createElement("canvas");
		return Boolean(c.getContext("webgl2") || c.getContext("webgl"));
	} catch {
		return false;
	}
}
var CanvasGuard = class extends import_react.Component {
	state = { err: false };
	static getDerivedStateFromError() {
		return { err: true };
	}
	render() {
		return this.state.err ? this.props.fallback : this.props.children;
	}
};
function hideExtras(root) {
	root.traverse((o) => {
		const n = o.name.toLowerCase();
		if (n.includes("box") || n.includes("object001") || n.includes("shadow")) o.visible = false;
		if (o.isMesh) {
			const mesh = o;
			mesh.castShadow = true;
			mesh.frustumCulled = false;
			const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
			for (const m of mats) if (m) {
				m.side = 2;
				m.needsUpdate = true;
			}
		}
	});
}
function Shiba({ clip, orbit }) {
	const gltf = useGLTF("/models/shiba.glb");
	const cloned = (0, import_react.useMemo)(() => {
		const c = gltf.scene.clone(true);
		hideExtras(c);
		return c;
	}, [gltf.scene]);
	const anim = (0, import_react.useRef)(null);
	const fit = (0, import_react.useRef)(null);
	const fitted = (0, import_react.useRef)(false);
	(0, import_react.useLayoutEffect)(() => {
		if (!fit.current || fitted.current) return;
		const box = new Box3().setFromObject(fit.current);
		const size = box.getSize(new Vector3());
		const center = box.getCenter(new Vector3());
		const s = 1.28 / Math.max(size.y, 1e-4);
		fit.current.scale.setScalar(s);
		fit.current.position.set(-center.x * s, -box.min.y * s, -center.z * s);
		fitted.current = true;
	}, [cloned]);
	useFrame((st, delta) => {
		const d = Math.min(delta, .1);
		const t = st.clock.elapsedTime;
		const g = anim.current;
		if (!g) return;
		if (orbit) {
			const a = t * .28;
			st.camera.position.x = Math.sin(a) * 2.05;
			st.camera.position.z = Math.cos(a) * 2.2;
			st.camera.position.y = 1.08;
			st.camera.lookAt(0, .48, 0);
		}
		let y = 0;
		let yaw = 0;
		let roll = 0;
		let pitch = 0;
		let sx = 1;
		let sy = 1;
		const breathe = 1 + Math.sin(t * 2.2) * .02;
		if (clip === "walk") {
			const hop = Math.abs(Math.sin(t * 8.2));
			y = hop * .14;
			yaw = Math.sin(t * 4.1) * .18;
			roll = Math.sin(t * 8.2) * .1;
			sx = 1 + (1 - hop) * .1;
			sy = 1 - (1 - hop) * .1 + hop * .05;
		} else if (clip === "happy") {
			const hop = Math.abs(Math.sin(t * 11));
			y = hop * .22;
			yaw = t * 2.4;
			sx = 1 + (1 - hop) * .12;
			sy = 1 - (1 - hop) * .14 + hop * .08;
		} else if (clip === "sleep") {
			y = .08 + Math.sin(t * 1.3) * .012;
			roll = 1.15;
			pitch = .12;
			yaw = .35;
			sy = .86 + Math.sin(t * 1.3) * .02;
			sx = 1.12;
		} else {
			y = Math.sin(t * 2.1) * .03;
			yaw = orbit ? Math.sin(t * .7) * .12 : Math.sin(t * .65) * .48;
			pitch = Math.sin(t * 1.4) * .04;
		}
		g.position.y = MathUtils.damp(g.position.y, y, 8, d);
		g.rotation.y = clip === "happy" ? yaw : MathUtils.damp(g.rotation.y, yaw, 6, d);
		g.rotation.z = MathUtils.damp(g.rotation.z, roll, 7, d);
		g.rotation.x = MathUtils.damp(g.rotation.x, pitch, 7, d);
		g.scale.set(sx * breathe, sy * breathe, sx * breathe);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
		ref: anim,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
			ref: fit,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("primitive", { object: cloned })
		})
	});
}
function Ground() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		"rotation-x": -Math.PI / 2,
		position: [
			0,
			0,
			0
		],
		receiveShadow: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circleGeometry", { args: [.9, 40] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
			color: "#2a2014",
			roughness: .92,
			metalness: .05
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		"rotation-x": -Math.PI / 2,
		position: [
			0,
			.01,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ringGeometry", { args: [
			.7,
			.82,
			40
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
			color: "#c9a24a",
			emissive: "#c9a24a",
			emissiveIntensity: .32,
			roughness: .45,
			metalness: .35
		})]
	})] });
}
function Dog3D({ who = "punia", clip = "idle", orbit = false, ground = true, className }) {
	const [gl, setGl] = (0, import_react.useState)(false);
	const [ready, setReady] = (0, import_react.useState)(false);
	const fallback = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DogImg, {
		who,
		size: 140,
		className: cn("sprite-bob mx-auto", className)
	});
	(0, import_react.useEffect)(() => {
		setGl(canWebGL());
	}, []);
	if (!gl) return fallback;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CanvasGuard, {
		fallback,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("relative h-full w-full", className),
			children: [!ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 grid place-items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DogImg, {
					who,
					size: 96,
					className: "sprite-bob opacity-80"
				})
			}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
				dpr: [1, 1.5],
				camera: {
					position: [
						1.55,
						1.1,
						2.15
					],
					fov: 34,
					near: .05,
					far: 20
				},
				gl: {
					antialias: true,
					alpha: true,
					powerPreference: "high-performance"
				},
				onCreated: ({ scene, gl: renderer }) => {
					scene.background = null;
					renderer.setClearColor(0, 0);
					renderer.toneMapping = 4;
					setReady(true);
				},
				style: {
					background: "transparent",
					pointerEvents: "none",
					touchAction: "none"
				},
				className: "absolute inset-0 h-full w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: .72 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hemisphereLight", { args: [
						"#fff1d0",
						"#3a2a18",
						.85
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
						position: [
							2.2,
							4.2,
							2.8
						],
						intensity: 1.55,
						color: "#fff4dc"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
						position: [
							-1.4,
							1.6,
							1.2
						],
						intensity: .55,
						color: "#e8c36a"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
						fallback: null,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shiba, {
							clip,
							orbit
						})
					}),
					ground ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ground, {}) : null
				]
			})]
		})
	});
}
//#endregion
export { Dog3D };
