import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Database, Server, Headphones, FileText, Upload, RefreshCw, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const MigrationPage = () => {
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
                            <div className="inline-block bg-[#F8D568] text-black px-4 py-2 rounded-full text-xs font-bold mb-6 shadow-sm">
                                #A hassle-free migration experience
                            </div>

                            <h1 className="text-4xl lg:text-[56px] font-bold text-slate-900 leading-tight mb-6 font-display">
                                Migration
                            </h1>

                            <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                                Our migration process will ensure that your existing data is migrated from your outdated technology provider in a smooth and efficient manner.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                                <Link to="/contact" className="bg-[#1D2B4F] hover:bg-[#111c30] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg flex items-center justify-center gap-2">
                                    Request Free Trial <ArrowRight size={20} />
                                </Link>
                                <Link to="/resources/case-studies" className="bg-transparent border border-[#111827] text-[#111827] hover:bg-slate-50 px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center">
                                    Customer Stories
                                </Link>
                            </div>

                            {/* Trust Badges */}
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start opacity-70 grayscale mb-6">
                                <div className="border border-slate-300 rounded px-2 py-1 text-xs font-bold">Capterra</div>
                                <div className="border border-slate-300 rounded px-2 py-1 text-xs font-bold">G2 Best Support</div>
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
                                {/* Decorative Background */}
                                <div className="absolute inset-0 bg-pink-50 rounded-[3rem] transform -rotate-3 -z-10 border-2 border-dashed border-pink-200"></div>

                                {/* Floating UI Elements */}
                                <div className="absolute top-10 left-0 bg-white p-3 rounded-lg shadow-lg z-20 animate-bounce-slow hidden md:block">
                                    <div className="flex items-center gap-2">
                                        <Database className="w-5 h-5 text-[#fe8023]" />
                                        <span className="text-xs font-bold text-slate-900">Data Transfer</span>
                                    </div>
                                </div>
                                <div className="absolute bottom-20 right-0 bg-white p-3 rounded-lg shadow-lg z-20 animate-float hidden md:block">
                                    <div className="flex items-center gap-2">
                                        <Server className="w-5 h-5 text-green-600" />
                                        <span className="text-xs font-bold text-slate-900">Zero Downtime</span>
                                    </div>
                                </div>

                                <img
                                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
                                    alt="Migration Assistance"
                                    className="rounded-[3rem] shadow-2xl relative z-10 w-full max-w-md mx-auto object-cover h-[500px]"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Reasons to Switch */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 font-display">
                            Why switch to Track MyAds?
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            We've eliminated the pain points of platform migration.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-3xl bg-orange-50 border border-orange-100 hover:shadow-lg transition-all group">
                            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#fe8023] mb-6 group-hover:scale-110 transition-transform">
                                <Upload className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">One-Click Import</h3>
                            <p className="text-slate-600">Abolish manual work. Upload your Advertisers and Affiliates lists in bulk with a single click using our CSV importer.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-green-50 border border-green-100 hover:shadow-lg transition-all group">
                            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
                                <RefreshCw className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Campaign Migration</h3>
                            <p className="text-slate-600">Don't lose your live traffic. Our migration tools exist to move your campaigns without interrupting tracking links.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-purple-50 border border-purple-100 hover:shadow-lg transition-all group">
                            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                                <Headphones className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Dedicated Support</h3>
                            <p className="text-slate-600">Our technical team works with you side-by-side to ensure every setting, pixel, and postback is configured correctly.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Migration Process Steps */}
            <section className="py-24 bg-white border-t border-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 font-display">
                            Our Migration Process
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            We follow a structured 4-step approach to ensure zero data loss.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -z-10 transform -translate-y-1/2"></div>

                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center relative hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 border-4 border-white">1</div>
                                <h3 className="font-bold text-lg mb-2">Preparation</h3>
                                <p className="text-sm text-slate-500">Review our migration guide and prepare your data exports.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center relative hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 border-4 border-white">2</div>
                                <h3 className="font-bold text-lg mb-2">Data Transfer</h3>
                                <p className="text-sm text-slate-500">Use our efficient tools to import partners and offers.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center relative hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 border-4 border-white">3</div>
                                <h3 className="font-bold text-lg mb-2">Assistance</h3>
                                <p className="text-sm text-slate-500">Personalized help for complex integrations and API setups.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center relative hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 border-4 border-white">4</div>
                                <h3 className="font-bold text-lg mb-2">Support</h3>
                                <p className="text-sm text-slate-500">Post-migration checkups and optimization advice.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="bg-[#1D2B4F] rounded-[2rem] shadow-2xl p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden text-white">

                        {/* Decorative */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                        <div className="relative z-10 text-center md:text-left">
                            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start opacity-80 text-orange-200">
                                <ShieldCheck className="w-5 h-5" />
                                <span className="font-bold tracking-wider uppercase text-sm">Secure Migration</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display">Try with 10 days free trial</h2>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-orange-100 justify-center lg:justify-start">
                                    <CheckCircle className="w-5 h-5 text-green-400" /> No credit card required
                                </li>
                            </ul>
                        </div>

                        <div className="relative z-10">
                            <Link to="/contact" className="inline-block bg-white text-[#1D2B4F] hover:bg-slate-100 px-12 py-5 rounded-full font-bold text-lg shadow-xl transition-all hover:scale-105 whitespace-nowrap">
                                Request Free Trial
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MigrationPage;
