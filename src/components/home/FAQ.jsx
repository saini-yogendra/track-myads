import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "What is partner marketing software?",
            answer: "Partner marketing software is a platform that helps businesses manage and track their affiliate, referral, and partner programs. It provides tools for tracking conversions, managing payouts, and optimizing campaigns."
        },
        {
            question: "Why do I need Track MyAds?",
            answer: "Track MyAds provides enterprise-grade tracking, fraud detection, and automation features that help you scale your affiliate program efficiently while maintaining accuracy and security."
        },
        {
            question: "How does Track MyAds prevent fraud?",
            answer: "Our advanced fraud detection system uses machine learning algorithms to identify suspicious patterns, block bot traffic, and validate traffic sources in real-time."
        },
        {
            question: "Can I migrate from another platform?",
            answer: "Yes! We offer free migration services with dedicated support to help you seamlessly transfer your campaigns, affiliates, and historical data from any platform."
        },
        {
            question: "What integrations does Track MyAds support?",
            answer: "Track MyAds integrates with 150+ platforms including payment gateways, CRMs, email marketing tools, and advertising networks through our API and native integrations."
        },
        {
            question: "Is there a free trial available?",
            answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card required to get started."
        },
        {
            question: "What kind of support do you provide?",
            answer: "We provide 24/7 customer support via chat, email, and phone. Enterprise customers also get a dedicated account manager and priority support."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12">

                    {/* Left Column: Title + Button */}
                    <div className="lg:col-span-4">
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-display">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-slate-600 mb-8">
                            Have questions? We've got answers. Can't find what you're looking for? Contact our support team.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg"
                        >
                            Get Started <ArrowRight size={20} />
                        </Link>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="lg:col-span-8">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all hover:shadow-md"
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex items-center justify-between p-6 text-left"
                                    >
                                        <span className="font-bold text-lg text-slate-900 pr-8">
                                            {faq.question}
                                        </span>
                                        <div className="flex-shrink-0">
                                            {openIndex === index ? (
                                                <Minus size={24} className="text-primary" />
                                            ) : (
                                                <Plus size={24} className="text-slate-400" />
                                            )}
                                        </div>
                                    </button>

                                    {openIndex === index && (
                                        <div className="px-6 pb-6">
                                            <div className="pt-2 border-t border-slate-100">
                                                <p className="text-slate-600 leading-relaxed mt-4">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQ;
