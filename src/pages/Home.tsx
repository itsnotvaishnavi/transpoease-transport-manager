import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceCard from "@/components/home/ServiceCard";
import { Car, FileText, FileCheck, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/9a7b916e-fc9c-492c-bbd4-fc9fc36787fc.png')",
          backgroundSize: "cover",
          filter: "brightness(1.1) opacity(0.2)",
        }}
      ></div>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-12 md:pt-32 md:pb-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 leading-tight">
                Simplifying <span className="bg-gradient-to-r from-teal to-coral bg-clip-text text-transparent">Transportation</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Your all-in-one solution for efficient, reliable, and hassle-free transport.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button 
                  className="bg-gradient-to-r from-teal to-teal-dark hover:opacity-90 text-lg px-8 py-6 rounded-full" 
                  size="lg"
                  asChild
                >
                  <Link to="/login">Get Started</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal/30 to-coral/30 rounded-3xl transform rotate-3"></div>
                <img 
                  src="/lovable-uploads/9a7b916e-fc9c-492c-bbd4-fc9fc36787fc.png" 
                  alt="Transportation vehicles" 
                  className="rounded-3xl shadow-xl relative animate-float z-10" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="relative z-10 py-12 md:py-16 px-4 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Welcome to <span className="bg-gradient-to-r from-teal to-coral bg-clip-text text-transparent">TranspoEase</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive solutions for all your transportation needs. From vehicle registration to permit management, 
            we've streamlined every process to save you time and reduce hassle.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-12 md:py-16 px-4 bg-lavender-light/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-2 text-center">Our Services</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Explore our range of services designed to make transportation effortless and efficient.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              title="Vehicle Registration" 
              description="Register your vehicles quickly and easily with our streamlined online process."
              icon={<Car className="text-teal" />}
              linkTo="/registration"
              bgColorClass="bg-gradient-to-br from-teal-light/40 to-white"
              buttonColorClass="bg-gradient-to-r from-teal to-teal-dark text-white"
            />
            
            <ServiceCard 
              title="License Application" 
              description="Apply for and renew your transportation licenses with minimal paperwork."
              icon={<FileText className="text-coral" />}
              linkTo="/license"
              bgColorClass="bg-gradient-to-br from-coral-light/40 to-white"
              buttonColorClass="bg-gradient-to-r from-coral to-coral-dark text-white"
            />
            
            <ServiceCard 
              title="Permit Management" 
              description="Manage all your transportation permits in one centralized platform."
              icon={<FileCheck className="text-purple-600" />}
              linkTo="/permits"
              bgColorClass="bg-gradient-to-br from-lavender/70 to-white"
              buttonColorClass="bg-gradient-to-r from-purple-500 to-purple-700 text-white"
            />
            
            <ServiceCard 
              title="Complaint Submission" 
              description="Submit and track transportation-related complaints and get timely resolutions."
              icon={<MessageSquare className="text-blue-500" />}
              linkTo="/complaints"
              bgColorClass="bg-gradient-to-br from-blue-100 to-white"
              buttonColorClass="bg-gradient-to-r from-blue-500 to-blue-700 text-white"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative z-10 py-16 px-4 bg-gradient-to-r from-teal/20 to-coral/20 backdrop-blur-sm">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Ready to Simplify Your Transportation?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Join thousands of satisfied users who have streamlined their transportation processes with TranspoEase.
          </p>
          <Button 
            className="bg-gradient-to-r from-teal to-coral text-white hover:opacity-90 text-lg px-8 py-6 rounded-full" 
            size="lg"
            asChild
          >
            <Link to="/login">Get Started Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
