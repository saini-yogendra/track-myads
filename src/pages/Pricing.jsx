import React from 'react';
import { Check, X } from 'lucide-react';

const Pricing = () => {
    const plans = [
        {
            name: "Starter",
            price: "$49",
            description: "For small networks getting started.",
            features: ["Up to 1,000 Conversions", "Basic Reports", "Email Support", "1 Admin User"],
            notIncluded: ["White Labeling", "API Access"],
            popular: false
        },
        {
            name: "Pro",
            price: "$149",
            description: "For growing businesses.",
            features: ["Up to 10,000 Conversions", "Advanced Reports", "Priority Email Support", "3 Admin Users", "White Labeling", "API Access"],
            notIncluded: [],
            popular: true
        },
        {
            name: "Business",
            price: "$299",
            description: "For large scale operations.",
            features: ["Unlimited Conversions", "Custom Reports", "Dedicated Account Manager", "Unlimited Users", "White Labeling", "Full API Access", "Custom Domain"],
            notIncluded: [],
            popular: false
        }
    ];

    return (
        <div className="bg-slate-50 py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h1>
                    <p className="text-lg text-slate-600">Choose the plan that fits your business needs. No hidden fees.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div key={index} className={`bg-white rounded-2xl p-8 border ${plan.popular ? 'border-primary shadow-xl ring-2 ring-primary ring-opacity-20' : 'border-slate-100 shadow-sm'} relative flex flex-col`}>
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
                                    MOST POPULAR
                                </div>
                            )}
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                                <span className="text-slate-500">/month</span>
                            </div>
                            <p className="text-slate-500 mb-6">{plan.description}</p>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-slate-700">
                                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                                {plan.notIncluded.map((feature, i) => (
                                    <li key={i} className="flex items-center text-slate-400">
                                        <X className="w-5 h-5 text-slate-300 mr-3 flex-shrink-0" />
                                        <span className="line-through">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${plan.popular ? 'bg-primary hover:bg-primary-dark text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'}`}>
                                Choose {plan.name}
                            </button>
                        </div>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="mt-24 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <h3 className="font-semibold text-lg text-slate-900 mb-2">Can I switch plans later?</h3>
                            <p className="text-slate-600">Yes, you can upgrade or downgrade your plan at any time from your dashboard.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <h3 className="font-semibold text-lg text-slate-900 mb-2">Is there a free trial?</h3>
                            <p className="text-slate-600">Yes, we offer a 14-day free trial on all plans. No credit card required to start.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <h3 className="font-semibold text-lg text-slate-900 mb-2">What happens if I exceed my conversion limit?</h3>
                            <p className="text-slate-600">We will notify you when you are close to your limit. You can choose to upgrade or pay a small overage fee.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
