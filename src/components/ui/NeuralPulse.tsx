"use client";

import React from "react";
import { motion } from "framer-motion";

const NeuralPulse: React.FC = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-[2px] overflow-hidden z-20">
            {/* Base Line */}
            <div className="absolute inset-0 bg-navy/20" />

            {/* The Pulse Wave */}
            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-pink to-transparent opacity-80 blur-[2px]"
            />

            {/* Heartbeat Peak - SVG for precise wave */}
            <motion.div
                className="absolute top-[-4px] left-0 w-full h-4 opacity-40 pointer-events-none"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                <svg width="100" height="20" viewBox="0 0 100 20" className="text-pink">
                    <path
                        d="M0 10 L40 10 L45 0 L50 20 L55 10 L100 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                </svg>
            </motion.div>
        </div>
    );
};

export default NeuralPulse;
