
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import UserRegistration from "./pages/UserRegistration";
import VehicleRegistration from "./pages/VehicleRegistration";
import LicenseApplication from "./pages/LicenseApplication";
import PermitManagement from "./pages/PermitManagement";
import PermitRenewal from "./pages/PermitRenewal";
import ComplaintSubmission from "./pages/ComplaintSubmission";
import License from "./pages/License";
import Complaints from "./pages/Complaints";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import { AuthProvider } from "./context/AuthContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/user-registration" element={<UserRegistration />} />
            <Route path="/vehicle-registration" element={<VehicleRegistration />} />
            <Route path="/license-application" element={<LicenseApplication />} />
            <Route path="/license" element={<License />} />
            <Route path="/permit-management" element={<PermitManagement />} />
            <Route path="/permit-renewal" element={<PermitRenewal />} />
            <Route path="/complaint-submission" element={<ComplaintSubmission />} />
            <Route path="/complaints" element={<Complaints />} />
            <Route path="/registration" element={<VehicleRegistration />} />
            <Route path="/permits" element={<PermitManagement />} />
            <Route path="/dashboard" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
