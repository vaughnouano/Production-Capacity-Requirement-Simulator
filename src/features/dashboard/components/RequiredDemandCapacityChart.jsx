"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { CardContent, Card } from "@/components/ui/card";

const chartData = [
  { name: "Required Demand", value: 50000, fill: "#3b82f6" },
  { name: "Estimated Capacity", value: 45900, fill: "#10b981" },
];

const chartConfig = {
  value: {
    label: "Units",
  },
};

export default function RequiredDemandCapacityChart() {
  return (
    <Card>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <Bar dataKey="value" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
