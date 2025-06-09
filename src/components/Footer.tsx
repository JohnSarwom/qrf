
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">QRF</span>
                </div>
                <span className="text-xl font-bold">Quick Response Force</span>
              </div>
              <p className="text-blue-100 leading-relaxed mb-4">
                Your leader in innovative security solutions, safeguarding lives and 
                assets in Papua New Guinea with over two decades of expertise.
              </p>
              <p className="text-blue-200 text-sm">
                © 2025 Quick Response Force. All rights reserved.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-blue-100">
                <li>Emergency Response Planning</li>
                <li>Vehicle Recovery Support</li>
                <li>Armed Escorts & Protection</li>
                <li>Command Center Solutions</li>
                <li>Radio Communications</li>
                <li>Security Consultancy</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
              <div className="space-y-3 text-blue-100">
                <div>
                  <p className="font-medium text-white">Service Area</p>
                  <p className="text-sm">Papua New Guinea</p>
                  <p className="text-sm">Port Moresby & Surrounding Areas</p>
                </div>
                <div>
                  <p className="font-medium text-white">Emergency Response</p>
                  <p className="text-sm">24/7 Available</p>
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
