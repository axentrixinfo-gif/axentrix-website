"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight, Sparkles, Zap, Users, Award
} from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import GradientText from "../ui/GradientText";

const HeroSection: React.FC = () => {
    const containerVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-32 lg:pb-32 min-h-[85vh] flex items-center bg-white">
            {/* Background Mesh Gradients */}
            <div className="absolute top-0 right-0 -z-10 w-full h-full bg-[radial-gradient(circle_at_75%_25%,rgba(255,30,109,0.03),transparent_60%)]" />
            <div className="absolute inset-0 -z-20 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-pink/15 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-teal/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <Container>
                <motion.div
                    className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Left Column: Narrative */}
                    <div className="space-y-10">
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center space-x-3 bg-white px-6 py-2.5 rounded-full shadow-sm border border-gray-100"
                        >
                            <div className="w-2.5 h-2.5 rounded-full bg-pink animate-pulse" />
                            <span className="text-[10px] font-black text-navy uppercase tracking-[0.3em]">Experienced Startup Agency</span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-navy leading-[0.9] tracking-tighter"
                        >
                            Startup Speed. <br />
                            Deep <GradientText>Mastery.</GradientText>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium max-w-2xl"
                        >
                            A powerhouse startup team with over <strong>15+ years of deep industry mastery</strong> per individual. We bridge the gap between traditional enterprise logic and futuristic AI agility for businesses across Nepal.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-row items-center gap-3 md:gap-5 pt-4"
                        >
                            <Link href="/contact" className="w-1/2 sm:w-auto">
                                <Button variant="primary" size="lg" className="h-16 md:h-20 w-full sm:w-[280px] bg-navy text-white px-4 md:px-8 rounded-2xl font-black uppercase tracking-widest shadow-2xl shadow-navy/20 flex items-center justify-center group transition-all duration-300 text-[10px] md:text-base">
                                    Scale Now
                                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
                                </Button>
                            </Link>
                            <Link href="/services" className="w-1/2 sm:w-auto">
                                <Button variant="secondary" size="lg" className="h-16 md:h-20 w-full sm:w-[280px] border-2 border-gray-100 hover:border-pink/40 text-navy px-4 md:px-8 rounded-2xl font-black uppercase tracking-widest bg-white flex items-center justify-center transition-all duration-300 text-[10px] md:text-base">
                                    Solutions
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Column: Stats Focus */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col space-y-8"
                    >
                        {[
                            {
                                icon: Award,
                                value: "15+",
                                label: "Avg. Team Experience",
                                gradient: "from-purple-600 to-pink",
                                delay: 0
                            },
                            {
                                icon: Zap,
                                value: "500+",
                                label: "Systems Deployed",
                                gradient: "from-pink to-orange-400",
                                delay: 0.1
                            },
                            {
                                icon: Users,
                                value: "98%",
                                label: "Success Rate",
                                gradient: "from-teal to-blue-600",
                                delay: 0.2
                            }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                className="group relative bg-white/80 backdrop-blur-2xl p-8 md:p-10 rounded-[40px] shadow-[0_40px_80px_rgba(0,0,0,0.03)] border border-white flex items-center space-x-10 hover:shadow-2xl transition-all duration-500 overflow-hidden holographic-border"
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                    type: "tween",
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: stat.delay
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                                <div className={`absolute -right-4 -bottom-4 w-32 h-32 bg-gradient-to-br ${stat.gradient} opacity-[0.03] rounded-full blur-2xl group-hover:opacity-[0.08] transition-opacity`} />
                                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform flex-shrink-0`}>
                                    <stat.icon className="w-9 h-9 text-white" />
                                </div>
                                <div className="relative z-10">
                                    <div className="text-4xl md:text-5xl font-black text-navy leading-none mb-2 tracking-tighter">{stat.value}</div>
                                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{stat.label}</div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden xl:flex flex-col items-center"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ type: "tween", duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="w-[2px] h-20 bg-gradient-to-b from-navy/5 via-navy/20 to-transparent" />
                </motion.div>
            </Container>
        </section>
    );
};

export default HeroSection;
