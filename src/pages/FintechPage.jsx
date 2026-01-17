import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, PieChart, Users, Headphones, Video, MessageCircle, Shield, Lock, CreditCard, Smartphone, DollarSign, Activity, Percent } from 'lucide-react';
import { Link } from 'react-router-dom';

const FintechPage = () => {
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
                            <div className="inline-block bg-gradient-to-r from-orange-400 to-red-400 text-white px-4 py-2 rounded-tl-lg rounded-tr-lg rounded-br-lg text-sm font-bold mb-6 shadow-md">
                                #Fintech Performance Tracking Solution
                            </div>

                            <h1 className="text-4xl lg:text-[50px] font-bold text-slate-900 leading-tight mb-6 font-display">
                                <span className="text-[#0046af]">Fintech</span> Campaigns <span className="text-[#0046af]">Tracking Solution</span>
                            </h1>

                            <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                                Get full visibility into how customers engage with your brand on a variety of platforms and devices. Reliable, secure, and compliant.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                                <Link to="/contact" className="bg-[#0046af] hover:bg-[#003690] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2">
                                    Request Free Trial <ArrowRight size={20} />
                                </Link>
                                <Link to="/resources/case-studies" className="bg-transparent border border-[#0046af] text-[#0046af] hover:bg-slate-50 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center">
                                    Customer Stories
                                </Link>
                            </div>

                            {/* Social Proof Rows */}
                            <div className="space-y-6">
                                <div className="flex flex-wrap gap-4 justify-center lg:justify-start opacity-60 grayscale">
                                    <div className="border border-slate-300 rounded px-2 py-1 text-xs font-bold">Capterra</div>
                                    <div className="border border-slate-300 rounded px-2 py-1 text-xs font-bold">G2 Crowd</div>
                                    <div className="border border-slate-300 rounded px-2 py-1 text-xs font-bold">Crozdesk</div>
                                </div>
                                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                    <div className="bg-slate-50 px-3 py-2 rounded text-slate-400 font-bold text-sm">Business Matters</div>
                                    <div className="bg-slate-50 px-3 py-2 rounded text-slate-400 font-bold text-sm">Yahoo! Finance</div>
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
                            <div className="relative">
                                {/* Abstract UI Elements */}
                                <div className="absolute top-10 -right-5 bg-white p-4 rounded-xl shadow-lg z-20 animate-bounce-slow hidden md:block border-l-4 border-green-500">
                                    <div className="text-xs font-bold text-slate-500">Daily Revenue</div>
                                    <div className="text-lg font-bold text-slate-900">$12,450.00</div>
                                </div>
                                <div className="absolute bottom-20 -left-10 bg-white p-4 rounded-xl shadow-lg z-20 animate-float hidden md:block border-l-4 border-[#fe8023]">
                                    <div className="text-xs font-bold text-slate-500">Conversion Rate</div>
                                    <div className="text-lg font-bold text-slate-900">4.8%</div>
                                </div>

                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                    alt="Fintech Analytics"
                                    className="rounded-[3rem] shadow-2xl relative z-10 w-full max-w-md mx-auto object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Cost Models Integration */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-display">
                                Flexible Cost Models & Integration
                            </h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Adapt to any partnership model. Whether you're paying for leads, sales, or giving a percentage of revenue, Track MyAds handles the tracking and attribution precisely.
                            </p>
                            <Link to="/contact" className="text-[#0046af] font-bold hover:underline flex items-center gap-2">
                                See all pricing models <ArrowRight size={16} />
                            </Link>
                        </div>
                        <div className="flex justify-center">
                            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-md w-full relative">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-orange-50 transition-colors cursor-default group">
                                        <div className="bg-orange-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors"><Percent className="w-6 h-6 text-[#fe8023]" /></div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Cost Per Sale (CPS)</h3>
                                            <p className="text-sm text-slate-500">Commission based on sales value.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-green-50 transition-colors cursor-default group">
                                        <div className="bg-green-100 p-3 rounded-full group-hover:bg-green-200 transition-colors"><PieChart className="w-6 h-6 text-green-600" /></div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Revenue Share</h3>
                                            <p className="text-sm text-slate-500">Percentage of total revenue generated.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-purple-50 transition-colors cursor-default group">
                                        <div className="bg-purple-100 p-3 rounded-full group-hover:bg-purple-200 transition-colors"><Users className="w-6 h-6 text-purple-600" /></div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Cost Per Lead (CPL)</h3>
                                            <p className="text-sm text-slate-500">Fixed payout for qualified leads.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Omni-Channel Support */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 font-display">
                            Omni-Channel Support & Referral
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            We support your growth with dedicated resources and referral tools.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div className="flex flex-col items-center group">
                            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 mb-6 group-hover:bg-[#0046af] group-hover:text-white transition-all shadow-sm">
                                <Headphones className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">24x7 Support</h3>
                            <p className="text-sm text-slate-500">Always here to help.</p>
                        </div>
                        <div className="flex flex-col items-center group">
                            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 mb-6 group-hover:bg-[#0046af] group-hover:text-white transition-all shadow-sm">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Dedicated Manager</h3>
                            <p className="text-sm text-slate-500">Personalized account handling.</p>
                        </div>
                        <div className="flex flex-col items-center group">
                            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 mb-6 group-hover:bg-[#0046af] group-hover:text-white transition-all shadow-sm">
                                <Video className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Remote Assistance</h3>
                            <p className="text-sm text-slate-500">Screen sharing support.</p>
                        </div>
                        <div className="flex flex-col items-center group">
                            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 mb-6 group-hover:bg-[#0046af] group-hover:text-white transition-all shadow-sm">
                                <MessageCircle className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Affiliate Referral</h3>
                            <p className="text-sm text-slate-500">Grow your network virally.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fraud Fender (Security) */}
            <section className="py-24 bg-[#f4f7fa]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 flex justify-center">
                            <div className="bg-white p-10 rounded-3xl w-full max-w-md shadow-lg border border-slate-200">
                                <Shield className="w-32 h-32 text-red-500 mx-auto mb-6" strokeWidth={0.5} />
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 bg-red-50 p-3 rounded-lg">
                                        <Lock className="w-5 h-5 text-red-600" />
                                        <span className="font-bold text-slate-700">Bank-Level Security</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-red-50 p-3 rounded-lg">
                                        <CheckCircle className="w-5 h-5 text-red-600" />
                                        <span className="font-bold text-slate-700">GDPR & CCPA Compliant</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h3 className="text-[#0046af] font-bold text-lg mb-2 uppercase tracking-wide">Fraud Prevention</h3>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-display">
                                Fraud Fender
                            </h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                In Fintech, trust is everything. Our advanced Fraud Fender technology ensures that every lead and sale is legitimate, protecting your budget and your reputation.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-4">
                                    <div className="bg-white p-2 rounded-lg shadow-sm"><Shield className="w-5 h-5 text-red-500" /></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Blacklisting</h4>
                                        <p className="text-sm text-slate-500">Automatically block suspicious IPs and devices.</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="bg-white p-2 rounded-lg shadow-sm"><Activity className="w-5 h-5 text-[#fe8023]" /></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">CTIT Monitoring</h4>
                                        <p className="text-sm text-slate-500">Catch click injection with Click to Install Time analysis.</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="bg-white p-2 rounded-lg shadow-sm"><Lock className="w-5 h-5 text-green-500" /></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">3rd Party Integrations</h4>
                                        <p className="text-sm text-slate-500">Compatible with 24metrics and FraudScore.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Managing Affiliate Commission */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 font-display">
                            Managing Affiliate Commision
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-orange-200 transition-colors">
                            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#fe8023] mb-6">
                                <DollarSign className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Dynamic Payout Configuration</h3>
                            <p className="text-slate-600">Set payouts based on specific events, geographic regions, or user devices.</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-orange-200 transition-colors">
                            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#fe8023] mb-6">
                                <CreditCard className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Dedicated Affiliate Payout</h3>
                            <p className="text-slate-600">Customize payout terms for individual high-performing affiliates.</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-orange-200 transition-colors">
                            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#fe8023] mb-6">
                                <PieChart className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Commission Management</h3>
                            <p className="text-slate-600">Automate commission calculations and invoice generation.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* MMP Integration */}
            <section className="py-24 bg-white border-t border-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-display">
                        MMP Integration & Attribution
                    </h2>
                    <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                        For Fintech apps, mobile attribution is key. Track MyAds supports standard MMP integrations, Probabilistic Attribution for non-IDFA traffic, and SKAdNetwork for iOS compliance.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="px-6 py-3 bg-slate-50 rounded-full font-bold text-slate-700 border border-slate-200">Probabilistic Attribution</div>
                        <div className="px-6 py-3 bg-slate-50 rounded-full font-bold text-slate-700 border border-slate-200">SKAdNetwork</div>
                        <div className="px-6 py-3 bg-slate-50 rounded-full font-bold text-slate-700 border border-slate-200">One-Click Templates</div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="bg-[#0046af] rounded-[2rem] shadow-2xl p-12 lg:p-16 flex flex-col items-center text-center text-white relative overflow-hidden">
                        {/* Blob */}
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-16 -mt-16 pointer-events-none"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">Grow Your Fintech Business with Track MyAds</h2>
                            <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
                                Join hundreds of financial institutions and fintech startups scaling their user acquisition with confidence.
                            </p>
                            <Link to="/contact" className="inline-block bg-white text-[#0046af] hover:bg-slate-100 px-12 py-5 rounded-xl font-bold text-lg shadow-xl transition-all hover:scale-105 whitespace-nowrap">
                                Get Started Now
                            </Link>

                            <div className="flex flex-wrap justify-center gap-8 mt-10 text-orange-200 font-medium">
                                <span className="flex items-center gap-2"><CheckCircle className="text-orange-400" size={20} /> SSL Encrypted</span>
                                <span className="flex items-center gap-2"><CheckCircle className="text-orange-400" size={20} /> 99.99% Uptime</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FintechPage;
