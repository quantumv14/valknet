"use client";

import { Button } from "@/components/ui/button";
import { Shield, ArrowLeft, Eye, Server, Zap, Anchor, Cpu, Bot } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const products = [
  {
    id: "watchdog",
    name: "Watchdog",
    description: "Our all-in-one antivirus and threat protection program",
    icon: Shield,
    color: "from-red-500/20 to-red-600/10",
    borderColor: "border-red-500/30",
    iconColor: "text-red-400",
    features: ["Real-time scanning", "Malware protection", "Behavioral analysis", "Auto-quarantine"],
    price: "$29.99/month"
  },
  {
    id: "anchor",
    name: "Anchor",
    description: "Enterprise-grade program for locating and taking down botnets",
    icon: Anchor,
    color: "from-blue-500/20 to-blue-600/10",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-400",
    features: ["Botnet detection", "Network analysis", "Takedown coordination", "Threat intelligence"],
    price: "Enterprise pricing"
  },
  {
    id: "xvy",
    name: "Xvy",
    description: "Advanced reverse engineering tool for security analysis",
    icon: Cpu,
    color: "from-purple-500/20 to-purple-600/10",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-400",
    features: ["Binary analysis", "Code decompilation", "Vulnerability research", "Malware analysis"],
    price: "$199.99/month"
  },
  {
    id: "axis",
    name: "Axis",
    description: "Secure game server hosting with DDoS protection",
    icon: Server,
    color: "from-green-500/20 to-green-600/10",
    borderColor: "border-green-500/30",
    iconColor: "text-green-400",
    features: ["DDoS protection", "Low latency", "Auto-scaling", "24/7 monitoring"],
    price: "$49.99/month"
  },
  {
    id: "horus-ai",
    name: "Horus AI",
    description: "AI-powered threat detection and response system",
    icon: Bot,
    color: "from-[#24a0af]/20 to-[#1a5b60]/10",
    borderColor: "border-[#24a0af]/30",
    iconColor: "text-[#24a0af]",
    features: ["Machine learning", "Predictive analysis", "Automated response", "Threat hunting"],
    price: "$399.99/month"
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-black text-white gradient-mesh noise-texture">
      <Navigation />

      {/* Products Page Content */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-4 py-2 bg-white/5 border border-[#24a0af]/30 rounded-full">
              <span className="text-sm text-[#24a0af] flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Security Solutions
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions designed to protect your digital infrastructure from evolving threats
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product) => {
              const IconComponent = product.icon;
              return (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <div className={`product-card bg-gradient-to-br ${product.color} p-8 rounded-xl border ${product.borderColor} cursor-pointer h-full`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-black/20 border ${product.borderColor}`}>
                        <IconComponent className={`w-8 h-8 ${product.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{product.name}</h3>
                        <p className={`text-sm ${product.iconColor}`}>{product.price}</p>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-white">Key Features:</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                            <div className={`w-1.5 h-1.5 rounded-full ${product.iconColor.replace('text-', 'bg-')}`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/10">
                      <Button 
                        className={`w-full fast-button-hover bg-white/10 hover:bg-white/20 border ${product.borderColor}`} 
                        variant="outline"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-br from-[#1a5b60]/20 to-black/50 p-12 rounded-xl border border-[#24a0af]/20 product-card">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Our security experts can design a tailored cybersecurity package that meets your specific requirements
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 fast-button-hover">
                <Shield className="w-5 h-5 mr-2" />
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
