import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Youtube, Instagram, Shield } from 'lucide-react';

const Footer = () => {
    const footerLinks = {
        Company: [
            { name: 'About', href: '/company/about' },
            { name: 'Pricing', href: '/pricing' },
            { name: 'Contact', href: '/contact' },
            // { name: 'Blogs & Journals', href: '/resources/blog' },
            // { name: 'Customer Stories', href: '/resources/case-studies' },
            // { name: 'Careers', href: '/company/careers' },
            // { name: 'Newsroom', href: '/resources/newsroom' }
        ],
        // Services: [
        //     { name: 'OnBoarding', href: '/services/onboarding' },
        //     { name: 'Customer Support', href: '/services/support' },
        //     { name: 'Migration', href: '/services/migration' },
        //     { name: 'User Guide', href: '/resources/guide' },
        //     { name: 'Integration', href: '/services/integration' }
        // ],
        // 'Compare Us': [
        //     { name: 'Affise vs Track MyAds', href: '/compare/affise' },
        //     { name: 'Cake vs Track MyAds', href: '/compare/cake' },
        //     { name: 'HasOffers vs Track MyAds', href: '/compare/hasoffers' },
        //     { name: 'Voluum vs Track MyAds', href: '/compare/voluum' },
        //     { name: 'Everflow vs Track MyAds', href: '/compare/everflow' }
        // ],
        // Product: [
        //     { name: 'Affiliate Tracking', href: '/features/affiliate-tracking' },
        //     { name: 'Automated Marketing', href: '/features/automation' },
        //     { name: 'White Label', href: '/features/white-label' }
        // ]
    };

    return (
        <footer className="bg-[#141414] text-white">
            {/* Pre-Footer CTA */}
            <div className="bg-gradient-to-r from-[#1a2b4b] to-[#2d4a7c] py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Try with 10 days free trial
                    </h2>
                    <p className="text-blue-100 mb-8 text-lg">
                        Powering performance marketing for hundreds of businesses worldwide. Start free—no credit card required. Cancel anytime.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-white text-[#1a2b4b] hover:bg-slate-100 px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all"
                    >
                        Request Free Trial
                    </Link>
                </div>
            </div>

            {/* Main Footer */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-6">

                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-3">
                        <Link to="/" className="inline-block mb-3">
                            <div className="text-2xl font-bold">Track MyAds</div>
                        </Link>
                        <p className="text-slate-400 text-sm mb-2 leading-relaxed">
                            performance marketing platform for affiliate networks and advertisers.
                        </p>

                        {/* Social Icons */}
                        {/* <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors">
                                <Youtube size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors">
                                <Instagram size={18} />
                            </a>
                        </div> */}
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category} className="col-span-2 md:col-span-3 lg:col-span-3">
                            <h3 className="font-bold text-white mb-6 pt-1 text-sm uppercase tracking-wider">
                                {category}
                            </h3>
                            <ul className="flex flex-wrap gap-6">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.href}
                                            className="text-slate-400 hover:text-white transition-colors text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>

                {/* Trust Badges */}
                {/* <div className="border-t border-slate-800 pt-8 mb-8">
                    <div className="flex flex-wrap justify-center lg:justify-end gap-6 items-center">
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                            <Shield size={20} />
                            <span>GDPR Compliant</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                            <Shield size={20} />
                            <span>CCPA Compliant</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                            <Shield size={20} />
                            <span>ISO 27001</span>
                        </div>
                    </div>
                </div> */}

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-slate-400 text-sm">
                            © 2025 Track MyAds. All rights reserved.
                        </div>
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            <Link to="/legal/privacy" className="text-slate-400 hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <Link to="/legal/terms" className="text-slate-400 hover:text-white transition-colors">
                                Terms of Service
                            </Link>
                            {/* <Link to="/legal/cookie-policy" className="text-slate-400 hover:text-white transition-colors">
                                Cookie Policy
                            </Link> */}
                            {/* <Link to="/legal/security" className="text-slate-400 hover:text-white transition-colors">
                                Security
                            </Link> */}
                        </div>
                        {/* <div className="flex gap-4 text-sm text-slate-400">
                            <button className="hover:text-white transition-colors">English</button>
                            <button className="hover:text-white transition-colors">Español</button>
                        </div> */}
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
