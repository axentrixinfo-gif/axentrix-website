"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Sparkles, Zap, Shield, Target, Users, BookOpen } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SentientGlint from "@/components/ui/SentientGlint";
import TeamMastery from "@/components/sections/TeamMastery";
import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";
import SentientBackground from "@/components/ui/SentientBackground";

const AboutPage = () => {
    return (
        <div className="pt-24 pb-16 md:pb-24 overflow-x-hidden bg-white text-navy transition-colors duration-1000">
            {/* Mission Section - Ethereal Hub */}
            <section className="relative overflow-hidden">
                <SentientBackground className="py-16 md:py-24">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(0,237,255,0.06),transparent_70%)]" />
                        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(255,30,109,0.04),transparent_70%)]" />
                    </div>

                    <Container className="relative z-10">
                        <div className="max-w-5xl">
                            <SectionHeading
                                label="Neural Core Logic"
                                title="Startup Speed. Mastery Protocol."
                                splitTitle
                                description="Axentrix is an elite consultancy founded on the principle of MISSION-CRITICAL delivery. We fuse silicon-valley agility with the high-prestige mastery of 15-year enterprise architects."
                                className="mb-0"
                            />
                        </div>
                    </Container>
                </SentientBackground>
            </section>

            {/* Core Values - Holographic Diagnostic */}
            <section className="py-16 md:py-24 bg-white relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-pink-500/5 blur-[160px] rounded-full" />
                <Container className="relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-12">
                            <SectionHeading
                                title="The Axentrix Doctrine."
                                splitTitle
                                description="We believe that AI shouldn't just be an 'add-on.' It should be the logic core of your business."
                            />

                            <div className="grid gap-10 mt-16">
                                {[
                                    { title: "Mission-Critical Precision", desc: "No fluff. Every line of logic must drive commercial ROI." },
                                    { title: "Mastery-Led Execution", desc: "Every project is helmed by a 15+ year domain architect." },
                                    { title: "Neutral Technology", desc: "We are agnostic. We pick the tech that makes you win." }
                                ].map((value, i) => (
                                    <SentientGlint key={i} className="rounded-[40px]">
                                        <div className="flex space-x-8 group bg-white/80 backdrop-blur-xl p-10 rounded-[40px] border border-white/5 shadow-sm hover:shadow-2xl transition-all duration-700 relative overflow-hidden holographic-border">
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pink/5 to-purple/5 rounded-bl-full transform translate-x-12 -translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />

                                            <div className="w-16 h-16 rounded-[24px] bg-navy flex items-center justify-center shrink-0 group-hover:bg-pink group-hover:scale-110 transition-all duration-500 shadow-xl border border-white/10 z-10">
                                                <Sparkles className="w-8 h-8 text-white" />
                                            </div>
                                            <div className="relative z-10">
                                                <h4 className="text-2xl font-black text-navy mb-2 tracking-tight group-hover:text-pink transition-colors">{value.title}</h4>
                                                <p className="text-gray-500 font-medium leading-relaxed">{value.desc}</p>
                                            </div>
                                        </div>
                                    </SentientGlint>
                                ))}
                            </div>
                        </div>

                        <div className="relative rounded-[56px] bg-white/80 backdrop-blur-xl border border-white/5 p-16 shadow-[0_50px_100px_rgba(0,0,0,0.05)] overflow-hidden group holographic-border">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink/5 to-purple/5 rounded-bl-[100px] transform translate-x-12 -translate-y-12 group-hover:scale-110 transition-transform duration-1000" />
                            <div className="absolute inset-0 bg-sentient-mesh opacity-10 group-hover:opacity-20 transition-opacity duration-1000" />
                            <div className="relative z-10 space-y-10 text-center">
                                <Sparkles className="w-20 h-20 text-pink mx-auto" />
                                <div className="space-y-4">
                                    <p className="text-4xl font-black text-navy tracking-tighter leading-none italic">"Velocity vs Friction."</p>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-relaxed">
                                        The Axentrix Standard for <br />
                                        Modern Enterprise Growth
                                    </p>
                                </div>
                                <div className="pt-10 border-t border-gray-100">
                                    <Button className="w-full bg-navy text-white px-10 py-6 rounded-[32px] text-lg font-black uppercase tracking-widest hover:bg-pink shadow-xl transition-all">
                                        Initiate Protocol
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Team/Veterans Section - Sentient Wall */}
            <section className="relative overflow-hidden">
                <SentientBackground className="py-16 md:py-24">
                    <Container className="relative z-10">
                        <div className="text-center mb-24">
                            <p className="text-[10px] font-black text-pink uppercase tracking-[0.4em] mb-4">Our Elite</p>
                            <h2 className="text-5xl md:text-8xl font-black text-navy tracking-tighter leading-[0.9]">
                                Team <br />
                                <span className="text-navy/40 font-medium">Mastery.</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {[
                                { name: "Executive Master", role: "15+ Yrs Strategy", expertise: "ERP Architect" },
                                { name: "AI Protocol Lead", role: "15+ Yrs Cognitive", expertise: "Neural Systems" },
                                { name: "Ops Commander", role: "15+ Yrs Delivery", expertise: "Rapid Scale" }
                            ].map((member, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group bg-white/80 backdrop-blur-3xl p-12 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-700 relative overflow-hidden holographic-border sentient-surface"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-pink/5 rounded-bl-[100px] group-hover:scale-150 transition-transform duration-700" />
                                    <div className="relative z-10">
                                        <div className="w-20 h-20 rounded-[32px] bg-navy text-white flex items-center justify-center mb-10 group-hover:bg-pink transition-all duration-500 shadow-xl border border-white/10">
                                            <Brain className="w-10 h-10" />
                                        </div>
                                        <h4 className="text-3xl font-black text-navy mb-2 tracking-tight group-hover:text-pink transition-colors">{member.name}</h4>
                                        <p className="text-pink text-xs font-black uppercase tracking-widest mb-6">{member.role}</p>
                                        <div className="pt-6 border-t border-gray-100">
                                            <p className="text-gray-400 font-medium text-sm uppercase tracking-widest">Mastery: {member.expertise}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </Container>
                </SentientBackground>
            </section>
        </div>
    );
};

export default AboutPage;
