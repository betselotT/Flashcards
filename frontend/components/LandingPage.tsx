"use client";

import { useState } from "react";
import Link from "next/link";

const LandingPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-50/50 rounded-full blur-3xl animate-ping delay-2000"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                FlashCard Studio
              </h1>
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#home"
                  className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-2xl text-sm font-medium transition-all duration-300 hover:bg-green-50"
                >
                  Home
                </a>
                <a
                  href="#features"
                  className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-2xl text-sm font-medium transition-all duration-300 hover:bg-green-50"
                >
                  Features
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-2xl text-sm font-medium transition-all duration-300 hover:bg-green-50"
                >
                  About
                </a>
              </div>
            </div>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link href="/sign-in">
                  <span className="cursor-pointer text-gray-700 hover:text-green-600 px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-300 hover:bg-green-50">
                    Sign In
                  </span>
                </Link>
                <Link href="/sign-up">
                  <span className="cursor-pointer bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 px-6 py-2 rounded-2xl text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Sign Up
                  </span>
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-green-600 p-2 rounded-2xl transition-colors duration-300"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isMobileMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-xl border-t border-gray-100">
            <a
              href="#home"
              className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-2xl text-base font-medium transition-all duration-300 hover:bg-green-50"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-2xl text-base font-medium transition-all duration-300 hover:bg-green-50"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-2xl text-base font-medium transition-all duration-300 hover:bg-green-50"
            >
              About
            </a>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex flex-col space-y-3 px-3">
                <Link href="/sign-in">
                  <span className="cursor-pointer text-gray-700 hover:text-green-600 block px-3 py-2 rounded-2xl text-base font-medium transition-all duration-300 hover:bg-green-50 text-center">
                    Sign In
                  </span>
                </Link>
                <Link href="/sign-up">
                  <span className="cursor-pointer bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg text-center block">
                    Sign Up
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="text-6xl sm:text-7xl lg:text-8xl mb-6">🎓</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 bg-clip-text text-transparent mb-6 leading-tight">
              Master Learning with
              <br />
              Smart Flashcards
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your study sessions with our intelligent flashcard
              system. Create, organize, and master any subject with our modern
              learning platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Link href="/sign-up">
                <button className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 hover:cursor-pointer rounded-2xl text-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Start Learning Free
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="relative z-10 bg-gray-50/50 py-20 lg:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
              Why Choose FlashCard Studio?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the future of learning with our comprehensive suite of
              features designed to accelerate your educational journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: "⚡",
                title: "Smart Learning",
                description:
                  "AI-powered spaced repetition algorithm adapts to your learning pace for maximum retention.",
              },
              {
                icon: "🎯",
                title: "Organized Categories",
                description:
                  "Organize your flashcards by subject, difficulty, and custom categories for efficient studying.",
              },
              {
                icon: "📱",
                title: "Cross-Platform",
                description:
                  "Study anywhere, anytime with our responsive design that works on all your devices.",
              },
              {
                icon: "📊",
                title: "Progress Tracking",
                description:
                  "Monitor your learning progress with detailed analytics and performance insights.",
              },
              {
                icon: "🔒",
                title: "Secure & Private",
                description:
                  "Your study data is protected with enterprise-grade security and privacy measures.",
              },
              {
                icon: "🌟",
                title: "Modern Interface",
                description:
                  "Beautiful, intuitive design that makes studying enjoyable and distraction-free.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-xl p-6 lg:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl lg:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "10K+", label: "Active Learners" },
              { number: "500K+", label: "Flashcards Created" },
              { number: "95%", label: "Success Rate" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 bg-gradient-to-r from-green-500 to-emerald-600 py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl sm:text-6xl mb-6">🚀</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful learners who have accelerated their
            education with our intelligent flashcard platform.
          </p>
          <Link href="/sign-up">
            <button className="bg-white text-green-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Your Journey Today
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
                FlashCard Studio
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Empowering learners worldwide with intelligent flashcard
                technology.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">
                Product
              </h4>
              <ul className="space-y-3">
                {["Features", "Pricing", "Updates", "Mobile App"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">
                Support
              </h4>
              <ul className="space-y-3">
                {[
                  "Help Center",
                  "Documentation",
                  "Community",
                  "Contact Us",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">
                Legal
              </h4>
              <ul className="space-y-3">
                {[
                  "Privacy Policy",
                  "Terms of Service",
                  "Cookie Policy",
                  "GDPR",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-gray-400 text-center sm:text-left">
                © 2025 FlashCard Studio. All rights reserved.
              </p>
              <div className="flex space-x-6">
                {["Twitter", "LinkedIn", "GitHub"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
