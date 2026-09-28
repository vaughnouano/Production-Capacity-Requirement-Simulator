import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const scenarios = [
  {
    Scenario: "Baseline",
    Machines: "5",
    HoursPerDay: "8",
    Efficiency: "85%",
    EstimatedCapacity: "45,900",
    Gap: "-4,100",
    Utilization: "92%",
    Result: "Shortfall",
    Action: "Add 1 machine",
    badge: "default",
  },
  {
    Scenario: "Add Machine",
    Machines: "6",
    HoursPerDay: "8",
    Efficiency: "85%",
    EstimatedCapacity: "55,080",
    Gap: "+5,080",
    Utilization: "83%",
    Result: "Balanced",
    Action: "Keep",
    badge: "secondary",
  },
  {
    Scenario: "Longer Shift",
    Machines: "5",
    HoursPerDay: "10",
    Efficiency: "85%",
    EstimatedCapacity: "57,375",
    Gap: "+7,375",
    Utilization: "78%",
    Result: "Surplus",
    Action: "Review cost",
    badge: "outline",
  },
  {
    Scenario: "Higher Efficiency",
    Machines: "5",
    HoursPerDay: "8",
    Efficiency: "92%",
    EstimatedCapacity: "49,680",
    Gap: "-320",
    Utilization: "99%",
    Result: "Tight",
    Action: "Monitor",
    badge: "outline",
  },
  {
    Scenario: "Lean Crew",
    Machines: "4",
    HoursPerDay: "8",
    Efficiency: "85%",
    EstimatedCapacity: "36,720",
    Gap: "-13,280",
    Utilization: "115%",
    Result: "Overloaded",
    Action: "Add capacity",
    badge: "destructive",
  },
  {
    Scenario: "Night Shift",
    Machines: "5",
    HoursPerDay: "12",
    Efficiency: "80%",
    EstimatedCapacity: "54,000",
    Gap: "+4,000",
    Utilization: "82%",
    Result: "Balanced",
    Action: "Keep",
    badge: "secondary",
  },
  {
    Scenario: "Worst Case",
    Machines: "3",
    HoursPerDay: "6",
    Efficiency: "75%",
    EstimatedCapacity: "20,250",
    Gap: "-29,750",
    Utilization: "140%",
    Result: "Critical",
    Action: "Escalate",
    badge: "destructive",
  },
];

export default function ScenarioComparisonTable() {
  return (
    <Table>
      <TableCaption>
        Comparison of your saved production scenarios.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[140px]">Scenario</TableHead>
          <TableHead>Machines</TableHead>
          <TableHead>Hours/Day</TableHead>
          <TableHead>Efficiency</TableHead>
          <TableHead>Estimated Capacity</TableHead>
          <TableHead>Gap</TableHead>
          <TableHead>Utilization</TableHead>
          <TableHead>Result</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {scenarios.map((s, i) => (
          <TableRow key={`${s.Scenario}-${i}`}>
            <TableCell className="font-medium">{s.Scenario}</TableCell>
            <TableCell>{s.Machines}</TableCell>
            <TableCell>{s.HoursPerDay}</TableCell>
            <TableCell>{s.Efficiency}</TableCell>
            <TableCell>{s.EstimatedCapacity}</TableCell>
            <TableCell>{s.Gap}</TableCell>
            <TableCell>{s.Utilization}</TableCell>
            <TableCell>
              <Badge variant={s.badge}>{s.Result}</Badge>
            </TableCell>
            <TableCell className="text-right">{s.Action}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
