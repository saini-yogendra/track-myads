import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="min-h-screen bg-white flex">
            {/* Left Side - Hero/Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-secondary relative overflow-hidden items-center justify-center p-12">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"></div>

                <div className="relative z-10 text-white max-w-md">
                    <h1 className="text-5xl font-bold mb-6">Welcome Back!</h1>
                    <p className="text-blue-100 text-lg leading-relaxed mb-8">
                        Access your dashboard to track campaigns, manage affiliates, and optimize your performance marketing strategies.
                    </p>
                    <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center font-bold">98</div>
                            <div>
                                <h4 className="font-semibold">Trust Score</h4>
                                <p className="text-sm text-blue-200">Based on recent activity</p>
                            </div>
                        </div>
                        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                            <div className="h-full w-[98%] bg-green-500"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                <div className="max-w-md w-full">
                    <div className="text-center lg:text-left mb-10">
                        <span className="text-3xl font-bold text-secondary block lg:hidden mb-8">Track<span className="text-primary">MyAds</span></span>
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Sign in to your account</h2>
                        <p className="text-slate-500">Enter your details below to continue.</p>
                    </div>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                            <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="name@company.com" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="block text-sm font-medium text-slate-700">Password</label>
                                <a href="#" className="text-sm text-primary font-medium hover:text-primary-dark">Forgot password?</a>
                            </div>
                            <input type="password" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="••••••••" />
                        </div>

                        <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                            Sign In <ArrowRight size={20} />
                        </button>
                    </form>

                    <div className="mt-8 text-center text-slate-500 text-sm">
                        Don't have an account? <Link to="/demo" className="text-secondary font-bold hover:underline">Request a Demo</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
