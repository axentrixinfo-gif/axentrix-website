"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Clock, Lightbulb } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Container from "../ui/Container";

const insights = [
    {
        category: "AI Strategy",
        title: "The Agentic Shift: Why Simple Chatbots are Dead in 2026",
        desc: "A deep dive into how autonomous agents are replacing simple RAG systems for enterprise procurement logic.",
        readTime: "06 min read",
        icon: Lightbulb
    },
    {
        category: "ERP Mastery",
        title: "Dynamics 365 vs. SAP: Choosing the Right Pillar for Nepal's Conglomerates",
        desc: "Elite perspective on the core functional differences and long-term scaling strategy for local businesses.",
        readTime: "08 min read",
        icon: BookOpen
    },
    {
        category: "Future Tech",
        title: "Connecting Local Infrastructure to Global Neural Clouds",
        desc: "Overcoming physical latency to build high-velocity decision engines in Tinkune, Kathmandu.",
        readTime: "05 min read",
        icon: Clock
    }
];

const InsightsSection: React.FC = () => {
    return (
        <section className="py-12 md:py-20 bg-white">
            <Container>
                <SectionHeading
                    label="Thought Leadership"
                    title="Mastery Insights."
                    splitTitle
                    description="Deep dives into the technical logic and strategic roadmap of global automation."
                />

                <div className="grid lg:grid-cols-3 gap-10">
                    {insights.map((article, i) => (
                        <motion.div
                            key={i}
                            className="group cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="group h-full bg-white/80 backdrop-blur-xl p-10 rounded-[40px] border border-white/5 shadow-sm hover:shadow-2xl hover:border-pink/10 transition-all duration-700 relative overflow-hidden holographic-border mb-8">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink/5 to-purple/5 rounded-bl-full transform translate-x-12 -translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <article.icon className="w-16 h-16 text-navy/5 group-hover:text-pink/10 transition-colors duration-500" />
                                </div>
                                <div className="absolute top-8 left-8">
                                    <span className="px-5 py-2 bg-white text-[10px] font-black text-navy uppercase tracking-widest rounded-full shadow-sm">
                                        {article.category}
                                    </span>
                                </div>
                                <div className="absolute bottom-8 right-8 w-12 h-12 bg-white rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                                    <ArrowUpRight className="w-6 h-6 text-navy" />
                                </div>
                            </div>

                            <h3 className="text-2xl font-black text-navy mb-4 group-hover:text-pink transition-colors line-clamp-2 leading-tight">
                                {article.title}
                            </h3>
                            <p className="text-gray-500 font-medium line-clamp-3 mb-6">
                                {article.desc}
                            </p>
                            <div className="flex items-center space-x-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                <span>{article.readTime}</span>
                                <div className="w-1 h-1 rounded-full bg-gray-200" />
                                <span>Axentrix Editorial</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default InsightsSection;
