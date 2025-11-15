"use client";

import { Shield, ArrowLeft, Users, Target, Award, Globe, Zap, Lock, Eye, TrendingUp, Heart, Code } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "0x5872",
      role: "Founder & CEO",
      bio: "Former NSA cybersecurity analyst with 15+ years in threat intelligence and enterprise security solutions.",
      image: "/api/placeholder/150/150"
    },
  ];

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Valknet Security was established with a mission to democratize enterprise-grade cybersecurity for organizations of all sizes."
    },
    {
      year: "2020",
      title: "First Product Launch",
      description: "Released Watchdog, our flagship antivirus and threat protection platform, serving over 10,000 users in the first year."
    },
    {
      year: "2021",
      title: "Series A Funding",
      description: "Secured $15M in Series A funding to expand our research team and develop next-generation security tools."
    },
    {
      year: "2022",
      title: "Enterprise Expansion",
      description: "Launched Anchor and Axis platforms, establishing ourselves as a comprehensive enterprise security provider."
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Introduced Horus AI, revolutionizing threat intelligence with machine learning and predictive analytics."
    },
    {
      year: "2024",
      title: "Reverse Engineering",
      description: "Released Xvy, our advanced reverse engineering platform for security researchers and malware analysts."
    },
    {
      year: "2025",
      title: "Global Reach",
      description: "Now protecting over 500,000 endpoints worldwide with 24/7 threat monitoring and response capabilities."
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "Every decision we make is guided by our commitment to providing the highest level of security protection for our clients."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We believe in open communication, clear reporting, and honest relationships with our clients and partners."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Continuous research and development drive us to stay ahead of emerging threats and security challenges."
    },
    {
      icon: Heart,
      title: "Customer Success",
      description: "Our success is measured by our clients' security posture and their confidence in our protection capabilities."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white gradient-mesh noise-texture">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Valknet Security</h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Founded in 2019, Valknet Security has emerged as a leading provider of comprehensive cybersecurity solutions, 
              protecting organizations worldwide from evolving digital threats through innovative technology and expert analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 staggered-animation">
            <div className="bg-gradient-to-br from-[#1a5b60]/20 to-black/50 p-8 rounded-xl border border-[#24a0af]/20 product-card">
              <Target className="w-12 h-12 text-[#24a0af] mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                To democratize enterprise-grade cybersecurity by making advanced threat protection accessible, 
                affordable, and effective for organizations of all sizes. We believe that every business, 
                regardless of scale, deserves protection against sophisticated cyber threats.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Through continuous innovation, research, and development, we strive to stay ahead of emerging 
                threats while providing our clients with the tools and intelligence they need to maintain 
                a strong security posture in an increasingly connected world.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a5b60]/20 to-black/50 p-8 rounded-xl border border-[#24a0af]/20 product-card">
              <Globe className="w-12 h-12 text-[#24a0af] mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                To create a world where cybersecurity is proactive, intelligent, and seamlessly integrated 
                into every digital interaction. We envision a future where organizations can focus on growth 
                and innovation without the constant worry of cyber threats.
              </p>
              <p className="text-gray-300 leading-relaxed">
                By 2030, we aim to be the global leader in AI-driven cybersecurity solutions, protecting 
                millions of endpoints worldwide and setting the standard for next-generation threat detection 
                and response capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-xl text-gray-400">
              From a small team of security experts to a global cybersecurity leader
            </p>
          </div>

          <div className="prose prose-lg prose-invert max-w-none fade-in">
            <p className="text-gray-300 leading-relaxed mb-6">
              Valknet Security was born from a simple observation: while cyber threats were becoming increasingly 
              sophisticated, the tools to combat them remained fragmented, expensive, and difficult to implement. 
              Our founders, Alex Chen and Sarah Martinez, both veterans of the cybersecurity industry, recognized 
              the need for a unified platform that could provide enterprise-grade protection without the complexity 
              and cost barriers that prevented smaller organizations from securing themselves effectively.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              Starting in a small office in San Francisco, our initial team of five security researchers and 
              engineers began developing what would become Watchdog, our flagship antivirus and threat protection 
              platform. The goal was ambitious: create a security solution that could learn, adapt, and respond 
              to threats in real-time while remaining intuitive enough for any IT administrator to deploy and manage.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              The early days were challenging. We faced skepticism from an industry dominated by established players, 
              and the technical hurdles of building AI-driven security tools from scratch were immense. However, 
              our commitment to innovation and our deep understanding of the threat landscape drove us forward. 
              We spent countless hours analyzing malware samples, studying attack patterns, and developing algorithms 
              that could detect threats that traditional signature-based systems would miss.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              Our breakthrough came in late 2020 when Watchdog successfully detected and neutralized a zero-day 
              attack targeting several Fortune 500 companies. The incident, which made headlines in cybersecurity 
              publications, demonstrated the effectiveness of our behavioral analysis approach and established 
              Valknet Security as a serious player in the industry.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              Building on this success, we expanded our product portfolio to address different aspects of 
              cybersecurity. Anchor was developed to tackle the growing threat of botnets and coordinated attacks, 
              while Axis focused on protecting server infrastructure and cloud environments. Each product was 
              designed with the same core principles: intelligent automation, real-time response, and seamless 
              integration.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              The introduction of Horus AI in 2023 marked a significant milestone in our evolution. By incorporating 
              advanced machine learning and predictive analytics, we moved beyond reactive security to proactive 
              threat intelligence. Horus AI doesn't just detect threats; it predicts them, allowing organizations 
              to strengthen their defenses before attacks occur.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              Our most recent addition, Xvy, represents our commitment to supporting the broader cybersecurity 
              community. This reverse engineering platform provides security researchers and analysts with the 
              tools they need to dissect malware, understand attack vectors, and develop countermeasures. By 
              empowering the research community, we contribute to the collective defense against cyber threats.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Today, Valknet Security protects over 500,000 endpoints across six continents. Our team has grown 
              to over 200 employees, including some of the brightest minds in cybersecurity, artificial intelligence, 
              and software engineering. Despite our growth, we remain committed to our founding principles: making 
              advanced cybersecurity accessible, effective, and affordable for organizations worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-gray-400">
              Key milestones in our mission to secure the digital world
            </p>
          </div>

          <div className="space-y-8 staggered-animation">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-2xl font-bold text-[#24a0af]">{milestone.year}</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#24a0af] mt-2"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-400">
              Meet the experts driving innovation in cybersecurity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 staggered-animation">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-[#1a5b60]/20 to-black/50 p-6 rounded-xl border border-[#24a0af]/20 text-center product-card">
                <div className="w-24 h-24 bg-gradient-to-br from-[#24a0af]/30 to-[#1a5b60]/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-[#24a0af]" />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-[#24a0af] mb-3">{member.role}</p>
                <p className="text-sm text-gray-300">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-gray-400">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 staggered-animation">
            {values.map((value, index) => (
              <div key={index} className="text-center product-card">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#24a0af]/10 border border-[#24a0af]/30 mb-4">
                  <value.icon className="w-8 h-8 text-[#24a0af]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-6">Technology & Innovation</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our commitment to cutting-edge research and development drives continuous innovation in cybersecurity
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 staggered-animation">
            <div>
              <h3 className="text-2xl font-bold mb-6">Research & Development</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our R&D team consists of PhD researchers, security analysts, and AI specialists who work 
                tirelessly to understand emerging threats and develop innovative countermeasures. We invest 
                over 30% of our revenue back into research and development, ensuring that our solutions 
                remain at the forefront of cybersecurity technology.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                We maintain partnerships with leading universities and research institutions, contributing 
                to academic research while staying connected to the latest developments in computer science, 
                artificial intelligence, and cybersecurity.
              </p>

              <h3 className="text-2xl font-bold mb-6">AI & Machine Learning</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Artificial intelligence is at the core of our threat detection capabilities. Our proprietary 
                machine learning algorithms analyze billions of data points daily, learning from new threats 
                and adapting to evolving attack patterns. This allows us to detect zero-day exploits and 
                sophisticated attacks that traditional security tools might miss.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our AI models are trained on one of the largest threat intelligence datasets in the industry, 
                incorporating data from millions of endpoints, threat feeds, and security research publications.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Global Threat Intelligence</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our global network of sensors and honeypots provides real-time intelligence on emerging 
                threats from around the world. This distributed intelligence gathering allows us to identify 
                new attack campaigns within hours of their launch and deploy countermeasures across our 
                entire customer base.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                We actively participate in threat intelligence sharing initiatives and maintain relationships 
                with government agencies, security vendors, and research organizations to ensure comprehensive 
                coverage of the threat landscape.
              </p>

              <h3 className="text-2xl font-bold mb-6">Cloud-Native Architecture</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our security platform is built on a cloud-native architecture that provides scalability, 
                reliability, and performance. This allows us to process massive amounts of security data 
                in real-time while maintaining low latency for threat detection and response.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The platform automatically scales to handle traffic spikes and can be deployed across 
                multiple cloud providers and regions to ensure high availability and data sovereignty 
                compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships & Certifications */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-6">Partnerships & Certifications</h2>
            <p className="text-xl text-gray-400">
              Trusted by industry leaders and certified by security organizations worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 staggered-animation">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-[#24a0af]" />
                Certifications
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>• ISO 27001:2013 Information Security Management</li>
                <li>• SOC 2 Type II Compliance</li>
                <li>• GDPR Compliance Certification</li>
                <li>• Common Criteria EAL4+ Evaluation</li>
                <li>• FIPS 140-2 Level 3 Cryptographic Module</li>
                <li>• NIST Cybersecurity Framework Alignment</li>
                <li>• CSA STAR Gold Certification</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-[#24a0af]" />
                Strategic Partners
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Microsoft Security Partner</li>
                <li>• AWS Advanced Technology Partner</li>
                <li>• Google Cloud Security Partner</li>
                <li>• IBM Security Alliance Member</li>
                <li>• Cisco Security Technology Alliance</li>
                <li>• VMware Technology Alliance Partner</li>
                <li>• MITRE ATT&CK Framework Contributor</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center fade-in">
          <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Organization?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of organizations worldwide who trust Valknet Security to protect their digital assets. 
            Contact us today to learn how we can help secure your business.
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
