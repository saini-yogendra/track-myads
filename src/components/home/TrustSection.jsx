import React from 'react';

const TrustSection = () => {
    const mediaLogos = [
        "Hindustan Times",
        "iCrowdNewswire",
        "Martech Series",
        "ANI",
        "Purshology",
        "Timestech",
        "SoftwareSuggest"
    ];

    return (
        <div className="py-16 bg-white border-b border-slate-100">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-10">
                    Featured In
                </p>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-40 grayscale hover:grayscale-0 hover:opacity-60 transition-all duration-500">
                    {mediaLogos.map((logo, idx) => (
                        <div
                            key={idx}
                            className="text-lg md:text-xl font-bold font-display text-slate-700 select-none"
                        >
                            {logo}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustSection;
