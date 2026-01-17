import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Globe, Users, Shield, Zap, Target, Layers, Cloud, Lock, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const AgenciesPage = () => {
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
                            <div className="inline-block bg-[#FFDC63] text-black px-4 py-2 rounded-tl-lg rounded-tr-lg rounded-br-lg text-sm font-bold mb-6">
                                #Make your Agencies Profitable
                            </div>

                            <h1 className="text-4xl lg:text-[52px] font-bold text-slate-900 leading-tight mb-6 font-display">
                                Agency Campaign Tracking Software
                            </h1>

                            <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                                Manage and scale your agency's performance marketing campaigns with advanced tracking, reporting, and automation tools.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                                <Link to="/contact" className="bg-[#1a2b4b] hover:bg-[#111c30] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2">
                                    Request Free Trial <ArrowRight size={20} />
                                </Link>
                                <Link to="/resources/case-studies" className="bg-transparent border border-[#1a2b4b] text-[#1a2b4b] hover:bg-slate-50 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center">
                                    Customer Stories
                                </Link>
                            </div>

                            {/* Social Proof Rows */}
                            <div className="space-y-6">
                                {/* <div className="flex flex-wrap gap-4 justify-center lg:justify-start opacity-60 grayscale">
                                    <div className="border border-slate-300 rounded px-2 py-1 text-xs font-bold">Capterra</div>
                                    <div className="border border-slate-300 rounded px-2 py-1 text-xs font-bold">G2 Crowd</div>
                                    <div className="border border-slate-300 rounded px-2 py-1 text-xs font-bold">Crozdesk</div>
                                </div> */}
                                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                    <div className="bg-slate-50 px-3 py-2 rounded text-slate-400 font-bold text-sm">Yahoo! Finance</div>
                                    <div className="bg-slate-50 px-3 py-2 rounded text-slate-400 font-bold text-sm">Businesswire</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative flex justify-center"
                        >
                            <div className="absolute top-0 right-0 w-full h-full bg-purple-100 rounded-full blur-3xl opacity-30 -z-10"></div>

                            <div className="relative">
                                {/* Abstract UI Elements */}
                                <div className="absolute top-10 -left-10 bg-white p-3 rounded-lg shadow-lg z-20 animate-bounce-slow hidden md:block">
                                    <div className="text-xs font-bold text-slate-800">MMP Integration</div>
                                </div>
                                <div className="absolute bottom-20 -right-5 bg-white p-3 rounded-lg shadow-lg z-20 animate-float hidden md:block">
                                    <div className="text-xs font-bold text-slate-800">Personalized Services</div>
                                </div>

                                <img
                                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                    alt="Agency Growth"
                                    className="rounded-[3rem] shadow-2xl relative z-10 w-full max-w-md mx-auto object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* MMP & Direct Advertiser Integration */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 flex justify-center">
                            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-sm w-full relative">
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-blue-100 p-3 rounded-xl"><Globe className="w-6 h-6 text-blue-600" /></div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Probabilistic Attribution</h3>
                                            <p className="text-sm text-slate-500">Advanced tracking without cookies.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-purple-100 p-3 rounded-xl"><Layers className="w-6 h-6 text-purple-600" /></div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Integration Templates</h3>
                                            <p className="text-sm text-slate-500">One-click setup for major networks.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-green-100 p-3 rounded-xl"><Target className="w-6 h-6 text-green-600" /></div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">SKAdNetwork Attribution</h3>
                                            <p className="text-sm text-slate-500">Privacy-compliant iOS tracking.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-block bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm font-bold mb-4">
                                Connect Everywhere
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-display">
                                MMP & Direct Advertiser Integration
                            </h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Seamlessly integrate with Mobile Measurement Partners (MMPs) and direct advertisers. Track MyAds provides ready-to-use templates and S2S connectivity to ensure you never miss a conversion.
                            </p>
                            <Link to="/services/integration" className="text-[#1a2b4b] font-bold hover:underline flex items-center gap-2">
                                View Integrations <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Audience Targeting Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 font-display">
                            Precise Audience Targeting
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Ensure your offers reach the right audience with granular targeting options.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-[#f8f9fa] p-8 rounded-2xl hover:shadow-lg transition-shadow">
                            <Globe className="w-12 h-12 text-blue-500 mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Geo & Device Targeting</h3>
                            <p className="text-slate-600">Target specific countries, regions, device types, and operating systems.</p>
                        </div>
                        <div className="bg-[#f8f9fa] p-8 rounded-2xl hover:shadow-lg transition-shadow">
                            <Server className="w-12 h-12 text-purple-500 mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 mb-3">ISP & Carrier Targeting</h3>
                            <p className="text-slate-600">Filter traffic based on specific Internet Service Providers and mobile carriers.</p>
                        </div>
                        <div className="bg-[#f8f9fa] p-8 rounded-2xl hover:shadow-lg transition-shadow">
                            <Users className="w-12 h-12 text-green-500 mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Language Targeting</h3>
                            <p className="text-slate-600">Ensure users land on pages in their local language for higher conversion rates.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security & Scalability Section */}
            <section className="py-20 bg-[#f0f7ff]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-[#1a2b4b] rounded-full flex items-center justify-center text-white mb-4 shadow-lg">
                                <Shield className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-slate-900">Fraud Fender</h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-[#1a2b4b] rounded-full flex items-center justify-center text-white mb-4 shadow-lg">
                                <Lock className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-slate-900">Click Spamming Defender</h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-[#1a2b4b] rounded-full flex items-center justify-center text-white mb-4 shadow-lg">
                                <CheckCircle className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-slate-900">Traffic Source Validator</h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-[#1a2b4b] rounded-full flex items-center justify-center text-white mb-4 shadow-lg">
                                <Cloud className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-slate-900">99.99% Uptime</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Automation Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-display">
                                Automation for Scale
                            </h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Save time and reduce manual errors with our powerful automation suite.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-4">
                                    <div className="bg-orange-100 p-2 rounded-lg"><Zap className="w-5 h-5 text-orange-600" /></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Smart Offer</h4>
                                        <p className="text-sm text-slate-500">Auto-optimize traffic to the best performing offers.</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="bg-blue-100 p-2 rounded-lg"><CheckCircle className="w-5 h-5 text-blue-600" /></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Link Tester</h4>
                                        <p className="text-sm text-slate-500">Automatically check for broken links and pause offers.</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="bg-green-100 p-2 rounded-lg"><Globe className="w-5 h-5 text-green-600" /></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">White Label</h4>
                                        <p className="text-sm text-slate-500">Fully branded dashboard for your affiliates.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="flex justify-center">
                            <div className="bg-slate-50 p-10 rounded-[3rem] w-full max-w-md border-2 border-slate-100 border-dashed">
                                <Zap className="w-48 h-48 text-orange-400 mx-auto opacity-80" strokeWidth={0.5} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 font-display">
                            Agencies Trust Track MyAds
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <p className="text-slate-600 italic mb-6">"Track MyAds gave us the flexibility we needed to manage hundreds of campaigns across different verticals. The automation tools are a lifesaver."</p>
                            <div className="font-bold text-slate-900">CEO, Adzicon</div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <p className="text-slate-600 italic mb-6">"Reliability was our biggest concern, and Track MyAds delivered. We haven't had a single tracking issue since we migrated."</p>
                            <div className="font-bold text-slate-900">Director, Advivify Media</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto relative overflow-hidden">
                        <div className="relative z-10 text-center lg:text-left">
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-display">
                                Try with 10 days free trial
                            </h2>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-slate-600 justify-center lg:justify-start">
                                    <CheckCircle className="w-5 h-5 text-green-500" /> No credit card required
                                </li>
                            </ul>
                        </div>
                        <div className="relative z-10 w-full lg:w-auto">
                            <Link to="/contact" className="block w-full sm:w-auto text-center bg-[#1a2b4b] hover:bg-[#111c30] text-white px-10 py-5 rounded-xl font-bold text-lg shadow-xl transition-all hover:scale-105">
                                Request Free Trial
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AgenciesPage;
