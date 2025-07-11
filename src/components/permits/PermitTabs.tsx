
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const VALID_PERMITS = [
  { id: "PMT-2001", user: "John Doe", type: "Commercial", issued: "2023-06-10", expires: "2025-06-10", status: "valid" },
  { id: "PMT-2003", user: "Michael Johnson", type: "Heavy Vehicle", issued: "2023-08-15", expires: "2025-08-15", status: "valid" },
  { id: "PMT-2005", user: "David Wilson", type: "Transport", issued: "2023-09-22", expires: "2024-09-22", status: "valid" },
  { id: "PMT-2007", user: "Robert Anderson", type: "Commercial", issued: "2023-11-05", expires: "2025-11-05", status: "valid" },
];

const EXPIRED_PERMITS = [
  { id: "PMT-2002", user: "Jane Smith", type: "Transport", issued: "2022-01-15", expires: "2024-01-15", status: "expired" },
  { id: "PMT-2004", user: "Emily Brown", type: "Commercial", issued: "2022-05-08", expires: "2024-05-08", status: "expired" },
  { id: "PMT-2006", user: "Sarah Taylor", type: "Heavy Vehicle", issued: "2022-03-12", expires: "2024-03-12", status: "expired" },
  { id: "PMT-2008", user: "Jennifer Thomas", type: "Transport", issued: "2022-07-25", expires: "2024-04-25", status: "expired" },
];

const PermitTable = ({ permits, searchQuery }: { permits: any[], searchQuery: string }) => {
  const filteredPermits = permits.filter(
    permit =>
      permit.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      permit.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      permit.type.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="data-table-container">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Permit ID</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Issued Date</TableHead>
            <TableHead>Expiry Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPermits.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-10">
                No permits found. Try a different search term.
              </TableCell>
            </TableRow>
          ) : (
            filteredPermits.map((permit) => (
              <TableRow key={permit.id} className="hover:bg-muted/50">
                <TableCell className="font-medium">{permit.id}</TableCell>
                <TableCell>{permit.user}</TableCell>
                <TableCell>{permit.type}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                    {permit.issued}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                    {permit.expires}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      permit.status === "valid"
                        ? "bg-success/20 text-success hover:bg-success/20 hover:text-success"
                        : "bg-danger/20 text-danger hover:bg-danger/20 hover:text-danger"
                    }
                  >
                    {permit.status === "valid" ? "Valid" : "Expired"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export function PermitTabs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("valid");
  
  return (
    <div className="space-y-4">
      <div className="relative w-full sm:w-72">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search permits..."
          className="pl-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <Tabs defaultValue="valid" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full md:w-[400px] grid-cols-2 mb-4">
          <TabsTrigger value="valid" className="data-[state=active]:bg-success/20 data-[state=active]:text-success">
            Valid Permits
          </TabsTrigger>
          <TabsTrigger value="expired" className="data-[state=active]:bg-danger/20 data-[state=active]:text-danger">
            Expired Permits
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="valid" className="animate-fade-in">
          <PermitTable permits={VALID_PERMITS} searchQuery={searchQuery} />
        </TabsContent>
        
        <TabsContent value="expired" className="animate-fade-in">
          <PermitTable permits={EXPIRED_PERMITS} searchQuery={searchQuery} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default PermitTabs;
