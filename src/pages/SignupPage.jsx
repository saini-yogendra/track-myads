import React from 'react';
import { CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col lg:flex-row">

            {/* Left: Testimonial & Benefits */}
            <div className="lg:w-1/2 bg-[#1D2B4F] text-white p-12 lg:p-20 flex flex-col justify-between">
                <div>
                    <Link to="/" className="text-2xl font-bold font-display tracking-tight text-white mb-12 block">
                        Track MyAds
                    </Link>
                    <h1 className="text-4xl lg:text-5xl font-bold mb-8 font-display">Join 850+ leaders in performance marketing</h1>
                    <ul className="space-y-4 mb-12">
                        {["14-Day Free Trial", "No Credit Card Required", "Instant Access", "Free Migration"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-xl font-medium text-blue-100">
                                <CheckCircle className="text-[#F8D568]" size={24} /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
                    <div className="flex gap-1 text-[#F8D568] mb-4">
                        {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
                    </div>
                    <p className="text-lg leading-relaxed italic mb-6">"The best decision we made for our network. The support is incredible and the platform is rock solid."</p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full"></div>
                        <div>
                            <p className="font-bold">Sarah Jenkins</p>
                            <p className="text-sm text-blue-200">CEO, AdScale</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right: Form */}
            <div className="lg:w-1/2 p-12 lg:p-20 flex items-center justify-center bg-slate-50">
                <div className="max-w-md w-full">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2 font-display">Create your account</h2>
                    <p className="text-slate-500 mb-8">Start your 14-day free trial today.</p>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Work Email</label>
                            <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1D2B4F] outline-none" placeholder="you@company.com" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1D2B4F] outline-none" placeholder="Jane" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1D2B4F] outline-none" placeholder="Doe" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1D2B4F] outline-none" placeholder="Your Company Ltd" />
                        </div>

                        <button className="w-full bg-[#1D2B4F] hover:bg-[#111c30] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all mt-4">
                            Get Started
                        </button>
                    </form>

                    <p className="text-center text-slate-500 text-sm mt-8">
                        Already have an account? <Link to="/login" className="text-[#1D2B4F] font-bold hover:underline">Log in</Link>
                    </p>
                    <p className="text-center text-slate-400 text-xs mt-4">
                        By signing up, you agree to our Terms and Privacy Policy.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
