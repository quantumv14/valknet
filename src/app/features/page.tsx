"use client";

import { Shield, ArrowLeft, Zap, Lock, Eye, TrendingUp, Users, Globe, Server, Activity, Bot, Code, Search, FileText, FileCheck, Cloud, CheckCircle } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function FeaturesPage() {
  const features = [
    {
      title: "Advanced Threat Detection",
      description: "AI-powered threat detection that identifies and neutralizes sophisticated attacks in real-time using behavioral analysis and machine learning algorithms.",
      icon: Shield,
    },
    {
      title: "24/7 Monitoring",
      description: "Continuous surveillance of your network infrastructure with expert security analysts monitoring for threats around the clock.",
      icon: Eye,
    },
    {
      title: "Automated Response",
      description: "Intelligent automation that responds to security incidents faster than humanly possible, minimizing impact and reducing response times.",
      icon: Zap,
    },
    {
      title: "Compliance Reporting",
      description: "Automated compliance reports for SOC 2, ISO 27001, GDPR, and other industry standards with audit trails and documentation.",
      icon: FileCheck,
    },
    {
      title: "Cloud Security",
      description: "Comprehensive protection for your cloud infrastructure with automated vulnerability scanning and real-time threat detection.",
      icon: Cloud,
    },
    {
      title: "Endpoint Protection",
      description: "Advanced endpoint security that protects devices across your organization with real-time scanning and behavioral analysis.",
      icon: Server,
    }
  ];

  const benefits = [
    {
      title: "Reduce Risk",
      description: "Minimize your organization's exposure to cyber threats with comprehensive protection that adapts to evolving attack vectors.",
      stat: "99.9% threat detection rate"
    },
    {
      title: "Save Time",
      description: "Automate security operations and reduce the burden on your IT team with intelligent systems that handle routine tasks.",
      stat: "85% reduction in manual tasks"
    },
    {
      title: "Ensure Compliance",
      description: "Meet industry regulations and standards with automated compliance reporting and audit-ready documentation.",
      stat: "100% compliance reporting accuracy"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white gradient-mesh noise-texture">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 fade-in">
            <div className="inline-block mb-6 px-4 py-2 bg-white/5 border border-[#24a0af]/30 rounded-full">
              <span className="text-sm text-[#24a0af] flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Enterprise Security Platform
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Advanced Security Features</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive protection designed to defend against the most sophisticated cyber threats while providing intuitive management and detailed insights.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-4">Core Security Capabilities</h2>
            <p className="text-xl text-gray-400">
              Advanced protection technologies designed to defend against the most sophisticated cyber threats
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 staggered-animation">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-[#1a5b60]/20 to-black/50 p-8 rounded-xl border border-[#24a0af]/20 product-card">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#24a0af]/10 border border-[#24a0af]/30 mb-6">
                    <IconComponent className="w-8 h-8 text-[#24a0af]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-4">Security That Delivers Results</h2>
            <p className="text-xl text-gray-400">
              Measurable benefits that protect your organization and support your business objectives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-animation">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center product-card">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#24a0af]/10 border border-[#24a0af]/30 mb-4 mx-auto">
                  <TrendingUp className="w-8 h-8 text-[#24a0af]" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 mb-4">{benefit.description}</p>
                <div className="text-2xl font-bold text-[#24a0af]">{benefit.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-3xl font-bold mb-6">Powered by Advanced AI</h2>
              <p className="text-gray-300 mb-6">
                Our proprietary machine learning algorithms analyze billions of data points daily, learning from new threats 
                and adapting to evolving attack patterns. This allows us to detect zero-day exploits and sophisticated 
                attacks that traditional security tools might miss.
              </p>
              <p className="text-gray-300 mb-6">
                The platform automatically scales to handle traffic spikes and can be deployed across multiple cloud 
                providers and regions to ensure high availability and data sovereignty compliance.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#24a0af] flex-shrink-0" />
                  <span>Behavioral analysis engine</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#24a0af] flex-shrink-0" />
                  <span>Heuristic detection algorithms</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#24a0af] flex-shrink-0" />
                  <span>Cloud-based threat intelligence</span>
                </li>
              </ul>
            </div>
            <div className="fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#24a0af]/30 to-[#1a5b60]/20 rounded-full blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-[#24a0af]/10 to-transparent p-8 rounded-2xl border border-[#24a0af]/30 backdrop-blur-sm">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-black/40 p-6 rounded-xl border border-white/10">
                      <div className="text-3xl font-bold text-[#24a0af] mb-2">99.9%</div>
                      <div className="text-gray-400">Detection Rate</div>
                    </div>
                    <div className="bg-black/40 p-6 rounded-xl border border-white/10">
                      <div className="text-3xl font-bold text-[#24a0af] mb-2">&lt;1s</div>
                      <div className="text-gray-400">Response Time</div>
                    </div>
                    <div className="bg-black/40 p-6 rounded-xl border border-white/10">
                      <div className="text-3xl font-bold text-[#24a0af] mb-2">24/7</div>
                      <div className="text-gray-400">Monitoring</div>
                    </div>
                    <div className="bg-black/40 p-6 rounded-xl border border-white/10">
                      <div className="text-3xl font-bold text-[#24a0af] mb-2">100%</div>
                      <div className="text-gray-400">Compliance</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center fade-in">
          <h2 className="text-4xl font-bold mb-6">Ready to Enhance Your Security?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Discover how our advanced security features can protect your organization from evolving cyber threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#24a0af] hover:bg-[#1a5b60] text-white px-8 py-3 rounded-lg font-medium transition-colors fast-button-hover">
              Contact Sales
            </Link>
            <Link href="/products" className="border border-white/20 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-medium transition-colors fast-button-hover">
              View Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
