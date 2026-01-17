import React from 'react';
import { BarChart3, Target, Sliders, Layers, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MediaBuyingPage = () => {
    return (
        <div className="bg-white min-h-screen font-body">
            {/* Hero */}
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#1D2B4F] text-white text-center">
                <div className="container mx-auto px-4">
                    <div className="inline-block bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-xs font-bold mb-6">
                        #Ad Spend Optimized
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-display">
                        Media Buying Platform
                    </h1>
                    <p className="text-lg text-orange-200 max-w-2xl mx-auto mb-10">
                        Track costs, optimize bids, and maximize ROAS across all your ad networks in one dashboard.
                    </p>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-24 max-w-6xl mx-auto">
                        <div>
                            <div className="w-16 h-16 bg-orange-50 text-[#fe8023] rounded-2xl flex items-center justify-center mb-6">
                                <BarChart3 size={32} />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display">Cost Aggregation</h2>
                            <p className="text-slate-500 text-lg leading-relaxed mb-6">
                                Automatically pull cost data from Facebook Ads, Google Ads, TikTok, and 50+ other ad networks. See your true ROI/ROAS in real-time without manual CSV uploads.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 font-bold text-slate-700">
                                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><ArrowUpRight size={14} /></div>
                                    Auto-update every 15 mins
                                </li>
                                <li className="flex items-center gap-3 font-bold text-slate-700">
                                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><ArrowUpRight size={14} /></div>
                                    Currency normalization
                                </li>
                            </ul>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-[3rem]">
                            {/* Abstract Chart Placeholder */}
                            <div className="space-y-4">
                                <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                                <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                                <div className="h-32 bg-orange-100 rounded-xl w-full"></div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div className="order-2 md:order-1 bg-slate-50 p-8 rounded-[3rem]">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-xl shadow-sm h-32"></div>
                                <div className="bg-white p-4 rounded-xl shadow-sm h-32"></div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                                <Sliders size={32} />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display">Smart Traffic Rules</h2>
                            <p className="text-slate-500 text-lg leading-relaxed mb-6">
                                Set up automated rules to redirect traffic based on CTR, CR, or EPC. automatically pause low-performing creatives and scale winning ads.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MediaBuyingPage;
