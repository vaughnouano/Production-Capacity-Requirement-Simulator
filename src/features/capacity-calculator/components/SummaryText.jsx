import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SummaryText({ summary }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          {summary ??
            "Enter your production details and click Calculate to see a summary."}
        </p>
      </CardContent>
    </Card>
  );
}
