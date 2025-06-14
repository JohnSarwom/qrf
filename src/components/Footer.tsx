
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-lg flex items-center justify-center">
                  <span className="text-slate-900 font-bold text-lg">QRF</span>
                </div>
                <span className="text-xl font-bold text-white">Quick Response Force</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Your leader in innovative security solutions, safeguarding lives and 
                assets in Papua New Guinea with over two decades of expertise.
              </p>
              <p className="text-gray-500 text-sm">
                © 2025 Quick Response Force. All rights reserved.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Emergency Response Planning</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Vehicle Recovery Support</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Armed Escorts & Protection</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Command Center Solutions</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Radio Communications</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Security Consultancy</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact Information</h4>
              <div className="space-y-3 text-gray-400">
                <div>
                  <p className="font-medium text-white">Service Area</p>
                  <p className="text-sm">Papua New Guinea</p>
                  <p className="text-sm">Port Moresby & Surrounding Areas</p>
                </div>
                <div>
                  <p className="font-medium text-white">Emergency Response</p>
                  <p className="text-sm text-cyan-400">24/7 Available</p>
                </div>
                <div>
                  <p className="font-medium text-white">Specialties</p>
                  <p className="text-sm">Security Management • Emergency Response • Radio Communications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
