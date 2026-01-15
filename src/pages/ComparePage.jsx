import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, XCircle, Zap, Shield, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComparePage = () => {
    const competitors = [
        { name: "Affise", logo: "https://via.placeholder.com/150x50?text=Affise" },
        { name: "Tune (HasOffers)", logo: "https://via.placeholder.com/150x50?text=Tune" },
        { name: "Everflow", logo: "https://via.placeholder.com/150x50?text=Everflow" },
        { name: "Voluum", logo: "https://via.placeholder.com/150x50?text=Voluum" },
        { name: "Cake", logo: "https://via.placeholder.com/150x50?text=Cake" },
        { name: "Scaleo", logo: "https://via.placeholder.com/150x50?text=Scaleo" }
    ];

    const features = [
        { name: "24/7 Live Support", us: true, them: "Limited" },
        { name: "Free Migration", us: true, them: false },
        { name: "Smart Fraud Detection", us: true, them: "Extra Cost" },
        { name: "Custom Domain SSL", us: true, them: "Extra Cost" },
        { name: "Uptime Guarantee", us: "99.99%", them: "99.9%" },
        { name: "Real-time Reporting", us: true, them: true },
        { name: "Automation Tools", us: true, them: "Limited" },
    ];

    return (
        <div className="bg-white min-h-screen font-body">

            {/* Hero Section */}
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 text-center bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-block bg-[#F8D568] text-black px-4 py-2 rounded-full text-xs font-bold mb-6 shadow-sm">
                        #Why we are better
                    </div>

                    <h1 className="text-4xl lg:text-[56px] font-bold text-slate-900 leading-tight mb-6 font-display">
                        Compare Track MyAds vs Others
                    </h1>

                    <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Don't just take our word for it. See how we stack up against the leading competitors in features, support, and pricing.
                    </p>
                </div>
            </section>

            {/* Competitor Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display">Select a Competitor to Compare</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
                        {competitors.map((comp, index) => (
                            <div key={index} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col items-center text-center cursor-pointer group">
                                <div className="h-16 flex items-center justify-center mb-6 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                                    <span className="text-2xl font-bold text-slate-400 group-hover:text-[#1D2B4F]">{comp.name}</span>
                                </div>
                                <h3 className="font-bold text-lg text-slate-900 mb-2">Track MyAds vs {comp.name}</h3>
                                <div className="mt-auto pt-4 text-blue-600 font-bold text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    View Comparison <ArrowRight size={16} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* General Comparison Table */}
                    <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
                        <div className="bg-[#1D2B4F] text-white p-8 text-center">
                            <h2 className="text-2xl font-bold font-display">Head-to-Head Feature Comparison</h2>
                        </div>
                        <div className="p-8 lg:p-12">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b-2 border-slate-100">
                                            <th className="text-left py-6 px-4 text-slate-500 font-medium w-1/2">Key Features</th>
                                            <th className="text-center py-6 px-4 text-[#1D2B4F] font-bold text-xl w-1/4 bg-blue-50/50 rounded-t-xl">Track MyAds</th>
                                            <th className="text-center py-6 px-4 text-slate-400 font-bold text-xl w-1/4">Others</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {features.map((feat, i) => (
                                            <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                                                <td className="py-6 px-4 font-bold text-slate-700">{feat.name}</td>
                                                <td className="py-6 px-4 text-center bg-blue-50/30">
                                                    {feat.us === true ? <CheckCircle className="inline text-green-500" /> : <span className="font-bold text-slate-900">{feat.us}</span>}
                                                </td>
                                                <td className="py-6 px-4 text-center">
                                                    {feat.them === false ? <XCircle className="inline text-red-300" /> :
                                                        feat.them === true ? <CheckCircle className="inline text-slate-400" /> :
                                                            <span className="text-slate-400 font-medium">{feat.them}</span>}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Why Switch Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 text-blue-600">
                                <Headphones className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Better Support</h3>
                            <p className="text-slate-500">We don't use bots. Get connected to a real migration expert instantly 24/7/365.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 text-green-600">
                                <Zap className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Faster Setup</h3>
                            <p className="text-slate-500">Go live in minutes, not days. Our intuitive UI makes onboarding your team a breeze.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 text-purple-600">
                                <Shield className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Reliable Uptime</h3>
                            <p className="text-slate-500">With 99.99% uptime, you never lose a click. We are built for high-volume scale.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="bg-[#1D2B4F] rounded-[2rem] shadow-2xl p-12 lg:p-16 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">Ready to make the switch?</h2>
                        <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
                            Join 850+ companies who moved to Track MyAds for better performance.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="inline-block bg-white text-[#1D2B4F] hover:bg-slate-100 px-12 py-5 rounded-full font-bold text-lg shadow-xl transition-all hover:scale-105 whitespace-nowrap">
                                Request Free Trial
                            </Link>
                            <Link to="/services/migration" className="inline-block bg-transparent border border-white text-white hover:bg-white/10 px-12 py-5 rounded-full font-bold text-lg transition-all whitespace-nowrap">
                                View Migration Plan
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ComparePage;
