"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS, COMPANY_INFO } from "@/lib/constants";
import Button from "../ui/Button";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    // Helper to get active color and state
    const getLinkStyle = (href: string, label: string) => {
        const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

        // Custom color logic: Home/Services = Navy, About/Contact = Pink
        const activeColor = (label.toUpperCase() === "HOME" || label.toUpperCase() === "SERVICES") ? "bg-navy" : "bg-pink";

        return { isActive, activeColor };
    };

    // Handle scroll event
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024 && mobileMenuOpen) {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [mobileMenuOpen]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
                isScrolled
                    ? "bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] py-0"
                    : "bg-transparent py-0"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
                <div className="flex items-center justify-between h-24">
                    {/* Logo Area */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
                                <Image
                                    src="/logo.svg"
                                    alt="Axentrix Inc Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-black text-2xl text-navy tracking-tighter leading-none">
                                    Axentrix Inc
                                </span>
                                <span className="text-[10px] font-black text-pink tracking-[0.3em] uppercase mt-1">
                                    Intelligent Solutions
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation - Space Balanced */}
                    <nav className="hidden lg:flex items-center gap-12 xl:gap-16">
                        {NAV_LINKS.map((link) => {
                            const { isActive, activeColor } = getLinkStyle(link.href, link.label);
                            return (
                                <div
                                    key={link.label}
                                    className="relative"
                                    onMouseEnter={() => link.submenu && setActiveDropdown(link.label)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "text-xs font-black uppercase tracking-[0.25em] transition-all duration-300 relative group",
                                            isActive ? "text-navy" : "text-navy/70 hover:text-navy"
                                        )}
                                    >
                                        {link.label}
                                        <span className={cn(
                                            "absolute -bottom-2 left-0 h-0.5 transition-all duration-300",
                                            activeColor,
                                            isActive ? "w-full" : "w-0 group-hover:w-full"
                                        )} />
                                    </Link>

                                    <AnimatePresence>
                                        {activeDropdown === link.label && link.submenu && (
                                            <motion.div
                                                className="absolute top-full left-0 mt-4 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl py-4 border border-gray-100"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                            >
                                                {link.submenu.map((sublink) => (
                                                    <Link
                                                        key={sublink.label}
                                                        href={sublink.href}
                                                        className="block px-6 py-3 text-sm font-bold text-navy hover:bg-pink/5 hover:text-pink transition-colors"
                                                    >
                                                        {sublink.label}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </nav>

                    {/* Action Area */}
                    <div className="hidden lg:flex items-center">
                        <Link href="/contact">
                            <Button variant="primary" size="md" className="bg-navy hover:bg-black text-white px-10 py-4 rounded-2xl font-black uppercase text-xs tracking-widest border-none shadow-xl hover:shadow-pink/20 transition-all">
                                Book Consultation
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-4 rounded-2xl bg-navy/5 text-navy hover:bg-navy hover:text-white transition-all shadow-sm"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="lg:hidden bg-white border-t border-gray-200"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <nav className="px-4 py-6 space-y-4">
                            {NAV_LINKS.map((link) => (
                                <div key={link.label}>
                                    {link.submenu ? (
                                        <>
                                            <button
                                                className="flex items-center justify-between w-full text-navy font-medium py-2"
                                                onClick={() =>
                                                    setActiveDropdown(
                                                        activeDropdown === link.label ? null : link.label
                                                    )
                                                }
                                            >
                                                {link.label}
                                                <ChevronDown
                                                    className={cn(
                                                        "h-4 w-4 transition-transform",
                                                        activeDropdown === link.label && "rotate-180"
                                                    )}
                                                />
                                            </button>

                                            {activeDropdown === link.label && (
                                                <div className="pl-4 space-y-2 mt-2">
                                                    {link.submenu.map((sublink) => (
                                                        <Link
                                                            key={sublink.label}
                                                            href={sublink.href}
                                                            className="block text-gray-700 hover:text-pink py-2"
                                                            onClick={() => setMobileMenuOpen(false)}
                                                        >
                                                            {sublink.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="block text-navy font-medium py-2"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </div>
                            ))}

                            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                                <Button variant="primary" size="md" className="w-full mt-4">
                                    Book Consultation
                                </Button>
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
