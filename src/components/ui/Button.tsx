"use client";

import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onDrag' | 'onDragEnd' | 'onDragStart'> {
    variant?: "primary" | "secondary" | "tertiary";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
    children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = "primary",
            size = "md",
            isLoading = false,
            disabled,
            children,
            ...props
        },
        ref
    ) => {
        const [mounted, setMounted] = React.useState(false);

        React.useEffect(() => {
            setMounted(true);
        }, []);

        const mouseX = useMotionValue(0);
        const mouseY = useMotionValue(0);

        const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
        const x = useSpring(mouseX, springConfig);
        const y = useSpring(mouseY, springConfig);

        const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Subtle magnetic pull (15% of distance)
            mouseX.set((e.clientX - centerX) * 0.15);
            mouseY.set((e.clientY - centerY) * 0.15);
        };

        const handleMouseLeave = () => {
            mouseX.set(0);
            mouseY.set(0);
        };

        const baseStyles =
            "relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

        const variants = {
            primary:
                "bg-gradient-to-r from-pink to-pink-dark text-white hover:shadow-lg focus:ring-pink",
            secondary:
                "border-2 border-navy text-navy hover:bg-navy hover:text-white focus:ring-navy",
            tertiary: "text-navy hover:text-pink underline-offset-4 hover:underline",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg",
        };

        return (
            <motion.button
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    x: mounted && variant !== "tertiary" ? x : 0,
                    y: mounted && variant !== "tertiary" ? y : 0,
                }}
                className={cn(
                    baseStyles,
                    variants[variant],
                    sizes[size],
                    className
                )}
                disabled={disabled || isLoading}
                whileHover={{ scale: variant !== "tertiary" ? 1.05 : 1 }}
                whileTap={{ scale: variant !== "tertiary" ? 0.95 : 1 }}
                {...(props as any)}
            >
                {isLoading && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                <span className="relative z-10">{children}</span>
                {/* Subtle fluid glow */}
                {variant === "primary" && (
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none" />
                )}
            </motion.button>
        );
    }
);

Button.displayName = "Button";

export default Button;
