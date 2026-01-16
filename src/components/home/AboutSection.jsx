import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const AboutSection = () => {
    return (
        <div id="about" className="bg-white">
            {/* Intro Section */}
            <section className="py-20 lg:py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-block bg-[#F8D568] text-black px-4 py-2 rounded-full text-xs font-bold mb-6 shadow-sm">
                            #Award-Winning Platform
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-8 font-display">
                            About Track MyAds
                        </h2>

                        <p className="text-lg text-slate-500 leading-relaxed font-medium">
                            TrackMyAds is a performance tracking platform built for affiliates and advertisers who demand clarity, precision, and control over their marketing efforts. Designed to deliver advanced data analytics and end-to-end campaign tracking, TrackMyAds empowers businesses to understand and optimize every touchpoint in the customer journey.
                        </p>
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
                            <div className="inline-block bg-[#FFD166] text-black px-4 py-2 rounded-full text-xs font-bold mb-6">
                                #Towering Business Performance
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-display">
                                Our Mission
                            </h2>
                            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                                Our platform enables users to track, analyze, and attribute performance across channels in real time, helping them make smarter, faster, and more profitable decisions. From click to conversion, we ensure complete visibility into what drives results, allowing affiliates and advertisers to scale campaigns with confidence.
                            </p>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                At TrackMyAds, we focus on simplicity, accuracy, and performance. With powerful tracking technology, flexible attribution models, and actionable insights, we help performance marketers turn data into growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutSection;
