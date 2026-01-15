import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';

import TrustedBy from '../components/home/TrustedBy';
import Features from '../components/home/Features';
import CoreFeatures from '../components/home/CoreFeatures';
import Solutions from '../components/home/Solutions';
import Testimonials from '../components/home/Testimonials';
import BlogGrid from '../components/home/BlogGrid';
import FAQ from '../components/home/FAQ';
import CTA from '../components/home/CTA';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Hero />

            <CoreFeatures />
            <Solutions />
            <Features />
            <Testimonials />
            <FAQ />
            <BlogGrid />
            <CTA />
        </>
    );
};

export default Home;
