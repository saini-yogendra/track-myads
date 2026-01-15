import React, { useEffect } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturePage = ({ title, description, icon: Icon, features = [] }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [title]);

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <div className="lg:w-1/2">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                            {Icon && <Icon size={32} />}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-display">
                            {title}
                        </h1>
                        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                            {description}
                        </p>

                        <div className="space-y-4 mb-10">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-center text-slate-700 text-lg">
                                    <CheckCircle2 className="text-green-500 mr-3 flex-shrink-0" size={24} />
                                    {feature}
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white rounded-lg font-bold shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2">
                                Request Demo <ArrowRight size={20} />
                            </Link>
                            <Link to="/contact" className="px-8 py-3.5 bg-white border border-slate-200 hover:border-primary text-slate-700 hover:text-primary rounded-lg font-bold transition-all flex items-center justify-center">
                                Contact Sales
                            </Link>
                        </div>
                    </div>

                    {/* Visual/Placeholder */}
                    <div className="lg:w-1/2 relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-3xl transform rotate-3"></div>
                        <div className="relative bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-2xl h-[500px] flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-24 h-24 bg-white rounded-full shadow-lg mx-auto mb-6 flex items-center justify-center text-primary animate-pulse">
                                    {Icon && <Icon size={48} />}
                                </div>
                                <p className="text-slate-400 font-medium uppercase tracking-widest">Interface Mockup</p>
                                <p className="text-slate-900 font-bold text-xl mt-2">{title} Dashboard</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FeaturePage;
