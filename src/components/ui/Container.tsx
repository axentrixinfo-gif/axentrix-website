import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    variant?: "default" | "narrow" | "wide";
}

const Container: React.FC<ContainerProps> = ({
    children,
    className,
    variant = "default",
    ...props
}) => {
    const variants = {
        default: "max-w-7xl",
        narrow: "max-w-4xl",
        wide: "max-w-7xl",
    };

    return (
        <div
            className={cn(
                "w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export default Container;
