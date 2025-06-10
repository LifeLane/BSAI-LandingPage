
"use client";

import type React from 'react';
import { useEffect, useRef } from 'react';

// THREE will be available globally from the CDN script in layout.tsx

const HeroParticleAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      sizeAttenuation: true,
      color: 0x6F42C1, // Quantum Lilac
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

    function onDocumentMouseMove(event: MouseEvent) {
      mouseX = (event.clientX - windowHalfX);
      mouseY = (event.clientY - windowHalfY);
    }
    document.addEventListener('mousemove', onDocumentMouseMove);

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
      window.cancelAnimationFrame(animationFrameId);
      document.removeEventListener('mousemove', onDocumentMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      scene.remove(particles);
      // Traverse the scene to dispose of any other objects if necessary
      scene.traverse(object => {
        if (object instanceof THREE.Mesh) {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        }
      });
    };
  }, []); // Empty dependency array ensures this runs once on mount and cleans up on unmount

  return <canvas ref={canvasRef} className="webgl"></canvas>;
};

export default HeroParticleAnimation;
