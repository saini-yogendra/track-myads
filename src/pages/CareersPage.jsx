import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Zap, Coffee, Globe, Heart, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const CareersPage = () => {
    const perks = [
        { icon: <Globe />, title: "Remote Friendly", desc: "Work from anywhere or from our global offices." },
        { icon: <Zap />, title: "Fast Growth", desc: "Join a rapidly scaling team with endless opportunities." },
        { icon: <Heart />, title: "Health Benefits", desc: "Comprehensive health coverage for you and your family." },
        { icon: <Coffee />, title: "Work-Life Balance", desc: "Flexible hours and generous paid time off policies." },
    ];

    const positions = [
        { title: "Senior Backend Engineer", dept: "Engineering", loc: "Remote / India", type: "Full-time" },
        { title: "Product Manager", dept: "Product", loc: "USA / Remote", type: "Full-time" },
        { title: "Customer Success Manager", dept: "Support", loc: "London, UK", type: "Full-time" },
        { title: "Sales Development Rep", dept: "Sales", loc: "Singapore", type: "Full-time" },
    ];

    return (
        <div className="bg-white min-h-screen font-body">

            {/* Hero Section */}
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 text-center bg-[#f8fbff]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-block bg-[#F8D568] text-black px-4 py-2 rounded-full text-xs font-bold mb-6 shadow-sm">
                        #We Are Hiring
                    </div>

                    <h1 className="text-4xl lg:text-[64px] font-bold text-slate-900 leading-tight mb-8 font-display">
                        Build the Future of <br /><span className="text-[#fe8023]">Performance Marketing</span>
                    </h1>

                    <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Join a team of innovators, problem solvers, and dreamers. We are on a mission to empower marketers globally with the best technology.
                    </p>

                    <a href="#positions" className="inline-flex items-center gap-2 bg-[#1D2B4F] hover:bg-[#111c30] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                        <Briefcase size={20} /> View Open Positions
                    </a>
                </div>
            </section>

            {/* Culture/Perks */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display">Life at Track MyAds</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">We believe in taking care of our people so they can take care of our customers.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {perks.map((perk, index) => (
                            <div key={index} className="bg-slate-50 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100 group">
                                <div className="w-12 h-12 bg-orange-100 text-[#fe8023] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {React.cloneElement(perk.icon, { size: 24 })}
                                </div>
                                <h3 className="font-bold text-lg text-slate-900 mb-2">{perk.title}</h3>
                                <p className="text-slate-500 text-sm">{perk.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section id="positions" className="py-24 bg-[#1D2B4F] text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-2 font-display">Current Openings</h2>
                            <p className="text-orange-200">Come join our growing team.</p>
                        </div>
                        <Link to="/contact" className="text-white underline font-bold hidden md:block">Don't see your role? Contact us</Link>
                    </div>

                    <div className="grid gap-4">
                        {positions.map((pos, index) => (
                            <div key={index} className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between transition-all group">
                                <div className="mb-4 md:mb-0 text-center md:text-left">
                                    <h3 className="text-xl font-bold mb-2">{pos.title}</h3>
                                    <div className="flex gap-4 text-sm text-orange-200 justify-center md:justify-start">
                                        <span className="bg-white/10 px-3 py-1 rounded-full">{pos.dept}</span>
                                        <span className="flex items-center gap-1"><Globe size={14} /> {pos.loc}</span>
                                        <span>{pos.type}</span>
                                    </div>
                                </div>
                                <button className="bg-white text-[#1D2B4F] px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform">
                                    Apply Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CareersPage;
