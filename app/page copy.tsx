import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import {
  ArrowRight,
  Coins,
  BarChart2,
  CreditCard,
  Building2,
  Globe2,
  Shield,
  BotIcon,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 flex items-center justify-center">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-gray-900 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:6rem_4rem]" />

      <section className="w-full px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col items-center space-y-12 text-center">
        {/* Hero content */}
        <header className="space-y-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img
              src="https://media.bananacrystal.com/wp-content/uploads/2024/07/24181620/Logo-128x128-2.png"
              alt="BananaCrystal Logo"
              className="w-12 h-12 rounded-full"
            />
            <BotIcon className="w-10 h-10 text-yellow-500" />
          </div>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
            BananaCrystal AI
          </h1>
          <p className="max-w-[700px] text-lg text-gray-300 md:text-xl/relaxed xl:text-2xl/relaxed">
            Your intelligent P2P trading assistant powered by advanced LLMs
            <br />
            <span className="text-gray-400 text-base mt-2 block">
              Compare rates across platforms • Get the best deals • Secure
              business payments
            </span>
          </p>
        </header>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-4">
          <SignedIn>
            <Link href="/dashboard">
              <button className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-gray-900 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full hover:from-yellow-500 hover:to-orange-500 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Go to Dashboard
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-gray-900 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full hover:from-yellow-500 hover:to-orange-500 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Sign In to Compare Rates
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </SignInButton>
          </SignedOut>

          <a
            href="https://bananacrystal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-yellow-400 hover:text-orange-400 font-medium"
          >
            Visit BananaCrystal for the best deals
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Main features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-8 max-w-5xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-2xl shadow-lg border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <Coins className="w-6 h-6 text-yellow-400" />
              <h3 className="text-xl font-semibold text-gray-100">
                Real-Time Rates
              </h3>
            </div>
            <p className="text-gray-300">
              Live P2P rate comparison across major platforms for the best deals
            </p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-2xl shadow-lg border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="w-6 h-6 text-orange-400" />
              <h3 className="text-xl font-semibold text-gray-100">
                Crypto Cards
              </h3>
            </div>
            <p className="text-gray-300">
              Access your crypto with debit cards for seamless transactions
            </p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-2xl shadow-lg border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-semibold text-gray-100">
                Business Tools
              </h3>
            </div>
            <p className="text-gray-300">
              Integrated payment solutions for business operations
            </p>
          </div>
        </div>

        {/* Secondary features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-center">
          {[
            {
              icon: <BarChart2 className="w-5 h-5 text-yellow-400" />,
              title: "Smart Analysis",
              description: "AI-powered market insights",
            },
            {
              icon: <Shield className="w-5 h-5 text-orange-400" />,
              title: "Secure Trading",
              description: "Protected P2P transactions",
            },
            {
              icon: <Globe2 className="w-5 h-5 text-blue-400" />,
              title: "Global Access",
              description: "Trade across platforms worldwide",
            },
          ].map(({ icon, title, description }) => (
            <div key={title} className="text-center">
              <div className="flex items-center justify-center mb-2">
                {icon}
              </div>
              <div className="text-lg font-semibold text-gray-100">{title}</div>
              <div className="text-sm text-gray-400 mt-1">{description}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}