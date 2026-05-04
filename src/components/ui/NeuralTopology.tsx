"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Node {
    id: number;
    initialX: number;
    initialY: number;
    size: number;
    isEgg?: boolean;
}

const NeuralTopology: React.FC = () => {
    const [nodes, setNodes] = useState<Node[]>([]);
    const audioCtxRef = useRef<AudioContext | null>(null);

    // Initialize Web Audio API on first interaction
    const playPop = useCallback((isShatter: boolean = false) => {
        try {
            if (!audioCtxRef.current) {
                audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
            }

            const ctx = audioCtxRef.current;
            if (ctx.state === 'suspended') {
                ctx.resume();
            }

            const playFrequencyPop = (freq: number, dur: number, gain: number) => {
                const oscillator = ctx.createOscillator();
                const gainNode = ctx.createGain();

                oscillator.type = "sine";
                oscillator.frequency.setValueAtTime(freq, ctx.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(freq / 5, ctx.currentTime + dur);

                gainNode.gain.setValueAtTime(gain, ctx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + dur);

                oscillator.connect(gainNode);
                gainNode.connect(ctx.destination);

                oscillator.start();
                oscillator.stop(ctx.currentTime + dur);
            };

            if (isShatter) {
                // Multi-frequency shatter sound
                playFrequencyPop(400, 0.4, 0.2);
                playFrequencyPop(200, 0.6, 0.25);
                playFrequencyPop(100, 0.8, 0.3);
            } else {
                playFrequencyPop(600, 0.1, 0.15);
            }
        } catch (e) {
            console.error("Audio playback failed", e);
        }
    }, []);

    const generateRandomNode = useCallback((id: number, isEgg = false, size?: number): Node => {
        return {
            id,
            initialX: Math.random() * 100,
            initialY: Math.random() * 100,
            size: size || (isEgg ? 40 : Math.random() * 30 + 10), // REDUCED: Egg is 40px wide
            isEgg,
        };
    }, []);

    const initializeField = useCallback(() => {
        const newNodes: Node[] = Array.from({ length: 40 }).map((_, i) =>
            generateRandomNode(Math.random() + i, i === 0)
        );
        setNodes(newNodes);
    }, [generateRandomNode]);

    useEffect(() => {
        initializeField();
        const timer = setTimeout(() => {
            if (nodes.length === 0) initializeField();
        }, 1000);
        return () => clearTimeout(timer);
    }, [initializeField]);

    const handleMasterBurst = useCallback(() => {
        playPop(true);
        setNodes([]);

        // ULTRA-INSTANT RECURSIVE REPAIR: 200ms for high-prestige responsiveness
        setTimeout(() => {
            const freshNodes: Node[] = Array.from({ length: 40 }).map((_, i) =>
                generateRandomNode(Date.now() + Math.random() + i, i === 0)
            );
            setNodes(freshNodes);
        }, 200);
    }, [playPop, generateRandomNode]);

    const handleBurst = (node: Node) => {
        if (node.isEgg) {
            handleMasterBurst();
            return;
        }

        playPop();

        // Remove individual node
        setNodes(prev => prev.filter(n => n.id !== node.id));

        // KIND-PRESERVING RESPRAWN
        setNodes(prev => [...prev, generateRandomNode(Date.now() + Math.random(), false, node.size)]);
    };

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <AnimatePresence>
                {nodes.map((node) => (
                    <motion.div
                        key={node.id}
                        layoutId={node.id.toString()}
                        className={`absolute pointer-events-auto cursor-crosshair group ${node.isEgg ? 'z-50' : 'z-10'}`}
                        style={{
                            left: `${node.initialX}%`,
                            top: `${node.initialY}%`,
                            width: node.isEgg ? 40 : node.size,
                            height: node.isEgg ? 25 : node.size, // MINI-OVAL DIMENSIONS
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: 1,
                            opacity: node.isEgg ? 0.7 : 0.4,
                            x: [0, (Math.random() - 0.5) * 150, (Math.random() - 0.5) * 150, 0],
                            y: [0, (Math.random() - 0.5) * 150, (Math.random() - 0.5) * 150, 0],
                        }}
                        exit={{
                            scale: node.isEgg ? 10 : 4,
                            opacity: 0,
                            filter: "blur(20px)",
                            transition: { duration: node.isEgg ? 0.6 : 0.3 }
                        }}
                        transition={{
                            opacity: { duration: 1 },
                            scale: { duration: 0.5 },
                            x: {
                                duration: 15 + Math.random() * 15,
                                repeat: Infinity,
                                ease: "easeInOut",
                            },
                            y: {
                                duration: 20 + Math.random() * 15,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }
                        }}
                        onPointerDown={(e) => {
                            e.stopPropagation();
                            handleBurst(node);
                        }}
                    >
                        {/* The Sentient Bubble */}
                        <div className={`w-full h-full backdrop-blur-md border shadow-2xl transition-all duration-300
                            ${node.isEgg
                                ? 'rounded-[100%] bg-pink/40 border-pink/60 animate-pulse shadow-pink/30'
                                : 'rounded-full bg-pink/30 border-pink/40 shadow-pink/20 hover:bg-pink/50 hover:scale-110'
                            }`}
                        />

                        {/* Internal Technical Pulse for Egg */}
                        {node.isEgg && (
                            <motion.div
                                animate={{ opacity: [0.2, 0.5, 0.2] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="absolute inset-2 rounded-[100%] bg-white/20 blur-sm"
                            />
                        )}

                        {/* Hover/Interaction Glow */}
                        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 blur-md transition-opacity" />
                    </motion.div>
                ))}
            </AnimatePresence>

            {/* Global Atmosphere Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,30,109,0.03),transparent_80%)]" />
        </div>
    );
};

export default NeuralTopology;
