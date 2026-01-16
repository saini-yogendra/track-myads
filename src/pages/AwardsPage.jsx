import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Award, Star, Trophy, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const AwardsPage = () => {
    const awards = [
        {
            year: '2023',
            org: 'G2',
            title: 'Momentum Leader',
            desc: 'Ranked in the top 10% of products in the Affiliate Marketing category.',
            icon: <Trophy className="w-10 h-10 text-yellow-500" />
        },
        {
            year: '2023',
            org: 'G2',
            title: 'Best Support',
            desc: 'Highest rated for Quality of Support in the Relationship Index.',
            icon: <ThumbsUp className="w-10 h-10 text-blue-500" />
        },
        {
            year: '2023',
            org: 'Capterra',
            title: 'Best Value',
            desc: 'Recognized for offering the best return on investment for users.',
            icon: <Star className="w-10 h-10 text-orange-500" />
        },
        {
            year: '2023',
            org: 'Capterra',
            title: 'Ease of Use',
            desc: 'Top marks for user interface and intuitive experience.',
            icon: <CheckCircle className="w-10 h-10 text-green-500" />
        },
        {
            year: '2023',
            org: 'GetApp',
            title: 'Category Leader',
            desc: 'Leading the market in features and customer satisfaction.',
            icon: <Award className="w-10 h-10 text-purple-500" />
        },
        {
            year: '2023',
            org: 'Software Advice',
            title: 'FrontRunners',
            desc: 'Highlighted as a top product based on user reviews.',
            icon: <Award className="w-10 h-10 text-red-500" />
        },
        {
            year: '2022',
            org: 'Crozdesk',
            title: 'Happiest Users',
            desc: 'Awarded for high user satisfaction and positive feedback.',
            icon: <UsersIcon className="w-10 h-10 text-pink-500" />
        },
        {
            year: '2022',
            org: 'OfferVault',
            title: 'Top Tracking Platform',
            desc: 'Voted as one of the best tracking platforms by affiliates.',
            icon: <Trophy className="w-10 h-10 text-yellow-500" />
        }
    ];

    return (
        <div className="bg-white min-h-screen font-body">

            {/* Hero Section */}
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 text-center bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-block bg-[#F8D568] text-black px-4 py-2 rounded-full text-xs font-bold mb-6 shadow-sm">
                        #Excellence Recognized
                    </div>

                    <h1 className="text-4xl lg:text-[56px] font-bold text-slate-900 leading-tight mb-6 font-display">
                        Awards & Recognition
                    </h1>

                    <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto leading-relaxed">
                        We are proud to be recognized by leading software review platforms and industry bodies for our commitment to quality, innovation, and customer support.
                    </p>
                </div>
            </section>

            {/* Awards Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {awards.map((award, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="bg-slate-50 p-3 rounded-2xl group-hover:scale-110 transition-transform">
                                        {award.icon}
                                    </div>
                                    <span className="bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full">{award.year}</span>
                                </div>
                                <div className="text-sm font-bold text-blue-600 mb-1 uppercase tracking-wider">{award.org}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{award.title}</h3>
                                <p className="text-slate-500">{award.desc}</p>
                            </motion.div>
                        ))}
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
                                <Award className="w-5 h-5" />
                                <span className="font-bold tracking-wider uppercase text-sm">Award Winning Platform</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">Experience the best in class</h2>

                            <div className="flex flex-wrap gap-6 text-blue-200 font-medium justify-center md:justify-start">
                                <span className="flex items-center gap-2"><CheckCircle className="text-blue-400" size={20} /> No credit card required</span>
                            </div>
                        </div>

                        <div className="relative z-10">
                            <Link to="/contact" className="inline-block bg-white text-[#1D2B4F] hover:bg-slate-100 px-12 py-5 rounded-xl font-bold text-lg shadow-xl transition-all hover:scale-105 whitespace-nowrap">
                                Request Free Trial
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const UsersIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);


export default AwardsPage;
