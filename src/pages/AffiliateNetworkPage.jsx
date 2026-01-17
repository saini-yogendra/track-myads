import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, LayoutDashboard, Share2, MessageSquare, CreditCard, Layers, Users, Shield, Globe, Clock, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const AffiliateNetworkPage = () => {
    const [activeTab, setActiveTab] = useState('postback');

    const features = [
        {
            icon: <LayoutDashboard className="w-8 h-8 text-cyan-400" />,
            title: "Affiliate Marketing Dashboard",
            desc: "A comprehensive dashboard giving you a 360-degree view of your network's performance."
        },
        {
            icon: <Share2 className="w-8 h-8 text-cyan-400" />,
            title: "Affiliate Referral",
            desc: "Encourage your affiliates to refer others and grow your network organically with automated tracking."
        },
        {
            icon: <MessageSquare className="w-8 h-8 text-cyan-400" />,
            title: "Chat Integration for Affiliate",
            desc: "Communicate directly with your affiliates within the platform to resolve issues faster."
        },
        {
            icon: <CreditCard className="w-8 h-8 text-cyan-400" />,
            title: "Affiliate & Advertiser Billing",
            desc: "Automate invoicing and payments handling for both your affiliates and advertisers."
        },
        {
            icon: <Layers className="w-8 h-8 text-cyan-400" />,
            title: "Vertical Specific Features",
            desc: "Tailored tools for E-commerce, Gaming, Nutra, and other specific verticals."
        },
        {
            icon: <Users className="w-8 h-8 text-cyan-400" />,
            title: "Retargeting Audience",
            desc: "Re-engage potential customers who have shown interest but haven't converted yet."
        }
    ];

    const tabContent = {
        postback: {
            title: "Postback Integration",
            desc: "Seamlessly integrate with 3rd party platforms using our advanced S2S postback system. Ensure accurate data transmission for every conversion.",
            icon: <Globe className="w-12 h-12 text-[#fe8023]" />
        },
        fraud: {
            title: "Fraud Prevention",
            desc: "Keep your network clean with our real-time fraud detection. We identify and block suspicious traffic before it costs you money.",
            icon: <Shield className="w-12 h-12 text-red-600" />
        },
        employee: {
            title: "Employee Accounts",
            desc: "Manage your team efficiently with granular permission controls. Assign specific roles and access levels to each team member.",
            icon: <Users className="w-12 h-12 text-green-600" />
        },
        payout: {
            title: "Payout Tiers",
            desc: "Motivate your affiliates with flexible payout tiers. Reward top performers automatically based on their volume or quality.",
            icon: <CreditCard className="w-12 h-12 text-purple-600" />
        }
    };

    return (
        <div className="bg-white min-h-screen font-body">

            {/* Hero Section */}
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center lg:text-left"
                        >
                            <div className="inline-block bg-[#FFDC63] text-black px-4 py-2 rounded-full text-xs font-bold mb-6">
                                #Build Affiliate Network with Track MyAds
                            </div>

                            <h1 className="text-4xl lg:text-[42px] font-bold text-black leading-tight mb-6 font-display">
                                Transform Your Sales with the Right Affiliate Marketing Software
                            </h1>

                            <p className="text-lg text-[#575757] mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                One comprehensive affiliate marketing platform designed to track, manage, and optimize your affiliate networks performance in real-time.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link to="/contact" className="bg-[#3A75FF] hover:bg-[#2e5ece] text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2">
                                    Request Free Trial <ArrowRight size={20} />
                                </Link>
                                <Link to="/resources/case-studies" className="bg-transparent border border-black hover:bg-slate-50 text-black px-8 py-3 rounded-xl font-bold transition-all flex items-center justify-center">
                                    Customer Stories
                                </Link>
                            </div>

                            {/* Trust Badges */}
                            {/* <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start opacity-60 grayscale">
                                <div className="border border-slate-300 rounded px-2 py-1 text-xs font-bold">Capterra</div>
                                <div className="border border-slate-300 rounded px-2 py-1 text-xs font-bold">G2 Crowd</div>
                                <div className="border border-slate-300 rounded px-2 py-1 text-xs font-bold">Crozdesk</div>
                                <div className="border border-slate-300 rounded px-2 py-1 text-xs font-bold">OfferVault</div>
                            </div> */}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
                                alt="Affiliate Network Success"
                                className="rounded-[2rem] shadow-2xl relative z-10 w-full max-w-lg mx-auto"
                            />
                            {/* Floating Stats */}
                            <div className="absolute top-10 left-0 bg-white p-4 rounded-xl shadow-lg z-20 animate-bounce-slow hidden md:block">
                                <div className="flex items-center gap-3">
                                    <div className="bg-green-100 p-2 rounded-lg"><Shield className="text-green-600 w-5 h-5" /></div>
                                    <div>
                                        <div className="text-xs text-slate-500 font-bold">Security</div>
                                        <div className="text-sm font-bold">Fraud Prevention</div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-10 right-0 bg-white p-4 rounded-xl shadow-lg z-20 animate-float-delayed hidden md:block">
                                <div className="flex items-center gap-3">
                                    <div className="bg-orange-100 p-2 rounded-lg"><Share2 className="text-[#fe8023] w-5 h-5" /></div>
                                    <div>
                                        <div className="text-xs text-slate-500 font-bold">Connectivity</div>
                                        <div className="text-sm font-bold">S2S Integration</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Dark Feature Grid */}
            <section className="py-24 bg-[#1C3352] text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-display">
                            Boost Your Affiliate Campaigns with Affiliate Network Software
                        </h2>
                        <p className="text-orange-100 max-w-2xl mx-auto text-lg opacity-80">
                            Equip your network with the tools needed to scale efficiently and maximize revenue.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, idx) => (
                            <div key={idx} className="bg-[#15263F] p-8 rounded-2xl hover:bg-[#1a2f4d] transition-colors border border-slate-700/50">
                                <div className="mb-6">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-slate-300 leading-relaxed text-sm">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tabbed Interactive Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Side Menu */}
                        <div className="lg:col-span-4 space-y-2">
                            {Object.keys(tabContent).map((key) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`w-full text-left px-6 py-4 rounded-xl transition-all font-bold flex items-center justify-between ${activeTab === key
                                        ? 'bg-orange-50 text-[#fe8023] shadow-sm'
                                        : 'text-slate-600 hover:bg-slate-50'
                                        }`}
                                >
                                    {tabContent[key].title}
                                    {activeTab === key && <ArrowRight size={18} />}
                                </button>
                            ))}
                        </div>

                        {/* Content Area */}
                        <div className="lg:col-span-8 bg-[#F9F5F1] rounded-[2rem] p-8 lg:p-12 flex flex-col justify-center">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md mb-6">
                                    {tabContent[activeTab].icon}
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-4 font-display">
                                    {tabContent[activeTab].title}
                                </h3>
                                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                    {tabContent[activeTab].desc}
                                </p>
                                <Link to="/signup" className="text-[#fe8023] font-bold hover:underline flex items-center gap-2">
                                    Learn more <ArrowRight size={20} />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials / Migration Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 font-display">
                            Organizations keep migrating to Track MyAds
                        </h2>
                        <p className="text-slate-600 text-lg">
                            See why leading networks are switching from their existing platforms.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="bg-[#FFF9E5] p-10 rounded-3xl">
                            <div className="text-4xl font-bold text-slate-900 mb-2">60%</div>
                            <div className="text-slate-600 font-medium mb-8">Traffic Loss Decrease</div>
                            <p className="text-slate-800 italic mb-6">"Moving to Track MyAds was the best decision for our network. The stability and fraud prevention tools alone saved us thousands in the first month."</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">Alex Johnson</div>
                                    <div className="text-sm text-slate-500">CEO, AdNetwork One</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#FFF1F0] p-10 rounded-3xl">
                            <div className="text-4xl font-bold text-slate-900 mb-2">3x</div>
                            <div className="text-slate-600 font-medium mb-8">Revenue Growth</div>
                            <p className="text-slate-800 italic mb-6">"The reporting tools are incredible. We can finally see where every penny is coming from and optimize in real-time."</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">Sarah Lee</div>
                                    <div className="text-sm text-slate-500">COO, Global Media</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="bg-[#1a2b3c] rounded-[2rem] p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-white relative overflow-hidden">
                        {/* Blob */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Try with 10 days free trial</h2>
                            <div className="flex flex-wrap gap-6 text-slate-300 font-medium">
                                <span className="flex items-center gap-2"><CheckCircle className="text-green-400" size={20} /> No credit card required</span>
                            </div>
                        </div>
                        <Link to="/contact" className="inline-block bg-white text-[#1a2b3c] hover:bg-slate-100 px-10 py-4 rounded-xl font-bold text-lg shadow-xl transition-all hover:scale-105 whitespace-nowrap relative z-10">
                            Request Free Trial
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AffiliateNetworkPage;
