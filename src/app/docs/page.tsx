"use client";

import { Shield, ArrowLeft, Book, Search, FileText, Code, Zap, Users, Settings } from "lucide-react";
import Link from "next/link";

export default function DocsPage() {
  const sections = [
    {
      icon: Zap,
      title: "Getting Started",
      description: "Quick setup guides and initial configuration",
      articles: [
        "Installation Guide",
        "First-Time Setup",
        "Basic Configuration",
        "Account Setup"
      ]
    },
    {
      icon: Settings,
      title: "Configuration",
      description: "Detailed configuration options and settings",
      articles: [
        "Security Policies",
        "Network Settings",
        "User Management",
        "API Configuration"
      ]
    },
    {
      icon: Code,
      title: "API Reference",
      description: "Complete API documentation and examples",
      articles: [
        "Authentication",
        "Endpoints",
        "Rate Limiting",
        "SDKs & Libraries"
      ]
    },
    {
      icon: Users,
      title: "User Guides",
      description: "Step-by-step guides for common tasks",
      articles: [
        "Dashboard Overview",
        "Threat Management",
        "Reporting",
        "Integrations"
      ]
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
            <div className="flex items-center justify-center gap-3 mb-6">
              <Book className="w-12 h-12 text-[#24a0af]" />
              <h1 className="text-5xl md:text-6xl font-bold">Documentation</h1>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about implementing, configuring, and using Valknet Security products.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-4 bg-black/40 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:border-[#24a0af] focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-gradient-to-br from-[#1a5b60]/20 to-black/50 p-8 rounded-xl border border-[#24a0af]/20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-[#24a0af]/20 to-[#1a5b60]/10 rounded-xl border border-[#24a0af]/30">
                    <section.icon className="w-6 h-6 text-[#24a0af]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{section.title}</h3>
                    <p className="text-gray-400 mb-4">{section.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {section.articles.map((article, articleIndex) => (
                    <li key={articleIndex}>
                      <Link 
                        href={`/docs/${section.title.toLowerCase().replace(' ', '-')}/${article.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                      >
                        <FileText className="w-4 h-4 text-gray-400 group-hover:text-[#24a0af] transition-colors" />
                        <span className="text-gray-300 group-hover:text-white transition-colors">{article}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Popular Resources</h2>
            <p className="text-xl text-gray-400">
              Frequently accessed documentation and guides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/docs/api" className="bg-gradient-to-br from-[#1a5b60]/10 to-black/50 p-6 rounded-xl border border-[#24a0af]/20 hover:border-[#24a0af]/40 transition-colors group">
              <Code className="w-8 h-8 text-[#24a0af] mb-4" />
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#24a0af] transition-colors">API Reference</h3>
              <p className="text-gray-400">Complete API documentation with examples and SDKs</p>
            </Link>

            <Link href="/docs/quickstart" className="bg-gradient-to-br from-[#1a5b60]/10 to-black/50 p-6 rounded-xl border border-[#24a0af]/20 hover:border-[#24a0af]/40 transition-colors group">
              <Zap className="w-8 h-8 text-[#24a0af] mb-4" />
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#24a0af] transition-colors">Quick Start</h3>
              <p className="text-gray-400">Get up and running in under 10 minutes</p>
            </Link>

            <Link href="/docs/integrations" className="bg-gradient-to-br from-[#1a5b60]/10 to-black/50 p-6 rounded-xl border border-[#24a0af]/20 hover:border-[#24a0af]/40 transition-colors group">
              <Users className="w-8 h-8 text-[#24a0af] mb-4" />
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#24a0af] transition-colors">Integrations</h3>
              <p className="text-gray-400">Connect with your existing security stack</p>
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
