
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format, addYears } from "date-fns";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
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
import { CalendarIcon, FileCheck } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock Vehicles for dropdown (in a real app, this would come from the MySQL database)
const MOCK_VEHICLES = [
  { reg_no: "REG-1001", name: "Toyota Camry" },
  { reg_no: "REG-1002", name: "Honda Accord" },
  { reg_no: "REG-1003", name: "Ford F-150" },
  { reg_no: "REG-1004", name: "Tesla Model 3" },
];

// Mock Permits for dropdown (in a real app, this would come from the MySQL database)
const MOCK_PERMITS = [
  { permit_no: "PRM-1001", type: "Oversize Load" },
  { permit_no: "PRM-1002", type: "Hazardous Materials" },
  { permit_no: "PRM-1003", type: "Interstate Operation" },
  { permit_no: "PRM-1004", type: "Special Events" },
];

const permitRenewalFormSchema = z.object({
  reg_no: z.string({ required_error: "Vehicle registration is required" }),
  permit_no: z.string({ required_error: "Permit number is required" }),
  renew_date: z.date().default(new Date()),
  valid_date: z.date({ required_error: "Valid date is required" }),
});

type PermitRenewalFormValues = z.infer<typeof permitRenewalFormSchema>;

const PermitRenewal = () => {
  const defaultValidDate = addYears(new Date(), 1);

  const form = useForm<PermitRenewalFormValues>({
    resolver: zodResolver(permitRenewalFormSchema),
    defaultValues: {
      renew_date: new Date(),
      valid_date: defaultValidDate,
    },
  });

  const onSubmit = async (values: PermitRenewalFormValues) => {
    try {
      // In a real app, this would send data to MySQL database
      console.log("Permit renewal data:", values);
      
      toast.success("Permit renewed successfully", {
        description: "Permit renewal data has been saved to the database",
      });
      form.reset({
        ...form.getValues(),
        valid_date: defaultValidDate,
      });
    } catch (error) {
      console.error("Permit renewal error:", error);
      toast.error("Permit renewal failed", {
        description: "There was an error saving permit renewal data",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-lavender to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Permit <span className="bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">Renewal</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Renew existing transportation permits with extended validity periods.
          </p>
        </div>
      </section>

      {/* Permit Renewal Form */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <Card className="border-none shadow-lg rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-lavender/70 to-purple-300/20 p-6">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <FileCheck className="h-6 w-6 text-purple-600" />
                Renew Existing Permit
              </CardTitle>
              <CardDescription>
                Renew an existing permit by selecting the vehicle and permit number
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
                          <FormLabel>Vehicle Registration</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select vehicle" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {MOCK_VEHICLES.map(vehicle => (
                                <SelectItem key={vehicle.reg_no} value={vehicle.reg_no}>
                                  {vehicle.name} ({vehicle.reg_no})
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="permit_no"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Permit Number</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select permit" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {MOCK_PERMITS.map(permit => (
                                <SelectItem key={permit.permit_no} value={permit.permit_no}>
                                  {permit.permit_no} ({permit.type})
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="renew_date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Renewal Date</FormLabel>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className="w-full pl-3 text-left font-normal opacity-50"
                              disabled
                            >
                              {format(new Date(), "PPP")}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="valid_date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Valid Until</FormLabel>
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
                                  date <= new Date()
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
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:opacity-90"
                  >
                    Renew Permit
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

export default PermitRenewal;
