import React from 'react';
import { CheckCircle2, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const CoreFeatures = () => {
    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Video Placeholder Section */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 group">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
                                alt="Platform Dashboard"
                                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-secondary/30 group-hover:bg-secondary/20 transition-colors flex items-center justify-center">
                                <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 text-primary hover:text-secondary cursor-pointer">
                                    <Play size={32} fill="currentColor" className="ml-1" />
                                </button>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-50 rounded-full blur-3xl -z-10"></div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Product Tour</span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-8 font-display">
                            What Do You Get With <span className="text-primary">Track MyAds</span>?
                        </h2>

                        <div className="space-y-8">


                            <div className="flex gap-4">
                                <div className="mt-1">
                                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-2">Offer Automation</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Automate your daily tasks like offer status updates, payout changes, and cap management with our smart automation rules.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="mt-1">
                                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-2">Link Tester</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Verify your tracking links instantly with our integrated link tester to ensure 100% accuracy before launching campaigns.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <a href="#" className="bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg inline-flex items-center gap-2">
                                Explorer All Features <Play size={16} fill="currentColor" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CoreFeatures;
