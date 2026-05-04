"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { SERVICE_INTERESTS } from "@/lib/constants";

const ContactForm: React.FC = () => {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        address: "",
        company: "",
        service: SERVICE_INTERESTS[0],
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to submit");
            }

            setStatus("success");
        } catch (error) {
            console.error("Submission error:", error);
            alert("Failed to submit. Please try again or email us directly at info@axentrixinc.com");
            setStatus("idle");
        }
    };

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-12 md:p-20 rounded-[64px] shadow-2xl border border-pink/10 flex flex-col items-center text-center"
            >
                <div className="w-24 h-24 bg-teal/10 rounded-full flex items-center justify-center mb-8 relative">
                    <div className="absolute inset-0 bg-teal/20 rounded-full animate-ping opacity-20" />
                    <CheckCircle className="w-12 h-12 text-teal relative z-10" />
                </div>
                <h3 className="text-4xl font-black text-navy mb-6 tracking-tighter italic">Transmission Received.</h3>
                <p className="text-xl text-gray-600 mb-12 font-medium leading-relaxed">
                    Our industry masters have been notified. <br />
                    Expect a strategic response within 24 hours.
                </p>
                <Button
                    onClick={() => setStatus("idle")}
                    className="bg-navy text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest shadow-2xl hover:scale-105 transition-all"
                >
                    Send Another Transmission
                </Button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                    <label className="text-[10px] font-black text-navy uppercase tracking-[0.3em] ml-2">Your Identity</label>
                    <input
                        required
                        type="text"
                        placeholder="Full Name"
                        className="w-full bg-gray-50 border-2 border-transparent focus:border-pink/20 focus:bg-white outline-none px-8 py-6 rounded-[24px] text-navy font-bold transition-all placeholder:text-gray-400 holographic-border"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>
                <div className="space-y-4">
                    <label className="text-[10px] font-black text-navy uppercase tracking-[0.3em] ml-2">Digital Core (Email)</label>
                    <input
                        required
                        type="email"
                        placeholder="email@company.com"
                        className="w-full bg-gray-50 border-2 border-transparent focus:border-pink/20 focus:bg-white outline-none px-8 py-6 rounded-[24px] text-navy font-bold transition-all placeholder:text-gray-400 holographic-border"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                    <label className="text-[10px] font-black text-navy uppercase tracking-[0.3em] ml-2">Mobile Number</label>
                    <input
                        required
                        type="tel"
                        placeholder="+977 98XXXXXXXX"
                        className="w-full bg-gray-50 border-2 border-transparent focus:border-pink/20 focus:bg-white outline-none px-8 py-6 rounded-[24px] text-navy font-bold transition-all placeholder:text-gray-400 holographic-border"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    />
                </div>
                <div className="space-y-4">
                    <label className="text-[10px] font-black text-navy uppercase tracking-[0.3em] ml-2">Organization</label>
                    <input
                        required
                        type="text"
                        placeholder="Company Name"
                        className="w-full bg-gray-50 border-2 border-transparent focus:border-pink/20 focus:bg-white outline-none px-8 py-6 rounded-[24px] text-navy font-bold transition-all placeholder:text-gray-400 holographic-border"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                    <label className="text-[10px] font-black text-navy uppercase tracking-[0.3em] ml-2">Organization</label>
                    <input
                        required
                        type="text"
                        placeholder="Company Name"
                        className="w-full bg-gray-50 border-2 border-transparent focus:border-pink/20 focus:bg-white outline-none px-8 py-6 rounded-[24px] text-navy font-bold transition-all placeholder:text-gray-400 holographic-border"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                </div>
            <div className="space-y-4">
                <label className="text-[10px] font-black text-navy uppercase tracking-[0.3em] ml-2">Address (Optional)</label>
                <input
                    type="text"
                    placeholder="Your Address"
                    className="w-full bg-gray-50 border-2 border-transparent focus:border-pink/20 focus:bg-white outline-none px-8 py-6 rounded-[24px] text-navy font-bold transition-all placeholder:text-gray-400 holographic-border"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
            </div>

            <div className="space-y-4">
                <label className="text-[10px] font-black text-navy uppercase tracking-[0.3em] ml-2">Strategic Interest</label>
                <select
                    className="w-full bg-gray-50 border-2 border-transparent focus:border-pink/20 focus:bg-white outline-none px-8 py-6 rounded-[24px] text-navy font-bold transition-all appearance-none cursor-pointer holographic-border"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                    {SERVICE_INTERESTS.map((service, i) => (
                        <option key={i} value={service}>{service}</option>
                    ))}
                </select>
            </div>
            </div>

            <div className="space-y-4">
                <label className="text-[10px] font-black text-navy uppercase tracking-[0.3em] ml-2">Your Mission (Message)</label>
                <textarea
                    required
                    placeholder="Briefly describe your requirements or strategic goals..."
                    rows={6}
                    className="w-full bg-gray-50 border-2 border-transparent focus:border-pink/20 focus:bg-white outline-none px-8 py-8 rounded-[32px] text-navy font-bold transition-all placeholder:text-gray-400 resize-none holographic-border"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
            </div>

            <Button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-8 rounded-[32px] bg-navy hover:bg-black text-white text-2xl font-black uppercase tracking-widest shadow-2xl shadow-navy/20 flex items-center justify-center space-x-4 group disabled:opacity-50 transition-all duration-500 overflow-hidden relative"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                {status === "submitting" ? (
                    <span className="animate-pulse relative z-10">Syncing Protocol...</span>
                ) : (
                    <div className="flex items-center space-x-4 relative z-10">
                        <span>Initialize Protocol</span>
                        <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
                    </div>
                )}
            </Button>
        </form>
    );
};

export default ContactForm;
