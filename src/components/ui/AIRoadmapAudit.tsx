"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronRight, Brain, Zap, TrendingUp,
    ArrowRight, CheckCircle2, RotateCcw,
    Factory, ShoppingBag, Briefcase, Car, Database
} from "lucide-react";
import Button from "./Button";

type AuditStep = 1 | 2 | 3 | "result";

const AIRoadmapAudit: React.FC = () => {
    const [step, setStep] = useState<AuditStep>(1);
    const [data, setData] = useState({
        industry: "",
        need: "",
        maturity: ""
    });

    const nextStep = () => {
        if (step === 1) setStep(2);
        else if (step === 2) setStep(3);
        else if (step === 3) setStep("result");
    };

    const resetAudit = () => {
        setStep(1);
        setData({ industry: "", need: "", maturity: "" });
    };

    const getRoadmap = () => {
        if (data.need === "Efficiency") return "Neural Supply Chain Optimization";
        if (data.need === "Innovation") return "Agentic Workflow Architecture";
        return "Autonomous Customer Core";
    };

    return (
        <div className="w-full bg-white/80 backdrop-blur-xl rounded-[40px] shadow-2xl border border-white/5 p-8 md:p-12 overflow-hidden relative holographic-border">
            {/* Header / Progress */}
            <div className="flex items-center justify-between mb-12">
                <div className="flex gap-2">
                    {[1, 2, 3].map((s) => (
                        <div
                            key={s}
                            className={`h-1.5 w-12 rounded-full transition-all duration-500 ${typeof step === 'number' && step >= s ? 'bg-pink' : 'bg-gray-100'}`}
                        />
                    ))}
                </div>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    {step === "result" ? "Roadmap Ready" : `Step 0${step}`}
                </span>
            </div>

            <AnimatePresence mode="wait">
                {step === 1 && (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                    >
                        <h3 className="text-3xl font-black text-navy leading-none italic tracking-tighter">Which sector are we <br /> transforming?</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                { id: "manufacturing", name: "Manufacturing", icon: Factory },
                                { id: "retail", name: "Retail", icon: ShoppingBag },
                                { id: "financial", name: "Financial", icon: Database },
                                { id: "automotive", name: "Automotive", icon: Car },
                                { id: "services", name: "Professional", icon: Briefcase },
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => { setData({ ...data, industry: item.id }); nextStep(); }}
                                    className={`flex flex-col items-center p-6 rounded-3xl border-2 transition-all duration-300 group ${data.industry === item.id ? 'border-pink bg-pink/5' : 'border-gray-50 hover:border-pink/20 bg-gray-50'}`}
                                >
                                    <item.icon className={`w-8 h-8 mb-4 transition-colors ${data.industry === item.id ? 'text-pink' : 'text-navy/40 group-hover:text-pink'}`} />
                                    <span className="text-xs font-black uppercase tracking-widest text-navy">{item.name}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                    >
                        <h3 className="text-3xl font-black text-navy leading-none italic tracking-tighter">What is your primary <br /> strategic need?</h3>
                        <div className="space-y-4">
                            {[
                                { id: "Efficiency", name: "Operational Efficiency", icon: Zap, desc: "Cut redundancies and automate repetitive legacy tasks." },
                                { id: "Innovation", name: "Neural Innovation", icon: Brain, desc: "Deploy frontier AI agents to outpace the competition." },
                                { id: "Scale", name: "Infinite Scale", icon: TrendingUp, desc: "Build systems that grow autonomously with your business." },
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => { setData({ ...data, need: item.id }); nextStep(); }}
                                    className={`w-full flex items-center p-8 rounded-[32px] border-2 text-left transition-all duration-300 group ${data.need === item.id ? 'border-pink bg-pink/5' : 'border-gray-50 hover:border-pink/20 bg-gray-50'}`}
                                >
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mr-6 transition-colors ${data.need === item.id ? 'bg-pink text-white' : 'bg-white text-navy/40 group-hover:text-pink shadow-sm'}`}>
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-black text-navy uppercase tracking-tight">{item.name}</h4>
                                        <p className="text-sm text-gray-500 font-medium">{item.desc}</p>
                                    </div>
                                    <ChevronRight className={`ml-auto w-6 h-6 transition-transform ${data.need === item.id ? 'text-pink translate-x-2' : 'text-gray-300'}`} />
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                    >
                        <h3 className="text-3xl font-black text-navy leading-none italic tracking-tighter">Your current data <br /> maturity level?</h3>
                        <div className="grid grid-cols-1 gap-4">
                            {[
                                "Fragmented (Manual tracking, separate silos)",
                                "Partially Integrated (Basic digital core, some automation)",
                                "Optimized (Unified ERP, ready for neural integration)"
                            ].map((mat) => (
                                <button
                                    key={mat}
                                    onClick={() => { setData({ ...data, maturity: mat }); nextStep(); }}
                                    className={`w-full text-left p-8 rounded-[32px] border-2 transition-all duration-300 group ${data.maturity === mat ? 'border-pink bg-pink/5' : 'border-gray-50 hover:border-pink/20 bg-gray-50'}`}
                                >
                                    <span className={`text-sm font-bold transition-colors ${data.maturity === mat ? 'text-navy' : 'text-gray-400 group-hover:text-navy'}`}>
                                        {mat}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}

                {step === "result" && (
                    <motion.div
                        key="result"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-4"
                    >
                        <div className="w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                            <CheckCircle2 className="w-10 h-10 text-teal" />
                        </div>
                        <h3 className="text-4xl font-black text-navy mb-4 tracking-tighter">Roadmap Drafted.</h3>
                        <p className="text-gray-500 font-medium mb-10">Based on your mastery profile, we recommend:</p>

                        <div className="bg-navy text-white p-10 rounded-[40px] mb-12 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-pink/20 blur-[60px] rounded-full" />
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 text-pink">Strategic Focus Area</p>
                            <h4 className="text-3xl font-black leading-tight mb-8">
                                {getRoadmap()}
                            </h4>

                            {/* Visual Timeline / Roadmap Visualizer */}
                            <div className="border-t border-white/10 pt-8">
                                <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-gray-400">04-Week Rapid Pilot Launch</p>
                                <div className="grid grid-cols-4 gap-2 relative">
                                    <div className="absolute top-[11px] left-0 right-0 h-[2px] bg-white/5" />
                                    {[
                                        { week: "01", label: "Audit", desc: "Core Logic Sweep" },
                                        { week: "02", label: "Fuse", desc: "System Integration" },
                                        { week: "03", label: "Prep", desc: "Neural Agent Prep" },
                                        { week: "04", label: "Live", desc: "Pilot Launch" }
                                    ].map((phase, i) => (
                                        <div key={i} className="relative flex flex-col items-center">
                                            <div className="w-6 h-6 rounded-full bg-navy border-2 border-pink flex items-center justify-center mb-4 z-10">
                                                <div className="w-2 h-2 rounded-full bg-pink animate-pulse" />
                                            </div>
                                            <span className="text-[8px] font-black text-pink uppercase mb-1">Week {phase.week}</span>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-white mb-1">{phase.label}</span>
                                            <span className="text-[8px] text-gray-500 font-medium whitespace-nowrap">{phase.desc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <Button
                                onClick={() => {
                                    const contactForm = document.getElementById('contact-form-anchor');
                                    if (contactForm) contactForm.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="bg-navy text-white py-6 rounded-3xl text-sm font-black uppercase tracking-widest shadow-xl flex items-center justify-center gap-3 group"
                            >
                                Discuss this Roadmap
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </Button>
                            <button
                                onClick={resetAudit}
                                className="flex items-center justify-center gap-2 text-gray-400 hover:text-navy transition-colors text-xs font-bold uppercase tracking-widest"
                            >
                                <RotateCcw className="w-3 h-3" />
                                Re-simulate Audit
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AIRoadmapAudit;
