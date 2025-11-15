"use client";

import { Button } from "@/components/ui/button";
import { Anchor, ArrowLeft, Shield, Target, Globe, Activity, AlertTriangle, TrendingDown, Users } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AnchorPage() {
  // Botnet takedown metrics
  const takedownMetrics = [
    { label: "Botnets Neutralized", value: 847, color: "text-red-400", bgColor: "bg-red-400", unit: "" },
    { label: "Infected Devices Cleaned", value: 2.4, color: "text-blue-400", bgColor: "bg-blue-400", unit: "M" },
    { label: "Success Rate", value: 98.7, color: "text-green-400", bgColor: "bg-green-400", unit: "%" },
    { label: "Average Takedown Time", value: 4.2, color: "text-purple-400", bgColor: "bg-purple-400", unit: "hrs" }
  ];

  // Monthly botnet activity data
  const botnetActivity = [
    { month: "Jan", detected: 156, neutralized: 152 },
    { month: "Feb", detected: 134, neutralized: 131 },
    { month: "Mar", detected: 189, neutralized: 186 },
    { month: "Apr", detected: 167, neutralized: 164 },
    { month: "May", detected: 203, neutralized: 201 },
    { month: "Jun", detected: 145, neutralized: 143 }
  ];

  const maxActivity = Math.max(...botnetActivity.flatMap(d => [d.detected, d.neutralized]));

  return (
    <div className="min-h-screen bg-black text-white gradient-mesh noise-texture">
      <Navigation showBackButton={true} backHref="/products" backText="Back to Products" />

      {/* Product Page Content */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
              <div className="flex-shrink-0 p-3 bg-gradient-to-br from-[#24a0af]/20 to-[#1a5b60]/10 rounded-xl border border-[#24a0af]/30">
                <Anchor className="w-8 h-8 text-[#24a0af]" />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">Anchor</h1>
                <p className="text-lg sm:text-xl text-[#24a0af]">
                  Enterprise Botnet Takedown
                </p>
              </div>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Advanced enterprise solution for identifying, tracking, and dismantling sophisticated botnet operations. 
              Anchor combines global threat intelligence, legal coordination, and technical expertise to neutralize cybercriminal networks.
            </p>
          </div>

          {/* Takedown Metrics Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {takedownMetrics.map((metric, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 p-6 rounded-xl border border-blue-500/30 product-card">
                <div className="flex items-center gap-3 mb-4">
                  <Target className={`w-6 h-6 ${metric.color}`} />
                  <span className="text-sm text-gray-400">{metric.label}</span>
                </div>
                <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                  {metric.label === "Infected Devices Cleaned" ? metric.value : Math.floor(metric.value)}
                  <span className="text-lg">{metric.unit}</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${metric.bgColor} transition-all duration-1000`}
                    style={{ width: `${Math.min(100, metric.value)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Botnet Activity Tracking Graph */}
          <div className="bg-gradient-to-br from-[#1a5b60]/20 to-black/50 p-8 rounded-xl border border-[#24a0af]/20 mb-12 product-card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <TrendingDown className="w-6 h-6 text-red-400" />
                Botnet Detection vs Neutralization
              </h2>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="text-gray-400">Detected</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="text-gray-400">Neutralized</span>
                </div>
              </div>
            </div>

            <div className="flex items-end justify-between gap-4 h-64 mb-4">
              {botnetActivity.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col justify-end items-center gap-2">
                  <div className="text-xs text-gray-500 mb-2">{Math.max(data.detected, data.neutralized)}</div>
                  <div className="flex gap-1 w-full justify-center items-end">
                    <div
                      className="w-4 bg-gradient-to-t from-red-500 to-red-400 rounded-t transition-all duration-500"
                      style={{ height: `${(data.detected / maxActivity) * 100}%` }}
                    />
                    <div
                      className="w-4 bg-gradient-to-t from-green-500 to-green-400 rounded-t transition-all duration-500"
                      style={{ height: `${(data.neutralized / maxActivity) * 100}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-2">{data.month}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-black/40 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">This Month Detected</div>
                <div className="font-semibold text-red-400">145</div>
              </div>
              <div className="bg-black/40 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Successfully Neutralized</div>
                <div className="font-semibold text-green-400">143</div>
              </div>
              <div className="bg-black/40 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Neutralization Rate</div>
                <div className="font-semibold text-blue-400">98.6%</div>
              </div>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-500/10 to-black/50 p-8 rounded-xl border border-blue-500/20 product-card">
              <h3 className="text-2xl font-bold mb-4 text-blue-400 flex items-center gap-2">
                <Globe className="w-6 h-6" />
                Global Threat Intelligence
              </h3>
              <p className="text-gray-300 mb-4">
                Comprehensive botnet tracking across international networks with real-time intelligence gathering, 
                C&C server identification, and malware family analysis.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Global Sensors</span>
                  <span className="text-blue-400">50,000+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Countries Monitored</span>
                  <span className="text-green-400">195</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Data Processing</span>
                  <span className="text-purple-400">Real-time</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-black/50 p-8 rounded-xl border border-blue-500/20 product-card">
              <h3 className="text-2xl font-bold mb-4 text-blue-400 flex items-center gap-2">
                <Users className="w-6 h-6" />
                Legal Coordination
              </h3>
              <p className="text-gray-300 mb-4">
                Seamless coordination with law enforcement agencies, ISPs, and international cybercrime units 
                to ensure rapid and legally compliant botnet takedowns.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Partner Agencies</span>
                  <span className="text-blue-400">120+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Legal Frameworks</span>
                  <span className="text-green-400">Multi-jurisdictional</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Compliance Rate</span>
                  <span className="text-purple-400">100%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Active Operations Monitor */}
          <div className="bg-gradient-to-br from-[#1a5b60]/20 to-black/50 p-8 rounded-xl border border-[#24a0af]/20 mb-12 product-card">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Activity className="w-6 h-6 text-blue-400" />
              Active Takedown Operations
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border-l-4 border-red-400">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  <div>
                    <div className="font-medium">Operation Kraken - Banking Trojan Network</div>
                    <div className="text-sm text-gray-400">15,000 infected devices • 47 C&C servers identified</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-red-400 font-medium">Phase 3: Coordination</div>
                  <div className="text-xs text-gray-500">ETA: 72 hours</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border-l-4 border-yellow-400">
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-yellow-400" />
                  <div>
                    <div className="font-medium">Operation Hydra - Ransomware Infrastructure</div>
                    <div className="text-sm text-gray-400">8,200 infected devices • 23 C&C servers identified</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-yellow-400 font-medium">Phase 2: Analysis</div>
                  <div className="text-xs text-gray-500">ETA: 5 days</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border-l-4 border-green-400">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-green-400" />
                  <div>
                    <div className="font-medium">Operation Phoenix - IoT Botnet Cleanup</div>
                    <div className="text-sm text-gray-400">Successfully neutralized • 45,000 devices cleaned</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-green-400 font-medium">Completed</div>
                  <div className="text-xs text-gray-500">2 days ago</div>
                </div>
              </div>
            </div>
          </div>

          {/* Threat Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-red-500/10 to-black/50 p-6 rounded-xl border border-red-500/20 product-card">
              <h3 className="text-xl font-bold mb-3 text-red-400">Banking Trojans</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Zeus variants</span>
                  <span className="text-red-400">34%</span>
                </div>
                <div className="flex justify-between">
                  <span>Emotet family</span>
                  <span className="text-red-400">28%</span>
                </div>
                <div className="flex justify-between">
                  <span>Trickbot network</span>
                  <span className="text-red-400">19%</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-black/50 p-6 rounded-xl border border-purple-500/20 product-card">
              <h3 className="text-xl font-bold mb-3 text-purple-400">Ransomware</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Conti operations</span>
                  <span className="text-purple-400">42%</span>
                </div>
                <div className="flex justify-between">
                  <span>REvil network</span>
                  <span className="text-purple-400">31%</span>
                </div>
                <div className="flex justify-between">
                  <span>LockBit infrastructure</span>
                  <span className="text-purple-400">15%</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-black/50 p-6 rounded-xl border border-green-500/20 product-card">
              <h3 className="text-xl font-bold mb-3 text-green-400">IoT Botnets</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Mirai variants</span>
                  <span className="text-green-400">38%</span>
                </div>
                <div className="flex justify-between">
                  <span>Gafgyt family</span>
                  <span className="text-green-400">29%</span>
                </div>
                <div className="flex justify-between">
                  <span>Bashlite network</span>
                  <span className="text-green-400">22%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="text-center bg-gradient-to-br from-blue-500/10 to-black/50 p-12 rounded-xl border border-blue-500/20 product-card">
            <h2 className="text-3xl font-bold mb-4">Enterprise Botnet Protection</h2>
            <div className="text-4xl font-bold text-blue-400 mb-2">Enterprise Pricing</div>
            <p className="text-gray-400 mb-8">Custom solutions tailored to your organization's threat landscape</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white fast-button-hover">
                  <Anchor className="w-5 h-5 mr-2" />
                  Request Consultation
                </Button>
              </Link>
              <Link href="/docs">
                <Button size="lg" variant="outline" className="border-blue-500/30 hover:bg-blue-500/10 fast-button-hover">
                  <Target className="w-5 h-5 mr-2" />
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
