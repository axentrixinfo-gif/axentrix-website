"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, Terminal, Cpu, Zap } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import NeuralTopology from "../ui/NeuralTopology";
import NeuralPulse from "../ui/NeuralPulse";
import CommandTicker from "../ui/CommandTicker";
import SentientGlint from "../ui/SentientGlint";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const shards = [
        {
            label: "SYSTEMS",
            tag: "01",
            icon: Cpu,
            links: [
                { name: 'Neural Core', path: '/services/ai-consultancy' },
                { name: 'ERP Solutions', path: '/services/erp-consultancy' },
                { name: 'Industry Solutions', path: '/services/industry-solutions' }
            ]
        },
        {
            label: "INTEL",
            tag: "02",
            icon: Terminal,
            links: [
                { name: 'About the Veterans', path: '/about' },
                { name: 'Industry Insights', path: '/insights' },
                { name: 'Contact Neural HQ', path: '/contact' }
            ]
        },
        {
            label: "UPLINK",
            tag: "03",
            icon: Globe,
            isContact: true
        }
    ];

    return (
        <footer className="relative bg-navy-dark overflow-hidden">
            {/* 1. Neural Pulse Divider */}
            <NeuralPulse />

            {/* 2. Command Ticker Header */}
            <CommandTicker />

            <div className="relative pt-32 pb-20">
                <div className="absolute inset-0 z-50 pointer-events-none">
                    <NeuralTopology />
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-32">
                        {/* Column 1: The Central Core (Logo & Tagline) */}
                        <div className="lg:col-span-4 space-y-10">
                            <div className="h-20 w-20 relative group">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                    className="absolute -inset-4 bg-pink/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                                />
                                <motion.div
                                    animate={{ rotate: [0, 90, 180, 270, 360] }}
                                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                    className="w-full h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl flex items-center justify-center relative z-10 shadow-2xl overflow-hidden"
                                >
                                    <Image
                                        src="/logo.svg"
                                        alt="Axentrix mark"
                                        width={40}
                                        height={40}
                                        className="h-10 w-auto brightness-0 invert"
                                    />
                                    <motion.div
                                        animate={{ y: ["-100%", "200%"] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-x-0 h-[2px] bg-pink/20 blur-[1px] z-20"
                                    />
                                </motion.div>
                            </div>

                            <p className="text-white/60 text-xl font-medium leading-relaxed tracking-tight max-w-sm">
                                Standardizing enterprise intelligence through
                                <span className="text-white font-black block mt-2 tracking-widest uppercase text-sm opacity-80">
                                    Autonomous Logic & ERP Mastery.
                                </span>
                            </p>

                            <div className="flex space-x-6">
                                <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">
                                    Social Links Coming Soon
                                </span>
                            </div>
                        </div>

                        {/* Column 2-4: The Data Shards (Navigation) */}
                        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                            {shards.map((shard, idx) => (
                                <SentientGlint key={idx} className="h-full">
                                    <div className="h-full p-8 rounded-[32px] bg-white/5 backdrop-blur-3xl border border-white/5 hover:border-pink/20 transition-all group relative overflow-hidden holographic-border">
                                        <div className="flex items-center justify-between mb-10">
                                            <div className="flex flex-col">
                                                <span className="text-pink font-black text-[9px] tracking-[0.4em] mb-1">[{shard.tag}]</span>
                                                <h4 className="text-white/40 font-black text-[11px] uppercase tracking-[0.3em]">{shard.label}</h4>
                                            </div>
                                            <shard.icon className="w-5 h-5 text-white/10 group-hover:text-pink/40 transition-colors" />
                                        </div>

                                        {!shard.isContact && shard.links ? (
                                            <ul className="space-y-5">
                                                {shard.links.map((link, linkIdx) => (
                                                    <li key={linkIdx}>
                                                        <Link href={link.path} className="text-white/50 hover:text-white transition-all font-bold text-lg tracking-tight flex items-center gap-2 group/link">
                                                            <div className="w-0 h-0.5 bg-pink group-hover/link:w-3 transition-all" />
                                                            {link.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <div className="space-y-6">
                                                <div className="flex items-start gap-4 group/contact">
                                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover/contact:bg-pink/20 transition-colors">
                                                        <MapPin className="w-4 h-4 text-pink" />
                                                    </div>
                                                    <span className="text-white/50 font-medium text-sm leading-relaxed">
                                                        {COMPANY_INFO.contact.address}
                                                    </span>
                                                </div>
                                                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="flex items-center gap-4 group/contact">
                                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover/contact:bg-pink/20 transition-colors">
                                                        <Mail className="w-4 h-4 text-pink" />
                                                    </div>
                                                    <span className="text-white/50 group-hover/contact:text-white font-bold text-xs lg:text-sm break-all">
                                                        {COMPANY_INFO.contact.email}
                                                    </span>
                                                </a>
                                            </div>
                                        )}

                                        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-pink/5 to-transparent rounded-tl-[64px] opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </SentientGlint>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Data Bar */}
                    <div className="pt-16 pb-20 md:pb-0 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.5em] text-white/20">
                        <div className="flex items-center gap-4">
                            <span>© {currentYear} Axentrix Inc.</span>
                            <div className="w-1 h-1 rounded-full bg-white/10" />
                            <span className="text-pink/40 animate-pulse">Neural Core V2.1</span>
                        </div>
                        <div className="flex items-center gap-8">
                            <span className="hover:text-white transition-colors cursor-crosshair">Privacy_Protocol</span>
                            <span className="hover:text-white transition-colors cursor-crosshair">Nepal_Nodes</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
