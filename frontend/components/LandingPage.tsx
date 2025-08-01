import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-green-950 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-white text-2xl font-bold">Logo</h1>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#"
                  className="text-white hover:text-green-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-white hover:text-green-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  About
                </a>
              </div>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link href="/sign-in" passHref>
                  <span className="cursor-pointer text-white hover:text-green-200 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                    Sign In
                  </span>
                </Link>
                <Link href="/sign-up" passHref>
                  <span className="cursor-pointer bg-white text-green-800 hover:bg-green-50 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 border border-white">
                    Sign Up
                  </span>
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-white hover:text-green-200 p-2">
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-green-700">
            <a
              href="#"
              className="text-white hover:text-green-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-green-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <div className="pt-4 pb-3 border-t border-green-600">
              <div className="flex items-center px-3 space-x-3">
                <button className="text-white hover:text-green-200 block px-3 py-2 rounded-md text-base font-medium">
                  Sign In
                </button>
                <button className="bg-white text-green-800 hover:bg-green-50 px-4 py-2 rounded-md text-sm font-medium">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
              Welcome to Our Platform
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover amazing features and transform your experience with our
              innovative solutions designed to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-950 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors duration-200">
                Get Started
              </button>
              <button className="border-2 border-green-800 text-green-800 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-950 hover:text-white transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide exceptional value through our comprehensive suite of
              features and dedicated support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-950 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                Fast Performance
              </h3>
              <p className="text-gray-600">
                Lightning-fast performance that keeps your workflow smooth and
                efficient.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-950 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                Reliable Security
              </h3>
              <p className="text-gray-600">
                Enterprise-grade security to protect your data and maintain your
                privacy.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Round-the-clock customer support to help you whenever you need
                assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their
            business with our platform.
          </p>
          <button className="bg-white text-green-800 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors duration-200">
            Start Your Journey
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-green-200 hover:text-white transition-colors duration-200"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-green-200 hover:text-white transition-colors duration-200"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-green-200 hover:text-white transition-colors duration-200"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-green-200 hover:text-white transition-colors duration-200"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-green-200 hover:text-white transition-colors duration-200"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-green-200 hover:text-white transition-colors duration-200"
                  >
                    Updates
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-green-200 hover:text-white transition-colors duration-200"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-green-200 hover:text-white transition-colors duration-200"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-green-200 hover:text-white transition-colors duration-200"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-green-200 hover:text-white transition-colors duration-200"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-green-200 hover:text-white transition-colors duration-200"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-green-200 hover:text-white transition-colors duration-200"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center">
            <p className="text-green-200">
              © 2024 Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
