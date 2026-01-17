import React, { useEffect } from 'react';

const ContentPage = ({ title, subtitle, children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [title]);

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Header */}
            <div className="bg-secondary text-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">{title}</h1>
                    {subtitle && (
                        <p className="text-xl text-orange-100 max-w-2xl mx-auto leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10">
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 sm:p-12">
                    {children || (
                        <div className="text-center py-12 text-slate-500">
                            <p className="text-lg">Content for {title} is coming soon.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContentPage;
