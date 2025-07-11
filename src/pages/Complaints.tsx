import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ComplaintForm from "./ComplaintForm";

const Complaints = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-white">
      <Header />
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Complaint Submission</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Submit your complaint below. Only name, phone number, subject, and complaint details are required.
          </p>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <ComplaintForm />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Complaints;
