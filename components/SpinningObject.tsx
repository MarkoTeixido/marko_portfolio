"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useTheme } from "@/context/ThemeContext";

function SpinningShape({ isDark }: { isDark: boolean }) {

    const starRef = useRef<THREE.Mesh>(null);
    const ring1Ref = useRef<THREE.Mesh>(null);
    const ring2Ref = useRef<THREE.Mesh>(null);
    const particlesRef = useRef<THREE.Points>(null);

    useFrame((state, delta) => {

        if (starRef.current) {
            starRef.current.rotation.z += delta * 0.4;
        }
        if (ring1Ref.current) {
            ring1Ref.current.rotation.z += delta * 0.5;
        }
        if (ring2Ref.current) {
            ring2Ref.current.rotation.z -= delta * 0.4;
        }
        if (particlesRef.current) {
            particlesRef.current.rotation.y += delta * 0.1;
        }
    });

    // Create 4-pointed star shape (Gemini style)
    const createStarShape = () => {
        const shape = new THREE.Shape();
        const outerRadius = 0.8;
        const innerRadius = 0.3;
        const points = 4;

        for (let i = 0; i < points * 2; i++) {
            const radius = i % 2 === 0 ? outerRadius : innerRadius;
            const angle = (i * Math.PI) / points;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            if (i === 0) {
                shape.moveTo(x, y);
            } else {
                shape.lineTo(x, y);
            }
        }
        shape.closePath();
        return shape;
    };

    const starShape = createStarShape();
    const extrudeSettings = {
        depth: 0.2,
        bevelEnabled: true,
        bevelThickness: 0.05,
        bevelSize: 0.05,
        bevelSegments: 3
    };

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 50;

    const positions = useMemo(() => {
        const pos = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount * 3; i++) {
            // Deterministic random-like values using Math.sin to avoid sync/hydration mismatches
            // scaling by a large prime-ish number gives a pseudo-random look
            pos[i] = (Math.sin(i * 123.456) - 0.5) * 4;
        }
        return pos;
    }, []);

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));


    return (
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4} floatingRange={[-0.15, 0.15]}>
            {/* 4-pointed Star - Gemini style */}
            <mesh ref={starRef}>
                <extrudeGeometry args={[starShape, extrudeSettings]} />
                <meshStandardMaterial
                    color={isDark ? "#E3FE4D" : "#1e3a8a"} // Dark: Neon Lime | Light: Navy Blue
                    emissive={isDark ? "#E3FE4D" : "#1e3a8a"}
                    emissiveIntensity={isDark ? 0.4 : 0.2}
                    roughness={isDark ? 0.4 : 0.4}
                    metalness={0.0}
                />
            </mesh>

            {/* Orbital Ring 1 */}
            <mesh ref={ring1Ref} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[1.7, 0.05, 16, 100]} />
                <meshStandardMaterial
                    color={isDark ? "#E3FE4D" : "#1e3a8a"} // Dark: Neon Lime | Light: Navy Blue
                    transparent
                    opacity={isDark ? 0.4 : 0.8}
                    roughness={0.2}
                    metalness={0.8}
                />
            </mesh>

            {/* Orbital Ring 2 */}
            <mesh ref={ring2Ref} rotation={[Math.PI / 2, 0, Math.PI / 4]}>
                <torusGeometry args={[2.0, 0.04, 16, 100]} />
                <meshStandardMaterial
                    color={isDark ? "#E3FE4D" : "#172554"} // Dark: Neon Lime | Light: Darker Navy
                    transparent
                    opacity={isDark ? 0.3 : 0.7}
                    roughness={0.2}
                    metalness={0.8}
                />
            </mesh>

            {/* Floating particles */}
            <points ref={particlesRef} geometry={particlesGeometry}>
                <pointsMaterial
                    size={isDark ? 0.03 : 0.05}
                    color={isDark ? "#E3FE4D" : "#172554"} // Dark: Neon Lime | Light: Darker Navy
                    transparent
                    opacity={isDark ? 0.6 : 0.8}
                    sizeAttenuation
                />
            </points>
        </Float>
    );
}

export default function SpinningObject() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-25px] w-[150px] h-[150px] md:w-[200px] md:h-[200px] z-10 cursor-grab active:cursor-grabbing">
            <Canvas gl={{ alpha: true, antialias: true }} dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 6]} />
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={4}
                    enableDamping
                    dampingFactor={0.05}
                />
                <ambientLight intensity={0.8} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} color={isDark ? "#60a5fa" : "#2563eb"} />
                <pointLight position={[-5, 5, 5]} intensity={1.2} color={isDark ? "#3b82f6" : "#1d4ed8"} />
                <pointLight position={[5, -5, -5]} intensity={0.8} color={isDark ? "#2563eb" : "#1e40af"} />
                <SpinningShape isDark={isDark} />
                <Environment preset={isDark ? "city" : "studio"} />
            </Canvas>
        </div>
    );
}
