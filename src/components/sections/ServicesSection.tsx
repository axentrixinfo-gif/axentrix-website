"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Database, Brain, Factory, ShoppingCart, Briefcase, Car,
    ArrowRight, Sparkles, Zap
} from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import { SERVICES } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

import SentientBackground from "../ui/SentientBackground";

const ServicesSection: React.FC = () => {
    return (
        <section className="relative overflow-hidden transition-colors duration-1000">
            <SentientBackground className="py-12 md:py-20">
                <Container className="relative z-10">
                    <SectionHeading
                        label="Our Mastery"
                        title="Strategic Solutions."
                        splitTitle
                        description="We fuse traditional enterprise mastery with the speed of autonomous agents to deliver world-class platforms for Kathmandu's most ambitious organizations."
                    />

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {SERVICES.map((service, index) => {
                            const Icon = index === 0 ? Database :
                                index === 1 ? Brain : Zap;

                            return (
                                <Link key={service.id} href={service.href}>
                                    <Card className="h-full group bg-white/80 backdrop-blur-xl border-none holographic-border transition-all duration-700 shadow-sm hover:shadow-2xl overflow-hidden relative rounded-[40px] p-12">
                                        {/* Glass Hover Decoration */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink/10 to-purple/10 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />

                                        {/* Icon Box */}
                                        <div className="w-14 h-14 rounded-[20px] bg-navy flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-pink transition-all duration-500 shadow-xl border border-white/10">
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-3xl font-black text-navy mb-6 group-hover:text-pink transition-colors tracking-tight">
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-500 text-lg leading-relaxed mb-10 flex-grow font-medium">
                                            {service.description}
                                        </p>

                                        {/* Action Link */}
                                        <div className="flex items-center text-navy font-black text-xs uppercase tracking-widest group-hover:translate-x-3 transition-transform duration-300">
                                            Deep Dive
                                            <ArrowRight className="ml-3 w-4 h-4 text-pink" />
                                        </div>
                                    </Card>
                                </Link>
                            );
                        })}
                    </motion.div>
                </Container>
            </SentientBackground>
        </section>
    );
};

export default ServicesSection;
