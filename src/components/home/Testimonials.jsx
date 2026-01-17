import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Award as AwardIcon } from 'lucide-react';

const Testimonials = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const testimonials = [
        {
            stat: "60%",
            statLabel: "Campaign Optimization Increase",
            quote: "Track MyAds has transformed how we manage our affiliate network. The automation features alone have saved us countless hours.",
            author: "Sarah Johnson",
            role: "Founder & COO",
            company: "MediaGuru Networks",
            bg: "bg-orange-50"
        },
        {
            stat: "85%",
            statLabel: "Fraud Detection Rate",
            quote: "The anti-fraud capabilities are unmatched. We've seen a dramatic decrease in fraudulent traffic since switching to Track MyAds.",
            author: "Michael Chen",
            role: "VP of Operations",
            company: "ClickWise",
            bg: "bg-pink-50"
        },
        {
            stat: "3x",
            statLabel: "ROI Improvement",
            quote: "Our ROI has tripled since implementing Track MyAds. The real-time analytics give us the insights we need to make data-driven decisions.",
            author: "Emily Rodriguez",
            role: "Marketing Director",
            company: "Advivify",
            bg: "bg-green-50"
        }
    ];

    const nextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Testimonials Carousel */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-display">
                            Loved by Our Customers
                        </h2>
                        <p className="text-lg text-slate-600">See what industry leaders are saying about us</p>
                    </div>

                    {/* Carousel Container */}
                    <div className="relative">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                            >
                                {testimonials.map((testimonial, idx) => (
                                    <div key={idx} className="min-w-full px-4">
                                        <div className={`${testimonial.bg} rounded-3xl p-12 md:p-16 max-w-4xl mx-auto`}>
                                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                                {/* Left: Stats */}
                                                <div className="text-center md:text-left">
                                                    <div className="text-7xl md:text-8xl font-bold text-slate-900 mb-4">
                                                        {testimonial.stat}
                                                    </div>
                                                    <div className="text-xl font-semibold text-slate-700 mb-8">
                                                        {testimonial.statLabel}
                                                    </div>
                                                    <div className="flex gap-1 justify-center md:justify-start mb-6">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Right: Quote */}
                                                <div>
                                                    <p className="text-xl text-slate-700 leading-relaxed mb-8 italic">
                                                        "{testimonial.quote}"
                                                    </p>
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold text-xl">
                                                            {testimonial.author.charAt(0)}
                                                        </div>
                                                        <div>
                                                            <div className="font-bold text-slate-900">{testimonial.author}</div>
                                                            <div className="text-sm text-slate-600">{testimonial.role}</div>
                                                            <div className="text-sm font-semibold text-primary">{testimonial.company}</div>
                                                        </div>
                                                    </div>
                                                    <button className="mt-6 text-primary font-bold hover:underline">
                                                        Case Study →
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
                        >
                            <ChevronLeft size={24} className="text-slate-700" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
                        >
                            <ChevronRight size={24} className="text-slate-700" />
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex justify-center gap-2 mt-8">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveSlide(idx)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all ${idx === activeSlide ? 'bg-primary w-8' : 'bg-slate-300'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Awards Section */}
                <div className="bg-[#1a2b4b] rounded-3xl p-12 md:p-16 text-white">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
                            Our Awards Prove the Excellence
                        </h2>
                        <p className="text-orange-200">Recognized by industry leaders worldwide</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                        {/* Left: G2 Badges */}
                        <div className="grid grid-cols-3 gap-6">
                            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
                                <AwardIcon className="w-12 h-12 text-orange-400 mx-auto mb-3" />
                                <div className="text-sm font-bold">High Performer</div>
                                <div className="text-xs text-orange-200">Winter 2025</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
                                <AwardIcon className="w-12 h-12 text-orange-400 mx-auto mb-3" />
                                <div className="text-sm font-bold">Highest User Adoption</div>
                                <div className="text-xs text-orange-200">Winter 2025</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
                                <AwardIcon className="w-12 h-12 text-orange-400 mx-auto mb-3" />
                                <div className="text-sm font-bold">Fastest Implementation</div>
                                <div className="text-xs text-orange-200">Winter 2025</div>
                            </div>
                        </div>

                        {/* Right: Stats */}
                        <div className="space-y-8">
                            <div>
                                <div className="text-6xl font-bold mb-2">113</div>
                                <div className="text-xl text-orange-200">Industrial Awards</div>
                            </div>
                            <div>
                                <div className="text-6xl font-bold mb-2">4.7/5</div>
                                <div className="text-xl text-orange-200">Average Rating</div>
                                <div className="flex gap-1 mt-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testimonials;
