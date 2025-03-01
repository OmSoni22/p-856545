import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import UnlockPowerSection from "@/components/sections/UnlockPowerSection";
import FeatureCardsSection from "@/components/sections/FeatureCardsSection";
import EmpoweringSection from "@/components/sections/EmpoweringSection";
import PotentialSection from "@/components/sections/PotentialSection";
import OptimizeSection from "@/components/sections/OptimizeSection";
import UnlockFullPotentialSection from "@/components/sections/UnlockFullPotentialSection";
import JourneySection from "@/components/sections/JourneySection";
import NewsletterSignup from "@/components/ui/NewsletterSignup";
import ContactForm from "@/components/ui/ContactForm";

const Index: React.FC = () => {
  return (
    <div className="bg-white">
      <header>
        <Navbar />
      </header>

      <main>
        <HeroSection />
        <UnlockPowerSection />
        <FeatureCardsSection />
        <EmpoweringSection />
        <PotentialSection />
        <OptimizeSection />
        <UnlockFullPotentialSection />
        <JourneySection />

        <section className="bg-white py-16 px-5 md:px-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Get in Touch
              </h2>
              <p className="text-[rgba(119,117,120,1)] mb-8">
                Have questions about our AI-powered Python backend solutions?
                Reach out to our team of experts and discover how we can help
                transform your business.
              </p>
              <ContactForm />
            </div>
            <div className="flex flex-col justify-center">
              <NewsletterSignup />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
