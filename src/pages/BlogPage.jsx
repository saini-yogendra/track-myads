import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Tag, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
    const featuredPost = {
        title: "The Future of Affiliate Marketing: Trends to Watch in 2024",
        excerpt: "As the digital landscape evolves, so does affiliate marketing. Discover the key trends that will shape the industry this year, from AI-driven optimization to privacy-first tracking.",
        author: "Sarah Johnson",
        date: "Oct 15, 2023",
        category: "Industry Trends",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1630&q=80"
    };

    const posts = [
        {
            title: "How to Detect and Prevent Affiliate Fraud Effectiveley",
            excerpt: "Fraud can drain your budget. Learn the top strategies and tools to keep your campaigns safe from bot traffic and click spamming.",
            author: "Mike Chen",
            date: "Sep 28, 2023",
            category: "Fraud Prevention",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        },
        {
            title: "Maximizing ROI with S2S Postback Tracking",
            excerpt: "Server-to-server tracking is the gold standard for accuracy. Here is a step-by-step guide to setting it up for your offers.",
            author: "Alex Turner",
            date: "Sep 10, 2023",
            category: "Technical Guide",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        },
        {
            title: "5 Strategies to Scale Your Affiliate Network",
            excerpt: "Growing a network requires more than just offers. Learn how to attract top affiliates and build lasting partnerships.",
            author: "Sarah Johnson",
            date: "Aug 22, 2023",
            category: "Growth Strategy",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        },
        {
            title: "Understanding Mobile Attribution Models",
            excerpt: "Last-click, multi-touch, or time-decay? We break down the different attribution models to help you choose the right one.",
            author: "David Lee",
            date: "Aug 05, 2023",
            category: "Mobile Marketing",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        },
        {
            title: "The Ultimate Guide to eCommerce Tracking",
            excerpt: "Track every sale, potential lead, and cart abandonment with our comprehensive guide for e-commerce businesses.",
            author: "Emily Davis",
            date: "Jul 18, 2023",
            category: "eCommerce",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        },
        {
            title: "Why Real-Time Reporting Matters",
            excerpt: "In fast-paced performance marketing, yesterday's data is too late. See why real-time analytics are crucial for success.",
            author: "Mike Chen",
            date: "Jun 30, 2023",
            category: "Analytics",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        }
    ];

    const categories = ["All Topics", "Industry Trends", "Technical Guide", "Fraud Prevention", "Growth Strategy", "Case Studies", "Company News"];

    return (
        <div className="bg-white min-h-screen font-body">

            {/* Hero Section */}
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-16 bg-slate-50 text-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-block bg-[#F8D568] text-black px-4 py-2 rounded-full text-xs font-bold mb-6 shadow-sm">
                        #Knowledge Hub
                    </div>
                    <h1 className="text-4xl lg:text-[56px] font-bold text-slate-900 leading-tight mb-6 font-display">
                        Latest Insights & Updates
                    </h1>
                    <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
                        Stay ahead of the curve with expert articles, guides, and industry news from the Track MyAds team.
                    </p>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat, i) => (
                            <button key={i} className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${i === 0 ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900'}`}>
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto mb-20">
                        <h2 className="text-2xl font-bold text-slate-900 mb-8 px-2 font-display">Featured Article</h2>
                        <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all grid md:grid-cols-2">
                            <div className="h-64 md:h-auto overflow-hidden">
                                <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            <div className="bg-[#1D2B4F] text-white p-8 lg:p-12 flex flex-col justify-center">
                                <div className="mb-4 flex items-center gap-3 text-sm text-blue-200">
                                    <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300 font-bold text-xs uppercase tracking-wide">{featuredPost.category}</span>
                                    <span className="flex items-center gap-1"><Calendar size={14} /> {featuredPost.date}</span>
                                </div>
                                <h3 className="text-2xl lg:text-4xl font-bold mb-4 font-display leading-tight">{featuredPost.title}</h3>
                                <p className="text-blue-100 mb-8 line-clamp-3">{featuredPost.excerpt}</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-blue-300">
                                            {featuredPost.author.charAt(0)}
                                        </div>
                                        <span className="font-medium text-sm">{featuredPost.author}</span>
                                    </div>
                                    <Link to="/resources/blog/post-1" className="bg-white text-[#1D2B4F] rounded-full p-3 hover:bg-blue-50 transition-colors">
                                        <ArrowRight size={20} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Posts Grid */}
                    <div className="max-w-6xl mx-auto">
                        <div className="flex justify-between items-end mb-8 px-2">
                            <h2 className="text-2xl font-bold text-slate-900 font-display">Recent Articles</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all group overflow-hidden flex flex-col h-full"
                                >
                                    <div className="h-48 overflow-hidden relative">
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 z-10 shadow-sm">
                                            {post.category}
                                        </div>
                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center gap-3 text-xs text-slate-400 mb-3 font-medium">
                                            <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                            <span className="flex items-center gap-1"><Clock size={12} /> 5 min read</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                            <Link to="/resources/blog/post-1">{post.title}</Link>
                                        </h3>
                                        <p className="text-slate-500 text-sm line-clamp-3 mb-6 flex-grow">{post.excerpt}</p>

                                        <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
                                                    {post.author.charAt(0)}
                                                </div>
                                                <span className="text-xs font-bold text-slate-700">{post.author}</span>
                                            </div>
                                            <Link to="/resources/blog/post-1" className="text-blue-600 font-bold text-xs flex items-center gap-1 hover:gap-2 transition-all">
                                                Read More <ArrowRight size={14} />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-16 text-center">
                            <button className="bg-transparent border border-slate-300 text-slate-600 hover:bg-slate-50 hover:text-slate-900 px-8 py-3 rounded-full font-bold transition-all">
                                Load More Articles
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;
