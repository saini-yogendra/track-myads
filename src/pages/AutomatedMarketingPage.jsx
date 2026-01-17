import React from 'react';
import { motion } from 'framer-motion';
import {
    CheckCircle,
    ArrowRight,
    Play,
    Zap,
    Settings,
    TrendingUp,
    ShieldCheck,
    Link as LinkIcon,
    RefreshCw,
    Smartphone,
    Database,
    Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AutomatedMarketingPage = () => {
    return (
        <div className="bg-white min-h-screen font-sans">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-block bg-yellow-100 border border-yellow-200 text-yellow-800 px-4 py-1.5 rounded-full text-sm font-bold mb-6"
                            >
                                #Cut Costs and Optimize CR
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6 font-display"
                            >
                                Automated Affiliate <br />
                                <span className="text-primary">Marketing Suite</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl"
                            >
                                Digital ads can be made even more efficient and cost-effective when using automation tools that boost revenue while lowering expenditures.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-col sm:flex-row gap-4 mb-10"
                            >
                                <Link to="/contact" className="bg-primary hover:bg-blue-600 text-white px-8 py-3.5 rounded-md font-bold text-lg transition-all shadow-lg shadow-blue-500/25 text-center flex items-center justify-center gap-2">
                                    Request Free Trial
                                </Link>
                                <Link to="/resources/case-studies" className="bg-white border hover:border-primary text-slate-600 hover:text-primary px-8 py-3.5 rounded-md font-bold text-lg transition-all text-center flex items-center justify-center gap-2">
                                    Customer Stories
                                </Link>
                            </motion.div>

                            <div className="flex gap-4 items-center">
                                {/* Placeholder reviews */}
                                <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Trusted by:</div>
                                {/* <div className="flex gap-2 text-slate-400 font-bold text-lg">
                                    <span>G2</span>
                                    <span>•</span>
                                    <span>Capterra</span>
                                    <span>•</span>
                                    <span>Crozdesk</span>
                                </div> */}
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="lg:w-1/2 w-full relative">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                                alt="Dashboard Visual"
                                className="rounded-2xl shadow-2xl relative z-10"
                            />
                            {/* Floating Bubbles */}
                            <div className="absolute top-10 -right-10 bg-white p-4 rounded-xl shadow-lg border border-slate-100 animate-bounce-slow hidden lg:block z-20">
                                <div className="flex items-center gap-3">
                                    <div className="bg-green-100 p-2 rounded-lg text-green-600"><TrendingUp size={20} /></div>
                                    <div>
                                        <div className="text-xs text-slate-500 font-bold">Auto Optimization</div>
                                        <div className="text-sm font-bold text-slate-900">Active</div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-xl shadow-lg border border-slate-100 animate-pulse-slow hidden lg:block z-20">
                                <div className="flex items-center gap-3">
                                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Settings size={20} /></div>
                                    <div>
                                        <div className="text-xs text-slate-500 font-bold">Easy to Set Up</div>
                                        <div className="text-sm font-bold text-slate-900">One-Click</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted Media Ticker */}
            <div className="border-y border-slate-100 bg-white py-8 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-center gap-8 md:gap-16 opacity-50 grayscale">
                        {/* Placeholder Logos */}
                        {["BusinessWire", "Financial Market", "Hindustan Times", "Martech Series"].map((logo, i) => (
                            <div key={i} className="font-bold text-xl text-slate-700">{logo}</div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Intro / What Is Section */}
            <section className="py-20 bg-white">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 mb-20">
                        <div>
                            <h2 className="text-3xl font-bold text-secondary mb-6">What Is Automated Affiliate Marketing Software?</h2>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                Instead of manually managing every area of any affiliate program, automate affiliate marketing software uses technology to do it for you. Marketers may use automation to set up campaigns, track performance, recruit partners, and payouts to them.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-secondary mb-6">Why Use Automated Affiliate Marketing Software in Your Affiliate Program?</h2>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                It assists affiliate managers in manually decreasing errors and provides real-time updates. It saves time and helps affiliates to focus on more vital elements of their organization, such as strategic planning and generating creative content.
                            </p>
                        </div>
                    </div>

                    {/* Efficiency Grid */}
                    <div className="bg-slate-50 rounded-3xl p-10 border border-slate-100">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-secondary mb-4">Track MyAds Automated Affiliate Marketing For Maximum Efficiency</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-10 text-center">
                            <div className="p-6">
                                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 text-primary">
                                    <Settings size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-3">Threshold Management</h3>
                                <p className="text-slate-600">Set limits for specific KPIs to keep your budgets under control. Define caps for conversions or clicks.</p>
                            </div>
                            <div className="p-6">
                                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 text-green-600">
                                    <TrendingUp size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-3">Multi Metrics</h3>
                                <p className="text-slate-600">Tracking leads to conversions, giving you the information you need to make informed decisions.</p>
                            </div>
                            <div className="p-6">
                                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 text-blue-600">
                                    <ShieldCheck size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-3">Trusted Source</h3>
                                <p className="text-slate-600">Protect your budget with proactive fraud detection. Validate traffic sources automatically.</p>
                            </div>
                        </div>
                        <div className="text-center mt-10">
                            <a href="#" className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
                                Learn More About Offer Automation <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Feature Blocks */}
            <div className="bg-slate-50 py-20">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

                    {/* Link Tester */}
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center gap-2 text-primary font-bold mb-2">
                                <LinkIcon size={20} /> <span>Link Validation</span>
                            </div>
                            <h2 className="text-4xl font-bold text-secondary mb-6">Link Tester</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Our intelligent Link Tester allows you to verify campaign URLs based on geolocation. Ensure your tracking links are working correctly before sending traffic.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <CheckCircle size={20} className="text-green-500" /> Custom URL Testing
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <CheckCircle size={20} className="text-green-500" /> Geo-Specific Validation
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <CheckCircle size={20} className="text-green-500" /> Broken Link Detection
                                </li>
                            </ul>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="flex items-center gap-2 text-secondary font-bold hover:text-primary transition-colors">
                                    <Play size={20} className="fill-current" /> Watch Demo
                                </button>
                                <span className="hidden sm:inline text-slate-300">|</span>
                                <a href="#" className="font-bold text-primary hover:underline">Learn More About Link Tester</a>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80" alt="Link Tester" className="rounded-2xl shadow-xl w-full" />
                        </div>
                    </div>

                    {/* Offer Sync */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center gap-2 text-primary font-bold mb-2">
                                <RefreshCw size={20} /> <span>Automation</span>
                            </div>
                            <h2 className="text-4xl font-bold text-secondary mb-6">Offer Sync</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Automate your campaign operations by syncing offers from over 150+ integrated partners. No more manual updates or copy-pasting data.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <CheckCircle size={20} className="text-green-500" /> 150+ API Partners Supported
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <CheckCircle size={20} className="text-green-500" /> Easy One-Click Setup
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <CheckCircle size={20} className="text-green-500" /> Auto-Sync Status & Payouts
                                </li>
                            </ul>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="flex items-center gap-2 text-secondary font-bold hover:text-primary transition-colors">
                                    <Play size={20} className="fill-current" /> Watch Demo
                                </button>
                                <span className="hidden sm:inline text-slate-300">|</span>
                                <a href="#" className="font-bold text-primary hover:underline">Learn More About Offer Sync</a>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Offer Sync" className="rounded-2xl shadow-xl w-full" />
                        </div>
                    </div>

                    {/* Smart Offer */}
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center gap-2 text-primary font-bold mb-2">
                                <Zap size={20} /> <span>Optimization</span>
                            </div>
                            <h2 className="text-4xl font-bold text-secondary mb-6">Smart Offer</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Maximize your revenue by creating a single smart link that redirects traffic to the best-performing offer based on user location, device, or other rules.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <CheckCircle size={20} className="text-green-500" /> Single-Click Smart Link
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <CheckCircle size={20} className="text-green-500" /> AI-Based Weightage Distribution
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <CheckCircle size={20} className="text-green-500" /> Traffic Optimization Logic
                                </li>
                            </ul>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="flex items-center gap-2 text-secondary font-bold hover:text-primary transition-colors">
                                    <Play size={20} className="fill-current" /> Watch Demo
                                </button>
                                <span className="hidden sm:inline text-slate-300">|</span>
                                <a href="#" className="font-bold text-primary hover:underline">Learn More About Smart Offer</a>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80" alt="Smart Offer" className="rounded-2xl shadow-xl w-full" />
                        </div>
                    </div>

                </div>
            </div>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-[1000px] mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-secondary mb-4">Frequently Asked Questions</h2>
                        <p className="text-slate-600">Got questions? We've got answers.</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            "How does automation improve affiliate marketing?",
                            "Can I automate payouts to my affiliates?",
                            "Does Track MyAds support custom fraud rules?",
                            "How many partners does Offer Sync support?",
                            "Is the Smart Offer feature included in all plans?"
                        ].map((q, i) => (
                            <div key={i} className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer bg-slate-50">
                                <div className="flex justify-between items-center font-bold text-lg text-slate-800">
                                    {q}
                                    <ArrowRight size={20} className="text-primary" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary to-blue-700 text-white text-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Try with 10 days free trial</h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        No credit card required
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contact" className="bg-white text-primary hover:bg-slate-100 px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-blue-900/20 transition-all">
                            Request Free Trial
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AutomatedMarketingPage;
