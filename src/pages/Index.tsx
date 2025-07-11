
import React from "react";
import Sidebar from "@/components/layout/Sidebar";
import StatsCard from "@/components/dashboard/StatsCard";
import UserTable from "@/components/users/UserTable";
import PermitTabs from "@/components/permits/PermitTabs";
import LineChart from "@/components/dashboard/LineChart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, FileCheck, BadgeCheck, MessageCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <main className="p-6">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Transport Management System</h1>
            
            {/* Summary Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatsCard
                title="Total Users"
                value="2,856"
                icon={<Users className="h-5 w-5" />}
                trend={{ value: 12.5, label: "from last month", positive: true }}
                className="card-gradient-1"
              />
              <StatsCard
                title="Expired Licenses"
                value="149"
                icon={<BadgeCheck className="h-5 w-5" />}
                trend={{ value: 8.2, label: "from last month", positive: false }}
                className="card-gradient-2"
              />
              <StatsCard
                title="Valid Permits"
                value="1,423"
                icon={<FileCheck className="h-5 w-5" />}
                trend={{ value: 4.3, label: "from last month", positive: true }}
                className="card-gradient-3"
              />
              <StatsCard
                title="Total Complaints"
                value="78"
                icon={<MessageCircle className="h-5 w-5" />}
                trend={{ value: 12.9, label: "from last month", positive: false }}
                className="card-gradient-4"
              />
            </div>
            
            {/* Activity Chart */}
            <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
              <LineChart />
            </div>
            
            <Tabs defaultValue="users" className="mt-8">
              <TabsList className="grid w-full md:w-[400px] grid-cols-2">
                <TabsTrigger value="users">User Management</TabsTrigger>
                <TabsTrigger value="permits">Permit Management</TabsTrigger>
              </TabsList>
              
              <TabsContent value="users" className="mt-6 animate-fade-in">
                <UserTable />
              </TabsContent>
              
              <TabsContent value="permits" className="mt-6 animate-fade-in">
                <PermitTabs />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
