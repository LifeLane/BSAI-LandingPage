
"use client";

import type React from 'react';
import { useEffect, useRef } from 'react';
import { useTheme } from '@/components/ThemeProvider'; // Ensure useTheme is imported

// THREE will be available globally from the CDN script in layout.tsx

const HeroParticleAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme(); // Get current theme

  useEffect(() => {
    // Ensure THREE is loaded
    if (typeof THREE === 'undefined') {
      console.error('Three.js has not been loaded. Ensure the CDN script is in layout.tsx.');
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    // 1. Scene Setup
    const scene = new THREE.Scene();

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true, // Make background transparent
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 4. Particle Geometry and Material
    const particlesGeometry = new THREE.BufferGeometry();
    const count = 5000; // Number of particles

    const positions = new Float32Array(count * 3);
    const particleColorsArray = new Float32Array(count * 3); // Renamed to avoid conflict

    const colorLight = new THREE.Color(0x6F42C1); // Quantum Lilac for light mode
    const colorDarkYellow = new THREE.Color(0xFFFF00); // Bright Yellow for dark mode
    const colorDarkGreen = new THREE.Color(0x00FF00); // Bright Green for dark mode

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 10;
      positions[i3 + 1] = (Math.random() - 0.5) * 10;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;

      if (theme === 'dark') {
        if (i % 2 === 0) { // Alternate between yellow and green for dark mode
          particleColorsArray[i3] = colorDarkYellow.r;
          particleColorsArray[i3 + 1] = colorDarkYellow.g;
          particleColorsArray[i3 + 2] = colorDarkYellow.b;
        } else {
          particleColorsArray[i3] = colorDarkGreen.r;
          particleColorsArray[i3 + 1] = colorDarkGreen.g;
          particleColorsArray[i3 + 2] = colorDarkGreen.b;
        }
      } else { // Light mode
        particleColorsArray[i3] = colorLight.r;
        particleColorsArray[i3 + 1] = colorLight.g;
        particleColorsArray[i3 + 2] = colorLight.b;
      }
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(particleColorsArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      sizeAttenuation: true,
      vertexColors: true, // Enable vertex colors - this is key
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // 5. Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    // Renamed to avoid conflict if another onDocumentMouseMove exists in global scope
    const onMouseMoveParticles = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX);
      mouseY = (event.clientY - windowHalfY);
    };
    document.addEventListener('mousemove', onMouseMoveParticles);

    // 6. Animation Loop
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const tick = () => {
      targetX = mouseX * 0.001;
      targetY = mouseY * 0.001;

      const elapsedTime = clock.getElapsedTime();
      particles.rotation.y = .5 * elapsedTime;
      particles.rotation.y += .05 * (targetX - particles.rotation.y);
      particles.rotation.x += .05 * (targetY - particles.rotation.x);

      renderer.render(scene, camera);
      animationFrameId = window.requestAnimationFrame(tick);
    };

    tick(); // Start the animation loop

    // 7. Handle Window Resizing
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
      document.removeEventListener('mousemove', onMouseMoveParticles);
      window.removeEventListener('resize', handleResize);
      
      // Dispose of Three.js objects
      if (scene) {
        if (particles && particles.parent === scene) { // Check if particles is still a child before removing
            scene.remove(particles);
        }
        scene.traverse(object => {
          if (object instanceof THREE.Points) {
            if (object.geometry) object.geometry.dispose();
            if (object.material) {
                // @ts-ignore PointsMaterial is Material
                if (Array.isArray(object.material)) object.material.forEach(m => m.dispose()); else object.material.dispose();
            }
          } else if (object instanceof THREE.Mesh) { // For any other meshes, if any
            if (object.geometry) object.geometry.dispose();
            if (object.material) {
                if (Array.isArray(object.material)) object.material.forEach(m => m.dispose()); else object.material.dispose();
            }
          }
        });
      }
      if (particlesGeometry) particlesGeometry.dispose();
      if (particlesMaterial) particlesMaterial.dispose();
      if (renderer) renderer.dispose();
    };
  }, [theme]); // Effect re-runs when theme changes

  return <canvas ref={canvasRef} className="webgl"></canvas>;
};

export default HeroParticleAnimation;
