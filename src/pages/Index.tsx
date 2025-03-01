
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

      <main className="pt-[70px]">
        <HeroSection />
        <UnlockPowerSection />
        <FeatureCardsSection />
        <EmpoweringSection />
        <PotentialSection />
        <OptimizeSection />
        <UnlockFullPotentialSection />
        <JourneySection />

        <section className="bg-white py-16 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 w-full">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-16 fade-in">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-[rgba(119,117,120,1)] mb-8 fade-in" style={{animationDelay: "0.1s"}}>
                  Have questions about our AI-powered Python backend solutions?
                  Reach out to our team of experts and discover how we can help
                  transform your business.
                </p>
                <ContactForm />
              </div>
              <div className="flex flex-col justify-center h-full pt-10 lg:pt-0">
                <NewsletterSignup />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
