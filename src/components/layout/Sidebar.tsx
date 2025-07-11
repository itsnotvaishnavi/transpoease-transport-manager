
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  FileCheck, 
  BadgeCheck, 
  Calendar, 
  MessageCircle, 
  BarChart, 
  Menu, 
  X,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarLinkProps {
  to: string;
  icon: React.ElementType;
  label: string;
  isCollapsed: boolean;
  isActive?: boolean;
}

const SidebarLink = ({ to, icon: Icon, label, isCollapsed, isActive = false }: SidebarLinkProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-accent hover:text-accent-foreground",
        isActive ? "bg-accent text-accent-foreground" : "text-sidebar-foreground",
        isCollapsed ? "justify-center" : ""
      )}
    >
      <Icon className="h-5 w-5" />
      {!isCollapsed && <span>{label}</span>}
    </Link>
  );
};

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={cn(
        "flex h-screen flex-col border-r border-border bg-sidebar transition-all duration-300",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      <div className="flex h-14 items-center justify-between border-b border-border px-4">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TransportMS
            </span>
          </div>
        )}
        <button
          onClick={toggleCollapse}
          className="ml-auto rounded-lg p-2 hover:bg-accent/80"
        >
          {isCollapsed ? <Menu size={20} /> : <X size={20} />}
        </button>
      </div>
      <div className="flex-1 overflow-auto py-4">
        <nav className="grid gap-1 px-2">
          <SidebarLink
            to="/"
            icon={LayoutDashboard}
            label="Dashboard"
            isCollapsed={isCollapsed}
            isActive={true}
          />
          <SidebarLink
            to="/users"
            icon={Users}
            label="Users"
            isCollapsed={isCollapsed}
          />
          <SidebarLink
            to="/registrations"
            icon={FileCheck}
            label="Registrations"
            isCollapsed={isCollapsed}
          />
          <SidebarLink
            to="/licenses"
            icon={BadgeCheck}
            label="Licenses"
            isCollapsed={isCollapsed}
          />
          <SidebarLink
            to="/permits"
            icon={Calendar}
            label="Permits"
            isCollapsed={isCollapsed}
          />
          <SidebarLink
            to="/renewals"
            icon={Calendar}
            label="Renewals"
            isCollapsed={isCollapsed}
          />
          <SidebarLink
            to="/complaints"
            icon={MessageCircle}
            label="Complaints"
            isCollapsed={isCollapsed}
          />
          <SidebarLink
            to="/reports"
            icon={BarChart}
            label="Reports"
            isCollapsed={isCollapsed}
          />
        </nav>
      </div>
      <div className="border-t border-border p-4">
        <button 
          className={cn(
            "flex w-full items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-primary hover:bg-primary/20",
            isCollapsed ? "justify-center" : ""
          )}
        >
          <LogOut size={18} />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
