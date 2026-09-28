import { Card, CardContent } from "@/components/ui/card";
import CalculationResultBlock from "./CalculationResultBlock";

export default function HeaderCalculationResult(params) {
  return (
    <Card className="w-full h-fit p-2">
      <CardContent className="w-full px-0 flex flex-row gap-2">
        <CalculationResultBlock />
        <CalculationResultBlock />
        <CalculationResultBlock />
        <CalculationResultBlock />
      </CardContent>
    </Card>
  );
}
