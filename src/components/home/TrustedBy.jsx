import React from 'react';

const TrustedBy = () => {
    // Placeholder logos loop
    const logos = [1, 2, 3, 4, 5, 6];

    return (
        <div className="bg-slate-50 py-12 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
                    Trusted by Industry Leaders
                </p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {logos.map((i) => (
                        <div key={i} className="h-8 w-32 bg-slate-200 rounded animate-pulse">
                            {/* Placeholder for actual logo images */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustedBy;
