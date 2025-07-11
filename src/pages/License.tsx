
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const License = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-coral-light/30 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
            License <span className="bg-gradient-to-r from-coral to-coral-dark bg-clip-text text-transparent">Application</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Apply for and renew your transportation licenses with minimal paperwork.
            Our digital process saves you time and reduces hassle.
          </p>
          <Button 
            className="bg-gradient-to-r from-coral to-coral-dark text-white hover:opacity-90 text-lg px-8 py-6 rounded-full" 
            asChild
          >
            <Link to="/license-application">Apply for License</Link>
          </Button>
        </div>
      </section>

      {/* License Types */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold font-display mb-8 text-center">Available License Types</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-coral-light/30 to-white border-none rounded-2xl">
              <CardContent className="p-8">
                <div className="mb-4 text-4xl bg-white p-4 rounded-full shadow-md inline-block">
                  <FileText className="text-coral" />
                </div>
                <h3 className="text-xl font-bold mb-2">Commercial Driver</h3>
                <p className="text-gray-600">
                  For professional drivers operating commercial vehicles for business purposes.
                </p>
                <Button className="bg-gradient-to-r from-coral to-coral-dark text-white mt-4" asChild>
                  <Link to="/license-application">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-coral-light/30 to-white border-none rounded-2xl">
              <CardContent className="p-8">
                <div className="mb-4 text-4xl bg-white p-4 rounded-full shadow-md inline-block">
                  <FileText className="text-coral" />
                </div>
                <h3 className="text-xl font-bold mb-2">Transport Operator</h3>
                <p className="text-gray-600">
                  For businesses and individuals operating transport services.
                </p>
                <Button className="bg-gradient-to-r from-coral to-coral-dark text-white mt-4" asChild>
                  <Link to="/license-application">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-coral-light/30 to-white border-none rounded-2xl">
              <CardContent className="p-8">
                <div className="mb-4 text-4xl bg-white p-4 rounded-full shadow-md inline-block">
                  <FileText className="text-coral" />
                </div>
                <h3 className="text-xl font-bold mb-2">Special Vehicle</h3>
                <p className="text-gray-600">
                  For operating specialized or oversized vehicles on public roads.
                </p>
                <Button className="bg-gradient-to-r from-coral to-coral-dark text-white mt-4" asChild>
                  <Link to="/license-application">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-12 px-4 bg-gradient-to-r from-coral/10 to-coral/5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold font-display mb-8 text-center">Application Process</h2>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 rounded-full bg-coral flex items-center justify-center text-white text-2xl font-bold mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Submit Application</h3>
              <p className="text-gray-600">Complete the online application form with all required information.</p>
            </div>
            
            <div className="flex-1 flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 rounded-full bg-coral flex items-center justify-center text-white text-2xl font-bold mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Background Check</h3>
              <p className="text-gray-600">We verify your information and perform necessary background checks.</p>
            </div>
            
            <div className="flex-1 flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 rounded-full bg-coral flex items-center justify-center text-white text-2xl font-bold mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Testing</h3>
              <p className="text-gray-600">Complete required testing and demonstration of skills if applicable.</p>
            </div>
            
            <div className="flex-1 flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 rounded-full bg-coral flex items-center justify-center text-white text-2xl font-bold mb-4">4</div>
              <h3 className="text-xl font-bold mb-2">License Issuance</h3>
              <p className="text-gray-600">Receive your license digitally or physically after approval.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default License;
