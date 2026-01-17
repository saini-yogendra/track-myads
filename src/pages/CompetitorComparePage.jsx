import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, XCircle, ArrowRight, Shield, Zap, Headphones } from 'lucide-react';

const CompetitorComparePage = () => {
    const { competitor } = useParams();

    // Normalize competitor string for display (e.g., "post-affiliate-pro" -> "Post Affiliate Pro")
    const formatName = (str) => {
        if (!str) return "Competitor";
        return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    const competitorName = formatName(competitor);

    // Dynamic data could be expanded here based on the 'competitor' key
    // For now, we use a high-quality generic template that updates the name headers

    return (
        <div className="bg-white min-h-screen font-body">

            {/* Hero Section */}
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 text-center bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-block bg-orange-100 text-[#9a4b14] px-4 py-2 rounded-full text-xs font-bold mb-6">
                        #1 Alternative
                    </div>

                    <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6 font-display">
                        Track MyAds vs {competitorName}
                    </h1>

                    <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Thinking about switching from {competitorName}? See why 850+ networks and advertisers have moved to Track MyAds for better performance and support.
                    </p>

                    <div className="flex justify-center gap-4">
                        <Link to="/services/migration" className="bg-[#1D2B4F] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                            Free Migration Service
                        </Link>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100">
                        <div className="grid grid-cols-3 bg-[#1D2B4F] text-white p-6 md:p-8 items-center text-center">
                            <div className="text-left font-bold text-slate-300 uppercase tracking-widest text-xs">Feature</div>
                            <div className="font-bold text-xl md:text-2xl">Track MyAds</div>
                            <div className="font-bold text-xl md:text-2xl opacity-70">{competitorName}</div>
                        </div>

                        <div className="divide-y divide-slate-100">
                            {[
                                { name: "24/7 Live Support", us: true, them: false },
                                { name: "Zero Setup Fees", us: true, them: false },
                                { name: "Free Migration", us: true, them: false },
                                { name: "Uptime Guarantee", us: "99.99%", them: "99.9%" },
                                { name: "Custom Domain SSL", us: true, them: "Extra $" },
                                { name: "Fraud Protection", us: "Included", them: "Add-on" },
                                { name: "Mobile App", us: true, them: "Limited" },
                            ].map((row, i) => (
                                <div key={i} className="grid grid-cols-3 p-6 md:p-8 items-center text-center hover:bg-slate-50 transition-colors">
                                    <div className="text-left font-bold text-slate-700">{row.name}</div>
                                    <div className="flex justify-center">
                                        {row.us === true ? <CheckCircle className="text-green-500 w-6 h-6" /> : <span className="font-bold text-slate-900">{row.us}</span>}
                                    </div>
                                    <div className="flex justify-center">
                                        {row.them === false ? <XCircle className="text-red-300 w-6 h-6" /> : <span className="font-medium text-slate-400">{row.them}</span>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Review Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-12 font-display">Why our customers switched</h2>
                    <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 text-left relative">
                        <div className="text-6xl text-orange-100 absolute top-4 left-6 font-serif">"</div>
                        <p className="text-lg text-slate-600 mb-6 italic relative z-10 pl-4">
                            We used {competitorName} for two years, but the support was slow and the prices kept going up. Moving to Track MyAds was the best decision. The migration was instant and the team is incredibly helpful.
                        </p>
                        <div className="flex items-center gap-4 pl-4">
                            <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
                            <div>
                                <div className="font-bold text-slate-900">Digital Director</div>
                                <div className="text-sm text-slate-500">Global Ad Network</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CompetitorComparePage;
