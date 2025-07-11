
import React from "react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    label: string;
    positive?: boolean;
  };
  className?: string;
}

export function StatsCard({ title, value, icon, trend, className }: StatsCardProps) {
  return (
    <div className={cn("card-dashboard", className)}>
      <div className="icon-card">{icon}</div>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
        {trend && (
          <div className="mt-1 flex items-center gap-1 text-xs font-medium">
            {trend.positive ? (
              <span className="text-success">↑</span>
            ) : (
              <span className="text-danger">↓</span>
            )}
            <span
              className={cn(
                trend.positive ? "text-success" : "text-danger"
              )}
            >
              {trend.value}%
            </span>
            <span className="text-muted-foreground">{trend.label}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default StatsCard;
