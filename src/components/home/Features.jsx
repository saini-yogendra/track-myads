import React from 'react';
import {
    ShieldCheck,
    Zap,
    Layers,
    Globe,
    ArrowRight,
    UserPlus,
    Headphones,
    Puzzle,
    Award
} from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Globe className="w-6 h-6 text-blue-600" />,
            title: "Seamless Campaign Migration",
            description: "Move your campaigns effortlessly from other platforms using fast, one-click migration tools.",
            bg: "bg-blue-50"
        },
        {
            icon: <Zap className="w-6 h-6 text-yellow-600" />,
            title: "Powerful Automation",
            description: "Automate payouts, caps, and alerts with smart rules that save time and reduce manual work.",
            bg: "bg-yellow-50"
        },
        {
            icon: <UserPlus className="w-6 h-6 text-green-600" />,
            title: "Fast & Guided Onboarding",
            description: "Launch quickly with dedicated onboarding support and step-by-step training resources.",
            bg: "bg-green-50"
        },
        {
            icon: <Headphones className="w-6 h-6 text-red-600" />,
            title: "Always-On Customer Support",
            description: "Get 24/7 expert assistance via chat, email, or phone whenever you need help.",
            bg: "bg-red-50"
        },
        {
            icon: <Layers className="w-6 h-6 text-purple-600" />,
            title: "White-Label Branding",
            description: "Personalize the platform with your own domain, branding, and custom color themes.",
            bg: "bg-purple-50"
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-teal-600" />,
            title: "Advanced Feature Set",
            description: "Unlock powerful tools including smart links, impression tracking, and multi-currency support.",
            bg: "bg-teal-50"
        }
    ];

    return (
        <div id="features" className="py-16 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Key Features</span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6 font-display">
                        Take Your Performance Marketing to New Heights
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Track MyAds provides an all-in-one solution with features designed to scale your business.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white rounded-2xl p-8 border border-slate-100 hover:border-blue-100 hover:shadow-card transition-all duration-300 group hover:-translate-y-1">
                            <div className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
                            <p className="text-slate-500 leading-relaxed text-[15px]">
                                {feature.description}
                            </p>
                            <a href="#" className="mt-6 inline-flex items-center text-primary font-semibold text-sm hover:gap-2 transition-all opacity-0 group-hover:opacity-100">
                                Learn more <ArrowRight size={16} className="ml-1" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
