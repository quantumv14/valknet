"use client";

import { Shield, ArrowLeft, Check, Zap } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "per month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 25 endpoints",
        "Basic threat detection",
        "Email support",
        "Monthly reports",
        "Standard encryption"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "per month",
      description: "Ideal for growing companies",
      features: [
        "Up to 100 endpoints",
        "Advanced AI threat detection",
        "24/7 phone support",
        "Real-time dashboards",
        "Military-grade encryption",
        "Compliance reporting"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact sales",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited endpoints",
        "Custom AI models",
        "Dedicated support team",
        "Advanced analytics",
        "Custom integrations",
        "On-premise deployment",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect security plan for your organization. All plans include our core protection features with no hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`relative bg-gradient-to-br from-[#1a5b60]/20 to-black/50 p-8 rounded-xl border ${plan.popular ? 'border-[#24a0af] ring-2 ring-[#24a0af]/20' : 'border-[#24a0af]/20'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#24a0af] text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#24a0af] flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/contact" 
                  className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                    plan.popular 
                      ? 'bg-[#24a0af] hover:bg-[#1a5b60] text-white' 
                      : 'border border-white/20 hover:bg-white/10 text-white'
                  }`}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#1a5b60]/10 to-black/50 p-6 rounded-xl border border-[#24a0af]/20">
              <h3 className="text-xl font-bold mb-2">Can I change plans anytime?</h3>
              <p className="text-gray-400">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated.</p>
            </div>

            <div className="bg-gradient-to-br from-[#1a5b60]/10 to-black/50 p-6 rounded-xl border border-[#24a0af]/20">
              <h3 className="text-xl font-bold mb-2">Is there a free trial?</h3>
              <p className="text-gray-400">We offer a 30-day free trial for all plans. No credit card required to start your trial.</p>
            </div>

            <div className="bg-gradient-to-br from-[#1a5b60]/10 to-black/50 p-6 rounded-xl border border-[#24a0af]/20">
              <h3 className="text-xl font-bold mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-400">We accept all major credit cards, ACH transfers, and wire transfers for enterprise customers.</p>
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
