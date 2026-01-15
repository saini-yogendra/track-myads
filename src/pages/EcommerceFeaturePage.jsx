import React from 'react';
import { ShoppingBag, RefreshCw, Globe, Tag, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const EcommerceFeaturePage = () => {
    return (
        <div className="bg-white min-h-screen font-body">

            {/* Hero */}
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#f8fbff] text-center">
                <div className="container mx-auto px-4">
                    <div className="inline-block bg-[#F8D568] text-black px-4 py-2 rounded-full text-xs font-bold mb-6">
                        #Seamless Integration
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 font-display">
                        eCommerce Integration Suite
                    </h1>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10">
                        Connect your store with one click. Automated product feed syncing, coupon tracking, and refund handling for Shopify, WooCommerce, and Magento.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link to="/contact" className="bg-[#1D2B4F] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                            Start Free Trial
                        </Link>
                        <Link to="/resources/api" className="bg-white text-[#1D2B4F] border border-[#1D2B4F] px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all">
                            View API Docs
                        </Link>
                    </div>
                </div>
            </section>

            {/* Tech Stack Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all">
                            <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                                <ShoppingBag size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Shopify Plugin</h3>
                            <p className="text-slate-500 mb-4">Native app available on the Shopify App Store. Install in seconds and start tracking orders immediately.</p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm font-bold text-slate-700"><CheckCircle size={16} className="text-green-500" /> Auto Order Sync</li>
                                <li className="flex items-center gap-2 text-sm font-bold text-slate-700"><CheckCircle size={16} className="text-green-500" /> Refund Handling</li>
                            </ul>
                        </div>
                        <div className="p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all">
                            <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                                <RefreshCw size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">WooCommerce</h3>
                            <p className="text-slate-500 mb-4">Deep integration with WordPress/WooCommerce. Supports subscription products and variable pricing.</p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm font-bold text-slate-700"><CheckCircle size={16} className="text-green-500" /> Coupon Tracking</li>
                                <li className="flex items-center gap-2 text-sm font-bold text-slate-700"><CheckCircle size={16} className="text-green-500" /> Recurring Sales</li>
                            </ul>
                        </div>
                        <div className="p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all">
                            <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                                <Globe size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Custom / Magento</h3>
                            <p className="text-slate-500 mb-4">Flexible S2S postback and JS pixel implementation for Magento, BigCommerce, or custom stacks.</p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm font-bold text-slate-700"><CheckCircle size={16} className="text-green-500" /> Universal Pixel</li>
                                <li className="flex items-center gap-2 text-sm font-bold text-slate-700"><CheckCircle size={16} className="text-green-500" /> API Access</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EcommerceFeaturePage;
