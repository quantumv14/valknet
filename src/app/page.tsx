import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, Server, Bell, Users, Globe, Zap, Cloud, FileCheck, Activity } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white gradient-mesh noise-texture">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-[#24a0af]" />
            <span className="text-xl font-bold">Valknet Security</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm hover:text-[#24a0af] transition-colors">About Us</a>
            <a href="#features" className="text-sm hover:text-[#24a0af] transition-colors">Features</a>
            <a href="#solutions" className="text-sm hover:text-[#24a0af] transition-colors">Solutions</a>
            <Link href="/news" className="text-sm hover:text-[#24a0af] transition-colors">News</Link>
            <a href="#contact" className="text-sm hover:text-[#24a0af] transition-colors">Contact</a>
          </div>
          <Button variant="ghost" size="icon" className="hover:bg-white/10">
            <Globe className="w-5 h-5" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-white/5 border border-[#24a0af]/30 rounded-full">
            <span className="text-sm text-[#24a0af] flex items-center gap-2">
              <Zap className="w-4 h-4" />
              v4.2.1 Advanced Threat Detection
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            The definitive cybersecurity<br />platform for enterprise protection
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Valknet Security provides comprehensive threat detection, real-time monitoring, and advanced security solutions to protect your digital infrastructure from evolving cyber threats.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/products">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 fast-button-hover">
                <Server className="w-5 h-5 mr-2" />
                Get Started
              </Button>
            </Link>
            <Link href="/status">
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 fast-button-hover">
                <Activity className="w-5 h-5 mr-2" />
                System Status
              </Button>
            </Link>
          </div>

          {/* Security Dashboard Mockup */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-[#1a5b60]/30 to-black/50 p-8 rounded-xl border border-[#24a0af]/20 teal-glow backdrop-blur-sm">
              <div className="bg-black/80 rounded-lg p-6 border border-white/10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 text-sm text-gray-400">Security Dashboard</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-[#24a0af]/10 border border-[#24a0af]/30 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Threats Blocked</span>
                      <Shield className="w-4 h-4 text-green-400" />
                    </div>
                    <div className="text-2xl font-bold text-green-400">12,847</div>
                  </div>
                  <div className="bg-[#24a0af]/10 border border-[#24a0af]/30 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Active Monitoring</span>
                      <Eye className="w-4 h-4 text-[#24a0af]" />
                    </div>
                    <div className="text-2xl font-bold text-[#24a0af]">24/7</div>
                  </div>
                  <div className="bg-[#24a0af]/10 border border-[#24a0af]/30 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Response Time</span>
                      <Zap className="w-4 h-4 text-yellow-400" />
                    </div>
                    <div className="text-2xl font-bold text-yellow-400">&lt;2ms</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <span className="text-sm">System Status: Secure</span>
                    </div>
                    <span className="text-xs text-gray-500">Just now</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#24a0af]"></div>
                      <span className="text-sm">Firewall: Active</span>
                    </div>
                    <span className="text-xs text-gray-500">2 mins ago</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <span className="text-sm">Threat detected and neutralized</span>
                    </div>
                    <span className="text-xs text-gray-500">5 mins ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#24a0af]/10 border border-[#24a0af]/30 mb-4">
                <Zap className="w-8 h-8 text-[#24a0af]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Real-time Threat Detection</h3>
              <p className="text-gray-400">Advanced AI-powered monitoring identifies and neutralizes threats before they impact your systems.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#24a0af]/10 border border-[#24a0af]/30 mb-4">
                <Server className="w-8 h-8 text-[#24a0af]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Enterprise Infrastructure</h3>
              <p className="text-gray-400">Scalable security solutions designed for organizations of any size with enterprise-grade protection.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#24a0af]/10 border border-[#24a0af]/30 mb-4">
                <Bell className="w-8 h-8 text-[#24a0af]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Instant Alerts</h3>
              <p className="text-gray-400">Get notified immediately of security events with customizable alert systems and detailed reporting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Valknet Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What is Valknet Security?</h2>
          <p className="text-xl text-gray-400 mb-6">
            We believe cybersecurity should be accessible and comprehensive. That's why we created Valknet Security - a complete security platform that protects your infrastructure, monitors threats, manages vulnerabilities, and responds to incidents, all in one place.
          </p>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of organizations who've discovered a better way to secure their digital assets.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-200">
            <Server className="w-5 h-5 mr-2" />
            Schedule a Demo
          </Button>
        </div>
      </section>

      {/* Advanced Features */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto text-center mb-16">
          <div className="inline-block mb-6 px-4 py-2 bg-white/5 border border-[#24a0af]/30 rounded-full">
            <span className="text-sm text-[#24a0af]">Continuous Innovation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Comprehensive security features</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Enterprise-grade protection combined with the flexibility and intelligence of modern cybersecurity.
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
          <div className="bg-gradient-to-br from-[#1a5b60]/20 to-black/50 p-8 rounded-xl border border-[#24a0af]/20">
            <Lock className="w-12 h-12 text-[#24a0af] mb-4" />
            <h3 className="text-2xl font-bold mb-3">Advanced Encryption</h3>
            <p className="text-gray-400">Military-grade encryption protects your data at rest and in transit with zero-knowledge architecture.</p>
          </div>

          <div className="bg-gradient-to-br from-[#1a5b60]/20 to-black/50 p-8 rounded-xl border border-[#24a0af]/20">
            <Eye className="w-12 h-12 text-[#24a0af] mb-4" />
            <h3 className="text-2xl font-bold mb-3">24/7 Monitoring</h3>
            <p className="text-gray-400">Round-the-clock surveillance of your network with AI-powered anomaly detection and instant response protocols.</p>
          </div>

          <div className="bg-gradient-to-br from-[#1a5b60]/20 to-black/50 p-8 rounded-xl border border-[#24a0af]/20">
            <Users className="w-12 h-12 text-[#24a0af] mb-4" />
            <h3 className="text-2xl font-bold mb-3">Access Management</h3>
            <p className="text-gray-400">Granular permission controls, multi-factor authentication, and identity verification for complete access security.</p>
          </div>

          <div className="bg-gradient-to-br from-[#1a5b60]/20 to-black/50 p-8 rounded-xl border border-[#24a0af]/20">
            <Cloud className="w-12 h-12 text-[#24a0af] mb-4" />
            <h3 className="text-2xl font-bold mb-3">Cloud Security</h3>
            <p className="text-gray-400">Secure your cloud infrastructure with automated compliance checks and real-time vulnerability scanning.</p>
          </div>

          <div className="bg-gradient-to-br from-[#1a5b60]/20 to-black/50 p-8 rounded-xl border border-[#24a0af]/20">
            <FileCheck className="w-12 h-12 text-[#24a0af] mb-4" />
            <h3 className="text-2xl font-bold mb-3">Compliance Reporting</h3>
            <p className="text-gray-400">Automated audit trails and compliance reports for SOC 2, ISO 27001, GDPR, and industry standards.</p>
          </div>

          <div className="bg-gradient-to-br from-[#1a5b60]/20 to-black/50 p-8 rounded-xl border border-[#24a0af]/20">
            <Server className="w-12 h-12 text-[#24a0af] mb-4" />
            <h3 className="text-2xl font-bold mb-3">Infrastructure Protection</h3>
            <p className="text-gray-400">Comprehensive endpoint protection, network segmentation, and disaster recovery solutions.</p>
          </div>
        </div>
      </section>

      {/* Valknet Pro Section */}
      <section id="solutions" className="py-20 px-6 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-6 px-4 py-2 bg-[#24a0af]/20 border border-[#24a0af]/50 rounded-full">
              <span className="text-sm text-[#24a0af] font-semibold">Premium Enterprise Package</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Valknet <span className="text-[#24a0af]">Pro</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Elevate your security posture with Pro. Get exclusive features that take your protection and compliance to the next level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Zap className="w-6 h-6 text-[#24a0af]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Priority Incident Response</h3>
                  <p className="text-gray-400">Dedicated security team available 24/7 with guaranteed response times under 15 minutes.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Cloud className="w-6 h-6 text-[#24a0af]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Advanced Threat Intelligence</h3>
                  <p className="text-gray-400">Access to global threat intelligence feeds and predictive analytics powered by machine learning.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Users className="w-6 h-6 text-[#24a0af]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Security Operations Center</h3>
                  <p className="text-gray-400">Full SOC capabilities with expert analysts monitoring your infrastructure around the clock.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <FileCheck className="w-6 h-6 text-[#24a0af]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Custom Security Policies</h3>
                  <p className="text-gray-400">Tailored security frameworks designed specifically for your organization's unique requirements.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-[#24a0af]/30 to-[#1a5b60]/20 rounded-full blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-[#24a0af]/10 to-transparent p-12 rounded-2xl border border-[#24a0af]/30 backdrop-blur-sm flex items-center justify-center">
                  <Shield className="w-48 h-48 text-[#24a0af]/40 stroke-1" />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              Get Valknet Pro
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-white/5 border border-[#24a0af]/30 rounded-full">
            <span className="text-sm text-[#24a0af]">Trusted Worldwide</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Valknet by the numbers</h2>
          <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto">
            Our platform secures critical infrastructure worldwide, and the numbers speak for themselves:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-[#1a5b60]/10 to-black/50 p-8 rounded-xl border border-[#24a0af]/20">
              <div className="text-5xl font-bold text-[#24a0af] mb-2">500M+</div>
              <div className="text-gray-400">Threats Blocked</div>
            </div>
            <div className="bg-gradient-to-br from-[#1a5b60]/10 to-black/50 p-8 rounded-xl border border-[#24a0af]/20">
              <div className="text-5xl font-bold text-[#24a0af] mb-2">15K+</div>
              <div className="text-gray-400">Enterprise Clients</div>
            </div>
            <div className="bg-gradient-to-br from-[#1a5b60]/10 to-black/50 p-8 rounded-xl border border-[#24a0af]/20">
              <div className="text-5xl font-bold text-[#24a0af] mb-2">99.99%</div>
              <div className="text-gray-400">Uptime Guarantee</div>
            </div>
            <div className="bg-gradient-to-br from-[#1a5b60]/10 to-black/50 p-8 rounded-xl border border-[#24a0af]/20">
              <div className="text-5xl font-bold text-[#24a0af] mb-2">2.5M</div>
              <div className="text-gray-400">Protected Devices</div>
            </div>
            <div className="bg-gradient-to-br from-[#1a5b60]/10 to-black/50 p-8 rounded-xl border border-[#24a0af]/20">
              <div className="text-5xl font-bold text-[#24a0af] mb-2">50+</div>
              <div className="text-gray-400">Countries Served</div>
            </div>
            <div className="bg-gradient-to-br from-[#1a5b60]/10 to-black/50 p-8 rounded-xl border border-[#24a0af]/20">
              <div className="text-5xl font-bold text-[#24a0af] mb-2">&lt;15min</div>
              <div className="text-gray-400">Average Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get Started with Valknet Security</h2>
          <p className="text-xl text-gray-400 mb-8">
            Deploy enterprise-grade security solutions and protect your organization from evolving cyber threats.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              <Server className="w-5 h-5 mr-2" />
              Request Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10">
              <Eye className="w-5 h-5 mr-2" />
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <details className="group bg-white/5 border border-white/10 rounded-lg p-6 hover:border-[#24a0af]/30 transition-all">
              <summary className="cursor-pointer text-xl font-semibold flex items-center justify-between">
                What makes Valknet Security different?
                <span className="text-[#24a0af] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-400">
                Valknet Security combines enterprise-grade protection with cutting-edge AI technology. Our platform offers comprehensive threat detection, real-time monitoring, and instant response capabilities, all managed through an intuitive interface designed for security teams.
              </p>
            </details>

            <details className="group bg-white/5 border border-white/10 rounded-lg p-6 hover:border-[#24a0af]/30 transition-all">
              <summary className="cursor-pointer text-xl font-semibold flex items-center justify-between">
                Is Valknet Security compliant with industry standards?
                <span className="text-[#24a0af] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-400">
                Yes! Valknet Security is certified for SOC 2 Type II, ISO 27001, GDPR, HIPAA, and other major compliance frameworks. We provide automated compliance reporting and audit trails to simplify your certification process.
              </p>
            </details>

            <details className="group bg-white/5 border border-white/10 rounded-lg p-6 hover:border-[#24a0af]/30 transition-all">
              <summary className="cursor-pointer text-xl font-semibold flex items-center justify-between">
                What kind of support do you offer?
                <span className="text-[#24a0af] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-400">
                All clients receive 24/7 support with access to our security operations center. Valknet Pro customers get priority support with guaranteed response times under 15 minutes and a dedicated security team.
              </p>
            </details>

            <details className="group bg-white/5 border border-white/10 rounded-lg p-6 hover:border-[#24a0af]/30 transition-all">
              <summary className="cursor-pointer text-xl font-semibold flex items-center justify-between">
                Can Valknet scale with my organization?
                <span className="text-[#24a0af] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-400">
                Absolutely. Our platform is designed to scale from small businesses to global enterprises. Whether you're protecting 10 devices or 10 million, Valknet Security adapts to your needs with flexible licensing and infrastructure.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-8">
            <p className="text-2xl font-bold text-[#24a0af] mb-4">The cybersecurity platform for the modern enterprise.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-[#24a0af]" />
                <span className="font-bold">Valknet Security</span>
              </div>
              <p className="text-sm text-gray-400">Enterprise cybersecurity solutions protecting organizations worldwide.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#24a0af] transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-[#24a0af] transition-colors">Solutions</a></li>
                <li><a href="#" className="hover:text-[#24a0af] transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-[#24a0af] transition-colors">Documentation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#24a0af] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#24a0af] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[#24a0af] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#24a0af] transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#24a0af] transition-colors">Security Center</a></li>
                <li><a href="#" className="hover:text-[#24a0af] transition-colors">Compliance</a></li>
                <li><a href="#" className="hover:text-[#24a0af] transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-[#24a0af] transition-colors">Status</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Valknet Security. All rights reserved. Protecting enterprises worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
