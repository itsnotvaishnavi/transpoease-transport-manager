
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold font-display bg-gradient-to-r from-teal-dark via-coral to-purple-600 bg-clip-text text-transparent">
            TranspoEase
          </h1>
        </Link>
        
        <nav className="flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-teal transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-sm font-medium hover:text-teal transition-colors">
            Services
          </Link>
          <Link to="/registration" className="text-sm font-medium hover:text-teal transition-colors">
            Registration
          </Link>
          <Link to="/license" className="text-sm font-medium hover:text-teal transition-colors">
            License
          </Link>
          <Link to="/permits" className="text-sm font-medium hover:text-teal transition-colors">
            Permits
          </Link>
          <Link to="/complaints" className="text-sm font-medium hover:text-teal transition-colors">
            Complaints
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
