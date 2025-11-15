"use client";

import { Button } from "@/components/ui/button";
import { Server, ArrowLeft, Zap, Users, Globe, Activity, Shield, TrendingUp, Clock } from "lucide-react";
import Link from "next/link";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AxisPage() {
  // Server performance metrics
  const serverMetrics = [
    { label: "Uptime", value: 99.98, color: "text-green-400", bgColor: "bg-green-400", unit: "%" },
    { label: "Average Latency", value: 12, color: "text-blue-400", bgColor: "bg-blue-400", unit: "ms" },
    { label: "Active Servers", value: 2847, color: "text-purple-400", bgColor: "bg-purple-400", unit: "" },
    { label: "DDoS Attacks Blocked", value: 156, color: "text-red-400", bgColor: "bg-red-400", unit: "/day" }
  ];

  // Server load data over 24 hours
  const serverLoadData = [
    { time: "00:00", load: 45, players: 1250 },
    { time: "04:00", load: 28, players: 890 },
    { time: "08:00", load: 62, players: 2100 },
    { time: "12:00", load: 78, players: 3200 },
    { time: "16:00", load: 85, players: 4100 },
    { time: "20:00", load: 92, players: 4850 },
    { time: "24:00", load: 67, players: 2900 }
  ];

  const maxLoad = Math.max(...serverLoadData.map(d => d.load));
  const maxPlayers = Math.max(...serverLoadData.map(d => d.players));

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
                <Server className="w-8 h-8 text-[#24a0af]" />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Axis</h1>
                <p className="text-lg sm:text-xl text-[#24a0af] mt-2">
                  Server Infrastructure Protection
                </p>
              </div>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              High-performance game server hosting with enterprise-grade DDoS protection, auto-scaling infrastructure, 
              and 24/7 monitoring. Built for gamers, trusted by esports professionals worldwide.
            </p>
          </div>

          {/* Performance Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {serverMetrics.map((metric, index) => (
              <div key={index} className="bg-gradient-to-br from-green-500/20 to-green-600/10 p-6 rounded-xl border border-green-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <Activity className={`w-6 h-6 ${metric.color}`} />
                  <span className="text-sm text-gray-400">{metric.label}</span>
                </div>
                <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                  {metric.label === "Active Servers" ? metric.value.toLocaleString() : metric.value}
                  <span className="text-lg">{metric.unit}</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${metric.bgColor} transition-all duration-1000`}
                    style={{ 
                      width: metric.label === "Average Latency" 
                        ? `${Math.max(10, 100 - metric.value)}%` 
                        : `${Math.min(100, metric.value)}%` 
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Server Load & Player Count Graph */}
          <div className="bg-gradient-to-br from-[#1a5b60]/20 to-black/50 p-8 rounded-xl border border-[#24a0af]/20 mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-green-400" />
                24-Hour Server Performance
              </h2>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="text-gray-400">Server Load</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-400" />
                  <span className="text-gray-400">Active Players</span>
                </div>
              </div>
            </div>

            <div className="flex items-end justify-between gap-4 h-64 mb-4">
              {serverLoadData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col justify-end items-center gap-2">
                  <div className="text-xs text-gray-500 mb-2">{Math.max(data.load, Math.round(data.players/50))}</div>
                  <div className="flex gap-1 w-full justify-center items-end">
                    <div
                      className="w-4 bg-gradient-to-t from-green-500 to-green-400 rounded-t transition-all duration-500"
                      style={{ height: `${(data.load / maxLoad) * 100}%` }}
                    />
                    <div
                      className="w-4 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t transition-all duration-500"
                      style={{ height: `${(data.players / maxPlayers) * 100}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-2">{data.time}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-black/40 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Peak Players Today</div>
                <div className="font-semibold text-green-400">4,850</div>
              </div>
              <div className="bg-black/40 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Average Response Time</div>
                <div className="font-semibold text-blue-400">12ms</div>
              </div>
              <div className="bg-black/40 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Server Availability</div>
                <div className="font-semibold text-purple-400">99.98%</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-500/10 to-black/50 p-8 rounded-xl border border-green-500/20">
              <h3 className="text-2xl font-bold mb-4 text-green-400 flex items-center gap-2">
                <Shield className="w-6 h-6" />
                DDoS Protection
              </h3>
              <p className="text-gray-300 mb-4">
                Enterprise-grade DDoS protection with real-time traffic analysis and automatic mitigation. 
                Your servers stay online even during the largest attacks.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Protection Capacity</span>
                  <span className="text-green-400">100+ Gbps</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Mitigation Time</span>
                  <span className="text-blue-400">&lt;3 seconds</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Attack Detection</span>
                  <span className="text-purple-400">AI-Powered</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-black/50 p-8 rounded-xl border border-green-500/20">
              <h3 className="text-2xl font-bold mb-4 text-green-400 flex items-center gap-2">
                <Zap className="w-6 h-6" />
                Auto-Scaling
              </h3>
              <p className="text-gray-300 mb-4">
                Intelligent auto-scaling that adapts to player demand in real-time. Pay only for what you use 
                while ensuring optimal performance during peak hours.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Scale Response</span>
                  <span className="text-green-400">Instant</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Resource Efficiency</span>
                  <span className="text-blue-400">95%+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Cost Optimization</span>
                  <span className="text-purple-400">Dynamic</span>
                </div>
              </div>
            </div>
          </div>

          {/* Live Server Status */}
          <div className="bg-gradient-to-br from-[#1a5b60]/20 to-black/50 p-8 rounded-xl border border-[#24a0af]/20 mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Globe className="w-6 h-6 text-green-400" />
              Global Server Status
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-black/40 rounded-lg p-4 border-l-4 border-green-400">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">US East</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>
                <div className="text-xs text-gray-400 mb-1">New York, NY</div>
                <div className="text-lg font-bold text-green-400">8ms</div>
              </div>

              <div className="bg-black/40 rounded-lg p-4 border-l-4 border-green-400">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">EU West</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>
                <div className="text-xs text-gray-400 mb-1">Frankfurt, DE</div>
                <div className="text-lg font-bold text-green-400">12ms</div>
              </div>

              <div className="bg-black/40 rounded-lg p-4 border-l-4 border-green-400">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Asia Pacific</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>
                <div className="text-xs text-gray-400 mb-1">Singapore, SG</div>
                <div className="text-lg font-bold text-green-400">15ms</div>
              </div>

              <div className="bg-black/40 rounded-lg p-4 border-l-4 border-green-400">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">US West</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>
                <div className="text-xs text-gray-400 mb-1">Los Angeles, CA</div>
                <div className="text-lg font-bold text-green-400">11ms</div>
              </div>
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="text-center bg-gradient-to-br from-green-500/10 to-black/50 p-12 rounded-xl border border-green-500/20">
            <h2 className="text-3xl font-bold mb-4">Launch Your Game Server</h2>
            <div className="text-4xl font-bold text-green-400 mb-2">$49.99<span className="text-lg text-gray-400">/month</span></div>
            <p className="text-gray-400 mb-8">Starting plan with DDoS protection and auto-scaling</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white fast-button-hover">
                <Server className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-green-500/30 hover:bg-green-500/10 fast-button-hover">
                <Clock className="w-5 h-5 mr-2" />
                View Pricing Plans
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
