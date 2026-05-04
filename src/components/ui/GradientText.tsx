import React from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary";
}

const GradientText: React.FC<GradientTextProps> = ({
    children,
    className,
    variant = "primary",
}) => {
    const gradients = {
        primary: "from-navy via-pink to-purple",
        secondary: "from-teal to-purple",
    };

    return (
        <span
            className={cn(
                "bg-gradient-to-r bg-clip-text text-transparent font-bold",
                gradients[variant],
                className
            )}
        >
            {children}
        </span>
    );
};

export default GradientText;
