import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="relative overflow-hidden bg-white pt-32 pb-12 lg:pt-40 lg:pb-16">
            {/* Background decorative shapes */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-40 left-10 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-6 text-center lg:text-left z-10"
                    >
                        {/* Top Badge */}
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-50 border border-yellow-200 text-sm font-semibold text-orange-800 mb-8 animate-fade-in-up">
                            <span className="flex h-2 w-2 rounded-full bg-orange-500 mr-3 animate-pulse"></span>
                            Track MyAds – Track Smarter. Grow Faster. <Link to="/pricing" className="ml-2 text-primary hover:underline">Check Pricing →</Link>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl sm:text-6xl lg:text-[64px] font-bold tracking-tight text-slate-900 leading-[1.1] mb-6 font-display">
                            Performance <br className="hidden lg:block" />
                            <span className="text-primary relative inline-block">
                                Marketing Platform
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-300 -z-10" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.00025 6.99997C25.7501 2.99991 75.3339 3.99992 198.001 2.00003" stroke="currentColor" strokeWidth="3"></path>
                                </svg>
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
                            Smart campaign tracking software that enables affiliates, advertisers, and networks to track, analyze, and optimize campaigns effortlessly.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                            <Link to="/contact" className="w-full sm:w-auto px-9 py-4 bg-[#1a2b4b] hover:bg-[#152238] text-white rounded-lg text-[16px] font-bold shadow-xl shadow-blue-900/10 hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group">
                                Request Free Trial <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/contact" className="w-full sm:w-auto px-9 py-4 bg-white border-2 border-slate-300 hover:border-primary text-slate-700 hover:text-primary rounded-lg text-[16px] font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                                Schedule a call
                            </Link>
                        </div>

                        {/* Trust Badge */}

                    </motion.div>

                    {/* Right Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-6 mt-20 lg:mt-0 relative"
                    >
                        {/* Main Dashboard Mockup */}
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                                alt="Dashboard Preview"
                                className="rounded-2xl shadow-2xl w-full relative z-10"
                            />

                            {/* Floating geometric shapes */}
                            <div className="absolute -top-8 -left-8 w-16 h-16 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
                            <div className="absolute top-1/4 -right-8 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-bounce-slow"></div>
                            <div className="absolute -bottom-8 left-1/4 w-20 h-20 bg-pink-500 rounded-full opacity-20 animate-pulse"></div>

                            {/* Floating dots pattern */}
                            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    <circle cx="10" cy="10" r="2" fill="currentColor" className="text-blue-600" />
                                    <circle cx="30" cy="10" r="2" fill="currentColor" className="text-blue-600" />
                                    <circle cx="50" cy="10" r="2" fill="currentColor" className="text-blue-600" />
                                    <circle cx="70" cy="10" r="2" fill="currentColor" className="text-blue-600" />
                                    <circle cx="90" cy="10" r="2" fill="currentColor" className="text-blue-600" />
                                    <circle cx="10" cy="30" r="2" fill="currentColor" className="text-blue-600" />
                                    <circle cx="30" cy="30" r="2" fill="currentColor" className="text-blue-600" />
                                    <circle cx="50" cy="30" r="2" fill="currentColor" className="text-blue-600" />
                                    <circle cx="70" cy="30" r="2" fill="currentColor" className="text-blue-600" />
                                    <circle cx="90" cy="30" r="2" fill="currentColor" className="text-blue-600" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Hero;
