"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { format } from "date-fns";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const items = [
  { label: "Microchip-001", value: "1" },
  { label: "Microchip-020", value: "2" },
  { label: "Microchip-300", value: "3" },
];

export default function ProductPeriodHeader(params) {
  const [startDate, setStartDate] = React.useState();
  const [endDate, setEndDate] = React.useState();
  return (
    <div className="flex justify-between">
      {/* ==================== LEFT-PANEL ==================== */}
      <div className="flex flex-col gap-6">
        {/* Header title */}
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold">Vivo TWS Earbuds</h1>
          <p className="text-lg text-neutral-400">
            Production Requirement for:
          </p>
        </div>
        <div>
          <Select items={items}>
            <SelectTrigger className="w-[320px]">
              <SelectValue placeholder="Select product" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {items.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* ==================== RIGHT-PANEL ==================== */}
      <div className="h-full flex flex-col justify-end">
        <Card>
          <CardContent className="flex flex-col gap-4">
            {/* START DATE */}
            <Popover>
              <PopoverTrigger
                render={
                  <Button
                    variant={"outline"}
                    data-empty={!startDate}
                    className="w-[212px] justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
                  >
                    {startDate ? (
                      format(startDate, "PPP")
                    ) : (
                      <span>Start Date</span>
                    )}
                    <ChevronDownIcon data-icon="inline-end" />
                  </Button>
                }
              />
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={setStartDate}
                  defaultMonth={startDate}
                />
              </PopoverContent>
            </Popover>

            {/* END DATE */}
            <Popover>
              <PopoverTrigger
                render={
                  <Button
                    variant={"outline"}
                    data-empty={!endDate}
                    className="w-[212px] justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
                  >
                    {endDate ? format(endDate, "PPP") : <span>End Date</span>}
                    <ChevronDownIcon data-icon="inline-end" />
                  </Button>
                }
              />
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={setEndDate}
                  defaultMonth={endDate}
                />
              </PopoverContent>
            </Popover>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
