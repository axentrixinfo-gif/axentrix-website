"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send } from "lucide-react";

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
}

const ChatBot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "welcome",
            role: "assistant",
            content: "Welcome to Axentrix Inc. I'm Axie. Ask me about our ERP and AI services!"
        }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: input
        };

        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: [...messages, userMessage].map(m => ({
                        role: m.role,
                        content: m.content
                    }))
                }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error || "Failed to get response");
            }

            const data = await response.json();
            
            setMessages(prev => [...prev, {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: data.content || "I'm here to help! How can I assist you today?"
            }]);
        } catch (error: any) {
            console.error("Chat error:", error);
            setMessages(prev => [...prev, {
                id: (Date.now() + 2).toString(),
                role: 'assistant',
                content: error.message?.includes("API") 
                    ? "I'm having trouble connecting to my AI services. Please try again or contact us at info@axentrixinc.com"
                    : "I apologize, but I'm having trouble connecting. Please try again or contact us at info@axentrixinc.com"
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleQuickReply = (reply: string) => {
        if (isLoading) return;
        
        const userMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: reply
        };

        setMessages(prev => [...prev, userMessage]);
        setIsLoading(true);

        fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                messages: [...messages, userMessage].map(m => ({
                    role: m.role,
                    content: m.content
                }))
            }),
        }).then(async (response) => {
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error || "Failed to get response");
            }

            const data = await response.json();
            
            setMessages(prev => [...prev, {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: data.content || "How else can I help you?"
            }]);
        }).catch((error: any) => {
            console.error("Chat error:", error);
            setMessages(prev => [...prev, {
                id: (Date.now() + 2).toString(),
                role: 'assistant',
                content: "I'm having trouble connecting. Please try again or contact us at info@axentrixinc.com"
            }]);
        }).finally(() => {
            setIsLoading(false);
        });
    };

    const quickReplies = ["ERP Consultancy", "AI Solutions", "Get Quote", "Book Now"];

    return (
        <>
            {/* Floating Button */}
            <motion.div
                className="fixed bottom-6 right-6 z-[9999]"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-16 h-16 rounded-full bg-navy hover:bg-navy-light text-white flex items-center justify-center shadow-2xl hover:shadow-pink/20 transition-all group relative"
                    aria-label="Toggle chat"
                >
                    {isOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <>
                            <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink rounded-full animate-pulse" />
                        </>
                    )}
                </button>
            </motion.div>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-24 right-6 z-[9999] w-[400px] h-[600px] bg-white rounded-[32px] shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-navy text-white p-6 flex items-center justify-between rounded-t-[32px]">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-xl bg-pink/20 flex items-center justify-center">
                                    <MessageSquare className="w-5 h-5 text-pink" />
                                </div>
                                <div>
                                    <h3 className="font-black text-lg">Axie</h3>
                                    <p className="text-[10px] text-white/60 uppercase tracking-widest">AI Assistant</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white/60 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages Container */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50/50">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-4 rounded-2xl ${
                                            message.role === "user"
                                                ? "bg-navy text-white rounded-br-md"
                                                : "bg-white text-navy rounded-bl-md shadow-sm border border-gray-100"
                                        }`}
                                    >
                                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                                    </div>
                                </div>
                            ))}
                            
                            {/* Typing Indicator */}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white text-navy p-4 rounded-2xl rounded-bl-md shadow-sm border border-gray-100">
                                        <div className="flex space-x-1">
                                            <div className="w-2 h-2 bg-pink rounded-full animate-bounce" />
                                            <div className="w-2 h-2 bg-pink rounded-full animate-bounce [animation-delay:0.1s]" />
                                            <div className="w-2 h-2 bg-pink rounded-full animate-bounce [animation-delay:0.2s]" />
                                        </div>
                                    </div>
                                </div>
                            )}
                            
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Replies */}
                        {!isLoading && messages.length <= 2 && (
                            <div className="px-6 py-3 bg-white border-t border-gray-100">
                                <div className="flex flex-wrap gap-2">
                                    {quickReplies.map((reply) => (
                                        <button
                                            key={reply}
                                            onClick={() => handleQuickReply(reply)}
                                            className="px-4 py-2 bg-navy/5 text-navy text-xs font-black uppercase tracking-widest rounded-xl hover:bg-pink hover:text-white transition-all"
                                        >
                                            {reply}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Input Form */}
                        <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-100 rounded-b-[32px]">
                            <div className="flex items-center space-x-3">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type your message..."
                                    className="flex-1 px-4 py-3 bg-gray-50 border-2 border-transparent focus:border-pink/20 focus:bg-white outline-none rounded-xl text-sm font-medium text-navy placeholder:text-gray-400"
                                    disabled={isLoading}
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !input.trim()}
                                    className="w-10 h-10 bg-navy hover:bg-pink text-white rounded-xl flex items-center justify-center transition-all disabled:opacity-50 shrink-0"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatBot;
