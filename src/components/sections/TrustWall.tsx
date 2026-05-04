"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import {
    Brain, TrendingUp, Layers, Eye,
    ShieldCheck, Network, Search, Zap
} from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import SentientGlint from "../ui/SentientGlint";

interface ArsenalItem {
    name: string;
    icon: any;
    className?: string;
    color: string;
}

const arsenalItems: ArsenalItem[] = [
    { name: "Agentic Workflows", icon: Brain, className: "lg:col-span-2 lg:row-span-2", color: "#FF1E6D" }, // Pink
    { name: "Predictive Engines", icon: TrendingUp, color: "#00EDFF" }, // Cyan
    { name: "Neural ERP Sync", icon: Layers, color: "#A855F7" }, // Purple
    { name: "Computer Vision", icon: Eye, color: "#FF1E6D" },
    { name: "Private LLMs", icon: ShieldCheck, color: "#00EDFF" },
    { name: "Strategy Nodes", icon: Network, className: "lg:col-span-2", color: "#A855F7" },
    { name: "Cognitive Search", icon: Search, color: "#FF1E6D" },
    { name: "Autonomous Ops", icon: Zap, color: "#00EDFF" },
];

const MagneticCard: React.FC<{ item: ArsenalItem; index: number }> = ({ item, index }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Magnetic values - dampened for high-prestige feel
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { stiffness: 100, damping: 20, mass: 0.2 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    // Tilt values for 3D depth
    const rotateX = useTransform(springY, [-100, 100], [12, -12]);
    const rotateY = useTransform(springX, [-100, 100], [-12, 12]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate distance from center (magnetic pull)
        const distanceX = (e.clientX - centerX) * 0.35;
        const distanceY = (e.clientY - centerY) * 0.35;

        x.set(distanceX);
        y.set(distanceY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    };

    return (
        <SentientGlint className={item.className || ""}>
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                style={{
                    x: springX,
                    y: springY,
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d"
                }}
                className="group relative h-full min-h-[260px] rounded-[40px] bg-white/80 backdrop-blur-xl border border-white/5 shadow-sm hover:shadow-2xl hover:border-pink/10 transition-all duration-700 overflow-hidden flex flex-col items-center justify-center p-10 holographic-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.8 }}
            >
                {/* 3D Content Container */}
                <div style={{ transform: "translateZ(60px)" }} className="flex flex-col items-center w-full">
                    {/* Kinetic Icon Instrument */}
                    <div className="relative mb-8">
                        <motion.div
                            className="w-16 h-16 rounded-[24px] bg-navy text-white/40 flex items-center justify-center shadow-2xl group-hover:bg-pink group-hover:text-white transition-all duration-500 z-10 border border-white/10"
                            animate={isHovered ? { scale: 1.15, rotateZ: [0, -10, 10, 0] } : { scale: 1, rotateZ: 0 }}
                            transition={{
                                scale: { type: "spring", stiffness: 200, damping: 10 },
                                rotateZ: { duration: 0.5, ease: "easeInOut" }
                            }}
                        >
                            <item.icon className="w-8 h-8" />
                        </motion.div>

                        {/* Sentient Echo Waves */}
                        <AnimatePresence>
                            {isHovered && Array.from({ length: 2 }).map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute inset-0 rounded-[28px] border border-pink/30"
                                    initial={{ scale: 1, opacity: 0.5 }}
                                    animate={{ scale: 1.8 + i * 0.3, opacity: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.4 }}
                                />
                            ))}
                        </AnimatePresence>
                    </div>

                    <div className="text-center">
                        <motion.span
                            className="text-[14px] font-black text-navy/60 uppercase tracking-[0.4em] group-hover:text-pink transition-colors block mb-3"
                            animate={isHovered ? { letterSpacing: "0.5em" } : { letterSpacing: "0.4em" }}
                        >
                            {item.name}
                        </motion.span>

                        {/* Dynamic Progress Indicator */}
                        <div className="w-12 h-[3px] bg-navy/5 mx-auto rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-pink"
                                initial={{ width: 0 }}
                                animate={{ width: isHovered ? "100%" : "0%" }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                    </div>
                </div>

                {/* Sentient Mesh Background Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_50%,rgba(255,30,109,0.05),transparent_70%)]" />

                {/* Subtle light glint that follows mouse */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink/10 to-transparent rounded-bl-full translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000" />
            </motion.div>
        </SentientGlint>
    );
};

const TrustWall: React.FC = () => {
    return (
        <section className="py-12 md:py-20 bg-white relative overflow-hidden">
            {/* Atmospheric Depth */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_50%_0%,rgba(255,30,109,0.03),transparent_70%)]" />
            </div>

            <Container className="relative z-10">
                <SectionHeading
                    label="Core Intelligence"
                    title="Core Logic Mastery"
                    splitTitle
                    description="The Axentrix Ecosystem: Proprietary instruments engineered for high-prestige transformation."
                    centered
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-24">
                    {arsenalItems.map((item, i) => (
                        <MagneticCard key={item.name} item={item} index={i} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default TrustWall;
