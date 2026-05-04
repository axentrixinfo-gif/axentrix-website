"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Globe } from "lucide-react";

export default function SocialComingSoon() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white pt-32">
            <Container variant="narrow">
                <div className="text-center">
                    <div className="w-20 h-20 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-8">
                        <Globe className="w-10 h-10 text-navy/40" />
                    </div>
                    <SectionHeading
                        label="Coming Soon"
                        title="Social Links"
                        description="We're currently setting up our social media presence. Stay tuned for updates!"
                    />
                    <div className="mt-12 space-y-6">
                        <p className="text-gray-500 max-w-md mx-auto">
                            In the meantime, feel free to reach out to us directly at{" "}
                            <a 
                                href="mailto:info@axentrixinc.com" 
                                className="text-pink hover:underline font-bold"
                            >
                                info@axentrixinc.com
                            </a>
                        </p>
                        <div className="pt-8">
                            <a 
                                href="/"
                                className="inline-flex items-center px-8 py-4 bg-navy text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-pink transition-all"
                            >
                                Back to Home
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
