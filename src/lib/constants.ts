/**
 * Constants for Axentrix Inc Website
 * Company information, navigation, services, etc.
 */

// Company Information
export const COMPANY_INFO = {
    name: "Axentrix Incorporation Pvt. Ltd.",
    shortName: "Axentrix Inc.",
    tagline: "Future-Proof Your Business with AI-Powered Intelligence",
    description: "High-velocity startup team of industry veterans driving ERP & AI transformation across Nepal.",

    contact: {
        email: "info@axentrixinc.com",
        phone: "+977 9841950302",
        phoneFormatted: "+977 984-1950302",
        address: "Tinkune, Kathmandu, Nepal",
    },

    businessHours: {
        weekdays: "Mon-Fri: 10:00 AM - 5:00 PM",
        weekend: "Sat-Sun: Closed",
    },

    social: {
        linkedin: "/social-coming-soon",
        facebook: "/social-coming-soon",
        twitter: "/social-coming-soon",
    },

    website: "https://axentrixinc.com",
};

// Navigation Links
export const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
        label: "Services",
        href: "/services",
        submenu: [
            { label: "ERP Consultancy", href: "/services/erp-consultancy" },
            { label: "AI Consultancy", href: "/services/ai-consultancy" },
            { label: "Industry Solutions", href: "/services/industry-solutions" },
        ],
    },
    { label: "Contact", href: "/contact" },
];

// Services Overview
export const SERVICES = [
    {
        id: "erp",
        title: "ERP Consultancy",
        description: "Expert implementation of Microsoft Dynamics 365 Business Central/NAV and SAP solutions",
        icon: "database",
        href: "/services/erp-consultancy",
    },
    {
        id: "ai",
        title: "AI Solutions",
        description: "AI Agent Templates, Platform Integration, and AI Analytics for intelligent automation",
        icon: "brain",
        href: "/services/ai-consultancy",
    },
    {
        id: "infrastructure",
        title: "Cloud Infrastructure",
        description: "High-availability technical architecture for extreme-scale enterprise operations.",
        icon: "zap",
        href: "/services/erp-consultancy",
    },
];

// Industries We Serve
export const INDUSTRIES = [
    {
        id: "manufacturing",
        name: "Manufacturing",
        icon: "factory",
    },
    {
        id: "retail",
        name: "Retail",
        icon: "shopping-bag",
    },
    {
        id: "professional",
        name: "Professional Services",
        icon: "briefcase",
    },
    {
        id: "distribution",
        name: "Distribution",
        icon: "truck",
    },
    {
        id: "automotive",
        name: "Automotive",
        icon: "car",
    },
    {
        id: "financial",
        name: "Financial Sector",
        icon: "dollar-sign",
    },
];

// Statistics (Why Choose Us)
export const STATS = [
    {
        id: "experience",
        number: 15,
        suffix: "+",
        label: "Years Team Expertise",
    },
    {
        id: "implementations",
        number: 500,
        suffix: "+",
        label: "System Deployments",
    },
    {
        id: "clients",
        number: 50,
        suffix: "+",
        label: "Primary AI Partners",
    },
    {
        id: "satisfaction",
        number: 98,
        suffix: "%",
        label: "Success Rate",
    },
];

// Testimonials (Placeholder - can be moved to database later)
export const TESTIMONIALS = [
    {
        id: 1,
        name: "Rajesh Thapa",
        company: "ABC Manufacturing Pvt. Ltd.",
        rating: 5,
        text: "Axentrix transformed our manufacturing processes with Dynamics 365. The implementation was smooth and their team was incredibly professional.",
    },
    {
        id: 2,
        name: "Anita Sharma",
        company: "Himalayan Retail Group",
        rating: 5,
        text: "The AI solutions provided by Axentrix have revolutionized our inventory management. Highly recommended for any retail business!",
    },
    {
        id: 3,
        name: "Bikram Singh",
        company: "Nepal AutoTech",
        rating: 5,
        text: "Outstanding SAP implementation for our automotive dealership. The team understood our unique needs and delivered beyond expectations.",
    },
];

// AI Consultation Services
export const AI_SERVICES = [
    {
        id: "templates",
        title: "AI Agent Templates",
        description: "Pre-built AI solutions ready to deploy in your business workflows",
    },
    {
        id: "integration",
        title: "Platform Integration",
        description: "Seamlessly connect AI with your existing ERP and business systems",
    },
    {
        id: "analytics",
        title: "AI Analytics",
        description: "Data-driven insights and predictive analytics for better decision making",
    },
];

// Service Interest Options (for contact forms)
export const SERVICE_INTERESTS = [
    "ERP Consultancy (Dynamics 365)",
    "ERP Consultancy (SAP)",
    "AI Solutions",
    "Manufacturing Solutions",
    "Retail Solutions",
    "Professional Services Solutions",
    "Automotive Solutions",
    "Financial Solutions",
    "General Inquiry",
];
