import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Headphones, Mail, Phone, MessageSquare, BookOpen, Video, Clock, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomerSupportPage = () => {
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
                            <div className="inline-block bg-[#FFD166] text-black px-4 py-2 rounded-full text-xs font-bold mb-6 shadow-sm">
                                #Your satisfaction is our ultimate goal
                            </div>

                            <h1 className="text-4xl lg:text-[56px] font-bold text-slate-900 leading-tight mb-6 font-display">
                                Award Winning Customer Support
                            </h1>

                            <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                                Our customer support services have earned numerous prestigious awards from esteemed organisations, a testament to the satisfaction of our users.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                                <Link to="/contact" className="bg-[#1D2B4F] hover:bg-[#111c30] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg flex items-center justify-center gap-2">
                                    Request Free Trial <ArrowRight size={20} />
                                </Link>
                                <Link to="/resources/case-studies" className="bg-transparent border border-[#111827] text-[#111827] hover:bg-slate-50 px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center">
                                    Customer Stories
                                </Link>
                            </div>

                            {/* Award Badges Row */}
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start opacity-70 grayscale mb-8">
                                <div className="border border-slate-300 rounded px-2 py-1 text-xs font-bold flex flex-col items-center">
                                    <span>Capterra</span>
                                    <span className="text-[10px]">User Reviews</span>
                                </div>
                                <div className="border border-slate-300 rounded px-2 py-1 text-xs font-bold flex flex-col items-center">
                                    <span>G2</span>
                                    <span className="text-[10px]">Best Support</span>
                                </div>
                                <div className="border border-slate-300 rounded px-2 py-1 text-xs font-bold flex flex-col items-center">
                                    <span>Crozdesk</span>
                                    <span className="text-[10px]">Quality Choice</span>
                                </div>
                                <div className="border border-slate-300 rounded px-2 py-1 text-xs font-bold flex flex-col items-center">
                                    <span>OfferVault</span>
                                    <span className="text-[10px]">Top Tracking</span>
                                </div>
                            </div>

                            {/* Logos Bar */}
                            <div className="flex flex-wrap gap-6 items-center justify-center lg:justify-start opacity-50 grayscale">
                                <span className="text-xs font-bold font-display uppercase tracking-wider">Featured In:</span>
                                <div className="text-sm font-bold">Yahoo! Finance</div>
                                <div className="text-sm font-bold">Businesswire</div>
                                <div className="text-sm font-bold">ANI</div>
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
                                <div className="absolute inset-0 bg-pink-100 rounded-full transform rotate-6 -z-10 scale-90"></div>

                                {/* Floating UI Elements */}
                                <div className="absolute top-10 right-0 bg-white p-3 rounded-full shadow-lg z-20 animate-bounce-slow hidden md:flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-blue-600" />
                                    <span className="text-xs font-bold text-slate-900">Available 24x7</span>
                                </div>
                                <div className="absolute bottom-20 left-0 bg-white p-3 rounded-full shadow-lg z-20 animate-float hidden md:flex items-center gap-2">
                                    <Video className="w-5 h-5 text-red-500" />
                                    <span className="text-xs font-bold text-slate-900">Video Tutorials</span>
                                </div>
                                <div className="absolute top-1/2 -right-10 bg-white p-3 rounded-full shadow-lg z-20 animate-pulse hidden md:flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-green-500" />
                                    <span className="text-xs font-bold text-slate-900">Knowledge Base</span>
                                </div>

                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1288&q=80"
                                    alt="Customer Support Agent"
                                    className="rounded-[3rem] shadow-2xl relative z-10 w-full max-w-md mx-auto object-cover h-[500px]"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Alternating Feature Sections */}
            {/* 1. Round-the-Clock Support */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-display">
                                Round-the-Clock Support
                            </h2>
                            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                                Our support team works 24/7/365 to ensure your business never stops. Whether it's a technical issue or a quick question, we're always here to listen and provide prompt assistance.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="text-green-500 w-5 h-5" />
                                    <span className="text-slate-700">Immediate response times</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="text-green-500 w-5 h-5" />
                                    <span className="text-slate-700">Global coverage in all time zones</span>
                                </li>
                            </ul>
                        </div>
                        <div className="order-1 lg:order-2 flex justify-center">
                            <div className="bg-blue-50 p-10 rounded-full w-80 h-80 flex items-center justify-center shadow-inner">
                                <Clock className="w-40 h-40 text-blue-500 opacity-80" strokeWidth={0.8} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Knowledge Base */}
            <section className="py-24 bg-white border-t border-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="flex justify-center">
                            <div className="bg-green-50 p-10 rounded-full w-80 h-80 flex items-center justify-center shadow-inner">
                                <BookOpen className="w-40 h-40 text-green-500 opacity-80" strokeWidth={0.8} />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-display">
                                Explore our Knowledge Base
                            </h2>
                            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                                Empower yourself with our comprehensive library of articles, guides, and FAQs. Find answers to common questions and learn how to use advanced features at your own pace.
                            </p>
                            <Link to="/resources/guide" className="text-[#1D2B4F] font-bold hover:underline flex items-center gap-2">
                                Visit Knowledge Base <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Multi-Channel Support */}
            <section className="py-24 bg-white border-t border-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-display">
                                Multi-Channel Support
                            </h2>
                            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                                Reach us the way you prefer. We provide support via Live Chat for instant help, Email for detailed inquiries, and Phone text for urgent matters.
                            </p>
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center gap-2 bg-slate-50 p-4 rounded-xl w-24">
                                    <MessageSquare className="w-6 h-6 text-blue-600" />
                                    <span className="text-xs font-bold text-slate-700">Chat</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 bg-slate-50 p-4 rounded-xl w-24">
                                    <Mail className="w-6 h-6 text-red-600" />
                                    <span className="text-xs font-bold text-slate-700">Email</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 bg-slate-50 p-4 rounded-xl w-24">
                                    <Phone className="w-6 h-6 text-green-600" />
                                    <span className="text-xs font-bold text-slate-700">Phone</span>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 flex justify-center">
                            <div className="bg-purple-50 p-10 rounded-full w-80 h-80 flex items-center justify-center shadow-inner">
                                <Headphones className="w-40 h-40 text-purple-500 opacity-80" strokeWidth={0.8} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Video Tutorials */}
            <section className="py-24 bg-white border-t border-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="flex justify-center">
                            <div className="bg-orange-50 p-10 rounded-full w-80 h-80 flex items-center justify-center shadow-inner">
                                <Video className="w-40 h-40 text-orange-500 opacity-80" strokeWidth={0.8} />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-display">
                                Accessible Video Tutorials
                            </h2>
                            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                                prefer watching over reading? Check out our step-by-step video tutorials that guide you through platform features, setup processes, and meaningful use cases.
                            </p>
                            <Link to="/resources/video-tutorial" className="text-[#1D2B4F] font-bold hover:underline flex items-center gap-2">
                                Watch Tutorials <ArrowRight size={16} />
                            </Link>
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
                            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start opacity-80">
                                <Globe className="w-5 h-5" />
                                <span className="font-bold tracking-wider uppercase text-sm">Global Support</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">Ready to Experience Exceptional Support?</h2>

                            <div className="flex flex-wrap gap-6 text-blue-200 font-medium justify-center md:justify-start">
                                <span className="flex items-center gap-2"><CheckCircle className="text-blue-400" size={20} /> No credit card required</span>
                            </div>
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

export default CustomerSupportPage;
