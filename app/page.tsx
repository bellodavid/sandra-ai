"use client"

import React, { useState, useEffect } from 'react';
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import {
  ArrowRight, Coins, BookOpen, Video, Globe2,
  MessageSquare, Sparkles, Bot, Search, TrendingUp,
  Gem, ChevronRight, Shield, Zap
} from "lucide-react";
import Link from "next/link";

const FloatingImages = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Floating cryptocurrency icons */}
    <div className="absolute top-1/4 left-10 w-12 h-12 animate-float-slow opacity-20">
      <img src="https://bitperfect.pe/wp-content/uploads/2024/11/compressed_img-kZAM49zDxZ3Ywr6YeGVLyBP2-1024x585.png" alt="crypto" className="rounded-lg" />
    </div>
    <div className="absolute top-1/3 right-20 w-16 h-16 animate-float-delay opacity-20">
      <img src="https://bitperfect.pe/wp-content/uploads/2024/11/compressed_img-kZAM49zDxZ3Ywr6YeGVLyBP2-1024x585.png" alt="trading" className="rounded-lg" />
    </div>
    <div className="absolute bottom-1/4 left-1/4 w-14 h-14 animate-float opacity-20">
      <img src="https://bitperfect.pe/wp-content/uploads/2024/11/compressed_img-kZAM49zDxZ3Ywr6YeGVLyBP2-1024x585.png" alt="chart" className="rounded-lg" />
    </div>
    <div className="absolute top-1/2 right-1/3 w-10 h-10 animate-float-fast opacity-20">
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fman-studying&psig=AOvVaw0u0MDH3AHvtiI5p5dwC2Rc&ust=1738092459814000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCBk5DRlosDFQAAAAAdAAAAABAJ" alt="book" className="rounded-lg" />
    </div>
    
    {/* Gradient orbs */}
    <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
    <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slower"></div>
    <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-float-slow"></div>
  </div>
);

const GradientBackground = () => (
  <div className="absolute inset-0 -z-10">
    {/* Animated gradient mesh */}
    <div className="absolute inset-0 bg-gradient-mesh animate-gradient-shift"></div>
    
    {/* Moving grid */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293722_1px,transparent_1px),linear-gradient(to_bottom,#1f293722_1px,transparent_1px)] bg-[size:4rem_4rem] animate-grid-flow"></div>
    
    {/* Radial gradients */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,182,0,0.1),transparent_50%)]"></div>
    
    {/* Moving particles */}
    <div className="absolute inset-0">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-yellow-400/20 rounded-full animate-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`
          }}
        ></div>
      ))}
    </div>
  </div>
);

const GlowingButton = ({ children, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`group relative inline-flex items-center justify-center px-10 py-4 text-lg font-medium text-gray-900 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${className}`}
  >
    {children}
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </button>
);

const FeatureCard = ({ icon, title, description, color = "yellow", delay = "0s" }) => (
  <div
    className="animate-float-smooth transform transition-all duration-500 hover:scale-105"
    style={{ animationDelay: delay }}
  >
    <div className={`group bg-gray-800/40 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-700/50 hover:border-${color}-500/50 transition-all duration-500 h-full`}>
      <div className="flex flex-col items-center text-center gap-4">
        <div className={`transform transition-all duration-500 text-${color}-400 group-hover:scale-110 group-hover:rotate-6`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-100">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  </div>
);

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-gray-900 flex items-center justify-center overflow-hidden relative">
      <GradientBackground />
      <FloatingImages />

      <section className={`w-full px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col items-center space-y-16 text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        {/* Hero Section */}
        <div className="relative space-y-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative group">
              <img
                src="https://media.bananacrystal.com/wp-content/uploads/2024/07/24181620/Logo-128x128-2.png"
                alt="BananaCrystal Logo"
                className="w-16 h-16 rounded-full transform transition-transform duration-500 group-hover:rotate-180"
              />
              <div className="absolute inset-0 rounded-full bg-yellow-400/20 animate-ping-slow"></div>
            </div>
            <Bot className="w-12 h-12 text-yellow-400 animate-pulse" />
          </div>

          <h1 className="text-6xl font-bold tracking-tight sm:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 animate-gradient-x">
            Meet Sandra
          </h1>

          <p className="max-w-[800px] text-xl text-gray-300 md:text-2xl/relaxed xl:text-3xl/relaxed">
            Your Intelligent Trading & Learning Companion
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {[
              { icon: <Coins />, text: "P2P Trading" },
              { icon: <BookOpen />, text: "Book Info" },
              { icon: <Video />, text: "Video Analysis" },
              { icon: <Globe2 />, text: "Market Rates" }
            ].map(({ icon, text }, index) => (
              <div
                key={text}
                className="animate-fade-in-up flex items-center gap-2 bg-gray-800/30 px-4 py-2 rounded-full border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300"
                style={{ animationDelay: `${0.5 + index * 0.2}s` }}
              >
                <span className="text-yellow-400">{icon}</span>
                <span className="text-gray-300">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative z-10">
          <SignedIn>
            <Link href="/dashboard">
              <GlowingButton>
                Start Chatting
                <Sparkles className="ml-2 h-5 w-5 animate-sparkle" />
              </GlowingButton>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <GlowingButton>
                Get Started
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </GlowingButton>
            </SignInButton>
          </SignedOut>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <FeatureCard
            icon={<Gem className="w-8 h-8" />}
            title="Smart Trading"
            description="Get the best P2P rates with AI-powered insights"
            color="yellow"
          />
          <FeatureCard
            icon={<BookOpen className="w-8 h-8" />}
            title="Knowledge Hub"
            description="Access book summaries and market research"
            color="orange"
            delay="0.2s"
          />
          <FeatureCard
            icon={<Shield className="w-8 h-8" />}
            title="Secure Analysis"
            description="Safe and reliable market information"
            color="amber"
            delay="0.4s"
          />
          <FeatureCard
            icon={<Zap className="w-8 h-8" />}
            title="Real-time Data"
            description="Live exchange rates and market trends"
            color="yellow"
            delay="0.6s"
          />
        </div>

        {/* Interactive Demo Section */}
        <div className="w-full max-w-2xl mx-auto bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 transform hover:scale-105">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="w-6 h-6 text-yellow-400" />
            <h3 className="text-xl font-semibold text-gray-100">Try asking Sandra</h3>
          </div>
          <div className="space-y-4">
            {[
              "What are the current P2P rates for USDT?",
              "Can you summarize 'The Psychology of Money'?",
              "Get me the transcript of the latest crypto news",
              "Show me EUR/USD exchange rate trends"
            ].map((text, index) => (
              <div
                key={text}
                className="group bg-gray-700/30 p-4 rounded-lg hover:bg-gray-700/50 transition-all duration-300 transform hover:translate-x-2 cursor-pointer"
              >
                <p className="text-gray-300 group-hover:text-yellow-400 transition-colors">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes float-fast {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }

        @keyframes particle {
          0% { transform: translateY(0) translateX(0); opacity: 1; }
          50% { opacity: 0.5; }
          100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
        }

        .bg-gradient-mesh {
          background: linear-gradient(45deg, #1a1a1a 0%, transparent 100%),
                      linear-gradient(135deg, #332200 0%, transparent 100%),
                      linear-gradient(225deg, #332b00 0%, transparent 100%),
                      linear-gradient(315deg, #1a1100 0%, transparent 100%);
          background-size: 400% 400%;
        }

        .animate-gradient-shift {
          animation: gradient-shift 15s ease infinite;
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }

        .animate-particle {
          animation: particle 10s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-pulse-slower {
          animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </main>
  );
}