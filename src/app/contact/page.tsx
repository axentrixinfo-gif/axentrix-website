"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, Linkedin, Facebook, Twitter, Sparkles, Brain, Clock, Shield, CheckCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SentientGlint from "@/components/ui/SentientGlint";
import ContactForm from "@/components/forms/ContactForm";
import AIRoadmapAudit from "../../components/ui/AIRoadmapAudit";
import { COMPANY_INFO } from "@/lib/constants";
import GradientText from "@/components/ui/GradientText";
import SentientBackground from "@/components/ui/SentientBackground";

const ContactPage = () => {
    const contactMethods = [
        {
            icon: Mail,
            label: "Strategic Inquiries",
            value: COMPANY_INFO.contact.email,
            link: `mailto:${COMPANY_INFO.contact.email}`
        },
        {
            icon: Phone,
            label: "Mission Control",
            value: COMPANY_INFO.contact.phoneFormatted,
            link: `tel:${COMPANY_INFO.contact.phone}`
        },
        {
            icon: MapPin,
            label: "Operations Base",
            value: COMPANY_INFO.contact.address,
            link: "#"
        }
    ];

    return (
        <div className="pt-24 pb-16 md:pb-24 overflow-x-hidden bg-white text-navy transition-colors duration-1000">
            {/* Header Section - Ethereal Hub */}
            <section className="relative overflow-hidden">
                <SentientBackground className="py-16 md:py-24">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,30,109,0.06),transparent_70%)]" />
                        <div className="absolute bottom-1/2 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(0,237,255,0.04),transparent_70%)]" />
                    </div>

                    <Container className="relative z-10">
                        <div className="max-w-5xl">
                            <SectionHeading
                                label="Mission-Critical Support"
                                title="Future-Proof Starts Here."
                                splitTitle
                                description="Select your path. Use our diagnostic tool for a personalized roadmap, or reach out directly to initiate mission-critical growth protocols."
                                className="mb-0"
                            />
                        </div>
                    </Container>
                </SentientBackground>
            </section>

            {/* AI Audit Section - Light Glassmorphism */}
            <section className="py-12 md:py-20 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full" />
                <Container className="relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-12">
                            <SectionHeading
                                title="Get Your AI Roadmap."
                                splitTitle
                                description="Our industry masters designed this audit to identify high-impact automation targets based on your specific sector."
                            />
                            <div className="flex flex-col space-y-8">
                                {[
                                    "Personalized transformation strategy",
                                    "04-Week Rapid Pilot suggestions",
                                    "Veteran-verified ROI targets"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center space-x-6 group">
                                        <div className="w-8 h-8 rounded-full bg-slate-50 border border-gray-100 flex items-center justify-center group-hover:bg-pink/10 transition-colors">
                                            <div className="w-2 h-2 rounded-full bg-pink" />
                                        </div>
                                        <span className="text-sm font-black text-gray-500 uppercase tracking-widest">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-slate-50 border border-gray-100 rounded-[64px] p-8 shadow-2xl relative overflow-hidden holographic-border">
                            <AIRoadmapAudit />
                        </div>
                    </div>
                </Container>
            </section>

            {/* Direct Contact & Form Section */}
            <section id="contact-form-anchor" className="py-12 md:py-20 bg-slate-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,237,255,0.03),transparent_70%)]" />
                <Container className="relative z-10">
                    <div className="grid lg:grid-cols-12 gap-16 md:gap-24">
                        {/* Information Column */}
                        <div className="lg:col-span-5 space-y-12 md:space-y-16">
                            <SectionHeading
                                label="Connect"
                                title="Strategic Nodes"
                                splitTitle
                                className="mb-0"
                            />

                            <div className="space-y-6">
                                {contactMethods.map((method, i) => (
                                    <SentientGlint key={i} className="rounded-[32px]">
                                        <motion.a
                                            href={method.link}
                                            className="flex items-center space-x-6 group bg-white/80 backdrop-blur-xl p-6 md:p-8 rounded-[32px] border border-white/5 shadow-sm hover:shadow-2xl transition-all duration-700 relative overflow-hidden holographic-border"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pink/5 to-purple/5 rounded-bl-full transform translate-x-12 -translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />

                                            <div className="w-16 h-16 rounded-[24px] bg-navy text-white flex items-center justify-center shadow-xl group-hover:bg-pink group-hover:scale-110 transition-all duration-500 shrink-0 z-10 border border-white/10">
                                                <method.icon className="w-7 h-7" />
                                            </div>
                                            <div className="relative z-10 min-w-0 flex-1">
                                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-2">
                                                    {method.label}
                                                </p>
                                                <p className="text-lg md:text-xl lg:text-2xl font-black text-navy leading-tight tracking-tight group-hover:text-pink transition-colors break-words">
                                                    {method.value}
                                                </p>
                                            </div>
                                        </motion.a>
                                    </SentientGlint>
                                ))}
                            </div>

                            {/* Social Presence */}
                            <div className="pt-20 border-t border-gray-200">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-10">Veteran Networks</p>
                                <div className="flex space-x-12">
                                    {[
                                        { icon: Linkedin, href: COMPANY_INFO.social.linkedin },
                                        { icon: Facebook, href: COMPANY_INFO.social.facebook },
                                        { icon: Twitter, href: COMPANY_INFO.social.twitter }
                                    ].map((social, i) => (
                                        <a
                                            key={i}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-navy hover:text-pink transition-all transform hover:scale-125 hover:-translate-y-2"
                                        >
                                            <social.icon className="w-10 h-10" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Column */}
                        <div className="lg:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white/80 backdrop-blur-2xl border border-white/5 p-10 md:p-16 rounded-[32px] shadow-[0_60px_100px_rgba(0,0,0,0.05)] relative overflow-hidden holographic-border"
                            >
                                {/* Form Inner Glow */}
                                <div className="absolute -top-32 -left-32 w-64 h-64 bg-pink/5 blur-[100px] rounded-full" />
                                <div className="relative z-10">
                                    <ContactForm />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default ContactPage;
