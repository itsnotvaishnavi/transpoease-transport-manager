
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileCheck } from "lucide-react";

const Permits = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-lavender to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Permit <span className="bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">Management</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Manage all your transportation permits in one centralized platform.
            Track expiration dates, renewals, and application status with ease.
          </p>
          <Button 
            className="bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:opacity-90 text-lg px-8 py-6 rounded-full" 
          >
            Apply for Permit
          </Button>
        </div>
      </section>

      {/* Permit Types */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold font-display mb-8 text-center">Available Permit Types</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-lavender/70 to-white border-none rounded-2xl">
              <CardContent className="p-8">
                <div className="mb-4 text-4xl bg-white p-4 rounded-full shadow-md inline-block">
                  <FileCheck className="text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Oversize Load</h3>
                <p className="text-gray-600 mb-4">
                  For vehicles carrying loads that exceed standard size limitations.
                </p>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                  <li>Valid for specific routes</li>
                  <li>Time-limited permits available</li>
                  <li>Escort requirements may apply</li>
                </ul>
                <Button className="bg-gradient-to-r from-purple-500 to-purple-700 text-white">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-lavender/70 to-white border-none rounded-2xl">
              <CardContent className="p-8">
                <div className="mb-4 text-4xl bg-white p-4 rounded-full shadow-md inline-block">
                  <FileCheck className="text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Hazardous Materials</h3>
                <p className="text-gray-600 mb-4">
                  Required for transporting dangerous or hazardous materials.
                </p>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                  <li>Material-specific permits</li>
                  <li>Additional safety requirements</li>
                  <li>Special route restrictions</li>
                </ul>
                <Button className="bg-gradient-to-r from-purple-500 to-purple-700 text-white">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-lavender/70 to-white border-none rounded-2xl">
              <CardContent className="p-8">
                <div className="mb-4 text-4xl bg-white p-4 rounded-full shadow-md inline-block">
                  <FileCheck className="text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Interstate Operation</h3>
                <p className="text-gray-600 mb-4">
                  For carriers operating across state lines.
                </p>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                  <li>Multi-state coverage available</li>
                  <li>USDOT number requirement</li>
                  <li>Annual renewal options</li>
                </ul>
                <Button className="bg-gradient-to-r from-purple-500 to-purple-700 text-white">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-lavender/70 to-white border-none rounded-2xl">
              <CardContent className="p-8">
                <div className="mb-4 text-4xl bg-white p-4 rounded-full shadow-md inline-block">
                  <FileCheck className="text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Special Events</h3>
                <p className="text-gray-600 mb-4">
                  For transportation services during special events or occasions.
                </p>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                  <li>Event-specific duration</li>
                  <li>Expedited processing available</li>
                  <li>Venue-specific permissions</li>
                </ul>
                <Button className="bg-gradient-to-r from-purple-500 to-purple-700 text-white">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Permit Management System */}
      <section className="py-12 px-4 bg-gradient-to-r from-purple-100 to-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold font-display mb-8 text-center">Permit Management System</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-purple-700">Track Applications</h3>
              <p className="text-gray-600">
                Monitor the status of all your permit applications in real-time through our user-friendly dashboard.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-purple-700">Renewal Notifications</h3>
              <p className="text-gray-600">
                Receive timely notifications when your permits are approaching expiration and need renewal.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-purple-700">Digital Storage</h3>
              <p className="text-gray-600">
                Access all your permit documents digitally from anywhere, anytime through our secure platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Permits;
