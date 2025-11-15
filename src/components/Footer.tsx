"use client";

import { Shield } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-[#24a0af]" />
              <span className="font-bold">Valknet Security</span>
            </div>
            <p className="text-sm text-gray-400">
              Enterprise cybersecurity solutions protecting organizations worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/products" className="hover:text-[#24a0af] transition-colors">Products</Link></li>
              <li><Link href="/solutions" className="hover:text-[#24a0af] transition-colors">Solutions</Link></li>
              <li><Link href="/features" className="hover:text-[#24a0af] transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-[#24a0af] transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-[#24a0af] transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-[#24a0af] transition-colors">Careers</Link></li>
              <li><Link href="/news" className="hover:text-[#24a0af] transition-colors">News</Link></li>
              <li><Link href="/contact" className="hover:text-[#24a0af] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/docs" className="hover:text-[#24a0af] transition-colors">Documentation</Link></li>
              <li><Link href="/status" className="hover:text-[#24a0af] transition-colors">System Status</Link></li>
              <li><Link href="/privacy" className="hover:text-[#24a0af] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/support" className="hover:text-[#24a0af] transition-colors">Support</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Valknet Security. All rights reserved. Protecting enterprises worldwide.</p>
        </div>
      </div>
    </footer>
  );
}