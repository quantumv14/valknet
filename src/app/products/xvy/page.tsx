"use client";

import { ArrowLeft, Shield, Zap, Code, TrendingUp, Activity, Users, Search, FileText, Cpu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function XvyPage() {
  // Demo data for Xvy Reverse Engineering Platform
  const reverseEngStats = [
    { label: "Binaries Analyzed", value: "847K+", change: "+23%" },
    { label: "Functions Identified", value: "12.4M", change: "+18%" },
    { label: "Malware Samples", value: "156K", change: "+31%" },
    { label: "Analysis Speed", value: "2.4s", change: "-15%" }
  ];

  const analysisData = [
    { time: "00:00", successful: 92, failed: 8 },
    { time: "04:00", successful: 88, failed: 12 },
    { time: "08:00", successful: 95, failed: 5 },
    { time: "12:00", successful: 91, failed: 9 },
    { time: "16:00", successful: 97, failed: 3 },
    { time: "20:00", successful: 94, failed: 6 }
  ];

  return (
    <div className="min-h-screen bg-black text-white gradient-mesh noise-texture">
      <Navigation showBackButton={true} backHref="/products" backText="Back to Products" />

      {/* Hero Section */}
      <section className="px-6 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="flex-shrink-0 p-3 bg-gradient-to-br from-[#24a0af]/20 to-[#1a5b60]/10 rounded-xl border border-[#24a0af]/30">
                <Code className="w-8 h-8 text-[#24a0af]" />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Xvy</h1>
                <p className="text-lg sm:text-xl text-[#24a0af] mt-2">
                  Reverse Engineering Platform
                </p>
              </div>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Advanced reverse engineering platform with automated binary analysis, malware dissection, 
              and comprehensive code exploration tools for security researchers and analysts.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {reverseEngStats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-[#1a5b60]/10 to-black/50 p-6 rounded-xl border border-[#24a0af]/20">
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400 mb-2">{stat.label}</div>
                <div className={`text-xs font-medium ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.change} from last month
                </div>
              </div>
            ))}
          </div>

          {/* Binary Analysis Chart */}
          <div className="bg-gradient-to-br from-[#1a5b60]/10 to-black/50 p-8 rounded-xl border border-[#24a0af]/20 mb-16">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Activity className="w-6 h-6 text-[#24a0af]" />
              Binary Analysis Success Rate
            </h3>
            <div className="h-64 flex items-end justify-between gap-2">
              {analysisData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div className="w-full max-w-12 flex flex-col gap-1 mb-2">
                    <div 
                      className="bg-[#24a0af] rounded-t"
                      style={{ height: `${data.successful * 2}px` }}
                    ></div>
                    <div 
                      className="bg-red-500 rounded-b"
                      style={{ height: `${data.failed * 8}px` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-400">{data.time}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#24a0af] rounded"></div>
                <span className="text-sm text-gray-400">Successful Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded"></div>
                <span className="text-sm text-gray-400">Failed Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 bg-gradient-to-b from-transparent to-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Advanced Reverse Engineering
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Search className="w-6 h-6 text-[#24a0af]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Automated Binary Analysis</h3>
                  <p className="text-gray-300 mb-4">
                    Advanced static and dynamic analysis engines that automatically dissect binaries, 
                    identify functions, extract strings, and map program flow with machine learning assistance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <FileText className="w-6 h-6 text-[#24a0af]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Malware Dissection</h3>
                  <p className="text-gray-300 mb-4">
                    Comprehensive malware analysis toolkit with sandbox execution, behavior monitoring, 
                    and automated report generation for threat intelligence and incident response.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Cpu className="w-6 h-6 text-[#24a0af]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Cross-Platform Support</h3>
                  <p className="text-gray-300 mb-4">
                    Support for multiple architectures including x86, x64, ARM, and MIPS with 
                    format support for PE, ELF, Mach-O, and other executable formats.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Code className="w-6 h-6 text-[#24a0af]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Decompilation Engine</h3>
                  <p className="text-gray-300 mb-4">
                    Advanced decompilation capabilities that convert assembly code back to high-level 
                    pseudocode for easier analysis and vulnerability research.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-[#24a0af]/30 to-[#1a5b60]/20 rounded-full blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-[#24a0af]/10 to-transparent p-12 rounded-2xl border border-[#24a0af]/30 backdrop-blur-sm flex items-center justify-center">
                  <Code className="w-48 h-48 text-[#24a0af]/40 stroke-1" />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-[#24a0af] hover:bg-[#1a5b60] text-white fast-button-hover">
              Start Reverse Engineering
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
