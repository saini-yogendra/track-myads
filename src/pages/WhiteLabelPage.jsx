import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Monitor, Clock, Eye, Zap, Database, Globe, Key, Mail, Shield, Settings, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhiteLabelPage = () => {
    // API Management Data
    const apiFeatures = [
        {
            icon: <Settings className="w-6 h-6" />,
            title: "Administrator API",
            desc: "Full administrative control to manage users, offers, and reports programmatically."
        },
        {
            icon: <Users className="w-6 h-6" />,  // Using Users component locally defined/imported below or reused
            title: "Affiliate API",
            desc: "Empower your affiliates to fetch offers and report stats via API."
        },
        {
            icon: <Briefcase className="w-6 h-6" />, // Using Briefcase component locally defined/imported below or reused 
            title: "Advertiser API",
            desc: "Allow advertisers to manage their campaigns and view performance data."
        },
        {
            icon: <Database className="w-6 h-6" />,
            title: "Reporting API",
            desc: "Extract granular data to build your own custom dashboards and visualizations."
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
                            <div className="inline-block bg-[#ffda44] text-slate-900 px-4 py-2 rounded-full text-sm font-bold mb-6">
                                #Use Our Personalized Solution to Unlock
                            </div>

                            <h1 className="text-4xl lg:text-[52px] font-bold text-slate-900 leading-[1.1] mb-6 font-display">
                                White Label Software
                            </h1>

                            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Maintain your brand identity with our fully customizable white-label solution. From domain to design, make the platform truly yours.
                            </p>

                            {/* Trust Badges placeholder since we don't have the exact image assets */}
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 grayscale opacity-60">
                                <div className="text-xs font-bold border border-slate-300 rounded px-2 py-1">Capterra</div>
                                <div className="text-xs font-bold border border-slate-300 rounded px-2 py-1">G2 Crowd</div>
                                <div className="text-xs font-bold border border-slate-300 rounded px-2 py-1">Crozdesk</div>
                                <div className="text-xs font-bold border border-slate-300 rounded px-2 py-1">Offervault</div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link to="/contact" className="bg-[#1a2b3c] hover:bg-[#152238] text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg flex items-center justify-center gap-2">
                                    Request Free Trial <ArrowRight size={20} />
                                </Link>
                                <Link to="/resources/case-studies" className="bg-white border-2 border-slate-900 hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-lg font-bold transition-all flex items-center justify-center">
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
                            <div className="relative p-6 border-2 border-orange-200 border-dashed rounded-[3rem]">
                                <div className="bg-orange-500 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                                    <h3 className="text-2xl font-bold mb-4 relative z-10">Your Brand, Your Platform</h3>
                                    <div className="space-y-4 relative z-10">
                                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl flex items-center gap-4">
                                            <div className="bg-white p-2 rounded-lg">
                                                <Globe className="text-orange-600 w-6 h-6" />
                                            </div>
                                            <div>
                                                <div className="text-xs text-orange-100">Custom Domain</div>
                                                <div className="font-bold">partners.yourbrand.com</div>
                                            </div>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl flex items-center gap-4">
                                            <div className="bg-white p-2 rounded-lg">
                                                <Monitor className="text-orange-600 w-6 h-6" />
                                            </div>
                                            <div>
                                                <div className="text-xs text-orange-100">Custom UI</div>
                                                <div className="font-bold">Branded Dashboard</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Decorative circles */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16 blur-2xl"></div>
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

            {/* Tailored UI Design Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-display">
                                Tailored UI Design for Enhanced User Experience
                            </h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Offer a seamless experience with a user interface that reflects your brand identity. Customize colors, logos, and layout to provide a professional look and feel.
                            </p>
                            <Link to="/contact" className="text-primary font-bold hover:underline flex items-center gap-2">
                                Learn more about customization <ArrowRight size={16} />
                            </Link>
                        </div>
                        <div className="bg-slate-50 rounded-3xl p-8 lg:p-12">
                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                    <Monitor className="w-10 h-10 text-blue-600 mb-4" />
                                    <h3 className="font-bold text-slate-900 mb-2">Optimised for Any Device</h3>
                                    <p className="text-sm text-slate-600">Responsive design that looks great on desktop, tablet, and mobile.</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                    <Clock className="w-10 h-10 text-green-600 mb-4" />
                                    <h3 className="font-bold text-slate-900 mb-2">Efficient and Productive</h3>
                                    <p className="text-sm text-slate-600">Streamlined workflows to save time and increase productivity.</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                    <Eye className="w-10 h-10 text-purple-600 mb-4" />
                                    <h3 className="font-bold text-slate-900 mb-2">Accessible and Convenient</h3>
                                    <p className="text-sm text-slate-600">Intuitive interface designed for ease of use.</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                    <Zap className="w-10 h-10 text-orange-600 mb-4" />
                                    <h3 className="font-bold text-slate-900 mb-2">Faster Load Times</h3>
                                    <p className="text-sm text-slate-600">Optimized performance for quick access to data.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* API Management Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 font-display">
                            Empowering Personalised Experiences with API Management
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Leverage our powerful APIs to build custom solutions and integrate deeply with your existing systems.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {apiFeatures.map((feature, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                                <div className="w-16 h-16 bg-[#1a2b3c] rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                                    {feature.icon}
                                </div>
                                <h3 className="font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hosting & Domain Personalization */}
            <section className="py-24 bg-[#f0f7ff]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-display">
                            Host Your Partner Network with Ease
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Complete branding control including custom domains for tracking, login, and email communications.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white rounded-2xl p-8 shadow-md border-t-4 border-blue-500">
                            <Server className="w-12 h-12 text-blue-500 mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Custom Tracking Domain</h3>
                            <p className="text-slate-600">Detailed setup for tracking links to use your own domain, improving trust and deliverability.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-md border-t-4 border-green-500">
                            <Key className="w-12 h-12 text-green-500 mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Custom Login Domain</h3>
                            <p className="text-slate-600">Provide a branded login portal for your partners and advertisers at your own URL.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-md border-t-4 border-purple-500">
                            <Mail className="w-12 h-12 text-purple-500 mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Custom Email Setup</h3>
                            <p className="text-slate-600">Send notifications and reports from your own email address to maintain brand consistency.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto relative overflow-hidden">
                        {/* Decorative blob */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -mr-16 -mt-16 z-0"></div>

                        <div className="relative z-10 text-center lg:text-left">
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-display">Try with 10 days free trial</h2>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-slate-600 justify-center lg:justify-start">
                                    <CheckCircle className="w-5 h-5 text-green-500" /> No credit card required
                                </li>
                            </ul>
                        </div>
                        <div className="relative z-10 w-full lg:w-auto">
                            <Link to="/contact" className="block w-full sm:w-auto text-center bg-[#1a2b3c] hover:bg-[#152238] text-white px-10 py-5 rounded-xl font-bold text-lg shadow-xl transition-all hover:scale-105">
                                Request Free Trial
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

// Helper components for API section if needed, or import from lucide-react directly
const Users = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
const Briefcase = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>

export default WhiteLabelPage;
