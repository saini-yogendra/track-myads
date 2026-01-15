import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const EventsPage = () => {
    const events = [
        { name: "Affiliate World Asia", location: "Bangkok, Thailand", date: "Dec 7-8, 2023", status: "Past" },
        { name: "Affiliate Summit West", location: "Las Vegas, USA", date: "Jan 15-17, 2024", status: "Upcoming" },
        { name: "TES Affiliate Conference", location: "Cascais, Portugal", date: "Feb 26-29, 2024", status: "Upcoming" },
    ];

    return (
        <div className="bg-white min-h-screen font-body">
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 text-center bg-[#1D2B4F] text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-display">Events & Conferences</h1>
                    <p className="text-lg text-blue-200 max-w-2xl mx-auto">Meet the Track MyAds team at these global events.</p>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid gap-6">
                        {events.map((evt, i) => (
                            <div key={i} className="bg-white border border-slate-100 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between shadow-sm hover:shadow-xl transition-all">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${evt.status === 'Upcoming' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>{evt.status}</span>
                                        <span className="flex items-center gap-1 text-slate-500 text-sm font-bold"><Calendar size={14} /> {evt.date}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{evt.name}</h3>
                                    <p className="text-slate-500 flex items-center gap-2"><MapPin size={16} /> {evt.location}</p>
                                </div>
                                <div className="mt-6 md:mt-0">
                                    <button className="bg-white border-2 border-slate-200 text-slate-900 hover:border-[#1D2B4F] hover:text-[#1D2B4F] font-bold px-6 py-3 rounded-full transition-all">
                                        Book a Meeting
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventsPage;
