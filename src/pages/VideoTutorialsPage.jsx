import React from 'react';
import { Play } from 'lucide-react';

const VideoTutorialsPage = () => {
    const videos = [
        { title: "Platform Overview: Getting Started", duration: "5:20", thumb: "bg-blue-100" },
        { title: "How to Set Up Your First Campaign", duration: "12:15", thumb: "bg-purple-100" },
        { title: "Understanding Smart Links", duration: "8:45", thumb: "bg-green-100" },
        { title: "Integrating with Shopify", duration: "6:30", thumb: "bg-orange-100" },
        { title: "Advanced Fraud Detection Settings", duration: "15:00", thumb: "bg-red-100" },
        { title: "Generating Custom Reports", duration: "4:50", thumb: "bg-indigo-100" },
    ];

    return (
        <div className="bg-white min-h-screen font-body">
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 text-center bg-[#141414] text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-display">Video Tutorials</h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">Master the platform with our step-by-step video guides.</p>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videos.map((vid, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className={`aspect-video rounded-2xl ${vid.thumb} relative overflow-hidden mb-4 shadow-sm group-hover:shadow-xl transition-all`}>
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                            <Play className="w-6 h-6 text-slate-900 fill-slate-900 ml-1" />
                                        </div>
                                    </div>
                                    <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">
                                        {vid.duration}
                                    </span>
                                </div>
                                <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">{vid.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VideoTutorialsPage;
