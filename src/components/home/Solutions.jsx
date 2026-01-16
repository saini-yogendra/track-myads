import React from 'react';
import { Target, ShoppingBag, Smartphone, BarChart3 } from 'lucide-react';

const Solutions = () => {
    const solutions = [
        {
            title: "All-in-One Campaign Tracking & Optimization Platform",
            icon: <Target className="w-12 h-12 text-pink-600" />,
            description: "Track every touch. Attribute every conversion with precision parameters.",
            bg: "bg-pink-50",
            iconBg: "bg-pink-100"
        },
        {
            title: "Take control of your eCommerce growth",
            icon: <ShoppingBag className="w-12 h-12 text-amber-700" />,
            description: "Advanced tracking and management tools designed to optimize eCommerce marketing performance.",
            bg: "bg-amber-50",
            iconBg: "bg-amber-100"
        },
        {
            title: "Built for media-buying affiliates",
            icon: <BarChart3 className="w-12 h-12 text-cyan-600" />,
            description: "Run hyper-targeted campaigns with real-time tracking and performance insights to maximize ROI.",
            bg: "bg-cyan-50",
            iconBg: "bg-cyan-100"
        },
        {
            title: "Real-time analytics",
            icon: <Smartphone className="w-12 h-12 text-violet-600" />,
            description: "Unlock instant visibility into what drives your revenue. Real-time analytics reveal market trends and customer behavior as they happen, enabling faster, data-driven campaign optimization.",
            bg: "bg-violet-50",
            iconBg: "bg-violet-100"
        }
    ];

    return (
        <section id="solutions" className="py-16 bg-slate-50">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-display">
                        What Do You Get With Track MyAds
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Everything you need to run successful affiliate campaigns, all in one powerful platform.
                    </p>
                </div>

                {/* 4-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {solutions.map((solution, idx) => (
                        <div
                            key={idx}
                            className={`${solution.bg} rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group h-full flex flex-col`}
                        >
                            {/* Icon */}
                            <div className={`${solution.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {solution.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">
                                {solution.title}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-600 leading-relaxed flex-grow">
                                {solution.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solutions;
