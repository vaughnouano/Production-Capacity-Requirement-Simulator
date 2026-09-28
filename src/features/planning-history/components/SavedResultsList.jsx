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
import { Button } from "@/components/ui/button";

const savedResults = [
  {
    date: "Nov 3, 2024",
    product: "Part A",
    demand: "50,000",
    period: "Week 1",
    scenarioCount: 4,
    status: "Shortage",
    createdBy: "John Planner",
  },
  {
    date: "Oct 28, 2024",
    product: "Part B",
    demand: "120,000",
    period: "Month 1",
    scenarioCount: 3,
    status: "Meets Demand",
    createdBy: "John Planner",
  },
  {
    date: "Oct 20, 2024",
    product: "Part C",
    demand: "80,000",
    period: "Week 1",
    scenarioCount: 2,
    status: "Meets Demand",
    createdBy: "Maria Santos",
  },
  {
    date: "Oct 15, 2024",
    product: "Part A",
    demand: "45,000",
    period: "Week 1",
    scenarioCount: 3,
    status: "Shortage",
    createdBy: "John Planner",
  },
  {
    date: "Oct 10, 2024",
    product: "Part D",
    demand: "200,000",
    period: "Month 1",
    scenarioCount: 2,
    status: "Meets Demand",
    createdBy: "Maria Santos",
  },
];

// Map status text → badge styling.
// "Shortage" = red (destructive), "Meets Demand" = green.
// If your Badge component doesn't have a green variant, see the note below.
function StatusBadge({ status }) {
  const isShortage = status === "Shortage";
  return (
    <Badge
      variant={isShortage ? "destructive" : "success"}
      className={
        isShortage
          ? "bg-red-50 text-red-700 border-red-200"
          : "bg-green-50 text-green-700 border-green-200"
      }
    >
      {status}
    </Badge>
  );
}

export default function SavedResultsList() {
  return (
    <Table>
      <TableCaption>Your saved production scenarios.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Product / Part</TableHead>
          <TableHead>Demand</TableHead>
          <TableHead>Period</TableHead>
          <TableHead>Scenario Count</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Created By</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {savedResults.map((r, i) => (
          <TableRow key={`${r.date}-${r.product}-${i}`}>
            <TableCell className="font-medium whitespace-nowrap">
              {r.date}
            </TableCell>
            <TableCell>{r.product}</TableCell>
            <TableCell>{r.demand}</TableCell>
            <TableCell>{r.period}</TableCell>
            <TableCell>{r.scenarioCount}</TableCell>
            <TableCell>
              <StatusBadge status={r.status} />
            </TableCell>
            <TableCell>{r.createdBy}</TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="icon" aria-label="Row actions">
                {/* three-dot ellipsis */}
                <span className="text-lg leading-none">…</span>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
