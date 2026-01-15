import React from 'react';

const GlossaryPage = () => {
    const terms = [
        { term: "Affiliate Network", def: "An intermediary between publishers (affiliates) and merchant affiliate programs." },
        { term: "Click-Through Rate (CTR)", def: "The ratio of users who click on a specific link to the number of total users who view a page, email, or advertisement." },
        { term: "Conversion Rate (CR)", def: "The percentage of users who take a desired action (e.g., buying an item)." },
        { term: "Cost Per Action (CPA)", def: "A pricing model where the advertiser pays for a specified action - for example an impression, click, form submit, or sale." },
        { term: "Earnings Per Click (EPC)", def: "A metric used to calculate the average amount of money earned for every 100 clicks." },
        { term: "Postback", def: "A server-to-server (S2S) method of tracking conversions." },
        { term: "Return On Ad Spend (ROAS)", def: "A marketing metric that measures the efficacy of a digital advertising campaign." },
        { term: "Smart Link", def: "A single link that automatically redirects user traffic to the best offers based on geo, device, and other parameters." },
    ];

    return (
        <div className="bg-white min-h-screen font-body">
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 text-center bg-slate-50">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-display text-slate-900">Industry Glossary</h1>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">Common terms and definitions used in performance marketing.</p>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="space-y-8">
                        {terms.map((item, i) => (
                            <div key={i} className="border-b border-slate-100 pb-8 last:border-0 hover:bg-slate-50/50 p-6 rounded-2xl transition-colors">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.term}</h3>
                                <p className="text-slate-600 leading-relaxed text-lg">{item.def}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GlossaryPage;
