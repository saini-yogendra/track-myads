import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Shield, Lock, FileText, Globe } from 'lucide-react';

const LegalPage = () => {
    const location = useLocation();
    const currentPath = location.pathname.split('/').pop();

    const sections = [
        { id: 'privacy', title: 'Privacy Policy', icon: <Lock size={18} /> },
        { id: 'terms', title: 'Terms of Service', icon: <FileText size={18} /> },
        { id: 'gdpr', title: 'GDPR Compliance', icon: <Globe size={18} /> },
        { id: 'ccpa', title: 'CCPA Compliance', icon: <Shield size={18} /> },
        { id: 'security', title: 'Security', icon: <Shield size={18} /> },
    ];

    // Placeholder content generator based on current path
    const getContent = (path) => {
        switch (path) {
            case 'privacy':
                return (
                    <>
                        <h1 className="text-3xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
                        <p className="mb-4">Last updated: January 1, 2024</p>
                        <p className="mb-4">This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Collecting and Using Your Personal Data</h2>
                        <p className="mb-4">We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>
                        <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">Types of Data Collected</h3>
                        <p className="mb-4">While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You.</p>
                    </>
                );
            case 'terms':
                return (
                    <>
                        <h1 className="text-3xl font-bold text-slate-900 mb-6">Terms of Service</h1>
                        <p className="mb-4">Please read these terms and conditions carefully before using Our Service.</p>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Acknowledgment</h2>
                        <p className="mb-4">These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company.</p>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Access and Use</h2>
                        <p className="mb-4">Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions.</p>
                    </>
                );
            case 'gdpr':
                return (
                    <>
                        <h1 className="text-3xl font-bold text-slate-900 mb-6">GDPR Compliance</h1>
                        <p className="mb-4">Track MyAds is fully committed to the General Data Protection Regulation (GDPR).</p>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Your Rights</h2>
                        <p className="mb-4">Under GDPR, you have the right to access, rectify, erase, restrict, transfer, or object to the processing of your data.</p>
                    </>
                );
            default:
                return (
                    <>
                        <h1 className="text-3xl font-bold text-slate-900 mb-6">Legal Information</h1>
                        <p className="mb-4">Select a specific policy from the menu to view details.</p>
                    </>
                );
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen pt-32 pb-20 font-body">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Sidebar */}
                    <div className="lg:w-1/4">
                        <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-32">
                            <h3 className="font-bold text-slate-900 mb-4 px-3 uppercase text-xs tracking-wider">Legal</h3>
                            <nav className="space-y-1">
                                {sections.map((section) => (
                                    <Link
                                        key={section.id}
                                        to={`/${section.id}`}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${currentPath === section.id ? 'bg-orange-50 text-[#c25e1a]' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                                    >
                                        {section.icon}
                                        {section.title}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:w-3/4">
                        <div className="bg-white rounded-3xl shadow-sm p-10 lg:p-14 min-h-[600px] prose prose-slate max-w-none prose-headings:font-display prose-a:text-[#fe8023]">
                            {getContent(currentPath)}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LegalPage;
