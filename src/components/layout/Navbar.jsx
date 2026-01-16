import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Solutions', href: '#solutions' },
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${scrolled ? 'shadow-md py-2' : 'shadow-sm py-4'}`}>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer">
                        <span className="text-3xl font-bold tracking-tight text-secondary">
                            Track<span className="text-primary">MyAds</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex space-x-1 items-center">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                {link.dropdown ? (
                                    <button className="flex items-center space-x-1 text-slate-800 hover:text-primary font-medium text-[15px] px-4 py-6 transition-colors duration-200 outline-none">
                                        <span>{link.name}</span>
                                    </button>
                                ) : (
                                    <a
                                        href={link.href}
                                        className="text-slate-800 hover:text-primary font-medium text-[15px] px-4 py-6 transition-colors duration-200 block"
                                    >
                                        {link.name}
                                    </a>
                                )}

                                {/* Dropdown Menu */}
                                {link.dropdown && (
                                    <div className="absolute top-full left-0 mt-0 w-[500px] bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-6 z-50">
                                        <div className="grid grid-cols-2 gap-8">
                                            {link.columns.map((col, idx) => (
                                                <div key={idx}>
                                                    <h4 className="font-bold text-secondary mb-4 uppercase tracking-wider text-xs">{col.title}</h4>
                                                    <ul className="space-y-3">
                                                        {col.links.map((subItem) => (
                                                            <li key={subItem.name}>
                                                                <Link to={subItem.href} className="text-slate-600 hover:text-primary transition-colors text-sm blok">
                                                                    {subItem.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center space-x-4">
                        {/* <Link to="/login" className="text-slate-700 font-semibold hover:text-primary px-4 py-2 transition-colors text-[15px]">
                            Login
                        </Link> */}
                        <a href="#contact" className="bg-secondary hover:bg-secondary-light text-white px-6 py-2.5 rounded text-[15px] font-semibold transition-all shadow-lg shadow-blue-900/10 hover:shadow-xl hover:-translate-y-0.5">
                            Request Free Trial
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-800 hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl"
                    >
                        <div className="px-6 pt-6 pb-8 space-y-2">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    {link.dropdown ? (
                                        <div className="space-y-2">
                                            <button
                                                onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                                                className="flex items-center justify-between w-full px-3 py-3 text-lg font-medium text-slate-800 hover:text-primary hover:bg-slate-50 rounded-md transition-colors"
                                            >
                                                <span>{link.name}</span>
                                                {activeDropdown === link.name ? (
                                                    <ChevronUp size={20} className="text-slate-500" />
                                                ) : (
                                                    <ChevronDown size={20} className="text-slate-500" />
                                                )}
                                            </button>

                                            <AnimatePresence>
                                                {activeDropdown === link.name && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="overflow-hidden bg-slate-50 rounded-lg"
                                                    >
                                                        <div className="p-4 space-y-6">
                                                            {link.columns.map((col, idx) => (
                                                                <div key={idx}>
                                                                    <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wider">{col.title}</h4>
                                                                    <ul className="space-y-3">
                                                                        {col.links.map((subItem) => (
                                                                            <li key={subItem.name}>
                                                                                <Link
                                                                                    to={subItem.href}
                                                                                    onClick={() => setIsOpen(false)}
                                                                                    className="block text-slate-600 hover:text-primary font-medium text-[15px]"
                                                                                >
                                                                                    {subItem.name}
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <a
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="block px-3 py-3 text-lg font-medium text-slate-800 hover:text-primary hover:bg-slate-50 rounded-md"
                                        >
                                            {link.name}
                                        </a>
                                    )}
                                </div>
                            ))}
                            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col space-y-4">
                                <Link to="/login" onClick={() => setIsOpen(false)} className="w-full text-center text-slate-700 font-bold py-3 border border-slate-200 rounded hover:border-primary hover:text-primary transition-colors">
                                    Login
                                </Link>
                                <a href="#contact" onClick={() => setIsOpen(false)} className="w-full text-center bg-secondary text-white font-bold py-3.5 rounded shadow-lg">
                                    Request Free Trial
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
