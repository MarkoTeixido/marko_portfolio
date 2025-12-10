"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function MouseFollower() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const { theme } = useTheme();

    const springConfig = { damping: 25, stiffness: 150 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX - 250); // Center the 500px orb
            mouseY.set(e.clientY - 250);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none z-0 opacity-50 blur-[100px]"
            style={{
                x,
                y,
                background: theme === "dark"
                    ? "radial-gradient(circle, rgba(227, 254, 77, 0.15) 0%, rgba(227, 254, 77, 0) 70%)"
                    : "radial-gradient(circle, rgba(28, 69, 135, 0.9) 0%, rgba(40, 90, 180, 0.7) 45%, rgba(255, 255, 255, 0) 70%)",
                mixBlendMode: theme === "dark" ? "screen" : "multiply",
            }}
        />
    );
}
