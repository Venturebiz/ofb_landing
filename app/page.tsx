

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  Store,
  Users,
  MapPin,
  TrendingUp,
  Bell,
  CheckCircle,
  ArrowRight,
  Star,
  Sparkles,
  Play,
  Zap,
  Mail,
  Phone,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* -------------------------------------------------
   Footer component (now correctly closed)
   ------------------------------------------------- */
function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/offerbeez-logo.png"
                alt="OfferBeez Logo"
                width={150}
                height={45}
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 mb-4 font-semibold">
                One Platform. Endless Promotions.
              </p>
              <p className="text-sm text-gray-500">
                Revolutionizing local business promotion through innovation.
              </p>
              <p className="text-sm  text-gray-500">
                Monday to Sunday – 9:00 AM to 7:00 PM (GMT)
              </p>
            </div>

            {[
              {
                title: "Product",
                links: [
                  "Consumer App",
                  "Consumer TOS",
                  "Consumer FAQ",
                  "Business App",
                  "Business TOS",
                  "Business FAQ",
                  "Sales Partner App",
                  "Partner FAQ",
                  "Partner TOS",
                  
                ],
              },
              {
                title: "Company",
                links: ["About Us",  "Venturebiz Pvt Ltd.", "Contact Us","Business user billing"],
              },
              {
                title: "Support",
                links: [
                  "Help Center",
                  "Privacy Policy",
                  "Terms of Service",
                  "Cookie Policy",
                  "Refund & Cancellation Policy",
                  "User Consent Statement",
                ],
              },
            ].map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2 text-gray-400">
                  {section.links.map((link, linkIndex) => {
                    let href = "#";

                    // ---- app store links (replace with real IDs) ----
                    if (link === "Business App")
                      href =
                        "https://play.google.com/store/apps/details?id=com.yourcompany.businessapp";
                    if (link === "Consumer App")
                      href =
                        "https://play.google.com/store/apps/details?id=com.yourcompany.consumerapp";
                    if (link === "Sales Partner App")
                      href =
                        "https://play.google.com/store/apps/details?id=com.yourcompany.salespartnerapp";

                    // ---- internal pages ----
                    if (link === "Partner FAQ") href = "/partner-faq";
                    if (link === "Partner TOS") href = "/partner-tos";
                    if (link === "Business TOS") href = "/business-tos";
                    if (link === "Business FAQ") href = "/business-faq";
                    if (link === "Consumer FAQ") href = "/consumer-faq";
                    if (link === "Consumer TOS") href = "/consumer-tos";
                    if (link === "Privacy Policy") href = "/privacy-policy";
                    if (link === "Terms of Service") href = "/terms-of-service";
                    if (link === "Help Center") href = "/helpcenter";
                    if (link === "Cookie Policy") href = "/cookiepolicy";
                    if (link === "Refund & Cancellation Policy") href = "/refund-cancellation-policy";
                    if (link === "Venturebiz Pvt Ltd.") href = "https://www.venturebiz.in/";
                    if (link === "Business user billing") href = "business-user-billing";
                    if (link === "User Consent Statement") href = "user-consent-statement";

                    // ---- Contact Us modal ----
                    if (link === "Contact Us") {
                      return (
                        <li key={linkIndex}>
                          <button
                            onClick={openModal}
                            className="hover:text-white transition-colors duration-300"
                          >
                            {link}
                          </button>
                        </li>
                      );
                    }

                    return (
                      <li key={linkIndex}>
                        <a
                          href={href}
                          className="hover:text-white transition-colors duration-300"
                        >
                          {link}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              © 2025 Venturebiz Private Limited. All rights reserved.
              Launching Soon! ✨
            </p>
          </div>
        </div>
      </footer>

      {/* Contact Us Modal */}
      <AnimatePresence>
  {isModalOpen && (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeModal}
    >
      <motion.div
        className="bg-white rounded-2xl p-6 w-11/12 max-w-md text-center relative shadow-xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Contact Us
        </h2>
        <p className="text-gray-600 mb-6">
          We'd love to hear from you! Reach out anytime.
        </p>

        <div className="space-y-4">
          <a
            href="mailto:support@offerbeez.in"
            className="flex items-center justify-center gap-3 bg-gray-100 hover:bg-gray-200 p-3 rounded-lg transition"
          >
            <Mail className="w-5 h-5 text-pink-600" />
            <span className="text-gray-800 font-medium">
              support@offerbeez.in
            </span>
          </a>

          <div>
            <a
              href="tel:+919008522366"
              className="flex items-center justify-center gap-3 bg-gray-100 hover:bg-gray-200 p-3 rounded-lg transition"
            >
              <Phone className="w-5 h-5 text-green-600" />
              <span className="text-gray-800 font-medium">
                +91 9008522366
              </span>
            </a>
            <p className="text-xs text-gray-500 mt-2">
              Monday to Sunday – 9:00 AM to 7:00 PM (GMT)
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
}

/* -------------------------------------------------
   Main Landing Page
   ------------------------------------------------- */
export default function OfferBeezLanding() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-pink-100/30 to-blue-100/30 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-tr from-blue-100/30 to-pink-100/30 rounded-full blur-3xl animate-float-slow-delay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-50/20 to-blue-50/20 rounded-full blur-3xl animate-rotate-slow"></div>
      </div>

      {/* Header */}
      <header
        className={`container mx-auto px-4 py-6 relative z-10 transition-opacity duration-700 ${
          isLoaded ? "animate-slide-down opacity-100" : "opacity-0"
        }`}
      >
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="transform transition-all duration-300 hover:scale-105">
              <Image
                src="/offerbeez-logo.png"
                alt="OfferBeez Logo - One Platform. Endless Promotions."
                width={200}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {["Features", "How It Works", "Apps"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-gray-600 hover:text-pink-600 transition-all duration-300 font-medium relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href="/privacy-policy"
              className="text-gray-600 hover:text-pink-600 transition-colors duration-300 font-medium relative group"
            >
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Launch Badge */}
          <div
            className={`text-center mb-8 transition-opacity duration-700 ${
              isLoaded ? "animate-fade-in-up opacity-100" : "opacity-0"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            <div className="flex items-center justify-center gap-3">
              <img
                src="/location logo.png"
                alt="Location"
                className="w-8 h-8 object-contain"
              />
              <Badge className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-2 text-sm font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <Sparkles className="w-4 h-4 animate-pulse-gentle" />
                <span className="relative z-10">Launching Soon</span>
              </Badge>
            </div>
          </div>

          {/* Tagline */}
          <div
            className={`text-center mb-8 transition-opacity duration-700 ${
              isLoaded ? "animate-fade-in-up opacity-100" : "opacity-0"
            }`}
            style={{ animationDelay: "400ms" }}
          >
            <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6">
              <span className="block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent animate-text-reveal">
                One Platform.
              </span>
              <span className="block bg-gradient-to-r from-pink-600 via-pink-500 to-blue-600 bg-clip-text text-transparent animate-gradient-shift bg-[length:300%]">
                Endless Promotions.
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div
            className={`text-center mb-12 transition-opacity duration-700 ${
              isLoaded ? "animate-fade-in-up opacity-100" : "opacity-0"
            }`}
            style={{ animationDelay: "600ms" }}
          >
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Revolutionizing local business promotion through our innovative{" "}
              <span className="font-semibold text-gray-800 relative">
                three-app ecosystem
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-blue-500 animate-expand-line"></span>
              </span>
              . Connect businesses, consumers, and sales partners seamlessly.
            </p>
          </div>

          {/* CTA */}
          <div
            className={`text-center mb-16 transition-opacity duration-700 ${
              isLoaded ? "animate-fade-in-up opacity-100" : "opacity-0"
            }`}
            style={{ animationDelay: "1000ms" }}
          >
            <div className="max-w-md mx-auto">
              <form onSubmit={handleEmailSubmit} className="flex gap-3 mb-4">
                <div className="flex-1 relative group">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 px-4 border-gray-300 focus:border-pink-500 focus:ring-pink-500 rounded-lg text-base transition-all duration-300 group-hover:shadow-md focus:shadow-lg"
                    required
                  />
                  <Zap className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-pink-500 animate-pulse-gentle opacity-60" />
                </div>
                <Button
                  type="submit"
                  className="h-12 px-8 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                  <span className="relative z-10">
                    {isSubmitted ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      "Get Early Access"
                    )}
                  </span>
                </Button>
              </form>

              {isSubmitted && (
                <p className="text-green-600 text-sm font-medium animate-success-message">
                  Success! You'll be the first to know when we launch.
                </p>
              )}
              <p className="text-gray-500 text-sm">
                No spam, unsubscribe anytime. Early access guaranteed.
              </p>
            </div>
          </div>

          {/* Three-App Ecosystem */}
          <div
            className={`transition-opacity duration-700 ${
              isLoaded ? "animate-fade-in-up opacity-100" : "opacity-0"
            }`}
            style={{ animationDelay: "1200ms" }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-blue-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Three Apps, One Ecosystem
                  </h2>
                  <p className="text-gray-600">
                    Seamlessly connecting all stakeholders in local commerce
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Consumer */}
                  <div
                    className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group/card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                      isLoaded ? "animate-card-reveal" : "opacity-0"
                    }`}
                    style={{ animationDelay: "1400ms" }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 group-hover/card:scale-110 transition-all duration-300 relative overflow-hidden">
                      <Smartphone className="w-8 h-8 text-white relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-700"></div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover/card:text-pink-600 transition-colors duration-300">
                      Consumer App
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Discover local deals and offers near you
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {["GPS-based discovery", "Smart notifications", "Save favorites"].map(
                        (t, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 transform transition-all duration-300 hover:translate-x-1"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {t}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Business */}
                  <div
                    className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group/card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                      isLoaded ? "animate-card-reveal" : "opacity-0"
                    }`}
                    style={{ animationDelay: "1600ms" }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover/card:scale-110 transition-all duration-300 relative overflow-hidden">
                      <Store className="w-8 h-8 text-white relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-700"></div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover/card:text-blue-600 transition-colors duration-300">
                      Business App
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Create and manage your promotions
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {["Easy offer creation", "Performance analytics", "Customer insights"].map(
                        (t, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 transform transition-all duration-300 hover:translate-x-1"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {t}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Sales Partner */}
                  <div
                    className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group/card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                      isLoaded ? "animate-card-reveal" : "opacity-0"
                    }`}
                    style={{ animationDelay: "1800ms" }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover/card:scale-110 transition-all duration-300 relative overflow-hidden">
                      <Users className="w-8 h-8 text-white relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-700"></div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover/card:text-purple-600 transition-colors duration-300">
                      Sales Partner App
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Earn by helping businesses grow
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {["Onboard businesses", "Track commissions", "Performance metrics"].map(
                        (t, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 transform transition-all duration-300 hover:translate-x-1"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {t}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>

                {/* Demo CTA */}
                <div
                  className={`text-center mt-8 transition-opacity duration-700 ${
                    isLoaded ? "animate-fade-in-up opacity-100" : "opacity-0"
                  }`}
                  style={{ animationDelay: "2000ms" }}
                >
                  <Button
                    variant="outline"
                    className="inline-flex items-center gap-2 px-6 py-3 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-md bg-transparent group"
                  >
                    <Play className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    Watch Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose OfferBeez?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform creates value for everyone in the local business ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: MapPin,
                title: "Location-Based Discovery",
                desc: "Real-time offers based on GPS location with smart category filters",
                color: "pink",
              },
              {
                icon: TrendingUp,
                title: "Performance Analytics",
                desc: "Detailed insights for businesses to track offer performance and engagement",
                color: "blue",
              },
              {
                icon: Bell,
                title: "Smart Notifications",
                desc: "Personalized push notifications for new offers and expiring deals",
                color: "purple",
              },
            ].map((f, i) => (
              <Card
                key={i}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 bg-${f.color}-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <f.icon className={`w-8 h-8 text-${f.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {f.title}
                  </h3>
                  <p className="text-gray-600">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: 1,
                title: "Choose Your App",
                desc: "Download the Consumer, Business, or Sales Partner app based on your needs",
                gradient: "from-pink-500 to-pink-600",
              },
              {
                step: 2,
                title: "Create & Connect",
                desc: "Set up your profile and start creating offers or discovering deals",
                gradient: "from-blue-500 to-blue-600",
              },
              {
                step: 3,
                title: "Grow & Earn",
                desc: "Track performance, build relationships, and grow your business or savings",
                gradient: "from-purple-500 to-purple-600",
              },
            ].map((s, i) => (
              <div key={i} className="text-center group">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${s.gradient} rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {s.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {s.title}
                </h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section id="apps" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Three Powerful Apps
            </h2>
            <p className="text-xl text-gray-600">
              Each designed for specific user needs and goals
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Smartphone,
                title: "Consumer App",
                desc: "Discover amazing local deals right where you are",
                features: [
                  "GPS-based offer discovery",
                  "Category filters & search",
                  "Save favorite deals",
                  "Share with friends",
                ],
                gradient: "from-pink-500 to-pink-600",
              },
              {
                icon: Store,
                title: "Business App",
                desc: "Promote your business with powerful digital tools",
                features: [
                  "Easy offer creation",
                  "Performance analytics",
                  "Customer insights",
                  "Real-time updates",
                ],
                gradient: "from-blue-500 to-blue-600",
              },
              {
                icon: Users,
                title: "Sales Partner App",
                desc: "Earn by helping local businesses grow digitally",
                features: [
                  "Onboard businesses",
                  "Track commissions",
                  "Performance metrics",
                  "Territory mapping",
                ],
                gradient: "from-purple-500 to-purple-600",
              },
            ].map((app, i) => (
              <Card
                key={i}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${app.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <app.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    {app.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{app.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {app.features.map((f, fi) => (
                      <li
                        key={fi}
                        className="flex items-center text-gray-600"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full bg-gradient-to-r ${app.gradient} hover:scale-105 transition-all duration-300 shadow-lg`}
                  >
                    Get Notified <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Be Among the First to Experience OfferBeez
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get exclusive early access and special launch benefits when we go
              live
            </p>

            <div className="max-w-md mx-auto mb-8">
              <form onSubmit={handleEmailSubmit} className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 flex-1 border-gray-300 focus:border-pink-500 rounded-lg"
                  required
                />
                <Button
                  type="submit"
                  className="h-12 px-8 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Join Waitlist
                </Button>
              </form>
            </div>

            <div className="flex justify-center items-center space-x-8 text-gray-500">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                <span>No spam, ever</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>Early access guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (rendered here) */}
      <Footer />
    </div>
  );
}