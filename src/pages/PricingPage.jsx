import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Check, HelpCircle, Building2, Rocket, Zap, Shield, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingPage = () => {
    const [planType, setPlanType] = useState('startups'); // 'startups' or 'business'

    const startupPlans = [
        {
            name: 'Basic',
            price: '49',
            description: 'Essential tracking for new affiliates.',
            features: [
                '4,000 Conversions /mo',
                '150,000 Clicks /mo',
                'Unlimited Offers',
                'Unlimited Partners',
                'SSL Domain'
            ],
            highlight: false
        },
        {
            name: 'Advanced',
            price: '149',
            description: 'For growing networks needing more scale.',
            features: [
                '10,000 Conversions /mo',
                'Unlimited Clicks',
                'Unlimited Offers',
                'Unlimited Partners',
                'Custom Domain',
                'Smart Fraud Detection'
            ],
            highlight: true
        },
        {
            name: 'Premium',
            price: '349',
            description: 'Advanced features for established businesses.',
            features: [
                '40,000 Conversions /mo',
                'Unlimited Clicks',
                'Unlimited Offers',
                'Unlimited Partners',
                'Prioritized Support',
                'Full API Access'
            ],
            highlight: false
        }
    ];

    return (
        <div className="bg-white min-h-screen font-body">

            {/* Hero Section */}
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-16 text-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-block bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
                        Start <span className="text-yellow-600 bg-yellow-100 px-2 py-0.5 rounded-md mx-1">14 days</span> free trial
                    </div>
                    <h1 className="text-4xl lg:text-[56px] font-bold text-slate-900 leading-tight mb-4 font-display">
                        Pricing & Plans
                    </h1>
                    <p className="text-xl text-slate-500 mb-8 font-medium">
                        Trusted by 850+ Happy Companies
                    </p>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap gap-4 justify-center opacity-70 grayscale mb-12">
                        <div className="border border-slate-200 px-3 py-1 rounded text-xs font-bold text-slate-600">Capterra <br /><span className="font-normal text-[10px]">User Reviews</span></div>
                        <div className="border border-slate-200 px-3 py-1 rounded text-xs font-bold text-slate-600">G2 <br /><span className="font-normal text-[10px]">Best Support</span></div>
                        <div className="border border-slate-200 px-3 py-1 rounded text-xs font-bold text-slate-600">Crozdesk <br /><span className="font-normal text-[10px]">Quality Choice</span></div>
                        <div className="border border-slate-200 px-3 py-1 rounded text-xs font-bold text-slate-600">OfferVault <br /><span className="font-normal text-[10px]">Top Platform</span></div>
                    </div>

                    {/* Toggle */}
                    <div className="flex justify-center mb-12">
                        <div className="bg-slate-100 p-1.5 rounded-full flex gap-2">
                            <button
                                onClick={() => setPlanType('startups')}
                                className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${planType === 'startups' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                            >
                                Startups
                            </button>
                            <button
                                onClick={() => setPlanType('business')}
                                className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${planType === 'business' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                            >
                                Business
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="pb-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    {planType === 'startups' ? (
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {startupPlans.map((plan) => (
                                <div key={plan.name} className={`relative flex flex-col p-8 rounded-3xl transition-all ${plan.highlight ? 'bg-slate-900 text-white shadow-2xl scale-105 z-10' : 'bg-white border border-slate-200 text-slate-900 hover:border-slate-300'}`}>
                                    {plan.highlight && (
                                        <div className="absolute top-0 right-0 bg-[#F8D568] text-black text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                                            Most Popular
                                        </div>
                                    )}
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold mb-2 font-display">{plan.name}</h3>
                                        <p className={`text-sm ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{plan.description}</p>
                                    </div>
                                    <div className="mb-8">
                                        <span className="text-4xl font-bold">$</span>
                                        <span className="text-5xl font-bold mx-1">{plan.price}</span>
                                        <span className={`text-sm ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>/ mo</span>
                                    </div>
                                    <div className="flex-grow mb-8 space-y-4">
                                        {plan.features.map((feature, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <Check className={`w-5 h-5 flex-shrink-0 ${plan.highlight ? 'text-green-400' : 'text-green-500'}`} strokeWidth={3} />
                                                <span className={`text-sm font-medium ${plan.highlight ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Link to="/contact" className={`w-full py-4 rounded-xl font-bold text-center transition-all ${plan.highlight ? 'bg-[#0046af] hover:bg-[#003690] text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'}`}>
                                        Signup Now
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-3xl p-12 shadow-2xl text-center relative overflow-hidden">
                            {/* Decorative */}
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 pointer-events-none"></div>

                            <div className="relative z-10">
                                <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-display">Enterprise Business Plan</h2>
                                <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                                    Tailored solutions for high-volume networks and established enterprises. Get custom limits, dedicated infrastructure, and personalized support.
                                </p>

                                <div className="grid md:grid-cols-2 gap-8 text-left mb-12 max-w-2xl mx-auto">
                                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl">
                                        <Zap className="w-8 h-8 text-yellow-400" />
                                        <div>
                                            <div className="font-bold text-lg">Custom Volume</div>
                                            <div className="text-sm text-slate-400">Scale as you grow</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl">
                                        <Shield className="w-8 h-8 text-green-400" />
                                        <div>
                                            <div className="font-bold text-lg">Dedicated Server</div>
                                            <div className="text-sm text-slate-400">Maximum performance</div>
                                        </div>
                                    </div>
                                </div>

                                <Link to="/contact" className="inline-block bg-[#0046af] hover:bg-[#003690] text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:scale-105">
                                    Schedule a Call
                                </Link>
                            </div>
                        </div>
                    )}

                </div>
            </section>

            {/* Key Features List */}
            <section className="py-20 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 font-display">All Plans Include Key Features</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="flex gap-4">
                            <div className="bg-white p-3 rounded-lg shadow-sm h-fit"><HeadphonesIcon className="w-6 h-6 text-blue-600" /></div>
                            <div>
                                <h3 className="font-bold text-slate-900">24/7 Support</h3>
                                <p className="text-sm text-slate-600 mt-1">Our team is always available to help everyday.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-white p-3 rounded-lg shadow-sm h-fit"><Shield className="w-6 h-6 text-red-600" /></div>
                            <div>
                                <h3 className="font-bold text-slate-900">Fraud Detection (Basic)</h3>
                                <p className="text-sm text-slate-600 mt-1">Stay safe with our built-in basic security tools.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-white p-3 rounded-lg shadow-sm h-fit"><Globe className="w-6 h-6 text-green-600" /></div>
                            <div>
                                <h3 className="font-bold text-slate-900">Global Coverage</h3>
                                <p className="text-sm text-slate-600 mt-1">Fast server response times worldwide.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-white p-3 rounded-lg shadow-sm h-fit"><Users className="w-6 h-6 text-purple-600" /></div>
                            <div>
                                <h3 className="font-bold text-slate-900">Migration Support</h3>
                                <p className="text-sm text-slate-600 mt-1">Free assistance moving from other platforms.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-white p-3 rounded-lg shadow-sm h-fit"><Zap className="w-6 h-6 text-yellow-600" /></div>
                            <div>
                                <h3 className="font-bold text-slate-900">Real-time Reporting</h3>
                                <p className="text-sm text-slate-600 mt-1">Instant data updates for faster decisions.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-white p-3 rounded-lg shadow-sm h-fit"><Rocket className="w-6 h-6 text-orange-600" /></div>
                            <div>
                                <h3 className="font-bold text-slate-900">99.9% Uptime</h3>
                                <p className="text-sm text-slate-600 mt-1">Reliable infrastructure you can trust.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Custom Icon component for this page only to avoid import issues if not available
const HeadphonesIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
);

export default PricingPage;
