"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { Ghost } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white pt-32">
            <Container variant="narrow">
                <div className="text-center">
                    <div className="w-24 h-24 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-8">
                        <Ghost className="w-12 h-12 text-navy/40" />
                    </div>
                    <div className="mb-12">
                        <SectionHeading
                            title="404"
                            label="Page Not Found"
                            description="The page you're looking for doesn't exist or has been moved."
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/">
                            <Button 
                                variant="primary" 
                                size="lg"
                                className="bg-navy hover:bg-black text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest"
                            >
                                Go Home
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button 
                                variant="secondary" 
                                size="lg"
                                className="border-2 border-gray-100 hover:border-pink/40 text-navy px-8 py-4 rounded-2xl font-black uppercase tracking-widest bg-white"
                            >
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
}
