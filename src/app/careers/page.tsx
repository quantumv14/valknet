"use client";

import { Shield, ArrowLeft, MapPin, Clock, Users, Briefcase, Heart, TrendingUp, Globe, Code } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior Security Engineer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      description: "Lead the development of next-generation threat detection systems and security infrastructure.",
      requirements: ["5+ years security engineering", "Python/Go expertise", "Cloud security experience"]
    },
    {
      title: "Threat Intelligence Analyst",
      department: "Security Operations",
      location: "New York, NY / Remote",
      type: "Full-time", 
      description: "Analyze global threat patterns and develop intelligence reports for enterprise clients.",
      requirements: ["3+ years threat analysis", "MITRE ATT&CK knowledge", "Malware analysis skills"]
    },
    {
      title: "DevSecOps Engineer",
      department: "Engineering",
      location: "Austin, TX / Remote",
      type: "Full-time",
      description: "Build and maintain secure CI/CD pipelines and infrastructure automation.",
      requirements: ["DevOps experience", "Kubernetes/Docker", "Security tooling integration"]
    },
    {
      title: "Product Manager - Security",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Drive product strategy for our enterprise security platform and customer-facing features.",
      requirements: ["Product management experience", "Security domain knowledge", "B2B SaaS background"]
    },
    {
      title: "Sales Engineer",
      department: "Sales",
      location: "Multiple Locations",
      type: "Full-time",
      description: "Support enterprise sales with technical expertise and customer demonstrations.",
      requirements: ["Technical sales experience", "Security knowledge", "Customer-facing skills"]
    },
    {
      title: "Security Researcher",
      department: "Research",
      location: "Remote",
      type: "Full-time",
      description: "Research emerging threats and develop innovative security solutions and methodologies.",
      requirements: ["Security research background", "Published research preferred", "Reverse engineering skills"]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, and vision insurance plus wellness programs"
    },
    {
      icon: TrendingUp,
      title: "Growth & Learning",
      description: "$5,000 annual learning budget and conference attendance support"
    },
    {
      icon: Globe,
      title: "Remote Flexibility",
      description: "Work from anywhere with flexible hours and home office stipend"
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Collaborative environment with regular team events and hackathons"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Mission</h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Help us build the future of cybersecurity. Join a team of world-class engineers, researchers, 
              and security experts protecting organizations worldwide from evolving digital threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#24a0af] mb-2">200+</div>
              <div className="text-gray-400">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#24a0af] mb-2">15+</div>
              <div className="text-gray-400">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#24a0af] mb-2">$5K</div>
              <div className="text-gray-400">Learning Budget</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Work at Valknet</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We believe in taking care of our team so they can do their best work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#24a0af]/10 border border-[#24a0af]/30 mb-4">
                  <benefit.icon className="w-8 h-8 text-[#24a0af]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Open Positions</h2>
            <p className="text-xl text-gray-400">
              Find your next opportunity to make an impact in cybersecurity
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-gradient-to-br from-[#1a5b60]/20 to-black/50 p-8 rounded-xl border border-[#24a0af]/20">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold">{position.title}</h3>
                      <span className="px-3 py-1 bg-[#24a0af]/20 text-[#24a0af] rounded-full text-sm">
                        {position.department}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-6 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">{position.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {position.requirements.map((req, reqIndex) => (
                        <span key={reqIndex} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <Link 
                      href="/careers/apply"
                      className="inline-flex items-center gap-2 bg-[#24a0af] hover:bg-[#1a5b60] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      <Briefcase className="w-4 h-4" />
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Culture</h2>
            <p className="text-xl text-gray-400 mb-8">
              We're building more than just software - we're building a community of security professionals
            </p>
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Code className="w-6 h-6 text-[#24a0af]" />
                  Innovation First
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We encourage experimentation and creative problem-solving. Our monthly hackathons and 
                  20% time policy give everyone the freedom to explore new ideas and technologies.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6 text-[#24a0af]" />
                  Collaborative Environment
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We believe the best solutions come from diverse perspectives. Our flat organizational 
                  structure ensures everyone's voice is heard and valued.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-[#24a0af]" />
                  Continuous Learning
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  The cybersecurity landscape evolves rapidly, and so do we. We invest heavily in our 
                  team's growth through training, conferences, and certification programs.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Globe className="w-6 h-6 text-[#24a0af]" />
                  Global Impact
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Your work directly protects millions of users worldwide. Every feature you build 
                  and every threat you help detect makes the digital world safer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Don't see a position that fits? We're always looking for exceptional talent. 
            Send us your resume and let's talk about how you can contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/careers/apply" 
              className="bg-[#24a0af] hover:bg-[#1a5b60] text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Start Application
            </Link>
            <Link 
              href="/contact" 
              className="border border-white/20 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Contact HR
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-6 text-center text-sm text-gray-400">
          <p>&copy; 2025 Valknet Security. All rights reserved. Equal opportunity employer.</p>
        </div>
      </footer>
    </div>
  );
}
