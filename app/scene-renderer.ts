import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

export type SceneController = {
  setPaused: (paused: boolean) => void;
  dispose: () => void;
};

export async function createScene(
  surface: HTMLDivElement,
  onError: () => void,
): Promise<SceneController> {
  if (!("ResizeObserver" in window) || !("IntersectionObserver" in window)) {
    throw new Error("This browser cannot manage the 3D scene lifecycle.");
  }
  const mobile = window.matchMedia("(max-width: 640px)").matches;
  const canvas = document.createElement("canvas");
  let gpu: THREE.WebGLRenderer | null = null;
  try {
    const context = canvas.getContext("webgl2", {
      alpha: true,
      antialias: !mobile,
      powerPreference: "low-power",
    });
    if (context) {
      gpu = new THREE.WebGLRenderer({ canvas, context });
      gpu.setPixelRatio(
        Math.min(window.devicePixelRatio || 1, mobile ? 1.4 : 1.8),
      );
      gpu.toneMapping = THREE.ACESFilmicToneMapping;
      gpu.toneMappingExposure = 1.35;
    }
  } catch {
    gpu?.dispose();
    gpu = null;
  }
  // SVG projects the same real geometry on devices without a WebGL context.
  // Load the software renderer only when it is needed.
  const renderer =
    gpu ??
    new (await import("three/addons/renderers/SVGRenderer.js")).SVGRenderer();
  if ("setPrecision" in renderer) renderer.setPrecision(2);
  renderer.setClearColor(new THREE.Color(0x111214), 0);
  renderer.domElement.setAttribute("aria-hidden", "true");
  surface.appendChild(renderer.domElement);
  surface.dataset.renderer = gpu ? "webgl" : "svg";
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(37, 1, 0.1, 30);
  camera.position.set(0, 0, 9.8);
  let environment: THREE.WebGLRenderTarget | null = null;
  if (gpu) {
    const pmrem = new THREE.PMREMGenerator(gpu);
    const room = new RoomEnvironment();
    environment = pmrem.fromScene(room, 0.04);
    scene.environment = environment.texture;
    room.dispose();
    pmrem.dispose();
  }
  const sculpture = new THREE.Group();
  scene.add(sculpture);
  const gold = gpu
    ? new THREE.MeshPhysicalMaterial({
        color: 0xd2a153,
        metalness: 1,
        roughness: 0.23,
        clearcoat: 1,
        clearcoatRoughness: 0.22,
        envMapIntensity: 1.25,
      })
    : new THREE.MeshLambertMaterial({ color: 0xc4914f });
  const core = new THREE.Mesh(
    new THREE.TorusKnotGeometry(
      1.3,
      0.39,
      gpu ? (mobile ? 130 : 190) : mobile ? 96 : 120,
      gpu ? (mobile ? 20 : 32) : mobile ? 12 : 16,
      2,
      3,
    ),
    gold,
  );
  core.rotation.set(0.28, -0.5, -0.4);
  sculpture.add(core);
  const orbitMaterial = gpu
    ? new THREE.MeshStandardMaterial({
        color: 0x9b865f,
        metalness: 0.85,
        roughness: 0.36,
        envMapIntensity: 1.2,
      })
    : new THREE.MeshLambertMaterial({ color: 0x9b865f });
  const orbit = new THREE.Mesh(
    new THREE.TorusGeometry(2.43, gpu ? 0.016 : 0.023, gpu ? 8 : 4, 100),
    orbitMaterial,
  );
  orbit.rotation.set(1.08, 0.35, -0.4);
  sculpture.add(orbit);
  const blueMaterial = gpu
    ? new THREE.MeshPhysicalMaterial({
        color: 0x547997,
        metalness: 1,
        roughness: 0.2,
        clearcoat: 1,
        envMapIntensity: 1.5,
      })
    : new THREE.MeshLambertMaterial({ color: 0x547997 });
  const satellite = new THREE.Mesh(
    new THREE.SphereGeometry(0.17, gpu ? 24 : 12, gpu ? 16 : 8),
    blueMaterial,
  );
  satellite.position.set(2.28, -0.54, 0.62);
  sculpture.add(satellite);
  const tiny = new THREE.Mesh(
    new THREE.SphereGeometry(0.07, 12, 8),
    orbitMaterial,
  );
  tiny.position.set(-2.1, 1.37, -0.4);
  sculpture.add(tiny);
  const blueLight = gpu
    ? new THREE.PointLight(0x9acbff, 25, 12)
    : new THREE.DirectionalLight(0x9acbff, 0.35);
  blueLight.position.set(-4, 1, 2);
  scene.add(blueLight);
  const keyLight = new THREE.DirectionalLight(0xffe2aa, gpu ? 3 : 1.05);
  keyLight.position.set(4, 5, 5);
  scene.add(keyLight);
  // SVGRenderer uses the ambient color directly, without its intensity.
  if (!gpu) scene.add(new THREE.AmbientLight(0x898989));

  let disposed = false;
  let lost = false;
  let paused = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let visible = true;
  let frame = 0;
  let lastRender = 0;
  let elapsed = 0;
  let angleX = 0;
  let angleY = 0;
  let pointerId: number | null = null;
  let previousX = 0;
  let previousY = 0;
  let dirty = true;
  const interval = 1000 / (gpu ? (mobile ? 30 : 45) : mobile ? 15 : 20);

  function render(time: number) {
    frame = 0;
    if (disposed || lost || !visible || document.hidden) return;
    if (time - lastRender >= interval || dirty) {
      const delta = Math.min((time - lastRender) / 1000, 0.1);
      lastRender = time;
      if (!paused) elapsed += delta;
      sculpture.rotation.x = angleX + Math.sin(elapsed * 0.17) * 0.07;
      sculpture.rotation.y = angleY + elapsed * 0.095;
      sculpture.rotation.z = -0.08;
      sculpture.position.y = Math.sin(elapsed * 0.55) * 0.07;
      try {
        renderer.render(scene, camera);
      } catch {
        lost = true;
        onError();
        return;
      }
      dirty = false;
    }
    if (!paused) frame = requestAnimationFrame(render);
  }
  function requestRender() {
    dirty = true;
    if (!disposed && !lost && visible && !document.hidden && !frame)
      frame = requestAnimationFrame(render);
  }
  function resize() {
    const rect = surface.getBoundingClientRect();
    if (rect.width < 1 || rect.height < 1) return;
    camera.aspect = rect.width / rect.height;
    // Keep the entire sculpture in frame in tall or narrow layouts.
    camera.position.z = camera.aspect < 0.85 ? 10.5 : 9.8;
    camera.updateProjectionMatrix();
    renderer.setSize(rect.width, rect.height);
    requestRender();
  }
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(surface);
  const intersection = new IntersectionObserver((entries) => {
    visible = entries[0]?.isIntersecting ?? false;
    if (visible) requestRender();
    else {
      cancelAnimationFrame(frame);
      frame = 0;
    }
  });
  intersection.observe(surface);
  function visibility() {
    if (document.hidden) {
      cancelAnimationFrame(frame);
      frame = 0;
    } else requestRender();
  }
  function down(event: PointerEvent) {
    pointerId = event.pointerId;
    previousX = event.clientX;
    previousY = event.clientY;
    surface.setPointerCapture(event.pointerId);
  }
  function move(event: PointerEvent) {
    if (pointerId !== event.pointerId) return;
    angleY += (event.clientX - previousX) * 0.008;
    angleX += (event.clientY - previousY) * 0.005;
    previousX = event.clientX;
    previousY = event.clientY;
    requestRender();
  }
  function up() {
    pointerId = null;
  }
  function key(event: KeyboardEvent) {
    if (
      !["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)
    )
      return;
    event.preventDefault();
    if (event.key === "ArrowLeft") angleY -= 0.12;
    if (event.key === "ArrowRight") angleY += 0.12;
    if (event.key === "ArrowUp") angleX -= 0.12;
    if (event.key === "ArrowDown") angleX += 0.12;
    requestRender();
  }
  function contextLost(event: Event) {
    event.preventDefault();
    lost = true;
    cancelAnimationFrame(frame);
    frame = 0;
    onError();
  }
  document.addEventListener("visibilitychange", visibility);
  surface.addEventListener("pointerdown", down);
  surface.addEventListener("pointermove", move);
  surface.addEventListener("pointerup", up);
  surface.addEventListener("pointercancel", up);
  surface.addEventListener("lostpointercapture", up);
  surface.addEventListener("keydown", key);
  canvas.addEventListener("webglcontextlost", contextLost);
  resize();
  return {
    setPaused(value) {
      paused = value;
      if (paused) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
      requestRender();
    },
    dispose() {
      disposed = true;
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersection.disconnect();
      document.removeEventListener("visibilitychange", visibility);
      surface.removeEventListener("pointerdown", down);
      surface.removeEventListener("pointermove", move);
      surface.removeEventListener("pointerup", up);
      surface.removeEventListener("pointercancel", up);
      surface.removeEventListener("lostpointercapture", up);
      surface.removeEventListener("keydown", key);
      canvas.removeEventListener("webglcontextlost", contextLost);
      for (const mesh of [core, orbit, satellite, tiny])
        mesh.geometry.dispose();
      gold.dispose();
      orbitMaterial.dispose();
      blueMaterial.dispose();
      environment?.dispose();
      gpu?.dispose();
      renderer.domElement.remove();
      delete surface.dataset.renderer;
    },
  };
}
