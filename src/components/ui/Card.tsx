"use client";

import React, { HTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onAnimationStart' | 'onDrag' | 'onDragEnd' | 'onDragStart'> {
    children: React.ReactNode;
    hover?: boolean;
    glassmorphism?: boolean;
}

const Card: React.FC<CardProps> = ({
    className,
    children,
    hover = true,
    glassmorphism = false,
    ...props
}) => {
    const baseStyles = glassmorphism
        ? "glass rounded-xl p-6"
        : "bg-white rounded-xl shadow-md p-6 border border-gray-200";

    const hoverStyles = hover
        ? "hover:shadow-xl hover:-translate-y-1 cursor-pointer"
        : "";

    return (
        <motion.div
            className={cn(baseStyles, hoverStyles, "transition-all duration-300", className)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            whileHover={hover ? { scale: 1.02 } : {}}
            {...(props as any)}
        >
            {children}
        </motion.div>
    );
};

export default Card;
