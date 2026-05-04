"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Brain, Cpu, Globe, MessageSquare,
    Zap, Sparkles, TrendingUp, ArrowRight
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Link from "next/link";

const AIConsultancyPage = () => {
    return (
        <div className="pt-32 pb-24 overflow-x-hidden">
            {/* AI Hero - Intense Technical Prestige */}
            <section className="relative py-20 lg:py-36">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-[radial-gradient(circle_at_center,rgba(255,30,109,0.06),transparent_60%)]" />
                </div>

                <Container className="relative z-10">
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center space-x-3 bg-pink/5 border border-pink/10 px-8 py-3 rounded-full mb-12"
                        >
                            <Sparkles className="w-5 h-5 text-pink" />
                            <span className="text-[10px] font-black text-pink uppercase tracking-[0.4em]">Proprietary AI Frameworks</span>
                        </motion.div>

                        <h1 className="text-7xl md:text-9xl font-black text-navy mb-10 leading-[0.85] tracking-tighter">
                            The Frontier of <br />
                            <GradientText>Cognitive Systems.</GradientText>
                        </h1>

                        <p className="text-2xl text-gray-600 mb-16 leading-relaxed font-semibold max-w-3xl">
                            We don't just implement AI; we architect intelligent ecosystems
                            that autonomously drive business value. From agentic workflows
                            to neural ERP integration.
                        </p>

                        <div className="flex flex-wrap gap-6 justify-center">
                            <Link href="/contact">
                                <Button className="bg-navy text-white px-12 py-6 rounded-3xl text-xl font-black uppercase tracking-tighter hover:bg-pink transition-all">
                                    Architect Solutions
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* AI Domains */}
            <section className="py-32 bg-[#020B17] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

                <Container className="relative z-10">
                    <SectionHeading
                        title="Our Neural Domains"
                        subtitle="Specialized AI engineering across three high-impact disciplines."
                        centered
                    />

                    <div className="grid lg:grid-cols-3 gap-12 mt-24">
                        {[
                            {
                                icon: MessageSquare,
                                title: "Agentic Workflows",
                                desc: "Implementing LLM-driven agents that can autonomously handle customer service, procurement, and data extraction with human-level accuracy."
                            },
                            {
                                icon: Cpu,
                                title: "Predictive Engines",
                                desc: "Custom neural networks designed to forecast demand, spot financial anomalies, and optimize supply chains before bottlenecks occur."
                            },
                            {
                                icon: Globe,
                                title: "Platform Fusion",
                                desc: "Seamlessly bridging the gap between raw AI potential and your existing enterprise infrastructure like Dynamics 365 or SAP."
                            }
                        ].map((domain, i) => (
                            <motion.div
                                key={i}
                                className="bg-white/80 backdrop-blur-xl border border-white/5 p-12 rounded-[40px] shadow-sm hover:shadow-2xl hover:border-pink/10 transition-all duration-700 relative overflow-hidden holographic-border group"
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pink/5 to-purple/5 rounded-bl-full transform translate-x-12 -translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />
                                <div className="w-16 h-16 rounded-[24px] bg-gradient-to-br from-pink to-purple-600 flex items-center justify-center mb-8 shadow-pink/30 shadow-2xl group-hover:scale-110 transition-transform">
                                    <domain.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-3xl font-black mb-6 tracking-tight">{domain.title}</h3>
                                <p className="text-gray-400 text-lg leading-relaxed font-medium">
                                    {domain.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Strategic Roadmap */}
            <section className="py-40">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-6xl md:text-8xl font-black text-navy mb-12 tracking-tighter leading-none">
                                Data-First <br />
                                <span className="text-pink">Roadmap.</span>
                            </h2>

                            <div className="space-y-12">
                                {[
                                    { step: "01", title: "Discovery & Audit", desc: "We identify high-value automation targets within your current data streams." },
                                    { step: "02", title: "Neural Architecture", desc: "Our veterans design the custom LLM/Agent framework tailored to your needs." },
                                    { step: "03", title: "Scale & Integrate", desc: "We fuse the AI core with your production environment under zero-latency protocols." }
                                ].map((item, i) => (
                                    <div key={i} className="flex space-x-8">
                                        <div className="text-3xl font-black text-pink/20 tracking-tighter pt-1">
                                            {item.step}
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-black text-navy mb-3">{item.title}</h4>
                                            <p className="text-gray-600 font-medium text-lg leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <div className="relative aspect-square bg-gray-50 rounded-[80px] border border-gray-100 p-16 flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,237,255,0.05),transparent_70%)]" />
                            <motion.div
                                className="relative z-10 w-full h-full border-4 border-dashed border-navy/5 rounded-full flex items-center justify-center"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                            >
                                <Brain className="w-48 h-48 text-navy/10" />
                            </motion.div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 bg-navy rounded-[32px] flex items-center justify-center shadow-2xl">
                                    <Zap className="w-12 h-12 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* AI CTA */}
            <section className="py-24 md:py-48 bg-gray-50">
                <Container>
                    <div className="bg-white/80 backdrop-blur-xl rounded-[40px] p-16 md:p-32 shadow-[0_50px_100px_rgba(0,0,0,0.05)] border border-white/5 flex flex-col items-center text-center relative overflow-hidden group holographic-border">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-pink/5 rounded-bl-full transform translate-x-12 -translate-y-12 group-hover:scale-110 transition-transform duration-1000 z-0" />
                        <div className="relative z-10">
                            <h2 className="text-5xl md:text-8xl font-black text-navy mb-10 tracking-tighter leading-[0.85]">
                                Don't Just Forecast. <br />
                                <GradientText>Decide with Certainty.</GradientText>
                            </h2>
                            <p className="text-2xl text-gray-600 mb-16 leading-relaxed font-bold max-w-3xl mx-auto">
                                Deploy proprietary AI architectures built by industry veterans.
                                Secure your competitive edge for the next decade.
                            </p>
                            <Link href="/contact">
                                <Button className="bg-navy text-white px-16 py-8 rounded-[40px] text-2xl font-black uppercase tracking-tighter hover:bg-black shadow-2xl transition-all">
                                    Start AI Transition
                                    <ArrowRight className="ml-4 w-8 h-8" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default AIConsultancyPage;
