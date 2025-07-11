import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const PermitManagement = () => {
  // Vehicle Registration Form
  const vehicleForm = useForm({
    defaultValues: {
      reg_no: "",
      make: "",
      model: "",
      color: "",
    },
  });

  // Permit Registration Form
  const permitForm = useForm({
    defaultValues: {
      permit_no: "",
      reg_no: "",
      type_of_permit: "",
      route: "",
    },
  });

  const onSubmitVehicle = async (values) => {
    await fetch("http://localhost:5000/api/vehicles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    vehicleForm.reset();
  };

  const onSubmitPermit = async (values) => {
    await fetch("http://localhost:5000/api/permits", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    permitForm.reset();
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-lavender to-white">
      <Header />
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Vehicle Registration</h1>
          <form onSubmit={vehicleForm.handleSubmit(onSubmitVehicle)} className="space-y-4 max-w-md mx-auto">
            <Input placeholder="Registration Number" {...vehicleForm.register("reg_no")}/>
            <Input placeholder="Make" {...vehicleForm.register("make")}/>
            <Input placeholder="Model" {...vehicleForm.register("model")}/>
            <Input placeholder="Color" {...vehicleForm.register("color")}/>
            <Button type="submit" className="w-full">Register Vehicle</Button>
          </form>
        </div>
      </section>
      <section className="pt-12 pb-32 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Permit Registration</h1>
          <form onSubmit={permitForm.handleSubmit(onSubmitPermit)} className="space-y-4 max-w-md mx-auto">
            <Input placeholder="Permit Number" {...permitForm.register("permit_no")}/>
            <Input placeholder="Vehicle Registration Number" {...permitForm.register("reg_no")}/>
            <Input placeholder="Type of Permit" {...permitForm.register("type_of_permit")}/>
            <Input placeholder="Route" {...permitForm.register("route")}/>
            <Button type="submit" className="w-full">Register Permit</Button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PermitManagement;
