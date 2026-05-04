"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Globe, Sparkles, Brain, Database, Zap } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Container from "../ui/Container";
import SentientGlint from "../ui/SentientGlint";

const veterans = [
    {
        name: "Bibek K.",
        role: "Head of AI Architecture",
        bio: "Veteran systems architect with 15+ years in neural networks and agentic workflow design. Specialized in fusing high-velocity AI with legacy ERP cores.",
        specialization: ["Neural Integration", "LLM Strategy", "Agentic Design"],
        icon: Brain
    },
    {
        name: "Sagar P.",
        role: "Enterprise Systems Lead",
        bio: "12+ years of individual mastery in Microsoft Dynamics 365 and SAP deployments. Expert in operational optimization for multi-sector conglomerates.",
        specialization: ["Dynamics 365", "SAP S/4HANA", "Process Logic"],
        icon: Database
    },
    {
        name: "Yashaswi R.",
        role: "Strategic Growth Lead",
        bio: "Former enterprise consultant focused on rapid ROI and Lean implementation. Driving the 'High-Velocity Startup' mindset across all client partnerships.",
        specialization: ["Lean ERP", "ROI Modeling", "Strategic Scale"],
        icon: Zap
    }
];

const TeamMastery: React.FC = () => {
    return (
        <section className="py-12 md:py-20 bg-white relative overflow-hidden">
            <Container className="relative z-10">
                <SectionHeading
                    label="Individual Mastery"
                    title="The Veterans."
                    splitTitle
                    description="Every Axentrix lead brings over a decade of tier-1 experience. We put faces to the expertise that drives your transformation."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {veterans.map((member, i) => (
                        <SentientGlint key={i} className="rounded-[40px]">
                            <motion.div
                                className="group relative h-full bg-white/80 backdrop-blur-xl border border-gray-50 hover:border-pink/20 shadow-sm hover:shadow-2xl transition-all duration-700 overflow-hidden rounded-[40px] p-12"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                {/* Glass Hover Decoration */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink/5 to-purple/5 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 pointer-events-none" />

                                <div className="relative z-20">
                                    <div className="w-16 h-16 rounded-[24px] bg-navy flex items-center justify-center mb-10 group-hover:bg-pink group-hover:scale-110 transition-all duration-500 shadow-xl border border-white/10">
                                        <member.icon className="w-8 h-8 text-white" />
                                    </div>

                                    <h3 className="text-3xl font-black text-navy mb-2 tracking-tight group-hover:text-pink transition-colors">{member.name}</h3>
                                    <p className="text-pink font-black text-[10px] uppercase tracking-widest mb-8">{member.role}</p>

                                    <p className="text-gray-500 font-medium leading-relaxed mb-10 text-lg">
                                        {member.bio}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-12">
                                        {member.specialization.map((spec, j) => (
                                            <span key={j} className="px-4 py-2 bg-gray-50 text-[10px] font-black text-gray-500 rounded-full uppercase tracking-widest group-hover:bg-pink/5 group-hover:text-pink transition-colors">
                                                {spec}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex space-x-6 pt-10 border-t border-gray-100">
                                        <a href="#" className="text-gray-400 hover:text-navy transition-all hover:scale-110">
                                            <Linkedin className="w-6 h-6" />
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-navy transition-all hover:scale-110">
                                            <Globe className="w-6 h-6" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </SentientGlint>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default TeamMastery;
