import React from 'react';
import { Check, Rocket, Zap, Shield, Users, Globe } from 'lucide-react';

const PricingSection = () => {

    const startupPlans = [
        {
            name: 'Beginner',
            price: '29',
            period: '/ mo',
            description: 'For small agencies, networks and brands beginning their affiliate program that only need a limited number of campaigns and basic tracking features',
            features: [
                '4000 conversions',
                '150000 Clicks',
                'Unlimited Offers',
                'Unlimited partners',
                'Unlimited users'
            ],
            highlight: false,
            dark: false,
            buttonText: 'Signup Now'
        },
        {
            name: 'Core',
            price: '99',
            period: '/ mo',
            description: 'For small agencies, networks that manage a limited number of campaigns and only need core features',
            features: [
                '15000 conversions',
                '550000 Clicks',
                'Unlimited Offers',
                'Unlimited partners',
                'Unlimited users'
            ],
            highlight: true,
            dark: true,
            buttonText: 'Signup Now'
        },
        {
            name: 'Expand',
            price: '199',
            period: '/ mo',
            description: 'For medium size agencies, networks that manage several campaigns and need more advanced tracking and targeting capabilities plus additional support',
            features: [
                '32000 conversions',
                '1.5 M Clicks',
                'Unlimited Offers',
                'Unlimited partners',
                'Unlimited users'
            ],
            highlight: false,
            dark: false,
            buttonText: 'Signup Now'
        },
        {
            name: 'Custom',
            price: 'Custom',
            period: '',
            description: 'For large agencies, networks that need comprehensive tracking and targeting capabilities, fully flexible platform integration and exclusive support',
            features: [
                'Conversions - Tailored',
                'Impressions - Tailored',
                'Custom domains - Tailored',
                'Unlimited offers',
                'Unlimited partners',
                'Unlimited users'
            ],
            highlight: false,
            dark: true,
            buttonText: 'Schedule a Call'
        }
    ];

    return (
        <div id="pricing" className="bg-slate-50">

            {/* Header Section */}
            <section className="py-20 text-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-block bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
                        Try with <span className="text-yellow-600 bg-yellow-100 px-2 py-0.5 rounded-md mx-1">10 days</span> free trial
                    </div>
                    <h1 className="text-4xl lg:text-[48px] font-bold text-slate-900 leading-tight mb-4 font-display">
                        Pricing & Plans
                    </h1>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap gap-4 justify-center opacity-70 grayscale mb-12">
                        <div className="border border-slate-200 px-3 py-1 rounded text-xs font-bold text-slate-600">Capterra <br /><span className="font-normal text-[10px]">User Reviews</span></div>
                        <div className="border border-slate-200 px-3 py-1 rounded text-xs font-bold text-slate-600">G2 <br /><span className="font-normal text-[10px]">Best Support</span></div>
                        <div className="border border-slate-200 px-3 py-1 rounded text-xs font-bold text-slate-600">Crozdesk <br /><span className="font-normal text-[10px]">Quality Choice</span></div>
                        <div className="border border-slate-200 px-3 py-1 rounded text-xs font-bold text-slate-600">OfferVault <br /><span className="font-normal text-[10px]">Top Platform</span></div>
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="pb-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto mb-20">
                        {startupPlans.map((plan) => (
                            <div key={plan.name} className={`relative flex flex-col p-6 rounded-3xl transition-all ${plan.dark ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-900 hover:border-slate-300'} ${plan.highlight ? 'shadow-2xl scale-105 z-10' : ''}`}>
                                {plan.highlight && (
                                    <div className="absolute top-0 right-0 bg-[#F8D568] text-black text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                                        Most Popular
                                    </div>
                                )}
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold mb-2 font-display">{plan.name}</h3>
                                    <p className={`text-sm ${plan.dark ? 'text-slate-400' : 'text-slate-500'}`}>{plan.description}</p>
                                </div>
                                <div className="mb-8">
                                    {plan.price !== 'Custom' && <span className="text-2xl font-bold align-top">$</span>}
                                    <span className="text-4xl font-bold mx-1">{plan.price}</span>
                                    <span className={`text-sm ${plan.dark ? 'text-slate-400' : 'text-slate-500'}`}>{plan.period}</span>
                                </div>
                                <div className="flex-grow mb-8 space-y-4">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <Check className={`w-5 h-5 flex-shrink-0 ${plan.dark ? 'text-green-400' : 'text-green-500'}`} strokeWidth={3} />
                                            <span className={`text-sm font-medium ${plan.dark ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <a href="#contact" className={`w-full py-4 rounded-xl font-bold text-center transition-all ${plan.dark ? 'bg-[#0046af] hover:bg-[#003690] text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'}`}>
                                    {plan.buttonText}
                                </a>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Key Features List */}
            <section className="py-20 bg-white border-t border-slate-200">
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
                        {/* <div className="flex gap-4">
                            <div className="bg-white p-3 rounded-lg shadow-sm h-fit"><Shield className="w-6 h-6 text-red-600" /></div>
                            <div>
                                <h3 className="font-bold text-slate-900">Fraud Detection (Basic)</h3>
                                <p className="text-sm text-slate-600 mt-1">Stay safe with our built-in basic security tools.</p>
                            </div>
                        </div> */}
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

export default PricingSection;
