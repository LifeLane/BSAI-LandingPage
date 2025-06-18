
"use client";

import type React from 'react';
import { useEffect, useRef, useState } from 'react'; 
import { useTheme } from '@/components/ThemeProvider'; 

// THREE will be available globally from the CDN script in layout.tsx
declare const THREE: any; // Keep THREE declared

const HeroParticleAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const [threeReady, setThreeReady] = useState(false);

  useEffect(() => {
    if (typeof THREE !== 'undefined') {
      setThreeReady(true);
    } else {
      const timeoutId = setTimeout(() => {
        if (typeof THREE !== 'undefined') {
          setThreeReady(true);
        } else {
          console.error('Three.js still not loaded after delay.');
        }
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, []);

  useEffect(() => {
    if (!threeReady) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    // Ensure canvas has dimensions before proceeding
    if (canvas.clientWidth === 0 || canvas.clientHeight === 0) {
        // console.warn("Canvas has zero dimensions, skipping Three.js initialization for this instance.");
        // Optionally, try to resize or wait here, but for now, we'll just skip.
        // A common pattern is to set a default size or wait for layout.
        // For now, if it's 0x0, we just don't initialize.
        return;
    }


    let animationFrameId: number;
    let scene: any, camera: any, renderer: any, particles: any, particlesGeometry: any, particlesMaterial: any;
    let mouseX = 0;
    let mouseY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const onMouseMoveParticles = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX);
      mouseY = (event.clientY - windowHalfY);
    };

    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      }
    };

    try {
      // 1. Scene Setup
      scene = new THREE.Scene();

      // 2. Camera Setup
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      // 3. Renderer Setup
      renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // 4. Particle Geometry and Material
      particlesGeometry = new THREE.BufferGeometry();
      const count = 2500;

      const positions = new Float32Array(count * 3);
      const particleColorsArray = new Float32Array(count * 3);

      const colorDarkCyan = new THREE.Color(0x00FFFF); // Primary
      const colorDarkMagenta = new THREE.Color(0xFF00FF); // Accent
      const colorLightPrimary = new THREE.Color(0x6F42C1); // Original Light theme primary

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * 8;
        positions[i3 + 1] = (Math.random() - 0.5) * 8;
        positions[i3 + 2] = (Math.random() - 0.5) * 8;

        if (theme === 'dark') {
          if (i % 2 === 0) {
            particleColorsArray[i3] = colorDarkCyan.r;
            particleColorsArray[i3 + 1] = colorDarkCyan.g;
            particleColorsArray[i3 + 2] = colorDarkCyan.b;
          } else {
            particleColorsArray[i3] = colorDarkMagenta.r;
            particleColorsArray[i3 + 1] = colorDarkMagenta.g;
            particleColorsArray[i3 + 2] = colorDarkMagenta.b;
          }
        } else {
          particleColorsArray[i3] = colorLightPrimary.r;
          particleColorsArray[i3 + 1] = colorLightPrimary.g;
          particleColorsArray[i3 + 2] = colorLightPrimary.b;
        }
      }
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particlesGeometry.setAttribute('color', new THREE.BufferAttribute(particleColorsArray, 3));

      particlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        sizeAttenuation: true,
        vertexColors: true,
      });

      particles = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particles);

      // 5. Mouse Interaction
      document.addEventListener('mousemove', onMouseMoveParticles);

      // 6. Animation Loop
      const clock = new THREE.Clock();
      let targetX = 0;
      let targetY = 0;

      const tick = () => {
        targetX = mouseX * 0.001;
        targetY = mouseY * 0.001;

        const elapsedTime = clock.getElapsedTime();
        if (particles) {
            particles.rotation.y = .5 * elapsedTime;
            particles.rotation.y += .05 * (targetX - particles.rotation.y);
            particles.rotation.x += .05 * (targetY - particles.rotation.x);
        }
        if (renderer) renderer.render(scene, camera);
        animationFrameId = window.requestAnimationFrame(tick);
      };

      tick();

      // 7. Handle Window Resizing
      window.addEventListener('resize', handleResize);

    } catch (error) {
      console.error("Error setting up Three.js animation:", error);
      // If setup fails, ensure any partial setup is cleaned up or not interacted with
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
      document.removeEventListener('mousemove', onMouseMoveParticles);
      window.removeEventListener('resize', handleResize);
      // No need to dispose Three.js objects if they might not have been initialized
      return; // Exit effect if error occurs
    }

    // Cleanup function
    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
      document.removeEventListener('mousemove', onMouseMoveParticles);
      window.removeEventListener('resize', handleResize);
      
      if (scene) {
        if (particles && particles.parent === scene) { 
            scene.remove(particles);
        }
        // Dispose geometries and materials if they exist
        if (particlesGeometry) particlesGeometry.dispose();
        if (particlesMaterial) {
          // @ts-ignore
          if (Array.isArray(particlesMaterial)) particlesMaterial.forEach(m => m.dispose()); else particlesMaterial.dispose();
        }
        // Traverse and dispose any other mesh-like objects if necessary
        scene.traverse((object: any) => {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            // @ts-ignore
            if (Array.isArray(object.material)) object.material.forEach(m => m.dispose()); else object.material.dispose();
          }
        });
      }
      if (renderer) renderer.dispose();
    };
  }, [theme, threeReady]); 

  if (!threeReady) {
    return null; 
  }

  return <canvas ref={canvasRef} className="webgl"></canvas>;
};

export default HeroParticleAnimation;
