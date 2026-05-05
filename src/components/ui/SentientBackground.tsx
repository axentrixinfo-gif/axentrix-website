"use client";

import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface SentientBackgroundProps {
    children?: React.ReactNode;
    className?: string;
    animateMesh?: boolean;
}

const SentientBackground: React.FC<SentientBackgroundProps> = ({
    children,
    className = "",
    animateMesh = true
}) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth movement for the sentient glow
    const springConfig = { damping: 25, stiffness: 150 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    const [mounted, setMounted] = React.useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 0);
        const handleMouseMove = (e: MouseEvent) => {
            // Offset by half window size to center
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            clearTimeout(timer);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [mouseX, mouseY]);

    return (
        <div className={`relative w-full overflow-hidden ${className}`}>
            {/* Sentient Mesh Base */}
            <div className={`absolute inset-0 z-0 ${animateMesh ? "bg-sentient-mesh" : "bg-slate-50"}`} />

            {/* Interactive Sentient Glow */}
            {mounted && (
                <>
                    <motion.div
                        className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-soft-light"
                        style={{
                            background: `radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(255, 30, 109, 0.1), transparent 80%)`,
                        }}
                    />

                    <motion.div
                        className="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-soft-light"
                        style={{
                            background: `radial-gradient(800px circle at ${smoothX}px ${smoothY}px, rgba(0, 237, 255, 0.08), transparent 80%)`,
                        }}
                    />
                </>
            )}

            {/* Content */}
            <div className="relative z-10 w-full">
                {children}
            </div>
        </div>
    );
};

export default SentientBackground;
