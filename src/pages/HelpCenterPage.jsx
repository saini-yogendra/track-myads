import React from 'react';
import { Search, Book, Code, MessagesSquare, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const HelpCenterPage = ({ title = "Help Center", subtitle = "How can we help you?" }) => {
    const categories = [
        { title: "Getting Started", icon: <Book />, desc: "Account setup, migration, and basic configuration." },
        { title: "API Reference", icon: <Code />, desc: "Endpoints, authentication, and examples for developers." },
        { title: "Platform Features", icon: <FileText />, desc: "Deep dive into Smart Links, Offer setup, and Reporting." },
        { title: "FAQs", icon: <MessagesSquare />, desc: "Answers to the most common questions." },
    ];

    return (
        <div className="bg-white min-h-screen font-body">
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 text-center bg-[#1D2B4F] text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-display">{title}</h1>
                    <p className="text-lg text-orange-200 max-w-2xl mx-auto mb-10">{subtitle}</p>

                    <div className="max-w-2xl mx-auto relative">
                        <input type="text" placeholder="Search for answers..." className="w-full px-6 py-4 pl-14 rounded-full text-slate-900 outline-none focus:ring-4 focus:ring-blue-500/50 shadow-2xl" />
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white -mt-20 relative z-10">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {categories.map((cat, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hover:-translate-y-1 transition-transform cursor-pointer">
                                <div className="w-12 h-12 bg-orange-50 text-[#fe8023] rounded-xl flex items-center justify-center mb-6">
                                    {React.cloneElement(cat.icon, { size: 24 })}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{cat.title}</h3>
                                <p className="text-slate-500 text-sm">{cat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HelpCenterPage;
