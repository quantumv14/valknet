"use client";

import { Shield, ArrowLeft, Building, Globe, Server, Users, Zap, Lock } from "lucide-react";
import Link from "next/link";

export default function SolutionsPage() {
  const solutions = [
    {
      icon: Building,
      title: "Enterprise Security",
      description: "Comprehensive security solutions for large organizations with complex infrastructure needs.",
      features: ["Multi-site deployment", "Centralized management", "Advanced reporting", "24/7 support"],
      industries: ["Financial Services", "Healthcare", "Government", "Manufacturing"]
    },
    {
      icon: Server,
      title: "Cloud Security",
      description: "Native cloud protection for AWS, Azure, and Google Cloud environments.",
      features: ["Auto-scaling protection", "Container security", "Serverless monitoring", "Cloud compliance"],
      industries: ["SaaS Companies", "E-commerce", "Startups", "Digital Agencies"]
    },
    {
      icon: Users,
      title: "SMB Protection",
      description: "Affordable, easy-to-deploy security solutions for small and medium businesses.",
      features: ["Simple setup", "Automated management", "Cost-effective", "Remote monitoring"],
      industries: ["Retail", "Professional Services", "Education", "Non-profit"]
    },
    {
      icon: Globe,
      title: "Global Deployment",
      description: "Worldwide security infrastructure with local compliance and data residency.",
      features: ["Multi-region support", "Local data centers", "Compliance frameworks", "24/7 global support"],
      industries: ["Multinational Corps", "Global Retailers", "International Banks", "Consulting Firms"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white gradient-mesh noise-texture">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-[#24a0af]" />
            <span className="text-xl font-bold">Valknet Security</span>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors fast-button-hover">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Security Solutions</h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Tailored cybersecurity solutions designed for organizations of every size and industry. 
              From startups to Fortune 500 companies, we have the right protection for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-[#1a5b60]/20 to-black/50 p-8 rounded-xl border border-[#24a0af]/20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-[#24a0af]/20 to-[#1a5b60]/10 rounded-xl border border-[#24a0af]/30">
                    <solution.icon className="w-8 h-8 text-[#24a0af]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">{solution.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-[#24a0af] uppercase tracking-wide mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-400 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#24a0af] rounded-full flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-[#24a0af] uppercase tracking-wide mb-3">Industries</h4>
                    <ul className="space-y-2">
                      {solution.industries.map((industry, industryIndex) => (
                        <li key={industryIndex} className="text-sm text-gray-400 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0"></div>
                          {industry}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Industry Expertise</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Deep understanding of industry-specific security challenges and compliance requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#24a0af]/10 border border-[#24a0af]/30 mb-4">
                <Building className="w-8 h-8 text-[#24a0af]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Financial Services</h3>
              <p className="text-gray-400">PCI DSS, SOX compliance with advanced fraud detection and real-time transaction monitoring.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#24a0af]/10 border border-[#24a0af]/30 mb-4">
                <Shield className="w-8 h-8 text-[#24a0af]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Healthcare</h3>
              <p className="text-gray-400">HIPAA compliance with patient data protection and medical device security monitoring.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#24a0af]/10 border border-[#24a0af]/30 mb-4">
                <Lock className="w-8 h-8 text-[#24a0af]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Government</h3>
              <p className="text-gray-400">FedRAMP authorization with classified data protection and advanced threat intelligence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Find Your Perfect Security Solution</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let our experts help you choose the right security solution for your organization's unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#24a0af] hover:bg-[#1a5b60] text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Consult Our Experts
            </Link>
            <Link href="/products" className="border border-white/20 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-6 text-center text-sm text-gray-400">
          <p>&copy; 2025 Valknet Security. All rights reserved. Protecting enterprises worldwide.</p>
        </div>
      </footer>
    </div>
  );
}
