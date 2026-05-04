/**
 * Framer Motion Animation Presets for Axentrix Inc
 * Consistent animations across the entire website
 */

import { Variants } from "framer-motion";

// Fade in with upward motion (for sections)
export const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

// Fade in from left
export const fadeInLeft: Variants = {
    hidden: {
        opacity: 0,
        x: -30,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

// Fade in from right
export const fadeInRight: Variants = {
    hidden: {
        opacity: 0,
        x: 30,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

// Scale animation (for cards on hover)
export const scaleOnHover = {
    rest: {
        scale: 1,
    },
    hover: {
        scale: 1.03,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
};

// Stagger container (for staggering child animations)
export const staggerContainer: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

// Pulse animation
export const pulse: Variants = {
    pulse: {
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

// Float animation variant
export const floatAnimation: Variants = {
    animate: {
        y: [-10, 10, -10],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

// Slide in from bottom (for modals/drawers)
export const slideInBottom: Variants = {
    hidden: {
        y: "100%",
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: "easeOut",
        },
    },
    exit: {
        y: "100%",
        opacity: 0,
        transition: {
            duration: 0.3,
            ease: "easeIn",
        },
    },
};

// Rotate and scale (for icons)
export const rotateScale: Variants = {
    initial: {
        rotate: 0,
        scale: 1,
    },
    animate: {
        rotate: 360,
        scale: [1, 1.2, 1],
        transition: {
            rotate: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
            },
            scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    },
};

// Viewport scroll animation configs
export const scrollAnimationConfig = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.2 },
};
