"use client";

import { useState } from "react";
import { Shield, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  showBackButton?: boolean;
  backHref?: string;
  backText?: string;
}

export default function Navigation({ showBackButton = false, backHref = "/", backText = "Back to Home" }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Shield className="w-8 h-8 text-[#24a0af]" />
          <span className="text-xl font-bold">Valknet Security</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/products" className="text-sm hover:text-[#24a0af] transition-colors">Products</Link>
          <Link href="/solutions" className="text-sm hover:text-[#24a0af] transition-colors">Solutions</Link>
          <Link href="/features" className="text-sm hover:text-[#24a0af] transition-colors">Features</Link>
          <Link href="/pricing" className="text-sm hover:text-[#24a0af] transition-colors">Pricing</Link>
          <Link href="/about" className="text-sm hover:text-[#24a0af] transition-colors">About</Link>
          <Link href="/contact" className="text-sm hover:text-[#24a0af] transition-colors">Contact</Link>
        </div>
        
        <div className="flex items-center gap-2">
          {showBackButton ? (
            <Link href={backHref} className="hidden md:flex items-center gap-2 text-gray-400 hover:text-white transition-colors fast-button-hover">
              {backText}
            </Link>
          ) : null}
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="hover:bg-white/10 hidden sm:flex"
          >
            <Shield className="w-5 h-5" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="hover:bg-white/10 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <Link 
              href="/products" 
              className="block text-sm hover:text-[#24a0af] transition-colors" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              href="/solutions" 
              className="block text-sm hover:text-[#24a0af] transition-colors" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link 
              href="/features" 
              className="block text-sm hover:text-[#24a0af] transition-colors" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="/pricing" 
              className="block text-sm hover:text-[#24a0af] transition-colors" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/about" 
              className="block text-sm hover:text-[#24a0af] transition-colors" 
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="block text-sm hover:text-[#24a0af] transition-colors" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            {showBackButton ? (
              <Link 
                href={backHref} 
                className="block text-sm hover:text-[#24a0af] transition-colors" 
                onClick={() => setMobileMenuOpen(false)}
              >
                {backText}
              </Link>
            ) : null}
          </div>
        </div>
      )}
    </nav>
  );
}