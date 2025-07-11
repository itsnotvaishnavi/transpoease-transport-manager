
import React from "react";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Sample data for transport activities
const data = [
  { month: "Jan", shipments: 65, vehicles: 28, drivers: 42 },
  { month: "Feb", shipments: 59, vehicles: 32, drivers: 45 },
  { month: "Mar", shipments: 80, vehicles: 40, drivers: 50 },
  { month: "Apr", shipments: 81, vehicles: 45, drivers: 53 },
  { month: "May", shipments: 56, vehicles: 39, drivers: 48 },
  { month: "Jun", shipments: 55, vehicles: 35, drivers: 42 },
  { month: "Jul", shipments: 40, vehicles: 30, drivers: 37 },
  { month: "Aug", shipments: 65, vehicles: 42, drivers: 50 },
  { month: "Sep", shipments: 73, vehicles: 45, drivers: 52 },
  { month: "Oct", shipments: 82, vehicles: 47, drivers: 56 },
  { month: "Nov", shipments: 78, vehicles: 43, drivers: 51 },
  { month: "Dec", shipments: 90, vehicles: 50, drivers: 60 },
];

export function LineChart() {
  return (
    <Card className="border border-border/40 shadow-md">
      <CardHeader>
        <CardTitle className="text-lg">Transport Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <RechartsLineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="month" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                borderRadius: "0.5rem",
                border: "1px solid #e2e8f0",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
              }}
            />
            <Legend verticalAlign="top" height={36} />
            <Line
              type="monotone"
              dataKey="shipments"
              stroke="#3b82f6"
              strokeWidth={2}
              activeDot={{ r: 8 }}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="vehicles"
              stroke="#8b5cf6"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="drivers"
              stroke="#ef4444"
              strokeWidth={2}
              dot={false}
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export default LineChart;
