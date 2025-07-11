
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceCard from "@/components/home/ServiceCard";
import { Car, FileText, FileCheck, MessageSquare } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-lavender-light to-white">
      <Header />
      
      {/* Services Hero Section */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Our <span className="bg-gradient-to-r from-teal to-coral bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            TranspoEase provides comprehensive services to make transportation management
            effortless. Explore our offerings designed to simplify your experience.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard 
              title="Vehicle Registration" 
              description="Register your vehicles quickly and easily with our streamlined online process. We handle all the paperwork so you can focus on your business."
              icon={<Car className="text-teal" />}
              linkTo="/registration"
              bgColorClass="bg-gradient-to-br from-teal-light/40 to-white"
              buttonColorClass="bg-gradient-to-r from-teal to-teal-dark text-white"
            />
            
            <ServiceCard 
              title="License Application" 
              description="Apply for and renew your transportation licenses with minimal paperwork. Our digital process saves you time and reduces hassle."
              icon={<FileText className="text-coral" />}
              linkTo="/license"
              bgColorClass="bg-gradient-to-br from-coral-light/40 to-white"
              buttonColorClass="bg-gradient-to-r from-coral to-coral-dark text-white"
            />
            
            <ServiceCard 
              title="Permit Management" 
              description="Manage all your transportation permits in one centralized platform. Track expiration dates, renewals, and application status with ease."
              icon={<FileCheck className="text-purple-600" />}
              linkTo="/permits"
              bgColorClass="bg-gradient-to-br from-lavender/70 to-white"
              buttonColorClass="bg-gradient-to-r from-purple-500 to-purple-700 text-white"
            />
            
            <ServiceCard 
              title="Complaint Submission" 
              description="Submit and track transportation-related complaints and get timely resolutions. Our system ensures your concerns are addressed promptly."
              icon={<MessageSquare className="text-blue-500" />}
              linkTo="/complaints"
              bgColorClass="bg-gradient-to-br from-blue-100 to-white"
              buttonColorClass="bg-gradient-to-r from-blue-500 to-blue-700 text-white"
            />
          </div>
        </div>
      </section>
      
      {/* Service Process Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-teal/10 to-coral/10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold font-display mb-12 text-center">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-teal flex items-center justify-center text-white text-2xl font-bold mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Create Account</h3>
              <p className="text-gray-600">Register an account with us to access all our services and features.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-coral flex items-center justify-center text-white text-2xl font-bold mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Submit Application</h3>
              <p className="text-gray-600">Fill out the required forms and submit your application online.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center text-white text-2xl font-bold mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Receive Approval</h3>
              <p className="text-gray-600">Get your documents processed and approved in a timely manner.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
