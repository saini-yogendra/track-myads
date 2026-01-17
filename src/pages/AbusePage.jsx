import React from 'react';
import { AlertTriangle, ShieldAlert, CheckCircle, Upload } from 'lucide-react';

const AbusePage = () => {
    return (
        <div className="bg-white min-h-screen font-body">

            {/* Hero Section */}
            <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 text-center bg-[#141414] text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-block bg-red-500/20 text-red-400 border border-red-500/30 px-4 py-2 rounded-full text-xs font-bold mb-6">
                        Compliance Center
                    </div>

                    <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-6 font-display">
                        Report Abuse
                    </h1>

                    <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                        We take policy violations seriously. If you have encountered any spam, fraud, or prohibited content, please report it below.
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-20 bg-slate-50 -mt-10 rounded-t-[3rem] relative z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">

                        <div className="bg-orange-50 border border-orange-100 rounded-xl p-5 mb-8 flex items-start gap-4">
                            <ShieldAlert className="w-6 h-6 text-[#fe8023] flex-shrink-0 mt-1" />
                            <div className="text-sm text-[#9a4b14]">
                                <p className="font-bold mb-1">Before you report:</p>
                                <p>Please ensure that the violation is related to a URL or service hosted by Track MyAds (Track MyAds). We actively monitor and disable accounts that violate our Terms of Service.</p>
                            </div>
                        </div>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Your Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="john@company.com" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Abuse Type</label>
                                <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white">
                                    <option>Spam / Phishing</option>
                                    <option>Malware / Virus</option>
                                    <option>Copyright Infringement</option>
                                    <option>Prohibited Content</option>
                                    <option>Other Violation</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Violating URL(s)</label>
                                <textarea rows="3" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all font-mono text-sm" placeholder="https://example.com/suspicious-link"></textarea>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Additional Details</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Please describe the issue..."></textarea>
                            </div>

                            <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center hover:border-blue-400 hover:bg-orange-50 transition-all cursor-pointer">
                                <Upload className="mx-auto w-8 h-8 text-slate-400 mb-2" />
                                <p className="text-sm text-slate-500 font-medium">Attach Proof (Screenshots, Logs)</p>
                            </div>

                            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                                Submit Abuse Report
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AbusePage;
