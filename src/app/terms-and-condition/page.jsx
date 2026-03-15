import React from "react";
import PublicNav from "@/components/PublicNav";
import Footer from "@/components/Footer";
import { AppProvider } from "@/context/AppContext";

export const metadata = {
  title: "Terms & Conditions — NexusStays",
  description: "Read the terms and conditions for using NexusStays.",
};

export default function TermsPage() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-white">
        <PublicNav />

        {/* Hero */}
        <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-32 pb-16 px-4">
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Terms & Conditions</h1>
            <p className="text-slate-400 text-sm">Last updated: September 01, 2025</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-slate max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using NexusStays, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.
            </p>

            <h2>2. Use of Service</h2>
            <p>
              NexusStays provides a platform for users to discover and book accommodations. You must be at least 18 years old to use this service. You are responsible for maintaining the confidentiality of your account credentials.
            </p>

            <h2>3. Bookings & Payments</h2>
            <ul>
              <li>All bookings are subject to availability and confirmation by the property.</li>
              <li>Prices displayed include applicable taxes unless stated otherwise.</li>
              <li>Payments are processed securely through our authorized payment partners.</li>
              <li>A service fee may be charged on each booking.</li>
            </ul>

            <h2>4. Cancellations & Refunds</h2>
            <p>
              Cancellation policies vary by property. Please review the specific cancellation policy before confirming your booking. Refunds, if applicable, will be processed within 7–14 business days to your original payment method.
            </p>

            <h2>5. User Responsibilities</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the service for unlawful purposes</li>
              <li>Provide false or misleading information</li>
              <li>Interfere with the operation of the platform</li>
              <li>Attempt to access other users&apos; accounts</li>
              <li>Resell or commercially exploit our services</li>
            </ul>

            <h2>6. Liability Disclaimer</h2>
            <p>
              NexusStays acts as an intermediary between guests and accommodation providers. We are not liable for the quality, safety, or accuracy of listings provided by third-party hosts. We do our best to verify each listing, but ultimate responsibility lies with the property owner.
            </p>

            <h2>7. Intellectual Property</h2>
            <p>
              All content on NexusStays — including logos, text, images, and code — is owned by Sahad Labs and protected by copyright law. Unauthorized use is prohibited.
            </p>

            <h2>8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the platform after changes constitutes acceptance of the updated terms.
            </p>

            <h2>9. Contact</h2>
            <p>
              For questions regarding these terms, contact <strong>support@nexusstays.com</strong>.
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </AppProvider>
  );
}
