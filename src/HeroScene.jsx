import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

export default function HeroScene({ motion }) {
  const host = useRef(null);
  const motionRef = useRef(motion);
  const syncAnimation = useRef(null);
  useEffect(() => { motionRef.current = motion; syncAnimation.current?.(); }, [motion]);

  useEffect(() => {
    const node = host.current;
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
    } catch { return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    node.appendChild(renderer.domElement);
    node.parentElement.classList.add('scene-ready');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.z = 12.5;
    const generator = new THREE.PMREMGenerator(renderer);
    const room = new RoomEnvironment();
    const environment = generator.fromScene(room, 0.04);
    scene.environment = environment.texture;
    const sculpture = new THREE.Group();
    const geometry = new THREE.TorusKnotGeometry(2.05, 0.53, 240, 32, 2, 3);
    const material = new THREE.MeshPhysicalMaterial({ color: 0x655245, metalness: 1, roughness: 0.24, clearcoat: 0.25, clearcoatRoughness: 0.16, envMapIntensity: 1.1 });
    sculpture.add(new THREE.Mesh(geometry, material));
    sculpture.rotation.set(0.25, -0.45, -0.42);
    scene.add(sculpture);
    const key = new THREE.DirectionalLight(0xffe7d0, 1.8);
    key.position.set(-3, 5, 6);
    scene.add(key);
    const amber = new THREE.PointLight(0xff580a, 50, 20, 1);
    amber.position.set(4, -1, 3);
    scene.add(amber);
    const fill = new THREE.DirectionalLight(0xffffff, 0.6);
    fill.position.set(-4, -2, 2);
    scene.add(fill);
    let visible = true;
    let frame = 0;
    let lastTime = 0;
    let elapsed = 0;
    const pointer = { x: 0, y: 0 };
    const resize = () => {
      const { width, height } = node.getBoundingClientRect();
      if (!width || !height) return;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.render(scene, camera);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(node);
    const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; syncAnimation.current?.(); });
    intersection.observe(node);
    const onMove = event => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 0.2;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 0.15;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    const animate = time => {
      frame = 0;
      if (!visible || document.hidden || !motionRef.current) return;
      const delta = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;
      elapsed += delta;
      sculpture.rotation.y = -0.45 + elapsed * 0.09 + pointer.x;
      sculpture.rotation.x = 0.25 + Math.sin(elapsed * 0.3) * 0.07 + pointer.y;
      sculpture.position.y = Math.sin(elapsed * 0.5) * 0.09;
      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };
    const sync = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      if (visible && !document.hidden && motionRef.current) {
        lastTime = performance.now();
        frame = requestAnimationFrame(animate);
      }
    };
    syncAnimation.current = sync;
    document.addEventListener('visibilitychange', sync);
    resize();
    sync();
    return () => {
      cancelAnimationFrame(frame);
      syncAnimation.current = null;
      document.removeEventListener('visibilitychange', sync);
      observer.disconnect(); intersection.disconnect();
      window.removeEventListener('pointermove', onMove);
      geometry.dispose(); material.dispose(); environment.dispose(); room.dispose(); generator.dispose(); renderer.dispose();
      node.replaceChildren();
      node.parentElement?.classList.remove('scene-ready');
    };
  }, []);
  return <div className="webgl-scene" ref={host} aria-hidden="true" />;
}
