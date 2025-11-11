"use client";

import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("valknet-cookie-consent");
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("valknet-cookie-consent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("valknet-cookie-consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-50 max-w-md mx-auto">
      <div className="bg-gradient-to-br from-[#1a5b60]/95 to-black/95 backdrop-blur-lg p-6 rounded-xl border border-[#24a0af]/30 shadow-2xl">
        <div className="flex items-start gap-3 mb-4">
          <Cookie className="w-6 h-6 text-[#24a0af] flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-2">We use cookies</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
              By clicking "Accept All", you consent to our use of cookies.
            </p>
          </div>
          <button
            onClick={declineCookies}
            className="text-gray-400 hover:text-white transition-colors p-1"
            aria-label="Close cookie banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={acceptCookies}
            className="flex-1 bg-[#24a0af] hover:bg-[#1a5b60] text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
          >
            Accept All
          </button>
          <button
            onClick={declineCookies}
            className="flex-1 border border-white/20 hover:bg-white/10 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
          >
            Decline
          </button>
        </div>
        
        <div className="mt-3 text-center">
          <a 
            href="/privacy" 
            className="text-xs text-gray-400 hover:text-[#24a0af] transition-colors underline"
          >
            Learn more in our Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}
