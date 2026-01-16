import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import TrustedBy from '../components/home/TrustedBy';
import Features from '../components/home/Features';
import CoreFeatures from '../components/home/CoreFeatures';
import Solutions from '../components/home/Solutions';
import CTA from '../components/home/CTA';
import AboutSection from '../components/home/AboutSection';
import PricingSection from '../components/home/PricingSection';
import ContactSection from '../components/home/ContactSection';

const Home = () => {
    useEffect(() => {
        // Handle hash navigation on mount
        if (window.location.hash) {
            const id = window.location.hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <>
            <Hero />
            {/* <TrustedBy /> */}
            <AboutSection />
            <CoreFeatures />
            <Solutions />
            <Features />
            {/* <CTA /> */}
            <PricingSection />
            <ContactSection />
        </>
    );
};

export default Home;
