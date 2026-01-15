import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Puzzle, Globe, ShoppingBag, Layers, Smartphone, Share2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const IntegrationPage = () => {
    return (
        <div className="bg-white min-h-screen font-body">

            {/* Hero Section */}
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center lg:text-left"
                        >
                            <div className="inline-block bg-[#F8D568] text-black px-4 py-2 rounded-full text-xs font-bold mb-6 shadow-sm">
                                #Connect, automate, and Optimize
                            </div>

                            <h1 className="text-4xl lg:text-[56px] font-bold text-slate-900 leading-tight mb-6 font-display">
                                Integrations
                            </h1>

                            <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                                Developing integrations continuously is something Track MyAds believes in. Collaboration and support for mutual clients result in a win-win situation.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                                <Link to="/contact" className="bg-[#1D2B4F] hover:bg-[#111c30] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg flex items-center justify-center gap-2">
                                    Request Free Trial <ArrowRight size={20} />
                                </Link>
                                <Link to="/resources/case-studies" className="bg-transparent border border-[#111827] text-[#111827] hover:bg-slate-50 px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center">
                                    Customer Stories
                                </Link>
                            </div>

                            {/* Trust Badges */}
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start opacity-70 grayscale mb-6">
                                <div className="border border-slate-300 rounded px-2 py-1 text-xs font-bold">Capterra</div>
                                <div className="border border-slate-300 rounded px-2 py-1 text-xs font-bold">G2 Best Support</div>
                                <div className="border border-slate-300 rounded px-2 py-1 text-xs font-bold">Crozdesk</div>
                                <div className="border border-slate-300 rounded px-2 py-1 text-xs font-bold">OfferVault</div>
                            </div>
                        </motion.div>

                        {/* Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative flex justify-center"
                        >
                            <div className="relative">
                                {/* Decorative Background */}
                                <div className="absolute inset-0 bg-blue-50 rounded-[3rem] transform rotate-3 -z-10 border-2 border-dashed border-blue-200"></div>

                                {/* Floating UI Elements */}
                                <div className="absolute top-20 right-0 bg-white p-3 rounded-lg shadow-lg z-20 animate-bounce-slow hidden md:block">
                                    <div className="flex items-center gap-2">
                                        <Puzzle className="w-5 h-5 text-orange-500" />
                                        <span className="text-xs font-bold text-slate-900">API Connected</span>
                                    </div>
                                </div>
                                <div className="absolute bottom-32 left-0 bg-white p-3 rounded-lg shadow-lg z-20 animate-float hidden md:block">
                                    <div className="flex items-center gap-2">
                                        <Zap className="w-5 h-5 text-yellow-500" />
                                        <span className="text-xs font-bold text-slate-900">Real-time Sync</span>
                                    </div>
                                </div>

                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                    alt="Integration Flowchart"
                                    className="rounded-[3rem] shadow-2xl relative z-10 w-full max-w-md mx-auto object-cover h-[500px]"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Partner Categories */}

            {/* 1. MMP Partners */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                            <Smartphone className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 font-display">
                            Prominent MMP Partners
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Seamlessly integrate with leading Mobile Measurement Partners for accurate attribution.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
                        {["AppsFlyer", "Adjust", "Singular", "Branch", "Kochava"].map((partner) => (
                            <div key={partner} className="bg-white px-8 py-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center min-w-[180px] hover:shadow-md transition-shadow">
                                <span className="font-bold text-slate-700 text-lg">{partner}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. eCommerce Partners */}
            <section className="py-20 bg-[#f8fafc] border-t border-slate-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                            <ShoppingBag className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 font-display">
                            Leading eCommerce Partners
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Connect your store directly to Track MyAds for real-time sales tracking.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
                        {["Zoho Commerce", "Wix", "PrestaShop", "Miva", "SendOwl", "X-Cart", "Shopify", "WooCommerce"].map((partner) => (
                            <div key={partner} className="bg-white px-8 py-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center min-w-[180px] hover:shadow-md transition-shadow">
                                <span className="font-bold text-slate-700 text-lg">{partner}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Ad Platform Partners */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-600">
                            <Share2 className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 font-display">
                            Top Ad Platform Partners
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Automate your campaign data flow with major advertising networks.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
                        {["Google Ads", "Facebook Ads", "LinkedIn Ads", "TikTok Ads", "Instagram Ads"].map((partner) => (
                            <div key={partner} className="bg-white px-8 py-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center min-w-[180px] hover:shadow-md transition-shadow">
                                <span className="font-bold text-slate-700 text-lg">{partner}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="bg-[#1D2B4F] rounded-[2rem] shadow-2xl p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden text-white">

                        {/* Decorative */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                        <div className="relative z-10 text-center md:text-left">
                            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start opacity-80">
                                <Layers className="w-5 h-5" />
                                <span className="font-bold tracking-wider uppercase text-sm">Unified Platform</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">Start your 14 days free trial</h2>

                            <div className="flex flex-wrap gap-6 text-blue-200 font-medium justify-center md:justify-start">
                                <span className="flex items-center gap-2"><CheckCircle className="text-blue-400" size={20} /> Trusted by 850+ Companies</span>
                                <span className="flex items-center gap-2"><CheckCircle className="text-blue-400" size={20} /> Support 24/7</span>
                            </div>
                        </div>

                        <div className="relative z-10">
                            <Link to="/contact" className="inline-block bg-white text-[#1D2B4F] hover:bg-slate-100 px-12 py-5 rounded-full font-bold text-lg shadow-xl transition-all hover:scale-105 whitespace-nowrap">
                                Request Free Trial
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IntegrationPage;
