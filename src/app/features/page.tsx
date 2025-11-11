"use client";

import { Shield, ArrowLeft, Zap, Lock, Eye, TrendingUp, Users, Globe, Server, Activity, Bot, Code, Search, FileText } from "lucide-react";
import Link from "next/link";

export default function FeaturesPage() {
  const features = [
    {
      icon: Zap,
      title: "Real-Time Threat Detection",
      description: "Advanced AI-powered monitoring that identifies and neutralizes threats in milliseconds, providing instant protection against both known and zero-day attacks.",
      benefits: ["99.9% threat detection accuracy", "Sub-second response times", "Machine learning adaptation", "Behavioral analysis"]
    },
    {
      icon: Lock,
      title: "Advanced Encryption",
      description: "Military-grade encryption protocols protect your data at rest and in transit, ensuring complete confidentiality and integrity of sensitive information.",
      benefits: ["AES-256 encryption standard", "End-to-end protection", "Zero-knowledge architecture", "Quantum-resistant algorithms"]
    },
    {
      icon: Eye,
      title: "24/7 Monitoring",
      description: "Continuous surveillance of your digital infrastructure with automated alerting and response systems that never sleep.",
      benefits: ["Round-the-clock protection", "Automated incident response", "Real-time dashboards", "Proactive threat hunting"]
    },
    {
      icon: Server,
      title: "Enterprise Scalability",
      description: "Built for organizations of any size, from startups to Fortune 500 companies, with flexible deployment options and unlimited scaling.",
      benefits: ["Cloud-native architecture", "Auto-scaling capabilities", "Multi-tenant support", "Global deployment"]
    },
    {
      icon: Bot,
      title: "AI-Powered Intelligence",
      description: "Horus AI leverages machine learning to predict threats before they occur, providing proactive security measures and intelligent recommendations.",
      benefits: ["Predictive threat analysis", "Automated decision making", "Continuous learning", "Intelligent recommendations"]
    },
    {
      icon: Code,
      title: "Reverse Engineering Tools",
      description: "Xvy platform provides comprehensive malware analysis and reverse engineering capabilities for security researchers and analysts.",
      benefits: ["Binary analysis automation", "Malware dissection", "Cross-platform support", "Decompilation engine"]
    },
    {
      icon: Globe,
      title: "Global Threat Intelligence",
      description: "Access to worldwide threat intelligence networks providing real-time information about emerging security risks and attack patterns.",
      benefits: ["Global sensor network", "Threat intelligence feeds", "Attack pattern analysis", "IOC sharing"]
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Built-in collaboration tools allow security teams to work together effectively, share insights, and coordinate incident response.",
      benefits: ["Role-based access control", "Incident collaboration", "Knowledge sharing", "Team dashboards"]
    }
  ];

  const integrations = [
    { name: "Microsoft Azure", logo: "🔷" },
    { name: "Amazon AWS", logo: "🟠" },
    { name: "Google Cloud", logo: "🔴" },
    { name: "Splunk", logo: "🟢" },
    { name: "IBM QRadar", logo: "🔵" },
    { name: "ServiceNow", logo: "🟡" },
    { name: "Jira", logo: "🔵" },
    { name: "Slack", logo: "🟣" }
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Platform Features</h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Discover the comprehensive security capabilities that make Valknet Security the trusted choice 
              for organizations worldwide. From real-time threat detection to advanced AI analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-[#1a5b60]/20 to-black/50 p-8 rounded-xl border border-[#24a0af]/20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-[#24a0af]/20 to-[#1a5b60]/10 rounded-xl border border-[#24a0af]/30">
                    <feature.icon className="w-6 h-6 text-[#24a0af]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">{feature.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-[#24a0af] uppercase tracking-wide">Key Benefits</h4>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-400 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#24a0af] rounded-full flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Standards */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Security Standards & Compliance</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built to meet the highest security standards and regulatory requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#24a0af]/10 border border-[#24a0af]/30 mb-4">
                <Shield className="w-8 h-8 text-[#24a0af]" />
              </div>
              <h3 className="text-xl font-bold mb-2">ISO 27001</h3>
              <p className="text-gray-400">Information Security Management System certification ensuring systematic approach to managing sensitive information.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#24a0af]/10 border border-[#24a0af]/30 mb-4">
                <Lock className="w-8 h-8 text-[#24a0af]" />
              </div>
              <h3 className="text-xl font-bold mb-2">SOC 2 Type II</h3>
              <p className="text-gray-400">Comprehensive audit of security, availability, processing integrity, confidentiality, and privacy controls.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#24a0af]/10 border border-[#24a0af]/30 mb-4">
                <Globe className="w-8 h-8 text-[#24a0af]" />
              </div>
              <h3 className="text-xl font-bold mb-2">GDPR Compliant</h3>
              <p className="text-gray-400">Full compliance with General Data Protection Regulation for handling personal data of EU residents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Seamless Integrations</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Connect with your existing security stack and business tools for unified protection
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-gradient-to-br from-[#1a5b60]/10 to-black/50 p-6 rounded-xl border border-[#24a0af]/20 text-center">
                <div className="text-3xl mb-3">{integration.logo}</div>
                <h3 className="font-semibold">{integration.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Platform Performance</h2>
            <p className="text-xl text-gray-400">
              Industry-leading performance metrics that deliver results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#24a0af] mb-2">99.97%</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#24a0af] mb-2">&lt;2ms</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#24a0af] mb-2">500K+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Protected Endpoints</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#24a0af] mb-2">24/7</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience These Features?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            See how Valknet Security's comprehensive feature set can protect and empower your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#24a0af] hover:bg-[#1a5b60] text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Start Free Trial
            </Link>
            <Link href="/products" className="border border-white/20 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              View Products
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
