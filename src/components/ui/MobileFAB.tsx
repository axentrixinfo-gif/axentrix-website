"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Sparkles } from "lucide-react";
import { useUI } from "@/contexts/UIContext";

const MobileFAB: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const { isChatOpen } = useUI();

    useEffect(() => {
        const handleScroll = () => {
            // Show FAB after scrolling 400px
            setVisible(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {visible && !isChatOpen && (
                <motion.div
                    initial={{ y: 100, opacity: 0, scale: 0.8 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 100, opacity: 0, scale: 0.8 }}
                    className="fixed bottom-8 left-0 right-0 z-[90] lg:hidden flex justify-center px-6 pointer-events-none"
                >
                    <Link
                        href="/contact"
                        className="pointer-events-auto active:scale-95 transition-transform"
                    >
                        <div className="bg-navy text-white px-8 py-4 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 flex items-center space-x-3 backdrop-blur-xl bg-opacity-95">
                            <div className="w-8 h-8 rounded-full bg-pink flex items-center justify-center">
                                <Mail className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                                Book Consultation
                            </span>
                        </div>
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileFAB;
