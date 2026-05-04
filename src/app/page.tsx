"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Database, Brain, Factory, ShoppingCart, Briefcase, Car,
    ArrowRight, CheckCircle, Mail, Sparkles, Zap
} from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";
import InsightsSection from "@/components/sections/InsightsSection";
import TechnicalAuthorityMatrix from "@/components/sections/TechnicalAuthorityMatrix";
import SentientBackground from "@/components/ui/SentientBackground";
import SentientGlint from "@/components/ui/SentientGlint";
import HolographicCard from "@/components/ui/HolographicCard";
import { INDUSTRIES } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function HomePage() {
    return (
        <div className="overflow-x-hidden bg-white">
            {/* Hero Section */}
            <HeroSection />

            {/* Services Section - Primary Value Hub */}
            <ServicesSection />

            {/* Why Choose Us - Sentient Elevation */}
            <section className="relative overflow-hidden">
                <SentientBackground className="py-16 md:py-24" animateMesh={false}>
                    <Container className="relative z-10">
                        <div className="grid lg:grid-cols-2 gap-24 items-center">
                            <div className="space-y-12">
                                <h2 className="text-5xl md:text-8xl font-black text-navy leading-[0.85] tracking-tighter text-left">
                                    Why <br />
                                    <GradientText>Axentrix Inc?</GradientText>
                                </h2>
                                <p className="text-2xl text-gray-500 font-medium leading-relaxed max-w-xl">
                                    We aren't just developers. We are consultants who have survived 15+ years of enterprise shifting
                                    from local data silos to global autonomous agents.
                                </p>

                                <div className="space-y-10">
                                    {[
                                        { title: "Velocity First", desc: "We deploy MVPs in 4 weeks, not 12 months." },
                                        { title: "Strategic Depth", desc: "Every line of code is mapped to business ROI." }
                                    ].map((item, i) => (
                                        <SentientGlint key={i} className="rounded-[40px]">
                                            <div className="flex items-start space-x-8 p-10 rounded-[40px] bg-white/80 backdrop-blur-xl border border-white/5 shadow-sm hover:shadow-2xl hover:border-pink/10 transition-all duration-700 group relative overflow-hidden holographic-border">
                                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pink/5 to-purple/5 rounded-bl-full transform translate-x-12 -translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />

                                                <div className="w-16 h-16 rounded-[24px] bg-navy text-white flex items-center justify-center shrink-0 group-hover:bg-pink group-hover:scale-110 transition-all duration-500 shadow-xl border border-white/10 z-10">
                                                    <CheckCircle className="w-8 h-8 transition-colors" />
                                                </div>
                                                <div className="relative z-10">
                                                    <h4 className="text-2xl font-black text-navy mb-2 tracking-tight group-hover:text-pink transition-colors">{item.title}</h4>
                                                    <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                                                </div>
                                            </div>
                                        </SentientGlint>
                                    ))}
                                </div>
                            </div>

                            <div className="relative rounded-[40px] bg-white/80 backdrop-blur-xl border border-white/5 p-16 shadow-sm hover:shadow-2xl hover:border-pink/10 transition-all duration-700 group overflow-hidden holographic-border">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-pink/5 to-purple/5 rounded-bl-[100px] transform translate-x-12 -translate-y-12 group-hover:scale-110 transition-transform duration-700" />

                                <div className="relative z-10 space-y-12 text-center">
                                    <div className="inline-block px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10 mb-4">
                                        <span className="text-[10px] font-black text-navy/40 uppercase tracking-[0.4em]">
                                            Axentrix Standard
                                        </span>
                                    </div>

                                    <div className="w-24 h-24 rounded-[32px] bg-navy text-white flex items-center justify-center mx-auto mb-10 group-hover:scale-110 group-hover:bg-pink transition-all duration-700 shadow-2xl border border-white/10">
                                        <Brain className="w-12 h-12 transition-colors duration-500" />
                                    </div>

                                    <div className="space-y-4">
                                        <p className="text-5xl font-black text-navy tracking-tighter italic">"Precision at Scale."</p>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] leading-relaxed">
                                            Enterprise Optimization Logic
                                        </p>
                                    </div>
                                    <div className="pt-10 border-t border-gray-100 grid grid-cols-2 gap-10">
                                        <div>
                                            <p className="text-5xl font-black text-navy tracking-tighter">15+</p>
                                            <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.4em] mt-2">Avg Yrs Exp</p>
                                        </div>
                                        <div>
                                            <p className="text-5xl font-black text-navy tracking-tighter">500+</p>
                                            <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.4em] mt-2">Projects Delivered</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </SentientBackground>
            </section>

            {/* AI Solutions Highlight */}
            <section className="py-16 md:py-24 bg-white relative overflow-hidden">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-20 lg:gap-40 items-center">
                        <motion.div
                            className="text-center lg:text-left flex flex-col items-center lg:items-start"
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-block px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10 mb-8">
                                <span className="text-[10px] font-black text-navy/40 uppercase tracking-[0.4em]">Neural Integration Hub</span>
                            </div>

                            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-navy mb-12 leading-[0.9] tracking-tighter">
                                Enthusiastic <br />
                                <GradientText>AI Learners.</GradientText>
                            </h2>

                            <p className="text-2xl text-gray-600 mb-16 leading-relaxed font-medium max-w-2xl">
                                We provide expert AI consultancy and platform integration services.
                                Our team combines traditional business wisdom with the frontier
                                of automated cognitive workflows.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left w-full lg:w-auto">
                                {[
                                    { title: "AI Consultancy", desc: "Expert roadmap for neural transition." },
                                    { title: "Systems Integration", desc: "Fusing AI with legacy ERP cores." }
                                ].map((item, i) => (
                                    <div key={i} className="group">
                                        <div className="w-12 h-1 border-t-4 border-navy mb-6 group-hover:w-24 transition-all duration-500 group-hover:border-pink" />
                                        <h4 className="text-2xl font-black text-navy mb-4">{item.title}</h4>
                                        <p className="text-gray-500 font-medium">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="relative w-full"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                        >
                            <SentientGlint className="rounded-[40px]">
                                <div className="relative aspect-square rounded-[40px] bg-white/80 backdrop-blur-xl border border-white/5 shadow-sm hover:shadow-2xl hover:border-pink/10 transition-all duration-700 flex items-center justify-center overflow-hidden group holographic-border">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink/5 to-purple/5 rounded-bl-full transform translate-x-24 -translate-y-24 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000" />

                                    <div className="absolute inset-0 z-0">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-pink/5 rounded-full blur-[120px] animate-pulse" />
                                    </div>

                                    <div className="relative z-10 w-full h-full p-20 flex items-center justify-center">
                                        <motion.div
                                            initial={{ rotate: -180, opacity: 0 }}
                                            whileInView={{ rotate: 360, opacity: 1 }}
                                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                            className="relative w-80 h-80 border-2 border-dashed border-navy/10 rounded-full flex items-center justify-center"
                                        >
                                            <Brain className="w-24 h-24 text-navy/10" />
                                        </motion.div>
                                    </div>

                                    {[
                                        { text: "AI Consultant", pos: "top-[10%] left-[5%] md:top-[15%] md:left-[10%]", icon: Sparkles },
                                        { text: "System Expert", pos: "bottom-[15%] right-[5%] md:bottom-[20%] md:right-[10%]", icon: Database },
                                        { text: "Startup Agility", pos: "top-[40%] right-[3%] md:top-[40%] md:right-[5%]", icon: Zap }
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            className={`absolute ${item.pos} bg-white border border-gray-50 px-8 py-4 rounded-2xl shadow-sm font-black text-gray-400 text-[9px] uppercase tracking-[0.3em] flex items-center gap-3 z-20 hover:scale-110 hover:text-navy hover:border-pink/10 transition-all duration-300`}
                                            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100, y: 50, scale: 0.5 }}
                                            whileInView={{
                                                opacity: 1, x: 0, y: 0, scale: 1,
                                                transition: { delay: 0.5 + (i * 0.2), duration: 0.8, type: "spring", stiffness: 100 }
                                            }}
                                            viewport={{ once: true }}
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" } }}
                                        >
                                            <item.icon className="w-3 h-3 text-pink" />
                                            {item.text}
                                        </motion.div>
                                    ))}
                                </div>
                            </SentientGlint>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Technical Authority Matrix - New Section */}
            <TechnicalAuthorityMatrix />

            {/* Insights Section */}
            <InsightsSection />

            {/* Final CTA */}
            <section className="relative overflow-hidden border-t border-navy/5">
                <SentientBackground className="pt-24 pb-16 md:pt-32 md:pb-24" animateMesh={true}>
                    <Container className="relative z-10">
                        <motion.div
                            className="text-center max-w-5xl mx-auto"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <div className="w-28 h-28 bg-white/80 backdrop-blur-xl border border-pink/5 rounded-[40px] flex items-center justify-center mx-auto mb-14 shadow-2xl hover:scale-110 transition-all duration-700 holographic-border relative z-20">
                                <Mail className="w-14 h-14 text-navy/40" />
                            </div>

                            <h2 className="text-6xl md:text-8xl lg:text-[120px] font-black text-navy mb-12 leading-[0.85] tracking-tighter">
                                Lead the <br />
                                <span className="text-pink">Revolution.</span>
                            </h2>

                            <p className="text-2xl md:text-3xl mb-20 text-gray-500 leading-relaxed max-w-4xl mx-auto font-bold tracking-tight">
                                Axentrix is the standard for businesses that refuse to settle for mediocrity.
                                Your transformation begins now.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                                <Link href="/contact">
                                    <SentientGlint className="rounded-3xl">
                                        <Button className="w-[280px] h-20 bg-navy text-white hover:bg-black rounded-3xl shadow-2xl hover:-translate-y-2 transition-all font-black uppercase tracking-widest text-xl flex items-center justify-center gap-4 group">
                                            Consult Experts
                                            <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
                                        </Button>
                                    </SentientGlint>
                                </Link>
                                <Link href="/services">
                                    <SentientGlint className="rounded-3xl">
                                        <Button className="w-[280px] h-20 bg-white text-navy border-2 border-navy/10 rounded-3xl text-xl font-black uppercase tracking-widest transition-all shadow-sm hover:shadow-2xl hover:border-pink/20 flex items-center justify-center">
                                            Our Solutions
                                        </Button>
                                    </SentientGlint>
                                </Link>
                            </div>
                        </motion.div>
                    </Container>
                </SentientBackground>
            </section>
        </div>
    );
}
