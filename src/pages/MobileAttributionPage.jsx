import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Shield, Radar, BarChart2, CheckCircle, Plus, Minus, Cloud, Code, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileAttributionPage = () => {
    const [openFAQ, setOpenFAQ] = useState(0);

    const faqs = [
        {
            q: "What is Mobile Attribution?",
            a: "Mobile attribution is the process of tracking which marketing campaigns are driving app installs and post-install events. It helps marketers understand the user journey and optimize their ad spend."
        },
        {
            q: "Why is Mobile Attribution important?",
            a: "It provides visibility into the effectiveness of your marketing channels. Without it, you wouldn't know which ads are generating valuable users versus those that are wasting your budget."
        },
        {
            q: "Does Track MyAds support iOS tracking?",
            a: "Yes, Track MyAds is fully compatible with iOS tracking requirements, including support for SKAdNetwork to ensure accurate attribution while respecting user privacy."
        },
        {
            q: "How does it combat mobile fraud?",
            a: "Our platform includes advanced fraud detection tools that monitor for click spamming, injection, and device farming to ensure your data is clean and your budget is protected."
        },
        {
            q: "Can I track in-app events?",
            a: "Absolutely. You can track a wide range of in-app events such as registrations, purchases, level completions, and more to measure user engagement and LTV."
        }
    ];

    return (
        <div className="bg-white min-h-screen font-body">

            {/* Hero Section */}
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden relative">
                {/* Decorative Background Elements */}
                <div className="absolute right-0 top-20 w-1/2 h-full hidden lg:block overflow-hidden pointer-events-none">
                    {/* Large Orange Shape */}
                    <div className="absolute right-[-10%] top-[10%] w-[90%] h-[85%] bg-[#FFF8E1] rounded-l-[100px] transform rotate-[-2deg] z-0"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center lg:text-left"
                        >
                            <div className="inline-block bg-[#FDC033] text-slate-900 px-4 py-2 rounded-lg text-sm font-bold mb-6">
                                #Tracking Success of Your Mobile Apps
                            </div>

                            <h1 className="text-4xl lg:text-[56px] font-bold text-slate-900 leading-[1.1] mb-6 font-display">
                                Mobile Attribution Platform
                            </h1>

                            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Gain granular visibility into your mobile app campaigns. Track installs, in-app events, and user journeys across all touchpoints to maximize your ROI.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link to="/contact" className="bg-[#0047FF] hover:bg-[#0039CC] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2">
                                    Request Free Trial <ArrowRight size={20} />
                                </Link>
                                <Link to="/resources/case-studies" className="bg-white border-2 border-slate-900 hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center">
                                    Customer Stories
                                </Link>
                            </div>
                        </motion.div>

                        {/* Hero Image / Visual */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative flex justify-center"
                        >
                            <div className="relative">
                                {/* Abstract Icons Floating */}
                                <Smartphone className="absolute top-0 -left-10 text-[#0047FF] w-12 h-12 animate-bounce-slow" />
                                <Radar className="absolute bottom-10 -right-5 text-[#FDC033] w-16 h-16 animate-pulse" />

                                <img
                                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                    alt="Mobile Attribution"
                                    className="rounded-[3rem] shadow-2xl relative z-10 w-full max-w-md mx-auto object-cover h-[500px]"
                                />

                                {/* Floating Feature Badge */}
                                <div className="absolute top-20 -right-10 bg-white p-4 rounded-xl shadow-xl z-20 animate-float hidden md:block">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-blue-100 p-2 rounded-lg">
                                            <Cloud className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-900">MMP Integration</div>
                                            <div className="text-xs text-slate-500">Seamless Sync</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute bottom-20 -left-10 bg-white p-4 rounded-xl shadow-xl z-20 animate-float-delayed hidden md:block">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-green-100 p-2 rounded-lg">
                                            <BarChart2 className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-900">In-App Tracking</div>
                                            <div className="text-xs text-slate-500">Real-time Events</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Feature 1: Android SDK */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2 font-display">
                                Android SDK
                            </h2>
                            <p className="text-xl text-slate-400 font-light mb-6">for seamless tracking for Android devices.</p>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Our lightweight SDK is easy to integrate and provides accurate tracking for installs and events on Android devices. It's built to be robust, secure, and respectful of user battery and data.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-slate-700">
                                    <div className="bg-green-100 p-1 rounded-full"><CheckCircle className="w-4 h-4 text-green-600" /></div>
                                    Google Play Referrer Support
                                </li>
                                <li className="flex items-center gap-3 text-slate-700">
                                    <div className="bg-green-100 p-1 rounded-full"><CheckCircle className="w-4 h-4 text-green-600" /></div>
                                    OAID Support
                                </li>
                            </ul>
                        </div>
                        <div className="flex justify-center">
                            <div className="bg-slate-50 p-10 rounded-3xl w-full max-w-md flex items-center justify-center">
                                <Code className="w-40 h-40 text-green-500" strokeWidth={0.5} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 2: Fraud Prevention */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 flex justify-center">
                            <div className="bg-white p-10 rounded-3xl w-full max-w-md flex flex-col items-center justify-center gap-4 shadow-lg">
                                <Lock className="w-32 h-32 text-red-500" strokeWidth={0.5} />
                                <div className="flex gap-4">
                                    <Shield className="w-8 h-8 text-slate-400" />
                                    <Shield className="w-8 h-8 text-slate-400" />
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2 font-display">
                                Fraud Prevention
                            </h2>
                            <p className="text-xl text-slate-400 font-light mb-6">Detecting and Preventing Mobile Attribution Fraud</p>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Don't let fraudsters drain your budget. We actively monitor and block suspicious activities like click injection, SDK spoofing, and install farms.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-slate-700">
                                    <div className="bg-red-100 p-1 rounded-full"><Shield className="w-4 h-4 text-red-600" /></div>
                                    Real-time Blocking
                                </li>
                                <li className="flex items-center gap-3 text-slate-700">
                                    <div className="bg-red-100 p-1 rounded-full"><Shield className="w-4 h-4 text-red-600" /></div>
                                    Detailed Fraud Reports
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 3: MMP Integration */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2 font-display">
                                MMP Integration
                            </h2>
                            <p className="text-xl text-slate-400 font-light mb-6">accurate attribution with Mobile Measurement Partners.</p>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Already using an MMP like AppsFlyer, Adjust, or Branch? No problem. Track MyAds integrates seamlessly with leading MMPs to consolidate your data in one place.
                            </p>
                            <Link to="/services/integration" className="text-blue-600 font-bold hover:underline flex items-center gap-2">
                                View all integrations <ArrowRight size={16} />
                            </Link>
                        </div>
                        <div className="flex justify-center">
                            <div className="bg-blue-50 p-10 rounded-3xl w-full max-w-md flex items-center justify-center">
                                <Cloud className="w-40 h-40 text-blue-500" strokeWidth={0.5} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 4: In-app events Tracking */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 flex justify-center">
                            <div className="bg-white p-10 rounded-3xl w-full max-w-md flex items-center justify-center shadow-lg">
                                <BarChart2 className="w-40 h-40 text-purple-500" strokeWidth={0.5} />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2 font-display">
                                In-app events Tracking
                            </h2>
                            <p className="text-xl text-slate-400 font-light mb-6">to Analyze user interactions within the app.</p>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Go beyond installs. Track post-install events to understand user engagement, retention, and lifetime value. Optimize your campaigns for quality, not just quantity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-display">
                                Frequently Asked Questions
                            </h2>
                            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#0047FF] hover:bg-[#0039CC] text-white px-6 py-3 rounded-lg font-bold transition-all shadow-md">
                                Get Started <ArrowRight size={18} />
                            </Link>
                        </div>
                        <div className="lg:col-span-8">
                            <div className="space-y-4">
                                {faqs.map((faq, idx) => (
                                    <div key={idx} className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden">
                                        <button
                                            onClick={() => setOpenFAQ(openFAQ === idx ? -1 : idx)}
                                            className="w-full flex items-center justify-between p-6 text-left"
                                        >
                                            <span className="font-bold text-lg text-slate-900 pr-8">{faq.q}</span>
                                            {openFAQ === idx ? <Minus className="text-primary shrink-0" /> : <Plus className="text-slate-400 shrink-0" />}
                                        </button>
                                        {openFAQ === idx && (
                                            <div className="px-6 pb-6 pt-0">
                                                <p className="text-slate-600 leading-relaxed border-t border-slate-200 pt-4">{faq.a}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="bg-slate-100 rounded-[3rem] p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-display">Try with 10 days free trial</h2>
                            <div className="flex flex-wrap gap-6 text-slate-600 font-medium">
                                <span className="flex items-center gap-2"><CheckCircle className="text-green-500" size={20} /> No credit card required</span>
                            </div>
                        </div>
                        <Link to="/contact" className="inline-block bg-[#1A1A1A] text-white hover:bg-black px-10 py-4 rounded-xl font-bold text-lg shadow-xl transition-all hover:scale-105 whitespace-nowrap">
                            Request Free Trial
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default MobileAttributionPage;
