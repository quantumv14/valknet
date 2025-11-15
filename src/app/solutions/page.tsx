"use client";

import { Shield, ArrowLeft, Building, Globe, Server, Users, Zap, Lock, Cloud, TrendingUp, Activity } from "lucide-react";
import Link from "next/link";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Enterprise Security",
      description: "Comprehensive protection for large organizations with complex infrastructure and compliance requirements.",
      icon: Shield,
      features: [
        "Multi-layered threat protection",
        "24/7 security operations center",
        "Custom compliance reporting",
        "Dedicated security team"
      ]
    },
    {
      title: "SMB Protection",
      description: "Affordable security solutions designed specifically for small and medium-sized businesses.",
      icon: Lock,
      features: [
        "Essential threat detection",
        "Automated security updates",
        "Email & web protection",
        "Simple management dashboard"
      ]
    },
    {
      title: "Cloud Security",
      description: "Specialized protection for cloud infrastructure and hybrid environments.",
      icon: Cloud,
      features: [
        "Multi-cloud threat detection",
        "Automated compliance scanning",
        "Container security",
        "Serverless protection"
      ]
    }
  ];

  const industries = [
    {
      name: "Financial Services",
      description: "PCI DSS, SOX, and FINRA compliance with advanced fraud detection.",
      icon: TrendingUp
    },
    {
      name: "Healthcare",
      description: "HIPAA compliance with specialized medical data protection.",
      icon: Activity
    },
    {
      name: "Government",
      description: "FedRAMP, FISMA, and CJIS compliance for public sector organizations.",
      icon: Users
    },
    {
      name: "Retail",
      description: "PCI DSS compliance with point-of-sale and e-commerce protection.",
      icon: Globe
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
                Tailored Security Solutions
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Enterprise Security Solutions</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Customized cybersecurity strategies designed to protect your organization's unique infrastructure, 
              data, and business objectives across any industry or deployment model.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-4">Security Solutions</h2>
            <p className="text-xl text-gray-400">
              Comprehensive protection tailored to your organization's specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 staggered-animation">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-[#1a5b60]/20 to-black/50 p-8 rounded-xl border border-[#24a0af]/20 product-card">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#24a0af]/10 border border-[#24a0af]/30 mb-6">
                    <IconComponent className="w-8 h-8 text-[#24a0af]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-gray-400 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#24a0af]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl text-gray-400">
              Compliance-focused security tailored to your industry's unique requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 staggered-animation">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-[#1a5b60]/10 to-black/50 p-6 rounded-xl border border-[#24a0af]/20 text-center product-card">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#24a0af]/10 border border-[#24a0af]/30 mb-4 mx-auto">
                    <IconComponent className="w-6 h-6 text-[#24a0af]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{industry.name}</h3>
                  <p className="text-sm text-gray-400">{industry.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-3xl font-bold mb-6">Unified Security Platform</h2>
              <p className="text-gray-300 mb-6">
                Our integrated platform combines advanced threat detection, real-time monitoring, 
                and automated response capabilities into a single, cohesive solution that adapts 
                to your organization's evolving security needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Shield className="w-5 h-5 text-[#24a0af]" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Centralized Management</h3>
                    <p className="text-gray-400 text-sm">Single pane of glass for all security operations with role-based access controls.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Zap className="w-5 h-5 text-[#24a0af]" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">AI-Powered Analytics</h3>
                    <p className="text-gray-400 text-sm">Machine learning algorithms that continuously adapt to new threat patterns.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Globe className="w-5 h-5 text-[#24a0af]" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Global Threat Intelligence</h3>
                    <p className="text-gray-400 text-sm">Real-time insights from our worldwide sensor network and threat research team.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#24a0af]/30 to-[#1a5b60]/20 rounded-full blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-[#24a0af]/10 to-transparent p-8 rounded-2xl border border-[#24a0af]/30 backdrop-blur-sm">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Threat Detection</span>
                      <span className="font-bold text-[#24a0af]">99.9%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-[#24a0af] h-2 rounded-full w-full"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Response Time</span>
                      <span className="font-bold text-[#24a0af]">&lt;1 second</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-[#24a0af] h-2 rounded-full w-11/12"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Uptime</span>
                      <span className="font-bold text-[#24a0af]">99.99%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-[#24a0af] h-2 rounded-full w-full"></div>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Organization?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact our security experts to discuss a customized solution for your organization's unique needs.
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
