import React from 'react';
import { ArrowRight } from 'lucide-react';

const BlogGrid = () => {
    const posts = [
        {
            category: "Guide",
            title: "The Ultimate Guide to Affiliate Tracking in 2026",
            date: "Jan 12, 2026",
            image: "bg-orange-100"
        },
        {
            category: "Case Study",
            title: "How Adzicon Increased ROI by 300% with Track MyAds",
            date: "Dec 28, 2025",
            image: "bg-purple-100"
        },
        {
            category: "Update",
            title: "Introducing New Anti-Fraud Shield V3",
            date: "Dec 15, 2025",
            image: "bg-green-100"
        }
    ];

    return (
        <section className="py-24 bg-white border-t border-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-display">Latest from Our Blog</h2>
                        <p className="text-slate-600">Insights, tips, and industry news.</p>
                    </div>
                    <a href="#" className="hidden sm:flex items-center text-primary font-bold hover:text-secondary transition-colors">
                        View All Posts <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className={`aspect-video rounded-xl mb-6 ${post.image} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
                            </div>
                            <div className="flex items-center gap-3 text-sm mb-3">
                                <span className="font-bold text-primary uppercase tracking-wider text-xs">{post.category}</span>
                                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                <span className="text-slate-500">{post.date}</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors leading-tight">{post.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogGrid;
