import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Shield, AlertTriangle, Lock, Globe, Zap, Activity, Filter, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const FraudDetectionPage = () => {
    const [openFAQ, setOpenFAQ] = useState(0);

    const faqs = [
        {
            q: "How does Track MyAds track potential fraud?",
            a: "Track MyAds uses advanced algorithms to monitor traffic patterns, click frequency, IP reputation, and conversion timeframes. Any activity that deviates from established norms is flagged as potential fraud."
        },
        {
            q: "How accurate is the fraud detection?",
            a: "Our system is highly accurate, utilizing machine learning to constantly improve detection capabilities. We analyze millions of data points to differentiate between legitimate user behavior and fraudulent activity with high precision."
        },
        {
            q: "What types of fraud does it protect against?",
            a: "We protect against click spamming, click injection, IP fraud, VPN/Proxy traffic, bot traffic, device farming, and duplicate conversions."
        },
        {
            q: "Is fraud detection included in all plans?",
            a: "Basic fraud detection is included in all plans. Advanced features like Click Spamming Defender and detailed fraud reports are available in our Professional and Enterprise plans."
        },
        {
            q: "Can I customize the fraud rules?",
            a: "Yes, you can set custom thresholds for various metrics such as CTIT (Click to Install Time), IP click limits, and conversion rates to tailor the protection to your specific needs."
        },
        {
            q: "Does it block fraud or just report it?",
            a: "You have the control. You can choose to automatically block traffic that meets certain fraud criteria, or you can set it to 'flag only' mode to review the data before taking action."
        }
    ];

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
                            <div className="inline-block bg-[#FFD54F] text-slate-900 px-4 py-2 rounded-full text-sm font-bold mb-6">
                                #Get Notified Potential Fraudulent Traffic
                            </div>

                            <h1 className="text-4xl lg:text-[44px] font-bold text-slate-900 leading-tight mb-6 font-display">
                                Comprehensive Fraud Detection and Prevention Software
                            </h1>

                            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Track MyAds acts as an impartial observer for all your conversions. Our advanced algorithms detect patterns to identify and prevent fraudulent activities in real-time.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link to="/contact" className="bg-[#272742] hover:bg-[#1f1f35] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2">
                                    Request Free Trial <ArrowRight size={20} />
                                </Link>
                                <Link to="/resources/case-studies" className="bg-white border-2 border-slate-200 hover:border-[#272742] text-slate-700 hover:text-[#272742] px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center">
                                    Customer Stories
                                </Link>
                            </div>
                        </motion.div>

                        {/* Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80"
                                alt="Fraud Detection Analyst"
                                className="rounded-3xl shadow-2xl relative z-10 w-full max-w-md mx-auto"
                            />

                            {/* Floating UI Cards */}
                            <div className="absolute top-10 -right-4 bg-white p-4 rounded-xl shadow-xl animate-bounce-slow z-20 hidden md:block">
                                <div className="flex items-center gap-3">
                                    <div className="bg-orange-100 p-2 rounded-lg">
                                        <Shield className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 font-bold">Status</div>
                                        <div className="text-sm font-bold text-slate-900">Protected</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-10 -left-10 bg-white p-4 rounded-xl shadow-xl animate-pulse z-20 hidden md:block">
                                <div className="flex items-center gap-3">
                                    <div className="bg-red-100 p-2 rounded-lg">
                                        <AlertTriangle className="w-6 h-6 text-red-600" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 font-bold">Threat Detected</div>
                                        <div className="text-sm font-bold text-slate-900">Blocked IP</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Media Logos */}
                    <div className="mt-20 pt-10 border-t border-slate-100 w-full overflow-hidden">
                        <div className="flex justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
                            {/* Placeholder Text for Logos */}
                            <div className="text-xl font-bold font-display">Financial Market News</div>
                            <div className="text-xl font-bold font-display">Hindustan Times</div>
                            <div className="text-xl font-bold font-display">Daily Herald</div>
                            <div className="text-xl font-bold font-display">Buffalo News</div>
                            <div className="text-xl font-bold font-display">Star Tribune</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 1: Click Spamming Defender */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-display">
                                Click Spamming Defender
                            </h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Protect your ad spend from click flooding. Our system identifies and blocks sources that generate excessive clicks with low conversion rates, ensuring you only pay for genuine engagement.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                                        <Activity className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Prevent Click Injection</h3>
                                        <p className="text-sm text-slate-600">Detects installs that happen instantly after a click.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                                        <Zap className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Intelligent Algorithm</h3>
                                        <p className="text-sm text-slate-600">Learns from traffic patterns to block new threats.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 flex justify-center">
                            <div className="bg-white p-6 rounded-3xl shadow-xl max-w-md w-full">
                                <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center bg-red-50 p-3 rounded-lg border border-red-100">
                                        <span className="text-sm font-bold text-red-700">Suspicious Activity</span>
                                        <AlertTriangle className="w-4 h-4 text-red-500" />
                                    </div>
                                    <div className="h-2 bg-slate-100 rounded w-3/4"></div>
                                    <div className="h-2 bg-slate-100 rounded w-1/2"></div>
                                    <div className="h-32 bg-slate-50 rounded-lg flex items-center justify-center text-slate-300">
                                        <Activity size={48} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 2: Fraud Fender */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-orange-100 rounded-full blur-3xl opacity-30"></div>
                                <Shield className="w-64 h-64 text-orange-500 relative z-10" strokeWidth={1} />
                                <Lock className="w-16 h-16 text-slate-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-lg" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-display">
                                Fraud Fender
                            </h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                A robust shield against IP and ISP based fraud. Automatically blacklist suspicious IPs and block traffic from data centers or known bot networks.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="bg-orange-100 p-1 rounded-full"><CheckCircle className="w-4 h-4 text-orange-600" /></div>
                                    IP/ISP Blacklisting
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="bg-orange-100 p-1 rounded-full"><CheckCircle className="w-4 h-4 text-orange-600" /></div>
                                    VPN/Proxy Detection
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="bg-orange-100 p-1 rounded-full"><CheckCircle className="w-4 h-4 text-orange-600" /></div>
                                    Bot Traffic Filtering
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 3: Conversion Risk Monitor */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-display">
                                Conversion Risk Monitor
                            </h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Monitor conversion patterns to detect anomalies. Whether it's unusually high conversion rates or impossible install times, we'll flag it.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                                        <Activity className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">CTIT Monitoring</h3>
                                        <p className="text-sm text-slate-600">Click to Install Time analysis to catch bots and click injectors.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                                        <Filter className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Fraudulent User Acquisition Prevent</h3>
                                        <p className="text-sm text-slate-600">Stop paying for fake users and installs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 flex justify-center">
                            <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-sm border-t-4 border-green-500">
                                <div className="text-center mb-6">
                                    <div className="bg-green-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Shield className="w-10 h-10 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">Risk Level: Low</h3>
                                    <p className="text-sm text-slate-500">All systems operational</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-600">Valid Traffic</span>
                                        <span className="font-bold text-green-600">98.5%</span>
                                    </div>
                                    <div className="w-full bg-slate-100 rounded-full h-2">
                                        <div className="bg-green-500 h-2 rounded-full w-[98.5%]"></div>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-600">Flagged</span>
                                        <span className="font-bold text-red-500">1.5%</span>
                                    </div>
                                    <div className="w-full bg-slate-100 rounded-full h-2">
                                        <div className="bg-red-500 h-2 rounded-full w-[1.5%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 4: Traffic Source Validator */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="flex justify-center">
                            <Globe className="w-64 h-64 text-blue-200" strokeWidth={0.5} />
                        </div>
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-display">
                                Traffic Source Validator
                            </h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Ensure your traffic comes from legitimate sources. Validate referrers, tokens, and macros to filter out spoofed or low-quality traffic.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                                    <AlertTriangle className="w-5 h-5 text-red-500" />
                                    <span className="font-bold text-slate-700 text-sm">Block Blank Referrer</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                                    <Shield className="w-5 h-5 text-blue-500" />
                                    <span className="font-bold text-slate-700 text-sm">Blacklist Suspicious Source</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span className="font-bold text-slate-700 text-sm">Token & Macros Validation</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                                    <Activity className="w-5 h-5 text-orange-500" />
                                    <span className="font-bold text-slate-700 text-sm">Unique Click Limit</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* FAQ Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-display">
                                Frequently Asked Questions
                            </h2>
                            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#272742] hover:bg-[#1f1f35] text-white px-6 py-3 rounded-lg font-bold transition-all shadow-md">
                                Get Started <ArrowRight size={18} />
                            </Link>
                        </div>
                        <div className="lg:col-span-8">
                            <div className="space-y-4">
                                {faqs.map((faq, idx) => (
                                    <div key={idx} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                                        <button
                                            onClick={() => setOpenFAQ(openFAQ === idx ? -1 : idx)}
                                            className="w-full flex items-center justify-between p-6 text-left"
                                        >
                                            <span className="font-bold text-lg text-slate-900 pr-8">{faq.q}</span>
                                            {openFAQ === idx ? <Minus className="text-primary shrink-0" /> : <Plus className="text-slate-400 shrink-0" />}
                                        </button>
                                        {openFAQ === idx && (
                                            <div className="px-6 pb-6 pt-0">
                                                <p className="text-slate-600 leading-relaxed border-t border-slate-100 pt-4">{faq.a}</p>
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
            <section className="py-20 bg-gradient-to-br from-[#272742] to-[#3a3a5e] text-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">Try with 10 days free trial</h2>
                        <div className="flex flex-wrap justify-center gap-6 mb-10 text-blue-200 text-sm font-semibold tracking-wide uppercase">
                            <span className="flex items-center gap-2"><CheckCircle size={16} /> No Credit Card Required</span>
                        </div>
                        <Link to="/contact" className="inline-block bg-white text-[#272742] hover:bg-slate-100 px-10 py-4 rounded-xl font-bold text-lg shadow-xl transition-all hover:scale-105 active:scale-95">
                            Request Free Trial
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default FraudDetectionPage;
