import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, ShieldCheck, Zap, Globe, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudiesPage = () => {
    const studies = [
        {
            company: "Fomento Agency",
            industry: "Ad Network",
            title: "Scaling Revenue by 300% with Automated Tracking",
            metrics: ["300% Revenue Growth", "50% Less Manual Work"],
            desc: "How Fomento Agency utilized Smart Offers and Automation tools to scale their operations globally without increasing headcount.",
            color: "bg-orange-50 text-[#fe8023]",
            icon: <TrendingUp className="w-8 h-8" />
        },
        {
            company: "Affilienet",
            industry: "Affiliate Network",
            title: "Eliminating 99% of Click Fraud in Real-Time",
            metrics: ["99% Fraud Blocked", "20% ROI Increase"],
            desc: "Affilienet was struggling with bot traffic. See how implementing Track MyAds's Fraud Fender saved their budget and reputation.",
            color: "bg-red-50 text-red-600",
            icon: <ShieldCheck className="w-8 h-8" />
        },
        {
            company: "ClickBooster",
            industry: "Media Buying",
            title: "Optimizing Campaigns for 5x Higher Conversions",
            metrics: ["5x Conversion Rate", "24/7 Uptime"],
            desc: "A deep dive into how ClickBooster used granular reporting and advanced targeting to refine their ad spend strategy.",
            color: "bg-green-50 text-green-600",
            icon: <Zap className="w-8 h-8" />
        },
        {
            company: "GlobalAds",
            industry: "eCommerce",
            title: "Seamless Migration for a Global Retailer",
            metrics: ["Zero Downtime", "1M+ Events Migrated"],
            desc: "GlobalAds moved their entire infrastructure to Track MyAds in under 48 hours. Read about their hassle-free migration journey.",
            color: "bg-purple-50 text-purple-600",
            icon: <Globe className="w-8 h-8" />
        },
        {
            company: "MobileFirst",
            industry: "Mobile App",
            title: "Attribution Accuracy Increased by 40%",
            metrics: ["40% Better Data", "Accurate LTV"],
            desc: "MobileFirst needed reliable attribution for their app campaigns. Track MyAds's SDK provided the precision they were missing.",
            color: "bg-orange-50 text-orange-600",
            icon: <BarChart className="w-8 h-8" />
        }
    ];

    return (
        <div className="bg-white min-h-screen font-body">

            {/* Hero Section */}
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 text-center bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-block bg-[#F8D568] text-black px-4 py-2 rounded-full text-xs font-bold mb-6 shadow-sm">
                        #Success Stories
                    </div>

                    <h1 className="text-4xl lg:text-[56px] font-bold text-slate-900 leading-tight mb-6 font-display">
                        Customer Stories
                    </h1>

                    <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto leading-relaxed">
                        See how leading brands and networks are using Track MyAds to scale their business, prevent fraud, and optimize performance.
                    </p>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {studies.map((study, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-10 rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group flex flex-col items-start"
                            >
                                <div className={`w-16 h-16 ${study.color} rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform`}>
                                    {study.icon}
                                </div>

                                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{study.industry}</div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display leading-tight">{study.title}</h3>

                                <div className="flex flex-wrap gap-3 mb-6">
                                    {study.metrics.map((metric, i) => (
                                        <span key={i} className="bg-slate-50 border border-slate-200 px-3 py-1 rounded-full text-xs font-bold text-slate-700">
                                            {metric}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-slate-600 mb-8 leading-relaxed flex-grow">{study.desc}</p>

                                <Link to="/resources/case-studies/study-1" className="inline-flex items-center gap-2 text-[#1D2B4F] font-bold hover:gap-3 transition-all mt-auto">
                                    Read Full Story <ArrowRight size={20} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="bg-[#1D2B4F] rounded-[2rem] shadow-2xl p-12 lg:p-16 text-center text-white relative overflow-hidden">

                        {/* Decorative */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">Ready to write your success story?</h2>
                        <p className="text-xl text-orange-200 mb-10 max-w-2xl mx-auto">
                            Join 850+ companies growing with Track MyAds today.
                        </p>

                        <Link to="/contact" className="inline-block bg-white text-[#1D2B4F] hover:bg-slate-100 px-12 py-5 rounded-full font-bold text-lg shadow-xl transition-all hover:scale-105 whitespace-nowrap">
                            Start Free Trial
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CaseStudiesPage;
