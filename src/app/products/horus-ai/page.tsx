"use client";

import { Button } from "@/components/ui/button";
import { Bot, ArrowLeft, Brain, Zap, TrendingUp, Activity, Shield, Eye } from "lucide-react";
import Link from "next/link";

export default function HorusAIPage() {
  // AI Performance metrics
  const aiMetrics = [
    { label: "Threat Detection Accuracy", value: 99.8, color: "text-green-400", bgColor: "bg-green-400" },
    { label: "False Positive Rate", value: 0.02, color: "text-blue-400", bgColor: "bg-blue-400" },
    { label: "Response Time", value: 0.3, color: "text-purple-400", bgColor: "bg-purple-400" },
    { label: "Learning Efficiency", value: 94.5, color: "text-[#24a0af]", bgColor: "bg-[#24a0af]" }
  ];

  // Threat prediction data
  const predictionData = [
    { time: "Mon", predicted: 45, actual: 42 },
    { time: "Tue", predicted: 38, actual: 41 },
    { time: "Wed", predicted: 52, actual: 49 },
    { time: "Thu", predicted: 67, actual: 65 },
    { time: "Fri", predicted: 71, actual: 73 },
    { time: "Sat", predicted: 34, actual: 31 },
    { time: "Sun", predicted: 28, actual: 30 }
  ];

  const maxValue = Math.max(...predictionData.flatMap(d => [d.predicted, d.actual]));

  return (
    <div className="min-h-screen bg-black text-white gradient-mesh noise-texture">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-[#24a0af]" />
            <span className="text-xl font-bold">Valknet Security</span>
          </Link>
          <Link href="/products">
            <Button variant="ghost" size="sm" className="hover:bg-white/10 fast-button-hover">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
          </Link>
        </div>
      </nav>

      {/* Product Page Content */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
              <div className="flex-shrink-0 p-3 bg-gradient-to-br from-[#24a0af]/20 to-[#1a5b60]/10 rounded-xl border border-[#24a0af]/30">
                <Bot className="w-8 h-8 text-[#24a0af]" />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">Horus AI</h1>
                <p className="text-lg sm:text-xl text-[#24a0af]">
                  Advanced Threat Intelligence
                </p>
              </div>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Advanced artificial intelligence system that learns, predicts, and responds to cyber threats in real-time. 
              Horus AI combines machine learning, behavioral analysis, and predictive modeling to stay ahead of evolving threats.
            </p>
          </div>

          {/* AI Performance Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {aiMetrics.map((metric, index) => (
              <div key={index} className="bg-gradient-to-br from-[#24a0af]/20 to-[#1a5b60]/10 p-6 rounded-xl border border-[#24a0af]/30">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className={`w-6 h-6 ${metric.color}`} />
                  <span className="text-sm text-gray-400">{metric.label}</span>
                </div>
                <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                  {metric.label.includes("Rate") || metric.label.includes("Time") 
                    ? `${metric.value}${metric.label.includes("Time") ? "s" : "%"}`
                    : `${metric.value}%`
                  }
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${metric.bgColor} transition-all duration-1000`}
                    style={{ width: `${metric.label.includes("Rate") ? (1 - metric.value/100) * 100 : metric.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* AI Prediction vs Reality Graph */}
          <div className="bg-gradient-to-br from-[#1a5b60]/20 to-black/50 p-8 rounded-xl border border-[#24a0af]/20 mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-[#24a0af]" />
                AI Threat Prediction Accuracy
              </h2>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#24a0af]" />
                  <span className="text-gray-400">AI Predicted</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="text-gray-400">Actual Threats</span>
                </div>
              </div>
            </div>

            <div className="flex items-end justify-between gap-4 h-64 mb-4">
              {predictionData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col justify-end items-center gap-2">
                  <div className="text-xs text-gray-500 mb-2">{Math.max(data.predicted, data.actual)}</div>
                  <div className="flex gap-1 w-full justify-center items-end">
                    <div
                      className="w-4 bg-gradient-to-t from-[#24a0af] to-[#24a0af]/70 rounded-t transition-all duration-500"
                      style={{ height: `${(data.predicted / maxValue) * 100}%` }}
                    />
                    <div
                      className="w-4 bg-gradient-to-t from-green-500 to-green-400 rounded-t transition-all duration-500"
                      style={{ height: `${(data.actual / maxValue) * 100}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-2">{data.time}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-black/40 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Prediction Accuracy</div>
                <div className="font-semibold text-[#24a0af]">96.7%</div>
              </div>
              <div className="bg-black/40 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Learning Models Active</div>
                <div className="font-semibold text-green-400">247</div>
              </div>
              <div className="bg-black/40 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Data Points Analyzed</div>
                <div className="font-semibold text-purple-400">2.4M/day</div>
              </div>
            </div>
          </div>

          {/* AI Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#24a0af]/10 to-black/50 p-8 rounded-xl border border-[#24a0af]/20">
              <h3 className="text-2xl font-bold mb-4 text-[#24a0af] flex items-center gap-2">
                <Brain className="w-6 h-6" />
                Machine Learning Engine
              </h3>
              <p className="text-gray-300 mb-4">
                Advanced neural networks that continuously learn from global threat patterns, adapting to new attack 
                vectors and improving detection accuracy over time.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Deep Learning Models</span>
                  <span className="text-[#24a0af]">Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Behavioral Analysis</span>
                  <span className="text-green-400">Real-time</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Pattern Recognition</span>
                  <span className="text-purple-400">99.8%</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#24a0af]/10 to-black/50 p-8 rounded-xl border border-[#24a0af]/20">
              <h3 className="text-2xl font-bold mb-4 text-[#24a0af] flex items-center gap-2">
                <Zap className="w-6 h-6" />
                Automated Response
              </h3>
              <p className="text-gray-300 mb-4">
                Intelligent automation that responds to threats faster than humanly possible, with smart decision-making 
                that minimizes false positives and business disruption.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Response Time</span>
                  <span className="text-[#24a0af]">&lt;300ms</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Auto-Quarantine</span>
                  <span className="text-green-400">Enabled</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Smart Blocking</span>
                  <span className="text-purple-400">Adaptive</span>
                </div>
              </div>
            </div>
          </div>

          {/* Real-time AI Activity */}
          <div className="bg-gradient-to-br from-[#1a5b60]/20 to-black/50 p-8 rounded-xl border border-[#24a0af]/20 mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Activity className="w-6 h-6 text-[#24a0af]" />
              Live AI Activity Monitor
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border-l-4 border-green-400">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm">Neural network detected anomalous network traffic pattern</span>
                </div>
                <span className="text-xs text-gray-500">2 seconds ago</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border-l-4 border-[#24a0af]">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#24a0af] rounded-full animate-pulse" />
                  <span className="text-sm">Behavioral analysis flagged suspicious process execution</span>
                </div>
                <span className="text-xs text-gray-500">5 seconds ago</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border-l-4 border-purple-400">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  <span className="text-sm">Predictive model updated with new threat intelligence</span>
                </div>
                <span className="text-xs text-gray-500">12 seconds ago</span>
              </div>
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="text-center bg-gradient-to-br from-[#24a0af]/10 to-black/50 p-12 rounded-xl border border-[#24a0af]/20">
            <h2 className="text-3xl font-bold mb-4">Deploy Horus AI</h2>
            <div className="text-4xl font-bold text-[#24a0af] mb-2">$399.99<span className="text-lg text-gray-400">/month</span></div>
            <p className="text-gray-400 mb-8">Enterprise AI security with unlimited threat analysis</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#24a0af] hover:bg-[#1a5b60] text-white fast-button-hover">
                <Bot className="w-5 h-5 mr-2" />
                Start AI Trial
              </Button>
              <Button size="lg" variant="outline" className="border-[#24a0af]/30 hover:bg-[#24a0af]/10 fast-button-hover">
                <Eye className="w-5 h-5 mr-2" />
                Watch AI Demo
              </Button>
            </div>
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
