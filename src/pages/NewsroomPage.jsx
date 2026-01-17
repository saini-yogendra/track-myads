import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, ExternalLink, Mic } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsroomPage = () => {
    const news = [
        {
            title: "Track MyAds Launches Revolutionary Fraud Prevention 2.0",
            category: "Press Release",
            date: "Jan 10, 2024",
            source: "PR Newswire",
            link: "#"
        },
        {
            title: "Track MyAds Named Momentum Leader in G2 Winter 2024 Report",
            category: "Awards",
            date: "Dec 15, 2023",
            source: "G2",
            link: "#"
        },
        {
            title: "Interview: CEO Discusses the Future of Affiliate Tracking",
            category: "Media Coverage",
            date: "Nov 22, 2023",
            source: "MarTech Series",
            link: "#"
        },
        {
            title: "Track MyAds Expands Operations to SEA Region",
            category: "Company News",
            date: "Oct 05, 2023",
            source: "TechCrunch",
            link: "#"
        }
    ];

    return (
        <div className="bg-white min-h-screen font-body">

            {/* Hero Section */}
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 text-center bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-block bg-orange-100 text-[#c25e1a] px-4 py-2 rounded-full text-xs font-bold mb-6 shadow-sm">
                        News & Updates
                    </div>

                    <h1 className="text-4xl lg:text-[56px] font-bold text-slate-900 leading-tight mb-6 font-display">
                        Newsroom
                    </h1>

                    <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Latest press releases, media coverage, and company announcements from Track MyAds.
                    </p>
                </div>
            </section>

            {/* News List */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto space-y-8">
                        {news.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl transition-all group flex flex-col md:flex-row gap-6 items-start md:items-center"
                            >
                                <div className="flex-grow">
                                    <div className="flex items-center gap-3 mb-2 text-xs font-bold uppercase tracking-wider">
                                        <span className="text-[#fe8023] bg-orange-50 px-2 py-1 rounded">{item.category}</span>
                                        <span className="text-slate-400 flex items-center gap-1"><Calendar size={12} /> {item.date}</span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 group-hover:text-[#c25e1a] transition-colors">
                                        <a href={item.link}>{item.title}</a>
                                    </h3>
                                    <p className="text-slate-500 text-sm flex items-center gap-2">
                                        Source: <span className="font-bold text-slate-700">{item.source}</span>
                                    </p>
                                </div>
                                <a href={item.link} className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#fe8023] group-hover:text-white transition-all">
                                    <ExternalLink size={20} />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewsroomPage;
