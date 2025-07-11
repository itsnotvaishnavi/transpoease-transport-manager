
import React from "react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-12 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
          Complaint <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">Submission</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Submit your transportation-related complaints and get timely resolutions.
          All data will be stored in our MySQL database.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
