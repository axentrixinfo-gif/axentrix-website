"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

interface GlintProps {
    children: React.ReactNode;
    className?: string;
    glintColor?: string;
}

const SentientGlint: React.FC<GlintProps> = ({
    children,
    className = "",
    glintColor = "rgba(251, 54, 64, 0.15)" // Sentient Pink
}) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [isHovering, setIsHovering] = useState(false);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={`relative group ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300 z-30"
                style={{
                    opacity: isHovering ? 1 : 0,
                    background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              ${glintColor},
              transparent 80%
            )
          `,
                }}
            />
            {children}
        </div>
    );
};

export default SentientGlint;
