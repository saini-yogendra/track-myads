import React from 'react';
import { Target, ShoppingBag, Smartphone, BarChart3, ChevronRight, CheckCircle2 } from 'lucide-react';

const SolutionsPage = () => {
    const solutions = [
        {
            title: "Campaign Tracking",
            subtitle: "For Agencies & Networks",
            icon: <Target className="w-12 h-12 text-primary" />,
            description: "Advanced tracking capabilities for seamless performance monitoring.",
            features: ["Real-time conversion tracking", "Fraud detection & prevention", "Custom targeting rules", "Automated payouts"]
        },
        {
            title: "eCommerce Management",
            subtitle: "For Online Retailers",
            icon: <ShoppingBag className="w-12 h-12 text-secondary" />,
            description: "Scale your online store with powerful affiliate management tools.",
            features: ["Shopify & WooCommerce integration", "Coupon code tracking", "Product-level commission", "Influencer management"]
        },
        {
            title: "Mobile Attribution",
            subtitle: "For App Developers",
            icon: <Smartphone className="w-12 h-12 text-purple-600" />,
            description: "Accurately attribute installs and in-app events to the right sources.",
            features: ["SDK integration", "Cross-device tracking", "In-app event mapping", "Retention analysis"]
        },
        {
            title: "Media Buying",
            subtitle: "For Advertisers",
            icon: <BarChart3 className="w-12 h-12 text-orange-500" />,
            description: "Optimize your ad spend with precise media buying features.",
            features: ["Cost aggregation", "ROAS calculation", "Traffic source optimization", "Bid management"]
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Header */}
            <div className="bg-secondary text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">Solutions for Every Business</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Whether you are an ad network, affiliate, or advertiser, we have the specialized tools you need to grow.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 gap-12">
                    {solutions.map((item, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-shadow duration-300">
                            <div className="md:w-1/3 bg-slate-50 p-10 flex flex-col items-center justify-center text-center border-r border-slate-100">
                                <div className="mb-6 bg-white p-4 rounded-full shadow-sm">
                                    {item.icon}
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h2>
                                <p className="text-primary font-medium">{item.subtitle}</p>
                            </div>
                            <div className="md:w-2/3 p-10">
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    {item.description}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {item.features.map((feat, i) => (
                                        <div key={i} className="flex items-center text-slate-700 font-medium">
                                            <CheckCircle2 size={20} className="text-green-500 mr-3" />
                                            {feat}
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 pt-8 border-t border-slate-100">
                                    <button className="text-primary font-bold flex items-center hover:text-secondary transition-colors group">
                                        Learn more about {item.title} <ChevronRight size={20} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SolutionsPage;
