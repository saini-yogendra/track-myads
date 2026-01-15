import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    CheckCircle,
    ArrowRight,
    Target,
    TrendingUp,
    Shield,
    Zap,
    BarChart3,
    Users,
    Globe,
    Link as LinkIcon,
    Plus,
    Minus
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AffiliateTrackingPage = () => {
    const [openFAQ, setOpenFAQ] = useState(0);

    const performanceFeatures = [
        { icon: <Target className="w-8 h-8" />, title: "Precise Attribution", desc: "Track every touchpoint in the customer journey" },
        { icon: <TrendingUp className="w-8 h-8" />, title: "Real-Time Analytics", desc: "Get instant insights into campaign performance" },
        { icon: <Shield className="w-8 h-8" />, title: "Fraud Protection", desc: "Advanced algorithms to detect and block fraud" },
        { icon: <Zap className="w-8 h-8" />, title: "Fast Processing", desc: "Handle millions of events per second" },
        { icon: <BarChart3 className="w-8 h-8" />, title: "Custom Reports", desc: "Build reports tailored to your needs" },
        { icon: <Users className="w-8 h-8" />, title: "Multi-User Access", desc: "Collaborate with your team seamlessly" },
        { icon: <Globe className="w-8 h-8" />, title: "Global Reach", desc: "Track campaigns across 200+ countries" },
        { icon: <LinkIcon className="w-8 h-8" />, title: "Smart Links", desc: "Dynamic routing based on user behavior" }
    ];

    const attributionModels = [
        { title: "Campaign Models", desc: "First-click, last-click, linear, and custom attribution" },
        { title: "Event Funnel", desc: "Track user journey from impression to conversion" },
        { title: "Cookie-less Tracking", desc: "Privacy-first tracking without cookies" },
        { title: "Probabilistic Attribution", desc: "ML-powered attribution for complex journeys" }
    ];

    const flexibilityFeatures = [
        { title: "Audience Targeting", desc: "Segment users based on behavior, demographics, and more", icon: <Users className="w-10 h-10 text-blue-600" /> },
        { title: "Deep Link Support", desc: "Direct users to specific app screens or web pages", icon: <LinkIcon className="w-10 h-10 text-green-600" /> },
        { title: "Periodic Scheduling", desc: "Automate campaign start/stop times", icon: <Zap className="w-10 h-10 text-orange-600" /> }
    ];

    const faqs = [
        { q: "What is affiliate tracking software?", a: "Affiliate tracking software helps businesses track, manage, and optimize their affiliate marketing programs by monitoring clicks, conversions, and commissions." },
        { q: "How accurate is the tracking?", a: "Our tracking is 99.9% accurate with real-time data processing and multiple fallback mechanisms to ensure no conversion is missed." },
        { q: "Can I track mobile app installs?", a: "Yes, our SDK supports both iOS and Android app install tracking with deep linking and in-app event tracking." },
        { q: "What attribution models are supported?", a: "We support first-click, last-click, linear, time-decay, and custom attribution models to fit your business needs." },
        { q: "Is there an API available?", a: "Yes, we provide a comprehensive REST API with detailed documentation for custom integrations." }
    ];

    return (
        <div className="bg-white min-h-screen">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-50 to-white">
                {/* Background Decorations */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center lg:text-left"
                        >
                            {/* Badge */}
                            <div className="inline-block bg-[#f8d568] text-slate-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
                                #Precisely Evaluate User Journey
                            </div>

                            {/* Title */}
                            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-slate-900 leading-tight mb-6 font-display">
                                Maximize Your Campaigns with Affiliate Marketing Tracking Software
                            </h1>

                            {/* Subtitle */}
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Track, analyze, and optimize your affiliate campaigns with precision. Get real-time insights and maximize your ROI.
                            </p>

                            {/* Bullet Points */}
                            <ul className="space-y-3 mb-10">
                                <li className="flex items-center gap-3 text-slate-700">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    <span>Real-time tracking across all channels</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    <span>Advanced fraud detection and prevention</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    <span>Customizable attribution models</span>
                                </li>
                            </ul>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact" className="bg-[#1a2b4b] hover:bg-[#152238] text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg text-center">
                                    Request Free Trial
                                </Link>
                                <Link to="/resources/case-studies" className="bg-white border-2 border-slate-300 hover:border-primary text-slate-700 hover:text-primary px-8 py-4 rounded-lg font-bold transition-all text-center">
                                    Customer Stories
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right Visual */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="relative"
                        >
                            {/* Main Image Container */}
                            <div className="relative bg-yellow-100 rounded-3xl p-8 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=988&q=80"
                                    alt="Affiliate Tracking Dashboard"
                                    className="rounded-2xl w-full"
                                />

                                {/* Floating Cards */}
                                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl animate-bounce-slow">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-green-100 p-2 rounded-lg">
                                            <CheckCircle className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-slate-500 font-semibold">Campaign Status</div>
                                            <div className="text-sm font-bold text-slate-900">Active</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl">
                                    <div className="text-xs text-slate-500 font-semibold mb-1">Analytics Chart</div>
                                    <div className="flex gap-1 items-end h-12">
                                        <div className="w-2 bg-blue-300 h-6 rounded"></div>
                                        <div className="w-2 bg-blue-400 h-8 rounded"></div>
                                        <div className="w-2 bg-blue-500 h-10 rounded"></div>
                                        <div className="w-2 bg-blue-600 h-12 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Attribution Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left: Text */}
                        <div>
                            <h2 className="text-4xl font-bold text-slate-900 mb-6">
                                Advanced Attribution Models
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Choose from multiple attribution models or create your own custom logic to accurately measure campaign performance.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                    <span className="text-slate-700">Multi-touch attribution across all channels</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                    <span className="text-slate-700">Cookie-less tracking for privacy compliance</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                    <span className="text-slate-700">Real-time event processing and reporting</span>
                                </li>
                            </ul>
                        </div>

                        {/* Right: Grid Card */}
                        <div className="bg-slate-50 rounded-3xl p-10">
                            <div className="grid grid-cols-2 gap-6">
                                {attributionModels.map((model, idx) => (
                                    <div key={idx} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                        <h3 className="font-bold text-slate-900 mb-2">{model.title}</h3>
                                        <p className="text-sm text-slate-600">{model.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Performance Analytics Grid */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">
                            Performance Analytics That Matter
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Get comprehensive insights with our powerful analytics dashboard
                        </p>
                    </div>

                    {/* 4-Column Grid of 8 Items */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {performanceFeatures.map((feature, idx) => (
                            <div key={idx} className="text-center">
                                <div className="w-16 h-16 bg-[#1a2b4b] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                                    {feature.icon}
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                                <p className="text-sm text-slate-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Flexibility & Reliability Section */}
            <section className="py-24 bg-[#e3f3ff]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">
                            Flexibility & Reliability
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Built for scale with enterprise-grade reliability
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {flexibilityFeatures.map((feature, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                                <div className="mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12">

                        {/* Left: Title + Button */}
                        <div className="lg:col-span-4">
                            <h2 className="text-4xl font-bold text-slate-900 mb-6">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Have questions? We're here to help.
                            </p>
                            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg">
                                Get Started <ArrowRight size={20} />
                            </Link>
                        </div>

                        {/* Right: Accordion */}
                        <div className="lg:col-span-8">
                            <div className="space-y-4">
                                {faqs.map((faq, idx) => (
                                    <div key={idx} className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                                        <button
                                            onClick={() => setOpenFAQ(openFAQ === idx ? -1 : idx)}
                                            className="w-full flex items-center justify-between p-6 text-left"
                                        >
                                            <span className="font-bold text-lg text-slate-900">{faq.q}</span>
                                            {openFAQ === idx ? <Minus className="text-primary" /> : <Plus className="text-slate-400" />}
                                        </button>
                                        {openFAQ === idx && (
                                            <div className="px-6 pb-6">
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

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-[#1a2b4b] to-[#2d4a7c] text-white text-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Start your 14 days free trial</h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                        Trusted by 850+ Companies | No credit card required | Support 24/7
                    </p>
                    <Link to="/contact" className="inline-block bg-white text-[#1a2b4b] hover:bg-slate-100 px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all">
                        Request Free Trial
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default AffiliateTrackingPage;
