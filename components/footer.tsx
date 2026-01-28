import { Facebook, Linkedin } from "lucide-react";

// Custom X (Twitter) icon since lucide doesn't have the new X logo
const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Custom Pinterest icon
const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="relative bg-white py-8 px-4 border-t border-gray-200 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left - Address */}
          <div>
            <address className="not-italic text-gray-700 leading-relaxed">
              375 Greenfield Avenue,
              <br />
              New York, NY 12134,
              <br />
              United States
            </address>
          </div>

          {/* Center - Social Links */}
          <div className="flex justify-center gap-3">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="X (Twitter)"
            >
              <XIcon />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Pinterest"
            >
              <PinterestIcon />
            </a>
          </div>

          {/* Right - 3D Abstract Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-48 h-48 md:w-64 md:h-64 relative">
              {/* Abstract 3D shape placeholder - using CSS gradients */}
              <div className="absolute inset-0">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <linearGradient
                      id="grad1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#c4b5fd", stopOpacity: 0.8 }}
                      />
                      <stop
                        offset="50%"
                        style={{ stopColor: "#f0abfc", stopOpacity: 0.6 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "#93c5fd", stopOpacity: 0.8 }}
                      />
                    </linearGradient>
                    <linearGradient
                      id="grad2"
                      x1="100%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#a5f3fc", stopOpacity: 0.7 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "#c4b5fd", stopOpacity: 0.9 }}
                      />
                    </linearGradient>
                  </defs>
                  {/* Abstract blob shapes */}
                  <ellipse
                    cx="100"
                    cy="100"
                    rx="80"
                    ry="60"
                    fill="url(#grad1)"
                    transform="rotate(-20 100 100)"
                  />
                  <ellipse
                    cx="120"
                    cy="90"
                    rx="50"
                    ry="70"
                    fill="url(#grad2)"
                    transform="rotate(30 120 90)"
                    opacity="0.7"
                  />
                  <ellipse
                    cx="80"
                    cy="110"
                    rx="40"
                    ry="55"
                    fill="url(#grad1)"
                    transform="rotate(-45 80 110)"
                    opacity="0.5"
                  />
                  {/* Inner highlight */}
                  <ellipse
                    cx="100"
                    cy="95"
                    rx="25"
                    ry="35"
                    fill="white"
                    opacity="0.3"
                    transform="rotate(15 100 95)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-gray-600 text-sm">Tarantula © 2026</p>

          {/* Links */}
          <nav className="flex gap-8">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
            >
              Styleguide
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
            >
              Licenses
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
            >
              Change Log
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
