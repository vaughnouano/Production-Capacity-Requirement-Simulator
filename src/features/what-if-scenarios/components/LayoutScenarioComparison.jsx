import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import ScenarioComparisonTable from "./ScenarioComparisonTable";

export default function LayoutScenarioComparison(params) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Scenario Comparison</CardTitle>
        <CardDescription>
          Compare the baseline width different what-if scenarios.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScenarioComparisonTable />
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button variant="default">Add Scenario</Button>
      </CardFooter>
    </Card>
  );
}
