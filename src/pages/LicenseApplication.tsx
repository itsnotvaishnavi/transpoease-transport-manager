import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format, addYears } from "date-fns";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { toast } from "sonner";

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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CalendarIcon, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock Users for dropdown (in a real app, this would come from the MySQL database)
const MOCK_USERS = [
  { id: "USR-1001", name: "John Doe" },
  { id: "USR-1002", name: "Jane Smith" },
  { id: "USR-1003", name: "Michael Johnson" },
  { id: "USR-1004", name: "Emily Brown" },
];

const licenseFormSchema = z.object({
  license_no: z.string().min(3, { message: "License number is required" }),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  address: z.string().min(5, { message: "Address must be at least 5 characters" }),
  con_no: z.string().min(5, { message: "Contact number is required" }),
  dob: z.date({ required_error: "Date of birth is required" }),
  qualification: z.string().min(2, { message: "Qualification is required" }),
  valid_date: z.date({ required_error: "Valid date is required" }),
  gender: z.string({ required_error: "Gender selection is required" }),
  vehicle_type: z.string({ required_error: "Vehicle type is required" }),
  u_id: z.string({ required_error: "User ID is required" }),
});

type LicenseFormValues = z.infer<typeof licenseFormSchema>;

const LicenseApplication = () => {
  const defaultValidDate = addYears(new Date(), 5);

  const form = useForm<LicenseFormValues>({
    resolver: zodResolver(licenseFormSchema),
    defaultValues: {
      license_no: `LIC-${Math.floor(Math.random() * 100000)}`,
      name: "",
      address: "",
      con_no: "",
      qualification: "",
      valid_date: defaultValidDate,
      gender: "",
      vehicle_type: "",
    },
  });

  const onSubmit = async (values: LicenseFormValues) => {
    try {
      // This would send data to MySQL database in production
      console.log("License application data to be stored in MySQL:", values);
      
      toast.success("License application submitted successfully", {
        description: "Your data will be saved to the MySQL database",
      });
      
      // Reset form with new license number
      form.reset({
        license_no: `LIC-${Math.floor(Math.random() * 100000)}`,
        name: "",
        address: "",
        con_no: "",
        dob: undefined,
        qualification: "",
        valid_date: defaultValidDate,
        gender: "",
        vehicle_type: "",
        u_id: "",
      });
    } catch (error) {
      console.error("License application error:", error);
      toast.error("Application failed", {
        description: "There was an error saving license data to MySQL",
      });
    }
  };

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
            Apply for a new transportation license with all required information.
          </p>
        </div>
      </section>

      {/* License Application Form */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <Card className="border-none shadow-lg rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-coral-light to-coral/20 p-6">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <FileText className="h-6 w-6" />
                License Application Form
              </CardTitle>
              <CardDescription>
                Please fill in all required information to apply for a license. This data will be stored in the MySQL database.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="license_no"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>License Number</FormLabel>
                          <FormControl>
                            <Input readOnly {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
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
                      name="dob"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Date of Birth</FormLabel>
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
                                  date > new Date() || date < new Date("1900-01-01")
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
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="qualification"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Qualification</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter qualification" {...field} />
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
                  
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Gender</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-row space-x-4"
                          >
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="male" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Male
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="female" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Female
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="other" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Other
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="vehicle_type"
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
                              <SelectItem value="2wheeler">Two Wheeler</SelectItem>
                              <SelectItem value="4wheeler">Four Wheeler</SelectItem>
                              <SelectItem value="commercial">Commercial</SelectItem>
                              <SelectItem value="heavy">Heavy Vehicle</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="u_id"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>User ID</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select user" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {MOCK_USERS.map(user => (
                                <SelectItem key={user.id} value={user.id}>
                                  {user.name} ({user.id})
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-coral to-coral-dark text-white hover:opacity-90"
                  >
                    Submit Application
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

export default LicenseApplication;
