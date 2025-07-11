
import React, { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Search, MoreHorizontal, FileEdit, Trash, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { AddUserDialog } from "./AddUserDialog";

const USERS_DATA = [
  { id: "USR-1001", name: "John Doe", dob: "1985-05-15", contact: "+1 (555) 123-4567", attribute: "Class A", licenseStatus: "valid" },
  { id: "USR-1002", name: "Jane Smith", dob: "1990-08-21", contact: "+1 (555) 234-5678", attribute: "Class B", licenseStatus: "expired" },
  { id: "USR-1003", name: "Michael Johnson", dob: "1978-12-05", contact: "+1 (555) 345-6789", attribute: "Class C", licenseStatus: "valid" },
  { id: "USR-1004", name: "Emily Brown", dob: "1992-03-18", contact: "+1 (555) 456-7890", attribute: "Class A", licenseStatus: "pending" },
  { id: "USR-1005", name: "David Wilson", dob: "1983-07-29", contact: "+1 (555) 567-8901", attribute: "Class B", licenseStatus: "valid" },
  { id: "USR-1006", name: "Sarah Taylor", dob: "1995-01-12", contact: "+1 (555) 678-9012", attribute: "Class D", licenseStatus: "expired" },
  { id: "USR-1007", name: "Robert Anderson", dob: "1975-09-30", contact: "+1 (555) 789-0123", attribute: "Class A", licenseStatus: "valid" },
  { id: "USR-1008", name: "Jennifer Thomas", dob: "1988-06-24", contact: "+1 (555) 890-1234", attribute: "Class C", licenseStatus: "pending" },
];

export function UserTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const { toast } = useToast();

  const filteredUsers = USERS_DATA.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.contact.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (userId: string) => {
    toast({
      title: "User deleted",
      description: `User ${userId} has been deleted.`,
    });
  };

  const handleEdit = (userId: string) => {
    toast({
      title: "Editing user",
      description: `You are now editing user ${userId}.`,
    });
  };

  const getLicenseStatusClass = (status: string) => {
    switch (status) {
      case "valid":
        return "status-badge status-valid";
      case "expired":
        return "status-badge status-expired";
      case "pending":
        return "status-badge status-pending";
      default:
        return "status-badge";
    }
  };

  const getLicenseStatusText = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search users..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button onClick={() => setIsAddUserOpen(true)} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          <Plus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>

      <div className="data-table-container">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[100px]">User ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>DOB</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Attribute</TableHead>
              <TableHead>License</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-10">
                  No users found. Try a different search term.
                </TableCell>
              </TableRow>
            ) : (
              filteredUsers.map((user) => (
                <TableRow key={user.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.dob}</TableCell>
                  <TableCell>{user.contact}</TableCell>
                  <TableCell>{user.attribute}</TableCell>
                  <TableCell>
                    <span className={getLicenseStatusClass(user.licenseStatus)}>
                      {getLicenseStatusText(user.licenseStatus)}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => handleEdit(user.id)}>
                          <FileEdit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDelete(user.id)} className="text-danger">
                          <Trash className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      
      <AddUserDialog isOpen={isAddUserOpen} setIsOpen={setIsAddUserOpen} />
    </div>
  );
}

export default UserTable;
