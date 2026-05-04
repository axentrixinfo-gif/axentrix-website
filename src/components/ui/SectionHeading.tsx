"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    title: string | React.ReactNode;
    subtitle?: string;
    description?: string;
    label?: string;
    centered?: boolean;
    splitTitle?: boolean;
    className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
    title,
    subtitle,
    description,
    label,
    centered = false,
    splitTitle = false,
    className,
}) => {
    // For split title, we split by the last space if splitTitle is true and title is a string
    const isStringTitle = typeof title === 'string';
    const titleParts = (splitTitle && isStringTitle) ? (title as string).split(' ') : [title];
    const mainTitle = (splitTitle && isStringTitle) ? (title as string).split(' ').slice(0, (title as string).split(' ').length - 1).join(' ') : title;
    const accentTitle = (splitTitle && isStringTitle) ? (title as string).split(' ')[(title as string).split(' ').length - 1] : '';

    return (
        <motion.div
            className={cn(
                "mb-12",
                centered ? "text-center" : "",
                className
            )}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
        >
            <div className={cn(
                "flex flex-col gap-12",
                !centered && description ? "lg:flex-row lg:items-end lg:justify-between" : ""
            )}>
                <div className={cn("max-w-3xl", centered ? "mx-auto" : "")}>
                    {label && (
                        <div className="inline-block px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10 mb-8">
                            <span className="text-[10px] font-black text-navy/40 uppercase tracking-[0.4em]">
                                {label}
                            </span>
                        </div>
                    )}

                    <h2 className={cn(
                        "text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-navy leading-[0.9] tracking-tighter",
                        centered ? "mx-auto" : ""
                    )}>
                        {splitTitle && isStringTitle ? (
                            <>
                                {mainTitle} <br className="hidden md:block" />
                                <span className="text-navy/40 font-medium">{accentTitle}</span>
                            </>
                        ) : (
                            title
                        )}
                    </h2>
                </div>

                {description && (
                    <p className={cn(
                        "text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-2xl",
                        centered ? "mx-auto text-center mt-8" : "mt-6"
                    )}>
                        {description}
                    </p>
                )}
            </div>

            {subtitle && (
                <p className={cn(
                    "text-xl md:text-2xl text-gray-400 mt-10 max-w-3xl font-medium leading-relaxed tracking-tight",
                    centered ? "mx-auto" : ""
                )}>
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
};

export default SectionHeading;
