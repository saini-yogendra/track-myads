import React from 'react';
import { ArrowRight, Mail, Phone, MapPin, MessageSquare, Clock, Globe, Building2 } from 'lucide-react';

const ContactSection = () => {
    return (
        <div id="contact" className="bg-white">

            {/* Header */}
            <section className="pt-20 lg:pt-28 text-center max-w-4xl mx-auto px-4">
                <div className="inline-block bg-[#F8D568] text-black px-4 py-2 rounded-full text-xs font-bold mb-6 shadow-sm">
                    #We are here to help
                </div>

                <h1 className="text-4xl lg:text-[48px] font-bold text-slate-900 leading-tight mb-6 font-display">
                    Get in Touch with our Team
                </h1>

                <p className="text-lg text-slate-500 mb-8 leading-relaxed font-medium">
                    Have questions about our platform or need support? Our team is here to help you scale your performance marketing.
                </p>
            </section>

            {/* Contact Grid */}
            <section className="pb-24 bg-white relative">
                {/* Decorative Background for Form area */}
                <div className="absolute top-1/2 left-0 w-full h-1/2 bg-slate-50 -z-10"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-8 mb-20">
                        {/* Sales */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-[#fe8023] mb-6">
                                <Mail className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Sales Team</h3>
                            <p className="text-slate-500 mb-4">For demo requests and pricing inquiries.</p>
                            <a href="mailto:sales@track-myads.com" className="text-lg font-bold text-[#1D2B4F] hover:underline">sales@track-myads.com</a>
                        </div>

                        {/* Support */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                                <MessageSquare className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Technical Support</h3>
                            <p className="text-slate-500 mb-4">24/7 assistance for our clients.</p>
                            <a href="mailto:support@track-myads.com" className="text-lg font-bold text-[#1D2B4F] hover:underline">support@track-myads.com</a>
                        </div>

                        {/* Phone */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
                                <Phone className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Call Us</h3>
                            <p className="text-slate-500 mb-4">Mon-Fri from 9am to 6pm IST.</p>
                            <a href="tel:+18881234567" className="text-lg font-bold text-[#1D2B4F] hover:underline">+91 9050583365</a>
                        </div>
                    </div>

                    {/* Main Content Area: Form & Map Details */}
                    <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
                        <div className="grid lg:grid-cols-2">

                            {/* Form Section */}
                            <div className="p-10 lg:p-16">
                                <h2 className="text-3xl font-bold text-slate-900 mb-2 font-display">Send us a Message</h2>
                                <p className="text-slate-500 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                                            <input type="text" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="John" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                                            <input type="text" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                                        <input type="email" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="john@company.com" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                                        <textarea rows="4" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                                    </div>
                                    <button className="w-full bg-[#1D2B4F] hover:bg-[#111c30] text-white font-bold py-5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                                        Send Message <ArrowRight size={20} />
                                    </button>
                                </form>
                            </div>

                            {/* Info/Map Section */}
                            <div className="bg-[#1D2B4F] p-10 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden">
                                {/* Decorative */}
                                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

                                {/* Google Map */}
                                <div className="relative z-10 w-full h-64 rounded-2xl overflow-hidden mb-8 border-4 border-white/10 shadow-lg">
                                    <iframe
                                        src="https://maps.google.com/maps?q=PARK%20SERENE,%20Sector%2037D,%20Gurgaon&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Office Location"
                                    ></iframe>
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-8 font-display">Our Global Headquarters</h3>

                                    <div className="space-y-8">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                                                <Building2 className="w-6 h-6 text-[#F8D568]" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-1">Visit Us</h4>
                                                <p className="text-orange-100 leading-relaxed">
                                                    PARK SERENE<br />
                                                    Gurgaon, Sector 37D<br />
                                                    Haryana-India
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                                                <Clock className="w-6 h-6 text-[#F8D568]" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-1">Office Hours</h4>
                                                <p className="text-orange-100 leading-relaxed">
                                                    Monday - Friday<br />
                                                    9:00 AM - 6:00 PM IST
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactSection;
