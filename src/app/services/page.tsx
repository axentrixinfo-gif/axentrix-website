"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Sparkles, Zap, Shield, Target, Users, BookOpen, Clock, Activity, MessageSquare } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import SentientGlint from "@/components/ui/SentientGlint";
import Container from "@/components/ui/Container";
import ServicesSection from "@/components/sections/ServicesSection";
import TrustWall from "../../components/sections/TrustWall";
import Button from "@/components/ui/Button";
import Link from "next/link";
import GradientText from "@/components/ui/GradientText";

import SentientBackground from "@/components/ui/SentientBackground";

const ServicesPage = () => {
    return (
        <div className="pt-24 pb-16 md:pb-24 overflow-x-hidden bg-white text-navy transition-colors duration-1000">
            {/* Services Hero - Ethereal Hub */}
            <section className="relative overflow-hidden">
                <SentientBackground className="py-16 md:py-24">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(0,237,255,0.06),transparent_70%)]" />
                        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(255,30,109,0.04),transparent_70%)]" />
                    </div>

                    <Container className="relative z-10">
                        <div className="max-w-5xl">
                            <SectionHeading
                                label="Mastery Arsenal"
                                title="Enterprise Intelligence."
                                splitTitle
                                description="We deploy high-prestige ERP and AI solutions that set the standard for technical authority and operational velocity."
                                className="mb-0"
                            />
                        </div>
                    </Container>
                </SentientBackground>
            </section>

            {/* Main Services Grid Section */}
            <ServicesSection />

            {/* Proprietary Methodology - Light Precision */}
            <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[160px] rounded-full" />
                <Container className="relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-12">
                            <SectionHeading
                                title="The Axentrix Logic Core."
                                splitTitle
                                description="Our implementation framework is built on 15+ years of surviving complex migrations."
                            />

                            <div className="grid gap-8 mt-16">
                                {[
                                    { step: "01", title: "Diagnostic Audit", desc: "Rigorous analysis of existing silos and manual friction points." },
                                    { step: "02", title: "Rapid Architecture", desc: "Designing a future-proofed core in days, not months." },
                                    { step: "03", title: "Agentic Deployment", desc: "Infecting workflows with autonomous intelligence." }
                                ].map((step, i) => (
                                    <SentientGlint key={i} className="rounded-[40px]">
                                        <div className="flex space-x-8 group bg-white/80 backdrop-blur-xl p-10 rounded-[40px] border border-white/5 shadow-sm hover:shadow-2xl transition-all duration-700 relative overflow-hidden holographic-border">
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pink/5 to-purple/5 rounded-bl-full transform translate-x-12 -translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />

                                            <span className="text-4xl font-black text-pink/20 group-hover:text-pink transition-colors shrink-0 z-10">{step.step}</span>
                                            <div className="relative z-10">
                                                <h4 className="text-2xl font-black text-navy mb-2 tracking-tight group-hover:text-pink transition-colors">{step.title}</h4>
                                                <p className="text-gray-500 font-medium leading-relaxed">{step.desc}</p>
                                            </div>
                                        </div>
                                    </SentientGlint>
                                ))}
                            </div>
                        </div>

                        <div className="relative rounded-[56px] bg-white/80 backdrop-blur-xl border border-gray-50 p-16 shadow-[0_50px_100px_rgba(0,0,0,0.05)] overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink/5 to-purple/5 rounded-bl-[100px] transform translate-x-12 -translate-y-12" />
                            <div className="relative z-10 space-y-10 text-center">
                                <Sparkles className="w-20 h-20 text-pink mx-auto" />
                                <div className="space-y-4">
                                    <p className="text-4xl font-black text-navy tracking-tighter leading-none italic">"Velocity vs Friction."</p>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-relaxed">
                                        The Axentrix Standard for <br />
                                        Modern Enterprise Growth
                                    </p>
                                </div>
                                <Link href="/contact" className="block">
                                    <Button className="w-full bg-navy text-white px-10 py-6 rounded-[32px] text-lg font-black uppercase tracking-widest hover:bg-pink shadow-xl transition-all">
                                        Initiate Protocol
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Service CTA */}
            <TrustWall />
        </div>
    );
};

export default ServicesPage;
