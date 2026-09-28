import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CalculationResultBlock(params) {
  return (
    <Card className="w-full h-fit py-3 px-3 shadow-sm bg-mauve-50">
      <CardHeader>
        <CardTitle className="pt-2">Required Demand</CardTitle>
        <CardContent className="pt-3 pb-3 px-0">
          <p className="text-3xl font-medium">5,080</p>
        </CardContent>
      </CardHeader>
    </Card>
  );
}
