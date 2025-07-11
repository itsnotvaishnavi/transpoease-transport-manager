
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-display font-bold mb-4 bg-gradient-to-r from-teal-light via-coral-light to-lavender bg-clip-text text-transparent">
              TranspoEase
            </h3>
            <p className="text-gray-300 mb-4">
              Modern solutions for all your transportation management needs. 
              Simplifying transportation one journey at a time.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-teal-light transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-teal-light transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-teal-light transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <p>123 Transport Avenue</p>
              <p>Cityville, State 12345</p>
              <p>Email: info@transpoease.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {currentYear} TranspoEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
