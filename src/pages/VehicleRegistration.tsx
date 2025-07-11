import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { toast } from "sonner";
import { registerVehicle } from "@/services/api";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon, Car } from "lucide-react";
import { cn } from "@/lib/utils";

const vehicleFormSchema = z.object({
  reg_no: z.string().min(5, { message: "Registration number is required" }),
  make: z.string().min(2, { message: "Make must be at least 2 characters" }),
  model: z.string().min(2, { message: "Model must be at least 2 characters" }),
  year: z.string().min(4, { message: "Year is required" }),
  type: z.string({ required_error: "Vehicle type is required" }),
  color: z.string().min(3, { message: "Color is required" }),
  chassis_no: z.string().min(3, { message: "Chassis number is required" }),
  email_id: z.string().email({ message: "Invalid email address" }),
  engine_no: z.string().min(3, { message: "Engine number is required" }),
  con_no: z.string().min(5, { message: "Contact number is required" }),
  date_of_regi: z.date({ required_error: "Registration date is required" })
});

type VehicleFormValues = z.infer<typeof vehicleFormSchema>;

const VehicleRegistration = () => {
  const form = useForm<VehicleFormValues>({
    resolver: zodResolver(vehicleFormSchema),
    defaultValues: {
      reg_no: "",
      make: "",
      model: "",
      year: "",
      type: "",
      color: "",
      chassis_no: "",
      email_id: "",
      engine_no: "",
      con_no: "",
    },
  });

  const onSubmit = async (values: VehicleFormValues) => {
    try {
      console.log("Vehicle registration data:", values);
      
      // Send data to backend - the API service will format the data properly
      const response = await registerVehicle(values);
      
      toast.success("Vehicle registered successfully", {
        description: `Vehicle ${values.reg_no} has been registered`,
      });
      form.reset();
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration failed", {
        description: "There was an error saving vehicle data",
      });
    }
  };

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
            Register vehicles in our system with all required information.
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <Card className="border-none shadow-lg rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-teal-light to-teal/20 p-6">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Car className="h-6 w-6" />
                Vehicle Registration Form
              </CardTitle>
              <CardDescription>
                Please fill in all required information to register a vehicle
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="reg_no"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Registration Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter registration number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="make"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Vehicle Make</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter vehicle make (e.g. Toyota)" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="model"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Vehicle Model</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter vehicle model" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="year"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Manufacturing Year</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter year (e.g. 2023)" type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Vehicle Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select vehicle type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="private">Private</SelectItem>
                            <SelectItem value="commercial">Commercial</SelectItem>
                            <SelectItem value="government">Government</SelectItem>
                            <SelectItem value="LMV">LMV (Light Motor Vehicle)</SelectItem>
                            <SelectItem value="HMV">HMV (Heavy Motor Vehicle)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="color"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Vehicle Color</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter vehicle color" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="chassis_no"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Chassis Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter chassis number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email_id"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter email address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="engine_no"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Engine Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter engine number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="con_no"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contact Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter contact number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="date_of_regi"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Registration Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date > new Date()
                                }
                                initialFocus
                                className="p-3 pointer-events-auto"
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-teal to-teal-dark text-white hover:opacity-90"
                  >
                    Register Vehicle
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VehicleRegistration;
