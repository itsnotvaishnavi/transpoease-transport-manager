
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car } from "lucide-react";

const Registration = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-teal-light/30 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Vehicle <span className="bg-gradient-to-r from-teal to-teal-dark bg-clip-text text-transparent">Registration</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Register your vehicles quickly and easily with our streamlined online process.
            We handle all the paperwork so you can focus on your business.
          </p>
          <Button 
            className="bg-gradient-to-r from-teal to-teal-dark text-white hover:opacity-90 text-lg px-8 py-6 rounded-full"
          >
            Start Registration
          </Button>
        </div>
      </section>

      {/* Registration Process */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold font-display mb-8 text-center">Registration Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-teal-light/30 to-white border-none rounded-2xl">
              <CardContent className="p-8">
                <div className="mb-4 text-4xl bg-white p-4 rounded-full shadow-md inline-block">
                  <span className="font-bold text-teal">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Submit Details</h3>
                <p className="text-gray-600">
                  Fill out the online form with your vehicle information and documentation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-teal-light/30 to-white border-none rounded-2xl">
              <CardContent className="p-8">
                <div className="mb-4 text-4xl bg-white p-4 rounded-full shadow-md inline-block">
                  <span className="font-bold text-teal">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Pay Fees</h3>
                <p className="text-gray-600">
                  Make your payment securely online using our payment gateway.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-teal-light/30 to-white border-none rounded-2xl">
              <CardContent className="p-8">
                <div className="mb-4 text-4xl bg-white p-4 rounded-full shadow-md inline-block">
                  <span className="font-bold text-teal">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Get Certificate</h3>
                <p className="text-gray-600">
                  Receive your registration certificate digitally or by mail.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-12 px-4 bg-gradient-to-r from-teal/10 to-teal/5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold font-display mb-8 text-center">Required Documents</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-teal/20 rounded-full">
                <Car className="text-teal w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Vehicle Information</h3>
                <p className="text-gray-600">
                  Vehicle Identification Number (VIN), Make, Model, Year, and Color.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-teal/20 rounded-full">
                <Car className="text-teal w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Proof of Ownership</h3>
                <p className="text-gray-600">
                  Original title, bill of sale, or manufacturer's certificate.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-teal/20 rounded-full">
                <Car className="text-teal w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Identification</h3>
                <p className="text-gray-600">
                  Driver's license or state ID of the registrant.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-teal/20 rounded-full">
                <Car className="text-teal w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Insurance Proof</h3>
                <p className="text-gray-600">
                  Current insurance policy information for the vehicle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Registration;
