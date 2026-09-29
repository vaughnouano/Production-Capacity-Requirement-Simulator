import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import SummaryText from "@/features/capacity-calculator/components/SummaryText";

function ResultStat({ title, value }) {
  return (
    <Card className="w-full h-fit py-3 px-3 shadow-sm bg-mauve-50">
      <CardHeader>
        <CardTitle className="pt-2">{title}</CardTitle>
        <CardContent className="pt-3 pb-3 px-0">
          <p className="text-3xl font-medium">{value}</p>
        </CardContent>
      </CardHeader>
    </Card>
  );
}

export default function CalculationResultPanel({ result }) {
  const hasResult = Boolean(result);

  return (
    <Card className="max-w-[550px] w-full h-fit">
      <CardHeader>
        <CardTitle>Calculation Result</CardTitle>
        <CardAction>Icon</CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 border-t p-4 ">
        <Card className="w-full py-6 px-3 shadow-sm bg-mauve-50">
          <CardHeader>
            <CardTitle>Estimated Capacity</CardTitle>
            <CardContent className="pt-6 pb-3 px-0 ">
              <p className="text-3xl font-medium">
                {hasResult ? result.totalCapacity.toLocaleString() : "—"}
              </p>
            </CardContent>
          </CardHeader>
        </Card>

        <div className="flex flex-row gap-4">
          <ResultStat
            title="Required Demand"
            value={hasResult ? result.requiredDemand.toLocaleString() : "—"}
          />
          <ResultStat
            title="Internal Capacity"
            value={hasResult ? result.internalCapacity.toLocaleString() : "—"}
          />
        </div>

        <div className="flex flex-row gap-4">
          <ResultStat
            title="Subcon Capacity"
            value={hasResult ? result.subconCapacity.toLocaleString() : "—"}
          />
          <ResultStat
            title="Capacity Gap"
            value={hasResult ? result.capacityGap.toLocaleString() : "—"}
          />
        </div>

        <div className="flex flex-row gap-4">
          <ResultStat
            title="Utilization (Total)"
            value={hasResult ? `${result.utilization.toFixed(1)}%` : "—"}
          />
          <ResultStat
            title="Required Operators"
            value={hasResult ? result.requiredOperators : "—"}
          />
        </div>

        <ResultStat
          title="Status"
          value={
            hasResult
              ? result.status === "meets-demand"
                ? "Meets Demand"
                : "Shortage"
              : "—"
          }
        />
      </CardContent>
      <CardFooter className=" border-0 bg-mauve-50">
        <SummaryText summary={hasResult ? result.summary : null} />
      </CardFooter>
    </Card>
  );
}
