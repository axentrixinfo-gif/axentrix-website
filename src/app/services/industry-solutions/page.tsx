"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Factory, ShoppingCart, Briefcase, Truck, Car, DollarSign,
    ArrowRight, Sparkles, Zap
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";
import { INDUSTRIES } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Link from "next/link";

const iconMap: { [key: string]: React.ElementType } = {
    factory: Factory,
    "shopping-bag": ShoppingCart,
    briefcase: Briefcase,
    truck: Truck,
    car: Car,
    "dollar-sign": DollarSign,
};

const IndustrySolutionsPage = () => {
    return (
        <div className="pt-32 pb-24 overflow-x-hidden bg-white text-navy">
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
                            <Factory className="w-5 h-5 text-navy" />
                            <span className="text-xs font-black text-navy uppercase tracking-[0.3em]">Sector Expertise</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black text-navy mb-8 leading-[0.9] tracking-tighter">
                            Industry <br />
                            <GradientText>Solutions.</GradientText>
                        </h1>

                        <p className="text-2xl text-gray-600 mb-12 leading-relaxed font-medium max-w-2xl">
                            We deliver tailored ERP and AI solutions across diverse sectors,
                            understanding the unique challenges and compliance needs of each industry.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Industries Grid */}
            <section className="py-24 bg-gray-50">
                <Container>
                    <SectionHeading
                        title="Sectors We Serve"
                        subtitle="Deep expertise across multiple industries with customized solutions"
                        centered
                    />

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {INDUSTRIES.map((industry, i) => {
                            const Icon = iconMap[industry.icon] || Factory;
                            return (
                                <motion.div
                                    key={industry.id}
                                    variants={fadeInUp}
                                    className="group bg-white/80 backdrop-blur-xl p-12 rounded-[40px] border border-white/5 shadow-sm hover:shadow-2xl hover:border-pink/10 transition-all duration-700 relative overflow-hidden h-full holographic-border"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink/5 to-purple/5 rounded-bl-full transform translate-x-12 -translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />
                                    <div className="w-16 h-16 rounded-[24px] bg-navy text-white flex items-center justify-center mb-8 shadow-xl group-hover:bg-pink group-hover:scale-110 transition-all duration-500 border border-white/10 z-10 relative">
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-black text-navy mb-4 group-hover:text-pink transition-colors">
                                        {industry.name}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed font-medium mb-8">
                                        Customized solutions for {industry.name.toLowerCase()} businesses seeking digital transformation.
                                    </p>
                                    <Link href="/contact" className="inline-flex items-center text-navy font-black text-xs uppercase tracking-widest group-hover:text-pink transition-colors">
                                        Get Solution
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,30,109,0.03),transparent_70%)]" />
                <Container className="relative z-10">
                    <div className="bg-white/80 backdrop-blur-xl rounded-[40px] p-16 md:p-32 shadow-[0_50px_100px_rgba(0,0,0,0.05)] border border-white/5 flex flex-col items-center text-center relative overflow-hidden group holographic-border">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-pink/5 rounded-bl-full transform translate-x-12 -translate-y-12 group-hover:scale-110 transition-transform duration-1000" />
                        <Sparkles className="w-20 h-20 text-pink mx-auto mb-10" />
                        <h2 className="text-5xl md:text-8xl font-black text-navy mb-10 tracking-tighter leading-[0.85]">
                            Ready to Transform <br />
                            <GradientText>Your Industry?</GradientText>
                        </h2>
                        <p className="text-2xl text-gray-600 mb-16 leading-relaxed font-bold max-w-3xl">
                            Let our experts design a solution tailored to your sector's specific needs and compliance requirements.
                        </p>
                        <Link href="/contact">
                            <Button className="bg-navy text-white px-16 py-8 rounded-[40px] text-2xl font-black uppercase tracking-tighter hover:bg-black shadow-2xl transition-all">
                                Start Consultation
                                <ArrowRight className="ml-4 w-8 h-8" />
                            </Button>
                        </Link>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default IndustrySolutionsPage;
