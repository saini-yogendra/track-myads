import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Play, Users, Globe, Award, Briefcase, TrendingUp, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
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
                                #Best Tracking Platform
                            </div>

                            <h1 className="text-4xl lg:text-[56px] font-bold text-slate-900 leading-tight mb-6 font-display">
                                About Track MyAds
                            </h1>

                            <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                                TrackMyAds is a performance tracking platform built for affiliates and advertisers who demand clarity, precision, and control over their marketing efforts. Designed to deliver advanced data analytics and end-to-end campaign tracking, TrackMyAds empowers businesses to understand and optimize every touchpoint in the customer journey.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                                <Link to="/contact" className="bg-[#1D2B4F] hover:bg-[#111c30] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2">
                                    Start free trial <ArrowRight size={20} />
                                </Link>
                            </div>
                        </motion.div>

                        {/* Hero Video Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative flex justify-center"
                        >
                            <div className="relative w-full max-w-lg aspect-video bg-slate-100 rounded-3xl shadow-2xl overflow-hidden border-4 border-white flex items-center justify-center group cursor-pointer">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                    alt="About Track MyAds"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300">
                                    <Play className="w-8 h-8 text-[#1D2B4F] fill-[#1D2B4F] ml-1" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" alt="Our Mission" className="rounded-3xl shadow-xl w-full" />
                            <div className="absolute -bottom-10 -right-10 bg-[#1D2B4F] text-white p-8 rounded-tr-3xl rounded-bl-3xl hidden md:block max-w-xs shadow-2xl">
                                <h3 className="font-bold text-xl mb-2 font-display">Our Vision</h3>
                                <p className="text-sm text-slate-300">To become the global leading brand for affiliate marketing businesses by providing innovative tracking solutions.</p>
                            </div>
                        </div>
                        <div>
                            {/* <div className="inline-block bg-[#FFD166] text-black px-4 py-2 rounded-full text-xs font-bold mb-6">
                                #Towering Business Performance
                            </div> */}
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-display">
                                Our Mission
                            </h2>
                            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                                Our platform enables users to track, analyze, and attribute performance across channels in real time, helping them make smarter, faster, and more profitable decisions. From click to conversion, we ensure complete visibility into what drives results, allowing affiliates and advertisers to scale campaigns with confidence.
                            </p>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                At TrackMyAds, we focus on simplicity, accuracy, and performance. With powerful tracking technology, flexible attribution models, and actionable insights, we help performance marketers turn data into growth.
                            </p>
                            <div className="flex gap-4">
                                <Link to="/contact" className="text-[#1D2B4F] font-bold hover:underline flex items-center gap-2">
                                    Join our journey <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            {/* <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 font-display">
                            Our Journey
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            From a startup idea to a global leader in performance tracking.
                        </p>
                    </div>

                    <div className="relative border-l-4 border-slate-100 ml-4 md:ml-auto md:mr-auto md:w-3/4 max-w-4xl space-y-12">
                        {[
                            { year: '2016', title: 'The Beginning', desc: 'Track MyAds was launched with a vision to simplify affiliate tracking.' },
                            { year: '2017', title: 'First Milestone', desc: 'Onboarded 100+ clients within the first year of operations.' },
                            { year: '2020', title: 'Rapid Growth', desc: 'Achieved top ratings on G2 and Capterra with 100% client retention.' },
                            { year: '2021', title: 'Global Expansion', desc: 'Expanded services to over 28 countries worldwide.' },
                            { year: '2023', title: 'Market Leader', desc: 'Won the G2 Momentum Leader Award and crossed 850+ clients.' },
                        ].map((item, index) => (
                            <div key={index} className="relative pl-8 md:pl-12">
                                <div className="absolute -left-[11px] md:-left-[11px] top-1 w-5 h-5 bg-[#1D2B4F] rounded-full border-4 border-white shadow-md"></div>
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                                    <span className="text-blue-600 font-bold text-xl block mb-2">{item.year}</span>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-slate-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Stats Section */}
            {/* <section className="py-20 bg-[#1D2B4F] text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
                        <div className="p-4">
                            <div className="text-4xl font-bold mb-2 text-[#F8D568]">9+</div>
                            <div className="text-sm text-blue-200">Years Experience</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-bold mb-2 text-[#F8D568]">190+</div>
                            <div className="text-sm text-blue-200">Partners</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-bold mb-2 text-[#F8D568]">850+</div>
                            <div className="text-sm text-blue-200">Trusted Companies</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-bold mb-2 text-[#F8D568]">113</div>
                            <div className="text-sm text-blue-200">Awards Won</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-bold mb-2 text-[#F8D568]">40+</div>
                            <div className="text-sm text-blue-200">Countries</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-bold mb-2 text-[#F8D568]">20k+</div>
                            <div className="text-sm text-blue-200">LinkedIn Followers</div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Footer CTA */}
            {/* <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="bg-[#f8fafc] rounded-[2rem] border border-slate-200 p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">

                        <div className="relative z-10 text-center md:text-left">
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-display">Try with 10 days free trial</h2>
                            <div className="flex flex-wrap gap-6 text-slate-600 font-medium justify-center md:justify-start">
                                <span className="flex items-center gap-2"><CheckCircle className="text-blue-500" size={20} /> No credit card required</span>
                            </div>
                        </div>

                        <div className="relative z-10">
                            <Link to="/contact" className="inline-block bg-[#1D2B4F] text-white hover:bg-[#111c30] px-12 py-5 rounded-xl font-bold text-lg shadow-xl transition-all hover:scale-105 whitespace-nowrap">
                                Request Free Trial
                            </Link>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default AboutUsPage;
