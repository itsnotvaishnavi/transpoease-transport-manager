
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MessageSquare } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import HeroSection from "@/components/complaints/HeroSection";
import ComplaintForm from "@/components/complaints/ComplaintForm";

const ComplaintSubmission = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-white">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Complaint Form */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <Card className="border-none shadow-lg rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-100 to-blue-300/20 p-6">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <MessageSquare className="h-6 w-6 text-blue-500" />
                Submit Your Complaint
              </CardTitle>
              <CardDescription>
                Fill out the form below to submit your complaint. All data will be stored in MySQL.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-8">
              <ComplaintForm />
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComplaintSubmission;
