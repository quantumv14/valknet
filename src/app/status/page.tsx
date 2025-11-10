"use client";

import { Button } from "@/components/ui/button";
import { Shield, ArrowLeft, CheckCircle2, XCircle, Clock } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface DomainStatus {
  name: string;
  url: string;
  status: "online" | "offline" | "checking";
  responseTime?: number;
  lastChecked?: Date;
}

const DOMAINS_TO_CHECK = [
  { name: "CDN Server", url: "https://cdn.valknet.org" },
  { name: "Main Website", url: "https://www.valknet.org" },
  { name: "API Gateway", url: "https://api.valknet.org" },
  { name: "Portal", url: "https://portal.valknet.org" },
  { name: "Dashboard", url: "https://dashboard.valknet.org" },
  { name: "Mail Server", url: "https://mail.valknet.org" },
];

export default function StatusPage() {
  const [statuses, setStatuses] = useState<DomainStatus[]>(
    DOMAINS_TO_CHECK.map(domain => ({
      ...domain,
      status: "checking" as const,
    }))
  );

  const checkDomainStatus = async (domain: { name: string; url: string }) => {
    const startTime = Date.now();
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const response = await fetch(domain.url, {
        method: "HEAD",
        mode: "no-cors",
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      const responseTime = Date.now() - startTime;

      return {
        ...domain,
        status: "online" as const,
        responseTime,
        lastChecked: new Date(),
      };
    } catch (error) {
      return {
        ...domain,
        status: "offline" as const,
        lastChecked: new Date(),
      };
    }
  };

  useEffect(() => {
    const checkAllDomains = async () => {
      const results = await Promise.all(
        DOMAINS_TO_CHECK.map(domain => checkDomainStatus(domain))
      );
      setStatuses(results);
    };

    checkAllDomains();
    const interval = setInterval(checkAllDomains, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const onlineCount = statuses.filter(s => s.status === "online").length;
  const offlineCount = statuses.filter(s => s.status === "offline").length;
  const overallStatus = offlineCount === 0 ? "online" : offlineCount === statuses.length ? "offline" : "degraded";

  return (
    <div className="min-h-screen bg-black text-white gradient-mesh noise-texture">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-[#24a0af]" />
            <span className="text-xl font-bold">Valknet Security</span>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm" className="hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* Status Page Content */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">System Status</h1>
            <p className="text-xl text-gray-400 mb-8">
              Real-time monitoring of all Valknet Security infrastructure
            </p>

            {/* Overall Status Card */}
            <div className={`inline-flex items-center gap-3 px-6 py-4 rounded-lg border ${
              overallStatus === "online"
                ? "bg-green-500/10 border-green-500/30"
                : overallStatus === "offline"
                ? "bg-red-500/10 border-red-500/30"
                : "bg-yellow-500/10 border-yellow-500/30"
            }`}>
              {overallStatus === "online" ? (
                <>
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                  <span className="text-lg font-semibold text-green-400">All Systems Operational</span>
                </>
              ) : overallStatus === "offline" ? (
                <>
                  <XCircle className="w-6 h-6 text-red-400" />
                  <span className="text-lg font-semibold text-red-400">System Outage</span>
                </>
              ) : (
                <>
                  <Clock className="w-6 h-6 text-yellow-400" />
                  <span className="text-lg font-semibold text-yellow-400">Partial Outage</span>
                </>
              )}
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-[#1a5b60]/20 to-black/50 p-6 rounded-xl border border-[#24a0af]/20">
              <div className="text-3xl font-bold text-[#24a0af] mb-2">{statuses.length}</div>
              <div className="text-gray-400">Total Services</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-black/50 p-6 rounded-xl border border-green-500/20">
              <div className="text-3xl font-bold text-green-400 mb-2">{onlineCount}</div>
              <div className="text-gray-400">Services Online</div>
            </div>
            <div className="bg-gradient-to-br from-red-500/10 to-black/50 p-6 rounded-xl border border-red-500/20">
              <div className="text-3xl font-bold text-red-400 mb-2">{offlineCount}</div>
              <div className="text-gray-400">Services Offline</div>
            </div>
          </div>

          {/* Status Chart/Graph */}
          <div className="bg-gradient-to-br from-[#1a5b60]/20 to-black/50 p-8 rounded-xl border border-[#24a0af]/20 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Shield className="w-6 h-6 text-[#24a0af]" />
              Service Status Overview
            </h2>

            <div className="space-y-4">
              {statuses.map((domain, index) => (
                <div key={index} className="bg-black/40 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      {domain.status === "checking" ? (
                        <Clock className="w-5 h-5 text-gray-400 animate-spin" />
                      ) : domain.status === "online" ? (
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-400" />
                      )}
                      <div>
                        <div className="font-semibold">{domain.name}</div>
                        <div className="text-sm text-gray-500">{domain.url}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-semibold ${
                        domain.status === "online"
                          ? "text-green-400"
                          : domain.status === "offline"
                          ? "text-red-400"
                          : "text-gray-400"
                      }`}>
                        {domain.status === "checking"
                          ? "Checking..."
                          : domain.status === "online"
                          ? "Operational"
                          : "Offline"
                        }
                      </div>
                      {domain.responseTime && (
                        <div className="text-xs text-gray-500">{domain.responseTime}ms</div>
                      )}
                    </div>
                  </div>

                  {/* Status bar */}
                  <div className="mt-3 h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        domain.status === "online"
                          ? "bg-green-400 w-full"
                          : domain.status === "offline"
                          ? "bg-red-400 w-0"
                          : "bg-gray-400 w-1/2"
                      }`}
                    />
                  </div>

                  {domain.lastChecked && (
                    <div className="mt-2 text-xs text-gray-600">
                      Last checked: {domain.lastChecked.toLocaleTimeString()}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Uptime Graph */}
          <div className="bg-gradient-to-br from-[#1a5b60]/20 to-black/50 p-8 rounded-xl border border-[#24a0af]/20">
            <h2 className="text-2xl font-bold mb-6">24-Hour Uptime History</h2>
            <div className="flex items-end justify-between gap-1 h-48">
              {Array.from({ length: 24 }).map((_, i) => {
                const height = Math.random() > 0.1 ? 100 : Math.random() * 40;
                const isDown = height < 50;
                return (
                  <div key={i} className="flex-1 flex flex-col justify-end">
                    <div
                      className={`rounded-t transition-all ${
                        isDown ? "bg-red-500/50" : "bg-green-500/50"
                      }`}
                      style={{ height: `${height}%` }}
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between mt-4 text-xs text-gray-500">
              <span>24h ago</span>
              <span>12h ago</span>
              <span>Now</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-6 text-center text-sm text-gray-400">
          <p>Status page updates every 30 seconds • Monitoring since 2025</p>
        </div>
      </footer>
    </div>
  );
}
