"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface UIContextType {
    isChatOpen: boolean;
    setChatOpen: (open: boolean) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isChatOpen, setChatOpen] = useState(false);

    return (
        <UIContext.Provider value={{ isChatOpen, setChatOpen }}>
            {children}
        </UIContext.Provider>
    );
};

export const useUI = () => {
    const context = useContext(UIContext);
    if (context === undefined) {
        throw new Error("useUI must be used within a UIProvider");
    }
    return context;
};
