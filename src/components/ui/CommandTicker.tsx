"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Activity, Shield, Wifi } from "lucide-react";

const CommandTicker: React.FC = () => {
    const [stats, setStats] = useState({
        latency: "12ms",
        uptime: "99.992%",
        temp: "14°C"
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setStats({
                latency: `${Math.floor(Math.random() * 5 + 10)}ms`,
                uptime: "99.992%",
                temp: `${Math.floor(Math.random() * 2 + 13)}°C`
            });
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const tickerItems = [
        `PROTOCOL: NEURAL_LINK_v2`,
        `LATENCY: ${stats.latency}`,
        `UPTIME: ${stats.uptime}`,
        `KTM_TEMP: ${stats.temp}`,
        `SECURITY: ZERO_TRUST_ACTIVE`,
        `MASTER_CORE: OPERATIONAL`,
        `ENCRYPTION: AES_256_QUANTUM`,
    ];

    return (
        <div className="w-full bg-white/5 backdrop-blur-md border-y border-white/5 px-6 py-2 flex items-center justify-between overflow-hidden">
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                    <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em]">System Online</span>
                </div>
                <div className="h-3 w-px bg-white/10" />
                <div className="hidden md:flex items-center gap-4">
                    <Activity className="w-3 h-3 text-pink/40" />
                    <Shield className="w-3 h-3 text-teal/40" />
                    <Wifi className="w-3 h-3 text-purple/40" />
                </div>
            </div>

            <div className="flex items-center gap-8 overflow-hidden">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="flex items-center gap-12 whitespace-nowrap"
                >
                    {[...tickerItems, ...tickerItems].map((item, i) => (
                        <span key={i} className="text-[9px] font-bold text-white/70 uppercase tracking-[0.4em] font-mono">
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>

            <div className="flex items-center gap-4 ml-6 shrink-0">
                <span className="text-[9px] font-black text-pink uppercase tracking-[0.3em]">Mastery Logic v2.1</span>
            </div>
        </div>
    );
};

export default CommandTicker;
