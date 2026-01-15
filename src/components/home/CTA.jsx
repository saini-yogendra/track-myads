import React from 'react';

const CTA = () => {
    return (
        <div className="bg-primary relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/20 rounded-full mix-blend-overlay filter blur-3xl translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                    Start your 14 days free trial
                </h2>
                <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
                    Join hundreds of companies that trust us with their performance marketing. No credit card required, cancel anytime.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-bold rounded-md hover:bg-slate-50 hover:shadow-lg transition-all text-lg">
                        Request Free Trial
                    </button>
                    <button className="w-full sm:w-auto px-8 py-4 border border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-all text-lg">
                        Schedule Demo
                    </button>
                </div>
                <p className="mt-8 text-sm text-blue-200">
                    Trusted by 850+ Companies • Support 24/7
                </p>
            </div>
        </div>
    );
};

export default CTA;
