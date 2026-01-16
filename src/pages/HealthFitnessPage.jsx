import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Smartphone, Globe, Shield, Zap, BarChart2, Radio, Server, Activity, Lock, Target, PieChart, Sliders, Heart, UserPlus, Layers, MapPin, Tablet, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

const HealthFitnessPage = () => {
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
                            <div className="inline-block bg-[#F8D568] text-black px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-sm">
                                #Get a Complete Insight of Every Lead
                            </div>

                            <h1 className="text-4xl lg:text-[46px] font-bold text-slate-900 leading-[1.15] mb-6 font-display">
                                Health & <span className="text-[#0046af]">Fitness Campaigns</span> Tracking Solution
                            </h1>

                            <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                                Manage affiliates with fitness-interested audiences to increase subscriptions and engagement. Track every step of the user journey from click to conversion.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                                <Link to="/contact" className="bg-[#0046af] hover:bg-[#003690] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2">
                                    Request Free Trial <ArrowRight size={20} />
                                </Link>
                                <Link to="/resources/case-studies" className="bg-transparent border border-[#0046af] text-[#0046af] hover:bg-slate-50 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center">
                                    Customer Stories
                                </Link>
                            </div>

                            {/* Trust Badges */}
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start opacity-70 grayscale mb-8">
                                <div className="border border-slate-300 rounded px-2 py-1 text-xs font-bold">Capterra</div>
                                <div className="border border-slate-300 rounded px-2 py-1 text-xs font-bold">G2 Best Support</div>
                                <div className="border border-slate-300 rounded px-2 py-1 text-xs font-bold">Crozdesk</div>
                                <div className="border border-slate-300 rounded px-2 py-1 text-xs font-bold">OfferVault</div>
                            </div>

                            {/* Logos Area */}
                            <div className="flex flex-wrap gap-6 items-center justify-center lg:justify-start opacity-50 grayscale">
                                <div className="text-sm font-bold">Hindustan Times</div>
                                <div className="text-sm font-bold">MarTech Series</div>
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
                                {/* Abstract UI Elements */}
                                <div className="absolute top-20 -left-10 bg-white p-3 rounded-xl shadow-lg z-20 animate-bounce-slow hidden md:block">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-red-100 p-2 rounded-lg"><Heart className="w-5 h-5 text-red-500" /></div>
                                        <div>
                                            <div className="text-xs font-bold text-slate-500">Health</div>
                                            <div className="text-sm font-bold text-slate-900">Campaigns</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-32 -right-5 bg-white p-3 rounded-xl shadow-lg z-20 animate-float hidden md:block">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-green-100 p-2 rounded-lg"><Activity className="w-5 h-5 text-green-500" /></div>
                                        <div>
                                            <div className="text-xs font-bold text-slate-500">Fitness</div>
                                            <div className="text-sm font-bold text-slate-900">Tracking</div>
                                        </div>
                                    </div>
                                </div>

                                <img
                                    src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                    alt="Health and Fitness Tracking"
                                    className="rounded-[3rem] shadow-2xl relative z-10 w-full max-w-md mx-auto object-cover h-[550px]"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Pricing Models */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 flex justify-center">
                            <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md border border-slate-100">
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0046af]/5 border border-[#0046af]/10">
                                        <div className="bg-white p-2 rounded-xl shadow-sm"><PieChart className="w-8 h-8 text-[#0046af]" /></div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg">Revenue Share</h3>
                                            <p className="text-sm text-slate-600 mt-1">Manage affiliate commissions based on a shared percentage of total sales revenue.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-green-50 border border-green-100">
                                        <div className="bg-white p-2 rounded-xl shadow-sm"><UserPlus className="w-8 h-8 text-green-600" /></div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg">CPL & CPI</h3>
                                            <p className="text-sm text-slate-600 mt-1">Fixed payouts for every qualified lead (CPL) or app installation (CPI).</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-display">
                                Cost Per Lead & Sale, App Install
                            </h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Widely used pricing models in the fitness industry to track sales and app installations. Track MyAds provides the flexibility to switch between or combine these models for different campaigns to maximize ROI.
                            </p>
                            <Link to="/pricing" className="text-[#0046af] font-bold hover:underline flex items-center gap-2">
                                Explore Pricing Models <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Audience Targeting Grid */}
            <section className="py-24 bg-white border-t border-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 font-display">
                            Audience Targeting
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Reach health-conscious consumers with precision using our advanced targeting filters.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-3xl bg-[#f8fafc] border border-slate-100 hover:shadow-lg transition-all text-center group">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <Globe className="w-8 h-8 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Geo Targeting</h3>
                            <p className="text-slate-600 text-sm">Target specific cities or regions where your fitness centers or products are available.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-[#f8fafc] border border-slate-100 hover:shadow-lg transition-all text-center group">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <Smartphone className="w-8 h-8 text-purple-500" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Device Targeting</h3>
                            <p className="text-slate-600 text-sm">Optimize your ads for mobile, tablet, or desktop users depending on their behavior.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-[#f8fafc] border border-slate-100 hover:shadow-lg transition-all text-center group">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <Monitor className="w-8 h-8 text-green-500" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">OS Targeting</h3>
                            <p className="text-slate-600 text-sm">Specifically target iOS users regarding health apps or Android users for fitness trackers.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dynamic Product Tracking */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-display">
                            Dynamic Product Tracking & Referral
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                            Advanced features designed for multi-product health stores and supplement brands.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors">
                            <Layers className="w-10 h-10 text-blue-400 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Multiple Landing Pages</h3>
                            <p className="text-slate-400 text-sm">Test different product angles with rotation.</p>
                        </div>
                        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors">
                            <Radio className="w-10 h-10 text-blue-400 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Prelanding</h3>
                            <p className="text-slate-400 text-sm">Warm up traffic with advertorials.</p>
                        </div>
                        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors">
                            <MapPin className="w-10 h-10 text-blue-400 mb-4" />
                            <h3 className="text-xl font-bold mb-2">DeepLink</h3>
                            <p className="text-slate-400 text-sm">Direct users to specific product pages.</p>
                        </div>
                        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors">
                            <UserPlus className="w-10 h-10 text-blue-400 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Referral Program</h3>
                            <p className="text-slate-400 text-sm">Let affiliates recruit others.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security & Optimization */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Fraud Detection */}
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-red-500 pl-4 font-display">Fraud Prevention</h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-[#fff5f5] p-6 rounded-2xl border border-red-100">
                                    <Shield className="w-8 h-8 text-red-500 mb-4" />
                                    <h4 className="font-bold text-slate-900 mb-2">Fraud Fender</h4>
                                    <p className="text-sm text-slate-600">IP/ISP filtering to block bots.</p>
                                </div>
                                <div className="bg-[#fff5f5] p-6 rounded-2xl border border-red-100">
                                    <Activity className="w-8 h-8 text-red-500 mb-4" />
                                    <h4 className="font-bold text-slate-900 mb-2">Risk Monitor</h4>
                                    <p className="text-sm text-slate-600">Analyze CTIT for installs.</p>
                                </div>
                            </div>
                        </div>

                        {/* Budget Capping */}
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-green-500 pl-4 font-display">Budget Optimization</h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-[#f0fdf4] p-6 rounded-2xl border border-green-100">
                                    <Target className="w-8 h-8 text-green-500 mb-4" />
                                    <h4 className="font-bold text-slate-900 mb-2">Click Capping</h4>
                                    <p className="text-sm text-slate-600">Limit conversions per hour/day.</p>
                                </div>
                                <div className="bg-[#f0fdf4] p-6 rounded-2xl border border-green-100">
                                    <PieChart className="w-8 h-8 text-green-500 mb-4" />
                                    <h4 className="font-bold text-slate-900 mb-2">Budget Capping</h4>
                                    <p className="text-sm text-slate-600">Stop spend when limit reached.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advanced Analytics */}
            <section className="py-24 bg-[#f8fafc]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-display">
                        Tracking & Analytics
                    </h2>
                    <p className="text-slate-600 text-lg mb-12 leading-relaxed">
                        Data-driven decisions lead to better fitness results - and better marketing results.
                    </p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
                            <Zap className="w-10 h-10 text-slate-400 mb-3" />
                            <div className="font-bold text-slate-700">Campaign Logic</div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
                            <Target className="w-10 h-10 text-slate-400 mb-3" />
                            <div className="font-bold text-slate-700">Targeting Profile</div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
                            <Globe className="w-10 h-10 text-slate-400 mb-3" />
                            <div className="font-bold text-slate-700">Geo-Growth</div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
                            <Server className="w-10 h-10 text-slate-400 mb-3" />
                            <div className="font-bold text-slate-700">Postback Logs</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="bg-[#0046af] rounded-[2rem] shadow-2xl p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden text-white">

                        {/* Decorative */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                        <div className="relative z-10 text-center md:text-left">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">Try with 10 days free trial</h2>
                            <div className="flex flex-wrap gap-6 text-blue-200 font-medium justify-center md:justify-start">
                                <span className="flex items-center gap-2"><CheckCircle className="text-blue-400" size={20} /> No credit card required</span>
                            </div>
                        </div>

                        <div className="relative z-10">
                            <Link to="/contact" className="inline-block bg-white text-[#0046af] hover:bg-slate-100 px-12 py-5 rounded-xl font-bold text-lg shadow-xl transition-all hover:scale-105 whitespace-nowrap">
                                Request Free Trial
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HealthFitnessPage;
