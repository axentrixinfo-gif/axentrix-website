import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileFAB from "@/components/ui/MobileFAB";
import ChatBot from "@/components/ui/ChatBot";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
    title: "Axentrix Inc. - Expert ERP & AI Consultancy in Nepal",
    description: "High-velocity startup team of industry veterans driving ERP & AI transformation across Nepal. Expert Dynamics 365, SAP, and AI integration services.",
    openGraph: {
        title: "Axentrix Inc. - Expert ERP & AI Consultancy",
        description: "Expert ERP & AI Consultancy in Nepal",
        url: "https://axentrixinc.com",
        siteName: "Axentrix Inc.",
        images: [{ url: "https://axentrixinc.com/og-image.jpg" }],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} font-sans`}>
                <Header />
                <main>{children}</main>
                <Footer />
                <MobileFAB />
                <ChatBot />
            </body>
        </html>
    );
}
