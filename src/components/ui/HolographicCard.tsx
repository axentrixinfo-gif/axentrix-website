"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface HolographicCardProps {
    children: React.ReactNode;
    className?: string;
    glowColor?: "pink" | "blue" | "teal";
}

const HolographicCard: React.FC<HolographicCardProps> = ({
    children,
    className,
    glowColor = "pink",
}) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const glowColors = {
        pink: "from-pink/20 to-purple-500/20",
        blue: "from-blue-500/20 to-cyan-500/20",
        teal: "from-teal/20 to-emerald-500/20",
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className={cn(
                "relative group rounded-[40px] bg-white/40 backdrop-blur-2xl border border-white/20 shadow-2xl transition-all duration-500",
                className
            )}
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="relative z-10"
            >
                {children}
            </div>

            {/* Holographic Glow Layer */}
            <motion.div
                className={cn(
                    "absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[40px] bg-gradient-to-br",
                    glowColors[glowColor]
                )}
                style={{
                    transform: "translateZ(-50px)",
                }}
            />

            {/* Sentient Mesh Trace */}
            <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-pink/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </motion.div>
    );
};

export default HolographicCard;

