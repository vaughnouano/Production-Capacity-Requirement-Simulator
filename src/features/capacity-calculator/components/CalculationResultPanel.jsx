import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import SummaryText from "@/features/capacity-calculator/components/SummaryText";

export default function CalculationResultPanel() {
  return (
    <Card className="max-w-[550px] w-full h-fit">
      <CardHeader>
        <CardTitle>Calculation Result</CardTitle>
        <CardAction>Icon</CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 border-t p-4 ">
        {/* Estimated Capacity */}
        <Card className="w-full py-6 px-3 shadow-sm bg-mauve-50">
          <CardHeader>
            <CardTitle>Estimated Capacity</CardTitle>
            <CardContent className="pt-6 pb-3 px-0 ">
              <p className="text-3xl font-medium">50,000</p>
            </CardContent>
          </CardHeader>
        </Card>
        {/*  */}
        <div className="flex flex-row gap-4">
          {/* Required Demand */}
          <Card className="w-full h-fit py-3 px-3 shadow-sm bg-mauve-50">
            <CardHeader>
              <CardTitle className="pt-2">Required Demand</CardTitle>
              <CardContent className="pt-3 pb-3 px-0">
                <p className="text-3xl font-medium">5,080</p>
              </CardContent>
            </CardHeader>
          </Card>
          {/* Internal Capacity*/}
          <Card className="w-full h-fit py-3 px-3 shadow-sm bg-mauve-50">
            <CardHeader>
              <CardTitle className="pt-2">Internal Capacity</CardTitle>
              <CardContent className="pt-3 pb-3 px-0">
                <p className="text-3xl font-medium">90.7</p>
              </CardContent>
            </CardHeader>
          </Card>
        </div>
        <div className="flex flex-row gap-4">
          {/* Subcon capacity */}
          <Card className="w-full h-fit py-3 px-3 shadow-sm bg-mauve-50">
            <CardHeader>
              <CardTitle className="pt-2">Subcon capacityy</CardTitle>
              <CardContent className="pt-3 pb-3 px-0">
                <p className="text-3xl font-medium">5,080</p>
              </CardContent>
            </CardHeader>
          </Card>
          {/* Capacity Gap */}
          <Card className="w-full h-fit py-3 px-3 shadow-sm bg-mauve-50">
            <CardHeader>
              <CardTitle className="pt-2">Capacity Gap</CardTitle>
              <CardContent className="pt-3 pb-3 px-0">
                <p className="text-3xl font-medium">90.7</p>
              </CardContent>
            </CardHeader>
          </Card>
        </div>
        <div className="flex flex-row gap-4">
          {/* Utilization (Total) */}
          <Card className="w-full h-fit py-3 px-3 shadow-sm bg-mauve-50">
            <CardHeader>
              <CardTitle className="pt-2">Utilization (Total)</CardTitle>
              <CardContent className="pt-3 pb-3 px-0">
                <p className="text-3xl font-medium">5,080</p>
              </CardContent>
            </CardHeader>
          </Card>
          {/* Status */}
          <Card className="w-full h-fit py-3 px-3 shadow-sm bg-mauve-50">
            <CardHeader>
              <CardTitle className="pt-2">Status</CardTitle>
              <CardContent className="pt-3 pb-3 px-0">
                <p className="text-3xl font-medium">90.7</p>
              </CardContent>
            </CardHeader>
          </Card>
        </div>
        {/*  */}
      </CardContent>
      {/*  */}
      <CardFooter className=" border-0 bg-mauve-50">
        <SummaryText />
      </CardFooter>
    </Card>
  );
}
