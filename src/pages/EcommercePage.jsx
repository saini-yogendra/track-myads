import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, ShoppingBag, ShoppingCart, TrendingUp, BarChart2, Globe, Truck, CreditCard, Gift, Archive, Smartphone, Grid } from 'lucide-react';
import { Link } from 'react-router-dom';

const EcommercePage = () => {
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
                            <div className="inline-block bg-[#ffcc00] text-black px-4 py-2 rounded-full text-xs font-bold mb-6">
                                #Performance tools for eCommerce Campaigns
                            </div>

                            <h1 className="text-4xl lg:text-[52px] font-bold text-slate-900 leading-tight mb-6 font-display">
                                Ecommerce Campaigns Tracking Software
                            </h1>

                            <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                                Maximize your ROI and get insights that can help you personalize customer experience. Get the most out of your eCommerce store!
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                                <Link to="/contact" className="bg-[#111827] hover:bg-black text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2">
                                    Request Free Trial <ArrowRight size={20} />
                                </Link>
                                <Link to="/resources/case-studies" className="bg-transparent border border-[#111827] text-[#111827] hover:bg-slate-50 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center">
                                    Customer Stories
                                </Link>
                            </div>

                            {/* Trust Badges */}
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start opacity-70 grayscale mb-6">
                                <div className="border border-slate-300 rounded px-2 py-1 text-xs font-bold">Capterra</div>
                                <div className="border border-slate-300 rounded px-2 py-1 text-xs font-bold">G2 Leader</div>
                                <div className="border border-slate-300 rounded px-2 py-1 text-xs font-bold">Crozdesk</div>
                                <div className="border border-slate-300 rounded px-2 py-1 text-xs font-bold">OfferVault</div>
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
                                {/* Floating Icons */}
                                <div className="absolute top-0 left-0 bg-white p-3 rounded-full shadow-lg z-20 animate-bounce-slow hidden md:block">
                                    <ShoppingBag className="w-6 h-6 text-pink-500" />
                                </div>
                                <div className="absolute bottom-10 right-0 bg-white p-3 rounded-full shadow-lg z-20 animate-pulse hidden md:block">
                                    <TrendingUp className="w-6 h-6 text-green-500" />
                                </div>
                                <div className="absolute top-1/2 -right-5 bg-white p-3 rounded-full shadow-lg z-20 animate-float hidden md:block">
                                    <Truck className="w-6 h-6 text-[#fe8023]" />
                                </div>

                                <img
                                    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                    alt="Ecommerce Analytics"
                                    className="rounded-[3rem] shadow-2xl relative z-10 w-full max-w-md mx-auto object-cover h-[500px]"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 bg-slate-50 text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">
                        Elevate your eCommerce game, leading every click to success!
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        In the fast-paced world of eCommerce, knowing your customer is key. Our software provides real-time tracking of every click, conversion, and interaction, allowing you to optimize your store for maximum profitability.
                    </p>
                </div>
            </section>

            {/* Platform Integration: Shopify */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 flex justify-center">
                            <div className="bg-[#95BF47]/10 p-10 rounded-3xl w-full max-w-md flex items-center justify-center">
                                <ShoppingBag className="w-40 h-40 text-[#95BF47]" strokeWidth={0.8} />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-block bg-[#95BF47] text-white px-4 py-1 rounded-full text-sm font-bold mb-4">Shopify</div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-display">
                                Comprehensive Marketing Solution for Shopify
                            </h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Seamlessly integrate with your Shopify store. Track product views, add-to-carts, and purchases automatically without complex coding.
                            </p>
                            <Link to="/contact" className="inline-block bg-[#95BF47] text-white hover:bg-[#7fa33b] px-6 py-3 rounded-lg font-bold transition-all shadow-md">
                                Schedule a Call with Experts
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platform Integration: WooCommerce */}
            <section className="py-24 bg-white border-t border-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-block bg-[#96588a] text-white px-4 py-1 rounded-full text-sm font-bold mb-4">WooCommerce</div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-display">
                                Track All Shopping of WooCommerce
                            </h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Turn your WordPress site into a tracking powerhouse. Monitor every sale and attribute it to the correct marketing channel instantly.
                            </p>
                            <Link to="/contact" className="inline-block bg-[#96588a] text-white hover:bg-[#7a4670] px-6 py-3 rounded-lg font-bold transition-all shadow-md">
                                Schedule a Call with Experts
                            </Link>
                        </div>
                        <div className="flex justify-center">
                            <div className="bg-[#96588a]/10 p-10 rounded-3xl w-full max-w-md flex items-center justify-center">
                                <ShoppingCart className="w-40 h-40 text-[#96588a]" strokeWidth={0.8} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platform Integration: BigCommerce */}
            <section className="py-24 bg-white border-t border-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 flex justify-center">
                            <div className="bg-[#121118]/10 p-10 rounded-3xl w-full max-w-md flex items-center justify-center">
                                <StoreIcon className="w-40 h-40 text-[#121118]" />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-block bg-[#121118] text-white px-4 py-1 rounded-full text-sm font-bold mb-4">BigCommerce</div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-display">
                                Monitor Sales and Orders of BigCommerce
                            </h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Get granular data on your BigCommerce store's performance. Identify your most profitable products and optimize your ad spend accordingly.
                            </p>
                            <Link to="/contact" className="inline-block bg-[#121118] text-white hover:bg-black px-6 py-3 rounded-lg font-bold transition-all shadow-md">
                                Schedule a Call with Experts
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platform Integration: Magento */}
            <section className="py-24 bg-white border-t border-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-block bg-[#f37021] text-white px-4 py-1 rounded-full text-sm font-bold mb-4">Magento</div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-display">
                                Robust Marketing Solution for Magento
                            </h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Enterprise-grade tracking for your Magento store. Handle high volumes of traffic and transactions with ease.
                            </p>
                            <Link to="/contact" className="inline-block bg-[#f37021] text-white hover:bg-[#d65f18] px-6 py-3 rounded-lg font-bold transition-all shadow-md">
                                Schedule a Call with Experts
                            </Link>
                        </div>
                        <div className="flex justify-center">
                            <div className="bg-[#f37021]/10 p-10 rounded-3xl w-full max-w-md flex items-center justify-center">
                                <Archive className="w-40 h-40 text-[#f37021]" strokeWidth={0.8} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Track MyAds / Features List */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-display">
                                Why Track MyAds Should Be Your First Choice?
                            </h2>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                We've built the ultimate toolset for eCommerce marketers who demand precision and performance.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                "Intuitive and Robust Platform",
                                "Real-Time Analytics",
                                "Cross-Channel Tracking",
                                "Conversion Attribution",
                                "Maximize ROI",
                                "Optimized Marketing Budget",
                                "Enhanced Reporting"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <CheckCircle className="text-green-400 w-5 h-5 flex-shrink-0" />
                                    <span className="font-medium text-lg">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Platforms Grid */}
            <section className="py-20 bg-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-slate-900 mb-12">Transform Your eCommerce Marketing Analytics</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholders for logos, using stylized text for now to avoid broken images */}
                        {['Wix', 'PrestaShop', 'Miva', 'SendOwl', 'X-Cart', 'Samcart', 'Zoey', 'Volusion', 'Sellfy', 'Ecwid', 'Dukaan', 'Shopmatic'].map((name, i) => (
                            <div key={i} className="flex items-center justify-center font-bold text-xl text-slate-400 border border-slate-100 p-4 rounded-xl hover:border-orange-200 hover:text-[#fe8023] hover:shadow-sm transition-all cursor-default">
                                {name}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* eBook Lead Magnet */}
            <section className="py-20 bg-orange-50">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-[2rem] shadow-xl p-8 md:p-12 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/3">
                            <div className="aspect-[3/4] bg-slate-200 rounded-xl flex items-center justify-center text-slate-400 font-bold border-4 border-white shadow-lg transform -rotate-3 hover:rotate-0 transition-transform">
                                eBook Cover
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display">How to Convert Sales Leads in Online Shopping</h2>
                            <p className="text-slate-600 mb-8 text-lg">
                                Take one more Step Towards Success. Download our comprehensive guide to mastering eCommerce conversions in 2024.
                            </p>
                            <button className="bg-[#111827] text-white hover:bg-black px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all hover:scale-105 flex items-center gap-3">
                                <Grid className="w-5 h-5" /> Download Guide
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-display">Maximize Your eCommerce Potential</h2>
                        <p className="text-slate-500 text-lg mb-8">
                            Try with 10 days free trial. No credit card required.
                        </p>
                        <Link to="/contact" className="inline-block bg-[#111827] text-white hover:bg-black px-12 py-5 rounded-xl font-bold text-lg shadow-xl transition-all hover:scale-105">
                            Request Free Trial
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Simple Icon Component for visual consistency
const StoreIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 4h16v2H4V4zm0 4h16v12H4V8zm2 2v8h12v-8H6z" />
    </svg>
);

export default EcommercePage;
