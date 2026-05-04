"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const KathmanduSkyline: React.FC = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax transforms for depth
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -120]);

    return (
        <div ref={ref} className="relative w-full overflow-hidden pt-40 pb-10 bg-transparent">
            {/* 1. Digital Aurora Glow - Backmost layer */}
            <motion.div
                style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.4, 0]) }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-pink/5 rounded-full blur-[140px] pointer-events-none"
            />

            <div className="max-w-7xl mx-auto px-6 relative flex flex-col items-center">
                <svg
                    viewBox="0 0 1200 150"
                    fill="currentColor"
                    className="w-full h-auto text-navy relative z-10"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Background Layer 3 (Deepest) */}
                    <motion.g style={{ y: y1, opacity: 0.3 }} className="text-navy-light">
                        <path d="M0 145 L200 145 L150 100 L100 120 L50 100 Z" />
                        <path d="M1000 145 L1200 145 L1150 110 L1100 130 L1050 110 Z" />
                    </motion.g>

                    {/* Mid Layer 2 */}
                    <motion.g style={{ y: y2, opacity: 0.6 }} className="text-navy">
                        {/* Swyambhu / Boudha */}
                        <path d="M400 145 L600 145 C600 100 570 60 500 60 C430 60 400 100 400 145" />
                        <rect x="480" y="40" width="40" height="25" />
                        <path d="M500 10 L485 40 L515 40 Z" />
                    </motion.g>

                    {/* Foreground Layer 1 */}
                    <motion.g style={{ y: y3 }} className="text-navy-dark">
                        {/* Temple Pagoda Left */}
                        <path d="M50 145 L150 145 L150 120 L130 120 L130 100 L115 100 L115 85 L100 70 L85 85 L85 100 L70 100 L70 120 L50 120 Z" />
                        {/* Dharahara */}
                        <path d="M220 145 L260 145 L255 40 L245 40 L240 145 Z" />
                        {/* Pagoda Right */}
                        <path d="M950 145 L1080 145 L1080 120 L1060 120 L1060 100 L1040 100 L1040 80 L1015 60 L990 80 L990 100 L970 100 L970 120 L950 120 Z" />

                        {/* Base ground line */}
                        <rect x="0" y="145" width="1200" height="10" />
                    </motion.g>
                </svg>

                {/* Typography - K A T H M A N D U */}
                <motion.div
                    initial={{ opacity: 0, letterSpacing: "0.5em" }}
                    whileInView={{ opacity: 1, letterSpacing: "2.4em" }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-[12px] font-black text-white/10 uppercase pl-[2.4em] mt-12 relative z-20 pointer-events-none"
                >
                    Kathmandu
                </motion.div>
            </div>
        </div>
    );
};

export default KathmanduSkyline;
