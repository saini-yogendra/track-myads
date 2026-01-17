import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Smartphone, Globe, Shield, Zap, BarChart2, Radio, Server, Activity, Lock, Target, PieChart, Sliders } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileVASPage = () => {
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
                            <div className="inline-block bg-[#FFD700] text-black px-4 py-2 rounded-tl-lg rounded-tr-lg rounded-br-lg text-sm font-bold mb-6 shadow-sm">
                                #Technology for Multi-channel Business Development
                            </div>

                            <h1 className="text-4xl lg:text-[50px] font-bold text-slate-900 leading-tight mb-6 font-display">
                                Mobile VAS Tracking Software Solution
                            </h1>

                            <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                                To unify marketing activities across several carriers and applications to provide personalized content and improve efficiency.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                                <Link to="/contact" className="bg-[#1a2b4b] hover:bg-[#111c30] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2">
                                    Request Free Trial <ArrowRight size={20} />
                                </Link>
                                <Link to="/resources/case-studies" className="bg-transparent border border-[#1a2b4b] text-[#1a2b4b] hover:bg-slate-50 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center">
                                    Customer Stories
                                </Link>
                            </div>

                            {/* Trust Badges */}
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start opacity-70 grayscale mb-8">
                                <div className="border border-slate-300 rounded px-2 py-1 text-xs font-bold">Capterra</div>
                                <div className="border border-slate-300 rounded px-2 py-1 text-xs font-bold">G2 High Performer</div>
                                <div className="border border-slate-300 rounded px-2 py-1 text-xs font-bold">Crozdesk</div>
                                <div className="border border-slate-300 rounded px-2 py-1 text-xs font-bold">OfferVault</div>
                            </div>

                            {/* Logos Grid Area */}
                            <div className="flex flex-wrap gap-6 items-center justify-center lg:justify-start opacity-50 grayscale">
                                <span className="text-xs font-bold font-display uppercase tracking-wider">Featured In:</span>
                                <div className="text-sm font-bold">Hindustan Times</div>
                                <div className="text-sm font-bold">ANI</div>
                                <div className="text-sm font-bold">Martech Series</div>
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
                                <div className="absolute top-10 -left-5 bg-white p-3 rounded-lg shadow-lg z-20 animate-bounce-slow hidden md:block border-l-4 border-orange-500">
                                    <div className="flex items-center gap-2">
                                        <Radio className="w-4 h-4 text-orange-500" />
                                        <div className="text-xs font-bold text-slate-800">Operator Targeting</div>
                                    </div>
                                </div>
                                <div className="absolute bottom-20 -right-5 bg-white p-3 rounded-lg shadow-lg z-20 animate-float hidden md:block border-l-4 border-[#fe8023]">
                                    <div className="flex items-center gap-2">
                                        <Smartphone className="w-4 h-4 text-[#fe8023]" />
                                        <div className="text-xs font-bold text-slate-800">Direct Carrier Billing</div>
                                    </div>
                                </div>

                                <img
                                    src="https://images.unsplash.com/photo-1512428559087-560fa5ce7d02?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                    alt="Mobile VAS"
                                    className="rounded-[3rem] shadow-2xl relative z-10 w-full max-w-md mx-auto object-cover h-[550px]"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Dynamic Payout Models */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 flex justify-center">
                            <div className="bg-orange-50 p-10 rounded-3xl w-full max-w-md border border-orange-100 relative">
                                <div className="absolute top-6 right-6 bg-white p-2 rounded-full shadow-sm">
                                    <Zap className="w-6 h-6 text-orange-500" />
                                </div>
                                <div className="space-y-6">
                                    <div className="bg-white p-4 rounded-xl shadow-sm">
                                        <h3 className="font-bold text-slate-900 mb-1">CPC Model</h3>
                                        <p className="text-xs text-slate-500">Cost Per Click pricing configuration.</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl shadow-sm">
                                        <h3 className="font-bold text-slate-900 mb-1">CPA Model</h3>
                                        <p className="text-xs text-slate-500">Cost Per Action / Acquisition.</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl shadow-sm">
                                        <h3 className="font-bold text-slate-900 mb-1">Churn Rate</h3>
                                        <p className="text-xs text-slate-500">Monitor subscriber drop-off.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-display">
                                Dynamic Payout Models
                            </h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Track MyAds supports multiple pricing models essential for VAS. Configure payouts based on clicks (CPC) or specific actions (CPA/CPS) and keep a close eye on subscriber churn rates to maintain profitability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Audience Targeting Grid */}
            <section className="py-24 bg-white border-t border-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 font-display">
                            Precise Audience Targeting
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Granular controls to ensure your VAS offers reach the right users on the right networks.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-[#f8fafc] p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-slate-100 group">
                            <Radio className="w-12 h-12 text-[#fe8023] mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Operator Targeting</h3>
                            <p className="text-slate-600">Filter traffic by specific Mobile Network Operators (MNOs) / ISPs. Essential for carrier billing offers.</p>
                        </div>
                        <div className="bg-[#f8fafc] p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-slate-100 group">
                            <Smartphone className="w-12 h-12 text-purple-500 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Device Targeting</h3>
                            <p className="text-slate-600">Serve ads only to compatible devices. Filter by OS version, brand, or model.</p>
                        </div>
                        <div className="bg-[#f8fafc] p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-slate-100 group">
                            <Globe className="w-12 h-12 text-green-500 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Geo Targeting</h3>
                            <p className="text-slate-600">Pinpoint your audience by country, region, or city to maximize conversion rates.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fraud Prevention */}
            <section className="py-20 bg-[#f0f9ff]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 font-display">
                            Advanced Fraud Prevention
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <Shield className="w-12 h-12 text-red-500 mx-auto mb-4" />
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Click Spamming Defender</h3>
                            <p className="text-sm text-slate-600">Blocks fraudulent click flooding.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <Lock className="w-12 h-12 text-red-500 mx-auto mb-4" />
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Fraud Fender</h3>
                            <p className="text-sm text-slate-600">Real-time IP and device analysis.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <Activity className="w-12 h-12 text-red-500 mx-auto mb-4" />
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Traffic Source Validator</h3>
                            <p className="text-sm text-slate-600">Ensures traffic quality compliance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capping Rules & Automation */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-display">
                                Intelligent Capping Rules
                            </h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Control your budget and exposure with precise capping limits.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="bg-orange-100 p-2 rounded-lg mt-1"><Target className="w-5 h-5 text-[#fe8023]" /></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Click & Conversion Capping</h4>
                                        <p className="text-sm text-slate-500">Set limits on total clicks or conversions per hour/day.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-2 rounded-lg mt-1"><PieChart className="w-5 h-5 text-green-600" /></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Budget Capping</h4>
                                        <p className="text-sm text-slate-500">Automatically pause offers when budget is exhausted.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-display">
                                Powerful Automation
                            </h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Automate routine tasks and optimize performance 24/7.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="bg-purple-100 p-2 rounded-lg mt-1"><Zap className="w-5 h-5 text-purple-600" /></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Smart Offer</h4>
                                        <p className="text-sm text-slate-500">Algorithmically route traffic to the best performing offer.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-orange-100 p-2 rounded-lg mt-1"><Sliders className="w-5 h-5 text-orange-600" /></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Offer Automation</h4>
                                        <p className="text-sm text-slate-500">Auto-update status based on performance metrics.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Multi Metrics Analytics */}
            <section className="py-24 bg-white border-t border-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-display">
                        Multi Metrics Analytics
                    </h2>
                    <p className="text-slate-600 text-lg mb-12 leading-relaxed">
                        Deep dive into your data. Track carrier logs, analyze geo-performance, and generate custom KPI reports to stay ahead of the competition.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 font-bold text-slate-700">Carrier Logs</div>
                        <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 font-bold text-slate-700">Geo Analytics</div>
                        <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 font-bold text-slate-700">KPI Report</div>
                        <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 font-bold text-slate-700">CR Metrics</div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-200 p-12 lg:p-16 flex flex-col items-center text-center relative overflow-hidden">

                        <div className="relative z-10 max-w-2xl">
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-display">Try with 10 days free trial</h2>
                            <ul className="space-y-3 mb-10">
                                <li className="flex items-center gap-3 text-slate-600 justify-center">
                                    <CheckCircle className="w-5 h-5 text-green-500" /> No credit card required
                                </li>
                            </ul>
                            <Link to="/contact" className="inline-block bg-[#1a2b4b] text-white hover:bg-[#111c30] px-12 py-5 rounded-xl font-bold text-lg shadow-xl transition-all hover:scale-105 whitespace-nowrap">
                                Request Free Trial
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MobileVASPage;
