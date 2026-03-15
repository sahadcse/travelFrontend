import React from "react";
import PublicNav from "@/components/PublicNav";
import Footer from "@/components/Footer";
import { AppProvider } from "@/context/AppContext";

export const metadata = {
  title: "Privacy Policy — NexusStays",
  description: "Read the NexusStays privacy policy to learn how we handle your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-white">
        <PublicNav />

        {/* Hero */}
        <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-32 pb-16 px-4">
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Privacy Policy</h1>
            <p className="text-slate-400 text-sm">Last updated: September 01, 2025</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-slate max-w-none">
            <h2>1. Information We Collect</h2>
            <p>
              We collect information you provide when creating an account, making a booking, or contacting us — including your name, email address, phone number, and payment details. We also collect usage data through cookies and analytics tools to improve our services.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>We use your personal data to:</p>
            <ul>
              <li>Process bookings and payments</li>
              <li>Send booking confirmations and updates</li>
              <li>Provide customer support</li>
              <li>Improve our platform and services</li>
              <li>Send promotional offers (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>3. Data Sharing</h2>
            <p>
              We do not sell your personal data. We may share your information with accommodation providers to fulfill bookings, payment processors to handle transactions, and law enforcement when legally required.
            </p>

            <h2>4. Data Security</h2>
            <p>
              We implement industry-standard security measures including SSL encryption, secure data storage, and regular security audits to protect your information from unauthorized access or breaches.
            </p>

            <h2>5. Cookies</h2>
            <p>
              We use cookies to enhance your browsing experience, remember your preferences, and analyze site traffic. You can control cookie settings through your browser preferences.
            </p>

            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your account and associated data</li>
              <li>Opt out of marketing communications</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>

            <h2>7. Contact Us</h2>
            <p>
              For any privacy-related questions, contact us at <strong>support@nexusstays.com</strong> or write to: Level 5, Nexus Tower, Gulshan Avenue, Dhaka-1212, Bangladesh.
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </AppProvider>
  );
}
