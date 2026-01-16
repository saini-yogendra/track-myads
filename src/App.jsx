import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

import Pricing from './pages/Pricing';
import Login from './pages/Login';
import Contact from './pages/Contact';
import SolutionsPage from './pages/SolutionsPage';
import LegalPage from './pages/LegalPage';
import ContentPage from './pages/ContentPage';
import FeaturePage from './pages/FeaturePage';
import AutomatedMarketingPage from './pages/AutomatedMarketingPage';
import FraudDetectionPage from './pages/FraudDetectionPage'; // Added this import
import WhiteLabelPage from './pages/WhiteLabelPage'; // Added this import
import MobileAttributionPage from './pages/MobileAttributionPage'; // Added this import
import AffiliateNetworkPage from './pages/AffiliateNetworkPage'; // Added this import
import AgenciesPage from './pages/AgenciesPage'; // Added this import
import FintechPage from './pages/FintechPage'; // Added this import
import EcommercePage from './pages/EcommercePage'; // Added this import
import MobileVASPage from './pages/MobileVASPage'; // Added this import
import HealthFitnessPage from './pages/HealthFitnessPage'; // Added this import
import OnboardingPage from './pages/OnboardingPage'; // Added this import
import CustomerSupportPage from './pages/CustomerSupportPage'; // Added this import
import MigrationPage from './pages/MigrationPage'; // Added this import
import IntegrationPage from './pages/IntegrationPage'; // Added this import
import PricingPage from './pages/PricingPage'; // Added this import
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import AwardsPage from './pages/AwardsPage';
import BlogPage from './pages/BlogPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ComparePage from './pages/ComparePage';
import CareersPage from './pages/CareersPage';
import NewsroomPage from './pages/NewsroomPage';
import AbusePage from './pages/AbusePage';
import EcommerceFeaturePage from './pages/EcommerceFeaturePage';
import MediaBuyingPage from './pages/MediaBuyingPage';
import CompetitorComparePage from './pages/CompetitorComparePage';

import VideoTutorialsPage from './pages/VideoTutorialsPage';
import GlossaryPage from './pages/GlossaryPage';
import EventsPage from './pages/EventsPage';
import SignupPage from './pages/SignupPage';
import HelpCenterPage from './pages/HelpCenterPage';
import { Target, ShoppingBag, Smartphone, ShieldCheck, BarChart3, Cloud } from 'lucide-react';

import AffiliateTrackingPage from './pages/AffiliateTrackingPage';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<SignupPage />} /> */}

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* Main Pages */}

          <Route path="solutions" element={<SolutionsPage />} />

          {/* Solutions Verticals */}
          <Route path="solutions/networks" element={<AffiliateNetworkPage />} />
          <Route path="solutions/agencies" element={<AgenciesPage />} />
          <Route path="solutions/fintech" element={<FintechPage />} />
          <Route path="solutions/ecommerce" element={<EcommercePage />} />
          <Route path="solutions/mobile-vas" element={<MobileVASPage />} />
          <Route path="solutions/health-fitness" element={<HealthFitnessPage />} />

          <Route path="contact" element={<ContactPage />} />

          {/* Products & Features (Using FeaturePage Template) */}
          <Route path="features/affiliate-tracking" element={<AffiliateTrackingPage />} />
          <Route path="features/anti-fraud" element={<FraudDetectionPage />} />
          <Route path="features/mobile-attribution" element={<MobileAttributionPage />} />
          <Route path="features/ecommerce" element={<EcommerceFeaturePage />} />
          <Route path="features/media-buying" element={<MediaBuyingPage />} />
          <Route path="features/automation" element={<AutomatedMarketingPage />} />
          <Route path="features/white-label" element={<WhiteLabelPage />} />

          {/* Services & Company (Using ContentPage Template) */}

          {/* Company */}
          <Route path="company/about" element={<AboutUsPage />} />
          <Route path="company/abuse" element={<AbusePage />} />
          <Route path="company/careers" element={<CareersPage />} />
          <Route path="company/events" element={<EventsPage />} />

          <Route path="services/onboarding" element={<OnboardingPage />} />
          <Route path="services/support" element={<CustomerSupportPage />} />
          <Route path="services/migration" element={<MigrationPage />} />
          <Route path="services/integration" element={<IntegrationPage />} />

          {/* Resources */}
          <Route path="pricing" element={<PricingPage />} />
          <Route path="resources/blog" element={<BlogPage />} />
          <Route path="resources/awards" element={<AwardsPage />} />
          <Route path="resources/newsroom" element={<NewsroomPage />} />
          <Route path="resources/video-tutorial" element={<VideoTutorialsPage />} />
          <Route path="resources/user-guide" element={<HelpCenterPage title="User Guide" />} />
          <Route path="resources/case-studies" element={<CaseStudiesPage />} />
          <Route path="compare" element={<ComparePage />} />
          <Route path="resources/guide" element={<HelpCenterPage title="User Guide" />} />
          <Route path="resources/knowledge-base" element={<HelpCenterPage title="Knowledge Base" />} />
          <Route path="resources/api" element={<HelpCenterPage title="API Documentation" />} />
          <Route path="resources/glossary" element={<GlossaryPage />} />

          {/* Comparisons */}
          {/* Comparisons - Dynamic Route handles ALL competitors */}
          <Route path="compare/:competitor" element={<CompetitorComparePage />} />

          {/* Legal Pages */}
          <Route path="privacy" element={<LegalPage />} />
          <Route path="terms" element={<LegalPage />} />
          <Route path="gdpr" element={<LegalPage />} />
          <Route path="ccpa" element={<LegalPage />} />
          <Route path="security" element={<LegalPage />} />
          <Route path="cookie-policy" element={<LegalPage />} />

          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
