"use client";

import { Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";

// Types
interface NewsArticle {
  id: number;
  title: string;
  content: string;
  reporter: string;
  date: string;
  time: string;
}

// Sample news data - in a real app this would come from a database
const initialNews: NewsArticle[] = [
  {
    id: 1,
    title: "Major Botnet Takedown Operation Completed",
    content: "Valknet Security successfully coordinated with international law enforcement to dismantle the Zeus banking trojan network, affecting over 50,000 infected devices worldwide. The operation took 72 hours and resulted in the arrest of key cybercriminals.",
    reporter: "0x5872",
    date: "2025-11-08",
    time: "14:30"
  },
  {
    id: 2,
    title: "New AI-Powered Threat Detection Released",
    content: "Horus AI now features advanced behavioral analysis capabilities that can detect zero-day malware with 99.8% accuracy. The update includes improved machine learning models trained on the latest threat intelligence data.",
    reporter: "0x5872",
    date: "2025-11-05",
    time: "09:15"
  },
  {
    id: 3,
    title: "Watchdog Antivirus Blocks Record Number of Threats",
    content: "In October 2025, Watchdog successfully blocked over 2.4 million malware attempts, representing a 34% increase from the previous month. The surge is attributed to increased ransomware campaigns targeting enterprise networks.",
    reporter: "0x5872",
    date: "2025-11-01",
    time: "16:45"
  }
];

export default function NewsPage() {

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

      {/* News Page Content */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Security News</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Latest updates, threat intelligence, and security insights from Valknet Security
            </p>
          </div>


          {/* News Articles */}
          <div className="space-y-8">
            {initialNews.map((article: NewsArticle) => (
              <article key={article.id} className="bg-gradient-to-br from-[#1a5b60]/10 to-black/50 p-8 rounded-xl border border-[#24a0af]/20">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-white mb-2">{article.title}</h2>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span>By {article.reporter}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.time}</span>
                </div>
                
                <p className="text-gray-300 leading-relaxed">{article.content}</p>
              </article>
            ))}
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
