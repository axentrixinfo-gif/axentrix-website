"use client";

import React from "react";
import { motion } from "framer-motion";

const MeshBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40">
            <motion.div
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, -50, 100, 0],
                    scale: [1, 1.2, 0.8, 1],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-pink/10 rounded-full blur-[120px]"
            />
            <motion.div
                animate={{
                    x: [0, -120, 80, 0],
                    y: [0, 80, -120, 0],
                    scale: [1, 0.8, 1.2, 1],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[-15%] right-[-10%] w-[70%] h-[70%] bg-navy/10 rounded-full blur-[140px]"
            />
            <motion.div
                animate={{
                    x: [0, 50, -100, 0],
                    y: [0, 100, -50, 0],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute top-[30%] left-[40%] w-[40%] h-[40%] bg-pink/5 rounded-full blur-[100px]"
            />
        </div>
    );
};

export default MeshBackground;
