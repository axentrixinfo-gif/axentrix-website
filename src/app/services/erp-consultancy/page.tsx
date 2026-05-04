"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Database, Settings, BarChart, ShieldCheck,
    ArrowRight, Layers, Zap, Clock
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Link from "next/link";

const ERPConsultancyPage = () => {
    return (
        <div className="pt-32 pb-24 overflow-x-hidden">
            {/* Page Hero */}
            <section className="relative py-20 lg:py-32">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(0,237,255,0.05),transparent_70%)]" />
                </div>

                <Container className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-flex items-center space-x-3 bg-navy/5 px-6 py-2.5 rounded-full mb-10">
                            <Settings className="w-5 h-5 text-navy" />
                            <span className="text-xs font-black text-navy uppercase tracking-[0.3em]">Enterprise Resource Planning</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black text-navy mb-8 leading-[0.9] tracking-tighter">
                            World-Class <br />
                            <GradientText>ERP Excellence.</GradientText>
                        </h1>

                        <p className="text-2xl text-gray-600 mb-12 leading-relaxed font-medium max-w-2xl">
                            We bridge the gap between complex enterprise requirements and
                            seamless system execution. Specialized in Dynamics 365 and SAP
                            implementations for high-growth organizations.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Core Platforms */}
            <section className="py-24 bg-gray-50">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12">
                        {[
                            {
                                title: "Microsoft Dynamics 365",
                                desc: "Comprehensive Business Central and NAV expertise tailored for the Nepalese market. High-velocity implementation with custom extension logic.",
                                features: ["Business Central", "Legacy NAV Migration", "Custom AL Development"]
                            },
                            {
                                title: "SAP Systems",
                                desc: "Enterprise-grade SAP implementation and management. Focusing on streamlined financial controls and supply chain transparency.",
                                features: ["SAP Business One", "S/4HANA Migration", "ABAP Customization"]
                            }
                        ].map((platform, i) => (
                            <motion.div
                                key={i}
                                className="bg-white/80 backdrop-blur-xl p-12 rounded-[40px] border border-white/5 shadow-sm hover:shadow-2xl hover:border-pink/10 transition-all duration-700 relative overflow-hidden group h-full holographic-border"
                                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-4xl font-black text-navy mb-6 group-hover:text-pink transition-colors">
                                    {platform.title}
                                </h3>
                                <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
                                    {platform.desc}
                                </p>
                                <div className="space-y-4">
                                    {platform.features.map((feat, j) => (
                                        <div key={j} className="flex items-center space-x-3 text-navy font-bold uppercase tracking-widest text-xs">
                                            <div className="w-2 h-2 rounded-full bg-pink" />
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Why Axentrix for ERP */}
            <section className="py-32">
                <Container>
                    <SectionHeading
                        title="Why Axentrix?"
                        subtitle="Our veteran consultants bring 15+ years of individual expertise to every implementation."
                    />
                    <div className="grid md:grid-cols-3 gap-10 mt-20">
                        {[
                            {
                                icon: Layers,
                                title: "End-to-End Design",
                                desc: "From business process mapping to final deployment, we handle the entire lifecycle."
                            },
                            {
                                icon: ShieldCheck,
                                title: "Risk Mitigation",
                                desc: "We anticipate failures before they happen, ensuring zero downtime for your core operations."
                            },
                            {
                                icon: Zap,
                                title: "Rapid ROI",
                                desc: "Our Lean implementation framework ensures your team is productive within record timeframes."
                            }
                        ].map((box, i) => (
                            <div key={i} className="flex flex-col group bg-white/80 backdrop-blur-xl p-10 rounded-[40px] border border-white/5 shadow-sm hover:shadow-2xl hover:border-pink/10 transition-all duration-700 relative overflow-hidden h-full holographic-border">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pink/5 to-purple/5 rounded-bl-full transform translate-x-12 -translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />
                                <div className="w-16 h-16 rounded-[24px] bg-navy text-white flex items-center justify-center mb-8 shadow-xl group-hover:bg-pink group-hover:scale-110 transition-all duration-500 shrink-0 z-10 border border-white/10">
                                    <box.icon className="w-8 h-8" />
                                </div>
                                <div className="relative z-10">
                                    <h4 className="text-2xl font-black text-navy mb-4 tracking-tighter uppercase group-hover:text-pink transition-colors">
                                        {box.title}
                                    </h4>
                                    <p className="text-gray-500 leading-relaxed font-medium">
                                        {box.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Closing CTA */}
            <section className="py-32 bg-navy text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-pink/20 to-teal/20 opacity-20" />
                <Container className="relative z-10">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                        <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-none">
                            Ready to Transform <br />
                            Your <span className="text-pink">Operational Core?</span>
                        </h2>
                        <p className="text-2xl text-gray-400 mb-16 font-medium leading-relaxed">
                            Stop settling for fragmented systems. Let our experts build
                            your future-proof enterprise roadmap today.
                        </p>
                        <Link href="/contact">
                            <Button variant="primary" size="lg" className="bg-white text-navy hover:bg-pink hover:text-white border-none text-2xl px-16 py-8 rounded-[32px] font-black uppercase tracking-tighter">
                                Start Consultation
                                <ArrowRight className="ml-3 w-8 h-8" />
                            </Button>
                        </Link>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default ERPConsultancyPage;
