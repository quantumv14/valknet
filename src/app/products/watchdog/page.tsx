"use client";

import { Button } from "@/components/ui/button";
import { Shield, ArrowLeft, CheckCircle, Users, Globe, Zap, Activity, TrendingUp } from "lucide-react";
import Link from "next/link";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function WatchdogPage() {
  // Demo stats data
  const threatStats = [
    { time: "00:00", threats: 45 },
    { time: "04:00", threats: 32 },
    { time: "08:00", threats: 78 },
    { time: "12:00", threats: 156 },
    { time: "16:00", threats: 234 },
    { time: "20:00", threats: 189 },
    { time: "24:00", threats: 67 }
  ];

  const maxThreats = Math.max(...threatStats.map(s => s.threats));

  return (
    <div className="min-h-screen bg-black text-white gradient-mesh noise-texture">
      <Navigation showBackButton={true} backHref="/products" backText="Back to Products" />

      {/* Product Page Content */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
              <div className="flex-shrink-0 inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-500/10 border border-red-500/30">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-red-400" />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Watchdog</h1>
                <p className="text-lg sm:text-xl text-red-400 mt-2">All-in-One Antivirus & Threat Protection</p>
              </div>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Advanced threat detection and real-time protection powered by AI. Watchdog provides comprehensive security 
              against malware, ransomware, and emerging cyber threats with behavioral analysis and auto-quarantine capabilities.
            </p>
          </div>

          {/* Stats Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 p-6 rounded-xl border border-green-500/30">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-sm text-gray-400">Threats Blocked Today</span>
              </div>
              <div className="text-3xl font-bold text-green-400">1,247</div>
              <div className="text-xs text-green-500 mt-1">↑ 23% from yesterday</div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 p-6 rounded-xl border border-blue-500/30">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-6 h-6 text-blue-400" />
                <span className="text-sm text-gray-400">Protected Devices</span>
              </div>
              <div className="text-3xl font-bold text-blue-400">45,892</div>
              <div className="text-xs text-blue-500 mt-1">Active monitoring</div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 p-6 rounded-xl border border-purple-500/30">
              <div className="flex items-center gap-3 mb-2">
                <Globe className="w-6 h-6 text-purple-400" />
                <span className="text-sm text-gray-400">Global Coverage</span>
              </div>
              <div className="text-3xl font-bold text-purple-400">150+</div>
              <div className="text-xs text-purple-500 mt-1">Countries protected</div>
            </div>

            <div className="bg-gradient-to-br from-[#24a0af]/20 to-[#1a5b60]/10 p-6 rounded-xl border border-[#24a0af]/30">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-6 h-6 text-[#24a0af]" />
                <span className="text-sm text-gray-400">Response Time</span>
              </div>
              <div className="text-3xl font-bold text-[#24a0af]">&lt;0.5s</div>
              <div className="text-xs text-[#24a0af] mt-1">Real-time detection</div>
            </div>
          </div>

          {/* Threat Detection Graph */}
          <div className="bg-gradient-to-br from-[#1a5b60]/20 to-black/50 p-8 rounded-xl border border-[#24a0af]/20 mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Activity className="w-6 h-6 text-red-400" />
                24-Hour Threat Detection
              </h2>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span>234 threats blocked in last hour</span>
              </div>
            </div>

            <div className="flex items-end justify-between gap-2 h-64 mb-4">
              {threatStats.map((stat, index) => (
                <div key={index} className="flex-1 flex flex-col justify-end items-center">
                  <div className="text-xs text-gray-500 mb-2">{stat.threats}</div>
                  <div
                    className="w-full bg-gradient-to-t from-red-500 to-red-400 rounded-t transition-all duration-500 hover:from-red-400 hover:to-red-300"
                    style={{ height: `${(stat.threats / maxThreats) * 100}%` }}
                  />
                  <div className="text-xs text-gray-500 mt-2">{stat.time}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-black/40 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Most Detected Threat</div>
                <div className="font-semibold text-red-400">Trojan.Win32.Agent</div>
              </div>
              <div className="bg-black/40 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Detection Rate</div>
                <div className="font-semibold text-green-400">99.97%</div>
              </div>
              <div className="bg-black/40 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">False Positives</div>
                <div className="font-semibold text-blue-400">&lt;0.01%</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-red-500/10 to-black/50 p-8 rounded-xl border border-red-500/20">
              <h3 className="text-2xl font-bold mb-4 text-red-400">Real-Time Scanning</h3>
              <p className="text-gray-300 mb-4">
                Continuous monitoring of file system activities with machine learning-powered threat detection that identifies both known and zero-day malware in real-time.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Behavioral analysis engine</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Heuristic detection algorithms</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Cloud-based threat intelligence</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-500/10 to-black/50 p-8 rounded-xl border border-red-500/20">
              <h3 className="text-2xl font-bold mb-4 text-red-400">Auto-Quarantine</h3>
              <p className="text-gray-300 mb-4">
                Automatic isolation and neutralization of detected threats with smart quarantine management that prevents system disruption while maintaining security.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Instant threat isolation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Safe file restoration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Quarantine analytics</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="text-center bg-gradient-to-br from-red-500/10 to-black/50 p-12 rounded-xl border border-red-500/20">
            <h2 className="text-3xl font-bold mb-4">Get Watchdog Protection</h2>
            <div className="text-4xl font-bold text-red-400 mb-2">$29.99<span className="text-lg text-gray-400">/month</span></div>
            <p className="text-gray-400 mb-8">Comprehensive protection for up to 5 devices</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white fast-button-hover">
                <Shield className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-red-500/30 hover:bg-red-500/10 fast-button-hover">
                <Activity className="w-5 h-5 mr-2" />
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
