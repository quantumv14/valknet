"use client";

import { Shield, ArrowLeft, Mail, Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white gradient-mesh noise-texture">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ready to secure your organization? Get in touch with our security experts to discuss your needs and find the perfect solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 staggered-animation">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 product-card">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-[#24a0af]/20 to-[#1a5b60]/10 rounded-xl border border-[#24a0af]/30">
                    <Mail className="w-6 h-6 text-[#24a0af]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Email</h3>
                    <p className="text-gray-400">sales@valknetsecurity.com</p>
                    <p className="text-gray-400">support@valknetsecurity.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 product-card">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-[#24a0af]/20 to-[#1a5b60]/10 rounded-xl border border-[#24a0af]/30">
                    <Phone className="w-6 h-6 text-[#24a0af]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-gray-400">24/7 Emergency Support</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 product-card">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-[#24a0af]/20 to-[#1a5b60]/10 rounded-xl border border-[#24a0af]/30">
                    <MapPin className="w-6 h-6 text-[#24a0af]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Office</h3>
                    <p className="text-gray-400">123 Security Boulevard</p>
                    <p className="text-gray-400">San Francisco, CA 94105</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 product-card">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-[#24a0af]/20 to-[#1a5b60]/10 rounded-xl border border-[#24a0af]/30">
                    <Clock className="w-6 h-6 text-[#24a0af]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                    <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                    <p className="text-gray-400">Emergency Support: 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-[#1a5b60]/20 to-black/50 p-8 rounded-xl border border-[#24a0af]/20 product-card">
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full p-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-[#24a0af] focus:outline-none"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full p-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-[#24a0af] focus:outline-none"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-[#24a0af] focus:outline-none"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full p-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-[#24a0af] focus:outline-none"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full p-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-[#24a0af] focus:outline-none resize-none"
                    placeholder="Tell us about your security needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#24a0af] hover:bg-[#1a5b60] text-white py-3 px-6 rounded-lg font-medium transition-colors fast-button-hover"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
