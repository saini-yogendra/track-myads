import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Play, Users, Puzzle, Monitor, Headphones, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const OnboardingPage = () => {
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
                            <div className="inline-block bg-[#FFC107] text-black px-4 py-2 rounded-full text-xs font-bold mb-6">
                                #Journey to success starts
                            </div>

                            <h1 className="text-4xl lg:text-[56px] font-bold text-slate-900 leading-tight mb-6 font-display">
                                On-Boarding
                            </h1>

                            <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                                Our Onboarding Services are designed to help you get started quickly and efficiently. Let our experts handle the setup so you can focus on growing your business.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                                <Link to="/contact" className="bg-[#1a2b4b] hover:bg-[#111c30] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2">
                                    Request Free Trial <ArrowRight size={20} />
                                </Link>
                                <Link to="/resources/case-studies" className="bg-transparent border border-[#1a2b4b] text-[#1a2b4b] hover:bg-slate-50 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center">
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
                                {/* Floating UI Elements */}
                                <div className="absolute top-10 -left-5 bg-white p-3 rounded-xl shadow-lg z-20 animate-bounce-slow hidden md:block">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-blue-100 p-2 rounded-lg"><Monitor className="w-5 h-5 text-blue-600" /></div>
                                        <div>
                                            <div className="text-xs font-bold text-slate-500">Training</div>
                                            <div className="text-sm font-bold text-slate-900">Session</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-20 -right-5 bg-white p-3 rounded-xl shadow-lg z-20 animate-float hidden md:block">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-green-100 p-2 rounded-lg"><Puzzle className="w-5 h-5 text-green-600" /></div>
                                        <div>
                                            <div className="text-xs font-bold text-slate-500">Integration</div>
                                            <div className="text-sm font-bold text-slate-900">Help</div>
                                        </div>
                                    </div>
                                </div>

                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1288&q=80"
                                    alt="Onboarding Expert"
                                    className="rounded-[3rem] shadow-2xl relative z-10 w-full max-w-md mx-auto object-cover h-[500px]"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Alternating Feature Sections */}
            {/* 1. Demonstration Session */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-display">
                                Demonstration Session
                            </h2>
                            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                                Not sure where to start? Book a personalized demo with our product experts. We'll walk you through the platform, showcasing features tailored to your specific business model.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="text-green-500 w-5 h-5" />
                                    <span className="text-slate-700">Explore key features relevant to you</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="text-green-500 w-5 h-5" />
                                    <span className="text-slate-700">Q&A with product specialists</span>
                                </li>
                            </ul>
                        </div>
                        <div className="order-1 lg:order-2 flex justify-center">
                            <div className="bg-blue-50 p-10 rounded-3xl w-full max-w-md flex items-center justify-center">
                                <Video className="w-40 h-40 text-blue-500 opacity-80" strokeWidth={0.8} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Integration Help */}
            <section className="py-24 bg-white border-t border-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="flex justify-center">
                            <div className="bg-green-50 p-10 rounded-3xl w-full max-w-md flex items-center justify-center">
                                <Puzzle className="w-40 h-40 text-green-500 opacity-80" strokeWidth={0.8} />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-display">
                                Integration Help
                            </h2>
                            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                                Migrating from another platform? Our technical team assists with data migration, postback setup, and API integrations to ensure a seamless transition without downtime.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="text-green-500 w-5 h-5" />
                                    <span className="text-slate-700">Seamless data migration</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="text-green-500 w-5 h-5" />
                                    <span className="text-slate-700">Technical API setup assistance</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Training Session */}
            <section className="py-24 bg-white border-t border-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-display">
                                Training Session
                            </h2>
                            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                                Empower your team with in-depth training sessions. We cover everything from campaign creation to advanced reporting, ensuring your team can leverage the full power of Track MyAds.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="text-green-500 w-5 h-5" />
                                    <span className="text-slate-700">Comprehensive platform training</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="text-green-500 w-5 h-5" />
                                    <span className="text-slate-700">Best practices for optimization</span>
                                </li>
                            </ul>
                        </div>
                        <div className="order-1 lg:order-2 flex justify-center">
                            <div className="bg-purple-50 p-10 rounded-3xl w-full max-w-md flex items-center justify-center">
                                <Monitor className="w-40 h-40 text-purple-500 opacity-80" strokeWidth={0.8} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Dedicated Account Manager */}
            <section className="py-24 bg-white border-t border-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="flex justify-center">
                            <div className="bg-orange-50 p-10 rounded-3xl w-full max-w-md flex items-center justify-center">
                                <Headphones className="w-40 h-40 text-orange-500 opacity-80" strokeWidth={0.8} />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-display">
                                Dedicated Account Manager
                            </h2>
                            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                                Get a direct line to success. Your dedicated account manager understands your business goals and provides proactive support, strategy advice, and priority resolution.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="text-green-500 w-5 h-5" />
                                    <span className="text-slate-700">1-on-1 Personalized Support</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="text-green-500 w-5 h-5" />
                                    <span className="text-slate-700">Proactive growth strategies</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Tutorials Grid */}
            <section className="py-24 bg-slate-50 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-12 font-display">Onboarding Video Tutorials</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-white rounded-2xl overflow-hidden shadow-lg group cursor-pointer hover:-translate-y-2 transition-transform duration-300">
                                <div className="aspect-video bg-slate-200 relative flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                        <Play className="w-6 h-6 text-[#1a2b4b] fill-[#1a2b4b] ml-1" />
                                    </div>
                                </div>
                                <div className="p-6 text-left">
                                    <h3 className="font-bold text-lg text-slate-900 mb-2">How to create a campaign</h3>
                                    <p className="text-sm text-slate-500">Step-by-step guide to launching your first offer on the platform.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12">
                        <Link to="/resources/video-tutorial" className="text-[#1a2b4b] font-bold hover:underline flex items-center justify-center gap-2">
                            View all tutorials <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="bg-[#f8f9fa] rounded-[2rem] border border-slate-200 p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">

                        <div className="relative z-10 text-center md:text-left">
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-display">Start your 14 days free trial</h2>
                            <div className="flex flex-wrap gap-6 text-slate-600 font-medium justify-center md:justify-start">
                                <span className="flex items-center gap-2"><CheckCircle className="text-blue-500" size={20} /> Trusted by 850+ Companies</span>
                                <span className="flex items-center gap-2"><CheckCircle className="text-blue-500" size={20} /> No credit card required</span>
                                <span className="flex items-center gap-2"><CheckCircle className="text-blue-500" size={20} /> Support 24/7</span>
                            </div>
                        </div>

                        <div className="relative z-10">
                            <Link to="/contact" className="inline-block bg-[#1a2b4b] text-white hover:bg-[#111c30] px-12 py-5 rounded-xl font-bold text-lg shadow-xl transition-all hover:scale-105 whitespace-nowrap">
                                Request Free Trial
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OnboardingPage;
