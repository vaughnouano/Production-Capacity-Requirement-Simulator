import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SummaryText(params) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          Internal capacity is 45,900 units, with additional 10,000 units from
          the subcontractor. Total capacity meets the required demand with a
          surplus of 5,900 units.
        </p>
      </CardContent>
    </Card>
  );
}
