"use client";

import React from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientText from "@/components/ui/GradientText";

const PrivacyPolicyPage = () => {
    return (
        <div className="pt-32 pb-24 overflow-x-hidden bg-white text-navy">
            <Container>
                <SectionHeading
                    label="Legal"
                    title={<span>Privacy <GradientText>Policy</GradientText></span>}
                    description="Last updated: May 3, 2026"
                />

                <div className="max-w-4xl mx-auto mt-16 space-y-12">
                    <section>
                        <h2 className="text-3xl font-black text-navy mb-6">Information We Collect</h2>
                        <p className="text-gray-600 leading-relaxed font-medium">
                            We collect information you provide directly when contacting us, including name, email, company, and message content. We also automatically collect certain information when you visit our site through cookies and analytics tools.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-navy mb-6">How We Use Your Information</h2>
                        <ul className="space-y-4 text-gray-600 leading-relaxed font-medium">
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-pink mt-2 shrink-0" />
                                To respond to your inquiries and provide consultancy services
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-pink mt-2 shrink-0" />
                                To improve our website and service offerings
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-pink mt-2 shrink-0" />
                                To send periodic updates (with your consent)
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-navy mb-6">Data Security</h2>
                        <p className="text-gray-600 leading-relaxed font-medium">
                            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black text-navy mb-6">Contact Us</h2>
                        <p className="text-gray-600 leading-relaxed font-medium">
                            If you have questions about this Privacy Policy, please contact us at{" "}
                            <a href="mailto:info@axentrixinc.com" className="text-pink hover:underline font-bold">
                                info@axentrixinc.com
                            </a>
                        </p>
                    </section>
                </div>
            </Container>
        </div>
    );
};

export default PrivacyPolicyPage;
