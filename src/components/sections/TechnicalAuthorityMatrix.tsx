"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Brain, ShieldCheck, Database,
    Cpu, Globe, TrendingUp, Briefcase, Network
} from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import HolographicCard from "../ui/HolographicCard";
import SentientGlint from "../ui/SentientGlint";

const expertise = [
    {
        icon: Database,
        title: "ERP Ecosystems",
        description: "Architecting high-availability environments for Microsoft Dynamics 365 Business Central, Navision, and SAP S/4HANA tiers.",
        glow: "pink"
    },
    {
        icon: Brain,
        title: "Neural Strategy",
        description: "Integrating autonomous cognitive agents and predictive logic into enterprise decision layers.",
        glow: "blue"
    },
    {
        icon: ShieldCheck,
        title: "Fiscal Integrity",
        description: "Precision financial audits and risk mitigation protocols designed for modern compliance standards.",
        glow: "teal"
    },
    {
        icon: TrendingUp,
        title: "ROI Orchestration",
        description: "Deep financial consultancy focused on capital efficiency, ROI mapping, and enterprise value scaling.",
        glow: "blue"
    },
    {
        icon: Cpu,
        title: "Technical Architecture",
        description: "Master-level IT consultancy for hybrid-cloud deployments and high-fidelity technical infrastructure.",
        glow: "pink"
    },
    {
        icon: Globe,
        title: "Autonomous Governance",
        description: "Future-proofing enterprise operations through digital sovereignty and technical compliance frameworks.",
        glow: "teal"
    }
];

const TechnicalAuthorityMatrix: React.FC = () => {
    return (
        <section className="py-24 md:py-48 bg-white relative overflow-hidden">
            <Container className="relative z-10">
                <SectionHeading
                    label="Enterprise Core"
                    title="Mastery Matrix."
                    splitTitle
                    description="The strategic logic that orchestrates global enterprise operations and financial integrity."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-24">
                    {expertise.map((item, i) => (
                        <HolographicCard
                            key={i}
                            glowColor={item.glow as "blue" | "pink" | "teal"}
                            className="p-12 h-full flex flex-col bg-white/80 backdrop-blur-xl border-white/5 shadow-sm hover:shadow-2xl holographic-border rounded-[40px]"
                        >
                            <div className="w-14 h-14 rounded-[20px] bg-navy flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-pink transition-all duration-500 shadow-xl border border-white/10">
                                <item.icon className="w-6 h-6 text-white" />
                            </div>

                            <h3 className="text-3xl font-black text-navy mb-6 tracking-tight group-hover:text-pink transition-colors">
                                {item.title}
                            </h3>

                            <p className="text-gray-500 text-lg leading-relaxed font-medium">
                                {item.description}
                            </p>
                        </HolographicCard>
                    ))}
                </div>
            </Container>
            <SentientGlint>
                <div className="absolute inset-0 pointer-events-none" />
            </SentientGlint>
        </section>
    );
};

export default TechnicalAuthorityMatrix;
